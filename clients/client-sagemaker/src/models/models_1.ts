// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import {
  ActionStatus,
  AppInstanceType,
  ArtifactSourceIdType,
  AthenaResultCompressionType,
  AthenaResultFormat,
  AutoMLChannelType,
  AutoMLMetricEnum,
  AutoMLS3DataType,
  AwsManagedHumanLoopRequestSource,
  BatchStrategy,
  DataCatalogConfig,
  DatasetDefinition,
  DesiredWeightAndCapacity,
  Device,
  DomainSettingsForUpdate,
  DriftCheckBias,
  DriftCheckExplainability,
  DriftCheckModelDataQuality,
  DriftCheckModelQuality,
  Edge,
  EndpointInput,
  EndpointInputConfiguration,
  EndpointSummary,
  ExperimentSummary,
  Explainability,
  FeatureGroupSummary,
  FileSystemConfig,
  FileSystemDataSource,
  FlowDefinitionSummary,
  GitConfigForUpdate,
  HumanLoopActivationConditionsConfig,
  HumanTaskUiSummary,
  HyperParameterAlgorithmSpecification,
  HyperParameterSpecification,
  HyperParameterTrainingJobSummary,
  HyperParameterTuningJobObjective,
  HyperParameterTuningJobSummary,
  Image,
  ImageVersion,
  InferenceRecommendationsJob,
  JupyterServerAppSettings,
  KernelGatewayAppSettings,
  KernelSpec,
  LabelingJobDataAttributes,
  LabelingJobDataSource,
  LabelingJobForWorkteamSummary,
  LabelingJobResourceConfig,
  LabelingJobSummary,
  LineageGroupSummary,
  MemberDefinition,
  ModelApprovalStatus,
  ModelDataQuality,
  ModelInput,
  ModelLatencyThreshold,
  ModelMetadataSearchExpression,
  ModelMetadataSummary,
  ModelPackageGroupSummary,
  ModelPackageSummary,
  ModelPackageValidationProfile,
  ModelQuality,
  ModelSummary,
  MonitoringClusterConfig,
  MonitoringConstraintsResource,
  MonitoringExecutionSummary,
  MonitoringGroundTruthS3Input,
  MonitoringJobDefinition,
  MonitoringJobDefinitionSummary,
  MonitoringOutput,
  MonitoringScheduleSummary,
  MonitoringStatisticsResource,
  NotebookInstanceLifecycleConfigSummary,
  NotebookInstanceSummary,
  NotificationConfiguration,
  OidcConfig,
  OnlineStoreSecurityConfig,
  OutputParameter,
  Parameter,
  ParameterRanges,
  ParentHyperParameterTuningJob,
  PipelineExecutionStep,
  PipelineExecutionSummary,
  PipelineSummary,
  ProcessingClusterConfig,
  ProcessingJobSummary,
  ProcessingOutput,
  ProcessingS3Input,
  ProductionVariantCoreDumpConfig,
  ProductionVariantServerlessConfig,
  ProfilerConfigForUpdate,
  ProjectSummary,
  ProvisioningParameter,
  PublicWorkforceTaskPrice,
  QueryFilters,
  RecommendationJobCompiledOutputConfig,
  RecommendationJobResourceLimit,
  RecordWrapper,
  RenderableTask,
  RenderingError,
  RepositoryAuthConfig,
  ResourceConfig,
  ResourceLimits,
  RetryStrategy,
  RSessionAppSettings,
  RStudioServerProAppSettings,
  RStudioServerProDomainSettings,
  S3DataSource,
  S3StorageConfig,
  ScheduleConfig,
  SearchExpression,
  SearchRecord,
  ServiceCatalogProvisioningUpdateDetails,
  SharingSettings,
  SourceAlgorithm,
  SourceIpConfig,
  StudioLifecycleConfigDetails,
  SubscribedWorkteam,
  TargetPlatform,
  TensorBoardAppSettings,
  TrafficPattern,
  TrainingInstanceType,
  TrainingJobSummary,
  TransformInput,
  TransformJobSummary,
  TransformOutput,
  TransformResources,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  TrialComponentSummary,
  TrialSummary,
  TuningJobCompletionCriteria,
  UiConfig,
  UserProfileDetails,
  VariantProperty,
  Vertex,
  Workforce,
  Workteam,
} from "./models_2";
import {
  _InstanceType,
  CapacitySizeType,
  CaptureMode,
  ContainerMode,
  Direction,
  EdgePresetDeploymentType,
  EndpointSortKey,
  EndpointStatus,
  ExecutionStatus,
  FeatureGroupSortBy,
  FeatureGroupSortOrder,
  FeatureGroupStatus,
  FeatureType,
  Framework,
  HyperParameterScalingType,
  HyperParameterTuningJobSortByOptions,
  HyperParameterTuningJobStatus,
  HyperParameterTuningJobStrategyType,
  HyperParameterTuningJobWarmStartType,
  ImageSortBy,
  ImageSortOrder,
  ImageVersionSortBy,
  ImageVersionSortOrder,
  InferenceExecutionMode,
  LabelingJobStatus,
  ListInferenceRecommendationsJobsSortBy,
  ListLabelingJobsForWorkteamSortByOptions,
  ListWorkforcesSortByOptions,
  ListWorkteamsSortByOptions,
  ModelCacheSetting,
  ModelPackageGroupSortBy,
  ModelPackageSortBy,
  ModelPackageType,
  ModelSortKey,
  MonitoringExecutionSortKey,
  MonitoringJobDefinitionSortKey,
  MonitoringProblemType,
  MonitoringScheduleSortKey,
  MonitoringType,
  NotebookInstanceLifecycleConfigSortKey,
  NotebookInstanceLifecycleConfigSortOrder,
  NotebookInstanceSortKey,
  NotebookInstanceSortOrder,
  NotebookInstanceStatus,
  OfflineStoreStatusValue,
  OrderKey,
  ProcessingInstanceType,
  ProcessingJobStatus,
  ProductionVariantAcceleratorType,
  ProjectSortBy,
  ProjectSortOrder,
  RecommendationJobStatus,
  RepositoryAccessMode,
  ResourceType,
  RootAccess,
  ScheduleStatus,
  SearchSortOrder,
  SortBy,
  SortExperimentsBy,
  SortLineageGroupsBy,
  SortOrder,
  SortPipelineExecutionsBy,
  SortPipelinesBy,
  SortTrialComponentsBy,
  SortTrialsBy,
  StudioLifecycleConfigAppType,
  StudioLifecycleConfigSortKey,
  TargetDevice,
  TrafficRoutingConfigType,
  TrainingJobEarlyStoppingType,
  TrainingJobSortByOptions,
  TrainingJobStatus,
  TransformJobStatus,
  UserProfileSortKey,
} from "./models_3";
import { SageMakerServiceException as __BaseException } from "./SageMakerServiceException";

/**
 * <p>A structure describing the source of an action.</p>
 */
export interface ActionSource {
  /**
   * <p>The URI of the source.</p>
   */
  SourceUri: string | undefined;

  /**
   * <p>The type of the source.</p>
   */
  SourceType?: string;

  /**
   * <p>The ID of the source.</p>
   */
  SourceId?: string;
}

export namespace ActionSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActionSource): any => ({
    ...obj,
  });
}

/**
 * <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 */
export class ResourceLimitExceeded extends __BaseException {
  readonly name: "ResourceLimitExceeded" = "ResourceLimitExceeded";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceeded, __BaseException>) {
    super({
      name: "ResourceLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Resource being access is not found.</p>
 */
export class ResourceNotFound extends __BaseException {
  readonly name: "ResourceNotFound" = "ResourceNotFound";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFound, __BaseException>) {
    super({
      name: "ResourceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Describes the Docker container for the model package.</p>
 */
export interface ModelPackageContainerDefinition {
  /**
   * <p>The DNS host name for the Docker container.</p>
   */
  ContainerHostname?: string;

  /**
   * <p>The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.</p>
   *         <p>If you are using your own custom algorithm instead of an algorithm provided by SageMaker,
   *             the inference code must meet SageMaker requirements. SageMaker supports both
   *             <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>.</p>
   */
  Image: string | undefined;

  /**
   * <p>An MD5 hash of the training algorithm that identifies the Docker image used for
   *             training.</p>
   */
  ImageDigest?: string;

  /**
   * <p>The Amazon S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single <code>gzip</code> compressed tar archive
   *             (<code>.tar.gz</code> suffix).</p>
   *         <note>
   *             <p>The model artifacts must be in an S3 bucket that is in the same region as the
   *                 model package.</p>
   *         </note>
   */
  ModelDataUrl?: string;

  /**
   * <p>The Amazon Web Services Marketplace product ID of the model package.</p>
   */
  ProductId?: string;

  /**
   * <p>The environment variables to set in the Docker container. Each key and value in the
   *             <code>Environment</code> string to string map can have length of up to 1024. We
   *             support up to 16 entries in the map.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>A structure with Model Input details.</p>
   */
  ModelInput?: ModelInput;

  /**
   * <p>The machine learning framework of the model package container image.</p>
   */
  Framework?: string;

  /**
   * <p>The framework version of the Model Package Container Image.</p>
   */
  FrameworkVersion?: string;

  /**
   * <p>The name of a pre-trained machine learning benchmarked by
   *            Amazon SageMaker Inference Recommender model that matches your model.
   *            You can find a list of benchmarked models by calling <code>ListModelMetadata</code>.</p>
   */
  NearestModelName?: string;
}

export namespace ModelPackageContainerDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageContainerDefinition): any => ({
    ...obj,
  });
}

export enum ProductionVariantInstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_LARGE = "ml.c4.large",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5D_18XLARGE = "ml.c5d.18xlarge",
  ML_C5D_2XLARGE = "ml.c5d.2xlarge",
  ML_C5D_4XLARGE = "ml.c5d.4xlarge",
  ML_C5D_9XLARGE = "ml.c5d.9xlarge",
  ML_C5D_LARGE = "ml.c5d.large",
  ML_C5D_XLARGE = "ml.c5d.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_LARGE = "ml.c5.large",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
  ML_INF1_24XLARGE = "ml.inf1.24xlarge",
  ML_INF1_2XLARGE = "ml.inf1.2xlarge",
  ML_INF1_6XLARGE = "ml.inf1.6xlarge",
  ML_INF1_XLARGE = "ml.inf1.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5D_12XLARGE = "ml.m5d.12xlarge",
  ML_M5D_24XLARGE = "ml.m5d.24xlarge",
  ML_M5D_2XLARGE = "ml.m5d.2xlarge",
  ML_M5D_4XLARGE = "ml.m5d.4xlarge",
  ML_M5D_LARGE = "ml.m5d.large",
  ML_M5D_XLARGE = "ml.m5d.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_R5D_12XLARGE = "ml.r5d.12xlarge",
  ML_R5D_24XLARGE = "ml.r5d.24xlarge",
  ML_R5D_2XLARGE = "ml.r5d.2xlarge",
  ML_R5D_4XLARGE = "ml.r5d.4xlarge",
  ML_R5D_LARGE = "ml.r5d.large",
  ML_R5D_XLARGE = "ml.r5d.xlarge",
  ML_R5_12XLARGE = "ml.r5.12xlarge",
  ML_R5_24XLARGE = "ml.r5.24xlarge",
  ML_R5_2XLARGE = "ml.r5.2xlarge",
  ML_R5_4XLARGE = "ml.r5.4xlarge",
  ML_R5_LARGE = "ml.r5.large",
  ML_R5_XLARGE = "ml.r5.xlarge",
  ML_T2_2XLARGE = "ml.t2.2xlarge",
  ML_T2_LARGE = "ml.t2.large",
  ML_T2_MEDIUM = "ml.t2.medium",
  ML_T2_XLARGE = "ml.t2.xlarge",
}

export enum TransformInstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
}

/**
 * <p>A structure of additional Inference Specification. Additional Inference Specification
 *             specifies details about inference jobs that can be run with models based on
 *             this model package</p>
 */
export interface AdditionalInferenceSpecificationDefinition {
  /**
   * <p>A unique name to identify the additional inference specification. The name must
   *            be unique within the list of your additional inference specifications for a
   *            particular model package.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the additional Inference specification</p>
   */
  Description?: string;

  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the inference code.</p>
   */
  Containers: ModelPackageContainerDefinition[] | undefined;

  /**
   * <p>A list of the instance types on which a transformation job can be run
   *            or on which an endpoint can be deployed.</p>
   */
  SupportedTransformInstanceTypes?: (TransformInstanceType | string)[];

  /**
   * <p>A list of the instance types that are used to generate inferences in real-time.</p>
   */
  SupportedRealtimeInferenceInstanceTypes?: (ProductionVariantInstanceType | string)[];

  /**
   * <p>The supported MIME types for the input data.</p>
   */
  SupportedContentTypes?: string[];

  /**
   * <p>The supported MIME types for the output data.</p>
   */
  SupportedResponseMIMETypes?: string[];
}

export namespace AdditionalInferenceSpecificationDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdditionalInferenceSpecificationDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>A tag object that consists of a key and an optional value, used to manage metadata
 *             for SageMaker Amazon Web Services resources.</p>
 *         <p>You can add tags to notebook instances, training jobs, hyperparameter tuning jobs,
 *             batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and
 *             endpoints. For more information on adding tags to SageMaker resources, see <a>AddTags</a>.</p>
 *         <p>For more information on adding metadata to your Amazon Web Services resources with tagging, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
 *                 resources</a>. For advice on best practices for managing Amazon Web Services resources with
 *             tagging, see <a href="https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf">Tagging
 *                 Best Practices: Implement an Effective Amazon Web Services Resource Tagging Strategy</a>.</p>
 */
export interface Tag {
  /**
   * <p>The tag key. Tag keys must be unique per resource.</p>
   */
  Key: string | undefined;

  /**
   * <p>The tag value.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon CloudWatch alarm configured to monitor metrics on an endpoint.</p>
 */
export interface Alarm {
  /**
   * <p>The name of a CloudWatch alarm in your account.</p>
   */
  AlarmName?: string;
}

export namespace Alarm {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Alarm): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a metric that the training algorithm
 *             writes
 *             to <code>stderr</code> or <code>stdout</code>. SageMakerhyperparameter
 *             tuning captures
 *             all
 *             defined metrics.
 *             You
 *             specify one metric that a hyperparameter tuning job uses as its
 *             objective metric to choose the best training job.</p>
 */
export interface MetricDefinition {
  /**
   * <p>The name of the metric.</p>
   */
  Name: string | undefined;

  /**
   * <p>A regular expression that searches the output of a training job and gets the value of
   *             the metric. For more information about using regular expressions to define metrics, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics.html">Defining
   *                 Objective Metrics</a>.</p>
   */
  Regex: string | undefined;
}

export namespace MetricDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricDefinition): any => ({
    ...obj,
  });
}

export enum TrainingInputMode {
  FASTFILE = "FastFile",
  FILE = "File",
  PIPE = "Pipe",
}

/**
 * <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a>
 *             request.</p>
 *         <p>For more information about algorithms provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For
 *             information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
 *                 SageMaker</a>. </p>
 */
export interface AlgorithmSpecification {
  /**
   * <p>The registry path of the Docker image
   *              that contains the training algorithm.
   *             For information about docker registry paths for SageMaker built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Docker Registry Paths and Example Code</a> in the <i>Amazon SageMaker developer guide</i>.
   *                 SageMaker supports both <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information about using your custom training container, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>.</p>
   *         <note>
   *             <p>You must specify either the algorithm name to the <code>AlgorithmName</code> parameter
   *                 or the image URI of the algorithm container
   *                 to the <code>TrainingImage</code> parameter.</p>
   *             <p>For more information, see the note in the <code>AlgorithmName</code> parameter description.</p>
   *         </note>
   */
  TrainingImage?: string;

  /**
   * <p>The name of the algorithm resource to use for the training job. This must be an
   *             algorithm resource that you created or subscribe to on Amazon Web Services Marketplace.</p>
   *         <note>
   *             <p>You must specify either the algorithm name to the <code>AlgorithmName</code> parameter
   *                 or the image URI of the algorithm container
   *                 to the <code>TrainingImage</code> parameter.</p>
   *             <p>Note that the <code>AlgorithmName</code> parameter is mutually exclusive
   *                 with the <code>TrainingImage</code> parameter.
   *                 If you specify a value for the <code>AlgorithmName</code> parameter,
   *                 you can't specify a value for <code>TrainingImage</code>, and vice versa.</p>
   *             <p>If you specify values for both parameters, the training job might break; if you don't specify
   *                 any value for both parameters, the training job might raise a <code>null</code> error.</p>
   *         </note>
   */
  AlgorithmName?: string;

  /**
   * <p>The training input mode that the algorithm supports. For more information about input modes, see
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>.</p>
   *
   *         <p>
   *             <b>Pipe mode</b>
   *          </p>
   *         <p>If an algorithm supports <code>Pipe</code> mode, Amazon SageMaker streams data directly
   *             from Amazon S3 to the container.</p>
   *
   *         <p>
   *             <b>File mode</b>
   *          </p>
   *         <p>If an algorithm supports <code>File</code> mode, SageMaker
   *             downloads the training data from S3 to the provisioned ML storage volume, and mounts the
   *             directory to the Docker volume for the training container.</p>
   *         <p>You must provision the ML storage volume with sufficient capacity
   *             to accommodate the data downloaded from S3. In addition to the training data, the ML
   *             storage volume also stores the output model. The algorithm container uses the ML storage
   *             volume to also store intermediate information, if any.</p>
   *         <p>For distributed algorithms, training data is distributed uniformly.
   *             Your training duration is predictable if the input data objects sizes are
   *             approximately the same. SageMaker does not split the files any further for model training.
   *             If the object sizes are skewed, training won't be optimal as the data distribution is also
   *             skewed when one host in a training cluster is overloaded, thus becoming a bottleneck in
   *             training.</p>
   *
   *         <p>
   *             <b>FastFile mode</b>
   *          </p>
   *         <p>If an algorithm supports <code>FastFile</code> mode, SageMaker streams data directly
   *             from S3 to the container with no code changes, and provides file system access to
   *             the data. Users can author their training script to interact with these files as if
   *             they were stored on disk.</p>
   *         <p>
   *             <code>FastFile</code> mode works best when the data is read sequentially.
   *             Augmented manifest files aren't supported.
   *             The startup time is lower when there are fewer files in the S3 bucket provided.</p>
   */
  TrainingInputMode: TrainingInputMode | string | undefined;

  /**
   * <p>A list of metric definition objects. Each object specifies the metric name and regular
   *             expressions used to parse algorithm logs. SageMaker publishes each metric to Amazon CloudWatch.</p>
   */
  MetricDefinitions?: MetricDefinition[];

  /**
   * <p>To generate and save time-series metrics during training, set to <code>true</code>.
   *             The default is <code>false</code> and time-series metrics aren't generated except in the
   *             following cases:</p>
   *         <ul>
   *             <li>
   *                 <p>You use one of the SageMaker built-in algorithms</p>
   *             </li>
   *             <li>
   *                 <p>You use one of the following <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pre-built-containers-frameworks-deep-learning.html">Prebuilt SageMaker Docker Images</a>:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Tensorflow (version >= 1.15)</p>
   *                     </li>
   *                   <li>
   *                         <p>MXNet (version >= 1.6)</p>
   *                     </li>
   *                   <li>
   *                         <p>PyTorch (version >= 1.3)</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>You specify at least one <a>MetricDefinition</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  EnableSageMakerMetricsTimeSeries?: boolean;
}

export namespace AlgorithmSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlgorithmSpecification): any => ({
    ...obj,
  });
}

export enum CompressionType {
  GZIP = "Gzip",
  NONE = "None",
}

/**
 * <p>Describes the location of the channel data.</p>
 */
export interface DataSource {
  /**
   * <p>The S3 location of the data source that is associated with a channel.</p>
   */
  S3DataSource?: S3DataSource;

  /**
   * <p>The file system that is associated with a channel.</p>
   */
  FileSystemDataSource?: FileSystemDataSource;
}

export namespace DataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSource): any => ({
    ...obj,
  });
}

/**
 * <p>A configuration for a shuffle option for input data in a channel. If you use
 *                 <code>S3Prefix</code> for <code>S3DataType</code>, the results of the S3 key prefix
 *             matches are shuffled. If you use <code>ManifestFile</code>, the order of the S3 object
 *             references in the <code>ManifestFile</code> is shuffled. If you use
 *                 <code>AugmentedManifestFile</code>, the order of the JSON lines in the
 *                 <code>AugmentedManifestFile</code> is shuffled. The shuffling order is determined
 *             using the <code>Seed</code> value.</p>
 *         <p>For Pipe input mode, when <code>ShuffleConfig</code> is specified shuffling is done at
 *             the start of every epoch. With large datasets, this ensures that the order of the
 *             training data is different for each epoch, and it helps reduce bias and possible
 *             overfitting. In a multi-node training job when <code>ShuffleConfig</code> is combined
 *             with <code>S3DataDistributionType</code> of <code>ShardedByS3Key</code>, the data is
 *             shuffled across nodes so that the content sent to a particular node on the first epoch
 *             might be sent to a different node on the second epoch.</p>
 */
export interface ShuffleConfig {
  /**
   * <p>Determines the shuffling order in <code>ShuffleConfig</code> value.</p>
   */
  Seed: number | undefined;
}

export namespace ShuffleConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ShuffleConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A channel is a named input source that training algorithms can consume. </p>
 */
export interface Channel {
  /**
   * <p>The name of the channel. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The location of the channel data.</p>
   */
  DataSource: DataSource | undefined;

  /**
   * <p>The MIME type of the data.</p>
   */
  ContentType?: string;

  /**
   * <p>If training data is compressed, the compression type. The default value is
   *                 <code>None</code>. <code>CompressionType</code> is used only in Pipe input mode. In
   *             File mode, leave this field unset or set it to None.</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p></p>
   *         <p>Specify RecordIO as the value when input data is in raw format but the training
   *             algorithm requires the RecordIO format. In this case, SageMaker wraps each individual S3
   *             object in a RecordIO record. If the input data is already in RecordIO format, you don't
   *             need to set this attribute. For more information, see <a href="https://mxnet.apache.org/api/architecture/note_data_loading#data-format">Create
   *                 a Dataset Using RecordIO</a>. </p>
   *         <p>In File mode, leave this field unset or set it to None.</p>
   */
  RecordWrapperType?: RecordWrapper | string;

  /**
   * <p>(Optional) The input mode to use for the data channel in a training job. If you don't
   *             set a value for <code>InputMode</code>, SageMaker uses the value set for
   *                 <code>TrainingInputMode</code>. Use this parameter to override the
   *                 <code>TrainingInputMode</code> setting in a <a>AlgorithmSpecification</a>
   *             request when you have a channel that needs a different input mode from the training
   *             job's general setting. To download the data from Amazon Simple Storage Service (Amazon S3) to the provisioned ML
   *             storage volume, and mount the directory to a Docker volume, use <code>File</code> input
   *             mode. To stream data directly from Amazon S3 to the container, choose <code>Pipe</code> input
   *             mode.</p>
   *         <p>To use a model for incremental training, choose <code>File</code> input model.</p>
   */
  InputMode?: TrainingInputMode | string;

