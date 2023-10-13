// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActionSource,
  ActionStatus,
  AdditionalInferenceSpecificationDefinition,
  AlgorithmSpecification,
  AlgorithmStatus,
  AlgorithmStatusDetails,
  AlgorithmValidationSpecification,
  AppNetworkAccessType,
  AppSecurityGroupManagement,
  AppSpecification,
  AppStatus,
  AppType,
  ArtifactSource,
  AssociationEdgeType,
  AsyncInferenceConfig,
  AuthMode,
  AutoMLCandidate,
  AutoMLChannel,
  AutoMLDataSplitConfig,
  AutoMLJobArtifacts,
  AutoMLJobChannel,
  AutoMLJobCompletionCriteria,
  AutoMLJobConfig,
  AutoMLJobObjective,
  AutoMLJobSecondaryStatus,
  AutoMLJobStatus,
  AutoMLOutputDataConfig,
  AutoMLPartialFailureReason,
  AutoMLProblemTypeConfig,
  AutoMLProblemTypeConfigName,
  AutoMLResolvedAttributes,
  AutoMLSecurityConfig,
  Autotune,
  BatchDataCaptureConfig,
  BatchStrategy,
  Channel,
  CheckpointConfig,
  CognitoConfig,
  CompilationJobStatus,
  ContainerDefinition,
  ContextSource,
  DataQualityAppSpecification,
  DataQualityBaselineConfig,
  DataQualityJobInput,
  GitConfig,
  HyperParameterTuningJobObjectiveType,
  InferenceSpecification,
  InputConfig,
  KernelGatewayImageConfig,
  MetadataProperties,
  ModelApprovalStatus,
  ModelDeployConfig,
  ModelPackageStatus,
  MonitoringNetworkConfig,
  MonitoringOutputConfig,
  MonitoringResources,
  MonitoringStoppingCondition,
  NeoVpcConfig,
  ObjectiveStatus,
  OutputConfig,
  OutputDataConfig,
  ProblemType,
  ProductionVariantInstanceType,
  ResourceConfig,
  ResourceSpec,
  StoppingCondition,
  Tag,
  TrainingSpecification,
  TransformInput,
  TransformOutput,
  TransformResources,
  UserContext,
  VpcConfig,
} from "./models_0";
import {
  _InstanceType,
  CustomizedMetricSpecification,
  DataCaptureConfig,
  DataCaptureConfigSummary,
  DataProcessing,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DefaultSpaceSettings,
  DeploymentConfig,
  DeviceSelectionConfig,
  DirectInternetAccess,
  DomainSettings,
  DriftCheckBaselines,
  EdgeDeploymentConfig,
  EdgeDeploymentModelConfig,
  EdgeOutputConfig,
  EdgePresetDeploymentType,
  EndpointInfo,
  ExecutionRoleIdentityConfig,
  ExperimentConfig,
  ExplainerConfig,
  FeatureDefinition,
  FeatureType,
  FlowDefinitionOutputConfig,
  HubS3StorageConfig,
  HumanLoopActivationConfig,
  HumanLoopConfig,
  HumanLoopRequestSource,
  HumanTaskConfig,
  HyperParameterTrainingJobDefinition,
  HyperParameterTuningJobConfig,
  HyperParameterTuningJobWarmStartConfig,
  InferenceExecutionConfig,
  InferenceExperimentDataStorageConfig,
  InferenceExperimentSchedule,
  InferenceExperimentType,
  InstanceMetadataServiceConfiguration,
  JobType,
  LabelingJobAlgorithmsConfig,
  LabelingJobInputConfig,
  LabelingJobOutputConfig,
  LabelingJobStoppingConditions,
  MemberDefinition,
  ModelBiasAppSpecification,
  ModelBiasBaselineConfig,
  ModelBiasJobInput,
  ModelCardExportOutputConfig,
  ModelCardSecurityConfig,
  ModelCardStatus,
  ModelClientConfig,
  ModelExplainabilityAppSpecification,
  ModelExplainabilityBaselineConfig,
  ModelExplainabilityJobInput,
  ModelInfrastructureConfig,
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
  OfflineStoreConfig,
  OnlineStoreConfig,
  ParallelismConfiguration,
  ProcessingInput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  Processor,
  ProductionVariant,
  ProductionVariantAcceleratorType,
  ProductionVariantServerlessConfig,
  ProfilerConfig,
  ProfilerRuleConfiguration,
  RecommendationJobInputConfig,
  RecommendationJobStoppingConditions,
  RecommendationJobType,
  RetryStrategy,
  RootAccess,
  RuleEvaluationStatus,
  ServiceCatalogProvisioningDetails,
  ShadowModeConfig,
  SkipModelValidation,
  SourceAlgorithmSpecification,
  SourceIpConfig,
  SpaceSettings,
  StudioLifecycleConfigAppType,
  TensorBoardOutputConfig,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  UserSettings,
  VendorGuidance,
} from "./models_1";

/**
 * @public
 */