  /**
   * <p>A configuration for a shuffle option for input data in a channel. If you use
   *                 <code>S3Prefix</code> for <code>S3DataType</code>, this shuffles the results of the
   *             S3 key prefix matches. If you use <code>ManifestFile</code>, the order of the S3 object
   *             references in the <code>ManifestFile</code> is shuffled. If you use
   *                 <code>AugmentedManifestFile</code>, the order of the JSON lines in the
   *                 <code>AugmentedManifestFile</code> is shuffled. The shuffling order is determined
   *             using the <code>Seed</code> value.</p>
   *         <p>For Pipe input mode, shuffling is done at the start of every epoch. With large
   *             datasets this ensures that the order of the training data is different for each epoch,
   *             it helps reduce bias and possible overfitting. In a multi-node training job when
   *             ShuffleConfig is combined with <code>S3DataDistributionType</code> of
   *                 <code>ShardedByS3Key</code>, the data is shuffled across nodes so that the content
   *             sent to a particular node on the first epoch might be sent to a different node on the
   *             second epoch.</p>
   */
  ShuffleConfig?: ShuffleConfig;
}

export namespace Channel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about how to store model training results (model
 *             artifacts).</p>
 */
export interface OutputDataConfig {
  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker uses to encrypt the model artifacts at rest using
   *             Amazon S3 server-side encryption. The <code>KmsKeyId</code> can be any of the following
   *             formats: </p>
   *         <ul>
   *             <li>
   *                 <p>// KMS Key ID</p>
   *                 <p>
   *                     <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                 <p>
   *                     <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>// KMS Key Alias</p>
   *                 <p>
   *                     <code>"alias/ExampleAlias"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>// Amazon Resource Name (ARN) of a KMS Key Alias</p>
   *                 <p>
   *                     <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>If you use a KMS key ID or an alias of your KMS key, the SageMaker execution role must
   *             include permissions to call <code>kms:Encrypt</code>. If you don't provide a KMS key ID,
   *             SageMaker uses the default KMS key for Amazon S3 for your role's account. SageMaker uses server-side
   *             encryption with KMS-managed keys for <code>OutputDataConfig</code>. If you use a bucket
   *             policy with an <code>s3:PutObject</code> permission that only allows objects with
   *             server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html">KMS-Managed Encryption
   *                 Keys</a> in the <i>Amazon Simple Storage Service Developer Guide.</i>
   *          </p>
   *         <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateTrainingJob</code>, <code>CreateTransformJob</code>, or
   *                 <code>CreateHyperParameterTuningJob</code> requests. For more information, see
   *                 <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using
   *                     Key Policies in Amazon Web Services KMS</a> in the <i>Amazon Web Services Key Management Service Developer
   *                 Guide</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Identifies the S3 path where you want SageMaker to store the model artifacts. For
   *             example, <code>s3://bucket-name/key-name-prefix</code>. </p>
   */
  S3OutputPath: string | undefined;
}

export namespace OutputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputDataConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a limit to how long a model training job or model compilation job
 *             can run. It also specifies how long a managed spot training
 *             job has to complete. When the job reaches the time limit, SageMaker ends the training or
 *             compilation job. Use this API to cap model training costs.</p>
 *         <p>To stop a training job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
 *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
 *             model artifacts, so the results of training are not lost. </p>
 *         <p>The training algorithms provided by SageMaker automatically save the intermediate results
 *             of a model training job when possible. This attempt to save artifacts is only a best
 *             effort case as model might not be in a state from which it can be saved. For example, if
 *             training has just started, the model might not be ready to save. When saved, this
 *             intermediate data is a valid model artifact. You can use it to create a model with
 *                 <code>CreateModel</code>.</p>
 *         <note>
 *             <p>The Neural Topic Model (NTM) currently does not support saving intermediate model
 *                 artifacts. When training NTMs, make sure that the maximum runtime is sufficient for
 *                 the training job to complete.</p>
 *         </note>
 */
export interface StoppingCondition {
  /**
   * <p>The maximum length of time, in seconds, that a training or compilation job can run.</p>
   *         <p>For compilation jobs, if the job does not complete during this time, a <code>TimeOut</code> error
   *             is generated. We recommend starting with 900 seconds and increasing as
   *             necessary based on your model.</p>
   *         <p>For all other jobs, if the job does not complete during this time, SageMaker ends the job. When
   *             <code>RetryStrategy</code> is specified in the job request,
   *                 <code>MaxRuntimeInSeconds</code> specifies the maximum time for all of the attempts
   *             in total, not each individual attempt. The default value is 1 day. The maximum value is 28 days.</p>
   */
  MaxRuntimeInSeconds?: number;

  /**
   * <p>The maximum length of time, in seconds, that a managed Spot training job has to
   *             complete. It is the amount of time spent waiting for Spot capacity plus the amount of
   *             time the job can run. It must be equal to or greater than
   *                 <code>MaxRuntimeInSeconds</code>. If the job does not complete during this time,
   *             SageMaker ends the job.</p>
   *         <p>When <code>RetryStrategy</code> is specified in the job request,
   *                 <code>MaxWaitTimeInSeconds</code> specifies the maximum time for all of the attempts
   *             in total, not each individual attempt.</p>
   */
  MaxWaitTimeInSeconds?: number;
}

export namespace StoppingCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StoppingCondition): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the input needed to run a training job using the algorithm.</p>
 */
export interface TrainingJobDefinition {
  /**
   * <p>The training input mode that the algorithm supports. For more information about input modes, see
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>.</p>
   *
   *         <p>
   *             <b>Pipe mode</b>
   *          </p>
   *         <p>If an algorithm supports <code>Pipe</code> mode, Amazon SageMaker streams data directly
   *             from Amazon S3 to the container.</p>
   *
   *         <p>
   *             <b>File mode</b>
   *          </p>
   *         <p>If an algorithm supports <code>File</code> mode, SageMaker
   *             downloads the training data from S3 to the provisioned ML storage volume, and mounts the
   *             directory to the Docker volume for the training container.</p>
   *         <p>You must provision the ML storage volume with sufficient capacity
   *             to accommodate the data downloaded from S3. In addition to the training data, the ML
   *             storage volume also stores the output model. The algorithm container uses the ML storage
   *             volume to also store intermediate information, if any.</p>
   *         <p>For distributed algorithms, training data is distributed uniformly.
   *             Your training duration is predictable if the input data objects sizes are
   *             approximately the same. SageMaker does not split the files any further for model training.
   *             If the object sizes are skewed, training won't be optimal as the data distribution is also
   *             skewed when one host in a training cluster is overloaded, thus becoming a bottleneck in
   *             training.</p>
   *
   *         <p>
   *             <b>FastFile mode</b>
   *          </p>
   *         <p>If an algorithm supports <code>FastFile</code> mode, SageMaker streams data directly
   *             from S3 to the container with no code changes, and provides file system access to
   *             the data. Users can author their training script to interact with these files as if
   *             they were stored on disk.</p>
   *         <p>
   *             <code>FastFile</code> mode works best when the data is read sequentially.
   *             Augmented manifest files aren't supported.
   *             The startup time is lower when there are fewer files in the S3 bucket provided.</p>
   */
  TrainingInputMode: TrainingInputMode | string | undefined;

  /**
   * <p>The hyperparameters used for the training job.</p>
   */
  HyperParameters?: Record<string, string>;

  /**
   * <p>An array of <code>Channel</code> objects, each of which specifies an input
   *             source.</p>
   */
  InputDataConfig: Channel[] | undefined;

  /**
   * <p>the path to the S3 bucket where you want to store model artifacts. SageMaker creates
   *             subfolders for the artifacts.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The resources, including the ML compute instances and ML storage volumes, to use for
   *             model training.</p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, SageMaker sends the algorithm the SIGTERM signal, which delays job
   *             termination for 120 seconds. Algorithms can use this 120-second window to save the model
   *             artifacts.</p>
   */
  StoppingCondition: StoppingCondition | undefined;
}

export namespace TrainingJobDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJobDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the input needed to run a transform job using the inference specification
 *             specified in the algorithm.</p>
 */
export interface TransformJobDefinition {
  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a
   *             transform job. The default value is 1.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>The maximum payload size allowed, in MB. A payload is the data portion of a record
   *             (without metadata).</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>A string that determines the number of records included in a single mini-batch.</p>
   *         <p>
   *             <code>SingleRecord</code> means only one record is used per mini-batch.
   *                 <code>MultiRecord</code> means a mini-batch is set to contain as many records that
   *             can fit within the <code>MaxPayloadInMB</code> limit.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *             values entries in the map.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>A description of the input source and the way the transform job consumes it.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results
   *             from the transform job.</p>
   */
  TransformOutput: TransformOutput | undefined;

  /**
   * <p>Identifies the ML compute instances for the transform job.</p>
   */
  TransformResources: TransformResources | undefined;
}

export namespace TransformJobDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformJobDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a training job and a batch transform job that SageMaker runs to validate your
 *             algorithm.</p>
 *         <p>The data provided in the validation profile is made available to your buyers on Amazon Web Services
 *             Marketplace.</p>
 */
export interface AlgorithmValidationProfile {
  /**
   * <p>The name of the profile for the algorithm. The name must have 1 to 63 characters.
   *             Valid characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ProfileName: string | undefined;

  /**
   * <p>The <code>TrainingJobDefinition</code> object that describes the training job that
   *             SageMaker runs to validate your algorithm.</p>
   */
  TrainingJobDefinition: TrainingJobDefinition | undefined;

  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job that
   *             SageMaker runs to validate your algorithm.</p>
   */
  TransformJobDefinition?: TransformJobDefinition;
}

export namespace AlgorithmValidationProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlgorithmValidationProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configurations for one or more training jobs that SageMaker runs to test the
 *             algorithm.</p>
 */
export interface AlgorithmValidationSpecification {
  /**
   * <p>The IAM roles that SageMaker uses to run the training jobs.</p>
   */
  ValidationRole: string | undefined;

  /**
   * <p>An array of <code>AlgorithmValidationProfile</code> objects, each of which specifies a
   *             training job and batch transform job that SageMaker runs to validate your algorithm.</p>
   */
  ValidationProfiles: AlgorithmValidationProfile[] | undefined;
}

export namespace AlgorithmValidationSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlgorithmValidationSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Configures how labels are consolidated across human workers and processes output data.
 *          </p>
 */
export interface AnnotationConsolidationConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function implements the logic for <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">annotation consolidation</a> and to process output data.</p>
   *         <p>This parameter is required for all labeling jobs. For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task types</a>, use one
   *             of the following Amazon SageMaker Ground Truth Lambda function ARNs for
   *                 <code>AnnotationConsolidationLambdaArn</code>. For custom labeling workflows, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step3.html#sms-custom-templates-step3-postlambda">Post-annotation Lambda</a>. </p>
   *
   *         <p>
   *             <b>Bounding box</b> - Finds the most similar boxes from
   *             different workers based on the Jaccard index of the boxes.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Image classification</b> - Uses a variant of the
   *             Expectation Maximization approach to estimate the true class of an image based on
   *             annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Multi-label image classification</b> - Uses a variant of
   *             the Expectation Maximization approach to estimate the true classes of an image based on
   *             annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Semantic segmentation</b> - Treats each pixel in an image
   *             as a multi-class classification and treats pixel annotations from workers as "votes" for
   *             the correct label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Text classification</b> - Uses a variant of the
   *             Expectation Maximization approach to estimate the true class of text based on
   *             annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-TextMultiClass</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Multi-label text classification</b> - Uses a variant of
   *             the Expectation Maximization approach to estimate the true classes of text based on
   *             annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Named entity recognition</b> - Groups similar selections
   *             and calculates aggregate boundaries, resolving to most-assigned label.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *
   *         <p>
   *             <b>Video Classification</b> - Use this task type when you need workers to classify videos using
   *             predefined labels that you specify. Workers are shown videos and are asked to choose one
   *             label for each video.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VideoMultiClass</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Video Frame Object Detection</b> - Use this task type to
   *             have workers identify and locate objects in a sequence of video frames (images extracted
   *             from a video) using bounding boxes. For example, you can use this task to ask workers to
   *             identify and localize various objects in a series of video frames, such as cars, bikes,
   *             and pedestrians.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Video Frame Object Tracking</b> - Use this task type to
   *             have workers track the movement of objects in a sequence of video frames (images
   *             extracted from a video) using bounding boxes. For example, you can use this task to ask
   *             workers to track the movement of objects, such as cars, bikes, and pedestrians. </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *
   *         <p>
   *             <b>3D Point Cloud Object Detection</b> - Use this task type
   *             when you want workers to classify objects in a 3D point cloud by drawing 3D cuboids
   *             around objects. For example, you can use this task type to ask workers to identify
   *             different types of objects in a point cloud, such as cars, bikes, and
   *             pedestrians.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>3D Point Cloud Object Tracking</b> - Use this task type
   *             when you want workers to draw 3D cuboids around objects that appear in a sequence of 3D
   *             point cloud frames. For example, you can use this task type to ask workers to track the
   *             movement of vehicles across multiple point cloud frames. </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>3D Point Cloud Semantic Segmentation</b> - Use this task
   *             type when you want workers to create a point-level semantic segmentation masks by
   *             painting objects in a 3D point cloud using different colors where each color is assigned
   *             to one of the classes you specify.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *         <p>
   *             <b>Use the following ARNs for Label Verification and Adjustment Jobs</b>
   *          </p>
   *         <p>Use label verification and adjustment jobs to review and adjust labels. To learn more,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html">Verify and Adjust Labels </a>.</p>
   *
   *         <p>
   *             <b>Semantic Segmentation Adjustment</b> - Treats each pixel
   *             in an image as a multi-class classification and treats pixel adjusted annotations from
   *             workers as "votes" for the correct label.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Semantic Segmentation Verification</b> - Uses a variant
   *             of the Expectation Maximization approach to estimate the true class of verification
   *             judgment for semantic segmentation labels based on annotations from individual
   *             workers.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Bounding Box Adjustment</b> - Finds the most similar
   *             boxes from different workers based on the Jaccard index of the adjusted
   *             annotations.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Bounding Box Verification</b> - Uses a variant of the
   *             Expectation Maximization approach to estimate the true class of verification judgement
   *             for bounding box labels based on annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *         <p>
   *             <b>Video Frame Object Detection Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to classify and localize objects in a sequence of video frames.</p>
   *
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Video Frame Object Tracking Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to track object movement across a sequence of video frames.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *         <p>
   *             <b>3D Point Cloud Object Detection Adjustment</b> - Use this
   *             task type when you want workers to adjust 3D cuboids around objects in a 3D point cloud. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>3D Point Cloud Object Tracking Adjustment</b> - Use this
   *             task type when you want workers to adjust 3D cuboids around objects that appear in a
   *             sequence of 3D point cloud frames.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>3D Point Cloud Semantic Segmentation Adjustment</b> - Use this task
   *             type when you want workers to adjust a point-level semantic segmentation masks using a paint tool.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  AnnotationConsolidationLambdaArn: string | undefined;
}

export namespace AnnotationConsolidationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnnotationConsolidationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for the file system and kernels in a SageMaker image running as a
 *         KernelGateway app.</p>
 */
export interface KernelGatewayImageConfig {
  /**
   * <p>The specification of the Jupyter kernels in the image.</p>
   */
  KernelSpecs: KernelSpec[] | undefined;

  /**
   * <p>The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.</p>
   */
  FileSystemConfig?: FileSystemConfig;
}

export namespace KernelGatewayImageConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KernelGatewayImageConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration to run a processing job in a specified container image.</p>
 */
export interface AppSpecification {
  /**
   * <p>The container image to be run by the processing job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>The entrypoint for a container used to run a processing job.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>The arguments for a container used to run a processing job.</p>
   */
  ContainerArguments?: string[];
}

export namespace AppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The ID and ID type of an artifact source.</p>
 */
export interface ArtifactSourceType {
  /**
   * <p>The type of ID.</p>
   */
  SourceIdType: ArtifactSourceIdType | string | undefined;

  /**
   * <p>The ID.</p>
   */
  Value: string | undefined;
}

export namespace ArtifactSourceType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArtifactSourceType): any => ({
    ...obj,
  });
}

/**
 * <p>A structure describing the source of an artifact.</p>
 */
export interface ArtifactSource {
  /**
   * <p>The URI of the source.</p>
   */
  SourceUri: string | undefined;

  /**
   * <p>A list of source types.</p>
   */
  SourceTypes?: ArtifactSourceType[];
}

export namespace ArtifactSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArtifactSource): any => ({
    ...obj,
  });
}

/**
 * <p>Configures the behavior of the client used by SageMaker to interact with the
 *             model container during asynchronous inference.</p>
 */
export interface AsyncInferenceClientConfig {
  /**
   * <p>The maximum number of concurrent requests sent by the SageMaker client to the
   *             model container. If no value is provided, SageMaker chooses an optimal value.</p>
   */
  MaxConcurrentInvocationsPerInstance?: number;
}

export namespace AsyncInferenceClientConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AsyncInferenceClientConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration for notifications of inference results for asynchronous inference.</p>
 */
export interface AsyncInferenceNotificationConfig {
  /**
   * <p>Amazon SNS topic to post a notification to when inference completes successfully.
   *             If no topic is provided, no notification is sent on success.</p>
   */
  SuccessTopic?: string;

  /**
   * <p>Amazon SNS topic to post a notification to when inference fails.
   *             If no topic is provided, no notification is sent on failure.</p>
   */
  ErrorTopic?: string;
}

export namespace AsyncInferenceNotificationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AsyncInferenceNotificationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration for asynchronous inference invocation outputs.</p>
 */
export interface AsyncInferenceOutputConfig {
  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that
   *             SageMaker uses to encrypt the asynchronous inference output in Amazon S3.</p>
   *         <p></p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 location to upload inference responses to.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>Specifies the configuration for notifications of inference results for asynchronous inference.</p>
   */
  NotificationConfig?: AsyncInferenceNotificationConfig;
}

export namespace AsyncInferenceOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AsyncInferenceOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration for how an endpoint performs asynchronous inference.</p>
 */
export interface AsyncInferenceConfig {
  /**
   * <p>Configures the behavior of the client used by SageMaker to interact
   *             with the model container during asynchronous inference.</p>
   */
  ClientConfig?: AsyncInferenceClientConfig;

  /**
   * <p>Specifies the configuration for asynchronous inference invocation outputs.</p>
   */
  OutputConfig: AsyncInferenceOutputConfig | undefined;
}

export namespace AsyncInferenceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AsyncInferenceConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for Athena Dataset Definition input.</p>
 */
export interface AthenaDatasetDefinition {
  /**
   * <p>The name of the data catalog used in Athena query execution.</p>
   */
  Catalog: string | undefined;

  /**
   * <p>The name of the database used in the Athena query execution.</p>
   */
  Database: string | undefined;

  /**
   * <p>The SQL query statements, to be executed.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>The name of the workgroup in which the Athena query is being started.</p>
   */
  WorkGroup?: string;

  /**
   * <p>The location in Amazon S3 where Athena query results are stored.</p>
   */
  OutputS3Uri: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data generated from
   *             an Athena query execution.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The data storage format for Athena query results.</p>
   */
  OutputFormat: AthenaResultFormat | string | undefined;

  /**
   * <p>The compression used for Athena query results.</p>
   */
  OutputCompression?: AthenaResultCompressionType | string;
}

export namespace AthenaDatasetDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AthenaDatasetDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Stores the config information for how a candidate is generated (optional).</p>
 */
export interface AutoMLCandidateGenerationConfig {
  /**
   * <p>A URL to the Amazon S3 data source containing selected features from the input data source to
   *          run an Autopilot job (optional). This file should be in json format as shown below: </p>
   *          <p>
   *             <code>{ "FeatureAttributeNames":["col1", "col2", ...] }</code>.</p>
   *          <p>The key name <code>FeatureAttributeNames</code> is fixed. The values listed in
   *             <code>["col1", "col2", ...]</code> is case sensitive and should be a list of strings
   *          containing unique values that are a subset of the column names in the input data. The list
   *          of columns provided must not include the target column.</p>
   */
  FeatureSpecificationS3Uri?: string;
}

export namespace AutoMLCandidateGenerationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLCandidateGenerationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon S3 data source.</p>
 */
export interface AutoMLS3DataSource {
  /**
   * <p>The data type.</p>
   */
  S3DataType: AutoMLS3DataType | string | undefined;

  /**
   * <p>The URL to the Amazon S3 data source.</p>
   */
  S3Uri: string | undefined;
}

export namespace AutoMLS3DataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLS3DataSource): any => ({
    ...obj,
  });
}

/**
 * <p>The data source for the Autopilot job.</p>
 */
export interface AutoMLDataSource {
  /**
   * <p>The Amazon S3 location of the input data.</p>
   *          <note>
   *             <p>The input data must be in CSV format and contain at least 500 rows.</p>
   *          </note>
   */
  S3DataSource: AutoMLS3DataSource | undefined;
}

export namespace AutoMLDataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLDataSource): any => ({
    ...obj,
  });
}

/**
 * <p>A channel is a named input source that training algorithms can consume. The validation
 *          dataset size is limited to less than 2 GB. The training dataset size must be less than 100
 *          GB. For more information, see .</p>
 *          <note>
 *             <p>A validation dataset must contain the same headers as the training dataset.</p>
 *          </note>
 *          <p></p>
 */
export interface AutoMLChannel {
  /**
   * <p>The data source for an AutoML channel.</p>
   */
  DataSource: AutoMLDataSource | undefined;

  /**
   * <p>You can use <code>Gzip</code> or <code>None</code>. The default value is
   *             <code>None</code>.</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p>The name of the target variable in supervised learning, usually represented by
   *          'y'.</p>
   */
  TargetAttributeName: string | undefined;

  /**
   * <p>The content type of the data from the input source. You can use
   *             <code>text/csv;header=present</code> or <code>x-application/vnd.amazon+parquet</code>.
   *          The default value is <code>text/csv;header=present</code>.</p>
   */
  ContentType?: string;

  /**
   * <p>The channel type (optional) is an <code>enum</code> string. The default value is
   *             <code>training</code>. Channels for training and validation must share the same
   *             <code>ContentType</code> and <code>TargetAttributeName</code>. For information on
   *          specifying training and validation channel types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-datasets-problem-types.html#autopilot-data-sources-training-or-validation">
   *                <code>How to specify training and validation datasets</code>
   *             </a>.</p>
   */
  ChannelType?: AutoMLChannelType | string;
}

export namespace AutoMLChannel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLChannel): any => ({
    ...obj,
  });
}

/**
 * <p>This structure specifies how to split the data into train and test datasets. The
 *          validation and training datasets must contain the same headers. The validation dataset must
 *          be less than 2 GB in size.</p>
 */
export interface AutoMLDataSplitConfig {
  /**
   * <p>The validation fraction (optional) is a float that specifies the portion of the training
   *          dataset to be used for validation. The default value is 0.2, and values must be greater
   *          than 0 and less than 1. We recommend setting this value to be less than 0.5.</p>
   */
  ValidationFraction?: number;
}

export namespace AutoMLDataSplitConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLDataSplitConfig): any => ({
    ...obj,
  });
}

/**
 * <p>How long a job is allowed to run, or how many candidates a job is allowed to
 *          generate.</p>
 */
export interface AutoMLJobCompletionCriteria {
  /**
   * <p>The maximum number of times a training job is allowed to run.</p>
   */
  MaxCandidates?: number;

  /**
   * <p>The maximum time, in seconds, that each training job is allowed to run as part of a
   *          hyperparameter tuning job. For more information, see the  used by the  action.</p>
   */
  MaxRuntimePerTrainingJobInSeconds?: number;

  /**
   * <p>The maximum runtime, in seconds, an AutoML job has to complete.</p>
   *          <p>If an AutoML job exceeds the maximum runtime, the job is stopped automatically and its
   *          processing is ended gracefully. The AutoML job identifies the best model whose training was
   *          completed and marks it as the best-performing model. Any unfinished steps of the job, such
   *          as automatic one-click Autopilot model deployment, will not be completed. </p>
   */
  MaxAutoMLJobRuntimeInSeconds?: number;
}

export namespace AutoMLJobCompletionCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLJobCompletionCriteria): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
 *             access to and from your training and model containers by configuring the VPC. For more
 *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
 *                 by Using an Amazon Virtual Private Cloud</a>. </p>
 */
export interface VpcConfig {
  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for
   *             the VPC that is specified in the <code>Subnets</code> field.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the subnets in the VPC to which you want to connect your training job or
   *             model. For information about the availability of specific instance types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html">Supported
   *                 Instance Types and Availability Zones</a>.</p>
   */
  Subnets: string[] | undefined;
}

export namespace VpcConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Security options.</p>
 */
export interface AutoMLSecurityConfig {
  /**
   * <p>The key used to encrypt stored data.</p>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Whether to use traffic encryption between the container layers.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>The VPC configuration.</p>
   */
  VpcConfig?: VpcConfig;
}

export namespace AutoMLSecurityConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLSecurityConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of settings used for an AutoML job.</p>
 */
export interface AutoMLJobConfig {
  /**
   * <p>How long an AutoML job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;

  /**
   * <p>The security configuration for traffic encryption or Amazon VPC settings.</p>
   */
  SecurityConfig?: AutoMLSecurityConfig;

  /**
   * <p>The configuration for splitting the input training dataset.</p>
   *          <p>Type: AutoMLDataSplitConfig</p>
   */
  DataSplitConfig?: AutoMLDataSplitConfig;

  /**
   * <p>The configuration for generating a candidate for an AutoML job (optional). </p>
   */
  CandidateGenerationConfig?: AutoMLCandidateGenerationConfig;
}

export namespace AutoMLJobConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLJobConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a metric to minimize or maximize as the objective of a job.</p>
 */
export interface AutoMLJobObjective {
  /**
   * <p>The name of the objective metric used to measure the predictive quality of a machine
   *          learning system. This metric is optimized during training to provide the best estimate for
   *          model parameter values from data.</p>
   *          <p>Here are the options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MSE</code>: The mean squared error (MSE) is the average of the squared
   *                differences between the predicted and actual values. It is used for regression. MSE
   *                values are always positive: the better a model is at predicting the actual values,
   *                the smaller the MSE value is. When the data contains outliers, they tend to dominate
   *                the MSE, which might cause subpar prediction performance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Accuracy</code>: The ratio of the number of correctly classified items to
   *                the total number of (correctly and incorrectly) classified items. It is used for
   *                binary and multiclass classification. It measures how close the predicted class
   *                values are to the actual values. Accuracy values vary between zero and one: one
   *                indicates perfect accuracy and zero indicates perfect inaccuracy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>F1</code>: The F1 score is the harmonic mean of the precision and recall. It
   *                is used for binary classification into classes traditionally referred to as positive
   *                and negative. Predictions are said to be true when they match their actual (correct)
   *                class and false when they do not. Precision is the ratio of the true positive
   *                predictions to all positive predictions (including the false positives) in a data set
   *                and measures the quality of the prediction when it predicts the positive class.
   *                Recall (or sensitivity) is the ratio of the true positive predictions to all actual
   *                positive instances and measures how completely a model predicts the actual class
   *                members in a data set. The standard F1 score weighs precision and recall equally. But
   *                which metric is paramount typically depends on specific aspects of a problem. F1
   *                scores vary between zero and one: one indicates the best possible performance and
   *                zero the worst.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUC</code>: The area under the curve (AUC) metric is used to compare and
   *                evaluate binary classification by algorithms such as logistic regression that return
   *                probabilities. A threshold is needed to map the probabilities into classifications.
   *                The relevant curve is the receiver operating characteristic curve that plots the true
   *                positive rate (TPR) of predictions (or recall) against the false positive rate (FPR)
   *                as a function of the threshold value, above which a prediction is considered
   *                positive. Increasing the threshold results in fewer false positives but more false
   *                negatives. AUC is the area under this receiver operating characteristic curve and so
   *                provides an aggregated measure of the model performance across all possible
   *                classification thresholds. The AUC score can also be interpreted as the probability
   *                that a randomly selected positive data point is more likely to be predicted positive
   *                than a randomly selected negative example. AUC scores vary between zero and one: a
   *                score of one indicates perfect accuracy and a score of one half indicates that the
   *                prediction is not better than a random classifier. Values under one half predict less
   *                accurately than a random predictor. But such consistently bad predictors can simply
   *                be inverted to obtain better than random predictors.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>F1macro</code>: The F1macro score applies F1 scoring to multiclass
   *                classification. In this context, you have multiple classes to predict. You just
   *                calculate the precision and recall for each class as you did for the positive class
   *                in binary classification. Then, use these values to calculate the F1 score for each
   *                class and average them to obtain the F1macro score. F1macro scores vary between zero
   *                and one: one indicates the best possible performance and zero the worst.</p>
   *             </li>
   *          </ul>
   *          <p>If you do not specify a metric explicitly, the default behavior is to automatically
   *          use:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MSE</code>: for regression.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>F1</code>: for binary classification</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Accuracy</code>: for multiclass classification.</p>
   *             </li>
   *          </ul>
   */
  MetricName: AutoMLMetricEnum | string | undefined;
}

export namespace AutoMLJobObjective {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLJobObjective): any => ({
    ...obj,
  });
}

/**
 * <p>The output data configuration.</p>
 */
export interface AutoMLOutputDataConfig {
  /**
   * <p>The Amazon Web Services KMS encryption key ID.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 output path. Must be 128 characters or less.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace AutoMLOutputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLOutputDataConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Automatic rollback configuration for handling endpoint deployment failures and recovery.</p>
 */
export interface AutoRollbackConfig {
  /**
   * <p>List of CloudWatch alarms in your account that are configured to monitor metrics on an endpoint.
   *             If any alarms are tripped during a deployment, SageMaker rolls back the deployment.</p>
   */
  Alarms?: Alarm[];
}

export namespace AutoRollbackConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoRollbackConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Defines how to perform inference generation after a training job is run.</p>
 */
export interface InferenceSpecification {
  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the inference code.</p>
   */
  Containers: ModelPackageContainerDefinition[] | undefined;

  /**
   * <p>A list of the instance types on which a transformation job can be run or on which an
   *             endpoint can be deployed.</p>
   *         <p>This parameter is required for unversioned models, and optional for versioned
   *             models.</p>
   */
  SupportedTransformInstanceTypes?: (TransformInstanceType | string)[];

  /**
   * <p>A list of the instance types that are used to generate inferences in real-time.</p>
   *         <p>This parameter is required for unversioned models, and optional for versioned
   *             models.</p>
   */
  SupportedRealtimeInferenceInstanceTypes?: (ProductionVariantInstanceType | string)[];

  /**
   * <p>The supported MIME types for the input data.</p>
   */
  SupportedContentTypes: string[] | undefined;

  /**
   * <p>The supported MIME types for the output data.</p>
   */
  SupportedResponseMIMETypes: string[] | undefined;
}

export namespace InferenceSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceSpecification): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface MetricsSource {
  /**
   * <p></p>
   */
  ContentType: string | undefined;

  /**
   * <p></p>
   */
  ContentDigest?: string;

  /**
   * <p></p>
   */
  S3Uri: string | undefined;
}

export namespace MetricsSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricsSource): any => ({
    ...obj,
  });
}

/**
 * <p>Contains bias metrics for a model.</p>
 */
export interface Bias {
  /**
   * <p>The bias report for a model</p>
   */
  Report?: MetricsSource;

  /**
   * <p></p>
   */
  PreTrainingReport?: MetricsSource;

  /**
   * <p></p>
   */
  PostTrainingReport?: MetricsSource;
}

export namespace Bias {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Bias): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the endpoint capacity to activate for production.</p>
 */
export interface CapacitySize {
  /**
   * <p>Specifies the endpoint capacity type.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_COUNT</code>: The endpoint activates based on
   *                 the number of instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPACITY_PERCENT</code>: The endpoint activates based on
   *                 the specified percentage of capacity.</p>
   *             </li>
   *          </ul>
   */
  Type: CapacitySizeType | string | undefined;

  /**
   * <p>Defines the capacity size, either as a number of instances or a capacity percentage.</p>
   */
  Value: number | undefined;
}

export namespace CapacitySize {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacitySize): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the traffic routing strategy during an endpoint deployment to shift traffic from the
 *             old fleet to the new fleet.</p>
 */
export interface TrafficRoutingConfig {
  /**
   * <p>Traffic routing strategy type.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_AT_ONCE</code>: Endpoint traffic shifts to the new fleet
   *                 in a single step.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANARY</code>: Endpoint traffic shifts to the new fleet
   *                 in two steps. The first step is the canary, which is a small portion of the traffic. The
   *                 second step is the remainder of the traffic.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LINEAR</code>: Endpoint traffic shifts to the new fleet in
   *                 n steps of a configurable size.
   *             </p>
   *             </li>
   *          </ul>
   */
  Type: TrafficRoutingConfigType | string | undefined;

  /**
   * <p>The waiting time (in seconds) between incremental steps to turn on traffic on the
   *             new endpoint fleet.</p>
   */
  WaitIntervalInSeconds: number | undefined;

  /**
   * <p>Batch size for the first step to turn on traffic on the new endpoint fleet. <code>Value</code> must be less than
   *             or equal to 50% of the variant's total instance count.</p>
   */
  CanarySize?: CapacitySize;

  /**
   * <p>Batch size for each step to turn on traffic on the new endpoint fleet. <code>Value</code> must be
   *             10-50% of the variant's total instance count.</p>
   */
  LinearStepSize?: CapacitySize;
}

export namespace TrafficRoutingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficRoutingConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Update policy for a blue/green deployment. If this update policy is specified, SageMaker
 *             creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips
 *             traffic to the new fleet according to the specified traffic routing configuration. Only
 *             one update policy should be used in the deployment configuration. If no update policy is
 *             specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting
 *             by default.</p>
 */
export interface BlueGreenUpdatePolicy {
  /**
   * <p>Defines the traffic routing strategy to shift traffic from the old fleet to the new fleet
   *             during an endpoint deployment.</p>
   */
  TrafficRoutingConfiguration: TrafficRoutingConfig | undefined;

  /**
   * <p>Additional waiting time in seconds after the completion of an endpoint deployment
   *             before terminating the old endpoint fleet. Default is 0.</p>
   */
  TerminationWaitInSeconds?: number;

  /**
   * <p>Maximum execution timeout for the deployment. Note that the timeout value should be larger
   *             than the total waiting time specified in <code>TerminationWaitInSeconds</code> and <code>WaitIntervalInSeconds</code>.</p>
   */
  MaximumExecutionTimeoutInSeconds?: number;
}

export namespace BlueGreenUpdatePolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BlueGreenUpdatePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration specifying how to treat different headers. If no headers are specified SageMaker
 *          will by default base64 encode when capturing the data.</p>
 */
export interface CaptureContentTypeHeader {
  /**
   * <p>The list of all content type headers that SageMaker will treat as CSV and capture accordingly.</p>
   */
  CsvContentTypes?: string[];

  /**
   * <p>The list of all content type headers that SageMaker will treat as JSON and capture accordingly.</p>
   */
  JsonContentTypes?: string[];
}

export namespace CaptureContentTypeHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CaptureContentTypeHeader): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies data Model Monitor will capture.</p>
 */
export interface CaptureOption {
  /**
   * <p>Specify the boundary of data to capture.</p>
   */
  CaptureMode: CaptureMode | string | undefined;
}

export namespace CaptureOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CaptureOption): any => ({
    ...obj,
  });
}

/**
 * <p>Environment parameters you want to benchmark your load test against.</p>
 */
export interface CategoricalParameter {
  /**
   * <p>The Name of the environment variable.</p>
   */
  Name: string | undefined;

  /**
   * <p>The list of values you can pass.</p>
   */
  Value: string[] | undefined;
}

export namespace CategoricalParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CategoricalParameter): any => ({
    ...obj,
  });
}

/**
 * <p>A list of categorical hyperparameters to tune.</p>
 */
export interface CategoricalParameterRange {
  /**
   * <p>The name of the categorical hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of the categories
   *             for
   *             the hyperparameter.</p>
   */
  Values: string[] | undefined;
}

export namespace CategoricalParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CategoricalParameterRange): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the possible values for a categorical hyperparameter.</p>
 */
export interface CategoricalParameterRangeSpecification {
  /**
   * <p>The allowed categories for the hyperparameter.</p>
   */
  Values: string[] | undefined;
}

export namespace CategoricalParameterRangeSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CategoricalParameterRangeSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a named input source, called a channel, to be used by an algorithm.</p>
 */
export interface ChannelSpecification {
  /**
   * <p>The name of the channel.</p>
   */
  Name: string | undefined;

  /**
   * <p>A brief description of the channel.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the channel is required by the algorithm.</p>
   */
  IsRequired?: boolean;

  /**
   * <p>The supported MIME types for the data.</p>
   */
  SupportedContentTypes: string[] | undefined;

  /**
   * <p>The allowed compression types, if data compression is used.</p>
   */
  SupportedCompressionTypes?: (CompressionType | string)[];

  /**
   * <p>The allowed input mode, either FILE or PIPE.</p>
   *         <p>In FILE mode, Amazon SageMaker copies the data from the input source onto the local
   *             Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm.
   *             This is the most commonly used input mode.</p>
   *         <p>In PIPE mode, Amazon SageMaker streams input data from the source directly to your
   *             algorithm without using the EBS volume.</p>
   */
  SupportedInputModes: (TrainingInputMode | string)[] | undefined;
}

export namespace ChannelSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the output location for managed spot training checkpoint
 *             data. </p>
 */
export interface CheckpointConfig {
  /**
   * <p>Identifies the S3 path where you want SageMaker to store checkpoints. For example,
   *                 <code>s3://bucket-name/key-name-prefix</code>.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>(Optional) The local directory where checkpoints are written. The default directory is
   *                 <code>/opt/ml/checkpoints/</code>. </p>
   */
  LocalPath?: string;
}

export namespace CheckpointConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CheckpointConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration details for a Git repository in your Amazon Web Services account.</p>
 */
export interface GitConfig {
  /**
   * <p>The URL where the Git repository is located.</p>
   */
  RepositoryUrl: string | undefined;

  /**
   * <p>The default branch for the Git repository.</p>
   */
  Branch?: string;

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

export namespace GitConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GitConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Use this parameter to configure your Amazon Cognito workforce.
 *       A single Cognito workforce is created using and corresponds to a single
 *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
 *       Amazon Cognito user pool</a>.</p>
 */
export interface CognitoConfig {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       user pool</a> is a user directory in Amazon Cognito.
   *       With a user pool, your users can sign in to your web or mobile app through Amazon Cognito.
   *       Your users can also sign in through social identity providers like
   *       Google, Facebook, Amazon, or Apple, and through SAML identity providers.</p>
   */
  UserPool: string | undefined;

  /**
   * <p>The client ID for your Amazon Cognito user pool.</p>
   */
  ClientId: string | undefined;
}

export namespace CognitoConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CognitoConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies a Amazon Cognito user group. A user group can be used in on or more work
 *             teams.</p>
 */
export interface CognitoMemberDefinition {
  /**
   * <p>An identifier for a user pool. The user pool must be in the same region as the service
   *             that you are calling.</p>
   */
  UserPool: string | undefined;

  /**
   * <p>An identifier for a user group.</p>
   */
  UserGroup: string | undefined;

  /**
   * <p>An identifier for an application client. You must create the app client ID using
   *             Amazon Cognito.</p>
   */
  ClientId: string | undefined;
}

export namespace CognitoMemberDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CognitoMemberDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for the Debugger output tensor collections.</p>
 */
export interface CollectionConfiguration {
  /**
   * <p>The name of the tensor collection. The name must be unique relative to other rule configuration names.</p>
   */
  CollectionName?: string;

  /**
   * <p>Parameter values for the tensor collection. The allowed parameters are
   *                 <code>"name"</code>, <code>"include_regex"</code>, <code>"reduction_config"</code>,
   *                 <code>"save_config"</code>, <code>"tensor_names"</code>, and
   *                 <code>"save_histogram"</code>.</p>
   */
  CollectionParameters?: Record<string, string>;
}

export namespace CollectionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CollectionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Specifies whether the model container is in Amazon ECR or a private Docker registry
 *             accessible from your Amazon Virtual Private Cloud (VPC).</p>
 */
export interface ImageConfig {
  /**
   * <p>Set this to one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Platform</code> - The model image is hosted in Amazon ECR.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Vpc</code> - The model image is hosted in a private Docker registry in
   *                     your VPC.</p>
   *             </li>
   *          </ul>
   */
  RepositoryAccessMode: RepositoryAccessMode | string | undefined;

  /**
   * <p>(Optional) Specifies an authentication configuration for the private docker registry
   *             where your model image is hosted. Specify a value for this property only if you
   *             specified <code>Vpc</code> as the value for the <code>RepositoryAccessMode</code> field,
   *             and the private Docker registry where the model image is hosted requires
   *             authentication.</p>
   */
  RepositoryAuthConfig?: RepositoryAuthConfig;
}

export namespace ImageConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies additional configuration for hosting multi-model endpoints.</p>
 */
export interface MultiModelConfig {
  /**
   * <p>Whether to cache models for a multi-model endpoint. By default, multi-model endpoints
   *             cache models so that a model does not have to be loaded into memory each time it is
   *             invoked. Some use cases do not benefit from model caching. For example, if an endpoint
   *             hosts a large number of models that are each invoked infrequently, the endpoint might
   *             perform better if you disable model caching. To disable model caching, set the value of
   *             this parameter to <code>Disabled</code>.</p>
   */
  ModelCacheSetting?: ModelCacheSetting | string;
}

export namespace MultiModelConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiModelConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the container, as part of model definition.</p>
 */
export interface ContainerDefinition {
  /**
   * <p>This parameter is ignored for models that contain only a
   *             <code>PrimaryContainer</code>.</p>
   *         <p>When a <code>ContainerDefinition</code> is part of an inference pipeline, the value of
   *             the parameter uniquely identifies the container for the purposes of logging and metrics.
   *             For information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html">Use Logs and Metrics
   *                 to Monitor an Inference Pipeline</a>. If you don't specify a value for this
   *             parameter for a <code>ContainerDefinition</code> that is part of an inference pipeline,
   *             a unique name is automatically assigned based on the position of the
   *                 <code>ContainerDefinition</code> in the pipeline. If you specify a value for the
   *                 <code>ContainerHostName</code> for any <code>ContainerDefinition</code> that is part
   *             of an inference pipeline, you must specify a value for the
   *                 <code>ContainerHostName</code> parameter of every <code>ContainerDefinition</code>
   *             in that pipeline.</p>
   */
  ContainerHostname?: string;

  /**
   * <p>The path where inference code is stored. This can be either in Amazon EC2 Container Registry or in a
   *             Docker registry that is accessible from the same VPC that you configure for your
   *             endpoint. If you are using your own custom algorithm instead of an algorithm provided by
   *             SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>
   *         </p>
   */
  Image?: string;

  /**
   * <p>Specifies whether the model container is in Amazon ECR or a private Docker registry
   *             accessible from your Amazon Virtual Private Cloud (VPC). For information about storing containers in a
   *             private Docker registry, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-containers-inference-private.html">Use a
   *                 Private Docker Registry for Real-Time Inference Containers</a>
   *         </p>
   */
  ImageConfig?: ImageConfig;

  /**
   * <p>Whether the container hosts a single model or multiple models.</p>
   */
  Mode?: ContainerMode | string;

  /**
   * <p>The S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3
   *             path is required for SageMaker built-in algorithms, but not if you use your own algorithms.
   *             For more information on built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Common
   *                 Parameters</a>. </p>
   *         <note>
   *             <p>The model artifacts must be in an S3 bucket that is in the same region as the
   *                 model or endpoint you are creating.</p>
   *         </note>
   *         <p>If you provide a value for this parameter, SageMaker uses Amazon Web Services Security Token Service to
   *             download model artifacts from the S3 path you provide. Amazon Web Services STS is activated in your
   *             IAM user account by default. If you previously deactivated Amazon Web Services STS for a region, you
   *             need to reactivate Amazon Web Services STS for that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
   *                 Deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Amazon Web Services Identity and Access Management User
   *                 Guide</i>.</p>
   *         <important>
   *             <p>If you use a built-in algorithm to create a model, SageMaker requires that you provide
   *                 a S3 path to the model artifacts in <code>ModelDataUrl</code>.</p>
   *         </important>
   */
  ModelDataUrl?: string;

  /**
   * <p>The environment variables to set in the Docker container. Each key and value in the
   *                 <code>Environment</code> string to string map can have length of up to 1024. We
   *             support up to 16 entries in the map. </p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to use to create the
   *             model.</p>
   */
  ModelPackageName?: string;

  /**
   * <p>The inference specification name in the model package version.</p>
   */
  InferenceSpecificationName?: string;

  /**
   * <p>Specifies additional configuration for multi-model endpoints.</p>
   */
  MultiModelConfig?: MultiModelConfig;
}

export namespace ContainerDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerDefinition): any => ({
    ...obj,
  });
}

export enum ContentClassifier {
  FREE_OF_ADULT_CONTENT = "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION = "FreeOfPersonallyIdentifiableInformation",
}

/**
 * <p>A structure describing the source of a context.</p>
 */
export interface ContextSource {
  /**
   * <p>The URI of the source.</p>
   */
  SourceUri: string | undefined;

  /**
   * <p>The type of the source.</p>
   */
  SourceType?: string;

  /**
   * <p>The ID of the source.</p>
   */
  SourceId?: string;
}

export namespace ContextSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContextSource): any => ({
    ...obj,
  });
}

/**
 * <p>A list of continuous hyperparameters to tune.</p>
 */
export interface ContinuousParameterRange {
  /**
   * <p>The name of the continuous hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * <p>The minimum value for the hyperparameter.
   *             The
   *             tuning job uses floating-point values between this value and <code>MaxValue</code>for
   *             tuning.</p>
   */
  MinValue: string | undefined;

  /**
   * <p>The maximum value for the hyperparameter. The tuning job uses floating-point values
   *             between <code>MinValue</code> value and this value for tuning.</p>
   */
  MaxValue: string | undefined;

  /**
   * <p>The scale that hyperparameter tuning uses to search the hyperparameter range. For
   *             information about choosing a hyperparameter scale, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type">Hyperparameter Scaling</a>. One of the following values:</p>
   *         <dl>
   *             <dt>Auto</dt>
   *             <dd>
   *                     <p>SageMaker hyperparameter tuning chooses the best scale for the
   *                         hyperparameter.</p>
   *                 </dd>
   *             <dt>Linear</dt>
   *             <dd>
   *                     <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a linear scale.</p>
   *                 </dd>
   *             <dt>Logarithmic</dt>
   *             <dd>
   *                     <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a logarithmic scale.</p>
   *                     <p>Logarithmic scaling works only for ranges that have only values greater
   *                         than 0.</p>
   *                 </dd>
   *             <dt>ReverseLogarithmic</dt>
   *             <dd>
   *                     <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a reverse logarithmic scale.</p>
   *                     <p>Reverse logarithmic scaling works only for ranges that are entirely within
   *                         the range 0<=x<1.0.</p>
   *                 </dd>
   *          </dl>
   */
  ScalingType?: HyperParameterScalingType | string;
}

export namespace ContinuousParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContinuousParameterRange): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the possible values for a continuous hyperparameter.</p>
 */
export interface ContinuousParameterRangeSpecification {
  /**
   * <p>The minimum floating-point value allowed.</p>
   */
  MinValue: string | undefined;

  /**
   * <p>The maximum floating-point value allowed.</p>
   */
  MaxValue: string | undefined;
}