export interface DeleteDataQualityJobDefinitionRequest {
  /**
   * @public
   * <p>The name of the data quality monitoring job definition to delete.</p>
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceFleetRequest {
  /**
   * @public
   * <p>The name of the fleet to delete.</p>
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RetentionType = {
  Delete: "Delete",
  Retain: "Retain",
} as const;

/**
 * @public
 */
export type RetentionType = (typeof RetentionType)[keyof typeof RetentionType];

/**
 * @public
 * <p>The retention policy for data stored on an Amazon Elastic File System (EFS) volume.</p>
 */
export interface RetentionPolicy {
  /**
   * @public
   * <p>The default is <code>Retain</code>, which specifies to keep the data stored on the EFS volume.</p>
   *          <p>Specify <code>Delete</code> to delete the data stored on the EFS volume.</p>
   */
  HomeEfsFileSystem?: RetentionType;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * @public
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * @public
   * <p>The retention policy for this domain, which specifies whether resources will be retained after the Domain is deleted.
   *            By default, all resources are retained (not automatically deleted).
   *        </p>
   */
  RetentionPolicy?: RetentionPolicy;
}

/**
 * @public
 */
export interface DeleteEdgeDeploymentPlanRequest {
  /**
   * @public
   * <p>The name of the edge deployment plan to delete.</p>
   */
  EdgeDeploymentPlanName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEdgeDeploymentStageRequest {
  /**
   * @public
   * <p>The name of the edge deployment plan from which the stage will be deleted.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * @public
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointInput {
  /**
   * @public
   * <p>The name of the endpoint that you want to delete.</p>
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointConfigInput {
  /**
   * @public
   * <p>The name of the endpoint configuration that you want to delete.</p>
   */
  EndpointConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentRequest {
  /**
   * @public
   * <p>The name of the experiment to delete.</p>
   */
  ExperimentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the experiment that is being deleted.</p>
   */
  ExperimentArn?: string;
}

/**
 * @public
 */
export interface DeleteFeatureGroupRequest {
  /**
   * @public
   * <p>The name of the <code>FeatureGroup</code> you want to delete. The name must be unique
   *          within an Amazon Web Services Region in an Amazon Web Services account. </p>
   */
  FeatureGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowDefinitionRequest {
  /**
   * @public
   * <p>The name of the flow definition you are deleting.</p>
   */
  FlowDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowDefinitionResponse {}

/**
 * @public
 */
export interface DeleteHubRequest {
  /**
   * @public
   * <p>The name of the hub to delete.</p>
   */
  HubName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HubContentType = {
  MODEL: "Model",
  NOTEBOOK: "Notebook",
} as const;

/**
 * @public
 */
export type HubContentType = (typeof HubContentType)[keyof typeof HubContentType];

/**
 * @public
 */
export interface DeleteHubContentRequest {
  /**
   * @public
   * <p>The name of the hub that you want to delete content in.</p>
   */
  HubName: string | undefined;

  /**
   * @public
   * <p>The type of content that you want to delete from a hub.</p>
   */
  HubContentType: HubContentType | undefined;

  /**
   * @public
   * <p>The name of the content that you want to delete from a hub.</p>
   */
  HubContentName: string | undefined;

  /**
   * @public
   * <p>The version of the content that you want to delete from a hub.</p>
   */
  HubContentVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteHumanTaskUiRequest {
  /**
   * @public
   * <p>The name of the human task user interface (work task template) you want to delete.</p>
   */
  HumanTaskUiName: string | undefined;
}

/**
 * @public
 */
export interface DeleteHumanTaskUiResponse {}

/**
 * @public
 */
export interface DeleteImageRequest {
  /**
   * @public
   * <p>The name of the image to delete.</p>
   */
  ImageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageResponse {}

/**
 * @public
 */
export interface DeleteImageVersionRequest {
  /**
   * @public
   * <p>The name of the image to delete.</p>
   */
  ImageName: string | undefined;

  /**
   * @public
   * <p>The version to delete.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>The alias of the image to delete.</p>
   */
  Alias?: string;
}

/**
 * @public
 */
export interface DeleteImageVersionResponse {}

/**
 * @public
 */
export interface DeleteInferenceExperimentRequest {
  /**
   * @public
   * <p>The name of the inference experiment you want to delete.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceExperimentResponse {
  /**
   * @public
   * <p>The ARN of the deleted inference experiment.</p>
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelInput {
  /**
   * @public
   * <p>The name of the model to delete.</p>
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelBiasJobDefinitionRequest {
  /**
   * @public
   * <p>The name of the model bias job definition to delete.</p>
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelCardRequest {
  /**
   * @public
   * <p>The name of the model card to delete.</p>
   */
  ModelCardName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelExplainabilityJobDefinitionRequest {
  /**
   * @public
   * <p>The name of the model explainability job definition to delete.</p>
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelPackageInput {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the model package to delete.</p>
   *          <p>When you specify a name, the name must have 1 to 63 characters. Valid
   *             characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ModelPackageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelPackageGroupInput {
  /**
   * @public
   * <p>The name of the model group to delete.</p>
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelPackageGroupPolicyInput {
  /**
   * @public
   * <p>The name of the model group for which to delete the policy.</p>
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelQualityJobDefinitionRequest {
  /**
   * @public
   * <p>The name of the model quality monitoring job definition to delete.</p>
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitoringScheduleRequest {
  /**
   * @public
   * <p>The name of the monitoring schedule to delete.</p>
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotebookInstanceInput {
  /**
   * @public
   * <p>The name of the SageMaker notebook instance to delete.</p>
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotebookInstanceLifecycleConfigInput {
  /**
   * @public
   * <p>The name of the lifecycle configuration to delete.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeletePipelineRequest {
  /**
   * @public
   * <p>The name of the pipeline to delete.</p>
   */
  PipelineName: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface DeletePipelineResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline to delete.</p>
   */
  PipelineArn?: string;
}

/**
 * @public
 */
export interface DeleteProjectInput {
  /**
   * @public
   * <p>The name of the project to delete.</p>
   */
  ProjectName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceRequest {
  /**
   * @public
   * <p>The ID of the associated Domain.</p>
   */
  DomainId: string | undefined;

  /**
   * @public
   * <p>The name of the space.</p>
   */
  SpaceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteStudioLifecycleConfigRequest {
  /**
   * @public
   * <p>The name of the Studio Lifecycle Configuration to delete.</p>
   */
  StudioLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTagsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to
   *             delete.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>An array or one or more tag keys to delete.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteTagsOutput {}

/**
 * @public
 */
export interface DeleteTrialRequest {
  /**
   * @public
   * <p>The name of the trial to delete.</p>
   */
  TrialName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrialResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial that is being deleted.</p>
   */
  TrialArn?: string;
}

/**
 * @public
 */
export interface DeleteTrialComponentRequest {
  /**
   * @public
   * <p>The name of the component to delete.</p>
   */
  TrialComponentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrialComponentResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component is being deleted.</p>
   */
  TrialComponentArn?: string;
}

/**
 * @public
 */
export interface DeleteUserProfileRequest {
  /**
   * @public
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * @public
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkforceRequest {
  /**
   * @public
   * <p>The name of the workforce.</p>
   */
  WorkforceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkforceResponse {}

/**
 * @public
 */
export interface DeleteWorkteamRequest {
  /**
   * @public
   * <p>The name of the work team to delete.</p>
   */
  WorkteamName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkteamResponse {
  /**
   * @public
   * <p>Returns <code>true</code> if the work team was successfully deleted; otherwise,
   *             returns <code>false</code>.</p>
   */
  Success: boolean | undefined;
}

/**
 * @public
 * <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariant.html">ProductionVariant</a>.</p>
 *          <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path
 *             of the primary container when you created the model hosted in this
 *                 <code>ProductionVariant</code>, the path resolves to a path of the form
 *                 <code>registry/repository[@digest]</code>. A digest is a hash value that identifies
 *             a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>
 */
export interface DeployedImage {
  /**
   * @public
   * <p>The image path you specified when you created the model.</p>
   */
  SpecifiedImage?: string;

  /**
   * @public
   * <p>The specific digest path of the image hosted in this
   *             <code>ProductionVariant</code>.</p>
   */
  ResolvedImage?: string;

  /**
   * @public
   * <p>The date and time when the image path for the model resolved to the
   *                 <code>ResolvedImage</code>
   *          </p>
   */
  ResolutionTime?: Date;
}

/**
 * @public
 * <p>The recommended configuration to use for Real-Time Inference.</p>
 */
export interface RealTimeInferenceRecommendation {
  /**
   * @public
   * <p>The recommendation ID which uniquely identifies each recommendation.</p>
   */
  RecommendationId: string | undefined;

  /**
   * @public
   * <p>The recommended instance type for Real-Time Inference.</p>
   */
  InstanceType: ProductionVariantInstanceType | undefined;

  /**
   * @public
   * <p>The recommended environment variables to set in the model container for Real-Time Inference.</p>
   */
  Environment?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const RecommendationStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_APPLICABLE: "NOT_APPLICABLE",
} as const;

/**
 * @public
 */
export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus];

/**
 * @public
 * <p>A set of recommended deployment configurations for the model. To get more advanced recommendations, see
 *          <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceRecommendationsJob.html">CreateInferenceRecommendationsJob</a>
 *          to create an inference recommendation job.</p>
 */
export interface DeploymentRecommendation {
  /**
   * @public
   * <p>Status of the deployment recommendation. The status <code>NOT_APPLICABLE</code> means that SageMaker
   *          is unable to provide a default recommendation for the model using the information provided. If the deployment status is <code>IN_PROGRESS</code>,
   *          retry your API call after a few seconds to get a <code>COMPLETED</code> deployment recommendation.</p>
   */
  RecommendationStatus: RecommendationStatus | undefined;

  /**
   * @public
   * <p>A list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_RealTimeInferenceRecommendation.html">RealTimeInferenceRecommendation</a> items.</p>
   */
  RealTimeInferenceRecommendations?: RealTimeInferenceRecommendation[];
}

/**
 * @public
 * @enum
 */
export const StageStatus = {
  Creating: "CREATING",
  Deployed: "DEPLOYED",
  Failed: "FAILED",
  InProgress: "INPROGRESS",
  ReadyToDeploy: "READYTODEPLOY",
  Starting: "STARTING",
  Stopped: "STOPPED",
  Stopping: "STOPPING",
} as const;

/**
 * @public
 */
export type StageStatus = (typeof StageStatus)[keyof typeof StageStatus];

/**
 * @public
 * <p>Contains information summarizing the deployment stage results.</p>
 */
export interface EdgeDeploymentStatus {
  /**
   * @public
   * <p>The general status of the current stage.</p>
   */
  StageStatus: StageStatus | undefined;

  /**
   * @public
   * <p>The number of edge devices with the successful deployment in the current stage.</p>
   */
  EdgeDeploymentSuccessInStage: number | undefined;

  /**
   * @public
   * <p>The number of edge devices yet to pick up the deployment in current stage, or in
   *             progress.</p>
   */
  EdgeDeploymentPendingInStage: number | undefined;

  /**
   * @public
   * <p>The number of edge devices that failed the deployment in current stage.</p>
   */
  EdgeDeploymentFailedInStage: number | undefined;

  /**
   * @public
   * <p>A detailed message about deployment status in current stage.</p>
   */
  EdgeDeploymentStatusMessage?: string;

  /**
   * @public
   * <p>The time when the deployment API started.</p>
   */
  EdgeDeploymentStageStartTime?: Date;
}

/**
 * @public
 * <p>Contains information summarizing the deployment stage results.</p>
 */
export interface DeploymentStageStatusSummary {
  /**
   * @public
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * @public
   * <p>Configuration of the devices in the stage.</p>
   */
  DeviceSelectionConfig: DeviceSelectionConfig | undefined;

  /**
   * @public
   * <p>Configuration of the deployment details.</p>
   */
  DeploymentConfig: EdgeDeploymentConfig | undefined;

  /**
   * @public
   * <p>General status of the current state.</p>
   */
  DeploymentStatus: EdgeDeploymentStatus | undefined;
}

/**
 * @public
 */
export interface DeregisterDevicesRequest {
  /**
   * @public
   * <p>The name of the fleet the devices belong to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * @public
   * <p>The unique IDs of the devices.</p>
   */
  DeviceNames: string[] | undefined;
}

/**
 * @public
 * <p>Information that SageMaker Neo automatically derived about the model.</p>
 */
export interface DerivedInformation {
  /**
   * @public
   * <p>The data input configuration that SageMaker Neo automatically derived for the model.
   *             When SageMaker Neo derives this information, you don't need to specify the data input
   *             configuration when you create a compilation job.</p>
   */
  DerivedDataInputConfig?: string;
}

/**
 * @public
 */
export interface DescribeActionRequest {
  /**
   * @public
   * <p>The name of the action to describe.</p>
   */
  ActionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeActionResponse {
  /**
   * @public
   * <p>The name of the action.</p>
   */
  ActionName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;

  /**
   * @public
   * <p>The source of the action.</p>
   */
  Source?: ActionSource;

  /**
   * @public
   * <p>The type of the action.</p>
   */
  ActionType?: string;

  /**
   * @public
   * <p>The description of the action.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The status of the action.</p>
   */
  Status?: ActionStatus;

  /**
   * @public
   * <p>A list of the action's properties.</p>
   */
  Properties?: Record<string, string>;

  /**
   * @public
   * <p>When the action was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>When the action was last modified.</p>
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
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;
}

/**
 * @public
 */
export interface DescribeAlgorithmInput {
  /**
   * @public
   * <p>The name of the algorithm to describe.</p>
   */
  AlgorithmName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlgorithmOutput {
  /**
   * @public
   * <p>The name of the algorithm being described.</p>
   */
  AlgorithmName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  AlgorithmArn: string | undefined;

  /**
   * @public
   * <p>A brief summary about the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * @public
   * <p>A timestamp specifying when the algorithm was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Details about training jobs run by this algorithm.</p>
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * @public
   * <p>Details about inference jobs that the algorithm runs.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * @public
   * <p>Details about configurations for one or more training jobs that SageMaker runs to test the
   *             algorithm.</p>
   */
  ValidationSpecification?: AlgorithmValidationSpecification;

  /**
   * @public
   * <p>The current status of the algorithm.</p>
   */
  AlgorithmStatus: AlgorithmStatus | undefined;

  /**
   * @public
   * <p>Details about the current status of the algorithm.</p>
   */
  AlgorithmStatusDetails: AlgorithmStatusDetails | undefined;

  /**
   * @public
   * <p>The product identifier of the algorithm.</p>
   */
  ProductId?: string;

  /**
   * @public
   * <p>Whether the algorithm is certified to be listed in Amazon Web Services
   *             Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;
}

/**
 * @public
 */
export interface DescribeAppRequest {
  /**
   * @public
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * @public
   * <p>The user profile name. If this value is not set, then <code>SpaceName</code> must be set.</p>
   */
  UserProfileName?: string;

  /**
   * @public
   * <p>The type of app.</p>
   */
  AppType: AppType | undefined;

  /**
   * @public
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;

  /**
   * @public
   * <p>The name of the space.</p>
   */
  SpaceName?: string;
}

/**
 * @public
 */
export interface DescribeAppResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the app.</p>
   */
  AppArn?: string;

  /**
   * @public
   * <p>The type of app.</p>
   */
  AppType?: AppType;

  /**
   * @public
   * <p>The name of the app.</p>
   */
  AppName?: string;

  /**
   * @public
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * @public
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * @public
   * <p>The status.</p>
   */
  Status?: AppStatus;

  /**
   * @public
   * <p>The timestamp of the last health check.</p>
   */
  LastHealthCheckTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp of the last user's activity. <code>LastUserActivityTimestamp</code> is also updated when SageMaker performs health checks without user activity. As a result, this value is set to the same value as <code>LastHealthCheckTimestamp</code>.</p>
   */
  LastUserActivityTimestamp?: Date;

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
   * <p>The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   */
  ResourceSpec?: ResourceSpec;

  /**
   * @public
   * <p>The name of the space. If this value is not set, then <code>UserProfileName</code> must be set.</p>
   */
  SpaceName?: string;
}

/**
 * @public
 */
export interface DescribeAppImageConfigRequest {
  /**
   * @public
   * <p>The name of the AppImageConfig to describe.</p>
   */
  AppImageConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppImageConfigResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AppImageConfig.</p>
   */
  AppImageConfigArn?: string;

  /**
   * @public
   * <p>The name of the AppImageConfig.</p>
   */
  AppImageConfigName?: string;

  /**
   * @public
   * <p>When the AppImageConfig was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When the AppImageConfig was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The configuration of a KernelGateway app.</p>
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
}

/**
 * @public
 */
export interface DescribeArtifactRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the artifact to describe.</p>
   */
  ArtifactArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeArtifactResponse {
  /**
   * @public
   * <p>The name of the artifact.</p>
   */
  ArtifactName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;

  /**
   * @public
   * <p>The source of the artifact.</p>
   */
  Source?: ArtifactSource;

  /**
   * @public
   * <p>The type of the artifact.</p>
   */
  ArtifactType?: string;

  /**
   * @public
   * <p>A list of the artifact's properties.</p>
   */
  Properties?: Record<string, string>;

  /**
   * @public
   * <p>When the artifact was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>When the artifact was last modified.</p>
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
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;
}

/**
 * @public
 */
export interface DescribeAutoMLJobRequest {
  /**
   * @public
   * <p>Requests information about an AutoML job using its unique name.</p>
   */
  AutoMLJobName: string | undefined;
}

/**
 * @public
 * <p>Provides information about the endpoint of the model deployment.</p>
 */
export interface ModelDeployResult {
  /**
   * @public
   * <p>The name of the endpoint to which the model has been deployed.</p>
   *          <note>
   *             <p>If model deployment fails, this field is omitted from the response.</p>
   *          </note>
   */
  EndpointName?: string;
}

/**
 * @public
 * <p>The resolved attributes.</p>
 */
export interface ResolvedAttributes {
  /**
   * @public
   * <p>Specifies a metric to minimize or maximize as the objective of a job.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * @public
   * <p>The problem type.</p>
   */
  ProblemType?: ProblemType;

  /**
   * @public
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;
}

/**
 * @public
 */
export interface DescribeAutoMLJobResponse {
  /**
   * @public
   * <p>Returns the name of the AutoML job.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * @public
   * <p>Returns the ARN of the AutoML job.</p>
   */
  AutoMLJobArn: string | undefined;

  /**
   * @public
   * <p>Returns the input data configuration for the AutoML job.</p>
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * @public
   * <p>Returns the job's output data config.</p>
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that has read permission to the input data
   *          location and write permission to the output data location in Amazon S3.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>Returns the job's objective.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * @public
   * <p>Returns the job's problem type.</p>
   */
  ProblemType?: ProblemType;

  /**
   * @public
   * <p>Returns the configuration for the AutoML job.</p>
   */
  AutoMLJobConfig?: AutoMLJobConfig;

  /**
   * @public
   * <p>Returns the creation time of the AutoML job.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Returns the end time of the AutoML job.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>Returns the job's last modified time.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>Returns the failure reason for an AutoML job, when applicable.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>Returns a list of reasons for partial failures within an AutoML job.</p>
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[];

  /**
   * @public
   * <p>The best model candidate selected by SageMaker Autopilot using both the best objective metric and
   *          lowest <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html">InferenceLatency</a> for
   *          an experiment.</p>
   */
  BestCandidate?: AutoMLCandidate;

  /**
   * @public
   * <p>Returns the status of the AutoML job.</p>
   */
  AutoMLJobStatus: AutoMLJobStatus | undefined;

  /**
   * @public
   * <p>Returns the secondary status of the AutoML job.</p>
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | undefined;

  /**
   * @public
   * <p>Indicates whether the output for an AutoML job generates candidate definitions
   *          only.</p>
   */
  GenerateCandidateDefinitionsOnly?: boolean;

  /**
   * @public
   * <p>Returns information on the job's artifacts found in
   *          <code>AutoMLJobArtifacts</code>.</p>
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts;

  /**
   * @public
   * <p>Contains <code>ProblemType</code>, <code>AutoMLJobObjective</code>, and
   *             <code>CompletionCriteria</code>. If you do not provide these values, they are
   *          inferred.</p>
   */
  ResolvedAttributes?: ResolvedAttributes;

  /**
   * @public
   * <p>Indicates whether the model was deployed automatically to an endpoint and the name of
   *          that endpoint if deployed automatically.</p>
   */
  ModelDeployConfig?: ModelDeployConfig;

  /**
   * @public
   * <p>Provides information about endpoint for the model deployment.</p>
   */
  ModelDeployResult?: ModelDeployResult;
}

/**
 * @public
 */
export interface DescribeAutoMLJobV2Request {
  /**
   * @public
   * <p>Requests information about an AutoML job V2 using its unique name.</p>
   */
  AutoMLJobName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutoMLJobV2Response {
  /**
   * @public
   * <p>Returns the name of the AutoML job V2.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * @public
   * <p>Returns the Amazon Resource Name (ARN) of the AutoML job V2.</p>
   */
  AutoMLJobArn: string | undefined;

  /**
   * @public
   * <p>Returns an array of channel objects describing the input data and their location.</p>
   */
  AutoMLJobInputDataConfig: AutoMLJobChannel[] | undefined;

  /**
   * @public
   * <p>Returns the job's output data config.</p>
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * @public
   * <p>The ARN of the Identity and Access Management role that has read permission to the input data location and
   *          write permission to the output data location in Amazon S3.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>Returns the job's objective.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * @public
   * <p>Returns the configuration settings of the problem type set for the AutoML job V2.</p>
   */
  AutoMLProblemTypeConfig?: AutoMLProblemTypeConfig;

  /**
   * @public
   * <p>Returns the creation time of the AutoML job V2.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Returns the end time of the AutoML job V2.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>Returns the job's last modified time.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>Returns the reason for the failure of the AutoML job V2, when applicable.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>Returns a list of reasons for partial failures within an AutoML job V2.</p>
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[];

  /**
   * @public
   * <p>Information about the candidate produced by an AutoML training job V2, including its
   *          status, steps, and other properties.</p>
   */
  BestCandidate?: AutoMLCandidate;

  /**
   * @public
   * <p>Returns the status of the AutoML job V2.</p>
   */
  AutoMLJobStatus: AutoMLJobStatus | undefined;

  /**
   * @public
   * <p>Returns the secondary status of the AutoML job V2.</p>
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | undefined;

  /**
   * @public
   * <p>Indicates whether the model was deployed automatically to an endpoint and the name of
   *          that endpoint if deployed automatically.</p>
   */
  ModelDeployConfig?: ModelDeployConfig;

  /**
   * @public
   * <p>Provides information about endpoint for the model deployment.</p>
   */
  ModelDeployResult?: ModelDeployResult;

  /**
   * @public
   * <p>Returns the configuration settings of how the data are split into train and validation
   *          datasets.</p>
   */
  DataSplitConfig?: AutoMLDataSplitConfig;

  /**
   * @public
   * <p>Returns the security configuration for traffic encryption or Amazon VPC settings.</p>
   */
  SecurityConfig?: AutoMLSecurityConfig;

  /**
   * @public
   * <p>The artifacts that are generated during an AutoML job.</p>
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts;

  /**
   * @public
   * <p>Returns the resolved attributes used by the AutoML job V2.</p>
   */
  ResolvedAttributes?: AutoMLResolvedAttributes;

  /**
   * @public
   * <p>Returns the name of the problem type configuration set for the AutoML job V2.</p>
   */
  AutoMLProblemTypeConfigName?: AutoMLProblemTypeConfigName;
}

/**
 * @public
 */
export interface DescribeCodeRepositoryInput {
  /**
   * @public
   * <p>The name of the Git repository to describe.</p>
   */
  CodeRepositoryName: string | undefined;
}

/**
 * @public
 */
export interface DescribeCodeRepositoryOutput {
  /**
   * @public
   * <p>The name of the Git repository.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;

  /**
   * @public
   * <p>The date and time that the repository was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the repository was last changed.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>Configuration details about the repository, including the URL where the repository is
   *             located, the default branch, and the Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the
   *             repository.</p>
   */
  GitConfig?: GitConfig;
}

/**
 * @public
 */
export interface DescribeCompilationJobRequest {
  /**
   * @public
   * <p>The name of the model compilation job that you want information about.</p>
   */
  CompilationJobName: string | undefined;
}

/**
 * @public
 * <p>Provides information about the location that is configured for storing model
 *             artifacts. </p>
 *          <p>Model artifacts are the output that results from training a model, and typically
 *             consist of trained parameters, a model definition that describes how to compute
 *             inferences, and other metadata.</p>
 */
export interface ModelArtifacts {
  /**
   * @public
   * <p>The path of the S3 object that contains the model artifacts. For example,
   *                 <code>s3://bucket-name/keynameprefix/model.tar.gz</code>.</p>
   */
  S3ModelArtifacts: string | undefined;
}

/**
 * @public
 * <p>Provides information to verify the integrity of stored model artifacts. </p>
 */
export interface ModelDigests {
  /**
   * @public
   * <p>Provides a hash value that uniquely identifies the stored model
   *             artifacts.</p>
   */
  ArtifactDigest?: string;
}

/**
 * @public
 */
export interface DescribeCompilationJobResponse {
  /**
   * @public
   * <p>The name of the model compilation job.</p>
   */
  CompilationJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   */
  CompilationJobArn: string | undefined;

  /**
   * @public
   * <p>The status of the model compilation job.</p>
   */
  CompilationJobStatus: CompilationJobStatus | undefined;

  /**
   * @public
   * <p>The time when the model compilation job started the <code>CompilationJob</code>
   *             instances. </p>
   *          <p>You are billed for the time between this timestamp and the timestamp in the
   *                 <code>CompilationEndTime</code> field. In Amazon CloudWatch Logs, the start time might be later
   *             than this time. That's because it takes time to download the compilation job, which
   *             depends on the size of the compilation job container. </p>
   */
  CompilationStartTime?: Date;

  /**
   * @public
   * <p>The time when the model compilation job on a compilation job instance ended. For a
   *             successful or stopped job, this is when the job's model artifacts have finished
   *             uploading. For a failed job, this is when Amazon SageMaker detected that the job failed. </p>
   */
  CompilationEndTime?: Date;

  /**
   * @public
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches
   *             the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training
   *             costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * @public
   * <p>The inference image to use when compiling a model. Specify an image only if the target
   *             device is a cloud instance.</p>
   */
  InferenceImage?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the versioned model package that was
   *     provided to SageMaker Neo when you initiated a compilation job.</p>
   */
  ModelPackageVersionArn?: string;

  /**
   * @public
   * <p>The time that the model compilation job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The time that the status
   *             of
   *             the model compilation job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>If a model compilation job failed, the reason it failed. </p>
   */
  FailureReason: string | undefined;

  /**
   * @public
   * <p>Information about the location in Amazon S3 that has been configured for storing the model
   *             artifacts used in the compilation job.</p>
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * @public
   * <p>Provides a BLAKE2 hash value that identifies the compiled model artifacts in
   *             Amazon S3.</p>
   */
  ModelDigests?: ModelDigests;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker assumes to perform the model
   *             compilation job.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>Information about the location in Amazon S3 of the input model artifacts, the name and
   *             shape of the expected data inputs, and the framework in which the model was
   *             trained.</p>
   */
  InputConfig: InputConfig | undefined;

  /**
   * @public
   * <p>Information about the output location for the compiled model and the target device
   *             that the model runs on.</p>
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * @public
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that you want your compilation job
   *             to connect to. Control access to your models by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html">Protect Compilation Jobs by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: NeoVpcConfig;

  /**
   * @public
   * <p>Information that SageMaker Neo automatically derived about the model.</p>
   */
  DerivedInformation?: DerivedInformation;
}

/**
 * @public
 */
export interface DescribeContextRequest {
  /**
   * @public
   * <p>The name of the context to describe.</p>
   */
  ContextName: string | undefined;
}

/**
 * @public
 */
export interface DescribeContextResponse {
  /**
   * @public
   * <p>The name of the context.</p>
   */
  ContextName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;

  /**
   * @public
   * <p>The source of the context.</p>
   */
  Source?: ContextSource;

  /**
   * @public
   * <p>The type of the context.</p>
   */
  ContextType?: string;

  /**
   * @public
   * <p>The description of the context.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of the context's properties.</p>
   */
  Properties?: Record<string, string>;

  /**
   * @public
   * <p>When the context was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>When the context was last modified.</p>
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
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;
}

/**
 * @public
 */
export interface DescribeDataQualityJobDefinitionRequest {
  /**
   * @public
   * <p>The name of the data quality monitoring job definition to describe.</p>
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataQualityJobDefinitionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data quality monitoring job definition.</p>
   */
  JobDefinitionArn: string | undefined;

  /**
   * @public
   * <p>The name of the data quality monitoring job definition.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * @public
   * <p>The time that the data quality monitoring job definition was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The constraints and baselines for the data quality monitoring job definition.</p>
   */
  DataQualityBaselineConfig?: DataQualityBaselineConfig;

  /**
   * @public
   * <p>Information about the container that runs the data quality monitoring job.</p>
   */
  DataQualityAppSpecification: DataQualityAppSpecification | undefined;

  /**
   * @public
   * <p>The list of inputs for the data quality monitoring job. Currently endpoints are
   *          supported.</p>
   */
  DataQualityJobInput: DataQualityJobInput | undefined;

  /**
   * @public
   * <p>The output configuration for monitoring jobs.</p>
   */
  DataQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * @public
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * @public
   * <p>The networking configuration for the data quality monitoring job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can
   *    assume to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

/**
 * @public
 */
export interface DescribeDeviceRequest {
  /**
   * @public
   * <p>Next token of device description.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The unique ID of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * @public
   * <p>The name of the fleet the devices belong to.</p>
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 * <p>The model on the edge device.</p>
 */
export interface EdgeModel {
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
   * <p>The timestamp of the last data sample taken.</p>
   */
  LatestSampleTime?: Date;

  /**
   * @public
   * <p>The timestamp of the last inference that was made.</p>
   */
  LatestInference?: Date;
}

/**
 * @public
 */
export interface DescribeDeviceResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn?: string;

  /**
   * @public
   * <p>The unique identifier of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * @public
   * <p>A description of the device.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the fleet the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Internet of Things (IoT) object thing name associated with the device.</p>
   */
  IotThingName?: string;

  /**
   * @public
   * <p>The timestamp of the last registration or de-reregistration.</p>
   */
  RegistrationTime: Date | undefined;

  /**
   * @public
   * <p>The last heartbeat received from the device.</p>
   */
  LatestHeartbeat?: Date;

  /**
   * @public
   * <p>Models on the device.</p>
   */
  Models?: EdgeModel[];

  /**
   * @public
   * <p>The maximum number of models.</p>
   */
  MaxModels?: number;

  /**
   * @public
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Edge Manager agent version.</p>
   */
  AgentVersion?: string;
}

/**
 * @public
 */
export interface DescribeDeviceFleetRequest {
  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceFleetResponse {
  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * @public
   * <p>The The Amazon Resource Name (ARN) of the fleet.</p>
   */
  DeviceFleetArn: string | undefined;

  /**
   * @public
   * <p>The output configuration for storing sampled data.</p>
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * @public
   * <p>A description of the fleet.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Timestamp of when the device fleet was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Timestamp of when the device fleet was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that has access to Amazon Web Services Internet of Things (IoT).</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) alias created in Amazon Web Services Internet of Things (IoT).</p>
   */
  IotRoleAlias?: string;
}

/**
 * @public
 */
export interface DescribeDomainRequest {
  /**
   * @public
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainStatus = {
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
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 */
export interface DescribeDomainResponse {
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
   * <p>The ID of the Amazon Elastic File System (EFS) managed by this Domain.</p>
   */
  HomeEfsFileSystemId?: string;

  /**
   * @public
   * <p>The IAM Identity Center managed application instance ID.</p>
   */
  SingleSignOnManagedApplicationInstanceId?: string;

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
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The domain's authentication mode.</p>
   */
  AuthMode?: AuthMode;

  /**
   * @public
   * <p>Settings which are applied to UserProfiles in this domain if settings are not explicitly specified
   *            in a given UserProfile.
   *        </p>
   */
  DefaultUserSettings?: UserSettings;

  /**
   * @public
   * <p>Specifies the VPC used for non-EFS traffic. The default value is
   *         <code>PublicInternetOnly</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PublicInternetOnly</code> - Non-EFS traffic is through a VPC managed by
   *             Amazon SageMaker, which allows direct internet access</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets</p>
   *             </li>
   *          </ul>
   */
  AppNetworkAccessType?: AppNetworkAccessType;

  /**
   * @public
   * @deprecated
   *
   * <p>Use <code>KmsKeyId</code>.</p>
   */
  HomeEfsFileSystemKmsKeyId?: string;

  /**
   * @public
   * <p>The VPC subnets that Studio uses for communication.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The domain's URL.</p>
   */
  Url?: string;

  /**
   * @public
   * <p>The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The Amazon Web Services KMS customer managed key used to encrypt
   *          the EFS volume attached to the domain.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>A collection of <code>Domain</code> settings.</p>
   */
  DomainSettings?: DomainSettings;

  /**
   * @public
   * <p>The entity that creates and manages the required security groups for inter-app
   *             communication in <code>VPCOnly</code> mode. Required when
   *                 <code>CreateDomain.AppNetworkAccessType</code> is <code>VPCOnly</code> and
   *                 <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is
   *             provided.</p>
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement;

  /**
   * @public
   * <p>The ID of the security group that authorizes traffic between the
   *                 <code>RSessionGateway</code> apps and the <code>RStudioServerPro</code> app.</p>
   */
  SecurityGroupIdForDomainBoundary?: string;

  /**
   * @public
   * <p>The default settings used to create a space.</p>
   */
  DefaultSpaceSettings?: DefaultSpaceSettings;
}

/**
 * @public
 */
export interface DescribeEdgeDeploymentPlanRequest {
  /**
   * @public
   * <p>The name of the deployment plan to describe.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * @public
   * <p>If the edge deployment plan has enough stages to require tokening, then this is the
   *             response from the last list of stages returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to select (50 by default).</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeEdgeDeploymentPlanResponse {
  /**
   * @public
   * <p>The ARN of edge deployment plan.</p>
   */
  EdgeDeploymentPlanArn: string | undefined;

  /**
   * @public
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * @public
   * <p>List of models associated with the edge deployment plan.</p>
   */
  ModelConfigs: EdgeDeploymentModelConfig[] | undefined;

  /**
   * @public
   * <p>The device fleet used for this edge deployment plan.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * @public
   * <p>The number of edge devices with the successful deployment.</p>
   */
  EdgeDeploymentSuccess?: number;

  /**
   * @public
   * <p>The number of edge devices yet to pick up deployment, or in progress.</p>
   */
  EdgeDeploymentPending?: number;

  /**
   * @public
   * <p>The number of edge devices that failed the deployment.</p>
   */
  EdgeDeploymentFailed?: number;

  /**
   * @public
   * <p>List of stages in the edge deployment plan.</p>
   */
  Stages: DeploymentStageStatusSummary[] | undefined;

  /**
   * @public
   * <p>Token to use when calling the next set of stages in the edge deployment plan.</p>
   */
  NextToken?: string;

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
 */
export interface DescribeEdgePackagingJobRequest {
  /**
   * @public
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EdgePackagingJobStatus = {
  Completed: "COMPLETED",
  Failed: "FAILED",
  InProgress: "INPROGRESS",
  Starting: "STARTING",
  Stopped: "STOPPED",
  Stopping: "STOPPING",
} as const;

/**
 * @public
 */
export type EdgePackagingJobStatus = (typeof EdgePackagingJobStatus)[keyof typeof EdgePackagingJobStatus];

/**
 * @public
 * @enum
 */
export const EdgePresetDeploymentStatus = {
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;

/**
 * @public
 */
export type EdgePresetDeploymentStatus = (typeof EdgePresetDeploymentStatus)[keyof typeof EdgePresetDeploymentStatus];

/**
 * @public
 * <p>The output of a SageMaker Edge Manager deployable resource.</p>
 */
export interface EdgePresetDeploymentOutput {
  /**
   * @public
   * <p>The deployment type created by SageMaker Edge Manager. Currently only
   *      supports Amazon Web Services IoT Greengrass Version 2 components.</p>
   */
  Type: EdgePresetDeploymentType | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the generated deployable resource.</p>
   */
  Artifact?: string;

  /**
   * @public
   * <p>The status of the deployable resource.</p>
   */
  Status?: EdgePresetDeploymentStatus;

  /**
   * @public
   * <p>Returns a message describing the status of the deployed resource.</p>
   */
  StatusMessage?: string;
}

/**
 * @public
 */
export interface DescribeEdgePackagingJobResponse {
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
   * <p>The name of the SageMaker Neo compilation job that is used to locate model artifacts that are being packaged.</p>
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
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to  download and upload the model, and to contact Neo.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The output configuration for the edge packaging job.</p>
   */
  OutputConfig?: EdgeOutputConfig;

  /**
   * @public
   * <p>The Amazon Web Services KMS key to use when encrypting the EBS volume the job run on.</p>
   */
  ResourceKey?: string;

  /**
   * @public
   * <p>The current status of the packaging job.</p>
   */
  EdgePackagingJobStatus: EdgePackagingJobStatus | undefined;

  /**
   * @public
   * <p>Returns a message describing the job status and error messages.</p>
   */
  EdgePackagingJobStatusMessage?: string;

  /**
   * @public
   * <p>The timestamp of when the packaging job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The timestamp of when the job was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Simple Storage (S3) URI where model artifacts ares stored.</p>
   */
  ModelArtifact?: string;

  /**
   * @public
   * <p>The signature document of files in the model artifact.</p>
   */
  ModelSignature?: string;

  /**
   * @public
   * <p>The output of a SageMaker Edge Manager deployable resource.</p>
   */
  PresetDeploymentOutput?: EdgePresetDeploymentOutput;
}

/**
 * @public
 */
export interface DescribeEndpointInput {
  /**
   * @public
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointStatus = {
  CREATING: "Creating",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_SERVICE: "InService",
  OUT_OF_SERVICE: "OutOfService",
  ROLLING_BACK: "RollingBack",
  SYSTEM_UPDATING: "SystemUpdating",
  UPDATE_ROLLBACK_FAILED: "UpdateRollbackFailed",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

/**
 * @public
 * @enum
 */
export const VariantStatus = {
  ACTIVATING_TRAFFIC: "ActivatingTraffic",
  BAKING: "Baking",
  CREATING: "Creating",
  DELETING: "Deleting",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type VariantStatus = (typeof VariantStatus)[keyof typeof VariantStatus];

/**
 * @public
 * <p>Describes the status of the production variant.</p>
 */
export interface ProductionVariantStatus {
  /**
   * @public
   * <p>The endpoint variant status which describes the current deployment stage status or
   *             operational status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Creating</code>: Creating inference resources for the production
   *                     variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>: Terminating inference resources for the production
   *                     variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code>: Updating capacity for the production variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ActivatingTraffic</code>: Turning on traffic for the production
   *                     variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Baking</code>: Waiting period to monitor the CloudWatch alarms in the
   *                     automatic rollback configuration.</p>
   *             </li>
   *          </ul>
   */
  Status: VariantStatus | undefined;

  /**
   * @public
   * <p>A message that describes the status of the production variant.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The start time of the current status change.</p>
   */
  StartTime?: Date;
}

/**
 * @public
 * <p>The production variant summary for a deployment when an endpoint is creating or
 *             updating with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a>
 *             or <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html">UpdateEndpoint</a>
 *             operations. Describes the <code>VariantStatus </code>, weight and capacity for a
 *             production variant associated with an endpoint. </p>
 */
export interface PendingProductionVariantSummary {
  /**
   * @public
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * @public
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container
   *             Registry paths of the inference images deployed on instances of this
   *                 <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: DeployedImage[];

  /**
   * @public
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * @public
   * <p>The requested weight for the variant in this deployment, as specified in the endpoint
   *             configuration for the endpoint. The value is taken from the request to the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> operation.</p>
   */
  DesiredWeight?: number;

  /**
   * @public
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * @public
   * <p>The number of instances requested in this deployment, as specified in the endpoint
   *             configuration for the endpoint. The value is taken from the request to the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> operation.</p>
   */
  DesiredInstanceCount?: number;

  /**
   * @public
   * <p>The type of instances associated with the variant.</p>
   */
  InstanceType?: ProductionVariantInstanceType;

  /**
   * @public
   * <p>The size of the Elastic Inference (EI) instance to use for the production variant. EI
   *             instances provide on-demand GPU computing for inference. For more information, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic
   *                 Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorType?: ProductionVariantAcceleratorType;

  /**
   * @public
   * <p>The endpoint variant status which describes the current deployment stage status or
   *             operational status.</p>
   */
  VariantStatus?: ProductionVariantStatus[];

  /**
   * @public
   * <p>The serverless configuration for the endpoint.</p>
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * @public
   * <p>The serverless configuration requested for this deployment, as specified in the endpoint configuration for the endpoint.</p>
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;
}

/**
 * @public
 * <p>The summary of an in-progress deployment when an endpoint is creating or updating with
 *             a new endpoint configuration.</p>
 */
export interface PendingDeploymentSummary {
  /**
   * @public
   * <p>The name of the endpoint configuration used in the deployment. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * @public
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_PendingProductionVariantSummary.html">PendingProductionVariantSummary</a> objects, one for each model hosted behind
   *             this endpoint for the in-progress deployment.</p>
   */
  ProductionVariants?: PendingProductionVariantSummary[];

  /**
   * @public
   * <p>The start time of the deployment.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_PendingProductionVariantSummary.html">PendingProductionVariantSummary</a> objects, one for each model hosted behind
   *             this endpoint in shadow mode with production traffic replicated from the model specified
   *             on <code>ProductionVariants</code> for the in-progress deployment.</p>
   */
  ShadowProductionVariants?: PendingProductionVariantSummary[];
}

/**
 * @public
 * <p>Describes weight and capacities for a production variant associated with an
 *             endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code>
 *             API and the endpoint status is <code>Updating</code>, you get different desired and
 *             current values. </p>
 */
export interface ProductionVariantSummary {
  /**
   * @public
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * @public
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the
   *             inference images deployed on instances of this <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: DeployedImage[];

  /**
   * @public
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * @public
   * <p>The requested weight, as specified in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredWeight?: number;

  /**
   * @public
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * @public
   * <p>The number of instances requested in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredInstanceCount?: number;

  /**
   * @public
   * <p>The endpoint variant status which describes the current deployment stage status or
   *             operational status.</p>
   */
  VariantStatus?: ProductionVariantStatus[];

  /**
   * @public
   * <p>The serverless configuration for the endpoint.</p>
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * @public
   * <p>The serverless configuration requested for the endpoint update.</p>
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;
}

/**
 * @public
 */
export interface DescribeEndpointOutput {
  /**
   * @public
   * <p>Name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * @public
   * <p>The name of the endpoint configuration associated with this endpoint.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * @public
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariantSummary.html">ProductionVariantSummary</a> objects, one for each model hosted behind this
   *             endpoint.</p>
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
   *                     the <code>FailureReason</code> value returned by <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> for information about the failure. <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html">DeleteEndpoint</a> is the only operation that can be performed on a
   *                     failed endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UpdateRollbackFailed</code>: Both the rolling deployment and
   *                     auto-rollback failed. Your endpoint is in service with a mix of the old and new
   *                     endpoint configurations. For information about how to remedy this issue and
   *                     restore the endpoint's status to <code>InService</code>, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/deployment-guardrails-rolling.html">Rolling
   *                         Deployments</a>.</p>
   *             </li>
   *          </ul>
   */
  EndpointStatus: EndpointStatus | undefined;

  /**
   * @public
   * <p>If the status of the endpoint is <code>Failed</code>, the reason why it failed.
   *         </p>
   */
  FailureReason?: string;

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
   * <p>The most recent deployment configuration for the endpoint.</p>
   */
  LastDeploymentConfig?: DeploymentConfig;

  /**
   * @public
   * <p>Returns the description of an endpoint configuration created using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">
   *                <code>CreateEndpointConfig</code>
   *             </a> API.</p>
   */
  AsyncInferenceConfig?: AsyncInferenceConfig;

  /**
   * @public
   * <p>Returns the summary of an in-progress deployment. This field is only returned when the
   *             endpoint is creating or updating with a new endpoint configuration.</p>
   */
  PendingDeploymentSummary?: PendingDeploymentSummary;

  /**
   * @public
   * <p>The configuration parameters for an explainer.</p>
   */
  ExplainerConfig?: ExplainerConfig;

  /**
   * @public
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariantSummary.html">ProductionVariantSummary</a> objects, one for each model that you want to host
   *             at this endpoint in shadow mode with production traffic replicated from the model
   *             specified on <code>ProductionVariants</code>.</p>
   */
  ShadowProductionVariants?: ProductionVariantSummary[];
}

/**
 * @public
 */
export interface DescribeEndpointConfigInput {
  /**
   * @public
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointConfigOutput {
  /**
   * @public
   * <p>Name of the SageMaker endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * @public
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you
   *             want to host at this endpoint.</p>
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * @public
   * <p>Configuration to control how SageMaker captures inference data.</p>
   */
  DataCaptureConfig?: DataCaptureConfig;

  /**
   * @public
   * <p>Amazon Web Services KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML
   *             storage volume attached to the instance.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Returns the description of an endpoint configuration created using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">
   *                <code>CreateEndpointConfig</code>
   *             </a> API.</p>
   */
  AsyncInferenceConfig?: AsyncInferenceConfig;

  /**
   * @public
   * <p>The configuration parameters for an explainer.</p>
   */
  ExplainerConfig?: ExplainerConfig;

  /**
   * @public
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you want
   *             to host at this endpoint in shadow mode with production traffic replicated from the
   *             model specified on <code>ProductionVariants</code>.</p>
   */
  ShadowProductionVariants?: ProductionVariant[];
}

/**
 * @public
 */
export interface DescribeExperimentRequest {
  /**
   * @public
   * <p>The name of the experiment to describe.</p>
   */
  ExperimentName: string | undefined;
}

/**
 * @public
 * <p>The source of the experiment.</p>
 */
export interface ExperimentSource {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * @public
   * <p>The source type.</p>
   */
  SourceType?: string;
}

/**
 * @public
 */
export interface DescribeExperimentResponse {
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
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the type.</p>
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
   * <p>Who last modified the experiment.</p>
   */
  LastModifiedBy?: UserContext;
}

/**
 * @public
 */
export interface DescribeFeatureGroupRequest {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the <code>FeatureGroup</code> you want
   *          described. </p>
   */
  FeatureGroupName: string | undefined;

  /**
   * @public
   * <p>A token to resume pagination of the list of <code>Features</code>
   *             (<code>FeatureDefinitions</code>). 2,500 <code>Features</code> are returned by
   *          default.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const FeatureGroupStatus = {
  CREATED: "Created",
  CREATE_FAILED: "CreateFailed",
  CREATING: "Creating",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
} as const;

/**
 * @public
 */
export type FeatureGroupStatus = (typeof FeatureGroupStatus)[keyof typeof FeatureGroupStatus];

/**
 * @public
 * @enum
 */
export const LastUpdateStatusValue = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  SUCCESSFUL: "Successful",
} as const;

/**
 * @public
 */
export type LastUpdateStatusValue = (typeof LastUpdateStatusValue)[keyof typeof LastUpdateStatusValue];

/**
 * @public
 * <p>A value that indicates whether the update was successful.</p>
 */
export interface LastUpdateStatus {
  /**
   * @public
   * <p>A value that indicates whether the update was made successful.</p>
   */
  Status: LastUpdateStatusValue | undefined;

  /**
   * @public
   * <p>If the update wasn't successful, indicates the reason why it failed.</p>
   */
  FailureReason?: string;
}

/**
 * @public
 * @enum
 */
export const OfflineStoreStatusValue = {
  ACTIVE: "Active",
  BLOCKED: "Blocked",
  DISABLED: "Disabled",
} as const;

/**
 * @public
 */
export type OfflineStoreStatusValue = (typeof OfflineStoreStatusValue)[keyof typeof OfflineStoreStatusValue];

/**
 * @public
 * <p>The status of <code>OfflineStore</code>.</p>
 */
export interface OfflineStoreStatus {
  /**
   * @public
   * <p>An <code>OfflineStore</code> status.</p>
   */
  Status: OfflineStoreStatusValue | undefined;

  /**
   * @public
   * <p>The justification for why the OfflineStoreStatus is Blocked (if applicable).</p>
   */
  BlockedReason?: string;
}

/**
 * @public
 */
export interface DescribeFeatureGroupResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <code>FeatureGroup</code>. </p>
   */
  FeatureGroupArn: string | undefined;

  /**
   * @public
   * <p>he name of the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the <code>Feature</code> used for <code>RecordIdentifier</code>, whose value
   *          uniquely identifies a record stored in the feature store.</p>
   */
  RecordIdentifierFeatureName: string | undefined;

  /**
   * @public
   * <p>The name of the feature that stores the <code>EventTime</code> of a Record in a
   *             <code>FeatureGroup</code>.</p>
   *          <p> An <code>EventTime</code> is a point in time when a new event occurs that corresponds
   *          to the creation or update of a <code>Record</code> in a <code>FeatureGroup</code>. All
   *             <code>Records</code> in the <code>FeatureGroup</code> have a corresponding
   *             <code>EventTime</code>.</p>
   */
  EventTimeFeatureName: string | undefined;

  /**
   * @public
   * <p>A list of the <code>Features</code> in the <code>FeatureGroup</code>. Each feature is
   *          defined by a <code>FeatureName</code> and <code>FeatureType</code>.</p>
   */
  FeatureDefinitions: FeatureDefinition[] | undefined;

  /**
   * @public
   * <p>A timestamp indicating when SageMaker created the <code>FeatureGroup</code>.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>A timestamp indicating when the feature group was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The configuration for the <code>OnlineStore</code>.</p>
   */
  OnlineStoreConfig?: OnlineStoreConfig;

  /**
   * @public
   * <p>The configuration of the offline store. It includes the following configurations:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon S3 location of the offline store.</p>
   *             </li>
   *             <li>
   *                <p>Configuration of the Glue data catalog.</p>
   *             </li>
   *             <li>
   *                <p>Table format of the offline store.</p>
   *             </li>
   *             <li>
   *                <p>Option to disable the automatic creation of a Glue table for the offline
   *                store.</p>
   *             </li>
   *             <li>
   *                <p>Encryption configuration.</p>
   *             </li>
   *          </ul>
   */
  OfflineStoreConfig?: OfflineStoreConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the
   *          OfflineStore if an OfflineStoreConfig is provided.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The status of the feature group.</p>
   */
  FeatureGroupStatus?: FeatureGroupStatus;

  /**
   * @public
   * <p>The status of the <code>OfflineStore</code>. Notifies you if replicating data into the
   *             <code>OfflineStore</code> has failed. Returns either: <code>Active</code> or
   *             <code>Blocked</code>
   *          </p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;

  /**
   * @public
   * <p>A value indicating whether the update made to the feature group was successful.</p>
   */
  LastUpdateStatus?: LastUpdateStatus;

  /**
   * @public
   * <p>The reason that the <code>FeatureGroup</code> failed to be replicated in the
   *             <code>OfflineStore</code>. This is failure can occur because:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>FeatureGroup</code> could not be created in the
   *                   <code>OfflineStore</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>FeatureGroup</code> could not be deleted from the
   *                   <code>OfflineStore</code>.</p>
   *             </li>
   *          </ul>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>A free form description of the feature group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A token to resume pagination of the list of <code>Features</code>
   *             (<code>FeatureDefinitions</code>).</p>
   */
  NextToken: string | undefined;

  /**
   * @public
   * <p>The size of the <code>OnlineStore</code> in bytes.</p>
   */
  OnlineStoreTotalSizeBytes?: number;
}

/**
 * @public
 */
export interface DescribeFeatureMetadataRequest {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the feature group containing the
   *          feature.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the feature.</p>
   */
  FeatureName: string | undefined;
}

/**
 * @public
 * <p>A key-value pair that you specify to describe the feature.</p>
 */
export interface FeatureParameter {
  /**
   * @public
   * <p>A key that must contain a value to describe the feature.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value that belongs to a key.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface DescribeFeatureMetadataResponse {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the feature group that contains the feature.</p>
   */
  FeatureGroupArn: string | undefined;

  /**
   * @public
   * <p>The name of the feature group that you've specified.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the feature that you've specified.</p>
   */
  FeatureName: string | undefined;

  /**
   * @public
   * <p>The data type of the feature.</p>
   */
  FeatureType: FeatureType | undefined;

  /**
   * @public
   * <p>A timestamp indicating when the feature was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>A timestamp indicating when the metadata for the feature group was modified. For
   *          example, if you add a parameter describing the feature, the timestamp changes to reflect
   *          the last time you </p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The description you added to describe the feature.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The key-value pairs that you added to describe the feature.</p>
   */
  Parameters?: FeatureParameter[];
}

/**
 * @public
 */
export interface DescribeFlowDefinitionRequest {
  /**
   * @public
   * <p>The name of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FlowDefinitionStatus = {
  ACTIVE: "Active",
  DELETING: "Deleting",
  FAILED: "Failed",
  INITIALIZING: "Initializing",
} as const;

/**
 * @public
 */
export type FlowDefinitionStatus = (typeof FlowDefinitionStatus)[keyof typeof FlowDefinitionStatus];

/**
 * @public
 */
export interface DescribeFlowDefinitionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow defintion.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * @public
   * <p>The status of the flow definition. Valid values are listed below.</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | undefined;

  /**
   * @public
   * <p>The timestamp when the flow definition was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Container for configuring the source of human task requests. Used to specify if
   *       Amazon Rekognition or Amazon Textract is used as an integration source.</p>
   */
  HumanLoopRequestSource?: HumanLoopRequestSource;

  /**
   * @public
   * <p>An object containing information about what triggers a human review workflow.</p>
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig;

  /**
   * @public
   * <p>An object containing information about who works on the task, the workforce task price, and other task details.</p>
   */
  HumanLoopConfig: HumanLoopConfig | undefined;

  /**
   * @public
   * <p>An object containing information about the output file.</p>
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) execution role for the flow definition.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The reason your flow definition failed.</p>
   */
  FailureReason?: string;
}

/**
 * @public
 */
export interface DescribeHubRequest {
  /**
   * @public
   * <p>The name of the hub to describe.</p>
   */
  HubName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HubStatus = {
  CREATE_FAILED: "CreateFailed",
  CREATING: "Creating",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  IN_SERVICE: "InService",
  UPDATE_FAILED: "UpdateFailed",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type HubStatus = (typeof HubStatus)[keyof typeof HubStatus];

/**
 * @public
 */
export interface DescribeHubResponse {
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
   * <p>The Amazon S3 storage configuration for the hub.</p>
   */
  S3StorageConfig?: HubS3StorageConfig;

  /**
   * @public
   * <p>The status of the hub.</p>
   */
  HubStatus: HubStatus | undefined;

  /**
   * @public
   * <p>The failure reason if importing hub content failed.</p>
   */
  FailureReason?: string;

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
 */
export interface DescribeHubContentRequest {
  /**
   * @public
   * <p>The name of the hub that contains the content to describe.</p>
   */
  HubName: string | undefined;

  /**
   * @public
   * <p>The type of content in the hub.</p>
   */
  HubContentType: HubContentType | undefined;

  /**
   * @public
   * <p>The name of the content to describe.</p>
   */
  HubContentName: string | undefined;

  /**
   * @public
   * <p>The version of the content to describe.</p>
   */
  HubContentVersion?: string;
}

/**
 * @public
 * <p>Any dependencies related to hub content, such as scripts, model artifacts, datasets, or notebooks.</p>
 */
export interface HubContentDependency {
  /**
   * @public
   * <p>The hub content dependency origin path.</p>
   */
  DependencyOriginPath?: string;

  /**
   * @public
   * <p>The hub content dependency copy path.</p>
   */
  DependencyCopyPath?: string;
}

/**
 * @public
 * @enum
 */
export const HubContentStatus = {
  AVAILABLE: "Available",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  IMPORTING: "Importing",
  IMPORT_FAILED: "ImportFailed",
} as const;

/**
 * @public
 */
export type HubContentStatus = (typeof HubContentStatus)[keyof typeof HubContentStatus];

/**
 * @public
 */
export interface DescribeHubContentResponse {
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
   * <p>The document schema version for the hub content.</p>
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * @public
   * <p>The name of the hub that contains the content.</p>
   */
  HubName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hub that contains the content. </p>
   */
  HubArn: string | undefined;

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
   * <p>The searchable keywords for the hub content.</p>
   */
  HubContentSearchKeywords?: string[];

  /**
   * @public
   * <p>The location of any dependencies that the hub content has, such as scripts, model artifacts, datasets, or notebooks.</p>
   */
  HubContentDependencies?: HubContentDependency[];

  /**
   * @public
   * <p>The status of the hub content.</p>
   */
  HubContentStatus: HubContentStatus | undefined;

  /**
   * @public
   * <p>The failure reason if importing hub content failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The date and time that hub content was created.</p>
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeHumanTaskUiRequest {
  /**
   * @public
   * <p>The name of the human task user interface
   *       (worker task template) you want information about.</p>
   */
  HumanTaskUiName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HumanTaskUiStatus = {
  ACTIVE: "Active",
  DELETING: "Deleting",
} as const;

/**
 * @public
 */
export type HumanTaskUiStatus = (typeof HumanTaskUiStatus)[keyof typeof HumanTaskUiStatus];

/**
 * @public
 * <p>Container for user interface template information.</p>
 */
export interface UiTemplateInfo {
  /**
   * @public
   * <p>The URL for the user interface template.</p>
   */
  Url?: string;

  /**
   * @public
   * <p>The SHA-256 digest of the contents of the template.</p>
   */
  ContentSha256?: string;
}

/**
 * @public
 */
export interface DescribeHumanTaskUiResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the human task user interface (worker task template).</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * @public
   * <p>The name of the human task user interface (worker task template).</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * @public
   * <p>The status of the human task user interface (worker task template). Valid values are listed below.</p>
   */
  HumanTaskUiStatus?: HumanTaskUiStatus;

  /**
   * @public
   * <p>The timestamp when the human task user interface was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Container for user interface template information.</p>
   */
  UiTemplate: UiTemplateInfo | undefined;
}

/**
 * @public
 */
export interface DescribeHyperParameterTuningJobRequest {
  /**
   * @public
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;
}

/**
 * @public
 * <p>Shows the latest objective metric emitted by a training job that was launched by a
 *             hyperparameter tuning job. You define the objective metric in the
 *                 <code>HyperParameterTuningJobObjective</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html">HyperParameterTuningJobConfig</a>.</p>
 */
export interface FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * @public
   * <p>Select if you want to minimize or maximize the objective metric during hyperparameter
   *             tuning. </p>
   */
  Type?: HyperParameterTuningJobObjectiveType;

  /**
   * @public
   * <p>The name of the objective metric. For SageMaker built-in algorithms, metrics are defined
   *             per algorithm. See the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xgboost-tuning.html">metrics for XGBoost</a> as an
   *             example. You can also use a custom algorithm for training and define your own metrics.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html">Define metrics and environment variables</a>.</p>
   */
  MetricName: string | undefined;

  /**
   * @public
   * <p>The value of the objective metric.</p>
   */
  Value: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainingJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type TrainingJobStatus = (typeof TrainingJobStatus)[keyof typeof TrainingJobStatus];

/**
 * @public
 * <p>The container for the summary information about a training job.</p>
 */
export interface HyperParameterTrainingJobSummary {
  /**
   * @public
   * <p>The training job definition name.</p>
   */
  TrainingJobDefinitionName?: string;

  /**
   * @public
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * @public
   * <p>The HyperParameter tuning job that launched the training job.</p>
   */
  TuningJobName?: string;

  /**
   * @public
   * <p>The date and time that the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the training job started.</p>
   */
  TrainingStartTime?: Date;

  /**
   * @public
   * <p>Specifies the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * @public
   * <p>The
   *             status
   *             of the training job.</p>
   */
  TrainingJobStatus: TrainingJobStatus | undefined;

  /**
   * @public
   * <p>A
   *             list of the hyperparameters for which you specified ranges to
   *             search.</p>
   */
  TunedHyperParameters: Record<string, string> | undefined;

  /**
   * @public
   * <p>The
   *             reason that the training job failed.
   *         </p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_FinalHyperParameterTuningJobObjectiveMetric.html">FinalHyperParameterTuningJobObjectiveMetric</a> object that specifies the
   *             value
   *             of the
   *             objective
   *             metric of the tuning job that launched this training job.</p>
   */
  FinalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;

  /**
   * @public
   * <p>The status of the objective metric for the training job:</p>
   *          <ul>
   *             <li>
   *                <p>Succeeded: The
   *                     final
   *                     objective metric for the training job was evaluated by the
   *                     hyperparameter tuning job and
   *                     used
   *                     in the hyperparameter tuning process.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>Pending: The training job is in progress and evaluation of its final objective
   *                     metric is pending.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>Failed:
   *                     The final objective metric for the training job was not evaluated, and was not
   *                     used in the hyperparameter tuning process. This typically occurs when the
   *                     training job failed or did not emit an objective
   *                     metric.</p>
   *             </li>
   *          </ul>
   */
  ObjectiveStatus?: ObjectiveStatus;
}

/**
 * @public
 * <p>The total resources consumed by your hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobConsumedResources {
  /**
   * @public
   * <p>The wall clock runtime in seconds used by your hyperparameter tuning job.</p>
   */
  RuntimeInSeconds?: number;
}

/**
 * @public
 * @enum
 */
export const HyperParameterTuningJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type HyperParameterTuningJobStatus =
  (typeof HyperParameterTuningJobStatus)[keyof typeof HyperParameterTuningJobStatus];

/**
 * @public
 * <p>Specifies the number of training jobs that this hyperparameter tuning job launched,
 *             categorized by the status of their objective metric. The objective metric status shows
 *             whether the
 *             final
 *             objective metric for the training job has been evaluated by the
 *             tuning job and used in the hyperparameter tuning process.</p>
 */
export interface ObjectiveStatusCounters {
  /**
   * @public
   * <p>The number of training jobs whose final objective metric was evaluated by the
   *             hyperparameter tuning job and used in the hyperparameter tuning process.</p>
   */
  Succeeded?: number;

  /**
   * @public
   * <p>The number of training jobs that are in progress and pending evaluation of their final
   *             objective metric.</p>
   */
  Pending?: number;

  /**
   * @public
   * <p>The number of training jobs whose final objective metric was not evaluated and used in
   *             the hyperparameter tuning process. This typically occurs when the training job failed or
   *             did not emit an objective metric.</p>
   */
  Failed?: number;
}

/**
 * @public
 * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by
 *             status.</p>
 */
export interface TrainingJobStatusCounters {
  /**
   * @public
   * <p>The number of completed training jobs launched by the hyperparameter tuning
   *             job.</p>
   */
  Completed?: number;

  /**
   * @public
   * <p>The number of in-progress training jobs launched by a hyperparameter tuning
   *             job.</p>
   */
  InProgress?: number;

  /**
   * @public
   * <p>The number of training jobs that failed, but can be retried. A failed training job can
   *             be retried only if it failed because an internal service error occurred.</p>
   */
  RetryableError?: number;

  /**
   * @public
   * <p>The number of training jobs that failed and can't be retried. A failed training job
   *             can't be retried if it failed because a client error occurred.</p>
   */
  NonRetryableError?: number;

  /**
   * @public
   * <p>The number of training jobs launched by a hyperparameter tuning job that were
   *             manually
   *             stopped.</p>
   */
  Stopped?: number;
}

/**
 * @public
 * <p>A structure that contains runtime information about both current and completed
 *             hyperparameter tuning jobs.</p>
 */
export interface HyperParameterTuningJobCompletionDetails {
  /**
   * @public
   * <p>The number of training jobs launched by a tuning job that are not improving (1% or
   *             less) as measured by model performance evaluated against an objective function.</p>
   */
  NumberOfTrainingJobsObjectiveNotImproving?: number;

  /**
   * @public
   * <p>The time in timestamp format that AMT detected model convergence, as defined by a lack
   *             of significant improvement over time based on criteria developed over a wide range of
   *             diverse benchmarking tests.</p>
   */
  ConvergenceDetectedTime?: Date;
}

/**
 * @public
 */
export interface DescribeHyperParameterTuningJobResponse {
  /**
   * @public
   * <p>The name of the hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html">HyperParameterTuningJobConfig</a> object that specifies the configuration of
   *             the tuning job.</p>
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html">HyperParameterTrainingJobDefinition</a> object that specifies the definition of
   *             the training jobs that this tuning job launches.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * @public
   * <p>A list of the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html">HyperParameterTrainingJobDefinition</a> objects launched for this tuning
   *             job.</p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * @public
   * <p>The status of the tuning job: InProgress, Completed, Failed, Stopping, or
   *             Stopped.</p>
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | undefined;

  /**
   * @public
   * <p>The date and time that the tuning job started.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * @public
   * <p>The date and time that the status of the tuning job was modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobStatusCounters.html">TrainingJobStatusCounters</a> object that specifies the number of training
   *             jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ObjectiveStatusCounters.html">ObjectiveStatusCounters</a> object that specifies the number of training jobs,
   *             categorized by the status of their final objective metric, that this tuning job
   *             launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * @public
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> object that describes the training job that completed
   *             with the best current <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobObjective.html">HyperParameterTuningJobObjective</a>.</p>
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * @public
   * <p>If the hyperparameter tuning job is an warm start tuning job with a
   *                 <code>WarmStartType</code> of <code>IDENTICAL_DATA_AND_ALGORITHM</code>, this is the
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> for the training job with the best objective metric
   *             value of all training jobs launched by this tuning job and all parent jobs specified for
   *             the warm start tuning job.</p>
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * @public
   * <p>The configuration for starting the hyperparameter parameter tuning job using one or
   *             more previous tuning jobs as a starting point. The results of previous tuning jobs are
   *             used to inform which combinations of hyperparameters to search over in the new tuning
   *             job.</p>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * @public
   * <p>If the tuning job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>Tuning job completion information returned as the response from a hyperparameter
   *             tuning job. This information tells if your tuning job has or has not converged. It also
   *             includes the number of training jobs that have not improved model performance as
   *             evaluated against the objective function.</p>
   */
  TuningJobCompletionDetails?: HyperParameterTuningJobCompletionDetails;

  /**
   * @public
   * <p>The total resources consumed by your hyperparameter tuning job.</p>
   */
  ConsumedResources?: HyperParameterTuningJobConsumedResources;

  /**
   * @public
   * <p>A flag to indicate if autotune is enabled for the hyperparameter tuning job.</p>
   */
  Autotune?: Autotune;
}

/**
 * @public
 */
export interface DescribeImageRequest {
  /**
   * @public
   * <p>The name of the image to describe.</p>
   */
  ImageName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ImageStatus = (typeof ImageStatus)[keyof typeof ImageStatus];

/**
 * @public
 */
export interface DescribeImageResponse {
  /**
   * @public
   * <p>When the image was created.</p>
   */
  CreationTime?: Date;

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
  ImageArn?: string;

  /**
   * @public
   * <p>The name of the image.</p>
   */
  ImageName?: string;

  /**
   * @public
   * <p>The status of the image.</p>
   */
  ImageStatus?: ImageStatus;

  /**
   * @public
   * <p>When the image was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The ARN of the IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface DescribeImageVersionRequest {
  /**
   * @public
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * @public
   * <p>The version of the image. If not specified, the latest version is described.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>The alias of the image version.</p>
   */
  Alias?: string;
}

/**
 * @public
 * @enum
 */
export const ImageVersionStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type ImageVersionStatus = (typeof ImageVersionStatus)[keyof typeof ImageVersionStatus];

/**
 * @public
 */
export interface DescribeImageVersionResponse {
  /**
   * @public
   * <p>The registry path of the container image on which this image version is based.</p>
   */
  BaseImage?: string;

  /**
   * @public
   * <p>The registry path of the container image that contains this image version.</p>
   */
  ContainerImage?: string;

  /**
   * @public
   * <p>When the version was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The ARN of the image the version is based on.</p>
   */
  ImageArn?: string;

  /**
   * @public
   * <p>The ARN of the version.</p>
   */
  ImageVersionArn?: string;

  /**
   * @public
   * <p>The status of the version.</p>
   */
  ImageVersionStatus?: ImageVersionStatus;

  /**
   * @public
   * <p>When the version was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>The stability of the image version specified by the maintainer.</p>
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
  VendorGuidance?: VendorGuidance;

  /**
   * @public
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
  JobType?: JobType;

  /**
   * @public
   * <p>The machine learning framework vended in the image version.</p>
   */
  MLFramework?: string;

  /**
   * @public
   * <p>The supported programming language and its version.</p>
   */
  ProgrammingLang?: string;

  /**
   * @public
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
  Processor?: Processor;

  /**
   * @public
   * <p>Indicates Horovod compatibility.</p>
   */
  Horovod?: boolean;

  /**
   * @public
   * <p>The maintainer description of the image version.</p>
   */
  ReleaseNotes?: string;
}

/**
 * @public
 */
export interface DescribeInferenceExperimentRequest {
  /**
   * @public
   * <p>The name of the inference experiment to describe.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>The metadata of the endpoint.</p>
 */
export interface EndpointMetadata {
  /**
   * @public
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName?: string;

  /**
   * @public
   * <p>
   *            The status of the endpoint. For possible values of the status of an endpoint, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_EndpointSummary.html">EndpointSummary</a>.
   *        </p>
   */
  EndpointStatus?: EndpointStatus;

  /**
   * @public
   * <p>
   *            If the status of the endpoint is <code>Failed</code>, or the status is <code>InService</code> but update
   *            operation fails, this provides the reason why it failed.
   *        </p>
   */
  FailureReason?: string;
}

/**
 * @public
 * @enum
 */
export const ModelVariantStatus = {
  CREATING: "Creating",
  DELETED: "Deleted",
  DELETING: "Deleting",
  IN_SERVICE: "InService",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type ModelVariantStatus = (typeof ModelVariantStatus)[keyof typeof ModelVariantStatus];

/**
 * @public
 * <p>Summary of the deployment configuration of a model.</p>
 */
export interface ModelVariantConfigSummary {
  /**
   * @public
   * <p>The name of the Amazon SageMaker Model entity.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * @public
   * <p>The configuration of the infrastructure that the model has been deployed to.</p>
   */
  InfrastructureConfig: ModelInfrastructureConfig | undefined;

  /**
   * @public
   * <p>The status of deployment for the model variant on the hosted inference endpoint.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Creating</code> - Amazon SageMaker is preparing the model variant on the hosted inference endpoint.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InService</code> - The model variant is running on the hosted inference endpoint.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code> - Amazon SageMaker is updating the model variant on the hosted inference endpoint.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code> - Amazon SageMaker is deleting the model variant on the hosted inference endpoint.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleted</code> - The model variant has been deleted on the hosted inference endpoint. This
   *                     can only happen after stopping the experiment.
   *                 </p>
   *             </li>
   *          </ul>
   */
  Status: ModelVariantStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const InferenceExperimentStatus = {
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
  CREATED: "Created",
  CREATING: "Creating",
  RUNNING: "Running",
  STARTING: "Starting",
  STOPPING: "Stopping",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type InferenceExperimentStatus = (typeof InferenceExperimentStatus)[keyof typeof InferenceExperimentStatus];

/**
 * @public
 */
export interface DescribeInferenceExperimentResponse {
  /**
   * @public
   * <p>The ARN of the inference experiment being described.</p>
   */
  Arn: string | undefined;

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
   */
  Schedule?: InferenceExperimentSchedule;

  /**
   * @public
   * <p>
   *            The status of the inference experiment. The following are the possible statuses for an inference
   *            experiment:
   *        </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Creating</code> - Amazon SageMaker is creating your experiment.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Created</code> - Amazon SageMaker has finished the creation of your experiment and will begin the
   *                    experiment at the scheduled time.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code> - When you make changes to your experiment, your experiment shows as updating.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Starting</code> - Amazon SageMaker is beginning your experiment.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Running</code> - Your experiment is in progress.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopping</code> - Amazon SageMaker is stopping your experiment.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Completed</code> - Your experiment has completed.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Cancelled</code> - When you conclude your experiment early using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopInferenceExperiment.html">StopInferenceExperiment</a> API, or if any operation fails with an unexpected error, it shows
   *                    as cancelled.
   *                </p>
   *             </li>
   *          </ul>
   */
  Status: InferenceExperimentStatus | undefined;

  /**
   * @public
   * <p>
   *            The error message or client-specified <code>Reason</code> from the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopInferenceExperiment.html">StopInferenceExperiment</a>
   *            API, that explains the status of the inference experiment.
   *        </p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>The description of the inference experiment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The timestamp at which you created the inference experiment.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>
   *            The timestamp at which the inference experiment was completed.
   *        </p>
   */
  CompletionTime?: Date;

  /**
   * @public
   * <p>The timestamp at which you last modified the inference experiment.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>
   *            The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage
   *            Amazon SageMaker Inference endpoints for model deployment.
   *        </p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The metadata of the endpoint on which the inference experiment ran.</p>
   */
  EndpointMetadata: EndpointMetadata | undefined;

  /**
   * @public
   * <p>
   *            An array of <code>ModelVariantConfigSummary</code> objects. There is one for each variant in the inference
   *            experiment. Each <code>ModelVariantConfigSummary</code> object in the array describes the infrastructure
   *            configuration for deploying the corresponding variant.
   *        </p>
   */
  ModelVariants: ModelVariantConfigSummary[] | undefined;

  /**
   * @public
   * <p>The Amazon S3 location and configuration for storing inference request and response data.</p>
   */
  DataStorageConfig?: InferenceExperimentDataStorageConfig;

  /**
   * @public
   * <p>
   *            The configuration of <code>ShadowMode</code> inference experiment type, which shows the production variant
   *            that takes all the inference requests, and the shadow variant to which Amazon SageMaker replicates a percentage of the
   *            inference requests. For the shadow variant it also shows the percentage of requests that Amazon SageMaker replicates.
   *        </p>
   */
  ShadowModeConfig?: ShadowModeConfig;

  /**
   * @public
   * <p>
   *            The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on
   *            the storage volume attached to the ML compute instance that hosts the endpoint. For more information, see
   *            <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceExperiment.html">CreateInferenceExperiment</a>.
   *        </p>
   */
  KmsKey?: string;
}

/**
 * @public
 */
export interface DescribeInferenceRecommendationsJobRequest {
  /**
   * @public
   * <p>The name of the job. The name must be unique within an
   *            Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobName: string | undefined;
}

/**
 * @public
 * <p>The metrics for an existing endpoint compared in an Inference Recommender job.</p>
 */
export interface InferenceMetrics {
  /**
   * @public
   * <p>The expected maximum number of requests per minute for the instance.</p>
   */
  MaxInvocations: number | undefined;

  /**
   * @public
   * <p>The expected model latency at maximum invocations per minute for the instance.</p>
   */
  ModelLatency: number | undefined;
}

/**
 * @public
 * <p>The performance results from running an Inference Recommender job on an existing endpoint.</p>
 */
export interface EndpointPerformance {
  /**
   * @public
   * <p>The metrics for an existing endpoint.</p>
   */
  Metrics: InferenceMetrics | undefined;

  /**
   * @public
   * <p>Details about a customer endpoint that was compared in an Inference Recommender job.</p>
   */
  EndpointInfo: EndpointInfo | undefined;
}

/**
 * @public
 * <p>The endpoint configuration made by Inference Recommender during a recommendation job.</p>
 */
export interface EndpointOutputConfiguration {
  /**
   * @public
   * <p>The name of the endpoint made during a recommendation job.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>The name of the production variant (deployed model) made during a recommendation job.</p>
   */
  VariantName: string | undefined;

  /**
   * @public
   * <p>The instance type recommended by Amazon SageMaker Inference Recommender.</p>
   */
  InstanceType?: ProductionVariantInstanceType;

  /**
   * @public
   * <p>The number of instances recommended to launch initially.</p>
   */
  InitialInstanceCount?: number;

  /**
   * @public
   * <p>Specifies the serverless configuration for an endpoint variant.</p>
   */
  ServerlessConfig?: ProductionVariantServerlessConfig;
}

/**
 * @public
 * <p>The metrics of recommendations.</p>
 */
export interface RecommendationMetrics {
  /**
   * @public
   * <p>Defines the cost per hour for the instance. </p>
   */
  CostPerHour: number | undefined;

  /**
   * @public
   * <p>Defines the cost per inference for the instance .</p>
   */
  CostPerInference: number | undefined;

  /**
   * @public
   * <p>The expected maximum number of requests per minute for the instance.</p>
   */
  MaxInvocations: number | undefined;

  /**
   * @public
   * <p>The expected model latency at maximum invocation per minute for the instance.</p>
   */
  ModelLatency: number | undefined;

  /**
   * @public
   * <p>The expected CPU utilization at maximum invocations per minute for the instance.</p>
   *          <p>
   *             <code>NaN</code> indicates that the value is not available.</p>
   */
  CpuUtilization?: number;

  /**
   * @public
   * <p>The expected memory utilization at maximum invocations per minute for the instance.</p>
   *          <p>
   *             <code>NaN</code> indicates that the value is not available.</p>
   */
  MemoryUtilization?: number;

  /**
   * @public
   * <p>The time it takes to launch new compute resources for a serverless endpoint.
   *          The time can vary depending on the model size, how long it takes to download the
   *          model, and the start-up time of the container.</p>
   *          <p>
   *             <code>NaN</code> indicates that the value is not available.</p>
   */
  ModelSetupTime?: number;
}

/**
 * @public
 * <p>A list of environment parameters suggested by the Amazon SageMaker Inference Recommender.</p>
 */
export interface EnvironmentParameter {
  /**
   * @public
   * <p>The environment key suggested by the Amazon SageMaker Inference Recommender.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value type suggested by the Amazon SageMaker Inference Recommender.</p>
   */
  ValueType: string | undefined;

  /**
   * @public
   * <p>The value suggested by the Amazon SageMaker Inference Recommender.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Defines the model configuration. Includes the specification name and environment parameters.</p>
 */
export interface ModelConfiguration {
  /**
   * @public
   * <p>The inference specification name in the model package version.</p>
   */
  InferenceSpecificationName?: string;

  /**
   * @public
   * <p>Defines the environment parameters that includes key, value types, and values.</p>
   */
  EnvironmentParameters?: EnvironmentParameter[];

  /**
   * @public
   * <p>The name of the compilation job used to create the recommended model artifacts.</p>
   */
  CompilationJobName?: string;
}

/**
 * @public
 * <p>A list of recommendations made by Amazon SageMaker Inference Recommender.</p>
 */
export interface InferenceRecommendation {
  /**
   * @public
   * <p>The metrics used to decide what recommendation to make.</p>
   */
  Metrics: RecommendationMetrics | undefined;

  /**
   * @public
   * <p>Defines the endpoint configuration parameters.</p>
   */
  EndpointConfiguration: EndpointOutputConfiguration | undefined;

  /**
   * @public
   * <p>Defines the model configuration.</p>
   */
  ModelConfiguration: ModelConfiguration | undefined;

  /**
   * @public
   * <p>The recommendation ID which uniquely identifies each recommendation.</p>
   */
  RecommendationId?: string;

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
export const RecommendationJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type RecommendationJobStatus = (typeof RecommendationJobStatus)[keyof typeof RecommendationJobStatus];

/**
 * @public
 */
export interface DescribeInferenceRecommendationsJobResponse {
  /**
   * @public
   * <p>The name of the job. The name must be unique within an
   *            Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>The job description that you provided when you initiated the job.</p>
   */
  JobDescription?: string;

  /**
   * @public
   * <p>The job type that you provided when you initiated the job.</p>
   */
  JobType: RecommendationJobType | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  JobArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services
   *            Identity and Access Management (IAM) role you provided when you initiated the job.</p>
   */
  RoleArn: string | undefined;

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
   * <p>Returns information about the versioned model package Amazon Resource Name (ARN),
   *     the traffic pattern, and endpoint configurations you provided when you initiated the job.</p>
   */
  InputConfig: RecommendationJobInputConfig | undefined;

  /**
   * @public
   * <p>The stopping conditions that you provided when you initiated the job.</p>
   */
  StoppingConditions?: RecommendationJobStoppingConditions;

  /**
   * @public
   * <p>The recommendations made by Inference Recommender.</p>
   */
  InferenceRecommendations?: InferenceRecommendation[];

  /**
   * @public
   * <p>The performance results from running an Inference Recommender job on an existing endpoint.</p>
   */
  EndpointPerformances?: EndpointPerformance[];
}

/**
 * @public
 */
export interface DescribeLabelingJobRequest {
  /**
   * @public
   * <p>The name of the labeling job to return information for.</p>
   */
  LabelingJobName: string | undefined;
}

/**
 * @public
 * <p>Provides a breakdown of the number of objects labeled.</p>
 */
export interface LabelCounters {
  /**
   * @public
   * <p>The total number of objects labeled.</p>
   */
  TotalLabeled?: number;

  /**
   * @public
   * <p>The total number of objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * @public
   * <p>The total number of objects labeled by automated data labeling.</p>
   */
  MachineLabeled?: number;

  /**
   * @public
   * <p>The total number of objects that could not be labeled due to an error.</p>
   */
  FailedNonRetryableError?: number;

  /**
   * @public
   * <p>The total number of objects not yet labeled.</p>
   */
  Unlabeled?: number;
}

/**
 * @public
 * <p>Specifies the location of the output produced by the labeling job. </p>
 */
export interface LabelingJobOutput {
  /**
   * @public
   * <p>The Amazon S3 bucket location of the manifest file for labeled data. </p>
   */
  OutputDatasetS3Uri: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the most recent SageMaker model trained as part of
   *             automated data labeling. </p>
   */
  FinalActiveLearningModelArn?: string;
}

/**
 * @public
 * @enum
 */
export const LabelingJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  INITIALIZING: "Initializing",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type LabelingJobStatus = (typeof LabelingJobStatus)[keyof typeof LabelingJobStatus];

/**
 * @public
 */
export interface DescribeLabelingJobResponse {
  /**
   * @public
   * <p>The processing status of the labeling job. </p>
   */
  LabelingJobStatus: LabelingJobStatus | undefined;

  /**
   * @public
   * <p>Provides a breakdown of the number of data objects labeled by humans, the number of
   *             objects labeled by machine, the number of objects than couldn't be labeled, and the
   *             total number of objects labeled. </p>
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * @public
   * <p>If the job failed, the reason that it failed. </p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the labeling job was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>A unique identifier for work done as part of a labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * @public
   * <p>The name assigned to the labeling job when it was created.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * @public
   * <p>The attribute used as the label in the output manifest file.</p>
   */
  LabelAttributeName?: string;

  /**
   * @public
   * <p>Input configuration information for the labeling job, such as the Amazon S3 location of the
   *             data objects and the location of the manifest file that describes the data
   *             objects.</p>
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * @public
   * <p>The location of the job's output data and the Amazon Web Services Key Management
   *             Service key ID for the key used to encrypt the output data, if any.</p>
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf
   *             during data labeling.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The S3 location of the JSON file that defines the categories used to label data
   *             objects. Please note the following label-category limits:</p>
   *          <ul>
   *             <li>
   *                <p>Semantic segmentation labeling jobs using automated labeling: 20 labels</p>
   *             </li>
   *             <li>
   *                <p>Box bounding labeling jobs (all): 10 labels</p>
   *             </li>
   *          </ul>
   *          <p>The file is a JSON structure in the following format:</p>
   *          <p>
   *             <code>\{</code>
   *          </p>
   *          <p>
   *             <code> "document-version": "2018-11-28"</code>
   *          </p>
   *          <p>
   *             <code> "labels": [</code>
   *          </p>
   *          <p>
   *             <code> \{</code>
   *          </p>
   *          <p>
   *             <code> "label": "<i>label 1</i>"</code>
   *          </p>
   *          <p>
   *             <code> \},</code>
   *          </p>
   *          <p>
   *             <code> \{</code>
   *          </p>
   *          <p>
   *             <code> "label": "<i>label 2</i>"</code>
   *          </p>
   *          <p>
   *             <code> \},</code>
   *          </p>
   *          <p>
   *             <code> ...</code>
   *          </p>
   *          <p>
   *             <code> \{</code>
   *          </p>
   *          <p>
   *             <code> "label": "<i>label n</i>"</code>
   *          </p>
   *          <p>
   *             <code> \}</code>
   *          </p>
   *          <p>
   *             <code> ]</code>
   *          </p>
   *          <p>
   *             <code>\}</code>
   *          </p>
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * @public
   * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the
   *             job is automatically stopped.</p>
   */
  StoppingConditions?: LabelingJobStoppingConditions;

  /**
   * @public
   * <p>Configuration information for automated data labeling.</p>
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * @public
   * <p>Configuration information required for human workers to complete a labeling
   *             task.</p>
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * @public
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;
}

/**
 * @public
 */
export interface DescribeLineageGroupRequest {
  /**
   * @public
   * <p>The name of the lineage group.</p>
   */
  LineageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeLineageGroupResponse {
  /**
   * @public
   * <p>The name of the lineage group.</p>
   */
  LineageGroupName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;

  /**
   * @public
   * <p>The display name of the lineage group.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The description of the lineage group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The creation time of lineage group.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>The last modified time of the lineage group.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;
}

/**
 * @public
 */
export interface DescribeModelInput {
  /**
   * @public
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelOutput {
  /**
   * @public
   * <p>Name of the SageMaker model.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The location of the primary inference code, associated artifacts, and custom
   *             environment map that the inference code uses when it is deployed in production.
   *         </p>
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * @public
   * <p>The containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];

  /**
   * @public
   * <p>Specifies details of how containers in a multi-container endpoint are called.</p>
   */
  InferenceExecutionConfig?: InferenceExecutionConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the
   *             model.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * @public
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that this model has access to. For
   *             more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual
   *                 Private Cloud</a>
   *          </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * @public
   * <p>A timestamp that shows when the model was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string | undefined;

  /**
   * @public
   * <p>If <code>True</code>, no inbound or outbound network calls can be made to or from the
   *             model container.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * @public
   * <p>A set of recommended deployment configurations for the model.</p>
   */
  DeploymentRecommendation?: DeploymentRecommendation;
}

/**
 * @public
 */
export interface DescribeModelBiasJobDefinitionRequest {
  /**
   * @public
   * <p>The name of the model bias job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelBiasJobDefinitionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model bias job.</p>
   */
  JobDefinitionArn: string | undefined;

  /**
   * @public
   * <p>The name of the bias job definition. The name must be unique within an Amazon Web Services
   *    Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * @public
   * <p>The time at which the model bias job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The baseline configuration for a model bias job.</p>
   */
  ModelBiasBaselineConfig?: ModelBiasBaselineConfig;

  /**
   * @public
   * <p>Configures the model bias job to run a specified Docker container image.</p>
   */
  ModelBiasAppSpecification: ModelBiasAppSpecification | undefined;

  /**
   * @public
   * <p>Inputs for the model bias job.</p>
   */
  ModelBiasJobInput: ModelBiasJobInput | undefined;

  /**
   * @public
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelBiasJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * @public
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * @public
   * <p>Networking options for a model bias job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that has read permission to the
   *    input data location and write permission to the output data location in Amazon S3.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

/**
 * @public
 */
export interface DescribeModelCardRequest {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the model card to describe.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>The version of the model card to describe. If a version is not provided, then the latest version of the model card is described.</p>
   */
  ModelCardVersion?: number;
}

/**
 * @public
 * @enum
 */
export const ModelCardProcessingStatus = {
  CONTENT_DELETED: "ContentDeleted",
  DELETE_COMPLETED: "DeleteCompleted",
  DELETE_FAILED: "DeleteFailed",
  DELETE_INPROGRESS: "DeleteInProgress",
  DELETE_PENDING: "DeletePending",
  EXPORTJOBS_DELETED: "ExportJobsDeleted",
} as const;

/**
 * @public
 */
export type ModelCardProcessingStatus = (typeof ModelCardProcessingStatus)[keyof typeof ModelCardProcessingStatus];

/**
 * @public
 */
export interface DescribeModelCardResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   */
  ModelCardArn: string | undefined;

  /**
   * @public
   * <p>The name of the model card.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>The version of the model card.</p>
   */
  ModelCardVersion: number | undefined;

  /**
   * @public
   * <p>The content of the model card.</p>
   */
  Content: string | undefined;

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
   * <p>The security configuration used to protect model card content.</p>
   */
  SecurityConfig?: ModelCardSecurityConfig;

  /**
   * @public
   * <p>The date and time the model card was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy: UserContext | undefined;

  /**
   * @public
   * <p>The date and time the model card was last modified.</p>
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
   * <p>The processing status of model card deletion. The <code>ModelCardProcessingStatus</code> updates throughout the different deletion steps.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DeletePending</code>: Model card deletion request received.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeleteInProgress</code>: Model card deletion is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ContentDeleted</code>: Deleted model card content.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ExportJobsDeleted</code>: Deleted all export jobs associated with the model card.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeleteCompleted</code>: Successfully deleted the model card.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeleteFailed</code>: The model card failed to delete.</p>
   *             </li>
   *          </ul>
   */
  ModelCardProcessingStatus?: ModelCardProcessingStatus;
}

/**
 * @public
 */
export interface DescribeModelCardExportJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model card export job to describe.</p>
   */
  ModelCardExportJobArn: string | undefined;
}

/**
 * @public
 * <p>The artifacts of the model card export job.</p>
 */
export interface ModelCardExportArtifacts {
  /**
   * @public
   * <p>The Amazon S3 URI of the exported model artifacts.</p>
   */
  S3ExportArtifacts: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelCardExportJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
} as const;

/**
 * @public
 */
export type ModelCardExportJobStatus = (typeof ModelCardExportJobStatus)[keyof typeof ModelCardExportJobStatus];

/**
 * @public
 */
export interface DescribeModelCardExportJobResponse {
  /**
   * @public
   * <p>The name of the model card export job to describe.</p>
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
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InProgress</code>: The model card export job is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Completed</code>: The model card export job is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: The model card export job failed. To see the reason for the failure, see
   *                the <code>FailureReason</code> field in the response to a
   *                   <code>DescribeModelCardExportJob</code> call.</p>
   *             </li>
   *          </ul>
   */
  Status: ModelCardExportJobStatus | undefined;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the model card that the model export job exports.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>The version of the model card that the model export job exports.</p>
   */
  ModelCardVersion: number | undefined;

  /**
   * @public
   * <p>The export output details for the model card.</p>
   */
  OutputConfig: ModelCardExportOutputConfig | undefined;

  /**
   * @public
   * <p>The date and time that the model export job was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the model export job was last modified.</p>
   */
  LastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The failure reason if the model export job fails.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The exported model card artifacts.</p>
   */
  ExportArtifacts?: ModelCardExportArtifacts;
}

/**
 * @public
 */
export interface DescribeModelExplainabilityJobDefinitionRequest {
  /**
   * @public
   * <p>The name of the model explainability job definition. The name must be unique within an
   *             Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelExplainabilityJobDefinitionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model explainability job.</p>
   */
  JobDefinitionArn: string | undefined;

  /**
   * @public
   * <p>The name of the explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * @public
   * <p>The time at which the model explainability job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The baseline configuration for a model explainability job.</p>
   */
  ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig;

  /**
   * @public
   * <p>Configures the model explainability job to run a specified Docker container image.</p>
   */
  ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecification | undefined;

  /**
   * @public
   * <p>Inputs for the model explainability job.</p>
   */
  ModelExplainabilityJobInput: ModelExplainabilityJobInput | undefined;

  /**
   * @public
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelExplainabilityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * @public
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * @public
   * <p>Networking options for a model explainability job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that has read permission to the
   *    input data location and write permission to the output data location in Amazon S3.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

/**
 * @public
 */
export interface DescribeModelPackageInput {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the model package to describe.</p>
   *          <p>When you specify a name, the name must have 1 to 63 characters. Valid
   *             characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ModelPackageName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DetailedModelPackageStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  NOT_STARTED: "NotStarted",
} as const;

/**
 * @public
 */
export type DetailedModelPackageStatus = (typeof DetailedModelPackageStatus)[keyof typeof DetailedModelPackageStatus];

/**
 * @public
 * <p>Represents the overall status of a model package.</p>
 */
export interface ModelPackageStatusItem {
  /**
   * @public
   * <p>The name of the model package for which the overall status is being reported.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The current status.</p>
   */
  Status: DetailedModelPackageStatus | undefined;

  /**
   * @public
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   */
  FailureReason?: string;
}

/**
 * @public
 * <p>Specifies the validation and image scan statuses of the model package.</p>
 */
export interface ModelPackageStatusDetails {
  /**
   * @public
   * <p>The validation status of the model package.</p>
   */
  ValidationStatuses: ModelPackageStatusItem[] | undefined;

  /**
   * @public
   * <p>The status of the scan of the Docker image container for the model package.</p>
   */
  ImageScanStatuses?: ModelPackageStatusItem[];
}

/**
 * @public
 */
export interface DescribeModelPackageOutput {
  /**
   * @public
   * <p>The name of the model package being described.</p>
   */
  ModelPackageName: string | undefined;

  /**
   * @public
   * <p>If the model is a versioned model, the name of the model group that the versioned
   *             model belongs to.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * @public
   * <p>The version of the model package.</p>
   */
  ModelPackageVersion?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * @public
   * <p>A brief summary of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * @public
   * <p>A timestamp specifying when the model package was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Details about inference jobs that can be run with models based on this model
   *             package.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * @public
   * <p>Details about the algorithm that was used to create the model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * @public
   * <p>Configurations for one or more transform jobs that SageMaker runs to test the model
   *             package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * @public
   * <p>The current status of the model package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | undefined;

  /**
   * @public
   * <p>Details about the current status of the model package.</p>
   */
  ModelPackageStatusDetails: ModelPackageStatusDetails | undefined;

  /**
   * @public
   * <p>Whether the model package is certified for listing on Amazon Web Services Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * @public
   * <p>The approval status of the model package.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * @public
   * <p>Metrics for the model.</p>
   */
  ModelMetrics?: ModelMetrics;

  /**
   * @public
   * <p>The last time that the model package was modified.</p>
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
   * <p>A description provided for the model approval.</p>
   */
  ApprovalDescription?: string;

  /**
   * @public
   * <p>The metadata properties associated with the model package versions.</p>
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * @public
   * <p>Represents the drift check baselines that can be used when the model monitor is set using the model package.
   *             For more information, see the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-quality-clarify-baseline-lifecycle.html#pipelines-quality-clarify-baseline-drift-detection">Drift Detection against Previous Baselines in SageMaker Pipelines</a> in the <i>Amazon SageMaker Developer Guide</i>.
   *         </p>
   */
  DriftCheckBaselines?: DriftCheckBaselines;

  /**
   * @public
   * <p>The machine learning domain of the model package you specified. Common machine
   *             learning domains include computer vision and natural language processing.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The machine learning task you specified that your model package accomplishes.
   *             Common machine learning tasks include object detection and image classification.</p>
   */
  Task?: string;

  /**
   * @public
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored. This path points to a single
   *             gzip compressed tar archive (.tar.gz suffix).</p>
   */
  SamplePayloadUrl?: string;

  /**
   * @public
   * <p>An array of additional Inference Specification objects. Each additional
   *             Inference Specification specifies artifacts based on this model package that can
   *             be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.</p>
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];

  /**
   * @public
   * <p>Indicates if you want to skip model validation.</p>
   */
  SkipModelValidation?: SkipModelValidation;
}

/**
 * @public
 */
export interface DescribeModelPackageGroupInput {
  /**
   * @public
   * <p>The name of gthe model group to describe.</p>
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelPackageGroupStatus = {
  COMPLETED: "Completed",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
} as const;

/**
 * @public
 */
export type ModelPackageGroupStatus = (typeof ModelPackageGroupStatus)[keyof typeof ModelPackageGroupStatus];

/**
 * @public
 */
export interface DescribeModelPackageGroupOutput {
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
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy: UserContext | undefined;

  /**
   * @public
   * <p>The status of the model group.</p>
   */
  ModelPackageGroupStatus: ModelPackageGroupStatus | undefined;
}

/**
 * @public
 */
export interface DescribeModelQualityJobDefinitionRequest {
  /**
   * @public
   * <p>The name of the model quality job. The name must be unique within an Amazon Web Services
   *          Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelQualityJobDefinitionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model quality job.</p>
   */
  JobDefinitionArn: string | undefined;

  /**
   * @public
   * <p>The name of the quality job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * @public
   * <p>The time at which the model quality job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The baseline configuration for a model quality job.</p>
   */
  ModelQualityBaselineConfig?: ModelQualityBaselineConfig;

  /**
   * @public
   * <p>Configures the model quality job to run a specified Docker container image.</p>
   */
  ModelQualityAppSpecification: ModelQualityAppSpecification | undefined;

  /**
   * @public
   * <p>Inputs for the model quality job.</p>
   */
  ModelQualityJobInput: ModelQualityJobInput | undefined;

  /**
   * @public
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * @public
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * @public
   * <p>Networking options for a model quality job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can
   *    assume to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

/**
 * @public
 */
export interface DescribeMonitoringScheduleRequest {
  /**
   * @public
   * <p>Name of a previously created monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  COMPLETED: "Completed",
  COMPLETED_WITH_VIOLATIONS: "CompletedWithViolations",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * <p>Summary of information about the last monitoring job to run.</p>
 */
export interface MonitoringExecutionSummary {
  /**
   * @public
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * @public
   * <p>The time the monitoring job was scheduled.</p>
   */
  ScheduledTime: Date | undefined;

  /**
   * @public
   * <p>The time at which the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>A timestamp that indicates the last time the monitoring job was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The status of the monitoring job.</p>
   */
  MonitoringExecutionStatus: ExecutionStatus | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   */
  ProcessingJobArn?: string;

  /**
   * @public
   * <p>The name of the endpoint used to run the monitoring job.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>Contains the reason a monitoring job failed, if it failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The name of the monitoring job.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * @public
   * <p>The type of the monitoring job.</p>
   */
  MonitoringType?: MonitoringType;
}

/**
 * @public
 * @enum
 */
export const ScheduleStatus = {
  FAILED: "Failed",
  PENDING: "Pending",
  SCHEDULED: "Scheduled",
  STOPPED: "Stopped",
} as const;

/**
 * @public
 */
export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus];

/**
 * @public
 */
export interface DescribeMonitoringScheduleResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * @public
   * <p>Name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * @public
   * <p>The status of an monitoring job.</p>
   */
  MonitoringScheduleStatus: ScheduleStatus | undefined;

  /**
   * @public
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
  MonitoringType?: MonitoringType;

  /**
   * @public
   * <p>A string, up to one KB in size, that contains the reason a monitoring job failed, if it
   *          failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The time at which the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The time at which the monitoring job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The configuration object that specifies the monitoring schedule and defines the monitoring
   *    job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * @public
   * <p> The name of the endpoint for the monitoring job.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>Describes metadata on the last execution to run, if there was one.</p>
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;
}

/**
 * @public
 */
export interface DescribeNotebookInstanceInput {
  /**
   * @public
   * <p>The name of the notebook instance that you want information about.</p>
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NotebookInstanceStatus = {
  Deleting: "Deleting",
  Failed: "Failed",
  InService: "InService",
  Pending: "Pending",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Updating: "Updating",
} as const;

/**
 * @public
 */
export type NotebookInstanceStatus = (typeof NotebookInstanceStatus)[keyof typeof NotebookInstanceStatus];

/**
 * @public
 */
export interface DescribeNotebookInstanceOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn?: string;

  /**
   * @public
   * <p>The name of the SageMaker notebook instance. </p>
   */
  NotebookInstanceName?: string;

  /**
   * @public
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?: NotebookInstanceStatus;

  /**
   * @public
   * <p>If status is <code>Failed</code>, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The URL that you use to connect to the Jupyter notebook that is running in your
   *             notebook instance. </p>
   */
  Url?: string;

  /**
   * @public
   * <p>The type of ML compute instance running on the notebook instance.</p>
   */
  InstanceType?: _InstanceType;

  /**
   * @public
   * <p>The ID of the VPC subnet.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The IDs of the VPC security groups.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the instance.
   *         </p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services KMS key ID SageMaker uses to encrypt data when storing it on the
   *             ML storage volume attached to the instance. </p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The network interface IDs that SageMaker created at the time of creating the instance.
   *         </p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>A timestamp. Use this parameter to retrieve the time when the notebook instance was
   *             last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>A timestamp. Use this parameter to return the time when the notebook instance was
   *             created</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Returns the name of a notebook instance lifecycle configuration.</p>
   *          <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>
   *          </p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * @public
   * <p>Describes whether SageMaker provides internet access to the notebook instance. If this
   *             value is set to <i>Disabled</i>, the notebook instance does not have
   *             internet access, and cannot connect to SageMaker training and endpoint services.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access">Notebook Instances Are Internet-Enabled by Default</a>.</p>
   */
  DirectInternetAccess?: DirectInternetAccess;

  /**
   * @public
   * <p>The size, in GB, of the ML storage volume attached to the notebook instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * @public
   * <p>A list of the Elastic Inference (EI) instance types associated with this notebook
   *             instance. Currently only one EI instance type can be associated with a notebook
   *             instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in
   *             Amazon SageMaker</a>.</p>
   */
  AcceleratorTypes?: NotebookInstanceAcceleratorType[];

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

  /**
   * @public
   * <p>Whether root access is enabled or disabled for users of the notebook instance.</p>
   *          <note>
   *             <p>Lifecycle configurations need root access to be able to set up a notebook
   *                 instance. Because of this, lifecycle configurations associated with a notebook
   *                 instance always run with root access even if you disable root access for
   *                 users.</p>
   *          </note>
   */
  RootAccess?: RootAccess;

  /**
   * @public
   * <p>The platform identifier of the notebook instance runtime environment.</p>
   */
  PlatformIdentifier?: string;

  /**
   * @public
   * <p>Information on the IMDS configuration of the notebook instance</p>
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
}

/**
 * @public
 */
export interface DescribeNotebookInstanceLifecycleConfigInput {
  /**
   * @public
   * <p>The name of the lifecycle configuration to describe.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeNotebookInstanceLifecycleConfigOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn?: string;

  /**
   * @public
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * @public
   * <p>The shell script that runs only once, when you create a notebook instance.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * @public
   * <p>The shell script that runs every time you start a notebook instance, including when
   *             you create the notebook instance.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];

  /**
   * @public
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface DescribePipelineRequest {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the pipeline to describe.</p>
   */
  PipelineName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PipelineStatus = {
  ACTIVE: "Active",
} as const;

/**
 * @public
 */
export type PipelineStatus = (typeof PipelineStatus)[keyof typeof PipelineStatus];

/**
 * @public
 */
export interface DescribePipelineResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * @public
   * <p>The name of the pipeline.</p>
   */
  PipelineName?: string;

  /**
   * @public
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * @public
   * <p>The JSON pipeline definition.</p>
   */
  PipelineDefinition?: string;

  /**
   * @public
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that the pipeline uses to execute.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The status of the pipeline execution.</p>
   */
  PipelineStatus?: PipelineStatus;

  /**
   * @public
   * <p>The time when the pipeline was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time when the pipeline was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The time when the pipeline was last run.</p>
   */
  LastRunTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * @public
   * <p>Lists the parallelism configuration applied to the pipeline.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * @public
 */
export interface DescribePipelineDefinitionForExecutionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;
}

/**
 * @public
 */
export interface DescribePipelineDefinitionForExecutionResponse {
  /**
   * @public
   * <p>The JSON pipeline definition.</p>
   */
  PipelineDefinition?: string;

  /**
   * @public
   * <p>The time when the pipeline was created.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface DescribePipelineExecutionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PipelineExecutionStatus = {
  EXECUTING: "Executing",
  FAILED: "Failed",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  SUCCEEDED: "Succeeded",
} as const;

/**
 * @public
 */
export type PipelineExecutionStatus = (typeof PipelineExecutionStatus)[keyof typeof PipelineExecutionStatus];

/**
 * @public
 * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
 */
export interface PipelineExperimentConfig {
  /**
   * @public
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * @public
   * <p>The name of the trial.</p>
   */
  TrialName?: string;
}

/**
 * @public
 * <p>A step selected to run in selective execution mode.</p>
 */
export interface SelectedStep {
  /**
   * @public
   * <p>The name of the pipeline step.</p>
   */
  StepName: string | undefined;
}

/**
 * @public
 * <p>The selective execution configuration applied to the pipeline run.</p>
 */
export interface SelectiveExecutionConfig {
  /**
   * @public
   * <p>The ARN from a reference execution of the current pipeline.
   *         Used to copy input collaterals needed for the selected steps to run.
   *         The execution status of the pipeline can be either <code>Failed</code>
   *         or <code>Success</code>.</p>
   *          <p>This field is required if the steps you specify for
   *           <code>SelectedSteps</code> depend on output collaterals from any non-specified pipeline
   *           steps. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-selective-ex.html">Selective
   *           Execution for Pipeline Steps</a>.</p>
   */
  SourcePipelineExecutionArn?: string;

  /**
   * @public
   * <p>A list of pipeline steps to run. All step(s) in all path(s) between
   *         two selected steps should be included.</p>
   */
  SelectedSteps: SelectedStep[] | undefined;
}

/**
 * @public
 */
export interface DescribePipelineExecutionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * @public
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

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
   * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
   */
  PipelineExperimentConfig?: PipelineExperimentConfig;

  /**
   * @public
   * <p>If the execution failed, a message describing why.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The time when the pipeline execution was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time when the pipeline execution was modified last.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * @public
   * <p>The parallelism configuration applied to the pipeline.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;

  /**
   * @public
   * <p>The selective execution configuration applied to the pipeline run.</p>
   */
  SelectiveExecutionConfig?: SelectiveExecutionConfig;
}

/**
 * @public
 */
export interface DescribeProcessingJobRequest {
  /**
   * @public
   * <p>The name of the processing job. The name must be unique within an Amazon Web Services Region in the
   *             Amazon Web Services account.</p>
   */
  ProcessingJobName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProcessingJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type ProcessingJobStatus = (typeof ProcessingJobStatus)[keyof typeof ProcessingJobStatus];

/**
 * @public
 */
export interface DescribeProcessingJobResponse {
  /**
   * @public
   * <p>The inputs for a processing job.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * @public
   * <p>Output configuration for the processing job.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * @public
   * <p>The name of the processing job. The name must be unique within an Amazon Web Services Region in the
   *             Amazon Web Services account.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * @public
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources: ProcessingResources | undefined;

  /**
   * @public
   * <p>The time limit for how long the processing job is allowed to run.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * @public
   * <p>Configures the processing job to run a specified container image.</p>
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * @public
   * <p>The environment variables set in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * @public
   * <p>Networking options for a processing job.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *             your behalf.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The configuration information used to create an experiment.</p>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  ProcessingJobArn: string | undefined;

  /**
   * @public
   * <p>Provides the status of a processing job.</p>
   */
  ProcessingJobStatus: ProcessingJobStatus | undefined;

  /**
   * @public
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;

  /**
   * @public
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The time at which the processing job completed.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * @public
   * <p>The time at which the processing job started.</p>
   */
  ProcessingStartTime?: Date;

  /**
   * @public
   * <p>The time at which the processing job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The time at which the processing job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing
   *             job.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * @public
   * <p>The ARN of an AutoML job associated with this processing job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * @public
   * <p>The ARN of a training job associated with this processing job.</p>
   */
  TrainingJobArn?: string;
}

/**
 * @public
 */
export interface DescribeProjectInput {
  /**
   * @public
   * <p>The name of the project to describe.</p>
   */
  ProjectName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProjectStatus = {
  CREATE_COMPLETED: "CreateCompleted",
  CREATE_FAILED: "CreateFailed",
  CREATE_IN_PROGRESS: "CreateInProgress",
  DELETE_COMPLETED: "DeleteCompleted",
  DELETE_FAILED: "DeleteFailed",
  DELETE_IN_PROGRESS: "DeleteInProgress",
  PENDING: "Pending",
  UPDATE_COMPLETED: "UpdateCompleted",
  UPDATE_FAILED: "UpdateFailed",
  UPDATE_IN_PROGRESS: "UpdateInProgress",
} as const;

/**
 * @public
 */
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

/**
 * @public
 * <p>Details of a provisioned service catalog product. For information about service catalog,
 *             see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
 *                 Catalog</a>.</p>
 */
export interface ServiceCatalogProvisionedProductDetails {
  /**
   * @public
   * <p>The ID of the provisioned product.</p>
   */
  ProvisionedProductId?: string;

  /**
   * @public
   * <p>The current status of the product.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most recent operation succeeded and completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNDER_CHANGE</code> - Transitive state. Operations performed might not have valid results. Wait for an AVAILABLE status before performing operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - An unexpected error occurred. The provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLAN_IN_PROGRESS</code> - Transitive state. The plan operations were performed to provision a new product, but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an AVAILABLE status before performing operations.</p>
   *             </li>
   *          </ul>
   */
  ProvisionedProductStatusMessage?: string;
}

/**
 * @public
 */
export interface DescribeProjectOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;

  /**
   * @public
   * <p>The name of the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * @public
   * <p>The ID of the project.</p>
   */
  ProjectId: string | undefined;

  /**
   * @public
   * <p>The description of the project.</p>
   */
  ProjectDescription?: string;

  /**
   * @public
   * <p>Information used to provision a service catalog product. For information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *             Catalog</a>.</p>
   */
  ServiceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails | undefined;

  /**
   * @public
   * <p>Information about a provisioned service catalog product.</p>
   */
  ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;

  /**
   * @public
   * <p>The status of the project.</p>
   */
  ProjectStatus: ProjectStatus | undefined;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>The time when the project was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp when project was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;
}

/**
 * @public
 */
export interface DescribeSpaceRequest {
  /**
   * @public
   * <p>The ID of the associated Domain.</p>
   */
  DomainId: string | undefined;

  /**
   * @public
   * <p>The name of the space.</p>
   */
  SpaceName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SpaceStatus = {
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
export type SpaceStatus = (typeof SpaceStatus)[keyof typeof SpaceStatus];

/**
 * @public
 */
export interface DescribeSpaceResponse {
  /**
   * @public
   * <p>The ID of the associated Domain.</p>
   */
  DomainId?: string;

  /**
   * @public
   * <p>The space's Amazon Resource Name (ARN).</p>
   */
  SpaceArn?: string;

  /**
   * @public
   * <p>The name of the space.</p>
   */
  SpaceName?: string;

  /**
   * @public
   * <p>The ID of the space's profile in the Amazon Elastic File System volume.</p>
   */
  HomeEfsFileSystemUid?: string;

  /**
   * @public
   * <p>The status.</p>
   */
  Status?: SpaceStatus;

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
   * <p>A collection of space settings.</p>
   */
  SpaceSettings?: SpaceSettings;
}

/**
 * @public
 */
export interface DescribeStudioLifecycleConfigRequest {
  /**
   * @public
   * <p>The name of the Studio Lifecycle Configuration to describe.</p>
   */
  StudioLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeStudioLifecycleConfigResponse {
  /**
   * @public
   * <p>The ARN of the Lifecycle Configuration to describe.</p>
   */
  StudioLifecycleConfigArn?: string;

  /**
   * @public
   * <p>The name of the Studio Lifecycle Configuration that is described.</p>
   */
  StudioLifecycleConfigName?: string;

  /**
   * @public
   * <p>The creation time of the Studio Lifecycle Configuration.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>This value is equivalent to CreationTime because Studio Lifecycle Configurations are immutable.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The content of your Studio Lifecycle Configuration script.</p>
   */
  StudioLifecycleConfigContent?: string;

  /**
   * @public
   * <p>The App type that the Lifecycle Configuration is attached to.</p>
   */
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType;
}

/**
 * @public
 */
export interface DescribeSubscribedWorkteamRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the subscribed work team to describe.</p>
   */
  WorkteamArn: string | undefined;
}

/**
 * @public
 * <p>Describes a work team of a vendor that does the a labelling job.</p>
 */
export interface SubscribedWorkteam {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the vendor that you have subscribed.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * @public
   * <p>The title of the service provided by the vendor in the Amazon Marketplace.</p>
   */
  MarketplaceTitle?: string;

  /**
   * @public
   * <p>The name of the vendor in the Amazon Marketplace.</p>
   */
  SellerName?: string;

  /**
   * @public
   * <p>The description of the vendor from the Amazon Marketplace.</p>
   */
  MarketplaceDescription?: string;

  /**
   * @public
   * <p>Marketplace product listing ID.</p>
   */
  ListingId?: string;
}

/**
 * @public
 */
export interface DescribeSubscribedWorkteamResponse {
  /**
   * @public
   * <p>A <code>Workteam</code> instance that contains information about the work team.</p>
   */
  SubscribedWorkteam: SubscribedWorkteam | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingJobRequest {
  /**
   * @public
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string | undefined;
}

/**
 * @public
 * <p>The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.</p>
 */
export interface MetricData {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The value of the metric.</p>
   */
  Value?: number;

  /**
   * @public
   * <p>The date and time that the algorithm emitted the metric.</p>
   */
  Timestamp?: Date;
}

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
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;

  /**
   * @public
   * <p>The environment variables to set in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * @public
   * <p>The status of the warm pool associated with the training job.</p>
   */
  WarmPoolStatus?: WarmPoolStatus;
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
 * @internal
 */
export const DescribeModelCardResponseFilterSensitiveLog = (obj: DescribeModelCardResponse): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
});