export namespace ContinuousParameterRangeSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContinuousParameterRangeSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
 */
export interface MetadataProperties {
  /**
   * <p>The commit ID.</p>
   */
  CommitId?: string;

  /**
   * <p>The repository.</p>
   */
  Repository?: string;

  /**
   * <p>The entity this entity was generated by.</p>
   */
  GeneratedBy?: string;

  /**
   * <p>The project ID.</p>
   */
  ProjectId?: string;
}

export namespace MetadataProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetadataProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Defines how the algorithm is used for a training job.</p>
 */
export interface TrainingSpecification {
  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the training
   *             algorithm.</p>
   */
  TrainingImage: string | undefined;

  /**
   * <p>An MD5 hash of the training algorithm that identifies the Docker image used for
   *             training.</p>
   */
  TrainingImageDigest?: string;

  /**
   * <p>A list of the <code>HyperParameterSpecification</code> objects, that define the
   *             supported hyperparameters. This is required if the algorithm supports automatic model
   *             tuning.></p>
   */
  SupportedHyperParameters?: HyperParameterSpecification[];

  /**
   * <p>A list of the instance types that this algorithm can use for training.</p>
   */
  SupportedTrainingInstanceTypes: (TrainingInstanceType | string)[] | undefined;

  /**
   * <p>Indicates whether the algorithm supports distributed training. If set to false, buyers
   *             can't request more than one instance during training.</p>
   */
  SupportsDistributedTraining?: boolean;

  /**
   * <p>A list of <code>MetricDefinition</code> objects, which are used for parsing metrics
   *             generated by the algorithm.</p>
   */
  MetricDefinitions?: MetricDefinition[];

  /**
   * <p>A list of <code>ChannelSpecification</code> objects, which specify the input sources
   *             to be used by the algorithm.</p>
   */
  TrainingChannels: ChannelSpecification[] | undefined;

  /**
   * <p>A list of the metrics that the algorithm emits that can be used as the objective
   *             metric in a hyperparameter tuning job.</p>
   */
  SupportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjective[];
}

export namespace TrainingSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
 *      the version runs on.</p>
 */
export interface ResourceSpec {
  /**
   * <p>The ARN of the SageMaker image that the image version belongs to.</p>
   */
  SageMakerImageArn?: string;

  /**
   * <p>The ARN of the image version created on the instance.</p>
   */
  SageMakerImageVersionArn?: string;

  /**
   * <p>The instance type that the image version runs on.</p>
   *          <note>
   *             <p>JupyterServer Apps only support the <code>system</code> value. KernelGateway Apps do not support the <code>system</code> value, but support all other values for available instance types.</p>
   *          </note>
   */
  InstanceType?: AppInstanceType | string;

  /**
   * <p> The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.</p>
   */
  LifecycleConfigArn?: string;
}

export namespace ResourceSpec {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceSpec): any => ({
    ...obj,
  });
}

/**
 * <p>Resource being accessed is in use.</p>
 */
export class ResourceInUse extends __BaseException {
  readonly name: "ResourceInUse" = "ResourceInUse";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUse, __BaseException>) {
    super({
      name: "ResourceInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Specifies how to generate the endpoint name for an automatic one-click Autopilot model
 *          deployment.</p>
 */
export interface ModelDeployConfig {
  /**
   * <p>Set to <code>True</code> to automatically generate an endpoint name for a one-click
   *          Autopilot model deployment; set to <code>False</code> otherwise. The default value is
   *             <code>False</code>.</p>
   *          <note>
   *             <p>If you set <code>AutoGenerateEndpointName</code> to <code>True</code>, do not specify
   *             the <code>EndpointName</code>; otherwise a 400 error is thrown.</p>
   *          </note>
   */
  AutoGenerateEndpointName?: boolean;

  /**
   * <p>Specifies the endpoint name to use for a one-click Autopilot model deployment if the
   *          endpoint name is not generated automatically.</p>
   *          <note>
   *             <p>Specify the <code>EndpointName</code> if and only if you set
   *                <code>AutoGenerateEndpointName</code> to <code>False</code>; otherwise a 400 error is
   *             thrown.</p>
   *          </note>
   */
  EndpointName?: string;
}

export namespace ModelDeployConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelDeployConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the location of input model artifacts, the name and
 *             shape
 *             of the expected data inputs, and the framework in which the model was trained.</p>
 */
export interface InputConfig {
  /**
   * <p>The S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>Specifies the name and shape of the expected data inputs for your trained model with a
   *             JSON dictionary form. The data inputs are <a>InputConfig$Framework</a>
   *             specific. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>TensorFlow</code>: You must specify the name and shape (NHWC format) of
   *                     the expected data inputs using a dictionary format for your trained model. The
   *                     dictionary formats required for the console and CLI are different.</p>
   *                 <ul>
   *                   <li>
   *                         <p>Examples for one input:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console,
   *                                     <code>{"input":[1,1024,1024,3]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI,
   *                                     <code>{\"input\":[1,1024,1024,3]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Examples for two inputs:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console, <code>{"data1": [1,28,28,1],
   *                                         "data2":[1,28,28,1]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI, <code>{\"data1\": [1,28,28,1],
   *                                         \"data2\":[1,28,28,1]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>KERAS</code>: You must specify the name and shape (NCHW format) of
   *                     expected data inputs using a dictionary format for your trained model. Note that
   *                     while Keras model artifacts should be uploaded in NHWC (channel-last) format,
   *                         <code>DataInputConfig</code> should be specified in NCHW (channel-first)
   *                     format. The dictionary formats required for the console and CLI are
   *                     different.</p>
   *                 <ul>
   *                   <li>
   *                         <p>Examples for one input:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console,
   *                                     <code>{"input_1":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI,
   *                                     <code>{\"input_1\":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Examples for two inputs:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console, <code>{"input_1": [1,3,224,224],
   *                                         "input_2":[1,3,224,224]} </code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI, <code>{\"input_1\": [1,3,224,224],
   *                                         \"input_2\":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MXNET/ONNX/DARKNET</code>: You must specify the name and shape (NCHW format) of
   *                     the expected data inputs in order using a dictionary format for your trained
   *                     model. The dictionary formats required for the console and CLI are
   *                     different.</p>
   *                 <ul>
   *                   <li>
   *                         <p>Examples for one input:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console,
   *                                     <code>{"data":[1,3,1024,1024]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI,
   *                                     <code>{\"data\":[1,3,1024,1024]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Examples for two inputs:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console, <code>{"var1": [1,1,28,28],
   *                                         "var2":[1,1,28,28]} </code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI, <code>{\"var1\": [1,1,28,28],
   *                                         \"var2\":[1,1,28,28]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PyTorch</code>: You can either specify the name and shape (NCHW format)
   *                     of expected data inputs in order using a dictionary format for your trained
   *                     model or you can specify the shape only using a list format. The dictionary
   *                     formats required for the console and CLI are different. The list formats for the
   *                     console and CLI are the same.</p>
   *                 <ul>
   *                   <li>
   *                         <p>Examples for one input in dictionary format:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console,
   *                                     <code>{"input0":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI,
   *                                     <code>{\"input0\":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Example for one input in list format:
   *                             <code>[[1,3,224,224]]</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Examples for two inputs in dictionary format:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console, <code>{"input0":[1,3,224,224],
   *                                         "input1":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI, <code>{\"input0\":[1,3,224,224],
   *                                         \"input1\":[1,3,224,224]} </code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Example for two inputs in list format: <code>[[1,3,224,224],
   *                                 [1,3,224,224]]</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>XGBOOST</code>: input data name and shape are not needed.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <code>DataInputConfig</code> supports the following parameters for <code>CoreML</code>
   *             <a>OutputConfig$TargetDevice</a> (ML Model format):</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>shape</code>: Input shape, for example <code>{"input_1": {"shape": [1,224,224,3]}}</code>.
   *                     In addition to static input shapes, CoreML converter supports Flexible input shapes:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Range Dimension. You can use the Range Dimension feature if you know the input shape
   *                             will be within some specific interval in that dimension,
   *                             for example: <code>{"input_1": {"shape": ["1..10", 224, 224, 3]}}</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Enumerated shapes. Sometimes, the models are trained to work only on a select
   *                             set of inputs. You can enumerate all supported input shapes,
   *                             for example: <code>{"input_1": {"shape": [[1, 224, 224, 3], [1, 160, 160, 3]]}}</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>default_shape</code>: Default input shape. You can set a default shape during
   *                     conversion for both Range Dimension and Enumerated Shapes. For example
   *                     <code>{"input_1": {"shape": ["1..10", 224, 224, 3], "default_shape": [1, 224, 224, 3]}}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>type</code>: Input type. Allowed values: <code>Image</code> and <code>Tensor</code>.
   *                     By default, the converter generates an ML Model with inputs of type Tensor (MultiArray).
   *                     User can set input type to be Image. Image input type requires additional input parameters
   *                     such as <code>bias</code> and <code>scale</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>bias</code>: If the input type is an Image, you need to provide the bias vector.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>scale</code>: If the input type is an Image, you need to provide a scale factor.</p>
   *             </li>
   *          </ul>
   *         <p>CoreML <code>ClassifierConfig</code> parameters can be specified using
   *             <a>OutputConfig$CompilerOptions</a>. CoreML converter supports Tensorflow and PyTorch models.
   *             CoreML conversion examples:</p>
   *         <ul>
   *             <li>
   *                 <p>Tensor type input:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>"DataInputConfig": {"input_1": {"shape": [[1,224,224,3], [1,160,160,3]], "default_shape":
   *                             [1,224,224,3]}}</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Tensor type input without input name (PyTorch):</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>"DataInputConfig": [{"shape": [[1,3,224,224], [1,3,160,160]], "default_shape":
   *                             [1,3,224,224]}]</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Image type input:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>"DataInputConfig": {"input_1": {"shape": [[1,224,224,3], [1,160,160,3]], "default_shape":
   *                             [1,224,224,3], "type": "Image", "bias": [-1,-1,-1], "scale": 0.007843137255}}</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>"CompilerOptions": {"class_labels": "imagenet_labels_1000.txt"}</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Image type input without input name (PyTorch):</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>"DataInputConfig": [{"shape": [[1,3,224,224], [1,3,160,160]], "default_shape":
   *                             [1,3,224,224], "type": "Image", "bias": [-1,-1,-1], "scale": 0.007843137255}]</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>"CompilerOptions": {"class_labels": "imagenet_labels_1000.txt"}</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <p>Depending on the model format, <code>DataInputConfig</code> requires the following parameters for
   *             <code>ml_eia2</code>
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-TargetDevice">OutputConfig:TargetDevice</a>.</p>
   *         <ul>
   *             <li>
   *                <p>For TensorFlow models saved in the SavedModel format, specify the input names
   *                 from <code>signature_def_key</code> and the input model shapes for <code>DataInputConfig</code>.
   *                 Specify the <code>signature_def_key</code> in
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-CompilerOptions">
   *                      <code>OutputConfig:CompilerOptions</code>
   *                   </a> if
   *                 the model does not use TensorFlow's default signature def key. For example:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>"DataInputConfig": {"inputs": [1, 224, 224, 3]}</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>"CompilerOptions": {"signature_def_key": "serving_custom"}</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For TensorFlow models saved as a frozen graph, specify the input tensor names and shapes
   *                 in <code>DataInputConfig</code> and the output tensor names for <code>output_names</code> in
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-CompilerOptions">
   *                      <code>OutputConfig:CompilerOptions</code>
   *                   </a>.
   *                 For example:</p>
   *                 <ul>
   *                   <li>
   *                      <p>
   *                         <code>"DataInputConfig": {"input_tensor:0": [1, 224, 224, 3]}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"CompilerOptions": {"output_names": ["output_tensor:0"]}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  DataInputConfig: string | undefined;

  /**
   * <p>Identifies the framework in which the model was trained. For example:
   *             TENSORFLOW.</p>
   */
  Framework: Framework | string | undefined;

  /**
   * <p>Specifies the framework version to use. This API field is only supported for the PyTorch and TensorFlow frameworks.</p>
   *         <p>For information about framework versions supported for cloud targets and edge devices, see
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-supported-cloud.html">Cloud Supported Instance Types and Frameworks</a> and
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-supported-devices-edge-frameworks.html">Edge Supported Frameworks</a>.</p>
   */
  FrameworkVersion?: string;
}

export namespace InputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the output location for the compiled model and the target
 *             device that the model runs on. <code>TargetDevice</code> and <code>TargetPlatform</code>
 *             are mutually exclusive, so you need to choose one between the two to specify your target
 *             device or platform. If you cannot find your device you want to use from the
 *                 <code>TargetDevice</code> list, use <code>TargetPlatform</code> to describe the
 *             platform of your edge device and <code>CompilerOptions</code> if there are specific
 *             settings that are required or recommended to use for particular TargetPlatform.</p>
 */
export interface OutputConfig {
  /**
   * <p>Identifies the S3 bucket where you want Amazon SageMaker to store the model artifacts. For
   *             example, <code>s3://bucket-name/key-name-prefix</code>.</p>
   */
  S3OutputLocation: string | undefined;

  /**
   * <p>Identifies the target device or the machine learning instance that you want to run
   *             your model on after the compilation has completed. Alternatively, you can specify OS,
   *             architecture, and accelerator using <a>TargetPlatform</a> fields. It can be
   *             used instead of <code>TargetPlatform</code>.</p>
   */
  TargetDevice?: TargetDevice | string;

  /**
   * <p>Contains information about a target platform that you want your model to run on, such
   *             as OS, architecture, and accelerators. It is an alternative of
   *             <code>TargetDevice</code>.</p>
   *         <p>The following examples show how to configure the <code>TargetPlatform</code> and
   *                 <code>CompilerOptions</code> JSON strings for popular target platforms: </p>
   *         <ul>
   *             <li>
   *                 <p>Raspberry Pi 3 Model B+</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX", "Arch": "ARM_EABIHF"},</code>
   *                </p>
   *                 <p>
   *                   <code> "CompilerOptions": {'mattr': ['+neon']}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Jetson TX2</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX", "Arch": "ARM64", "Accelerator":
   *                         "NVIDIA"},</code>
   *                </p>
   *                 <p>
   *                   <code> "CompilerOptions": {'gpu-code': 'sm_62', 'trt-ver': '6.0.1',
   *                         'cuda-ver': '10.0'}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>EC2 m5.2xlarge instance OS</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX", "Arch": "X86_64", "Accelerator":
   *                         "NVIDIA"},</code>
   *                </p>
   *                 <p>
   *                   <code> "CompilerOptions": {'mcpu': 'skylake-avx512'}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>RK3399</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "LINUX", "Arch": "ARM64", "Accelerator":
   *                         "MALI"}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>ARMv7 phone (CPU)</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "ANDROID", "Arch": "ARM_EABI"},</code>
   *                </p>
   *                 <p>
   *                   <code> "CompilerOptions": {'ANDROID_PLATFORM': 25, 'mattr':
   *                     ['+neon']}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>ARMv8 phone (CPU)</p>
   *                 <p>
   *                   <code>"TargetPlatform": {"Os": "ANDROID", "Arch": "ARM64"},</code>
   *                </p>
   *                 <p>
   *                   <code> "CompilerOptions": {'ANDROID_PLATFORM': 29}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  TargetPlatform?: TargetPlatform;

  /**
   * <p>Specifies additional parameters for compiler options in JSON format. The compiler
   *             options are <code>TargetPlatform</code> specific. It is required for NVIDIA accelerators
   *             and highly recommended for CPU compilations. For any other cases, it is optional to
   *             specify <code>CompilerOptions.</code>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DTYPE</code>: Specifies the data type for the input. When compiling for
   *                     <code>ml_*</code> (except for <code>ml_inf</code>) instances using PyTorch
   *                     framework, provide the data type (dtype) of the model's input.
   *                         <code>"float32"</code> is used if <code>"DTYPE"</code> is not specified.
   *                     Options for data type are:</p>
   *                 <ul>
   *                   <li>
   *                      <p>float32: Use either <code>"float"</code> or <code>"float32"</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>int64: Use either <code>"int64"</code> or <code>"long"</code>.</p>
   *                   </li>
   *                </ul>
   *                 <p> For example, <code>{"dtype" : "float32"}</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CPU</code>: Compilation for CPU supports the following compiler
   *                     options.</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>mcpu</code>: CPU micro-architecture. For example, <code>{'mcpu':
   *                                 'skylake-avx512'}</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>mattr</code>: CPU flags. For example, <code>{'mattr': ['+neon',
   *                                 '+vfpv4']}</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ARM</code>: Details of ARM CPU compilations.</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>NEON</code>: NEON is an implementation of the Advanced SIMD
   *                             extension used in ARMv7 processors.</p>
   *                         <p>For example, add <code>{'mattr': ['+neon']}</code> to the compiler
   *                             options if compiling for ARM 32-bit platform with the NEON
   *                             support.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NVIDIA</code>: Compilation for NVIDIA GPU supports the following
   *                     compiler options.</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>gpu_code</code>: Specifies the targeted architecture.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>trt-ver</code>: Specifies the TensorRT versions in x.y.z.
   *                             format.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>cuda-ver</code>: Specifies the CUDA version in x.y
   *                             format.</p>
   *                     </li>
   *                </ul>
   *                 <p>For example, <code>{'gpu-code': 'sm_72', 'trt-ver': '6.0.1', 'cuda-ver':
   *                         '10.1'}</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ANDROID</code>: Compilation for the Android OS supports the following
   *                     compiler options:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>ANDROID_PLATFORM</code>: Specifies the Android API levels.
   *                             Available levels range from 21 to 29. For example,
   *                                 <code>{'ANDROID_PLATFORM': 28}</code>.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>mattr</code>: Add <code>{'mattr': ['+neon']}</code> to compiler
   *                             options if compiling for ARM 32-bit platform with NEON support.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>INFERENTIA</code>: Compilation for target ml_inf1 uses compiler options
   *                     passed in as a JSON string. For example,
   *                     <code>"CompilerOptions": "\"--verbose 1 --num-neuroncores 2 -O2\""</code>.
   *                 </p>
   *                 <p>For information about supported compiler options, see
   *                     <a href="https://github.com/aws/aws-neuron-sdk/blob/master/docs/neuron-cc/command-line-reference.md">
   *                         Neuron Compiler CLI</a>.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CoreML</code>: Compilation for the CoreML <a>OutputConfig$TargetDevice</a>
   *                     supports the following compiler options:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>class_labels</code>: Specifies the classification labels file
   *                             name inside input tar.gz file. For example,
   *                                 <code>{"class_labels": "imagenet_labels_1000.txt"}</code>.
   *                             Labels inside the txt file should be separated by newlines.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>EIA</code>: Compilation for the Elastic Inference Accelerator supports the following
   *                     compiler options:</p>
   *                 <ul>
   *                   <li>
   *                      <p>
   *                         <code>precision_mode</code>: Specifies the precision of compiled artifacts. Supported values
   *                         are <code>"FP16"</code> and <code>"FP32"</code>. Default is
   *                         <code>"FP32"</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>signature_def_key</code>: Specifies the signature to use for models in SavedModel
   *                         format. Defaults is TensorFlow's default signature def key.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>output_names</code>: Specifies a list of output tensor names for
   *                         models in FrozenGraph format. Set at most one API field, either: <code>signature_def_key</code> or <code>output_names</code>.</p>
   *                   </li>
   *                </ul>
   *                 <p>For example:
   *                     <code>{"precision_mode": "FP32",  "output_names": ["output:0"]}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CompilerOptions?: string;

  /**
   * <p>The Amazon Web Services Key Management Service key (Amazon Web Services KMS) that Amazon SageMaker uses to encrypt your output models with Amazon S3 server-side encryption
   *         after compilation job. If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account.
   *         For more information, see
   *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html">KMS-Managed Encryption
   *                 Keys</a> in the <i>Amazon Simple Storage Service Developer Guide.</i>
   *         </p>
   * 	        <p>The KmsKeyId can be any of the following formats: </p>
   *         <ul>
   *             <li>
   *                 <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Key ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Alias name ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;
}

export namespace OutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The <a>VpcConfig</a> configuration object that specifies the VPC that you
 *             want the compilation jobs to connect to. For more information on
 *             controlling access to your Amazon S3 buckets used for compilation job, see
 *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html">Give Amazon SageMaker Compilation Jobs Access to Resources in Your Amazon VPC</a>.</p>
 */
export interface NeoVpcConfig {
  /**
   * <p>The VPC security group IDs. IDs have the form of <code>sg-xxxxxxxx</code>.
   *             Specify the security groups for the VPC that is specified in the <code>Subnets</code> field.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the subnets in the VPC that you want to connect the
   *             compilation job to for accessing the model in Amazon S3.</p>
   */
  Subnets: string[] | undefined;
}

export namespace NeoVpcConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NeoVpcConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the container that a data quality monitoring job runs.</p>
 */
export interface DataQualityAppSpecification {
  /**
   * <p>The container image that the data quality monitoring job runs.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>The entrypoint for a container used to run a monitoring job.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>The arguments to send to the container that the monitoring job runs.</p>
   */
  ContainerArguments?: string[];

  /**
   * <p>An Amazon S3 URI to a script that is called per row prior to running analysis. It can
   *          base64 decode the payload and convert it into a flatted json so that the built-in container
   *          can use the converted data. Applicable only for the built-in (first party)
   *          containers.</p>
   */
  RecordPreprocessorSourceUri?: string;

  /**
   * <p>An Amazon S3 URI to a script that is called after analysis has been performed.
   *          Applicable only for the built-in (first party) containers.</p>
   */
  PostAnalyticsProcessorSourceUri?: string;

  /**
   * <p>Sets the environment variables in the container that the monitoring job runs.</p>
   */
  Environment?: Record<string, string>;
}

export namespace DataQualityAppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataQualityAppSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for monitoring constraints and monitoring statistics. These baseline
 *          resources are compared against the results of the current job from the series of jobs
 *          scheduled to collect data periodically.</p>
 */
export interface DataQualityBaselineConfig {
  /**
   * <p>The name of the job that performs baselining for the data quality monitoring job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;

  /**
   * <p>The statistics resource for a monitoring job.</p>
   */
  StatisticsResource?: MonitoringStatisticsResource;
}

export namespace DataQualityBaselineConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataQualityBaselineConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the data quality monitoring job. Currently endpoints are supported for
 *          input.</p>
 */
export interface DataQualityJobInput {
  /**
   * <p>Input object for the endpoint</p>
   */
  EndpointInput: EndpointInput | undefined;
}

export namespace DataQualityJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataQualityJobInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output configuration for monitoring jobs.</p>
 */
export interface MonitoringOutputConfig {
  /**
   * <p>Monitoring outputs for monitoring jobs. This is where the output of the periodic
   *          monitoring jobs is uploaded.</p>
   */
  MonitoringOutputs: MonitoringOutput[] | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt the model
   *          artifacts at rest using Amazon S3 server-side encryption.</p>
   */
  KmsKeyId?: string;
}

export namespace MonitoringOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the resources to deploy for a monitoring job.</p>
 */
export interface MonitoringResources {
  /**
   * <p>The configuration for the cluster resources used to run the processing job.</p>
   */
  ClusterConfig: MonitoringClusterConfig | undefined;
}

export namespace MonitoringResources {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringResources): any => ({
    ...obj,
  });
}

/**
 * <p>The networking configuration for the monitoring job.</p>
 */
export interface MonitoringNetworkConfig {
  /**
   * <p>Whether to encrypt all communications between the instances used for the monitoring
   *          jobs. Choose <code>True</code> to encrypt communications. Encryption provides greater
   *          security for distributed jobs, but the processing might take longer.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>Whether to allow inbound and outbound network calls to and from the containers used for
   *          the monitoring job.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
   *             access to and from your training and model containers by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace MonitoringNetworkConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringNetworkConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
 */
export interface MonitoringStoppingCondition {
  /**
   * <p>The maximum runtime allowed in seconds.</p>
   *          <note>
   *             <p>The <code>MaxRuntimeInSeconds</code> cannot exceed the frequency of the job. For data quality and
   *             model explainability, this can be up to 3600 seconds for an hourly schedule. For model
   *             bias and model quality hourly schedules, this can be up to 1800 seconds.</p>
   *          </note>
   */
  MaxRuntimeInSeconds: number | undefined;
}

export namespace MonitoringStoppingCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringStoppingCondition): any => ({
    ...obj,
  });
}

/**
 * <p>The output configuration.</p>
 */
export interface EdgeOutputConfig {
  /**
   * <p>The Amazon Simple Storage (S3) bucker URI.</p>
   */
  S3OutputLocation: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume after compilation job.
   *      If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The deployment type SageMaker Edge Manager will create.
   *       Currently only supports Amazon Web Services IoT Greengrass Version 2 components.</p>
   */
  PresetDeploymentType?: EdgePresetDeploymentType | string;

  /**
   * <p>The configuration used to create deployment artifacts.
   *       Specify configuration options with a JSON string. The available configuration options for each type are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ComponentName</code> (optional) - Name of the GreenGrass V2 component. If not specified,
   *      the default name generated consists of "SagemakerEdgeManager" and the name of your SageMaker Edge Manager
   *      packaging job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ComponentDescription</code> (optional) - Description of the component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ComponentVersion</code> (optional) - The version of the component.</p>
   *                <note>
   *                   <p>Amazon Web Services IoT Greengrass uses semantic versions for components. Semantic versions follow a<i>
   *        major.minor.patch</i> number system. For example, version 1.0.0 represents the first
   *         major release for a component. For more information, see the <a href="https://semver.org/">semantic version specification</a>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PlatformOS</code> (optional) - The name of the operating system for the platform.
   *      Supported platforms include Windows and Linux.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PlatformArchitecture</code> (optional) - The processor architecture for the platform. </p>
   *                <p>Supported architectures Windows include: Windows32_x86, Windows64_x64.</p>
   *                <p>Supported architectures for Linux include: Linux x86_64, Linux ARMV8.</p>
   *             </li>
   *          </ul>
   */
  PresetDeploymentConfig?: string;
}

export namespace EdgeOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgeOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of settings that apply to users of Amazon SageMaker Studio. These settings are
 *       specified when the <code>CreateUserProfile</code> API is called, and as <code>DefaultUserSettings</code>
 *       when the <code>CreateDomain</code> API is called.</p>
 *          <p>
 *             <code>SecurityGroups</code> is aggregated when specified in both calls. For all other
 *      settings in <code>UserSettings</code>, the values specified in <code>CreateUserProfile</code>
 *      take precedence over those specified in <code>CreateDomain</code>.</p>
 */
export interface UserSettings {
  /**
   * <p>The execution role for the user.</p>
   */
  ExecutionRole?: string;

  /**
   * <p>The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.</p>
   *          <p>Optional when the <code>CreateDomain.AppNetworkAccessType</code> parameter is set to
   *          <code>PublicInternetOnly</code>.</p>
   *          <p>Required when the <code>CreateDomain.AppNetworkAccessType</code> parameter is set to
   *          <code>VpcOnly</code>.</p>
   *          <p>Amazon SageMaker adds a security group to allow NFS traffic from SageMaker Studio. Therefore, the
   *          number of security groups that you can specify is one less than the maximum number shown.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Specifies options for sharing SageMaker Studio notebooks.</p>
   */
  SharingSettings?: SharingSettings;

  /**
   * <p>The Jupyter server's app settings.</p>
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;

  /**
   * <p>The kernel gateway app settings.</p>
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;

  /**
   * <p>The TensorBoard app settings.</p>
   */
  TensorBoardAppSettings?: TensorBoardAppSettings;

  /**
   * <p>A collection of settings that configure user interaction with the <code>RStudioServerPro</code> app.</p>
   */
  RStudioServerProAppSettings?: RStudioServerProAppSettings;

  /**
   * <p>A collection of settings that configure the <code>RSessionGateway</code> app.</p>
   */
  RSessionAppSettings?: RSessionAppSettings;
}

export namespace UserSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserSettings): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of settings that apply to the <code>SageMaker Domain</code>. These settings are specified through the <code>CreateDomain</code> API call.</p>
 */
export interface DomainSettings {
  /**
   * <p>The security groups for the Amazon Virtual Private Cloud that the <code>Domain</code> uses for communication between Domain-level apps and user apps.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A collection of settings that configure the <code>RStudioServerPro</code> Domain-level app.</p>
   */
  RStudioServerProDomainSettings?: RStudioServerProDomainSettings;
}

export namespace DomainSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The deployment configuration for an endpoint, which contains the desired deployment
 *             strategy and rollback configurations.</p>
 */
export interface DeploymentConfig {
  /**
   * <p>Update policy for a blue/green deployment. If this update policy is specified, SageMaker
   *             creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips
   *             traffic to the new fleet according to the specified traffic routing configuration. Only
   *             one update policy should be used in the deployment configuration. If no update policy is
   *             specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting
   *             by default.</p>
   */
  BlueGreenUpdatePolicy: BlueGreenUpdatePolicy | undefined;

  /**
   * <p>Automatic rollback configuration for handling endpoint deployment failures and recovery.</p>
   */
  AutoRollbackConfiguration?: AutoRollbackConfig;
}

export namespace DeploymentConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeploymentConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration to control how SageMaker captures inference data.</p>
 */
export interface DataCaptureConfig {
  /**
   * <p>Whether data capture should be enabled or disabled (defaults to enabled).</p>
   */
  EnableCapture?: boolean;

  /**
   * <p>The percentage of requests SageMaker will capture. A lower value is recommended for
   *          Endpoints with high traffic.</p>
   */
  InitialSamplingPercentage: number | undefined;

  /**
   * <p>The Amazon S3 location used to capture the data.</p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that SageMaker uses to encrypt data on
   *          the storage volume attached to the ML compute instance that hosts the endpoint.</p>
   *          <p>The KmsKeyId can be any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name ARN:
   *                <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies data Model Monitor will capture. You can configure whether to
   *          collect only input, only output, or both</p>
   */
  CaptureOptions: CaptureOption[] | undefined;

  /**
   * <p>Configuration specifying how to treat different headers. If no headers are specified SageMaker will
   *          by default base64 encode when capturing the data.</p>
   */
  CaptureContentTypeHeader?: CaptureContentTypeHeader;
}

export namespace DataCaptureConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataCaptureConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies a model that you want to host and the resources chosen to deploy for
 *             hosting it. If you are deploying multiple models, tell SageMaker how to distribute traffic
 *             among the models by specifying variant weights. </p>
 */
export interface ProductionVariant {
  /**
   * <p>The name of the production variant.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>The name of the model that you want to host. This is the name that you specified
   *             when creating the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>Number of instances to launch initially.</p>
   */
  InitialInstanceCount?: number;

  /**
   * <p>The ML compute instance type.</p>
   */
  InstanceType?: ProductionVariantInstanceType | string;

  /**
   * <p>Determines initial traffic distribution among all of the models that you specify in
   *             the endpoint configuration. The traffic to a production variant is determined by the
   *             ratio of the <code>VariantWeight</code> to the sum of all <code>VariantWeight</code>
   *             values across all ProductionVariants. If unspecified, it defaults to 1.0.
   *             </p>
   */
  InitialVariantWeight?: number;

  /**
   * <p>The size of the Elastic Inference (EI) instance to use for the production variant. EI
   *             instances provide on-demand GPU computing for inference. For more information, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic
   *                 Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorType?: ProductionVariantAcceleratorType | string;

  /**
   * <p>Specifies configuration for a core dump from the model container when the process
   *             crashes.</p>
   */
  CoreDumpConfig?: ProductionVariantCoreDumpConfig;

  /**
   * <p>The serverless configuration for an endpoint. Specifies a serverless endpoint configuration instead of an instance-based endpoint configuration.</p>
   */
  ServerlessConfig?: ProductionVariantServerlessConfig;
}

export namespace ProductionVariant {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProductionVariant): any => ({
    ...obj,
  });
}

/**
 * <p>A list of features. You must include <code>FeatureName</code> and
 *             <code>FeatureType</code>. Valid feature <code>FeatureType</code>s are
 *             <code>Integral</code>, <code>Fractional</code> and <code>String</code>. </p>
 */
export interface FeatureDefinition {
  /**
   * <p>The name of a feature. The type must be a string. <code>FeatureName</code> cannot be any
   *          of the following: <code>is_deleted</code>, <code>write_time</code>,
   *             <code>api_invocation_time</code>.</p>
   */
  FeatureName?: string;

  /**
   * <p>The value type of a feature. Valid values are Integral, Fractional, or String.</p>
   */
  FeatureType?: FeatureType | string;
}

export namespace FeatureDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration of an <code>OfflineStore</code>.</p>
 *          <p>Provide an <code>OfflineStoreConfig</code> in a request to
 *             <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p>
 *          <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key
 *          Management Service (KMS) key ID, or <code>KMSKeyId</code>, in
 *          <code>S3StorageConfig</code>.</p>
 */
export interface OfflineStoreConfig {
  /**
   * <p>The Amazon Simple Storage (Amazon S3) location of <code>OfflineStore</code>.</p>
   */
  S3StorageConfig: S3StorageConfig | undefined;

  /**
   * <p>Set to <code>True</code> to disable the automatic creation of an Amazon Web Services Glue table when
   *        configuring an <code>OfflineStore</code>.</p>
   */
  DisableGlueTableCreation?: boolean;

  /**
   * <p>The meta data of the Glue table that is autogenerated when an <code>OfflineStore</code>
   *          is created. </p>
   */
  DataCatalogConfig?: DataCatalogConfig;
}

export namespace OfflineStoreConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OfflineStoreConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or
 *             <code>KMSKeyId</code>, for at rest data encryption. You can turn
 *             <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag
 *          at General Assembly; the default value is <code>False</code>.</p>
 */
export interface OnlineStoreConfig {
  /**
   * <p>Use to specify KMS Key ID (<code>KMSKeyId</code>) for at-rest encryption of your
   *             <code>OnlineStore</code>.</p>
   */
  SecurityConfig?: OnlineStoreSecurityConfig;

  /**
   * <p>Turn <code>OnlineStore</code> off by specifying <code>False</code>
   *       for the <code>EnableOnlineStore</code> flag. Turn <code>OnlineStore</code>
   *       on by specifying <code>True</code>
   *       for the <code>EnableOnlineStore</code> flag. </p>
   *          <p>The default value is <code>False</code>.</p>
   */
  EnableOnlineStore?: boolean;
}

export namespace OnlineStoreConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OnlineStoreConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans.</p>
 */
export interface HumanLoopActivationConfig {
  /**
   * <p>Container structure for defining under what conditions SageMaker creates a human
   *          loop.</p>
   */
  HumanLoopActivationConditionsConfig: HumanLoopActivationConditionsConfig | undefined;
}

export namespace HumanLoopActivationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanLoopActivationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the work to be performed by human workers.</p>
 */
export interface HumanLoopConfig {
  /**
   * <p>Amazon Resource Name (ARN) of a team of workers. To learn more about the types of
   *          workforces and work teams you can create and use with Amazon A2I, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-management.html">Create
   *             and Manage Workforces</a>.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   *          <p>You can use standard HTML and Crowd HTML Elements to create a custom worker task
   *          template. You use this template to create a human task UI.</p>
   *          <p>To learn how to create a custom HTML template, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-custom-templates.html">Create Custom Worker
   *             Task Template</a>.</p>
   *          <p>To learn how to create a human task UI, which is a worker task template that can be used
   *          in a flow definition, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-worker-template-console.html">Create and Delete a Worker Task Templates</a>.</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>A title for the human worker task.</p>
   */
  TaskTitle: string | undefined;

  /**
   * <p>A description for the human worker task.</p>
   */
  TaskDescription: string | undefined;

  /**
   * <p>The number of distinct workers who will perform the same task on each object.
   *       For example, if <code>TaskCount</code> is set to <code>3</code> for an image classification
   *       labeling job, three workers will classify each input image.
   *       Increasing <code>TaskCount</code> can improve label accuracy.</p>
   */
  TaskCount: number | undefined;

  /**
   * <p>The length of time that a task remains available for review by human workers.</p>
   */
  TaskAvailabilityLifetimeInSeconds?: number;

  /**
   * <p>The amount of time that a worker has to complete a task. The default value is 3,600
   *          seconds (1 hour).</p>
   */
  TaskTimeLimitInSeconds?: number;

  /**
   * <p>Keywords used to describe the task so that workers can discover the task.</p>
   */
  TaskKeywords?: string[];

  /**
   * <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p>
   *         <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and
   *             should be based on the complexity of the task; the longer it takes in your initial
   *             testing, the more you should offer.</p>
   *         <ul>
   *             <li>
   *                 <p>0.036</p>
   *             </li>
   *             <li>
   *                 <p>0.048</p>
   *             </li>
   *             <li>
   *                 <p>0.060</p>
   *             </li>
   *             <li>
   *                 <p>0.072</p>
   *             </li>
   *             <li>
   *                 <p>0.120</p>
   *             </li>
   *             <li>
   *                 <p>0.240</p>
   *             </li>
   *             <li>
   *                 <p>0.360</p>
   *             </li>
   *             <li>
   *                 <p>0.480</p>
   *             </li>
   *             <li>
   *                 <p>0.600</p>
   *             </li>
   *             <li>
   *                 <p>0.720</p>
   *             </li>
   *             <li>
   *                 <p>0.840</p>
   *             </li>
   *             <li>
   *                 <p>0.960</p>
   *             </li>
   *             <li>
   *                 <p>1.080</p>
   *             </li>
   *             <li>
   *                 <p>1.200</p>
   *             </li>
   *          </ul>
   *         <p>Use one of the following prices for image classification, text classification, and
   *             custom tasks. Prices are in US dollars.</p>
   *         <ul>
   *             <li>
   *                 <p>0.012</p>
   *             </li>
   *             <li>
   *                 <p>0.024</p>
   *             </li>
   *             <li>
   *                 <p>0.036</p>
   *             </li>
   *             <li>
   *                 <p>0.048</p>
   *             </li>
   *             <li>
   *                 <p>0.060</p>
   *             </li>
   *             <li>
   *                 <p>0.072</p>
   *             </li>
   *             <li>
   *                 <p>0.120</p>
   *             </li>
   *             <li>
   *                 <p>0.240</p>
   *             </li>
   *             <li>
   *                 <p>0.360</p>
   *             </li>
   *             <li>
   *                 <p>0.480</p>
   *             </li>
   *             <li>
   *                 <p>0.600</p>
   *             </li>
   *             <li>
   *                 <p>0.720</p>
   *             </li>
   *             <li>
   *                 <p>0.840</p>
   *             </li>
   *             <li>
   *                 <p>0.960</p>
   *             </li>
   *             <li>
   *                 <p>1.080</p>
   *             </li>
   *             <li>
   *                 <p>1.200</p>
   *             </li>
   *          </ul>
   *         <p>Use one of the following prices for semantic segmentation tasks. Prices are in US
   *             dollars.</p>
   *         <ul>
   *             <li>
   *                 <p>0.840</p>
   *             </li>
   *             <li>
   *                 <p>0.960</p>
   *             </li>
   *             <li>
   *                 <p>1.080</p>
   *             </li>
   *             <li>
   *                 <p>1.200</p>
   *             </li>
   *          </ul>
   *         <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon
   *             Augmented AI review tasks. Prices are in US dollars.</p>
   *         <ul>
   *             <li>
   *                 <p>2.400 </p>
   *             </li>
   *             <li>
   *                 <p>2.280 </p>
   *             </li>
   *             <li>
   *                 <p>2.160 </p>
   *             </li>
   *             <li>
   *                 <p>2.040 </p>
   *             </li>
   *             <li>
   *                 <p>1.920 </p>
   *             </li>
   *             <li>
   *                 <p>1.800 </p>
   *             </li>
   *             <li>
   *                 <p>1.680 </p>
   *             </li>
   *             <li>
   *                 <p>1.560 </p>
   *             </li>
   *             <li>
   *                 <p>1.440 </p>
   *             </li>
   *             <li>
   *                 <p>1.320 </p>
   *             </li>
   *             <li>
   *                 <p>1.200 </p>
   *             </li>
   *             <li>
   *                 <p>1.080 </p>
   *             </li>
   *             <li>
   *                 <p>0.960 </p>
   *             </li>
   *             <li>
   *                 <p>0.840 </p>
   *             </li>
   *             <li>
   *                 <p>0.720 </p>
   *             </li>
   *             <li>
   *                 <p>0.600 </p>
   *             </li>
   *             <li>
   *                 <p>0.480 </p>
   *             </li>
   *             <li>
   *                 <p>0.360 </p>
   *             </li>
   *             <li>
   *                 <p>0.240 </p>
   *             </li>
   *             <li>
   *                 <p>0.120 </p>
   *             </li>
   *             <li>
   *                 <p>0.072 </p>
   *             </li>
   *             <li>
   *                 <p>0.060 </p>
   *             </li>
   *             <li>
   *                 <p>0.048 </p>
   *             </li>
   *             <li>
   *                 <p>0.036 </p>
   *             </li>
   *             <li>
   *                 <p>0.024 </p>
   *             </li>
   *             <li>
   *                 <p>0.012 </p>
   *             </li>
   *          </ul>
   *         <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon
   *             Augmented AI review tasks. Prices are in US dollars.</p>
   *         <ul>
   *             <li>
   *                 <p>1.200 </p>
   *             </li>
   *             <li>
   *                 <p>1.080 </p>
   *             </li>
   *             <li>
   *                 <p>0.960 </p>
   *             </li>
   *             <li>
   *                 <p>0.840 </p>
   *             </li>
   *             <li>
   *                 <p>0.720 </p>
   *             </li>
   *             <li>
   *                 <p>0.600 </p>
   *             </li>
   *             <li>
   *                 <p>0.480 </p>
   *             </li>
   *             <li>
   *                 <p>0.360 </p>
   *             </li>
   *             <li>
   *                 <p>0.240 </p>
   *             </li>
   *             <li>
   *                 <p>0.120 </p>
   *             </li>
   *             <li>
   *                 <p>0.072 </p>
   *             </li>
   *             <li>
   *                 <p>0.060 </p>
   *             </li>
   *             <li>
   *                 <p>0.048 </p>
   *             </li>
   *             <li>
   *                 <p>0.036 </p>
   *             </li>
   *             <li>
   *                 <p>0.024 </p>
   *             </li>
   *             <li>
   *                 <p>0.012 </p>
   *             </li>
   *          </ul>
   *         <p>Use one of the following prices for Amazon Augmented AI custom human review tasks.
   *             Prices are in US dollars.</p>
   *         <ul>
   *             <li>
   *                 <p>1.200 </p>
   *             </li>
   *             <li>
   *                 <p>1.080 </p>
   *             </li>
   *             <li>
   *                 <p>0.960 </p>
   *             </li>
   *             <li>
   *                 <p>0.840 </p>
   *             </li>
   *             <li>
   *                 <p>0.720 </p>
   *             </li>
   *             <li>
   *                 <p>0.600 </p>
   *             </li>
   *             <li>
   *                 <p>0.480 </p>
   *             </li>
   *             <li>
   *                 <p>0.360 </p>
   *             </li>
   *             <li>
   *                 <p>0.240 </p>
   *             </li>
   *             <li>
   *                 <p>0.120 </p>
   *             </li>
   *             <li>
   *                 <p>0.072 </p>
   *             </li>
   *             <li>
   *                 <p>0.060 </p>
   *             </li>
   *             <li>
   *                 <p>0.048 </p>
   *             </li>
   *             <li>
   *                 <p>0.036 </p>
   *             </li>
   *             <li>
   *                 <p>0.024 </p>
   *             </li>
   *             <li>
   *                 <p>0.012 </p>
   *             </li>
   *          </ul>
   */
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
}

export namespace HumanLoopConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanLoopConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Container for configuring the source of human task requests.</p>
 */
export interface HumanLoopRequestSource {
  /**
   * <p>Specifies whether Amazon Rekognition or Amazon Textract are used as the integration source.
   *       The default field settings and JSON parsing rules are different based on the integration source. Valid values:</p>
   */
  AwsManagedHumanLoopRequestSource: AwsManagedHumanLoopRequestSource | string | undefined;
}

export namespace HumanLoopRequestSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanLoopRequestSource): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about where human output will be stored.</p>
 */
export interface FlowDefinitionOutputConfig {
  /**
   * <p>The Amazon S3 path where the object containing human output will be made available.</p>
   *          <p>To learn more about the format of Amazon A2I output data, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-output-data.html">Amazon A2I
   *             Output Data</a>.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;
}

export namespace FlowDefinitionOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlowDefinitionOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The Liquid template for the worker user interface.</p>
 */
export interface UiTemplate {
  /**
   * <p>The content of the Liquid template for the worker user interface.</p>
   */
  Content: string | undefined;
}

export namespace UiTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UiTemplate): any => ({
    ...obj,
  });
}

/**
 * <p>Configures a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobConfig {
  /**
   * <p>Specifies how hyperparameter tuning chooses the combinations of hyperparameter values
   *             to use for the training job it launches. To use the Bayesian search strategy, set this
   *             to <code>Bayesian</code>. To randomly search, set it to <code>Random</code>. For
   *             information about search strategies, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How
   *                 Hyperparameter Tuning Works</a>.</p>
   */
  Strategy: HyperParameterTuningJobStrategyType | string | undefined;

  /**
   * <p>The <a>HyperParameterTuningJobObjective</a> object that specifies the
   *             objective
   *             metric for this tuning job.</p>
   */
  HyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the
   *             maximum
   *             number of training jobs and parallel training jobs for this tuning
   *             job.</p>
   */
  ResourceLimits: ResourceLimits | undefined;

  /**
   * <p>The <a>ParameterRanges</a> object that specifies the ranges of
   *             hyperparameters
   *             that this tuning job searches.</p>
   */
  ParameterRanges?: ParameterRanges;

  /**
   * <p>Specifies whether to use early stopping for training jobs launched by the
   *             hyperparameter tuning job. This can be one of the following values (the default value is
   *                 <code>OFF</code>):</p>
   *         <dl>
   *             <dt>OFF</dt>
   *             <dd>
   *                     <p>Training jobs launched by the hyperparameter tuning job do not use early
   *                         stopping.</p>
   *                 </dd>
   *             <dt>AUTO</dt>
   *             <dd>
   *                     <p>SageMaker stops training jobs launched by the hyperparameter tuning job when
   *                         they are unlikely to perform better than previously completed training jobs.
   *                         For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-early-stopping.html">Stop Training Jobs Early</a>.</p>
   *                 </dd>
   *          </dl>
   */
  TrainingJobEarlyStoppingType?: TrainingJobEarlyStoppingType | string;

  /**
   * <p>The tuning job's completion criteria.</p>
   */
  TuningJobCompletionCriteria?: TuningJobCompletionCriteria;
}

export namespace HyperParameterTuningJobConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTuningJobConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Defines
 *             the training jobs launched by a hyperparameter tuning job.</p>
 */
export interface HyperParameterTrainingJobDefinition {
  /**
   * <p>The job definition name.</p>
   */
  DefinitionName?: string;

  /**
   * <p>Defines the objective metric for a hyperparameter tuning job.
   *             Hyperparameter
   *             tuning uses the value of this metric to evaluate the training jobs it launches, and
   *             returns the training job that results in either the highest or lowest value for this
   *             metric, depending on the value you specify for the <code>Type</code>
   *             parameter.</p>
   */
  TuningObjective?: HyperParameterTuningJobObjective;

  /**
   * <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a
   *             hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs
   *             with hyperparameter values within these ranges to find the combination of values that
   *             result in the training job with the best performance as measured by the objective metric
   *             of the hyperparameter tuning job.</p>
   *         <note>
   *             <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job
   *                 can search over. Every possible value of a categorical parameter range counts
   *                 against this limit.</p>
   *         </note>
   */
  HyperParameterRanges?: ParameterRanges;

  /**
   * <p>Specifies the values of hyperparameters
   *             that
   *             do not change for the tuning job.</p>
   */
  StaticHyperParameters?: Record<string, string>;

  /**
   * <p>The <a>HyperParameterAlgorithmSpecification</a> object that
   *             specifies
   *             the resource algorithm to use for the training jobs that the tuning
   *             job launches.</p>
   */
  AlgorithmSpecification: HyperParameterAlgorithmSpecification | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the
   *             IAM
   *             role associated with the training jobs that the tuning job
   *             launches.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>An array of <a>Channel</a> objects that specify
   *             the
   *             input for the training jobs that the tuning job launches.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The <a>VpcConfig</a> object that
   *             specifies
   *             the VPC that you want the training jobs that this hyperparameter
   *             tuning job launches to connect to. Control access to and from your
   *             training
   *             container by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies the path to the Amazon S3 bucket where you
   *             store
   *             model artifacts from the training jobs that the tuning job
   *             launches.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The resources,
   *             including
   *             the compute instances and storage volumes, to use for the training
   *             jobs that the tuning job launches.</p>
   *         <p>Storage volumes store model artifacts and
   *             incremental
   *             states. Training algorithms might also use storage volumes for
   *             scratch
   *             space. If you want SageMaker to use the storage volume to store the
   *             training data, choose <code>File</code> as the <code>TrainingInputMode</code> in the
   *             algorithm specification. For distributed training algorithms, specify an instance count
   *             greater than 1.</p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>Specifies a limit to how long a model hyperparameter training job can run. It also
   *             specifies how long a managed spot training job has to complete. When the job reaches the
   *             time limit, SageMaker ends the training job. Use this API to cap model training costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>Isolates the training container. No inbound or outbound network calls can be made,
   *             except for calls between peers within a training cluster for distributed training. If
   *             network isolation is used for training jobs that are configured to use a VPC, SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
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
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;
}

export namespace HyperParameterTrainingJobDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTrainingJobDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration for a hyperparameter tuning job that uses one or more
 *             previous hyperparameter tuning jobs as a starting point. The results of previous tuning
 *             jobs are used to inform which combinations of hyperparameters to search over in the new
 *             tuning job.</p>
 *         <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using
 *             the objective metric, and the training job that performs the best is compared to the
 *             best training jobs from the parent tuning jobs. From these, the training job that
 *             performs the best as measured by the objective metric is returned as the overall best
 *             training job.</p>
 *         <note>
 *             <p>All training jobs launched by parent hyperparameter tuning jobs and the new
 *                 hyperparameter tuning jobs count against the limit of training jobs for the tuning
 *                 job.</p>
 *         </note>
 */
export interface HyperParameterTuningJobWarmStartConfig {
  /**
   * <p>An array of hyperparameter tuning jobs that are used as the starting point for the new
   *             hyperparameter tuning job. For more information about warm starting a hyperparameter
   *             tuning job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-warm-start.html">Using a Previous
   *                 Hyperparameter Tuning Job as a Starting Point</a>.</p>
   *         <p>Hyperparameter tuning jobs created before October 1, 2018 cannot be used as parent
   *             jobs for warm start tuning jobs.</p>
   */
  ParentHyperParameterTuningJobs: ParentHyperParameterTuningJob[] | undefined;

  /**
   * <p>Specifies one of the following:</p>
   *         <dl>
   *             <dt>IDENTICAL_DATA_AND_ALGORITHM</dt>
   *             <dd>
   *                     <p>The new hyperparameter tuning job uses the same input data and training
   *                         image as the parent tuning jobs. You can change the hyperparameter ranges to
   *                         search and the maximum number of training jobs that the hyperparameter
   *                         tuning job launches. You cannot use a new version of the training algorithm,
   *                         unless the changes in the new version do not affect the algorithm itself.
   *                         For example, changes that improve logging or adding support for a different
   *                         data format are allowed. You can also change hyperparameters from tunable to
   *                         static, and from static to tunable, but the total number of static plus
   *                         tunable hyperparameters must remain the same as it is in all parent jobs.
   *                         The objective metric for the new tuning job must be the same as for all
   *                         parent jobs.</p>
   *                 </dd>
   *             <dt>TRANSFER_LEARNING</dt>
   *             <dd>
   *                     <p>The new hyperparameter tuning job can include input data, hyperparameter
   *                         ranges, maximum number of concurrent training jobs, and maximum number of
   *                         training jobs that are different than those of its parent hyperparameter
   *                         tuning jobs. The training image can also be a different version from the
   *                         version used in the parent hyperparameter tuning job. You can also change
   *                         hyperparameters from tunable to static, and from static to tunable, but the
   *                         total number of static plus tunable hyperparameters must remain the same as
   *                         it is in all parent jobs. The objective metric for the new tuning job must
   *                         be the same as for all parent jobs.</p>
   *                 </dd>
   *          </dl>
   */
  WarmStartType: HyperParameterTuningJobWarmStartType | string | undefined;
}

export namespace HyperParameterTuningJobWarmStartConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTuningJobWarmStartConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The input configuration of the recommendation job.</p>
 */
export interface RecommendationJobInputConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of a versioned model package.</p>
   */
  ModelPackageVersionArn: string | undefined;

  /**
   * <p>Specifies the maximum duration of the job, in seconds.></p>
   */
  JobDurationInSeconds?: number;

  /**
   * <p>Specifies the traffic pattern of the job.</p>
   */
  TrafficPattern?: TrafficPattern;

  /**
   * <p>Defines the resource limit of the job.</p>
   */
  ResourceLimit?: RecommendationJobResourceLimit;

  /**
   * <p>Specifies the endpoint configuration to use for a job.</p>
   */
  EndpointConfigurations?: EndpointInputConfiguration[];

  /**
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service (Amazon Web Services KMS) key
   *          that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
   *          This key will be passed to SageMaker Hosting for endpoint creation. </p>
   *
   *          <p>The SageMaker execution role must have <code>kms:CreateGrant</code> permission in order to encrypt data on the storage
   *          volume of the endpoints created for inference recommendation. The inference recommendation job will fail
   *          asynchronously during endpoint configuration creation if the role passed does not have
   *          <code>kms:CreateGrant</code> permission.</p>
   *
   *          <p>The <code>KmsKeyId</code> can be any of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>// KMS Key ID</p>
   *                <p>
   *                   <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                <p>
   *                   <code>"arn:aws:kms:<region>:<account>:key/<key-id-12ab-34cd-56ef-1234567890ab>"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// KMS Key Alias</p>
   *                <p>
   *                   <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key Alias</p>
   *                <p>
   *                   <code>"arn:aws:kms:<region>:<account>:alias/<ExampleAlias>"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about key identifiers, see
   *          <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">Key identifiers (KeyID)</a> in the
   *          Amazon Web Services Key Management Service (Amazon Web Services KMS) documentation.</p>
   */
  VolumeKmsKeyId?: string;
}

export namespace RecommendationJobInputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationJobInputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the output configuration for the compiled model.</p>
 */
export interface RecommendationJobOutputConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service (Amazon Web Services KMS) key
   *          that Amazon SageMaker uses to encrypt your output artifacts with Amazon S3 server-side encryption.
   *          The SageMaker execution role must have <code>kms:GenerateDataKey</code> permission.</p>
   *
   *          <p>The <code>KmsKeyId</code> can be any of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>// KMS Key ID</p>
   *                <p>
   *                   <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                <p>
   *                   <code>"arn:aws:kms:<region>:<account>:key/<key-id-12ab-34cd-56ef-1234567890ab>"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// KMS Key Alias</p>
   *                <p>
   *                   <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key Alias</p>
   *                <p>
   *                   <code>"arn:aws:kms:<region>:<account>:alias/<ExampleAlias>"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about key identifiers, see
   *          <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">Key identifiers (KeyID)</a> in the
   *          Amazon Web Services Key Management Service (Amazon Web Services KMS) documentation.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Provides information about the output configuration for the compiled
   *          model.</p>
   */
  CompiledOutputConfig?: RecommendationJobCompiledOutputConfig;
}

export namespace RecommendationJobOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationJobOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies conditions for stopping a job. When a job reaches a
 *            stopping condition limit, SageMaker ends the job.</p>
 */
export interface RecommendationJobStoppingConditions {
  /**
   * <p>The maximum number of requests per minute expected for the endpoint.</p>
   */
  MaxInvocations?: number;

  /**
   * <p>The interval of time taken by a model to respond as viewed from SageMaker.
   *           The interval includes the local communication time taken to send the request
   *           and to fetch the response from the container of a model and the time taken to
   *           complete the inference in the container.</p>
   */
  ModelLatencyThresholds?: ModelLatencyThreshold[];
}

export namespace RecommendationJobStoppingConditions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationJobStoppingConditions): any => ({
    ...obj,
  });
}

/**
 * <p>Information required for human workers to complete a labeling task.</p>
 */
export interface HumanTaskConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to complete the tasks.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>Information about the user interface that workers use to complete the labeling
   *             task.</p>
   */
  UiConfig: UiConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function that is run before a data object
   *             is sent to a human worker. Use this function to provide input to a custom labeling
   *             job.</p>
   *         <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in
   *                 task types</a>, use one of the following Amazon SageMaker Ground Truth Lambda function ARNs for
   *                 <code>PreHumanTaskLambdaArn</code>. For custom labeling workflows, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step3.html#sms-custom-templates-step3-prelambda">Pre-annotation Lambda</a>. </p>
   *
   *
   *
   *          <p>
   *             <b>Bounding box</b> - Finds the most similar boxes from
   *                     different workers based on the Jaccard index of the boxes.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *           <p>
   *             <b>Image classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true class of an image based on
   *                     annotations from individual workers.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Multi-label image classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true classes of an image based on
   *                     annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Semantic segmentation</b> - Treats each pixel in an image as
   *                     a multi-class classification and treats pixel annotations from workers as
   *                     "votes" for the correct label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Text classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true class of text based on annotations
   *                     from individual workers.</p>
   *             <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Multi-label text classification</b> - Uses a variant of the
   *                     Expectation Maximization approach to estimate the true classes of text based on
   *                     annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Named entity recognition</b> - Groups similar selections and
   *                     calculates aggregate boundaries, resolving to most-assigned label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>Video Classification</b> - Use this task type when you need workers to classify videos using
   *             predefined labels that you specify. Workers are shown videos and are asked to choose one
   *             label for each video.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame Object Detection</b> - Use this task type to
   *             have workers identify and locate objects in a sequence of video frames (images extracted
   *             from a video) using bounding boxes. For example, you can use this task to ask workers to
   *             identify and localize various objects in a series of video frames, such as cars, bikes,
   *             and pedestrians.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame Object Tracking</b> - Use this task type to
   *             have workers track the movement of objects in a sequence of video frames (images
   *             extracted from a video) using bounding boxes. For example, you can use this task to ask
   *             workers to track the movement of objects, such as cars, bikes, and pedestrians. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>3D Point Cloud Modalities</b>
   *          </p>
   *         <p>Use the following pre-annotation lambdas for 3D point cloud labeling modality tasks.
   *             See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud-task-types.html">3D Point Cloud Task types
   *             </a> to learn more. </p>
   *
   *
   *         <p>
   *             <b>3D Point Cloud Object Detection</b> -
   *         Use this task type when you want workers to classify objects in a 3D point cloud by
   *         drawing 3D cuboids around objects. For example, you can use this task type to ask workers
   *         to identify different types of objects in a point cloud, such as cars, bikes, and pedestrians.</p>
   *                 <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>3D Point Cloud Object Tracking</b> -
   *         Use this task type when you want workers to draw 3D cuboids around objects
   *         that appear in a sequence of 3D point cloud frames.
   *         For example, you can use this task type to ask workers to track
   *         the movement of vehicles across multiple point cloud frames.
   *         </p>
   *                 <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *         <p>
   *             <b>3D Point Cloud Semantic Segmentation</b> -
   *             Use this task type when you want workers to create a point-level semantic segmentation masks by
   *             painting objects in a 3D point cloud using different colors where each color is assigned to one of
   *             the classes you specify.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Use the following ARNs for Label Verification and Adjustment Jobs</b>
   *          </p>
   *         <p>Use label verification and adjustment jobs to review and adjust labels. To learn more,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html">Verify and Adjust Labels </a>.</p>
   *
   *             <p>
   *             <b>Bounding box verification</b> - Uses a variant of the
   *                 Expectation Maximization approach to estimate the true class of verification
   *                 judgement for bounding box labels based on annotations from individual
   *                 workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Bounding box adjustment</b> - Finds the most similar boxes
   *                     from different workers based on the Jaccard index of the adjusted
   *                     annotations.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Semantic segmentation verification</b> - Uses a variant of
   *                     the Expectation Maximization approach to estimate the true class of verification
   *                     judgment for semantic segmentation labels based on annotations from individual
   *                     workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Semantic segmentation adjustment</b> - Treats each pixel in
   *                     an image as a multi-class classification and treats pixel adjusted annotations
   *                     from workers as "votes" for the correct label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>Video Frame Object Detection Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to classify and localize objects in a sequence of video frames.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame Object Tracking Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to track object movement across a sequence of video frames.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>3D point cloud object detection adjustment</b> - Adjust
   *             3D cuboids in a point cloud frame. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>3D point cloud object tracking adjustment</b> - Adjust 3D
   *             cuboids across a sequence of point cloud frames. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>3D point cloud semantic segmentation adjustment</b> -
   *             Adjust semantic segmentation masks in a 3D point cloud. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * <p>Keywords used to describe the task so that workers on Amazon Mechanical Turk can
   *             discover the task.</p>
   */
  TaskKeywords?: string[];

  /**
   * <p>A title for the task for your human workers.</p>
   */
  TaskTitle: string | undefined;

  /**
   * <p>A description of the task for your human workers.</p>
   */
  TaskDescription: string | undefined;

  /**
   * <p>The number of human workers that will label an object. </p>
   */
  NumberOfHumanWorkersPerDataObject: number | undefined;

  /**
   * <p>The amount of time that a worker has to complete a task. </p>
   *         <p>If you create a custom labeling job, the maximum value for this parameter is 8 hours
   *             (28,800 seconds).</p>
   *         <p>If you create a labeling job using a <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task type</a> the maximum
   *             for this parameter depends on the task type you use:</p>
   *         <ul>
   *             <li>
   *                 <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-label-images.html">image</a> and
   *                     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-label-text.html">text</a> labeling jobs,
   *                     the maximum is 8 hours (28,800 seconds).</p>
   *             </li>
   *             <li>
   *                 <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud.html">3D point cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-video.html">video frame</a> labeling jobs, the maximum is 30 days (2952,000 seconds) for non-AL mode. For most users, the maximum is also 30 days.</p>
   *             </li>
   *          </ul>
   */
  TaskTimeLimitInSeconds: number | undefined;

  /**
   * <p>The length of time that a task remains available for labeling by human workers. The
   *             default and maximum values for this parameter depend on the type of workforce you
   *             use.</p>
   *         <ul>
   *             <li>
   *                 <p>If you choose the Amazon Mechanical Turk workforce, the maximum is 12 hours (43,200 seconds).
   *                     The default is 6 hours (21,600 seconds).</p>
   *             </li>
   *             <li>
   *                 <p>If you choose a private or vendor workforce, the default value is 30 days (2592,000 seconds) for non-AL mode. For most users, the maximum is also 30 days.</p>
   *             </li>
   *          </ul>
   */
  TaskAvailabilityLifetimeInSeconds?: number;

  /**
   * <p>Defines the maximum number of data objects that can be labeled by human workers at the
   *             same time. Also referred to as batch size. Each object may have more than one worker at one time.
   *             The default value is 1000 objects.</p>
   */
  MaxConcurrentTaskCount?: number;

  /**
   * <p>Configures how labels are consolidated across human workers.</p>
   */
  AnnotationConsolidationConfig: AnnotationConsolidationConfig | undefined;

  /**
   * <p>The price that you pay for each task performed by an Amazon Mechanical Turk worker.</p>
   */
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
}

export namespace HumanTaskConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanTaskConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Input configuration information for a labeling job.</p>
 */
export interface LabelingJobInputConfig {
  /**
   * <p>The location of the input data.</p>
   */
  DataSource: LabelingJobDataSource | undefined;

  /**
   * <p>Attributes of the data specified by the customer.</p>
   */
  DataAttributes?: LabelingJobDataAttributes;
}

export namespace LabelingJobInputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobInputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for auto-labeling of your data objects. A
 *                 <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use
 *             auto-labeling.</p>
 */
export interface LabelingJobAlgorithmsConfig {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the algorithm used for auto-labeling. You
   *             must select one of the following ARNs:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <i>Image classification</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/image-classification</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Text classification</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/text-classification</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Object detection</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/object-detection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Semantic Segmentation</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/semantic-segmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  LabelingJobAlgorithmSpecificationArn: string | undefined;

  /**
   * <p>At the end of an auto-label job Ground Truth sends the Amazon Resource Name (ARN) of the final
   *             model used for auto-labeling. You can use this model as the starting point for
   *             subsequent similar jobs by providing the ARN of the model here. </p>
   */
  InitialActiveLearningModelArn?: string;

  /**
   * <p>Provides configuration information for a labeling job.</p>
   */
  LabelingJobResourceConfig?: LabelingJobResourceConfig;
}

export namespace LabelingJobAlgorithmsConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobAlgorithmsConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Output configuration information for a labeling job.</p>
 */
export interface LabelingJobOutputConfig {
  /**
   * <p>The Amazon S3 location to write output data.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service ID of the key used to encrypt the output data, if any.</p>
   *         <p>If you provide your own KMS key ID, you must add the required permissions to your KMS
   *             key described in <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security-permission.html#sms-security-kms-permissions">Encrypt Output Data and Storage Volume with Amazon Web Services KMS</a>.</p>
   *         <p>If you don't provide a KMS key ID, Amazon SageMaker uses the default Amazon Web Services KMS key for Amazon S3 for your
   *             role's account to encrypt your output data.</p>
   *         <p>If you use a bucket policy with an <code>s3:PutObject</code> permission that only
   *             allows objects with server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption Keys</a> in the <i>Amazon Simple Storage Service Developer
   *                 Guide.</i>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * <p>An Amazon Simple Notification Service (Amazon SNS) output topic ARN. Provide a <code>SnsTopicArn</code> if you want to
   *             do real time chaining to another streaming job and receive an Amazon SNS notifications each
   *             time a data object is submitted by a worker.</p>
   *          <p>If you provide an <code>SnsTopicArn</code> in <code>OutputConfig</code>, when workers
   *             complete labeling tasks, Ground Truth will send labeling task output data to the SNS output
   *             topic you specify here. </p>
   *         <p>To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-labeling-job.html#sms-streaming-how-it-works-output-data">Receive Output Data from a Streaming Labeling
   *                 Job</a>. </p>
   */
  SnsTopicArn?: string;
}

export namespace LabelingJobOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the
 *             job is automatically stopped. You can use these conditions to control the cost of data
 *             labeling.</p>
 *         <note>
 *             <p>Labeling jobs fail after 30 days with an appropriate client error message.</p>
 *         </note>
 */
export interface LabelingJobStoppingConditions {
  /**
   * <p>The maximum number of objects that can be labeled by human workers.</p>
   */
  MaxHumanLabeledObjectCount?: number;

  /**
   * <p>The maximum number of input data objects that should be labeled.</p>
   */
  MaxPercentageOfInputDatasetLabeled?: number;
}

export namespace LabelingJobStoppingConditions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobStoppingConditions): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies details about how containers in a multi-container endpoint are run.</p>
 */
export interface InferenceExecutionConfig {
  /**
   * <p>How containers in a multi-container are run. The following values are valid.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SERIAL</code> - Containers run as a serial pipeline.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DIRECT</code> - Only the individual container that you specify is
   *                     run.</p>
   *             </li>
   *          </ul>
   */
  Mode: InferenceExecutionMode | string | undefined;
}

export namespace InferenceExecutionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceExecutionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Docker container image configuration object for the model bias job.</p>
 */
export interface ModelBiasAppSpecification {
  /**
   * <p>The container image to be run by the model bias job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>JSON formatted S3 file that defines bias parameters. For more information on this JSON
   *          configuration file, see <a href="https://docs.aws.amazon.com/sagemaker/latest/json-bias-parameter-config.html">Configure bias
   *          parameters</a>.</p>
   */
  ConfigUri: string | undefined;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;
}

export namespace ModelBiasAppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelBiasAppSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for a baseline model bias job.</p>
 */
export interface ModelBiasBaselineConfig {
  /**
   * <p>The name of the baseline model bias job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

export namespace ModelBiasBaselineConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelBiasBaselineConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Inputs for the model bias job.</p>
 */
export interface ModelBiasJobInput {
  /**
   * <p>Input object for the endpoint</p>
   */
  EndpointInput: EndpointInput | undefined;

  /**
   * <p>Location of ground truth labels to use in model bias job.</p>
   */
  GroundTruthS3Input: MonitoringGroundTruthS3Input | undefined;
}

export namespace ModelBiasJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelBiasJobInput): any => ({
    ...obj,
  });
}

/**
 * <p>Docker container image configuration object for the model explainability job.</p>
 */
export interface ModelExplainabilityAppSpecification {
  /**
   * <p>The container image to be run by the model explainability job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>JSON formatted S3 file that defines explainability parameters. For more information on
   *          this JSON configuration file, see <a href="https://docs.aws.amazon.com/sagemaker/latest/json-model-explainability-parameter-config.html">Configure model
   *             explainability parameters</a>.</p>
   */
  ConfigUri: string | undefined;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;
}

export namespace ModelExplainabilityAppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelExplainabilityAppSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for a baseline model explainability job.</p>
 */
export interface ModelExplainabilityBaselineConfig {
  /**
   * <p>The name of the baseline model explainability job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

export namespace ModelExplainabilityBaselineConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelExplainabilityBaselineConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Inputs for the model explainability job.</p>
 */
export interface ModelExplainabilityJobInput {
  /**
   * <p>Input object for the endpoint</p>
   */
  EndpointInput: EndpointInput | undefined;
}

export namespace ModelExplainabilityJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelExplainabilityJobInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the drift check baselines that can be used when the model monitor is set using the model
 *             package. </p>
 */
export interface DriftCheckBaselines {
  /**
   * <p>Represents the drift check bias baselines that can be used when the model monitor is set using the model
   *             package. </p>
   */
  Bias?: DriftCheckBias;

  /**
   * <p>Represents the drift check explainability baselines that can be used when the model monitor is set using
   *             the model package. </p>
   */
  Explainability?: DriftCheckExplainability;

  /**
   * <p>Represents the drift check model quality baselines that can be used when the model monitor is set using
   *             the model package.</p>
   */
  ModelQuality?: DriftCheckModelQuality;

  /**
   * <p>Represents the drift check model data quality baselines that can be used when the model monitor is set
   *             using the model package.</p>
   */
  ModelDataQuality?: DriftCheckModelDataQuality;
}

export namespace DriftCheckBaselines {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DriftCheckBaselines): any => ({
    ...obj,
  });
}

/**
 * <p>Contains metrics captured from a model.</p>
 */
export interface ModelMetrics {
  /**
   * <p>Metrics that measure the quality of a model.</p>
   */
  ModelQuality?: ModelQuality;

  /**
   * <p>Metrics that measure the quality of the input data for a model.</p>
   */
  ModelDataQuality?: ModelDataQuality;

  /**
   * <p>Metrics that measure bais in a model.</p>
   */
  Bias?: Bias;

  /**
   * <p>Metrics that help explain a model.</p>
   */
  Explainability?: Explainability;
}

export namespace ModelMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>A list of algorithms that were used to create a model package.</p>
 */
export interface SourceAlgorithmSpecification {
  /**
   * <p>A list of the algorithms that were used to create a model package.</p>
   */
  SourceAlgorithms: SourceAlgorithm[] | undefined;
}

export namespace SourceAlgorithmSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceAlgorithmSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies batch transform jobs that SageMaker runs to validate your model package.</p>
 */
export interface ModelPackageValidationSpecification {
  /**
   * <p>The IAM roles to be used for the validation of the model package.</p>
   */
  ValidationRole: string | undefined;

  /**
   * <p>An array of <code>ModelPackageValidationProfile</code> objects, each of which
   *             specifies a batch transform job that SageMaker runs to validate your model package.</p>
   */
  ValidationProfiles: ModelPackageValidationProfile[] | undefined;
}

export namespace ModelPackageValidationSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageValidationSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Container image configuration object for the monitoring job.</p>
 */
export interface ModelQualityAppSpecification {
  /**
   * <p>The address of the container image that the monitoring job runs.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>Specifies the entrypoint for a container that the monitoring job runs.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>An array of arguments for the container used to run the monitoring job.</p>
   */
  ContainerArguments?: string[];

  /**
   * <p>An Amazon S3 URI to a script that is called per row prior to running analysis. It can
   *          base64 decode the payload and convert it into a flatted json so that the built-in container
   *          can use the converted data. Applicable only for the built-in (first party)
   *          containers.</p>
   */
  RecordPreprocessorSourceUri?: string;

  /**
   * <p>An Amazon S3 URI to a script that is called after analysis has been performed.
   *          Applicable only for the built-in (first party) containers.</p>
   */
  PostAnalyticsProcessorSourceUri?: string;

  /**
   * <p>The machine learning problem type of the model that the monitoring job monitors.</p>
   */
  ProblemType?: MonitoringProblemType | string;

  /**
   * <p>Sets the environment variables in the container that the monitoring job runs.</p>
   */
  Environment?: Record<string, string>;
}

export namespace ModelQualityAppSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelQualityAppSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for monitoring constraints and monitoring statistics. These baseline
 *          resources are compared against the results of the current job from the series of jobs
 *          scheduled to collect data periodically.</p>
 */
export interface ModelQualityBaselineConfig {
  /**
   * <p>The name of the job that performs baselining for the monitoring job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

export namespace ModelQualityBaselineConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelQualityBaselineConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the model quality monitoring job. Currently endponts are supported for
 *          input for model quality monitoring jobs.</p>
 */
export interface ModelQualityJobInput {
  /**
   * <p>Input object for the endpoint</p>
   */
  EndpointInput: EndpointInput | undefined;

  /**
   * <p>The ground truth label provided for the model.</p>
   */
  GroundTruthS3Input: MonitoringGroundTruthS3Input | undefined;
}

export namespace ModelQualityJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelQualityJobInput): any => ({
    ...obj,
  });
}

/**
 * <p>Networking options for a job, such as network traffic encryption between containers,
 *          whether to allow inbound and outbound network calls to and from containers, and the VPC
 *          subnets and security groups to use for VPC-enabled jobs.</p>
 */
export interface NetworkConfig {
  /**
   * <p>Whether to encrypt all communications between distributed processing jobs. Choose
   *             <code>True</code> to encrypt communications. Encryption provides greater security for distributed
   *             processing jobs, but the processing might take longer.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>Whether to allow inbound and outbound network calls to and from the containers used for
   *          the processing job.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
   *             access to and from your training and model containers by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace NetworkConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configures the monitoring schedule and defines the monitoring job.</p>
 */
export interface MonitoringScheduleConfig {
  /**
   * <p>Configures the monitoring schedule.</p>
   */
  ScheduleConfig?: ScheduleConfig;

  /**
   * <p>Defines the monitoring job.</p>
   */
  MonitoringJobDefinition?: MonitoringJobDefinition;

  /**
   * <p>The name of the monitoring job definition to schedule.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>The type of the monitoring job definition to schedule.</p>
   */
  MonitoringType?: MonitoringType | string;
}

export namespace MonitoringScheduleConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringScheduleConfig): any => ({
    ...obj,
  });
}

export enum NotebookInstanceAcceleratorType {
  ML_EIA1_LARGE = "ml.eia1.large",
  ML_EIA1_MEDIUM = "ml.eia1.medium",
  ML_EIA1_XLARGE = "ml.eia1.xlarge",
  ML_EIA2_LARGE = "ml.eia2.large",
  ML_EIA2_MEDIUM = "ml.eia2.medium",
  ML_EIA2_XLARGE = "ml.eia2.xlarge",
}

/**
 * <p>Information on the IMDS configuration of the notebook instance</p>
 */
export interface InstanceMetadataServiceConfiguration {
  /**
   * <p>Indicates the minimum IMDS version that the notebook instance supports. When passed as part of <code>CreateNotebookInstance</code>, if no value is selected, then it defaults to IMDSv1. This means that both IMDSv1 and IMDSv2 are supported. If passed as part of <code>UpdateNotebookInstance</code>, there is no default.</p>
   */
  MinimumInstanceMetadataServiceVersion: string | undefined;
}

export namespace InstanceMetadataServiceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceMetadataServiceConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the notebook instance lifecycle configuration script.</p>
 *         <p>Each lifecycle configuration script has a limit of 16384 characters.</p>
 *         <p>The value of the <code>$PATH</code> environment variable that is available to both
 *             scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p>
 *         <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group
 *                 <code>/aws/sagemaker/NotebookInstances</code> in log stream
 *                 <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p>
 *         <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs
 *             for longer than 5 minutes, it fails and the notebook instance is not created or
 *             started.</p>
 *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
 *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
 */
export interface NotebookInstanceLifecycleHook {
  /**
   * <p>A base64-encoded string that contains a shell script for a notebook instance lifecycle
   *             configuration.</p>
   */
  Content?: string;
}

export namespace NotebookInstanceLifecycleHook {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotebookInstanceLifecycleHook): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration that controls the parallelism of the pipeline.
 *             By default, the parallelism configuration specified applies to all
 *             executions of the pipeline unless overridden.</p>
 */
export interface ParallelismConfiguration {
  /**
   * <p>The max number of steps that can be executed in parallel. </p>
   */
  MaxParallelExecutionSteps: number | undefined;
}

export namespace ParallelismConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParallelismConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The location of the pipeline definition stored in Amazon S3.</p>
 */
export interface PipelineDefinitionS3Location {
  /**
   * <p>Name of the S3 bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The object key (or key name) uniquely identifies the
   *             object in an S3 bucket. </p>
   */
  ObjectKey: string | undefined;

  /**
   * <p>Version Id of the pipeline definition file. If not specified, Amazon SageMaker
   *             will retrieve the latest version.</p>
   */
  VersionId?: string;
}

export namespace PipelineDefinitionS3Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineDefinitionS3Location): any => ({
    ...obj,
  });
}

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
export interface ExperimentConfig {
  /**
   * <p>The name of an existing experiment to associate the trial component with.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The name of an existing trial to associate the trial component with. If not specified, a
   *       new trial is created.</p>
   */
  TrialName?: string;

  /**
   * <p>The display name for the trial component. If this key isn't specified, the display name is
   *       the trial component name.</p>
   */
  TrialComponentDisplayName?: string;
}

export namespace ExperimentConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The inputs for a processing job. The processing input must specify exactly one of either
 *             <code>S3Input</code> or <code>DatasetDefinition</code> types.</p>
 */
export interface ProcessingInput {
  /**
   * <p>The name for the processing job input.</p>
   */
  InputName: string | undefined;

  /**
   * <p>When <code>True</code>, input operations such as data download are managed natively by the
   *             processing job application. When <code>False</code> (default), input operations are managed by Amazon SageMaker.</p>
   */
  AppManaged?: boolean;

  /**
   * <p>Configuration for downloading input data from Amazon S3 into the processing container.</p>
   */
  S3Input?: ProcessingS3Input;

  /**
   * <p>Configuration for a Dataset Definition input. </p>
   */
  DatasetDefinition?: DatasetDefinition;
}

export namespace ProcessingInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingInput): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for uploading output from the processing container.</p>
 */
export interface ProcessingOutputConfig {
  /**
   * <p>An array of outputs configuring the data to upload from the processing container.</p>
   */
  Outputs: ProcessingOutput[] | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt the processing
   *             job output. <code>KmsKeyId</code> can be an ID of a KMS key, ARN of a KMS key, alias of
   *             a KMS key, or alias of a KMS key. The <code>KmsKeyId</code> is applied to all
   *             outputs.</p>
   */
  KmsKeyId?: string;
}

export namespace ProcessingOutputConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingOutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
 *             processing job. In distributed training, you specify more than one instance.</p>
 */
export interface ProcessingResources {
  /**
   * <p>The configuration for the resources in a cluster used to run the processing
   *             job.</p>
   */
  ClusterConfig: ProcessingClusterConfig | undefined;
}

export namespace ProcessingResources {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingResources): any => ({
    ...obj,
  });
}

/**
 * <p>Configures conditions under which the processing job should be stopped, such as how long
 *             the processing job has been running. After the condition is met, the processing job is stopped.</p>
 */
export interface ProcessingStoppingCondition {
  /**
   * <p>Specifies the maximum runtime in seconds.</p>
   */
  MaxRuntimeInSeconds: number | undefined;
}

export namespace ProcessingStoppingCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingStoppingCondition): any => ({
    ...obj,
  });
}

/**
 * <p>Details that you specify to provision a service catalog product. For information about
 *             service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
 *                 Catalog</a>.</p>
 */
export interface ServiceCatalogProvisioningDetails {
  /**
   * <p>The ID of the product to provision.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The ID of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. </p>
   */
  PathId?: string;

  /**
   * <p>A list of key value pairs that you specify when you provision a product.</p>
   */
  ProvisioningParameters?: ProvisioningParameter[];
}

export namespace ServiceCatalogProvisioningDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceCatalogProvisioningDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for the Debugger hook parameters, metric and tensor collections, and
 *             storage paths. To learn more about
 *             how to configure the <code>DebugHookConfig</code> parameter,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
 */
export interface DebugHookConfig {
  /**
   * <p>Path to local storage location for metrics and tensors. Defaults to
   *                 <code>/opt/ml/output/tensors/</code>.</p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for metrics and tensors.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>Configuration information for the Debugger hook parameters.</p>
   */
  HookParameters?: Record<string, string>;

  /**
   * <p>Configuration information for Debugger tensor collections. To learn more about
   *             how to configure the <code>CollectionConfiguration</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   */
  CollectionConfigurations?: CollectionConfiguration[];
}

export namespace DebugHookConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DebugHookConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for SageMaker Debugger rules for debugging. To learn more about
 *             how to configure the <code>DebugRuleConfiguration</code> parameter,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
 */
export interface DebugRuleConfiguration {
  /**
   * <p>The name of the rule configuration. It must be unique relative to other rule
   *             configuration names.</p>
   */
  RuleConfigurationName: string | undefined;

  /**
   * <p>Path to local storage location for output of rules. Defaults to
   *                 <code>/opt/ml/processing/output/rule/</code>.</p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for rules.</p>
   */
  S3OutputPath?: string;

  /**
   * <p>The Amazon Elastic Container (ECR) Image for the managed rule evaluation.</p>
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * <p>The instance type to deploy a Debugger custom rule for debugging a training job.</p>
   */
  InstanceType?: ProcessingInstanceType | string;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the processing instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>Runtime configuration for rule container.</p>
   */
  RuleParameters?: Record<string, string>;
}

export namespace DebugRuleConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DebugRuleConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for Debugger system monitoring, framework profiling, and
 *             storage paths.</p>
 */
export interface ProfilerConfig {
  /**
   * <p>Path to Amazon S3 storage location for system and framework metrics.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>A time interval for capturing system metrics in milliseconds. Available values are
   *             100, 200, 500, 1000 (1 second), 5000 (5 seconds), and 60000 (1 minute) milliseconds. The default value is 500 milliseconds.</p>
   */
  ProfilingIntervalInMilliseconds?: number;

  /**
   * <p>Configuration information for capturing framework metrics. Available key strings for different profiling options are
   *             <code>DetailedProfilingConfig</code>, <code>PythonProfilingConfig</code>, and <code>DataLoaderProfilingConfig</code>.
   *             The following codes are configuration structures for the <code>ProfilingParameters</code> parameter. To learn more about
   *             how to configure the <code>ProfilingParameters</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   */
  ProfilingParameters?: Record<string, string>;
}

export namespace ProfilerConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProfilerConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for profiling rules.</p>
 */
export interface ProfilerRuleConfiguration {
  /**
   * <p>The name of the rule configuration. It must be unique relative to other rule configuration names.</p>
   */
  RuleConfigurationName: string | undefined;

  /**
   * <p>Path to local storage location for output of rules. Defaults to <code>/opt/ml/processing/output/rule/</code>. </p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for rules.</p>
   */
  S3OutputPath?: string;

  /**
   * <p>The Amazon Elastic Container (ECR) Image for the managed rule evaluation.</p>
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * <p>The instance type to deploy a Debugger custom rule for profiling a training job.</p>
   */
  InstanceType?: ProcessingInstanceType | string;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the processing instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>Runtime configuration for rule container.</p>
   */
  RuleParameters?: Record<string, string>;
}

export namespace ProfilerRuleConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProfilerRuleConfiguration): any => ({
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

export interface ListPipelineExecutionStepsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * <p>If the result of the previous <code>ListPipelineExecutionSteps</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline execution steps, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of pipeline execution steps to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListPipelineExecutionStepsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelineExecutionStepsRequest): any => ({
    ...obj,
  });
}

export interface ListPipelineExecutionStepsResponse {
  /**
   * <p>A list of <code>PipeLineExecutionStep</code> objects. Each
   *             <code>PipeLineExecutionStep</code> consists of StepName, StartTime, EndTime, StepStatus,
   *          and Metadata. Metadata is an object with properties for each job that contains relevant
   *          information about the job created by the step.</p>
   */
  PipelineExecutionSteps?: PipelineExecutionStep[];

  /**
   * <p>If the result of the previous <code>ListPipelineExecutionSteps</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline execution steps, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListPipelineExecutionStepsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelineExecutionStepsResponse): any => ({
    ...obj,
  });
}

export interface ListPipelineParametersForExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>If the result of the previous <code>ListPipelineParametersForExecution</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of parameters, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of parameters to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListPipelineParametersForExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelineParametersForExecutionRequest): any => ({
    ...obj,
  });
}

export interface ListPipelineParametersForExecutionResponse {
  /**
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   */
  PipelineParameters?: Parameter[];

  /**
   * <p>If the result of the previous <code>ListPipelineParametersForExecution</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of parameters, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListPipelineParametersForExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelineParametersForExecutionResponse): any => ({
    ...obj,
  });
}

export interface ListPipelinesRequest {
  /**
   * <p>The prefix of the pipeline name.</p>
   */
  PipelineNamePrefix?: string;

  /**
   * <p>A filter that returns the pipelines that were created after a specified
   *          time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns the pipelines that were created before a specified
   *          time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   */
  SortBy?: SortPipelinesBy | string;

  /**
   * <p>The sort order for results.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the result of the previous <code>ListPipelines</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipelines, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of pipelines to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListPipelinesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelinesRequest): any => ({
    ...obj,
  });
}

export interface ListPipelinesResponse {
  /**
   * <p>Contains a sorted list of <code>PipelineSummary</code> objects matching the specified
   *          filters. Each <code>PipelineSummary</code> consists of PipelineArn, PipelineName,
   *          ExperimentName, PipelineDescription, CreationTime, LastModifiedTime, LastRunTime, and
   *          RoleArn. This list can be empty. </p>
   */
  PipelineSummaries?: PipelineSummary[];

  /**
   * <p>If the result of the previous <code>ListPipelines</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipelines, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListPipelinesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelinesResponse): any => ({
    ...obj,
  });
}

export interface ListProcessingJobsRequest {
  /**
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only processing jobs modified after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only processing jobs modified before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A string in the processing job name. This filter returns only processing jobs whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves only processing jobs with a specific status.</p>
   */
  StatusEquals?: ProcessingJobStatus | string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the result of the previous <code>ListProcessingJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of processing
   *             jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of processing jobs to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListProcessingJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProcessingJobsRequest): any => ({
    ...obj,
  });
}

export interface ListProcessingJobsResponse {
  /**
   * <p>An array of <code>ProcessingJobSummary</code> objects, each listing a processing
   *             job.</p>
   */
  ProcessingJobSummaries: ProcessingJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             processing jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListProcessingJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProcessingJobsResponse): any => ({
    ...obj,
  });
}

export interface ListProjectsInput {
  /**
   * <p>A filter that returns the projects that were created after a specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns the projects that were created before a specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of projects to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns the projects whose name contains a specified
   *             string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListProjects</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of projects, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field by which to sort results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ProjectSortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: ProjectSortOrder | string;
}

export namespace ListProjectsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProjectsInput): any => ({
    ...obj,
  });
}

export interface ListProjectsOutput {
  /**
   * <p>A list of summaries of projects.</p>
   */
  ProjectSummaryList: ProjectSummary[] | undefined;

  /**
   * <p>If the result of the previous <code>ListCompilationJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             compilation jobs, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListProjectsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProjectsOutput): any => ({
    ...obj,
  });
}

export interface ListStudioLifecycleConfigsRequest {
  /**
   * <p>The maximum number of Studio Lifecycle Configurations to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to ListStudioLifecycleConfigs didn't return the full set of Lifecycle Configurations, the call returns a token for getting the next set of Lifecycle Configurations.</p>
   */
  NextToken?: string;

  /**
   * <p>A string in the Lifecycle Configuration name. This filter returns only Lifecycle Configurations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A parameter to search for the App Type to which the Lifecycle Configuration is attached.</p>
   */
  AppTypeEquals?: StudioLifecycleConfigAppType | string;

  /**
   * <p>A filter that returns only Lifecycle Configurations created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only Lifecycle Configurations created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only Lifecycle Configurations modified before the specified time.</p>
   */
  ModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only Lifecycle Configurations modified after the specified time.</p>
   */
  ModifiedTimeAfter?: Date;

  /**
   * <p>The property used to sort results. The default value is CreationTime.</p>
   */
  SortBy?: StudioLifecycleConfigSortKey | string;

  /**
   * <p>The sort order. The default value is Descending.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListStudioLifecycleConfigsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStudioLifecycleConfigsRequest): any => ({
    ...obj,
  });
}

export interface ListStudioLifecycleConfigsResponse {
  /**
   * <p>A token for getting the next set of actions, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of Lifecycle Configurations and their properties.</p>
   */
  StudioLifecycleConfigs?: StudioLifecycleConfigDetails[];
}

export namespace ListStudioLifecycleConfigsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStudioLifecycleConfigsResponse): any => ({
    ...obj,
  });
}

export interface ListSubscribedWorkteamsRequest {
  /**
   * <p>A string in the work team name. This filter returns only work teams whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListSubscribedWorkteams</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             labeling jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of work teams to return in each page of the response.</p>
   */
  MaxResults?: number;
}

export namespace ListSubscribedWorkteamsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSubscribedWorkteamsRequest): any => ({
    ...obj,
  });
}

export interface ListSubscribedWorkteamsResponse {
  /**
   * <p>An array of <code>Workteam</code> objects, each describing a work team.</p>
   */
  SubscribedWorkteams: SubscribedWorkteam[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             work teams, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListSubscribedWorkteamsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSubscribedWorkteamsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to
   *             retrieve.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p> If the response to the previous <code>ListTags</code> request is truncated, SageMaker
   *             returns this token. To retrieve the next set of tags, use it in the subsequent request.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of tags to return.</p>
   */
  MaxResults?: number;
}

export namespace ListTagsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsInput): any => ({
    ...obj,
  });
}

export interface ListTagsOutput {
  /**
   * <p>An array of <code>Tag</code> objects, each with a tag key and a value.</p>
   */
  Tags?: Tag[];

  /**
   * <p> If response is truncated, SageMaker includes a token in the response. You can use this
   *             token in your subsequent request to fetch next set of tokens. </p>
   */
  NextToken?: string;
}

export namespace ListTagsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsOutput): any => ({
    ...obj,
  });
}

export interface ListTrainingJobsRequest {
  /**
   * <p>If the result of the previous <code>ListTrainingJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of training
   *             jobs, use the token in the next request. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of training jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only training jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only training jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only training jobs modified after the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only training jobs modified before the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A string in the training job name. This filter returns only training jobs whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves only training jobs with a specific status.</p>
   */
  StatusEquals?: TrainingJobStatus | string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListTrainingJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrainingJobsRequest): any => ({
    ...obj,
  });
}

export interface ListTrainingJobsResponse {
  /**
   * <p>An array of <code>TrainingJobSummary</code> objects, each listing a training
   *             job.</p>
   */
  TrainingJobSummaries: TrainingJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListTrainingJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrainingJobsResponse): any => ({
    ...obj,
  });
}

export interface ListTrainingJobsForHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job whose training jobs you want to list.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>If the result of the previous <code>ListTrainingJobsForHyperParameterTuningJob</code>
   *             request was truncated, the response includes a <code>NextToken</code>. To retrieve the
   *             next set of training jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of training jobs to return. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only training jobs with the specified status.</p>
   */
  StatusEquals?: TrainingJobStatus | string;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   *         <p>If the value of this field is <code>FinalObjectiveMetricValue</code>, any training
   *             jobs that did not return an objective metric are not listed.</p>
   */
  SortBy?: TrainingJobSortByOptions | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListTrainingJobsForHyperParameterTuningJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrainingJobsForHyperParameterTuningJobRequest): any => ({
    ...obj,
  });
}

export interface ListTrainingJobsForHyperParameterTuningJobResponse {
  /**
   * <p>A list of <a>TrainingJobSummary</a> objects that
   *             describe
   *             the training jobs that the
   *                 <code>ListTrainingJobsForHyperParameterTuningJob</code> request returned.</p>
   */
  TrainingJobSummaries: HyperParameterTrainingJobSummary[] | undefined;

  /**
   * <p>If the result of this <code>ListTrainingJobsForHyperParameterTuningJob</code> request
   *             was truncated, the response includes a <code>NextToken</code>. To retrieve the next set
   *             of training jobs, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListTrainingJobsForHyperParameterTuningJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrainingJobsForHyperParameterTuningJobResponse): any => ({
    ...obj,
  });
}

export interface ListTransformJobsRequest {
  /**
   * <p>A filter that returns only transform jobs created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only transform jobs created before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only transform jobs modified after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only transform jobs modified before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A string in the transform job name. This filter returns only transform jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves only transform jobs with a specific status.</p>
   */
  StatusEquals?: TransformJobStatus | string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the result of the previous <code>ListTransformJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of transform
   *             jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of transform jobs to return in the response. The default value is <code>10</code>.</p>
   */
  MaxResults?: number;
}

export namespace ListTransformJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTransformJobsRequest): any => ({
    ...obj,
  });
}

export interface ListTransformJobsResponse {
  /**
   * <p>An array of
   *                 <code>TransformJobSummary</code>
   *             objects.</p>
   */
  TransformJobSummaries: TransformJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             transform jobs, use it in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListTransformJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTransformJobsResponse): any => ({
    ...obj,
  });
}

export interface ListTrialComponentsRequest {
  /**
   * <p>A filter that returns only components that are part of the specified experiment. If you
   *       specify <code>ExperimentName</code>, you can't filter by <code>SourceArn</code> or
   *         <code>TrialName</code>.</p>
   */
  ExperimentName?: string;

  /**
   * <p>A filter that returns only components that are part of the specified trial. If you specify
   *         <code>TrialName</code>, you can't filter by <code>ExperimentName</code> or
   *         <code>SourceArn</code>.</p>
   */
  TrialName?: string;

  /**
   * <p>A filter that returns only components that have the specified source Amazon Resource Name
   *       (ARN). If you specify <code>SourceArn</code>, you can't filter by <code>ExperimentName</code>
   *       or <code>TrialName</code>.</p>
   */
  SourceArn?: string;

  /**
   * <p>A filter that returns only components created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only components created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortTrialComponentsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The maximum number of components to return in the response. The default value is
   *       10.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListTrialComponents</code> didn't return the full set of
   *       components, the call returns a token for getting the next set of components.</p>
   */
  NextToken?: string;
}

export namespace ListTrialComponentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrialComponentsRequest): any => ({
    ...obj,
  });
}

export interface ListTrialComponentsResponse {
  /**
   * <p>A list of the summaries of your trial components.</p>
   */
  TrialComponentSummaries?: TrialComponentSummary[];

  /**
   * <p>A token for getting the next set of components, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListTrialComponentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrialComponentsResponse): any => ({
    ...obj,
  });
}

export interface ListTrialsRequest {
  /**
   * <p>A filter that returns only trials that are part of the specified experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>A filter that returns only trials that are associated with the specified trial
   *       component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>A filter that returns only trials created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only trials created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortTrialsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The maximum number of trials to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListTrials</code> didn't return the full set of trials, the
   *       call returns a token for getting the next set of trials.</p>
   */
  NextToken?: string;
}

export namespace ListTrialsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrialsRequest): any => ({
    ...obj,
  });
}

export interface ListTrialsResponse {
  /**
   * <p>A list of the summaries of your trials.</p>
   */
  TrialSummaries?: TrialSummary[];

  /**
   * <p>A token for getting the next set of trials, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListTrialsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrialsResponse): any => ({
    ...obj,
  });
}

export interface ListUserProfilesRequest {
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
  SortBy?: UserProfileSortKey | string;

  /**
   * <p>A parameter by which to filter the results.</p>
   */
  DomainIdEquals?: string;

  /**
   * <p>A parameter by which to filter the results.</p>
   */
  UserProfileNameContains?: string;
}

export namespace ListUserProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUserProfilesRequest): any => ({
    ...obj,
  });
}

export interface ListUserProfilesResponse {
  /**
   * <p>The list of user profiles.</p>
   */
  UserProfiles?: UserProfileDetails[];

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListUserProfilesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUserProfilesResponse): any => ({
    ...obj,
  });
}

export interface ListWorkforcesRequest {
  /**
   * <p>Sort workforces using the workforce name or creation date.</p>
   */
  SortBy?: ListWorkforcesSortByOptions | string;

  /**
   * <p>Sort workforces in ascending or descending order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter you can use to search for workforces using part of the workforce name.</p>
   */
  NameContains?: string;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of workforces returned in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListWorkforcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkforcesRequest): any => ({
    ...obj,
  });
}

export interface ListWorkforcesResponse {
  /**
   * <p>A list containing information about your workforce.</p>
   */
  Workforces: Workforce[] | undefined;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

export namespace ListWorkforcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkforcesResponse): any => ({
    ...obj,
  });
}

export interface ListWorkteamsRequest {
  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListWorkteamsSortByOptions | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A string in the work team's name. This filter returns only work teams whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListWorkteams</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of work teams to return in each page of the response.</p>
   */
  MaxResults?: number;
}

export namespace ListWorkteamsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkteamsRequest): any => ({
    ...obj,
  });
}

export interface ListWorkteamsResponse {
  /**
   * <p>An array of <code>Workteam</code> objects, each describing a work team.</p>
   */
  Workteams: Workteam[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             work teams, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListWorkteamsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkteamsResponse): any => ({
    ...obj,
  });
}

export interface PutModelPackageGroupPolicyInput {
  /**
   * <p>The name of the model group to add a resource policy to.</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>The resource policy for the model group.</p>
   */
  ResourcePolicy: string | undefined;
}

export namespace PutModelPackageGroupPolicyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutModelPackageGroupPolicyInput): any => ({
    ...obj,
  });
}

export interface PutModelPackageGroupPolicyOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model package group.</p>
   */
  ModelPackageGroupArn: string | undefined;
}

export namespace PutModelPackageGroupPolicyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutModelPackageGroupPolicyOutput): any => ({
    ...obj,
  });
}

export interface QueryLineageRequest {
  /**
   * <p>A list of resource Amazon Resource Name (ARN) that represent the starting point for your lineage query.</p>
   */
  StartArns: string[] | undefined;

  /**
   * <p>Associations between lineage entities have a direction.  This parameter determines the direction from the
   *          StartArn(s) that the query traverses.</p>
   */
  Direction?: Direction | string;

  /**
   * <p> Setting this value to <code>True</code> retrieves not only the entities of interest but also the
   *          <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking-entities.html">Associations</a> and
   *          lineage entities on the path. Set to <code>False</code> to only return lineage entities that match your query.</p>
   */
  IncludeEdges?: boolean;

  /**
   * <p>A set of filtering parameters that allow you to specify which entities should be returned.</p>
   *          <ul>
   *             <li>
   *                <p>Properties - Key-value pairs to match on the lineage entities' properties.</p>
   *             </li>
   *             <li>
   *                <p>LineageTypes - A set of lineage entity types to match on. For example: <code>TrialComponent</code>,
   *             <code>Artifact</code>, or <code>Context</code>.</p>
   *             </li>
   *             <li>
   *                <p>CreatedBefore - Filter entities created before this date.</p>
   *             </li>
   *             <li>
   *                <p>ModifiedBefore - Filter entities modified before this date.</p>
   *             </li>
   *             <li>
   *                <p>ModifiedAfter - Filter entities modified after this date.</p>
   *             </li>
   *          </ul>
   */
  Filters?: QueryFilters;

  /**
   * <p>The maximum depth in lineage relationships from the <code>StartArns</code> that are traversed. Depth is a measure of the number
   *          of <code>Associations</code> from the <code>StartArn</code> entity to the matched results.</p>
   */
  MaxDepth?: number;

  /**
   * <p>Limits the number of vertices in the results. Use the <code>NextToken</code> in a response to to retrieve the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Limits the number of vertices in the request. Use the <code>NextToken</code> in a response to to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace QueryLineageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryLineageRequest): any => ({
    ...obj,
  });
}

export interface QueryLineageResponse {
  /**
   * <p>A list of vertices connected to the start entity(ies) in the lineage graph.</p>
   */
  Vertices?: Vertex[];

  /**
   * <p>A list of edges that connect vertices in the response.</p>
   */
  Edges?: Edge[];

  /**
   * <p>Limits the number of vertices in the response. Use the <code>NextToken</code> in a response to to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace QueryLineageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryLineageResponse): any => ({
    ...obj,
  });
}

export interface RegisterDevicesRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>A list of devices to register with SageMaker Edge Manager.</p>
   */
  Devices: Device[] | undefined;

  /**
   * <p>The tags associated with devices.</p>
   */
  Tags?: Tag[];
}

export namespace RegisterDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterDevicesRequest): any => ({
    ...obj,
  });
}

export interface RenderUiTemplateRequest {
  /**
   * <p>A <code>Template</code> object containing the worker UI template to render.</p>
   */
  UiTemplate?: UiTemplate;

  /**
   * <p>A <code>RenderableTask</code> object containing a representative task to
   *             render.</p>
   */
  Task: RenderableTask | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that has access to the S3 objects that are used by the
   *             template.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The <code>HumanTaskUiArn</code> of the worker UI that you want to render. Do not
   *             provide a <code>HumanTaskUiArn</code> if you use the <code>UiTemplate</code>
   *             parameter.</p>
   *         <p>See a list of available Human Ui Amazon Resource Names (ARNs) in <a>UiConfig</a>.</p>
   */
  HumanTaskUiArn?: string;
}

export namespace RenderUiTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenderUiTemplateRequest): any => ({
    ...obj,
  });
}

export interface RenderUiTemplateResponse {
  /**
   * <p>A Liquid template that renders the HTML for the worker UI.</p>
   */
  RenderedContent: string | undefined;

  /**
   * <p>A list of one or more <code>RenderingError</code> objects if any were encountered
   *             while rendering the template. If there were no errors, the list is empty.</p>
   */
  Errors: RenderingError[] | undefined;
}

export namespace RenderUiTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenderUiTemplateResponse): any => ({
    ...obj,
  });
}

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

export namespace RetryPipelineExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetryPipelineExecutionRequest): any => ({
    ...obj,
  });
}

export interface RetryPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export namespace RetryPipelineExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetryPipelineExecutionResponse): any => ({
    ...obj,
  });
}

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

export namespace SearchResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchResponse): any => ({
    ...obj,
    ...(obj.Results && { Results: obj.Results.map((item) => SearchRecord.filterSensitiveLog(item)) }),
  });
}

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

export namespace SendPipelineExecutionStepFailureRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendPipelineExecutionStepFailureRequest): any => ({
    ...obj,
  });
}

export interface SendPipelineExecutionStepFailureResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export namespace SendPipelineExecutionStepFailureResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendPipelineExecutionStepFailureResponse): any => ({
    ...obj,
  });
}

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

export namespace SendPipelineExecutionStepSuccessRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendPipelineExecutionStepSuccessRequest): any => ({
    ...obj,
  });
}

export interface SendPipelineExecutionStepSuccessResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export namespace SendPipelineExecutionStepSuccessResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendPipelineExecutionStepSuccessResponse): any => ({
    ...obj,
  });
}

export interface StartMonitoringScheduleRequest {
  /**
   * <p>The name of the schedule to start.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace StartMonitoringScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export interface StartNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to start.</p>
   */
  NotebookInstanceName: string | undefined;
}

export namespace StartNotebookInstanceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartNotebookInstanceInput): any => ({
    ...obj,
  });
}

export interface StartPipelineExecutionRequest {
  /**
   * <p>The name of the pipeline.</p>
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
}

export namespace StartPipelineExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartPipelineExecutionRequest): any => ({
    ...obj,
  });
}

export interface StartPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export namespace StartPipelineExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartPipelineExecutionResponse): any => ({
    ...obj,
  });
}

export interface StopAutoMLJobRequest {
  /**
   * <p>The name of the object you are requesting.</p>
   */
  AutoMLJobName: string | undefined;
}

export namespace StopAutoMLJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopAutoMLJobRequest): any => ({
    ...obj,
  });
}

export interface StopCompilationJobRequest {
  /**
   * <p>The name of the model compilation job to stop.</p>
   */
  CompilationJobName: string | undefined;
}

export namespace StopCompilationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopCompilationJobRequest): any => ({
    ...obj,
  });
}

export interface StopEdgePackagingJobRequest {
  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;
}

export namespace StopEdgePackagingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopEdgePackagingJobRequest): any => ({
    ...obj,
  });
}

export interface StopHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job to stop.</p>
   */
  HyperParameterTuningJobName: string | undefined;
}

export namespace StopHyperParameterTuningJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopHyperParameterTuningJobRequest): any => ({
    ...obj,
  });
}

export interface StopInferenceRecommendationsJobRequest {
  /**
   * <p>The name of the job you want to stop.</p>
   */
  JobName: string | undefined;
}

export namespace StopInferenceRecommendationsJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopInferenceRecommendationsJobRequest): any => ({
    ...obj,
  });
}

export interface StopLabelingJobRequest {
  /**
   * <p>The name of the labeling job to stop.</p>
   */
  LabelingJobName: string | undefined;
}

export namespace StopLabelingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopLabelingJobRequest): any => ({
    ...obj,
  });
}

export interface StopMonitoringScheduleRequest {
  /**
   * <p>The name of the schedule to stop.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace StopMonitoringScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export interface StopNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to terminate.</p>
   */
  NotebookInstanceName: string | undefined;
}

export namespace StopNotebookInstanceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopNotebookInstanceInput): any => ({
    ...obj,
  });
}

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

export namespace StopPipelineExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopPipelineExecutionRequest): any => ({
    ...obj,
  });
}

export interface StopPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export namespace StopPipelineExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopPipelineExecutionResponse): any => ({
    ...obj,
  });
}

export interface StopProcessingJobRequest {
  /**
   * <p>The name of the processing job to stop.</p>
   */
  ProcessingJobName: string | undefined;
}

export namespace StopProcessingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopProcessingJobRequest): any => ({
    ...obj,
  });
}

export interface StopTrainingJobRequest {
  /**
   * <p>The name of the training job to stop.</p>
   */
  TrainingJobName: string | undefined;
}

export namespace StopTrainingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTrainingJobRequest): any => ({
    ...obj,
  });
}

export interface StopTransformJobRequest {
  /**
   * <p>The name of the batch transform job to stop.</p>
   */
  TransformJobName: string | undefined;
}

export namespace StopTransformJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTransformJobRequest): any => ({
    ...obj,
  });
}

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

export namespace UpdateActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateActionRequest): any => ({
    ...obj,
  });
}

export interface UpdateActionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;
}

export namespace UpdateActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateActionResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateAppImageConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppImageConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateAppImageConfigResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the AppImageConfig.</p>
   */
  AppImageConfigArn?: string;
}

export namespace UpdateAppImageConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppImageConfigResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateArtifactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateArtifactRequest): any => ({
    ...obj,
  });
}

export interface UpdateArtifactResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;
}

export namespace UpdateArtifactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateArtifactResponse): any => ({
    ...obj,
  });
}

export interface UpdateCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to update.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The configuration of the git repository, including the URL and the Amazon Resource
   *             Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to
   *             access the repository. The secret must have a staging label of <code>AWSCURRENT</code>
   *             and must be in the following format:</p>
   *         <p>
   *             <code>{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>}</code>
   *         </p>
   */
  GitConfig?: GitConfigForUpdate;
}

export namespace UpdateCodeRepositoryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCodeRepositoryInput): any => ({
    ...obj,
  });
}

export interface UpdateCodeRepositoryOutput {
  /**
   * <p>The ARN of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;
}

export namespace UpdateCodeRepositoryOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCodeRepositoryOutput): any => ({
    ...obj,
  });
}

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

export namespace UpdateContextRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContextRequest): any => ({
    ...obj,
  });
}

export interface UpdateContextResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;
}

export namespace UpdateContextResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContextResponse): any => ({
    ...obj,
  });
}

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
   *       "SageMakerEdge-{DeviceFleetName}".</p>
   *          <p>For example, if your device fleet is called "demo-fleet", the name of
   *       the role alias will be "SageMakerEdge-demo-fleet".</p>
   */
  EnableIotRoleAlias?: boolean;
}

export namespace UpdateDeviceFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeviceFleetRequest): any => ({
    ...obj,
  });
}

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

export namespace UpdateDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDevicesRequest): any => ({
    ...obj,
  });
}

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
}

export namespace UpdateDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainRequest): any => ({
    ...obj,
  });
}

export interface UpdateDomainResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain.</p>
   */
  DomainArn?: string;
}

export namespace UpdateDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainResponse): any => ({
    ...obj,
  });
}

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
   * <p>When you are updating endpoint resources with <a>UpdateEndpointInput$RetainAllVariantProperties</a>, whose value is set to
   *                 <code>true</code>, <code>ExcludeRetainedVariantProperties</code> specifies the list
   *             of type <a>VariantProperty</a> to override with the values provided by
   *                 <code>EndpointConfig</code>. If you don't specify a value for
   *                 <code>ExcludeAllVariantProperties</code>, no variant properties are overridden.
   *         </p>
   */
  ExcludeRetainedVariantProperties?: VariantProperty[];

  /**
   * <p>The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.</p>
   */
  DeploymentConfig?: DeploymentConfig;

  /**
   * <p>Specifies whether to reuse the last deployment configuration. The default value is
   *             false (the configuration is not reused).</p>
   */
  RetainDeploymentConfig?: boolean;
}

export namespace UpdateEndpointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointInput): any => ({
    ...obj,
  });
}

export interface UpdateEndpointOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace UpdateEndpointOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointOutput): any => ({
    ...obj,
  });
}

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

export namespace UpdateEndpointWeightsAndCapacitiesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointWeightsAndCapacitiesInput): any => ({
    ...obj,
  });
}

export interface UpdateEndpointWeightsAndCapacitiesOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace UpdateEndpointWeightsAndCapacitiesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointWeightsAndCapacitiesOutput): any => ({
    ...obj,
  });
}

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

export namespace UpdateExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentRequest): any => ({
    ...obj,
  });
}

export interface UpdateExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;
}

export namespace UpdateExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentResponse): any => ({
    ...obj,
  });
}

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
   * <p>The new Amazon Resource Name (ARN) for the IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn?: string;
}

export namespace UpdateImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateImageRequest): any => ({
    ...obj,
  });
}

export interface UpdateImageResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  ImageArn?: string;
}

export namespace UpdateImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateImageResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateModelPackageInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelPackageInput): any => ({
    ...obj,
  });
}

export interface UpdateModelPackageOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelPackageArn: string | undefined;
}

export namespace UpdateModelPackageOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelPackageOutput): any => ({
    ...obj,
  });
}

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

export namespace UpdateMonitoringScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export interface UpdateMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
}

export namespace UpdateMonitoringScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMonitoringScheduleResponse): any => ({
    ...obj,
  });
}

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
   *         <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
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
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>A list of the Elastic Inference (EI) instance types to associate with this notebook
   *             instance. Currently only one EI instance type can be associated with a notebook
   *             instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon
   *                 SageMaker</a>.</p>
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
   *         <note>
   *             <p>If you set this to <code>Disabled</code>, users don't have root access on the
   *                 notebook instance, but lifecycle configuration scripts still run with root
   *                 permissions.</p>
   *         </note>
   */
  RootAccess?: RootAccess | string;

  /**
   * <p>Information on the IMDS configuration of the notebook instance</p>
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
}

export namespace UpdateNotebookInstanceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceInput): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceOutput {}

export namespace UpdateNotebookInstanceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceOutput): any => ({
    ...obj,
  });
}

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

export namespace UpdateNotebookInstanceLifecycleConfigInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceLifecycleConfigInput): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceLifecycleConfigOutput {}

export namespace UpdateNotebookInstanceLifecycleConfigOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceLifecycleConfigOutput): any => ({
    ...obj,
  });
}

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

export namespace UpdatePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePipelineRequest): any => ({
    ...obj,
  });
}

export interface UpdatePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline.</p>
   */
  PipelineArn?: string;
}

export namespace UpdatePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePipelineResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdatePipelineExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePipelineExecutionRequest): any => ({
    ...obj,
  });
}

export interface UpdatePipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export namespace UpdatePipelineExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePipelineExecutionResponse): any => ({
    ...obj,
  });
}

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
   *             environment. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];
}

export namespace UpdateProjectInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProjectInput): any => ({
    ...obj,
  });
}

export interface UpdateProjectOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;
}

export namespace UpdateProjectOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProjectOutput): any => ({
    ...obj,
  });
}

export interface UpdateTrainingJobRequest {
  /**
   * <p>The name of a training job to update the Debugger profiling configuration.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>Configuration information for Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   */
  ProfilerConfig?: ProfilerConfigForUpdate;

  /**
   * <p>Configuration information for Debugger rules for profiling system and framework
   *             metrics.</p>
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[];
}

export namespace UpdateTrainingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrainingJobRequest): any => ({
    ...obj,
  });
}

export interface UpdateTrainingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;
}

export namespace UpdateTrainingJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrainingJobResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateTrialRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrialRequest): any => ({
    ...obj,
  });
}

export interface UpdateTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

export namespace UpdateTrialResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrialResponse): any => ({
    ...obj,
  });
}

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
   * <p>Replaces all of the component's hyperparameters with the specified hyperparameters.</p>
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * <p>The hyperparameters to remove from the component.</p>
   */
  ParametersToRemove?: string[];

  /**
   * <p>Replaces all of the component's input artifacts with the specified artifacts.</p>
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The input artifacts to remove from the component.</p>
   */
  InputArtifactsToRemove?: string[];

  /**
   * <p>Replaces all of the component's output artifacts with the specified artifacts.</p>
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The output artifacts to remove from the component.</p>
   */
  OutputArtifactsToRemove?: string[];
}

export namespace UpdateTrialComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrialComponentRequest): any => ({
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

export interface UpdateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

export namespace UpdateTrialComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrialComponentResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateUserProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;
}

export namespace UpdateUserProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserProfileResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkforceRequest {
  /**
   * <p>The name of the private workforce that you want to update. You can find your workforce
   *         name by using the  operation.</p>
   */
  WorkforceName: string | undefined;

  /**
   * <p>A list of one to ten worker IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) that can be used to
   *             access tasks assigned to this workforce.</p>
   *         <p>Maximum: Ten CIDR values</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>Use this parameter to update your OIDC Identity Provider (IdP)
   *       configuration for a workforce made using your own IdP.</p>
   */
  OidcConfig?: OidcConfig;
}

export namespace UpdateWorkforceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkforceRequest): any => ({
    ...obj,
    ...(obj.OidcConfig && { OidcConfig: OidcConfig.filterSensitiveLog(obj.OidcConfig) }),
  });
}

export interface UpdateWorkforceResponse {
  /**
   * <p>A single private workforce. You can create one private work force in each Amazon Web Services Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

export namespace UpdateWorkforceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkforceResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkteamRequest {
  /**
   * <p>The name of the work team to update.</p>
   */
  WorkteamName: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *         <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP).
   *             For private workforces created using Amazon Cognito use
   *             <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity
   *             provider (IdP) use <code>OidcMemberDefinition</code>. You should not provide input
   *             for both of these parameters in a single request.</p>
   *         <p>For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito
   *                 <i>user groups</i> within the user pool used to create a workforce. All of the
   *                 <code>CognitoMemberDefinition</code> objects that make up the member definition must
   *             have the same <code>ClientId</code> and <code>UserPool</code> values. To add a Amazon
   *             Cognito user group to an existing worker pool, see <a href="">Adding groups to a User
   *                 Pool</a>. For more information about user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User
   *                 Pools</a>.</p>
   *         <p>For workforces created using your own OIDC IdP, specify the user groups that you want
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

export namespace UpdateWorkteamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkteamRequest): any => ({
    ...obj,
  });
}

export interface UpdateWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> object that describes the updated work team.</p>
   */
  Workteam: Workteam | undefined;
}

export namespace UpdateWorkteamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkteamResponse): any => ({
    ...obj,
  });
}

export interface SearchRequest {
  /**
   * <p>The name of the Amazon SageMaker resource to search for.</p>
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
}

export namespace SearchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchRequest): any => ({
    ...obj,
  });
}
