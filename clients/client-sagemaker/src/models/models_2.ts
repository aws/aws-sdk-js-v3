// smithy-typescript generated code
import {
  _InstanceType,
  ActionStatus,
  ActivationState,
  AlgorithmStatus,
  AppNetworkAccessType,
  AppSecurityGroupManagement,
  AppStatus,
  AppType,
  AuthMode,
  AutoMLJobSecondaryStatus,
  AutoMLJobStatus,
  AutoMLProblemTypeConfigName,
  BatchStrategy,
  CapacityReservationPreference,
  CaptureStatus,
  ClusterNodeProvisioningMode,
  ClusterNodeRecovery,
  ClusterStatus,
  CompilationJobStatus,
  DetailedModelPackageStatus,
  DirectInternetAccess,
  DomainStatus,
  EdgePackagingJobStatus,
  EdgePresetDeploymentStatus,
  EdgePresetDeploymentType,
  EnabledOrDisabled,
  EndpointStatus,
  ExecutionStatus,
  FeatureGroupStatus,
  FeatureStatus,
  FeatureType,
  FlowDefinitionStatus,
  HubContentStatus,
  HubContentSupportStatus,
  HubContentType,
  HubStatus,
  HumanTaskUiStatus,
  HyperParameterTuningJobObjectiveType,
  HyperParameterTuningJobStatus,
  ImageStatus,
  ImageVersionStatus,
  InferenceComponentCapacitySizeType,
  InferenceComponentStatus,
  InferenceExperimentStatus,
  InferenceExperimentType,
  IPAddressType,
  IsTrackingServerActive,
  JobType,
  LabelingJobStatus,
  LastUpdateStatusValue,
  ModelApprovalStatus,
  ModelCardExportJobStatus,
  ModelCardProcessingStatus,
  ModelCardStatus,
  ModelPackageGroupStatus,
  ModelPackageStatus,
  ModelVariantStatus,
  MonitoringType,
  NotebookInstanceAcceleratorType,
  NotebookInstanceStatus,
  ObjectiveStatus,
  OfflineStoreStatusValue,
  OptimizationJobDeploymentInstanceType,
  OptimizationJobStatus,
  PartnerAppAuthType,
  PartnerAppStatus,
  PartnerAppType,
  PipelineExecutionStatus,
  PipelineStatus,
  ProblemType,
  ProcessingJobStatus,
  Processor,
  ProductionVariantAcceleratorType,
  ProductionVariantInstanceType,
  ProfilingStatus,
  ProjectStatus,
  RecommendationJobStatus,
  RecommendationJobType,
  RecommendationStatus,
  ReservedCapacityInstanceType,
  ReservedCapacityStatus,
  ReservedCapacityType,
  RetentionType,
  RootAccess,
  RuleEvaluationStatus,
  SageMakerResourceName,
  SchedulerResourceStatus,
  ScheduleStatus,
  SecondaryStatus,
  SkipModelValidation,
  SpaceStatus,
  StageStatus,
  Statistic,
  StudioLifecycleConfigAppType,
  TagPropagation,
  ThroughputMode,
  TrackingServerMaintenanceStatus,
  TrackingServerSize,
  TrackingServerStatus,
  TrainingJobStatus,
  TrainingPlanStatus,
  TransformJobStatus,
  UserProfileStatus,
  VariantStatus,
  VendorGuidance,
  WarmPoolResourceStatus,
  WorkforceIpAddressType,
  WorkforceStatus,
} from "./enums";

import {
  ActionSource,
  AdditionalInferenceSpecificationDefinition,
  AlgorithmSpecification,
  AlgorithmStatusDetails,
  AlgorithmValidationSpecification,
  AppSpecification,
  ArtifactSource,
  AsyncInferenceConfig,
  AutoMLCandidate,
  AutoMLChannel,
  AutoMLComputeConfig,
  AutoMLDataSplitConfig,
  AutoMLJobArtifacts,
  AutoMLJobChannel,
  AutoMLJobCompletionCriteria,
  AutoMLJobConfig,
  AutoMLJobObjective,
  AutoMLOutputDataConfig,
  AutoMLPartialFailureReason,
  AutoMLProblemTypeConfig,
  AutoMLResolvedAttributes,
  AutoMLSecurityConfig,
  AutoRollbackConfig,
  Autotune,
  AvailableUpgrade,
  BatchDataCaptureConfig,
  CfnTemplateProviderDetail,
  Channel,
  CheckpointConfig,
  ClusterAutoScalingConfigOutput,
  ClusterEventDetail,
  ClusterInstanceGroupDetails,
  ClusterNodeDetails,
  ClusterOrchestrator,
  ClusterRestrictedInstanceGroupDetails,
  ClusterTieredStorageConfig,
  CodeEditorAppImageConfig,
  CognitoConfig,
  CognitoMemberDefinition,
  ComputeQuotaConfig,
  ComputeQuotaTarget,
  ContainerDefinition,
  ContextSource,
  DataQualityAppSpecification,
  DataQualityBaselineConfig,
  DataQualityJobInput,
  EdgeOutputConfig,
  GitConfig,
  InferenceSpecification,
  InputConfig,
  JupyterLabAppImageConfig,
  KernelGatewayImageConfig,
  MetadataProperties,
  ModelDeployConfig,
  MonitoringNetworkConfig,
  MonitoringOutputConfig,
  MonitoringResources,
  MonitoringStoppingCondition,
  NeoVpcConfig,
  OutputConfig,
  OutputDataConfig,
  ResourceConfig,
  ResourceSpec,
  SchedulerConfig,
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
  DataCaptureConfig,
  DataProcessing,
  DebugHookConfig,
  DebugRuleConfiguration,
  DefaultSpaceSettings,
  DeploymentConfig,
  DeviceSelectionConfig,
  DomainSettings,
  DriftCheckBaselines,
  EdgeDeploymentConfig,
  EdgeDeploymentModelConfig,
  EndpointInfo,
  ExperimentConfig,
  ExplainerConfig,
  FeatureDefinition,
  FlowDefinitionOutputConfig,
  HubS3StorageConfig,
  HumanLoopActivationConfig,
  HumanLoopConfig,
  HumanLoopRequestSource,
  HumanTaskConfig,
  HyperParameterTrainingJobDefinition,
  HyperParameterTuningJobConfig,
  HyperParameterTuningJobWarmStartConfig,
  InferenceComponentComputeResourceRequirements,
  InferenceComponentStartupParameters,
  InferenceExecutionConfig,
  InferenceExperimentDataStorageConfig,
  InferenceExperimentSchedule,
  InfraCheckConfig,
  InstanceMetadataServiceConfiguration,
  LabelingJobAlgorithmsConfig,
  LabelingJobInputConfig,
  LabelingJobOutputConfig,
  LabelingJobStoppingConditions,
  MetricsConfig,
  ModelBiasAppSpecification,
  ModelBiasBaselineConfig,
  ModelBiasJobInput,
  ModelCardExportOutputConfig,
  ModelCardSecurityConfig,
  ModelClientConfig,
  ModelExplainabilityAppSpecification,
  ModelExplainabilityBaselineConfig,
  ModelExplainabilityJobInput,
  ModelInfrastructureConfig,
  ModelLifeCycle,
  ModelMetrics,
  ModelPackageModelCard,
  ModelPackageSecurityConfig,
  ModelPackageValidationSpecification,
  ModelQualityAppSpecification,
  ModelQualityBaselineConfig,
  ModelQualityJobInput,
  MonitoringScheduleConfig,
  NetworkConfig,
  NotebookInstanceLifecycleHook,
  OfflineStoreConfig,
  OidcConfig,
  OnlineStoreConfig,
  OptimizationConfig,
  OptimizationJobModelSource,
  OptimizationJobOutputConfig,
  OptimizationVpcConfig,
  OwnershipSettings,
  ParallelismConfiguration,
  PartnerAppConfig,
  PartnerAppMaintenanceConfig,
  ProcessingInput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  ProductionVariant,
  ProductionVariantManagedInstanceScaling,
  ProductionVariantRoutingConfig,
  ProductionVariantServerlessConfig,
  ProfilerConfig,
  ProfilerRuleConfiguration,
  RecommendationJobInputConfig,
  RecommendationJobStoppingConditions,
  RemoteDebugConfig,
  RetryStrategy,
  ServiceCatalogProvisioningDetails,
  ShadowModeConfig,
  SourceAlgorithmSpecification,
  SourceIpConfig,
  SpaceSettings,
  SpaceSharingSettings,
  TensorBoardOutputConfig,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  UserSettings,
  WorkforceVpcConfigRequest,
} from "./models_1";

/**
 * @public
 */
export interface CreateWorkforceRequest {
  /**
   * <p>Use this parameter to configure an Amazon Cognito private workforce. A single Cognito workforce is created using and corresponds to a single <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html"> Amazon Cognito user pool</a>.</p> <p>Do not use <code>OidcConfig</code> if you specify values for <code>CognitoConfig</code>.</p>
   * @public
   */
  CognitoConfig?: CognitoConfig | undefined;

  /**
   * <p>Use this parameter to configure a private workforce using your own OIDC Identity Provider.</p> <p>Do not use <code>CognitoConfig</code> if you specify values for <code>OidcConfig</code>.</p>
   * @public
   */
  OidcConfig?: OidcConfig | undefined;

  /**
   * <p>A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow list of IP addresses for a private workforce. Workers will only be able to log in to their worker portal from an IP address within this range. By default, a workforce isn't restricted to specific IP addresses.</p>
   * @public
   */
  SourceIpConfig?: SourceIpConfig | undefined;

  /**
   * <p>The name of the private workforce.</p>
   * @public
   */
  WorkforceName: string | undefined;

  /**
   * <p>An array of key-value pairs that contain metadata to help you categorize and organize our workforce. Each tag consists of a key and a value, both of which you define.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Use this parameter to configure a workforce using VPC.</p>
   * @public
   */
  WorkforceVpcConfig?: WorkforceVpcConfigRequest | undefined;

  /**
   * <p>Use this parameter to specify whether you want <code>IPv4</code> only or <code>dualstack</code> (<code>IPv4</code> and <code>IPv6</code>) to support your labeling workforce.</p>
   * @public
   */
  IpAddressType?: WorkforceIpAddressType | undefined;
}

/**
 * @public
 */
export interface CreateWorkforceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the workforce.</p>
   * @public
   */
  WorkforceArn: string | undefined;
}

/**
 * <p>A list of user groups that exist in your OIDC Identity Provider (IdP). One to ten groups can be used to create a single private work team. When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more private work teams. If you add a user group to a private work team, all workers in that user group are added to the work team.</p>
 * @public
 */
export interface OidcMemberDefinition {
  /**
   * <p>A list of comma seperated strings that identifies user groups in your OIDC IdP. Each user group is made up of a group of private workers.</p>
   * @public
   */
  Groups?: string[] | undefined;
}

/**
 * <p>Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.</p>
 * @public
 */
export interface MemberDefinition {
  /**
   * <p>The Amazon Cognito user group that is part of the work team.</p>
   * @public
   */
  CognitoMemberDefinition?: CognitoMemberDefinition | undefined;

  /**
   * <p>A list user groups that exist in your OIDC Identity Provider (IdP). One to ten groups can be used to create a single private work team. When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more private work teams. If you add a user group to a private work team, all workers in that user group are added to the work team.</p>
   * @public
   */
  OidcMemberDefinition?: OidcMemberDefinition | undefined;
}

/**
 * <p>Configures Amazon SNS notifications of available or expiring work items for work teams.</p>
 * @public
 */
export interface NotificationConfiguration {
  /**
   * <p>The ARN for the Amazon SNS topic to which notifications should be published.</p>
   * @public
   */
  NotificationTopicArn?: string | undefined;
}

/**
 * <p>Use this parameter to specify a supported global condition key that is added to the IAM policy.</p>
 * @public
 */
export interface IamPolicyConstraints {
  /**
   * <p>When <code>SourceIp</code> is <code>Enabled</code> the worker's IP address when a task is rendered in the worker portal is added to the IAM policy as a <code>Condition</code> used to generate the Amazon S3 presigned URL. This IP address is checked by Amazon S3 and must match in order for the Amazon S3 resource to be rendered in the worker portal.</p>
   * @public
   */
  SourceIp?: EnabledOrDisabled | undefined;

  /**
   * <p>When <code>VpcSourceIp</code> is <code>Enabled</code> the worker's IP address when a task is rendered in private worker portal inside the VPC is added to the IAM policy as a <code>Condition</code> used to generate the Amazon S3 presigned URL. To render the task successfully Amazon S3 checks that the presigned URL is being accessed over an Amazon S3 VPC Endpoint, and that the worker's IP address matches the IP address in the IAM policy. To learn more about configuring private worker portal, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/samurai-vpc-worker-portal.html">Use Amazon VPC mode from a private worker portal</a>.</p>
   * @public
   */
  VpcSourceIp?: EnabledOrDisabled | undefined;
}

/**
 * <p>This object defines the access restrictions to Amazon S3 resources that are included in custom worker task templates using the Liquid filter, <code>grant_read_access</code>.</p> <p>To learn more about how custom templates are created, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-custom-templates.html">Create custom worker task templates</a>.</p>
 * @public
 */
export interface S3Presign {
  /**
   * <p>Use this parameter to specify the allowed request source. Possible sources are either <code>SourceIp</code> or <code>VpcSourceIp</code>.</p>
   * @public
   */
  IamPolicyConstraints?: IamPolicyConstraints | undefined;
}

/**
 * <p>Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL.</p>
 * @public
 */
export interface WorkerAccessConfiguration {
  /**
   * <p>Defines any Amazon S3 resource constraints.</p>
   * @public
   */
  S3Presign?: S3Presign | undefined;
}

/**
 * @public
 */
export interface CreateWorkteamRequest {
  /**
   * <p>The name of the work team. Use this name to identify the work team.</p>
   * @public
   */
  WorkteamName: string | undefined;

  /**
   * <p>The name of the workforce.</p>
   * @public
   */
  WorkforceName?: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify the workers that make up the work team. </p> <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity provider (IdP) use <code>OidcMemberDefinition</code>. Do not provide input for both of these parameters in a single request.</p> <p>For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito <i>user groups</i> within the user pool used to create a workforce. All of the <code>CognitoMemberDefinition</code> objects that make up the member definition must have the same <code>ClientId</code> and <code>UserPool</code> values. To add a Amazon Cognito user group to an existing worker pool, see <a href="">Adding groups to a User Pool</a>. For more information about user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User Pools</a>.</p> <p>For workforces created using your own OIDC IdP, specify the user groups that you want to include in your private work team in <code>OidcMemberDefinition</code> by listing those groups in <code>Groups</code>.</p>
   * @public
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * <p>A description of the work team.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>Configures notification of workers regarding available or expiring work items.</p>
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration | undefined;

  /**
   * <p>Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL.</p>
   * @public
   */
  WorkerAccessConfiguration?: WorkerAccessConfiguration | undefined;

  /**
   * <p>An array of key-value pairs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html">Resource Tag</a> and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using Cost Allocation Tags</a> in the <i> Amazon Web Services Billing and Cost Management User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkteamResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team. You can use this ARN to identify the work team.</p>
   * @public
   */
  WorkteamArn?: string | undefined;
}

/**
 * <p>A customized metric.</p>
 * @public
 */
export interface CustomizedMetricSpecification {
  /**
   * <p>The name of the customized metric.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The namespace of the customized metric.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The statistic of the customized metric.</p>
   * @public
   */
  Statistic?: Statistic | undefined;
}

/**
 * <p>The currently active data capture configuration used by your Endpoint.</p>
 * @public
 */
export interface DataCaptureConfigSummary {
  /**
   * <p>Whether data capture is enabled or disabled.</p>
   * @public
   */
  EnableCapture: boolean | undefined;

  /**
   * <p>Whether data capture is currently functional.</p>
   * @public
   */
  CaptureStatus: CaptureStatus | undefined;

  /**
   * <p>The percentage of requests being captured by your Endpoint.</p>
   * @public
   */
  CurrentSamplingPercentage: number | undefined;

  /**
   * <p>The Amazon S3 location being used to capture the data.</p>
   * @public
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p>The KMS key being used to encrypt the data in Amazon S3.</p>
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * <p>Information about the status of the rule evaluation.</p>
 * @public
 */
export interface DebugRuleEvaluationStatus {
  /**
   * <p>The name of the rule configuration.</p>
   * @public
   */
  RuleConfigurationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule evaluation job.</p>
   * @public
   */
  RuleEvaluationJobArn?: string | undefined;

  /**
   * <p>Status of the rule evaluation.</p>
   * @public
   */
  RuleEvaluationStatus?: RuleEvaluationStatus | undefined;

  /**
   * <p>Details from the rule evaluation.</p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>Timestamp when the rule evaluation status was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteActionRequest {
  /**
   * <p>The name of the action to delete.</p>
   * @public
   */
  ActionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteActionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   * @public
   */
  ActionArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAlgorithmInput {
  /**
   * <p>The name of the algorithm to delete.</p>
   * @public
   */
  AlgorithmName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name. If this value is not set, then <code>SpaceName</code> must be set.</p>
   * @public
   */
  UserProfileName?: string | undefined;

  /**
   * <p>The name of the space. If this value is not set, then <code>UserProfileName</code> must be set.</p>
   * @public
   */
  SpaceName?: string | undefined;

  /**
   * <p>The type of app.</p>
   * @public
   */
  AppType: AppType | undefined;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  AppName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig to delete.</p>
   * @public
   */
  AppImageConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteArtifactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact to delete.</p>
   * @public
   */
  ArtifactArn?: string | undefined;

  /**
   * <p>The URI of the source.</p>
   * @public
   */
  Source?: ArtifactSource | undefined;
}

/**
 * @public
 */
export interface DeleteArtifactResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   * @public
   */
  ArtifactArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssociationRequest {
  /**
   * <p>The ARN of the source.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   * @public
   */
  DestinationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssociationResponse {
  /**
   * <p>The ARN of the source.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   * @public
   */
  DestinationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * <p>The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster to delete.</p>
   * @public
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster to delete.</p>
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterSchedulerConfigRequest {
  /**
   * <p>ID of the cluster policy.</p>
   * @public
   */
  ClusterSchedulerConfigId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to delete.</p>
   * @public
   */
  CodeRepositoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCompilationJobRequest {
  /**
   * <p>The name of the compilation job to delete.</p>
   * @public
   */
  CompilationJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteComputeQuotaRequest {
  /**
   * <p>ID of the compute allocation definition.</p>
   * @public
   */
  ComputeQuotaId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContextRequest {
  /**
   * <p>The name of the context to delete.</p>
   * @public
   */
  ContextName: string | undefined;
}

/**
 * @public
 */
export interface DeleteContextResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   * @public
   */
  ContextArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataQualityJobDefinitionRequest {
  /**
   * <p>The name of the data quality monitoring job definition to delete.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceFleetRequest {
  /**
   * <p>The name of the fleet to delete.</p>
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * <p>The retention policy for data stored on an Amazon Elastic File System volume.</p>
 * @public
 */
export interface RetentionPolicy {
  /**
   * <p>The default is <code>Retain</code>, which specifies to keep the data stored on the Amazon EFS volume.</p> <p>Specify <code>Delete</code> to delete the data stored on the Amazon EFS volume.</p>
   * @public
   */
  HomeEfsFileSystem?: RetentionType | undefined;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The retention policy for this domain, which specifies whether resources will be retained after the Domain is deleted. By default, all resources are retained (not automatically deleted). </p>
   * @public
   */
  RetentionPolicy?: RetentionPolicy | undefined;
}

/**
 * @public
 */
export interface DeleteEdgeDeploymentPlanRequest {
  /**
   * <p>The name of the edge deployment plan to delete.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEdgeDeploymentStageRequest {
  /**
   * <p>The name of the edge deployment plan from which the stage will be deleted.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the stage.</p>
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointInput {
  /**
   * <p>The name of the endpoint that you want to delete.</p>
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration that you want to delete.</p>
   * @public
   */
  EndpointConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentRequest {
  /**
   * <p>The name of the experiment to delete.</p>
   * @public
   */
  ExperimentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment that is being deleted.</p>
   * @public
   */
  ExperimentArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFeatureGroupRequest {
  /**
   * <p>The name of the <code>FeatureGroup</code> you want to delete. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account. </p>
   * @public
   */
  FeatureGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowDefinitionRequest {
  /**
   * <p>The name of the flow definition you are deleting.</p>
   * @public
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
   * <p>The name of the hub to delete.</p>
   * @public
   */
  HubName: string | undefined;
}

/**
 * @public
 */
export interface DeleteHubContentRequest {
  /**
   * <p>The name of the hub that you want to delete content in.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>The type of content that you want to delete from a hub.</p>
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * <p>The name of the content that you want to delete from a hub.</p>
   * @public
   */
  HubContentName: string | undefined;

  /**
   * <p>The version of the content that you want to delete from a hub.</p>
   * @public
   */
  HubContentVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteHubContentReferenceRequest {
  /**
   * <p>The name of the hub to delete the hub content reference from.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>The type of hub content reference to delete. The only supported type of hub content reference to delete is <code>ModelReference</code>.</p>
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * <p>The name of the hub content to delete.</p>
   * @public
   */
  HubContentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteHumanTaskUiRequest {
  /**
   * <p>The name of the human task user interface (work task template) you want to delete.</p>
   * @public
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
export interface DeleteHyperParameterTuningJobRequest {
  /**
   * <p>The name of the hyperparameter tuning job that you want to delete.</p>
   * @public
   */
  HyperParameterTuningJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageRequest {
  /**
   * <p>The name of the image to delete.</p>
   * @public
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
   * <p>The name of the image to delete.</p>
   * @public
   */
  ImageName: string | undefined;

  /**
   * <p>The version to delete.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The alias of the image to delete.</p>
   * @public
   */
  Alias?: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageVersionResponse {}

/**
 * @public
 */
export interface DeleteInferenceComponentInput {
  /**
   * <p>The name of the inference component to delete.</p>
   * @public
   */
  InferenceComponentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment you want to delete.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceExperimentResponse {
  /**
   * <p>The ARN of the deleted inference experiment.</p>
   * @public
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMlflowTrackingServerRequest {
  /**
   * <p>The name of the the tracking server to delete.</p>
   * @public
   */
  TrackingServerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMlflowTrackingServerResponse {
  /**
   * <p>A <code>TrackingServerArn</code> object, the ARN of the tracking server that is deleted if successfully found.</p>
   * @public
   */
  TrackingServerArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelInput {
  /**
   * <p>The name of the model to delete.</p>
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelBiasJobDefinitionRequest {
  /**
   * <p>The name of the model bias job definition to delete.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelCardRequest {
  /**
   * <p>The name of the model card to delete.</p>
   * @public
   */
  ModelCardName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelExplainabilityJobDefinitionRequest {
  /**
   * <p>The name of the model explainability job definition to delete.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelPackageInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to delete.</p> <p>When you specify a name, the name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   * @public
   */
  ModelPackageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelPackageGroupInput {
  /**
   * <p>The name of the model group to delete.</p>
   * @public
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelPackageGroupPolicyInput {
  /**
   * <p>The name of the model group for which to delete the policy.</p>
   * @public
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelQualityJobDefinitionRequest {
  /**
   * <p>The name of the model quality monitoring job definition to delete.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule to delete.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotebookInstanceInput {
  /**
   * <p>The name of the SageMaker AI notebook instance to delete.</p>
   * @public
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration to delete.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteOptimizationJobRequest {
  /**
   * <p>The name that you assigned to the optimization job.</p>
   * @public
   */
  OptimizationJobName: string | undefined;
}

/**
 * @public
 */
export interface DeletePartnerAppRequest {
  /**
   * <p>The ARN of the SageMaker Partner AI App to delete.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A unique token that guarantees that the call to this API is idempotent.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePartnerAppResponse {
  /**
   * <p>The ARN of the SageMaker Partner AI App that was deleted.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeletePipelineRequest {
  /**
   * <p>The name of the pipeline to delete.</p>
   * @public
   */
  PipelineName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline to delete.</p>
   * @public
   */
  PipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProcessingJobRequest {
  /**
   * <p>The name of the processing job to delete.</p>
   * @public
   */
  ProcessingJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectInput {
  /**
   * <p>The name of the project to delete.</p>
   * @public
   */
  ProjectName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceRequest {
  /**
   * <p>The ID of the associated domain.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  SpaceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteStudioLifecycleConfigRequest {
  /**
   * <p>The name of the Amazon SageMaker AI Studio Lifecycle Configuration to delete.</p>
   * @public
   */
  StudioLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to delete.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array or one or more tag keys to delete.</p>
   * @public
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
export interface DeleteTrainingJobRequest {
  /**
   * <p>The name of the training job to delete.</p>
   * @public
   */
  TrainingJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrialRequest {
  /**
   * <p>The name of the trial to delete.</p>
   * @public
   */
  TrialName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial that is being deleted.</p>
   * @public
   */
  TrialArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrialComponentRequest {
  /**
   * <p>The name of the component to delete.</p>
   * @public
   */
  TrialComponentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the component is being deleted.</p>
   * @public
   */
  TrialComponentArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   * @public
   */
  UserProfileName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkforceRequest {
  /**
   * <p>The name of the workforce.</p>
   * @public
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
   * <p>The name of the work team to delete.</p>
   * @public
   */
  WorkteamName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkteamResponse {
  /**
   * <p>Returns <code>true</code> if the work team was successfully deleted; otherwise, returns <code>false</code>.</p>
   * @public
   */
  Success: boolean | undefined;
}

/**
 * <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariant.html">ProductionVariant</a>.</p> <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path of the primary container when you created the model hosted in this <code>ProductionVariant</code>, the path resolves to a path of the form <code>registry/repository[@digest]</code>. A digest is a hash value that identifies a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>
 * @public
 */
export interface DeployedImage {
  /**
   * <p>The image path you specified when you created the model.</p>
   * @public
   */
  SpecifiedImage?: string | undefined;

  /**
   * <p>The specific digest path of the image hosted in this <code>ProductionVariant</code>.</p>
   * @public
   */
  ResolvedImage?: string | undefined;

  /**
   * <p>The date and time when the image path for the model resolved to the <code>ResolvedImage</code> </p>
   * @public
   */
  ResolutionTime?: Date | undefined;
}

/**
 * <p>The recommended configuration to use for Real-Time Inference.</p>
 * @public
 */
export interface RealTimeInferenceRecommendation {
  /**
   * <p>The recommendation ID which uniquely identifies each recommendation.</p>
   * @public
   */
  RecommendationId: string | undefined;

  /**
   * <p>The recommended instance type for Real-Time Inference.</p>
   * @public
   */
  InstanceType: ProductionVariantInstanceType | undefined;

  /**
   * <p>The recommended environment variables to set in the model container for Real-Time Inference.</p>
   * @public
   */
  Environment?: Record<string, string> | undefined;
}

/**
 * <p>A set of recommended deployment configurations for the model. To get more advanced recommendations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceRecommendationsJob.html">CreateInferenceRecommendationsJob</a> to create an inference recommendation job.</p>
 * @public
 */
export interface DeploymentRecommendation {
  /**
   * <p>Status of the deployment recommendation. The status <code>NOT_APPLICABLE</code> means that SageMaker is unable to provide a default recommendation for the model using the information provided. If the deployment status is <code>IN_PROGRESS</code>, retry your API call after a few seconds to get a <code>COMPLETED</code> deployment recommendation.</p>
   * @public
   */
  RecommendationStatus: RecommendationStatus | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_RealTimeInferenceRecommendation.html">RealTimeInferenceRecommendation</a> items.</p>
   * @public
   */
  RealTimeInferenceRecommendations?: RealTimeInferenceRecommendation[] | undefined;
}

/**
 * <p>Contains information summarizing the deployment stage results.</p>
 * @public
 */
export interface EdgeDeploymentStatus {
  /**
   * <p>The general status of the current stage.</p>
   * @public
   */
  StageStatus: StageStatus | undefined;

  /**
   * <p>The number of edge devices with the successful deployment in the current stage.</p>
   * @public
   */
  EdgeDeploymentSuccessInStage: number | undefined;

  /**
   * <p>The number of edge devices yet to pick up the deployment in current stage, or in progress.</p>
   * @public
   */
  EdgeDeploymentPendingInStage: number | undefined;

  /**
   * <p>The number of edge devices that failed the deployment in current stage.</p>
   * @public
   */
  EdgeDeploymentFailedInStage: number | undefined;

  /**
   * <p>A detailed message about deployment status in current stage.</p>
   * @public
   */
  EdgeDeploymentStatusMessage?: string | undefined;

  /**
   * <p>The time when the deployment API started.</p>
   * @public
   */
  EdgeDeploymentStageStartTime?: Date | undefined;
}

/**
 * <p>Contains information summarizing the deployment stage results.</p>
 * @public
 */
export interface DeploymentStageStatusSummary {
  /**
   * <p>The name of the stage.</p>
   * @public
   */
  StageName: string | undefined;

  /**
   * <p>Configuration of the devices in the stage.</p>
   * @public
   */
  DeviceSelectionConfig: DeviceSelectionConfig | undefined;

  /**
   * <p>Configuration of the deployment details.</p>
   * @public
   */
  DeploymentConfig: EdgeDeploymentConfig | undefined;

  /**
   * <p>General status of the current state.</p>
   * @public
   */
  DeploymentStatus: EdgeDeploymentStatus | undefined;
}

/**
 * @public
 */
export interface DeregisterDevicesRequest {
  /**
   * <p>The name of the fleet the devices belong to.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The unique IDs of the devices.</p>
   * @public
   */
  DeviceNames: string[] | undefined;
}

/**
 * <p>Information that SageMaker Neo automatically derived about the model.</p>
 * @public
 */
export interface DerivedInformation {
  /**
   * <p>The data input configuration that SageMaker Neo automatically derived for the model. When SageMaker Neo derives this information, you don't need to specify the data input configuration when you create a compilation job.</p>
   * @public
   */
  DerivedDataInputConfig?: string | undefined;
}

/**
 * @public
 */
export interface DescribeActionRequest {
  /**
   * <p>The name of the action to describe.</p>
   * @public
   */
  ActionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeActionResponse {
  /**
   * <p>The name of the action.</p>
   * @public
   */
  ActionName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   * @public
   */
  ActionArn?: string | undefined;

  /**
   * <p>The source of the action.</p>
   * @public
   */
  Source?: ActionSource | undefined;

  /**
   * <p>The type of the action.</p>
   * @public
   */
  ActionType?: string | undefined;

  /**
   * <p>The description of the action.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the action.</p>
   * @public
   */
  Status?: ActionStatus | undefined;

  /**
   * <p>A list of the action's properties.</p>
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * <p>When the action was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>When the action was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlgorithmInput {
  /**
   * <p>The name of the algorithm to describe.</p>
   * @public
   */
  AlgorithmName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlgorithmOutput {
  /**
   * <p>The name of the algorithm being described.</p>
   * @public
   */
  AlgorithmName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   * @public
   */
  AlgorithmArn: string | undefined;

  /**
   * <p>A brief summary about the algorithm.</p>
   * @public
   */
  AlgorithmDescription?: string | undefined;

  /**
   * <p>A timestamp specifying when the algorithm was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Details about training jobs run by this algorithm.</p>
   * @public
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * <p>Details about inference jobs that the algorithm runs.</p>
   * @public
   */
  InferenceSpecification?: InferenceSpecification | undefined;

  /**
   * <p>Details about configurations for one or more training jobs that SageMaker runs to test the algorithm.</p>
   * @public
   */
  ValidationSpecification?: AlgorithmValidationSpecification | undefined;

  /**
   * <p>The current status of the algorithm.</p>
   * @public
   */
  AlgorithmStatus: AlgorithmStatus | undefined;

  /**
   * <p>Details about the current status of the algorithm.</p>
   * @public
   */
  AlgorithmStatusDetails: AlgorithmStatusDetails | undefined;

  /**
   * <p>The product identifier of the algorithm.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>Whether the algorithm is certified to be listed in Amazon Web Services Marketplace.</p>
   * @public
   */
  CertifyForMarketplace?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAppRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name. If this value is not set, then <code>SpaceName</code> must be set.</p>
   * @public
   */
  UserProfileName?: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  SpaceName?: string | undefined;

  /**
   * <p>The type of app.</p>
   * @public
   */
  AppType: AppType | undefined;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  AppName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the app.</p>
   * @public
   */
  AppArn?: string | undefined;

  /**
   * <p>The type of app.</p>
   * @public
   */
  AppType?: AppType | undefined;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  AppName?: string | undefined;

  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The user profile name.</p>
   * @public
   */
  UserProfileName?: string | undefined;

  /**
   * <p>The name of the space. If this value is not set, then <code>UserProfileName</code> must be set.</p>
   * @public
   */
  SpaceName?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: AppStatus | undefined;

  /**
   * <p>The effective status of Trusted Identity Propagation (TIP) for this application. When enabled, user identities from IAM Identity Center are being propagated through the application to TIP enabled Amazon Web Services services. When disabled, standard IAM role-based access is used. </p>
   * @public
   */
  EffectiveTrustedIdentityPropagationStatus?: FeatureStatus | undefined;

  /**
   * <p> Indicates whether the application is launched in recovery mode. </p>
   * @public
   */
  RecoveryMode?: boolean | undefined;

  /**
   * <p>The timestamp of the last health check.</p>
   * @public
   */
  LastHealthCheckTimestamp?: Date | undefined;

  /**
   * <p>The timestamp of the last user's activity. <code>LastUserActivityTimestamp</code> is also updated when SageMaker AI performs health checks without user activity. As a result, this value is set to the same value as <code>LastHealthCheckTimestamp</code>.</p>
   * @public
   */
  LastUserActivityTimestamp?: Date | undefined;

  /**
   * <p>The creation time of the application.</p> <note> <p>After an application has been shut down for 24 hours, SageMaker AI deletes all metadata for the application. To be considered an update and retain application metadata, applications must be restarted within 24 hours after the previous application has been shut down. After this time window, creation of an application is considered a new application rather than an update of the previous application.</p> </note>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The failure reason.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The instance type and the Amazon Resource Name (ARN) of the SageMaker AI image created on the instance.</p>
   * @public
   */
  ResourceSpec?: ResourceSpec | undefined;

  /**
   * <p>The lifecycle configuration that runs before the default lifecycle configuration</p>
   * @public
   */
  BuiltInLifecycleConfigArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig to describe.</p>
   * @public
   */
  AppImageConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppImageConfigResponse {
  /**
   * <p>The ARN of the AppImageConfig.</p>
   * @public
   */
  AppImageConfigArn?: string | undefined;

  /**
   * <p>The name of the AppImageConfig.</p>
   * @public
   */
  AppImageConfigName?: string | undefined;

  /**
   * <p>When the AppImageConfig was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When the AppImageConfig was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The configuration of a KernelGateway app.</p>
   * @public
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig | undefined;

  /**
   * <p>The configuration of the JupyterLab app.</p>
   * @public
   */
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig | undefined;

  /**
   * <p>The configuration of the Code Editor app.</p>
   * @public
   */
  CodeEditorAppImageConfig?: CodeEditorAppImageConfig | undefined;
}

/**
 * @public
 */
export interface DescribeArtifactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact to describe.</p>
   * @public
   */
  ArtifactArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeArtifactResponse {
  /**
   * <p>The name of the artifact.</p>
   * @public
   */
  ArtifactName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   * @public
   */
  ArtifactArn?: string | undefined;

  /**
   * <p>The source of the artifact.</p>
   * @public
   */
  Source?: ArtifactSource | undefined;

  /**
   * <p>The type of the artifact.</p>
   * @public
   */
  ArtifactType?: string | undefined;

  /**
   * <p>A list of the artifact's properties.</p>
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * <p>When the artifact was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>When the artifact was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutoMLJobRequest {
  /**
   * <p>Requests information about an AutoML job using its unique name.</p>
   * @public
   */
  AutoMLJobName: string | undefined;
}

/**
 * <p>Provides information about the endpoint of the model deployment.</p>
 * @public
 */
export interface ModelDeployResult {
  /**
   * <p>The name of the endpoint to which the model has been deployed.</p> <note> <p>If model deployment fails, this field is omitted from the response.</p> </note>
   * @public
   */
  EndpointName?: string | undefined;
}

/**
 * <p>The resolved attributes.</p>
 * @public
 */
export interface ResolvedAttributes {
  /**
   * <p>Specifies a metric to minimize or maximize as the objective of an AutoML job.</p>
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective | undefined;

  /**
   * <p>The problem type.</p>
   * @public
   */
  ProblemType?: ProblemType | undefined;

  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to generate.</p>
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria | undefined;
}

/**
 * @public
 */
export interface DescribeAutoMLJobResponse {
  /**
   * <p>Returns the name of the AutoML job.</p>
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>Returns the ARN of the AutoML job.</p>
   * @public
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>Returns the input data configuration for the AutoML job.</p>
   * @public
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * <p>Returns the job's output data config.</p>
   * @public
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>The ARN of the IAM role that has read permission to the input data location and write permission to the output data location in Amazon S3.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Returns the job's objective.</p>
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective | undefined;

  /**
   * <p>Returns the job's problem type.</p>
   * @public
   */
  ProblemType?: ProblemType | undefined;

  /**
   * <p>Returns the configuration for the AutoML job.</p>
   * @public
   */
  AutoMLJobConfig?: AutoMLJobConfig | undefined;

  /**
   * <p>Returns the creation time of the AutoML job.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the end time of the AutoML job.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Returns the job's last modified time.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Returns the failure reason for an AutoML job, when applicable.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Returns a list of reasons for partial failures within an AutoML job.</p>
   * @public
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[] | undefined;

  /**
   * <p>The best model candidate selected by SageMaker AI Autopilot using both the best objective metric and lowest <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html">InferenceLatency</a> for an experiment.</p>
   * @public
   */
  BestCandidate?: AutoMLCandidate | undefined;

  /**
   * <p>Returns the status of the AutoML job.</p>
   * @public
   */
  AutoMLJobStatus: AutoMLJobStatus | undefined;

  /**
   * <p>Returns the secondary status of the AutoML job.</p>
   * @public
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | undefined;

  /**
   * <p>Indicates whether the output for an AutoML job generates candidate definitions only.</p>
   * @public
   */
  GenerateCandidateDefinitionsOnly?: boolean | undefined;

  /**
   * <p>Returns information on the job's artifacts found in <code>AutoMLJobArtifacts</code>.</p>
   * @public
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts | undefined;

  /**
   * <p>Contains <code>ProblemType</code>, <code>AutoMLJobObjective</code>, and <code>CompletionCriteria</code>. If you do not provide these values, they are inferred.</p>
   * @public
   */
  ResolvedAttributes?: ResolvedAttributes | undefined;

  /**
   * <p>Indicates whether the model was deployed automatically to an endpoint and the name of that endpoint if deployed automatically.</p>
   * @public
   */
  ModelDeployConfig?: ModelDeployConfig | undefined;

  /**
   * <p>Provides information about endpoint for the model deployment.</p>
   * @public
   */
  ModelDeployResult?: ModelDeployResult | undefined;
}

/**
 * @public
 */
export interface DescribeAutoMLJobV2Request {
  /**
   * <p>Requests information about an AutoML job V2 using its unique name.</p>
   * @public
   */
  AutoMLJobName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutoMLJobV2Response {
  /**
   * <p>Returns the name of the AutoML job V2.</p>
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>Returns the Amazon Resource Name (ARN) of the AutoML job V2.</p>
   * @public
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>Returns an array of channel objects describing the input data and their location.</p>
   * @public
   */
  AutoMLJobInputDataConfig: AutoMLJobChannel[] | undefined;

  /**
   * <p>Returns the job's output data config.</p>
   * @public
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>The ARN of the IAM role that has read permission to the input data location and write permission to the output data location in Amazon S3.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Returns the job's objective.</p>
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective | undefined;

  /**
   * <p>Returns the configuration settings of the problem type set for the AutoML job V2.</p>
   * @public
   */
  AutoMLProblemTypeConfig?: AutoMLProblemTypeConfig | undefined;

  /**
   * <p>Returns the name of the problem type configuration set for the AutoML job V2.</p>
   * @public
   */
  AutoMLProblemTypeConfigName?: AutoMLProblemTypeConfigName | undefined;

  /**
   * <p>Returns the creation time of the AutoML job V2.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the end time of the AutoML job V2.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Returns the job's last modified time.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Returns the reason for the failure of the AutoML job V2, when applicable.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Returns a list of reasons for partial failures within an AutoML job V2.</p>
   * @public
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[] | undefined;

  /**
   * <p>Information about the candidate produced by an AutoML training job V2, including its status, steps, and other properties.</p>
   * @public
   */
  BestCandidate?: AutoMLCandidate | undefined;

  /**
   * <p>Returns the status of the AutoML job V2.</p>
   * @public
   */
  AutoMLJobStatus: AutoMLJobStatus | undefined;

  /**
   * <p>Returns the secondary status of the AutoML job V2.</p>
   * @public
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | undefined;

  /**
   * <p>The artifacts that are generated during an AutoML job.</p>
   * @public
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts | undefined;

  /**
   * <p>Returns the resolved attributes used by the AutoML job V2.</p>
   * @public
   */
  ResolvedAttributes?: AutoMLResolvedAttributes | undefined;

  /**
   * <p>Indicates whether the model was deployed automatically to an endpoint and the name of that endpoint if deployed automatically.</p>
   * @public
   */
  ModelDeployConfig?: ModelDeployConfig | undefined;

  /**
   * <p>Provides information about endpoint for the model deployment.</p>
   * @public
   */
  ModelDeployResult?: ModelDeployResult | undefined;

  /**
   * <p>Returns the configuration settings of how the data are split into train and validation datasets.</p>
   * @public
   */
  DataSplitConfig?: AutoMLDataSplitConfig | undefined;

  /**
   * <p>Returns the security configuration for traffic encryption or Amazon VPC settings.</p>
   * @public
   */
  SecurityConfig?: AutoMLSecurityConfig | undefined;

  /**
   * <p>The compute configuration used for the AutoML job V2.</p>
   * @public
   */
  AutoMLComputeConfig?: AutoMLComputeConfig | undefined;
}

/**
 * @public
 */
export interface DescribeClusterRequest {
  /**
   * <p>The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster.</p>
   * @public
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The name of the SageMaker HyperPod cluster.</p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>The status of the SageMaker HyperPod cluster.</p>
   * @public
   */
  ClusterStatus: ClusterStatus | undefined;

  /**
   * <p>The time when the SageMaker Cluster is created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The failure message of the SageMaker HyperPod cluster.</p>
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>The instance groups of the SageMaker HyperPod cluster.</p>
   * @public
   */
  InstanceGroups: ClusterInstanceGroupDetails[] | undefined;

  /**
   * <p>The specialized instance groups for training models like Amazon Nova to be created in the SageMaker HyperPod cluster.</p>
   * @public
   */
  RestrictedInstanceGroups?: ClusterRestrictedInstanceGroupDetails[] | undefined;

  /**
   * <p>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html">Give SageMaker Access to Resources in your Amazon VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>The type of orchestrator used for the SageMaker HyperPod cluster. </p>
   * @public
   */
  Orchestrator?: ClusterOrchestrator | undefined;

  /**
   * <p>The current configuration for managed tier checkpointing on the HyperPod cluster. For example, this shows whether the feature is enabled and the percentage of cluster memory allocated for checkpoint storage.</p>
   * @public
   */
  TieredStorageConfig?: ClusterTieredStorageConfig | undefined;

  /**
   * <p>The node recovery mode configured for the SageMaker HyperPod cluster.</p>
   * @public
   */
  NodeRecovery?: ClusterNodeRecovery | undefined;

  /**
   * <p>The mode used for provisioning nodes in the cluster.</p>
   * @public
   */
  NodeProvisioningMode?: ClusterNodeProvisioningMode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that HyperPod uses for cluster autoscaling operations.</p>
   * @public
   */
  ClusterRole?: string | undefined;

  /**
   * <p>The current autoscaling configuration and status for the autoscaler.</p>
   * @public
   */
  AutoScaling?: ClusterAutoScalingConfigOutput | undefined;
}

/**
 * @public
 */
export interface DescribeClusterEventRequest {
  /**
   * <p>The unique identifier (UUID) of the event to describe. This ID can be obtained from the <code>ListClusterEvents</code> operation.</p>
   * @public
   */
  EventId: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the HyperPod cluster associated with the event.</p>
   * @public
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterEventResponse {
  /**
   * <p>Detailed information about the requested cluster event, including event metadata for various resource types such as <code>Cluster</code>, <code>InstanceGroup</code>, <code>Instance</code>, and their associated attributes.</p>
   * @public
   */
  EventDetails?: ClusterEventDetail | undefined;
}

/**
 * @public
 */
export interface DescribeClusterNodeRequest {
  /**
   * <p>The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster in which the node is.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The ID of the SageMaker HyperPod cluster node.</p>
   * @public
   */
  NodeId?: string | undefined;

  /**
   * <p>The logical identifier of the node to describe. You can specify either <code>NodeLogicalId</code> or <code>InstanceId</code>, but not both. <code>NodeLogicalId</code> can be used to describe nodes that are still being provisioned and don't yet have an <code>InstanceId</code> assigned.</p>
   * @public
   */
  NodeLogicalId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterNodeResponse {
  /**
   * <p>The details of the SageMaker HyperPod cluster node.</p>
   * @public
   */
  NodeDetails: ClusterNodeDetails | undefined;
}

/**
 * @public
 */
export interface DescribeClusterSchedulerConfigRequest {
  /**
   * <p>ID of the cluster policy.</p>
   * @public
   */
  ClusterSchedulerConfigId: string | undefined;

  /**
   * <p>Version of the cluster policy.</p>
   * @public
   */
  ClusterSchedulerConfigVersion?: number | undefined;
}

/**
 * @public
 */
export interface DescribeClusterSchedulerConfigResponse {
  /**
   * <p>ARN of the cluster policy.</p>
   * @public
   */
  ClusterSchedulerConfigArn: string | undefined;

  /**
   * <p>ID of the cluster policy.</p>
   * @public
   */
  ClusterSchedulerConfigId: string | undefined;

  /**
   * <p>Name of the cluster policy.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Version of the cluster policy.</p>
   * @public
   */
  ClusterSchedulerConfigVersion: number | undefined;

  /**
   * <p>Status of the cluster policy.</p>
   * @public
   */
  Status: SchedulerResourceStatus | undefined;

  /**
   * <p>Failure reason of the cluster policy.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>ARN of the cluster where the cluster policy is applied.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>Cluster policy configuration. This policy is used for task prioritization and fair-share allocation. This helps prioritize critical workloads and distributes idle compute across entities.</p>
   * @public
   */
  SchedulerConfig?: SchedulerConfig | undefined;

  /**
   * <p>Description of the cluster policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Creation time of the cluster policy.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>Last modified time of the cluster policy.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;
}

/**
 * @public
 */
export interface DescribeCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to describe.</p>
   * @public
   */
  CodeRepositoryName: string | undefined;
}

/**
 * @public
 */
export interface DescribeCodeRepositoryOutput {
  /**
   * <p>The name of the Git repository.</p>
   * @public
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   * @public
   */
  CodeRepositoryArn: string | undefined;

  /**
   * <p>The date and time that the repository was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the repository was last changed.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Configuration details about the repository, including the URL where the repository is located, the default branch, and the Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the repository.</p>
   * @public
   */
  GitConfig?: GitConfig | undefined;
}

/**
 * @public
 */
export interface DescribeCompilationJobRequest {
  /**
   * <p>The name of the model compilation job that you want information about.</p>
   * @public
   */
  CompilationJobName: string | undefined;
}

/**
 * <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are outputs that result from training a model. They typically consist of trained parameters, a model definition that describes how to compute inferences, and other metadata. A SageMaker container stores your trained model artifacts in the <code>/opt/ml/model</code> directory. After training has completed, by default, these artifacts are uploaded to your Amazon S3 bucket as compressed files.</p>
 * @public
 */
export interface ModelArtifacts {
  /**
   * <p>The path of the S3 object that contains the model artifacts. For example, <code>s3://bucket-name/keynameprefix/model.tar.gz</code>.</p>
   * @public
   */
  S3ModelArtifacts: string | undefined;
}

/**
 * <p>Provides information to verify the integrity of stored model artifacts. </p>
 * @public
 */
export interface ModelDigests {
  /**
   * <p>Provides a hash value that uniquely identifies the stored model artifacts.</p>
   * @public
   */
  ArtifactDigest?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCompilationJobResponse {
  /**
   * <p>The name of the model compilation job.</p>
   * @public
   */
  CompilationJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   * @public
   */
  CompilationJobArn: string | undefined;

  /**
   * <p>The status of the model compilation job.</p>
   * @public
   */
  CompilationJobStatus: CompilationJobStatus | undefined;

  /**
   * <p>The time when the model compilation job started the <code>CompilationJob</code> instances. </p> <p>You are billed for the time between this timestamp and the timestamp in the <code>CompilationEndTime</code> field. In Amazon CloudWatch Logs, the start time might be later than this time. That's because it takes time to download the compilation job, which depends on the size of the compilation job container. </p>
   * @public
   */
  CompilationStartTime?: Date | undefined;

  /**
   * <p>The time when the model compilation job on a compilation job instance ended. For a successful or stopped job, this is when the job's model artifacts have finished uploading. For a failed job, this is when Amazon SageMaker AI detected that the job failed. </p>
   * @public
   */
  CompilationEndTime?: Date | undefined;

  /**
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches the time limit, Amazon SageMaker AI ends the compilation job. Use this API to cap model training costs.</p>
   * @public
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>The inference image to use when compiling a model. Specify an image only if the target device is a cloud instance.</p>
   * @public
   */
  InferenceImage?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the versioned model package that was provided to SageMaker Neo when you initiated a compilation job.</p>
   * @public
   */
  ModelPackageVersionArn?: string | undefined;

  /**
   * <p>The time that the model compilation job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time that the status of the model compilation job was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If a model compilation job failed, the reason it failed. </p>
   * @public
   */
  FailureReason: string | undefined;

  /**
   * <p>Information about the location in Amazon S3 that has been configured for storing the model artifacts used in the compilation job.</p>
   * @public
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * <p>Provides a BLAKE2 hash value that identifies the compiled model artifacts in Amazon S3.</p>
   * @public
   */
  ModelDigests?: ModelDigests | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI assumes to perform the model compilation job.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Information about the location in Amazon S3 of the input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.</p>
   * @public
   */
  InputConfig: InputConfig | undefined;

  /**
   * <p>Information about the output location for the compiled model and the target device that the model runs on.</p>
   * @public
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that you want your compilation job to connect to. Control access to your models by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html">Protect Compilation Jobs by Using an Amazon Virtual Private Cloud</a>.</p>
   * @public
   */
  VpcConfig?: NeoVpcConfig | undefined;

  /**
   * <p>Information that SageMaker Neo automatically derived about the model.</p>
   * @public
   */
  DerivedInformation?: DerivedInformation | undefined;
}

/**
 * @public
 */
export interface DescribeComputeQuotaRequest {
  /**
   * <p>ID of the compute allocation definition.</p>
   * @public
   */
  ComputeQuotaId: string | undefined;

  /**
   * <p>Version of the compute allocation definition.</p>
   * @public
   */
  ComputeQuotaVersion?: number | undefined;
}

/**
 * @public
 */
export interface DescribeComputeQuotaResponse {
  /**
   * <p>ARN of the compute allocation definition.</p>
   * @public
   */
  ComputeQuotaArn: string | undefined;

  /**
   * <p>ID of the compute allocation definition.</p>
   * @public
   */
  ComputeQuotaId: string | undefined;

  /**
   * <p>Name of the compute allocation definition.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Description of the compute allocation definition.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Version of the compute allocation definition.</p>
   * @public
   */
  ComputeQuotaVersion: number | undefined;

  /**
   * <p>Status of the compute allocation definition.</p>
   * @public
   */
  Status: SchedulerResourceStatus | undefined;

  /**
   * <p>Failure reason of the compute allocation definition.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>ARN of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>Configuration of the compute allocation definition. This includes the resource sharing option, and the setting to preempt low priority tasks.</p>
   * @public
   */
  ComputeQuotaConfig?: ComputeQuotaConfig | undefined;

  /**
   * <p>The target entity to allocate compute resources to.</p>
   * @public
   */
  ComputeQuotaTarget: ComputeQuotaTarget | undefined;

  /**
   * <p>The state of the compute allocation being described. Use to enable or disable compute allocation.</p> <p>Default is <code>Enabled</code>.</p>
   * @public
   */
  ActivationState?: ActivationState | undefined;

  /**
   * <p>Creation time of the compute allocation configuration.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>Last modified time of the compute allocation configuration.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;
}

/**
 * @public
 */
export interface DescribeContextRequest {
  /**
   * <p>The name of the context to describe.</p>
   * @public
   */
  ContextName: string | undefined;
}

/**
 * @public
 */
export interface DescribeContextResponse {
  /**
   * <p>The name of the context.</p>
   * @public
   */
  ContextName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   * @public
   */
  ContextArn?: string | undefined;

  /**
   * <p>The source of the context.</p>
   * @public
   */
  Source?: ContextSource | undefined;

  /**
   * <p>The type of the context.</p>
   * @public
   */
  ContextType?: string | undefined;

  /**
   * <p>The description of the context.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of the context's properties.</p>
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * <p>When the context was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>When the context was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataQualityJobDefinitionRequest {
  /**
   * <p>The name of the data quality monitoring job definition to describe.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataQualityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data quality monitoring job definition.</p>
   * @public
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the data quality monitoring job definition.</p>
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time that the data quality monitoring job definition was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The constraints and baselines for the data quality monitoring job definition.</p>
   * @public
   */
  DataQualityBaselineConfig?: DataQualityBaselineConfig | undefined;

  /**
   * <p>Information about the container that runs the data quality monitoring job.</p>
   * @public
   */
  DataQualityAppSpecification: DataQualityAppSpecification | undefined;

  /**
   * <p>The list of inputs for the data quality monitoring job. Currently endpoints are supported.</p>
   * @public
   */
  DataQualityJobInput: DataQualityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   * @public
   */
  DataQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   * @public
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>The networking configuration for the data quality monitoring job.</p>
   * @public
   */
  NetworkConfig?: MonitoringNetworkConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform tasks on your behalf.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   * @public
   */
  StoppingCondition?: MonitoringStoppingCondition | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceRequest {
  /**
   * <p>Next token of device description.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The unique ID of the device.</p>
   * @public
   */
  DeviceName: string | undefined;

  /**
   * <p>The name of the fleet the devices belong to.</p>
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * <p>The model on the edge device.</p>
 * @public
 */
export interface EdgeModel {
  /**
   * <p>The name of the model.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The model version.</p>
   * @public
   */
  ModelVersion: string | undefined;

  /**
   * <p>The timestamp of the last data sample taken.</p>
   * @public
   */
  LatestSampleTime?: Date | undefined;

  /**
   * <p>The timestamp of the last inference that was made.</p>
   * @public
   */
  LatestInference?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   * @public
   */
  DeviceArn?: string | undefined;

  /**
   * <p>The unique identifier of the device.</p>
   * @public
   */
  DeviceName: string | undefined;

  /**
   * <p>A description of the device.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the fleet the device belongs to.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The Amazon Web Services Internet of Things (IoT) object thing name associated with the device.</p>
   * @public
   */
  IotThingName?: string | undefined;

  /**
   * <p>The timestamp of the last registration or de-reregistration.</p>
   * @public
   */
  RegistrationTime: Date | undefined;

  /**
   * <p>The last heartbeat received from the device.</p>
   * @public
   */
  LatestHeartbeat?: Date | undefined;

  /**
   * <p>Models on the device.</p>
   * @public
   */
  Models?: EdgeModel[] | undefined;

  /**
   * <p>The maximum number of models.</p>
   * @public
   */
  MaxModels?: number | undefined;

  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Edge Manager agent version.</p>
   * @public
   */
  AgentVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceFleetResponse {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  DeviceFleetArn: string | undefined;

  /**
   * <p>The output configuration for storing sampled data.</p>
   * @public
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * <p>A description of the fleet.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Timestamp of when the device fleet was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Timestamp of when the device fleet was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that has access to Amazon Web Services Internet of Things (IoT).</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) alias created in Amazon Web Services Internet of Things (IoT).</p>
   * @public
   */
  IotRoleAlias?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDomainRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDomainResponse {
  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The ID of the Amazon Elastic File System managed by this Domain.</p>
   * @public
   */
  HomeEfsFileSystemId?: string | undefined;

  /**
   * <p>The IAM Identity Center managed application instance ID.</p>
   * @public
   */
  SingleSignOnManagedApplicationInstanceId?: string | undefined;

  /**
   * <p>The ARN of the application managed by SageMaker AI in IAM Identity Center. This value is only returned for domains created after October 1, 2023.</p>
   * @public
   */
  SingleSignOnApplicationArn?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: DomainStatus | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The failure reason.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The ID of the security group that authorizes traffic between the <code>RSessionGateway</code> apps and the <code>RStudioServerPro</code> app.</p>
   * @public
   */
  SecurityGroupIdForDomainBoundary?: string | undefined;

  /**
   * <p>The domain's authentication mode.</p>
   * @public
   */
  AuthMode?: AuthMode | undefined;

  /**
   * <p>Settings which are applied to UserProfiles in this domain if settings are not explicitly specified in a given UserProfile. </p>
   * @public
   */
  DefaultUserSettings?: UserSettings | undefined;

  /**
   * <p>A collection of <code>Domain</code> settings.</p>
   * @public
   */
  DomainSettings?: DomainSettings | undefined;

  /**
   * <p>Specifies the VPC used for non-EFS traffic. The default value is <code>PublicInternetOnly</code>.</p> <ul> <li> <p> <code>PublicInternetOnly</code> - Non-EFS traffic is through a VPC managed by Amazon SageMaker AI, which allows direct internet access</p> </li> <li> <p> <code>VpcOnly</code> - All traffic is through the specified VPC and subnets</p> </li> </ul>
   * @public
   */
  AppNetworkAccessType?: AppNetworkAccessType | undefined;

  /**
   * <p>Use <code>KmsKeyId</code>.</p>
   *
   * @deprecated This property is deprecated, use KmsKeyId instead.
   * @public
   */
  HomeEfsFileSystemKmsKeyId?: string | undefined;

  /**
   * <p>The VPC subnets that the domain uses for communication.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The domain's URL.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The ID of the Amazon Virtual Private Cloud (VPC) that the domain uses for communication.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The Amazon Web Services KMS customer managed key used to encrypt the EFS volume attached to the domain.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The entity that creates and manages the required security groups for inter-app communication in <code>VPCOnly</code> mode. Required when <code>CreateDomain.AppNetworkAccessType</code> is <code>VPCOnly</code> and <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is provided.</p>
   * @public
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement | undefined;

  /**
   * <p>Indicates whether custom tag propagation is supported for the domain.</p>
   * @public
   */
  TagPropagation?: TagPropagation | undefined;

  /**
   * <p>The default settings for shared spaces that users create in the domain.</p>
   * @public
   */
  DefaultSpaceSettings?: DefaultSpaceSettings | undefined;
}

/**
 * @public
 */
export interface DescribeEdgeDeploymentPlanRequest {
  /**
   * <p>The name of the deployment plan to describe.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>If the edge deployment plan has enough stages to require tokening, then this is the response from the last list of stages returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to select (50 by default).</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeEdgeDeploymentPlanResponse {
  /**
   * <p>The ARN of edge deployment plan.</p>
   * @public
   */
  EdgeDeploymentPlanArn: string | undefined;

  /**
   * <p>The name of the edge deployment plan.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>List of models associated with the edge deployment plan.</p>
   * @public
   */
  ModelConfigs: EdgeDeploymentModelConfig[] | undefined;

  /**
   * <p>The device fleet used for this edge deployment plan.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The number of edge devices with the successful deployment.</p>
   * @public
   */
  EdgeDeploymentSuccess?: number | undefined;

  /**
   * <p>The number of edge devices yet to pick up deployment, or in progress.</p>
   * @public
   */
  EdgeDeploymentPending?: number | undefined;

  /**
   * <p>The number of edge devices that failed the deployment.</p>
   * @public
   */
  EdgeDeploymentFailed?: number | undefined;

  /**
   * <p>List of stages in the edge deployment plan.</p>
   * @public
   */
  Stages: DeploymentStageStatusSummary[] | undefined;

  /**
   * <p>Token to use when calling the next set of stages in the edge deployment plan.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The time when the edge deployment plan was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time when the edge deployment plan was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeEdgePackagingJobRequest {
  /**
   * <p>The name of the edge packaging job.</p>
   * @public
   */
  EdgePackagingJobName: string | undefined;
}

/**
 * <p>The output of a SageMaker Edge Manager deployable resource.</p>
 * @public
 */
export interface EdgePresetDeploymentOutput {
  /**
   * <p>The deployment type created by SageMaker Edge Manager. Currently only supports Amazon Web Services IoT Greengrass Version 2 components.</p>
   * @public
   */
  Type: EdgePresetDeploymentType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the generated deployable resource.</p>
   * @public
   */
  Artifact?: string | undefined;

  /**
   * <p>The status of the deployable resource.</p>
   * @public
   */
  Status?: EdgePresetDeploymentStatus | undefined;

  /**
   * <p>Returns a message describing the status of the deployed resource.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEdgePackagingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the edge packaging job.</p>
   * @public
   */
  EdgePackagingJobArn: string | undefined;

  /**
   * <p>The name of the edge packaging job.</p>
   * @public
   */
  EdgePackagingJobName: string | undefined;

  /**
   * <p>The name of the SageMaker Neo compilation job that is used to locate model artifacts that are being packaged.</p>
   * @public
   */
  CompilationJobName?: string | undefined;

  /**
   * <p>The name of the model.</p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The version of the model.</p>
   * @public
   */
  ModelVersion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to download and upload the model, and to contact Neo.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The output configuration for the edge packaging job.</p>
   * @public
   */
  OutputConfig?: EdgeOutputConfig | undefined;

  /**
   * <p>The Amazon Web Services KMS key to use when encrypting the EBS volume the job run on.</p>
   * @public
   */
  ResourceKey?: string | undefined;

  /**
   * <p>The current status of the packaging job.</p>
   * @public
   */
  EdgePackagingJobStatus: EdgePackagingJobStatus | undefined;

  /**
   * <p>Returns a message describing the job status and error messages.</p>
   * @public
   */
  EdgePackagingJobStatusMessage?: string | undefined;

  /**
   * <p>The timestamp of when the packaging job was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The timestamp of when the job was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Simple Storage (S3) URI where model artifacts ares stored.</p>
   * @public
   */
  ModelArtifact?: string | undefined;

  /**
   * <p>The signature document of files in the model artifact.</p>
   * @public
   */
  ModelSignature?: string | undefined;

  /**
   * <p>The output of a SageMaker Edge Manager deployable resource.</p>
   * @public
   */
  PresetDeploymentOutput?: EdgePresetDeploymentOutput | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointInput {
  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * <p>Describes the status of the production variant.</p>
 * @public
 */
export interface ProductionVariantStatus {
  /**
   * <p>The endpoint variant status which describes the current deployment stage status or operational status.</p> <ul> <li> <p> <code>Creating</code>: Creating inference resources for the production variant.</p> </li> <li> <p> <code>Deleting</code>: Terminating inference resources for the production variant.</p> </li> <li> <p> <code>Updating</code>: Updating capacity for the production variant.</p> </li> <li> <p> <code>ActivatingTraffic</code>: Turning on traffic for the production variant.</p> </li> <li> <p> <code>Baking</code>: Waiting period to monitor the CloudWatch alarms in the automatic rollback configuration.</p> </li> </ul>
   * @public
   */
  Status: VariantStatus | undefined;

  /**
   * <p>A message that describes the status of the production variant.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The start time of the current status change.</p>
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * <p>The production variant summary for a deployment when an endpoint is creating or updating with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> or <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html">UpdateEndpoint</a> operations. Describes the <code>VariantStatus </code>, weight and capacity for a production variant associated with an endpoint. </p>
 * @public
 */
export interface PendingProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   * @public
   */
  VariantName: string | undefined;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the inference images deployed on instances of this <code>ProductionVariant</code>.</p>
   * @public
   */
  DeployedImages?: DeployedImage[] | undefined;

  /**
   * <p>The weight associated with the variant.</p>
   * @public
   */
  CurrentWeight?: number | undefined;

  /**
   * <p>The requested weight for the variant in this deployment, as specified in the endpoint configuration for the endpoint. The value is taken from the request to the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> operation.</p>
   * @public
   */
  DesiredWeight?: number | undefined;

  /**
   * <p>The number of instances associated with the variant.</p>
   * @public
   */
  CurrentInstanceCount?: number | undefined;

  /**
   * <p>The number of instances requested in this deployment, as specified in the endpoint configuration for the endpoint. The value is taken from the request to the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> operation.</p>
   * @public
   */
  DesiredInstanceCount?: number | undefined;

  /**
   * <p>The type of instances associated with the variant.</p>
   * @public
   */
  InstanceType?: ProductionVariantInstanceType | undefined;

  /**
   * <p>This parameter is no longer supported. Elastic Inference (EI) is no longer available.</p> <p>This parameter was used to specify the size of the EI instance to use for the production variant.</p>
   * @public
   */
  AcceleratorType?: ProductionVariantAcceleratorType | undefined;

  /**
   * <p>The endpoint variant status which describes the current deployment stage status or operational status.</p>
   * @public
   */
  VariantStatus?: ProductionVariantStatus[] | undefined;

  /**
   * <p>The serverless configuration for the endpoint.</p>
   * @public
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig | undefined;

  /**
   * <p>The serverless configuration requested for this deployment, as specified in the endpoint configuration for the endpoint.</p>
   * @public
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig | undefined;

  /**
   * <p>Settings that control the range in the number of instances that the endpoint provisions as it scales up or down to accommodate traffic. </p>
   * @public
   */
  ManagedInstanceScaling?: ProductionVariantManagedInstanceScaling | undefined;

  /**
   * <p>Settings that control how the endpoint routes incoming traffic to the instances that the endpoint hosts.</p>
   * @public
   */
  RoutingConfig?: ProductionVariantRoutingConfig | undefined;
}

/**
 * <p>The summary of an in-progress deployment when an endpoint is creating or updating with a new endpoint configuration.</p>
 * @public
 */
export interface PendingDeploymentSummary {
  /**
   * <p>The name of the endpoint configuration used in the deployment. </p>
   * @public
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_PendingProductionVariantSummary.html">PendingProductionVariantSummary</a> objects, one for each model hosted behind this endpoint for the in-progress deployment.</p>
   * @public
   */
  ProductionVariants?: PendingProductionVariantSummary[] | undefined;

  /**
   * <p>The start time of the deployment.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_PendingProductionVariantSummary.html">PendingProductionVariantSummary</a> objects, one for each model hosted behind this endpoint in shadow mode with production traffic replicated from the model specified on <code>ProductionVariants</code> for the in-progress deployment.</p>
   * @public
   */
  ShadowProductionVariants?: PendingProductionVariantSummary[] | undefined;
}

/**
 * <p>The EC2 capacity reservations that are shared to an ML capacity reservation.</p>
 * @public
 */
export interface Ec2CapacityReservation {
  /**
   * <p>The unique identifier for an EC2 capacity reservation that's part of the ML capacity reservation.</p>
   * @public
   */
  Ec2CapacityReservationId?: string | undefined;

  /**
   * <p>The number of instances that you allocated to the EC2 capacity reservation.</p>
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * <p>The number of instances that are currently available in the EC2 capacity reservation.</p>
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * <p>The number of instances from the EC2 capacity reservation that are being used by the endpoint.</p>
   * @public
   */
  UsedByCurrentEndpoint?: number | undefined;
}

/**
 * <p>Details about an ML capacity reservation.</p>
 * @public
 */
export interface ProductionVariantCapacityReservationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the ML capacity reservation that SageMaker AI applies when it deploys the endpoint.</p>
   * @public
   */
  MlReservationArn?: string | undefined;

  /**
   * <p>The option that you chose for the capacity reservation. SageMaker AI supports the following options:</p> <dl> <dt>capacity-reservations-only</dt> <dd> <p>SageMaker AI launches instances only into an ML capacity reservation. If no capacity is available, the instances fail to launch.</p> </dd> </dl>
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * <p>The number of instances that you allocated to the ML capacity reservation.</p>
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * <p>The number of instances that are currently available in the ML capacity reservation.</p>
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * <p>The number of instances from the ML capacity reservation that are being used by the endpoint.</p>
   * @public
   */
  UsedByCurrentEndpoint?: number | undefined;

  /**
   * <p>The EC2 capacity reservations that are shared to this ML capacity reservation, if any.</p>
   * @public
   */
  Ec2CapacityReservations?: Ec2CapacityReservation[] | undefined;
}

/**
 * <p>Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values. </p>
 * @public
 */
export interface ProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   * @public
   */
  VariantName: string | undefined;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the inference images deployed on instances of this <code>ProductionVariant</code>.</p>
   * @public
   */
  DeployedImages?: DeployedImage[] | undefined;

  /**
   * <p>The weight associated with the variant.</p>
   * @public
   */
  CurrentWeight?: number | undefined;

  /**
   * <p>The requested weight, as specified in the <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   * @public
   */
  DesiredWeight?: number | undefined;

  /**
   * <p>The number of instances associated with the variant.</p>
   * @public
   */
  CurrentInstanceCount?: number | undefined;

  /**
   * <p>The number of instances requested in the <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   * @public
   */
  DesiredInstanceCount?: number | undefined;

  /**
   * <p>The endpoint variant status which describes the current deployment stage status or operational status.</p>
   * @public
   */
  VariantStatus?: ProductionVariantStatus[] | undefined;

  /**
   * <p>The serverless configuration for the endpoint.</p>
   * @public
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig | undefined;

  /**
   * <p>The serverless configuration requested for the endpoint update.</p>
   * @public
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig | undefined;

  /**
   * <p>Settings that control the range in the number of instances that the endpoint provisions as it scales up or down to accommodate traffic. </p>
   * @public
   */
  ManagedInstanceScaling?: ProductionVariantManagedInstanceScaling | undefined;

  /**
   * <p>Settings that control how the endpoint routes incoming traffic to the instances that the endpoint hosts.</p>
   * @public
   */
  RoutingConfig?: ProductionVariantRoutingConfig | undefined;

  /**
   * <p>Settings for the capacity reservation for the compute instances that SageMaker AI reserves for an endpoint. </p>
   * @public
   */
  CapacityReservationConfig?: ProductionVariantCapacityReservationSummary | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointOutput {
  /**
   * <p>Name of the endpoint.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p>The name of the endpoint configuration associated with this endpoint.</p>
   * @public
   */
  EndpointConfigName?: string | undefined;

  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariantSummary.html">ProductionVariantSummary</a> objects, one for each model hosted behind this endpoint.</p>
   * @public
   */
  ProductionVariants?: ProductionVariantSummary[] | undefined;

  /**
   * <p>The currently active data capture configuration used by your Endpoint.</p>
   * @public
   */
  DataCaptureConfig?: DataCaptureConfigSummary | undefined;

  /**
   * <p>The status of the endpoint.</p> <ul> <li> <p> <code>OutOfService</code>: Endpoint is not available to take incoming requests.</p> </li> <li> <p> <code>Creating</code>: <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> is executing.</p> </li> <li> <p> <code>Updating</code>: <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html">UpdateEndpoint</a> or <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html">UpdateEndpointWeightsAndCapacities</a> is executing.</p> </li> <li> <p> <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be updated or deleted or re-scaled until it has completed. This maintenance operation does not change any customer-specified values such as VPC config, KMS encryption, model, instance type, or instance count.</p> </li> <li> <p> <code>RollingBack</code>: Endpoint fails to scale up or down or change its variant weight and is in the process of rolling back to its previous configuration. Once the rollback completes, endpoint returns to an <code>InService</code> status. This transitional status only applies to an endpoint that has autoscaling enabled and is undergoing variant weight or capacity changes as part of an <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html">UpdateEndpointWeightsAndCapacities</a> call or when the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html">UpdateEndpointWeightsAndCapacities</a> operation is called explicitly.</p> </li> <li> <p> <code>InService</code>: Endpoint is available to process incoming requests.</p> </li> <li> <p> <code>Deleting</code>: <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html">DeleteEndpoint</a> is executing.</p> </li> <li> <p> <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use the <code>FailureReason</code> value returned by <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> for information about the failure. <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html">DeleteEndpoint</a> is the only operation that can be performed on a failed endpoint.</p> </li> <li> <p> <code>UpdateRollbackFailed</code>: Both the rolling deployment and auto-rollback failed. Your endpoint is in service with a mix of the old and new endpoint configurations. For information about how to remedy this issue and restore the endpoint's status to <code>InService</code>, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/deployment-guardrails-rolling.html">Rolling Deployments</a>.</p> </li> </ul>
   * @public
   */
  EndpointStatus: EndpointStatus | undefined;

  /**
   * <p>If the status of the endpoint is <code>Failed</code>, the reason why it failed. </p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The most recent deployment configuration for the endpoint.</p>
   * @public
   */
  LastDeploymentConfig?: DeploymentConfig | undefined;

  /**
   * <p>Returns the description of an endpoint configuration created using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html"> <code>CreateEndpointConfig</code> </a> API.</p>
   * @public
   */
  AsyncInferenceConfig?: AsyncInferenceConfig | undefined;

  /**
   * <p>Returns the summary of an in-progress deployment. This field is only returned when the endpoint is creating or updating with a new endpoint configuration.</p>
   * @public
   */
  PendingDeploymentSummary?: PendingDeploymentSummary | undefined;

  /**
   * <p>The configuration parameters for an explainer.</p>
   * @public
   */
  ExplainerConfig?: ExplainerConfig | undefined;

  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariantSummary.html">ProductionVariantSummary</a> objects, one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on <code>ProductionVariants</code>.</p>
   * @public
   */
  ShadowProductionVariants?: ProductionVariantSummary[] | undefined;

  /**
   * <p>The configuration parameters for utilization metrics.</p>
   * @public
   */
  MetricsConfig?: MetricsConfig | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration.</p>
   * @public
   */
  EndpointConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointConfigOutput {
  /**
   * <p>Name of the SageMaker endpoint configuration.</p>
   * @public
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   * @public
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you want to host at this endpoint.</p>
   * @public
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * <p>Configuration to control how SageMaker AI captures inference data.</p>
   * @public
   */
  DataCaptureConfig?: DataCaptureConfig | undefined;

  /**
   * <p>Amazon Web Services KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage volume attached to the instance.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the description of an endpoint configuration created using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html"> <code>CreateEndpointConfig</code> </a> API.</p>
   * @public
   */
  AsyncInferenceConfig?: AsyncInferenceConfig | undefined;

  /**
   * <p>The configuration parameters for an explainer.</p>
   * @public
   */
  ExplainerConfig?: ExplainerConfig | undefined;

  /**
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on <code>ProductionVariants</code>.</p>
   * @public
   */
  ShadowProductionVariants?: ProductionVariant[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you assigned to the endpoint configuration.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html">Give SageMaker Access to Resources in your Amazon VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>Indicates whether all model containers deployed to the endpoint are isolated. If they are, no inbound or outbound network calls can be made to or from the model containers.</p>
   * @public
   */
  EnableNetworkIsolation?: boolean | undefined;

  /**
   * <p>The configuration parameters for utilization metrics.</p>
   * @public
   */
  MetricsConfig?: MetricsConfig | undefined;
}

/**
 * @public
 */
export interface DescribeExperimentRequest {
  /**
   * <p>The name of the experiment to describe.</p>
   * @public
   */
  ExperimentName: string | undefined;
}

/**
 * <p>The source of the experiment.</p>
 * @public
 */
export interface ExperimentSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The source type.</p>
   * @public
   */
  SourceType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeExperimentResponse {
  /**
   * <p>The name of the experiment.</p>
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   * @public
   */
  ExperimentArn?: string | undefined;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified, <code>ExperimentName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the type.</p>
   * @public
   */
  Source?: ExperimentSource | undefined;

  /**
   * <p>The description of the experiment.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>When the experiment was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Who created the experiment.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>When the experiment was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Who last modified the experiment.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;
}

/**
 * @public
 */
export interface DescribeFeatureGroupRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the <code>FeatureGroup</code> you want described. </p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>A token to resume pagination of the list of <code>Features</code> (<code>FeatureDefinitions</code>). 2,500 <code>Features</code> are returned by default.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A value that indicates whether the update was successful.</p>
 * @public
 */
export interface LastUpdateStatus {
  /**
   * <p>A value that indicates whether the update was made successful.</p>
   * @public
   */
  Status: LastUpdateStatusValue | undefined;

  /**
   * <p>If the update wasn't successful, indicates the reason why it failed.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * <p>The status of <code>OfflineStore</code>.</p>
 * @public
 */
export interface OfflineStoreStatus {
  /**
   * <p>An <code>OfflineStore</code> status.</p>
   * @public
   */
  Status: OfflineStoreStatusValue | undefined;

  /**
   * <p>The justification for why the OfflineStoreStatus is Blocked (if applicable).</p>
   * @public
   */
  BlockedReason?: string | undefined;
}

/**
 * <p>Active throughput configuration of the feature group. There are two modes: <code>ON_DEMAND</code> and <code>PROVISIONED</code>. With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled. </p> <p>Note: <code>PROVISIONED</code> throughput mode is supported only for feature groups that are offline-only, or use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OnlineStoreConfig.html#sagemaker-Type-OnlineStoreConfig-StorageType"> <code>Standard</code> </a> tier online store. </p>
 * @public
 */
export interface ThroughputConfigDescription {
  /**
   * <p>The mode used for your feature group throughput: <code>ON_DEMAND</code> or <code>PROVISIONED</code>. </p>
   * @public
   */
  ThroughputMode: ThroughputMode | undefined;

  /**
   * <p> For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling. </p> <p>This field is not applicable for on-demand feature groups. </p>
   * @public
   */
  ProvisionedReadCapacityUnits?: number | undefined;

  /**
   * <p> For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling. </p> <p>This field is not applicable for on-demand feature groups. </p>
   * @public
   */
  ProvisionedWriteCapacityUnits?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFeatureGroupResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>FeatureGroup</code>. </p>
   * @public
   */
  FeatureGroupArn: string | undefined;

  /**
   * <p>he name of the <code>FeatureGroup</code>.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the <code>Feature</code> used for <code>RecordIdentifier</code>, whose value uniquely identifies a record stored in the feature store.</p>
   * @public
   */
  RecordIdentifierFeatureName: string | undefined;

  /**
   * <p>The name of the feature that stores the <code>EventTime</code> of a Record in a <code>FeatureGroup</code>.</p> <p> An <code>EventTime</code> is a point in time when a new event occurs that corresponds to the creation or update of a <code>Record</code> in a <code>FeatureGroup</code>. All <code>Records</code> in the <code>FeatureGroup</code> have a corresponding <code>EventTime</code>.</p>
   * @public
   */
  EventTimeFeatureName: string | undefined;

  /**
   * <p>A list of the <code>Features</code> in the <code>FeatureGroup</code>. Each feature is defined by a <code>FeatureName</code> and <code>FeatureType</code>.</p>
   * @public
   */
  FeatureDefinitions: FeatureDefinition[] | undefined;

  /**
   * <p>A timestamp indicating when SageMaker created the <code>FeatureGroup</code>.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp indicating when the feature group was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The configuration for the <code>OnlineStore</code>.</p>
   * @public
   */
  OnlineStoreConfig?: OnlineStoreConfig | undefined;

  /**
   * <p>The configuration of the offline store. It includes the following configurations:</p> <ul> <li> <p>Amazon S3 location of the offline store.</p> </li> <li> <p>Configuration of the Glue data catalog.</p> </li> <li> <p>Table format of the offline store.</p> </li> <li> <p>Option to disable the automatic creation of a Glue table for the offline store.</p> </li> <li> <p>Encryption configuration.</p> </li> </ul>
   * @public
   */
  OfflineStoreConfig?: OfflineStoreConfig | undefined;

  /**
   * <p>Active throughput configuration of the feature group. There are two modes: <code>ON_DEMAND</code> and <code>PROVISIONED</code>. With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled. </p> <p>Note: <code>PROVISIONED</code> throughput mode is supported only for feature groups that are offline-only, or use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OnlineStoreConfig.html#sagemaker-Type-OnlineStoreConfig-StorageType"> <code>Standard</code> </a> tier online store. </p>
   * @public
   */
  ThroughputConfig?: ThroughputConfigDescription | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the OfflineStore if an OfflineStoreConfig is provided.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The status of the feature group.</p>
   * @public
   */
  FeatureGroupStatus?: FeatureGroupStatus | undefined;

  /**
   * <p>The status of the <code>OfflineStore</code>. Notifies you if replicating data into the <code>OfflineStore</code> has failed. Returns either: <code>Active</code> or <code>Blocked</code> </p>
   * @public
   */
  OfflineStoreStatus?: OfflineStoreStatus | undefined;

  /**
   * <p>A value indicating whether the update made to the feature group was successful.</p>
   * @public
   */
  LastUpdateStatus?: LastUpdateStatus | undefined;

  /**
   * <p>The reason that the <code>FeatureGroup</code> failed to be replicated in the <code>OfflineStore</code>. This is failure can occur because:</p> <ul> <li> <p>The <code>FeatureGroup</code> could not be created in the <code>OfflineStore</code>.</p> </li> <li> <p>The <code>FeatureGroup</code> could not be deleted from the <code>OfflineStore</code>.</p> </li> </ul>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>A free form description of the feature group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A token to resume pagination of the list of <code>Features</code> (<code>FeatureDefinitions</code>).</p>
   * @public
   */
  NextToken: string | undefined;

  /**
   * <p>The size of the <code>OnlineStore</code> in bytes.</p>
   * @public
   */
  OnlineStoreTotalSizeBytes?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFeatureMetadataRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the feature group containing the feature.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the feature.</p>
   * @public
   */
  FeatureName: string | undefined;
}

/**
 * <p>A key-value pair that you specify to describe the feature.</p>
 * @public
 */
export interface FeatureParameter {
  /**
   * <p>A key that must contain a value to describe the feature.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value that belongs to a key.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFeatureMetadataResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the feature group that contains the feature.</p>
   * @public
   */
  FeatureGroupArn: string | undefined;

  /**
   * <p>The name of the feature group that you've specified.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the feature that you've specified.</p>
   * @public
   */
  FeatureName: string | undefined;

  /**
   * <p>The data type of the feature.</p>
   * @public
   */
  FeatureType: FeatureType | undefined;

  /**
   * <p>A timestamp indicating when the feature was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp indicating when the metadata for the feature group was modified. For example, if you add a parameter describing the feature, the timestamp changes to reflect the last time you </p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The description you added to describe the feature.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The key-value pairs that you added to describe the feature.</p>
   * @public
   */
  Parameters?: FeatureParameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowDefinitionRequest {
  /**
   * <p>The name of the flow definition.</p>
   * @public
   */
  FlowDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeFlowDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow defintion.</p>
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   * @public
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>The status of the flow definition. Valid values are listed below.</p>
   * @public
   */
  FlowDefinitionStatus: FlowDefinitionStatus | undefined;

  /**
   * <p>The timestamp when the flow definition was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Container for configuring the source of human task requests. Used to specify if Amazon Rekognition or Amazon Textract is used as an integration source.</p>
   * @public
   */
  HumanLoopRequestSource?: HumanLoopRequestSource | undefined;

  /**
   * <p>An object containing information about what triggers a human review workflow.</p>
   * @public
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig | undefined;

  /**
   * <p>An object containing information about who works on the task, the workforce task price, and other task details.</p>
   * @public
   */
  HumanLoopConfig?: HumanLoopConfig | undefined;

  /**
   * <p>An object containing information about the output file.</p>
   * @public
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) execution role for the flow definition.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The reason your flow definition failed.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHubRequest {
  /**
   * <p>The name of the hub to describe.</p>
   * @public
   */
  HubName: string | undefined;
}

/**
 * @public
 */
export interface DescribeHubResponse {
  /**
   * <p>The name of the hub.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hub.</p>
   * @public
   */
  HubArn: string | undefined;

  /**
   * <p>The display name of the hub.</p>
   * @public
   */
  HubDisplayName?: string | undefined;

  /**
   * <p>A description of the hub.</p>
   * @public
   */
  HubDescription?: string | undefined;

  /**
   * <p>The searchable keywords for the hub.</p>
   * @public
   */
  HubSearchKeywords?: string[] | undefined;

  /**
   * <p>The Amazon S3 storage configuration for the hub.</p>
   * @public
   */
  S3StorageConfig?: HubS3StorageConfig | undefined;

  /**
   * <p>The status of the hub.</p>
   * @public
   */
  HubStatus: HubStatus | undefined;

  /**
   * <p>The failure reason if importing hub content failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The date and time that the hub was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the hub was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeHubContentRequest {
  /**
   * <p>The name of the hub that contains the content to describe.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>The type of content in the hub.</p>
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * <p>The name of the content to describe.</p>
   * @public
   */
  HubContentName: string | undefined;

  /**
   * <p>The version of the content to describe.</p>
   * @public
   */
  HubContentVersion?: string | undefined;
}

/**
 * <p>Any dependencies related to hub content, such as scripts, model artifacts, datasets, or notebooks.</p>
 * @public
 */
export interface HubContentDependency {
  /**
   * <p>The hub content dependency origin path.</p>
   * @public
   */
  DependencyOriginPath?: string | undefined;

  /**
   * <p>The hub content dependency copy path.</p>
   * @public
   */
  DependencyCopyPath?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHubContentResponse {
  /**
   * <p>The name of the hub content.</p>
   * @public
   */
  HubContentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hub content.</p>
   * @public
   */
  HubContentArn: string | undefined;

  /**
   * <p>The version of the hub content.</p>
   * @public
   */
  HubContentVersion: string | undefined;

  /**
   * <p>The type of hub content.</p>
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * <p>The document schema version for the hub content.</p>
   * @public
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * <p>The name of the hub that contains the content.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hub that contains the content. </p>
   * @public
   */
  HubArn: string | undefined;

  /**
   * <p>The display name of the hub content.</p>
   * @public
   */
  HubContentDisplayName?: string | undefined;

  /**
   * <p>A description of the hub content.</p>
   * @public
   */
  HubContentDescription?: string | undefined;

  /**
   * <p>A string that provides a description of the hub content. This string can include links, tables, and standard markdown formating.</p>
   * @public
   */
  HubContentMarkdown?: string | undefined;

  /**
   * <p>The hub content document that describes information about the hub content such as type, associated containers, scripts, and more.</p>
   * @public
   */
  HubContentDocument: string | undefined;

  /**
   * <p>The ARN of the public hub content.</p>
   * @public
   */
  SageMakerPublicHubContentArn?: string | undefined;

  /**
   * <p>The minimum version of the hub content.</p>
   * @public
   */
  ReferenceMinVersion?: string | undefined;

  /**
   * <p>The support status of the hub content.</p>
   * @public
   */
  SupportStatus?: HubContentSupportStatus | undefined;

  /**
   * <p>The searchable keywords for the hub content.</p>
   * @public
   */
  HubContentSearchKeywords?: string[] | undefined;

  /**
   * <p>The location of any dependencies that the hub content has, such as scripts, model artifacts, datasets, or notebooks.</p>
   * @public
   */
  HubContentDependencies?: HubContentDependency[] | undefined;

  /**
   * <p>The status of the hub content.</p>
   * @public
   */
  HubContentStatus: HubContentStatus | undefined;

  /**
   * <p>The failure reason if importing hub content failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The date and time that hub content was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last modified time of the hub content.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeHumanTaskUiRequest {
  /**
   * <p>The name of the human task user interface (worker task template) you want information about.</p>
   * @public
   */
  HumanTaskUiName: string | undefined;
}

/**
 * <p>Container for user interface template information.</p>
 * @public
 */
export interface UiTemplateInfo {
  /**
   * <p>The URL for the user interface template.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The SHA-256 digest of the contents of the template.</p>
   * @public
   */
  ContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHumanTaskUiResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface (worker task template).</p>
   * @public
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>The name of the human task user interface (worker task template).</p>
   * @public
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>The status of the human task user interface (worker task template). Valid values are listed below.</p>
   * @public
   */
  HumanTaskUiStatus?: HumanTaskUiStatus | undefined;

  /**
   * <p>The timestamp when the human task user interface was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Container for user interface template information.</p>
   * @public
   */
  UiTemplate: UiTemplateInfo | undefined;
}

/**
 * @public
 */
export interface DescribeHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job.</p>
   * @public
   */
  HyperParameterTuningJobName: string | undefined;
}

/**
 * <p>Shows the latest objective metric emitted by a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html">HyperParameterTuningJobConfig</a>.</p>
 * @public
 */
export interface FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * <p>Select if you want to minimize or maximize the objective metric during hyperparameter tuning. </p>
   * @public
   */
  Type?: HyperParameterTuningJobObjectiveType | undefined;

  /**
   * <p>The name of the objective metric. For SageMaker built-in algorithms, metrics are defined per algorithm. See the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xgboost-tuning.html">metrics for XGBoost</a> as an example. You can also use a custom algorithm for training and define your own metrics. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html">Define metrics and environment variables</a>.</p>
   * @public
   */
  MetricName: string | undefined;

  /**
   * <p>The value of the objective metric.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * <p>The container for the summary information about a training job.</p>
 * @public
 */
export interface HyperParameterTrainingJobSummary {
  /**
   * <p>The training job definition name.</p>
   * @public
   */
  TrainingJobDefinitionName?: string | undefined;

  /**
   * <p>The name of the training job.</p>
   * @public
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   * @public
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The HyperParameter tuning job that launched the training job.</p>
   * @public
   */
  TuningJobName?: string | undefined;

  /**
   * <p>The date and time that the training job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the training job started.</p>
   * @public
   */
  TrainingStartTime?: Date | undefined;

  /**
   * <p>Specifies the time when the training job ends on training instances. You are billed for the time interval between the value of <code>TrainingStartTime</code> and this time. For successful jobs and stopped jobs, this is the time after model artifacts are uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   * @public
   */
  TrainingEndTime?: Date | undefined;

  /**
   * <p>The status of the training job.</p>
   * @public
   */
  TrainingJobStatus: TrainingJobStatus | undefined;

  /**
   * <p>A list of the hyperparameters for which you specified ranges to search.</p>
   * @public
   */
  TunedHyperParameters: Record<string, string> | undefined;

  /**
   * <p>The reason that the training job failed. </p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_FinalHyperParameterTuningJobObjectiveMetric.html">FinalHyperParameterTuningJobObjectiveMetric</a> object that specifies the value of the objective metric of the tuning job that launched this training job.</p>
   * @public
   */
  FinalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric | undefined;

  /**
   * <p>The status of the objective metric for the training job:</p> <ul> <li> <p>Succeeded: The final objective metric for the training job was evaluated by the hyperparameter tuning job and used in the hyperparameter tuning process.</p> </li> </ul> <ul> <li> <p>Pending: The training job is in progress and evaluation of its final objective metric is pending.</p> </li> </ul> <ul> <li> <p>Failed: The final objective metric for the training job was not evaluated, and was not used in the hyperparameter tuning process. This typically occurs when the training job failed or did not emit an objective metric.</p> </li> </ul>
   * @public
   */
  ObjectiveStatus?: ObjectiveStatus | undefined;
}

/**
 * <p>The total resources consumed by your hyperparameter tuning job.</p>
 * @public
 */
export interface HyperParameterTuningJobConsumedResources {
  /**
   * <p>The wall clock runtime in seconds used by your hyperparameter tuning job.</p>
   * @public
   */
  RuntimeInSeconds?: number | undefined;
}

/**
 * <p>Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.</p>
 * @public
 */
export interface ObjectiveStatusCounters {
  /**
   * <p>The number of training jobs whose final objective metric was evaluated by the hyperparameter tuning job and used in the hyperparameter tuning process.</p>
   * @public
   */
  Succeeded?: number | undefined;

  /**
   * <p>The number of training jobs that are in progress and pending evaluation of their final objective metric.</p>
   * @public
   */
  Pending?: number | undefined;

  /**
   * <p>The number of training jobs whose final objective metric was not evaluated and used in the hyperparameter tuning process. This typically occurs when the training job failed or did not emit an objective metric.</p>
   * @public
   */
  Failed?: number | undefined;
}

/**
 * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.</p>
 * @public
 */
export interface TrainingJobStatusCounters {
  /**
   * <p>The number of completed training jobs launched by the hyperparameter tuning job.</p>
   * @public
   */
  Completed?: number | undefined;

  /**
   * <p>The number of in-progress training jobs launched by a hyperparameter tuning job.</p>
   * @public
   */
  InProgress?: number | undefined;

  /**
   * <p>The number of training jobs that failed, but can be retried. A failed training job can be retried only if it failed because an internal service error occurred.</p>
   * @public
   */
  RetryableError?: number | undefined;

  /**
   * <p>The number of training jobs that failed and can't be retried. A failed training job can't be retried if it failed because a client error occurred.</p>
   * @public
   */
  NonRetryableError?: number | undefined;

  /**
   * <p>The number of training jobs launched by a hyperparameter tuning job that were manually stopped.</p>
   * @public
   */
  Stopped?: number | undefined;
}

/**
 * <p>A structure that contains runtime information about both current and completed hyperparameter tuning jobs.</p>
 * @public
 */
export interface HyperParameterTuningJobCompletionDetails {
  /**
   * <p>The number of training jobs launched by a tuning job that are not improving (1% or less) as measured by model performance evaluated against an objective function.</p>
   * @public
   */
  NumberOfTrainingJobsObjectiveNotImproving?: number | undefined;

  /**
   * <p>The time in timestamp format that AMT detected model convergence, as defined by a lack of significant improvement over time based on criteria developed over a wide range of diverse benchmarking tests.</p>
   * @public
   */
  ConvergenceDetectedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeHyperParameterTuningJobResponse {
  /**
   * <p>The name of the hyperparameter tuning job.</p>
   * @public
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job.</p>
   * @public
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html">HyperParameterTuningJobConfig</a> object that specifies the configuration of the tuning job.</p>
   * @public
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html">HyperParameterTrainingJobDefinition</a> object that specifies the definition of the training jobs that this tuning job launches.</p>
   * @public
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition | undefined;

  /**
   * <p>A list of the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html">HyperParameterTrainingJobDefinition</a> objects launched for this tuning job.</p>
   * @public
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[] | undefined;

  /**
   * <p>The status of the tuning job.</p>
   * @public
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | undefined;

  /**
   * <p>The date and time that the tuning job started.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   * @public
   */
  HyperParameterTuningEndTime?: Date | undefined;

  /**
   * <p>The date and time that the status of the tuning job was modified. </p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobStatusCounters.html">TrainingJobStatusCounters</a> object that specifies the number of training jobs, categorized by status, that this tuning job launched.</p>
   * @public
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ObjectiveStatusCounters.html">ObjectiveStatusCounters</a> object that specifies the number of training jobs, categorized by the status of their final objective metric, that this tuning job launched.</p>
   * @public
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> object that describes the training job that completed with the best current <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobObjective.html">HyperParameterTuningJobObjective</a>.</p>
   * @public
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary | undefined;

  /**
   * <p>If the hyperparameter tuning job is an warm start tuning job with a <code>WarmStartType</code> of <code>IDENTICAL_DATA_AND_ALGORITHM</code>, this is the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> for the training job with the best objective metric value of all training jobs launched by this tuning job and all parent jobs specified for the warm start tuning job.</p>
   * @public
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary | undefined;

  /**
   * <p>The configuration for starting the hyperparameter parameter tuning job using one or more previous tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p>
   * @public
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig | undefined;

  /**
   * <p>A flag to indicate if autotune is enabled for the hyperparameter tuning job.</p>
   * @public
   */
  Autotune?: Autotune | undefined;

  /**
   * <p>If the tuning job failed, the reason it failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Tuning job completion information returned as the response from a hyperparameter tuning job. This information tells if your tuning job has or has not converged. It also includes the number of training jobs that have not improved model performance as evaluated against the objective function.</p>
   * @public
   */
  TuningJobCompletionDetails?: HyperParameterTuningJobCompletionDetails | undefined;

  /**
   * <p>The total resources consumed by your hyperparameter tuning job.</p>
   * @public
   */
  ConsumedResources?: HyperParameterTuningJobConsumedResources | undefined;
}

/**
 * @public
 */
export interface DescribeImageRequest {
  /**
   * <p>The name of the image to describe.</p>
   * @public
   */
  ImageName: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageResponse {
  /**
   * <p>When the image was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The description of the image.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the image as displayed.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>When a create, update, or delete operation fails, the reason for the failure.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The ARN of the image.</p>
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * <p>The name of the image.</p>
   * @public
   */
  ImageName?: string | undefined;

  /**
   * <p>The status of the image.</p>
   * @public
   */
  ImageStatus?: ImageStatus | undefined;

  /**
   * <p>When the image was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The ARN of the IAM role that enables Amazon SageMaker AI to perform tasks on your behalf.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageVersionRequest {
  /**
   * <p>The name of the image.</p>
   * @public
   */
  ImageName: string | undefined;

  /**
   * <p>The version of the image. If not specified, the latest version is described.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The alias of the image version.</p>
   * @public
   */
  Alias?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageVersionResponse {
  /**
   * <p>The registry path of the container image on which this image version is based.</p>
   * @public
   */
  BaseImage?: string | undefined;

  /**
   * <p>The registry path of the container image that contains this image version.</p>
   * @public
   */
  ContainerImage?: string | undefined;

  /**
   * <p>When the version was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The ARN of the image the version is based on.</p>
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * <p>The ARN of the version.</p>
   * @public
   */
  ImageVersionArn?: string | undefined;

  /**
   * <p>The status of the version.</p>
   * @public
   */
  ImageVersionStatus?: ImageVersionStatus | undefined;

  /**
   * <p>When the version was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The stability of the image version specified by the maintainer.</p> <ul> <li> <p> <code>NOT_PROVIDED</code>: The maintainers did not provide a status for image version stability.</p> </li> <li> <p> <code>STABLE</code>: The image version is stable.</p> </li> <li> <p> <code>TO_BE_ARCHIVED</code>: The image version is set to be archived. Custom image versions that are set to be archived are automatically archived after three months.</p> </li> <li> <p> <code>ARCHIVED</code>: The image version is archived. Archived image versions are not searchable and are no longer actively supported. </p> </li> </ul>
   * @public
   */
  VendorGuidance?: VendorGuidance | undefined;

  /**
   * <p>Indicates SageMaker AI job type compatibility.</p> <ul> <li> <p> <code>TRAINING</code>: The image version is compatible with SageMaker AI training jobs.</p> </li> <li> <p> <code>INFERENCE</code>: The image version is compatible with SageMaker AI inference jobs.</p> </li> <li> <p> <code>NOTEBOOK_KERNEL</code>: The image version is compatible with SageMaker AI notebook kernels.</p> </li> </ul>
   * @public
   */
  JobType?: JobType | undefined;

  /**
   * <p>The machine learning framework vended in the image version.</p>
   * @public
   */
  MLFramework?: string | undefined;

  /**
   * <p>The supported programming language and its version.</p>
   * @public
   */
  ProgrammingLang?: string | undefined;

  /**
   * <p>Indicates CPU or GPU compatibility.</p> <ul> <li> <p> <code>CPU</code>: The image version is compatible with CPU.</p> </li> <li> <p> <code>GPU</code>: The image version is compatible with GPU.</p> </li> </ul>
   * @public
   */
  Processor?: Processor | undefined;

  /**
   * <p>Indicates Horovod compatibility.</p>
   * @public
   */
  Horovod?: boolean | undefined;

  /**
   * <p>The maintainer description of the image version.</p>
   * @public
   */
  ReleaseNotes?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInferenceComponentInput {
  /**
   * <p>The name of the inference component.</p>
   * @public
   */
  InferenceComponentName: string | undefined;
}

/**
 * <p>Specifies the type and size of the endpoint capacity to activate for a rolling deployment or a rollback strategy. You can specify your batches as either of the following:</p> <ul> <li> <p>A count of inference component copies </p> </li> <li> <p>The overall percentage or your fleet </p> </li> </ul> <p>For a rollback strategy, if you don't specify the fields in this object, or if you set the <code>Value</code> parameter to 100%, then SageMaker AI uses a blue/green rollback strategy and rolls all traffic back to the blue fleet.</p>
 * @public
 */
export interface InferenceComponentCapacitySize {
  /**
   * <p>Specifies the endpoint capacity type.</p> <dl> <dt>COPY_COUNT</dt> <dd> <p>The endpoint activates based on the number of inference component copies.</p> </dd> <dt>CAPACITY_PERCENT</dt> <dd> <p>The endpoint activates based on the specified percentage of capacity.</p> </dd> </dl>
   * @public
   */
  Type: InferenceComponentCapacitySizeType | undefined;

  /**
   * <p>Defines the capacity size, either as a number of inference component copies or a capacity percentage.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * <p>Specifies a rolling deployment strategy for updating a SageMaker AI inference component.</p>
 * @public
 */
export interface InferenceComponentRollingUpdatePolicy {
  /**
   * <p>The batch size for each rolling step in the deployment process. For each step, SageMaker AI provisions capacity on the new endpoint fleet, routes traffic to that fleet, and terminates capacity on the old endpoint fleet. The value must be between 5% to 50% of the copy count of the inference component.</p>
   * @public
   */
  MaximumBatchSize: InferenceComponentCapacitySize | undefined;

  /**
   * <p>The length of the baking period, during which SageMaker AI monitors alarms for each batch on the new fleet.</p>
   * @public
   */
  WaitIntervalInSeconds: number | undefined;

  /**
   * <p>The time limit for the total deployment. Exceeding this limit causes a timeout.</p>
   * @public
   */
  MaximumExecutionTimeoutInSeconds?: number | undefined;

  /**
   * <p>The batch size for a rollback to the old endpoint fleet. If this field is absent, the value is set to the default, which is 100% of the total capacity. When the default is used, SageMaker AI provisions the entire capacity of the old fleet at once during rollback.</p>
   * @public
   */
  RollbackMaximumBatchSize?: InferenceComponentCapacitySize | undefined;
}

/**
 * <p>The deployment configuration for an endpoint that hosts inference components. The configuration includes the desired deployment strategy and rollback settings.</p>
 * @public
 */
export interface InferenceComponentDeploymentConfig {
  /**
   * <p>Specifies a rolling deployment strategy for updating a SageMaker AI endpoint.</p>
   * @public
   */
  RollingUpdatePolicy: InferenceComponentRollingUpdatePolicy | undefined;

  /**
   * <p>Automatic rollback configuration for handling endpoint deployment failures and recovery.</p>
   * @public
   */
  AutoRollbackConfiguration?: AutoRollbackConfig | undefined;
}

/**
 * <p>Details about the runtime settings for the model that is deployed with the inference component.</p>
 * @public
 */
export interface InferenceComponentRuntimeConfigSummary {
  /**
   * <p>The number of runtime copies of the model container that you requested to deploy with the inference component.</p>
   * @public
   */
  DesiredCopyCount?: number | undefined;

  /**
   * <p>The number of runtime copies of the model container that are currently deployed.</p>
   * @public
   */
  CurrentCopyCount?: number | undefined;
}

/**
 * <p>Details about the resources that are deployed with this inference component.</p>
 * @public
 */
export interface InferenceComponentContainerSpecificationSummary {
  /**
   * <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariant.html">ProductionVariant</a>.</p> <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path of the primary container when you created the model hosted in this <code>ProductionVariant</code>, the path resolves to a path of the form <code>registry/repository[@digest]</code>. A digest is a hash value that identifies a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>
   * @public
   */
  DeployedImage?: DeployedImage | undefined;

  /**
   * <p>The Amazon S3 path where the model artifacts are stored.</p>
   * @public
   */
  ArtifactUrl?: string | undefined;

  /**
   * <p>The environment variables to set in the Docker container.</p>
   * @public
   */
  Environment?: Record<string, string> | undefined;
}

/**
 * <p>Settings that affect how the inference component caches data.</p>
 * @public
 */
export interface InferenceComponentDataCacheConfigSummary {
  /**
   * <p>Indicates whether the inference component caches model artifacts as part of the auto scaling process.</p>
   * @public
   */
  EnableCaching: boolean | undefined;
}

/**
 * <p>Details about the resources that are deployed with this inference component.</p>
 * @public
 */
export interface InferenceComponentSpecificationSummary {
  /**
   * <p>The name of the SageMaker AI model object that is deployed with the inference component.</p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>Details about the container that provides the runtime environment for the model that is deployed with the inference component.</p>
   * @public
   */
  Container?: InferenceComponentContainerSpecificationSummary | undefined;

  /**
   * <p>Settings that take effect while the model container starts up.</p>
   * @public
   */
  StartupParameters?: InferenceComponentStartupParameters | undefined;

  /**
   * <p>The compute resources allocated to run the model, plus any adapter models, that you assign to the inference component.</p>
   * @public
   */
  ComputeResourceRequirements?: InferenceComponentComputeResourceRequirements | undefined;

  /**
   * <p>The name of the base inference component that contains this inference component.</p>
   * @public
   */
  BaseInferenceComponentName?: string | undefined;

  /**
   * <p>Settings that affect how the inference component caches data.</p>
   * @public
   */
  DataCacheConfig?: InferenceComponentDataCacheConfigSummary | undefined;
}

/**
 * @public
 */
export interface DescribeInferenceComponentOutput {
  /**
   * <p>The name of the inference component.</p>
   * @public
   */
  InferenceComponentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the inference component.</p>
   * @public
   */
  InferenceComponentArn: string | undefined;

  /**
   * <p>The name of the endpoint that hosts the inference component.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint that hosts the inference component.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p>The name of the production variant that hosts the inference component.</p>
   * @public
   */
  VariantName?: string | undefined;

  /**
   * <p>If the inference component status is <code>Failed</code>, the reason for the failure.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Details about the resources that are deployed with this inference component.</p>
   * @public
   */
  Specification?: InferenceComponentSpecificationSummary | undefined;

  /**
   * <p>Details about the runtime settings for the model that is deployed with the inference component.</p>
   * @public
   */
  RuntimeConfig?: InferenceComponentRuntimeConfigSummary | undefined;

  /**
   * <p>The time when the inference component was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time when the inference component was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the inference component.</p>
   * @public
   */
  InferenceComponentStatus?: InferenceComponentStatus | undefined;

  /**
   * <p>The deployment and rollback settings that you assigned to the inference component.</p>
   * @public
   */
  LastDeploymentConfig?: InferenceComponentDeploymentConfig | undefined;
}

/**
 * @public
 */
export interface DescribeInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment to describe.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>The metadata of the endpoint.</p>
 * @public
 */
export interface EndpointMetadata {
  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the endpoint configuration.</p>
   * @public
   */
  EndpointConfigName?: string | undefined;

  /**
   * <p> The status of the endpoint. For possible values of the status of an endpoint, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_EndpointSummary.html">EndpointSummary</a>. </p>
   * @public
   */
  EndpointStatus?: EndpointStatus | undefined;

  /**
   * <p> If the status of the endpoint is <code>Failed</code>, or the status is <code>InService</code> but update operation fails, this provides the reason why it failed. </p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * <p>Summary of the deployment configuration of a model.</p>
 * @public
 */
export interface ModelVariantConfigSummary {
  /**
   * <p>The name of the Amazon SageMaker Model entity.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The name of the variant.</p>
   * @public
   */
  VariantName: string | undefined;

  /**
   * <p>The configuration of the infrastructure that the model has been deployed to.</p>
   * @public
   */
  InfrastructureConfig: ModelInfrastructureConfig | undefined;

  /**
   * <p>The status of deployment for the model variant on the hosted inference endpoint.</p> <ul> <li> <p> <code>Creating</code> - Amazon SageMaker is preparing the model variant on the hosted inference endpoint. </p> </li> <li> <p> <code>InService</code> - The model variant is running on the hosted inference endpoint. </p> </li> <li> <p> <code>Updating</code> - Amazon SageMaker is updating the model variant on the hosted inference endpoint. </p> </li> <li> <p> <code>Deleting</code> - Amazon SageMaker is deleting the model variant on the hosted inference endpoint. </p> </li> <li> <p> <code>Deleted</code> - The model variant has been deleted on the hosted inference endpoint. This can only happen after stopping the experiment. </p> </li> </ul>
   * @public
   */
  Status: ModelVariantStatus | undefined;
}

/**
 * @public
 */
export interface DescribeInferenceExperimentResponse {
  /**
   * <p>The ARN of the inference experiment being described.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the inference experiment.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of the inference experiment.</p>
   * @public
   */
  Type: InferenceExperimentType | undefined;

  /**
   * <p>The duration for which the inference experiment ran or will run.</p>
   * @public
   */
  Schedule?: InferenceExperimentSchedule | undefined;

  /**
   * <p> The status of the inference experiment. The following are the possible statuses for an inference experiment: </p> <ul> <li> <p> <code>Creating</code> - Amazon SageMaker is creating your experiment. </p> </li> <li> <p> <code>Created</code> - Amazon SageMaker has finished the creation of your experiment and will begin the experiment at the scheduled time. </p> </li> <li> <p> <code>Updating</code> - When you make changes to your experiment, your experiment shows as updating. </p> </li> <li> <p> <code>Starting</code> - Amazon SageMaker is beginning your experiment. </p> </li> <li> <p> <code>Running</code> - Your experiment is in progress. </p> </li> <li> <p> <code>Stopping</code> - Amazon SageMaker is stopping your experiment. </p> </li> <li> <p> <code>Completed</code> - Your experiment has completed. </p> </li> <li> <p> <code>Cancelled</code> - When you conclude your experiment early using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopInferenceExperiment.html">StopInferenceExperiment</a> API, or if any operation fails with an unexpected error, it shows as cancelled. </p> </li> </ul>
   * @public
   */
  Status: InferenceExperimentStatus | undefined;

  /**
   * <p> The error message or client-specified <code>Reason</code> from the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopInferenceExperiment.html">StopInferenceExperiment</a> API, that explains the status of the inference experiment. </p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The description of the inference experiment.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timestamp at which you created the inference experiment.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p> The timestamp at which the inference experiment was completed. </p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>The timestamp at which you last modified the inference experiment.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p> The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment. </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The metadata of the endpoint on which the inference experiment ran.</p>
   * @public
   */
  EndpointMetadata: EndpointMetadata | undefined;

  /**
   * <p> An array of <code>ModelVariantConfigSummary</code> objects. There is one for each variant in the inference experiment. Each <code>ModelVariantConfigSummary</code> object in the array describes the infrastructure configuration for deploying the corresponding variant. </p>
   * @public
   */
  ModelVariants: ModelVariantConfigSummary[] | undefined;

  /**
   * <p>The Amazon S3 location and configuration for storing inference request and response data.</p>
   * @public
   */
  DataStorageConfig?: InferenceExperimentDataStorageConfig | undefined;

  /**
   * <p> The configuration of <code>ShadowMode</code> inference experiment type, which shows the production variant that takes all the inference requests, and the shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant it also shows the percentage of requests that Amazon SageMaker replicates. </p>
   * @public
   */
  ShadowModeConfig?: ShadowModeConfig | undefined;

  /**
   * <p> The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceExperiment.html">CreateInferenceExperiment</a>. </p>
   * @public
   */
  KmsKey?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInferenceRecommendationsJobRequest {
  /**
   * <p>The name of the job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobName: string | undefined;
}

/**
 * <p>The metrics for an existing endpoint compared in an Inference Recommender job.</p>
 * @public
 */
export interface InferenceMetrics {
  /**
   * <p>The expected maximum number of requests per minute for the instance.</p>
   * @public
   */
  MaxInvocations: number | undefined;

  /**
   * <p>The expected model latency at maximum invocations per minute for the instance.</p>
   * @public
   */
  ModelLatency: number | undefined;
}

/**
 * <p>The performance results from running an Inference Recommender job on an existing endpoint.</p>
 * @public
 */
export interface EndpointPerformance {
  /**
   * <p>The metrics for an existing endpoint.</p>
   * @public
   */
  Metrics: InferenceMetrics | undefined;

  /**
   * <p>Details about a customer endpoint that was compared in an Inference Recommender job.</p>
   * @public
   */
  EndpointInfo: EndpointInfo | undefined;
}

/**
 * <p>The endpoint configuration made by Inference Recommender during a recommendation job.</p>
 * @public
 */
export interface EndpointOutputConfiguration {
  /**
   * <p>The name of the endpoint made during a recommendation job.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the production variant (deployed model) made during a recommendation job.</p>
   * @public
   */
  VariantName: string | undefined;

  /**
   * <p>The instance type recommended by Amazon SageMaker Inference Recommender.</p>
   * @public
   */
  InstanceType?: ProductionVariantInstanceType | undefined;

  /**
   * <p>The number of instances recommended to launch initially.</p>
   * @public
   */
  InitialInstanceCount?: number | undefined;

  /**
   * <p>Specifies the serverless configuration for an endpoint variant.</p>
   * @public
   */
  ServerlessConfig?: ProductionVariantServerlessConfig | undefined;
}

/**
 * <p>The metrics of recommendations.</p>
 * @public
 */
export interface RecommendationMetrics {
  /**
   * <p>Defines the cost per hour for the instance. </p>
   * @public
   */
  CostPerHour?: number | undefined;

  /**
   * <p>Defines the cost per inference for the instance .</p>
   * @public
   */
  CostPerInference?: number | undefined;

  /**
   * <p>The expected maximum number of requests per minute for the instance.</p>
   * @public
   */
  MaxInvocations?: number | undefined;

  /**
   * <p>The expected model latency at maximum invocation per minute for the instance.</p>
   * @public
   */
  ModelLatency?: number | undefined;

  /**
   * <p>The expected CPU utilization at maximum invocations per minute for the instance.</p> <p> <code>NaN</code> indicates that the value is not available.</p>
   * @public
   */
  CpuUtilization?: number | undefined;

  /**
   * <p>The expected memory utilization at maximum invocations per minute for the instance.</p> <p> <code>NaN</code> indicates that the value is not available.</p>
   * @public
   */
  MemoryUtilization?: number | undefined;

  /**
   * <p>The time it takes to launch new compute resources for a serverless endpoint. The time can vary depending on the model size, how long it takes to download the model, and the start-up time of the container.</p> <p> <code>NaN</code> indicates that the value is not available.</p>
   * @public
   */
  ModelSetupTime?: number | undefined;
}

/**
 * <p>A list of environment parameters suggested by the Amazon SageMaker Inference Recommender.</p>
 * @public
 */
export interface EnvironmentParameter {
  /**
   * <p>The environment key suggested by the Amazon SageMaker Inference Recommender.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value type suggested by the Amazon SageMaker Inference Recommender.</p>
   * @public
   */
  ValueType: string | undefined;

  /**
   * <p>The value suggested by the Amazon SageMaker Inference Recommender.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Defines the model configuration. Includes the specification name and environment parameters.</p>
 * @public
 */
export interface ModelConfiguration {
  /**
   * <p>The inference specification name in the model package version.</p>
   * @public
   */
  InferenceSpecificationName?: string | undefined;

  /**
   * <p>Defines the environment parameters that includes key, value types, and values.</p>
   * @public
   */
  EnvironmentParameters?: EnvironmentParameter[] | undefined;

  /**
   * <p>The name of the compilation job used to create the recommended model artifacts.</p>
   * @public
   */
  CompilationJobName?: string | undefined;
}

/**
 * <p>A list of recommendations made by Amazon SageMaker Inference Recommender.</p>
 * @public
 */
export interface InferenceRecommendation {
  /**
   * <p>The recommendation ID which uniquely identifies each recommendation.</p>
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * <p>The metrics used to decide what recommendation to make.</p>
   * @public
   */
  Metrics?: RecommendationMetrics | undefined;

  /**
   * <p>Defines the endpoint configuration parameters.</p>
   * @public
   */
  EndpointConfiguration: EndpointOutputConfiguration | undefined;

  /**
   * <p>Defines the model configuration.</p>
   * @public
   */
  ModelConfiguration: ModelConfiguration | undefined;

  /**
   * <p>A timestamp that shows when the benchmark completed.</p>
   * @public
   */
  InvocationEndTime?: Date | undefined;

  /**
   * <p>A timestamp that shows when the benchmark started.</p>
   * @public
   */
  InvocationStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeInferenceRecommendationsJobResponse {
  /**
   * <p>The name of the job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The job description that you provided when you initiated the job.</p>
   * @public
   */
  JobDescription?: string | undefined;

  /**
   * <p>The job type that you provided when you initiated the job.</p>
   * @public
   */
  JobType: RecommendationJobType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   * @public
   */
  JobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role you provided when you initiated the job.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The status of the job.</p>
   * @public
   */
  Status: RecommendationJobStatus | undefined;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the job completed.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>A timestamp that shows when the job was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If the job fails, provides information why the job failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Returns information about the versioned model package Amazon Resource Name (ARN), the traffic pattern, and endpoint configurations you provided when you initiated the job.</p>
   * @public
   */
  InputConfig: RecommendationJobInputConfig | undefined;

  /**
   * <p>The stopping conditions that you provided when you initiated the job.</p>
   * @public
   */
  StoppingConditions?: RecommendationJobStoppingConditions | undefined;

  /**
   * <p>The recommendations made by Inference Recommender.</p>
   * @public
   */
  InferenceRecommendations?: InferenceRecommendation[] | undefined;

  /**
   * <p>The performance results from running an Inference Recommender job on an existing endpoint.</p>
   * @public
   */
  EndpointPerformances?: EndpointPerformance[] | undefined;
}

/**
 * @public
 */
export interface DescribeLabelingJobRequest {
  /**
   * <p>The name of the labeling job to return information for.</p>
   * @public
   */
  LabelingJobName: string | undefined;
}

/**
 * <p>Provides a breakdown of the number of objects labeled.</p>
 * @public
 */
export interface LabelCounters {
  /**
   * <p>The total number of objects labeled.</p>
   * @public
   */
  TotalLabeled?: number | undefined;

  /**
   * <p>The total number of objects labeled by a human worker.</p>
   * @public
   */
  HumanLabeled?: number | undefined;

  /**
   * <p>The total number of objects labeled by automated data labeling.</p>
   * @public
   */
  MachineLabeled?: number | undefined;

  /**
   * <p>The total number of objects that could not be labeled due to an error.</p>
   * @public
   */
  FailedNonRetryableError?: number | undefined;

  /**
   * <p>The total number of objects not yet labeled.</p>
   * @public
   */
  Unlabeled?: number | undefined;
}

/**
 * <p>Specifies the location of the output produced by the labeling job. </p>
 * @public
 */
export interface LabelingJobOutput {
  /**
   * <p>The Amazon S3 bucket location of the manifest file for labeled data. </p>
   * @public
   */
  OutputDatasetS3Uri: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the most recent SageMaker model trained as part of automated data labeling. </p>
   * @public
   */
  FinalActiveLearningModelArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLabelingJobResponse {
  /**
   * <p>The processing status of the labeling job. </p>
   * @public
   */
  LabelingJobStatus: LabelingJobStatus | undefined;

  /**
   * <p>Provides a breakdown of the number of data objects labeled by humans, the number of objects labeled by machine, the number of objects than couldn't be labeled, and the total number of objects labeled. </p>
   * @public
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * <p>If the job failed, the reason that it failed. </p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The date and time that the labeling job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the labeling job was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A unique identifier for work done as part of a labeling job.</p>
   * @public
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>The name assigned to the labeling job when it was created.</p>
   * @public
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   * @public
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>The attribute used as the label in the output manifest file.</p>
   * @public
   */
  LabelAttributeName?: string | undefined;

  /**
   * <p>Input configuration information for the labeling job, such as the Amazon S3 location of the data objects and the location of the manifest file that describes the data objects.</p>
   * @public
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * <p>The location of the job's output data and the Amazon Web Services Key Management Service key ID for the key used to encrypt the output data, if any.</p>
   * @public
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf during data labeling.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The S3 location of the JSON file that defines the categories used to label data objects. Please note the following label-category limits:</p> <ul> <li> <p>Semantic segmentation labeling jobs using automated labeling: 20 labels</p> </li> <li> <p>Box bounding labeling jobs (all): 10 labels</p> </li> </ul> <p>The file is a JSON structure in the following format:</p> <p> <code>\{</code> </p> <p> <code> "document-version": "2018-11-28"</code> </p> <p> <code> "labels": [</code> </p> <p> <code> \{</code> </p> <p> <code> "label": "<i>label 1</i>"</code> </p> <p> <code> \},</code> </p> <p> <code> \{</code> </p> <p> <code> "label": "<i>label 2</i>"</code> </p> <p> <code> \},</code> </p> <p> <code> ...</code> </p> <p> <code> \{</code> </p> <p> <code> "label": "<i>label n</i>"</code> </p> <p> <code> \}</code> </p> <p> <code> ]</code> </p> <p> <code>\}</code> </p>
   * @public
   */
  LabelCategoryConfigS3Uri?: string | undefined;

  /**
   * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped.</p>
   * @public
   */
  StoppingConditions?: LabelingJobStoppingConditions | undefined;

  /**
   * <p>Configuration information for automated data labeling.</p>
   * @public
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig | undefined;

  /**
   * <p>Configuration information required for human workers to complete a labeling task.</p>
   * @public
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The location of the output produced by the labeling job.</p>
   * @public
   */
  LabelingJobOutput?: LabelingJobOutput | undefined;
}

/**
 * @public
 */
export interface DescribeLineageGroupRequest {
  /**
   * <p>The name of the lineage group.</p>
   * @public
   */
  LineageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeLineageGroupResponse {
  /**
   * <p>The name of the lineage group.</p>
   * @public
   */
  LineageGroupName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupArn?: string | undefined;

  /**
   * <p>The display name of the lineage group.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the lineage group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The creation time of lineage group.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>The last modified time of the lineage group.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;
}

/**
 * @public
 */
export interface DescribeMlflowTrackingServerRequest {
  /**
   * <p>The name of the MLflow Tracking Server to describe.</p>
   * @public
   */
  TrackingServerName: string | undefined;
}

/**
 * @public
 */
export interface DescribeMlflowTrackingServerResponse {
  /**
   * <p>The ARN of the described tracking server.</p>
   * @public
   */
  TrackingServerArn?: string | undefined;

  /**
   * <p>The name of the described tracking server.</p>
   * @public
   */
  TrackingServerName?: string | undefined;

  /**
   * <p>The S3 URI of the general purpose bucket used as the MLflow Tracking Server artifact store.</p>
   * @public
   */
  ArtifactStoreUri?: string | undefined;

  /**
   * <p>The size of the described tracking server.</p>
   * @public
   */
  TrackingServerSize?: TrackingServerSize | undefined;

  /**
   * <p>The MLflow version used for the described tracking server.</p>
   * @public
   */
  MlflowVersion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for an IAM role in your account that the described MLflow Tracking Server uses to access the artifact store in Amazon S3.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The current creation status of the described MLflow Tracking Server.</p>
   * @public
   */
  TrackingServerStatus?: TrackingServerStatus | undefined;

  /**
   * <p> The current maintenance status of the described MLflow Tracking Server. </p>
   * @public
   */
  TrackingServerMaintenanceStatus?: TrackingServerMaintenanceStatus | undefined;

  /**
   * <p>Whether the described MLflow Tracking Server is currently active.</p>
   * @public
   */
  IsActive?: IsTrackingServerActive | undefined;

  /**
   * <p>The URL to connect to the MLflow user interface for the described tracking server.</p>
   * @public
   */
  TrackingServerUrl?: string | undefined;

  /**
   * <p>The day and time of the week when weekly maintenance occurs on the described tracking server.</p>
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;

  /**
   * <p>Whether automatic registration of new MLflow models to the SageMaker Model Registry is enabled.</p>
   * @public
   */
  AutomaticModelRegistration?: boolean | undefined;

  /**
   * <p>The timestamp of when the described MLflow Tracking Server was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>The timestamp of when the described MLflow Tracking Server was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;
}

/**
 * @public
 */
export interface DescribeModelInput {
  /**
   * <p>The name of the model.</p>
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelOutput {
  /**
   * <p>Name of the SageMaker model.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The location of the primary inference code, associated artifacts, and custom environment map that the inference code uses when it is deployed in production. </p>
   * @public
   */
  PrimaryContainer?: ContainerDefinition | undefined;

  /**
   * <p>The containers in the inference pipeline.</p>
   * @public
   */
  Containers?: ContainerDefinition[] | undefined;

  /**
   * <p>Specifies details of how containers in a multi-container endpoint are called.</p>
   * @public
   */
  InferenceExecutionConfig?: InferenceExecutionConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the model.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that this model has access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>A timestamp that shows when the model was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   * @public
   */
  ModelArn: string | undefined;

  /**
   * <p>If <code>True</code>, no inbound or outbound network calls can be made to or from the model container.</p>
   * @public
   */
  EnableNetworkIsolation?: boolean | undefined;

  /**
   * <p>A set of recommended deployment configurations for the model.</p>
   * @public
   */
  DeploymentRecommendation?: DeploymentRecommendation | undefined;
}

/**
 * @public
 */
export interface DescribeModelBiasJobDefinitionRequest {
  /**
   * <p>The name of the model bias job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelBiasJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model bias job.</p>
   * @public
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the bias job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time at which the model bias job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The baseline configuration for a model bias job.</p>
   * @public
   */
  ModelBiasBaselineConfig?: ModelBiasBaselineConfig | undefined;

  /**
   * <p>Configures the model bias job to run a specified Docker container image.</p>
   * @public
   */
  ModelBiasAppSpecification: ModelBiasAppSpecification | undefined;

  /**
   * <p>Inputs for the model bias job.</p>
   * @public
   */
  ModelBiasJobInput: ModelBiasJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   * @public
   */
  ModelBiasJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   * @public
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model bias job.</p>
   * @public
   */
  NetworkConfig?: MonitoringNetworkConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that has read permission to the input data location and write permission to the output data location in Amazon S3.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   * @public
   */
  StoppingCondition?: MonitoringStoppingCondition | undefined;
}

/**
 * @public
 */
export interface DescribeModelCardRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the model card to describe.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>The version of the model card to describe. If a version is not provided, then the latest version of the model card is described.</p>
   * @public
   */
  ModelCardVersion?: number | undefined;
}

/**
 * @public
 */
export interface DescribeModelCardResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   * @public
   */
  ModelCardArn: string | undefined;

  /**
   * <p>The name of the model card.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>The version of the model card.</p>
   * @public
   */
  ModelCardVersion: number | undefined;

  /**
   * <p>The content of the model card.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.</p> <ul> <li> <p> <code>Draft</code>: The model card is a work in progress.</p> </li> <li> <p> <code>PendingReview</code>: The model card is pending review.</p> </li> <li> <p> <code>Approved</code>: The model card is approved.</p> </li> <li> <p> <code>Archived</code>: The model card is archived. No more updates should be made to the model card, but it can still be exported.</p> </li> </ul>
   * @public
   */
  ModelCardStatus: ModelCardStatus | undefined;

  /**
   * <p>The security configuration used to protect model card content.</p>
   * @public
   */
  SecurityConfig?: ModelCardSecurityConfig | undefined;

  /**
   * <p>The date and time the model card was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  CreatedBy: UserContext | undefined;

  /**
   * <p>The date and time the model card was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>The processing status of model card deletion. The <code>ModelCardProcessingStatus</code> updates throughout the different deletion steps.</p> <ul> <li> <p> <code>DeletePending</code>: Model card deletion request received.</p> </li> <li> <p> <code>DeleteInProgress</code>: Model card deletion is in progress.</p> </li> <li> <p> <code>ContentDeleted</code>: Deleted model card content.</p> </li> <li> <p> <code>ExportJobsDeleted</code>: Deleted all export jobs associated with the model card.</p> </li> <li> <p> <code>DeleteCompleted</code>: Successfully deleted the model card.</p> </li> <li> <p> <code>DeleteFailed</code>: The model card failed to delete.</p> </li> </ul>
   * @public
   */
  ModelCardProcessingStatus?: ModelCardProcessingStatus | undefined;
}

/**
 * @public
 */
export interface DescribeModelCardExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model card export job to describe.</p>
   * @public
   */
  ModelCardExportJobArn: string | undefined;
}

/**
 * <p>The artifacts of the model card export job.</p>
 * @public
 */
export interface ModelCardExportArtifacts {
  /**
   * <p>The Amazon S3 URI of the exported model artifacts.</p>
   * @public
   */
  S3ExportArtifacts: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelCardExportJobResponse {
  /**
   * <p>The name of the model card export job to describe.</p>
   * @public
   */
  ModelCardExportJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model card export job.</p>
   * @public
   */
  ModelCardExportJobArn: string | undefined;

  /**
   * <p>The completion status of the model card export job.</p> <ul> <li> <p> <code>InProgress</code>: The model card export job is in progress.</p> </li> <li> <p> <code>Completed</code>: The model card export job is complete.</p> </li> <li> <p> <code>Failed</code>: The model card export job failed. To see the reason for the failure, see the <code>FailureReason</code> field in the response to a <code>DescribeModelCardExportJob</code> call.</p> </li> </ul>
   * @public
   */
  Status: ModelCardExportJobStatus | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the model card that the model export job exports.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>The version of the model card that the model export job exports.</p>
   * @public
   */
  ModelCardVersion: number | undefined;

  /**
   * <p>The export output details for the model card.</p>
   * @public
   */
  OutputConfig: ModelCardExportOutputConfig | undefined;

  /**
   * <p>The date and time that the model export job was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time that the model export job was last modified.</p>
   * @public
   */
  LastModifiedAt: Date | undefined;

  /**
   * <p>The failure reason if the model export job fails.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The exported model card artifacts.</p>
   * @public
   */
  ExportArtifacts?: ModelCardExportArtifacts | undefined;
}

/**
 * @public
 */
export interface DescribeModelExplainabilityJobDefinitionRequest {
  /**
   * <p>The name of the model explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelExplainabilityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model explainability job.</p>
   * @public
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time at which the model explainability job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The baseline configuration for a model explainability job.</p>
   * @public
   */
  ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig | undefined;

  /**
   * <p>Configures the model explainability job to run a specified Docker container image.</p>
   * @public
   */
  ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecification | undefined;

  /**
   * <p>Inputs for the model explainability job.</p>
   * @public
   */
  ModelExplainabilityJobInput: ModelExplainabilityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   * @public
   */
  ModelExplainabilityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   * @public
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model explainability job.</p>
   * @public
   */
  NetworkConfig?: MonitoringNetworkConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that has read permission to the input data location and write permission to the output data location in Amazon S3.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   * @public
   */
  StoppingCondition?: MonitoringStoppingCondition | undefined;
}

/**
 * @public
 */
export interface DescribeModelPackageInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to describe.</p> <p>When you specify a name, the name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   * @public
   */
  ModelPackageName: string | undefined;
}

/**
 * <p>Represents the overall status of a model package.</p>
 * @public
 */
export interface ModelPackageStatusItem {
  /**
   * <p>The name of the model package for which the overall status is being reported.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current status.</p>
   * @public
   */
  Status: DetailedModelPackageStatus | undefined;

  /**
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * <p>Specifies the validation and image scan statuses of the model package.</p>
 * @public
 */
export interface ModelPackageStatusDetails {
  /**
   * <p>The validation status of the model package.</p>
   * @public
   */
  ValidationStatuses: ModelPackageStatusItem[] | undefined;

  /**
   * <p>The status of the scan of the Docker image container for the model package.</p>
   * @public
   */
  ImageScanStatuses?: ModelPackageStatusItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeModelPackageOutput {
  /**
   * <p>The name of the model package being described.</p>
   * @public
   */
  ModelPackageName: string | undefined;

  /**
   * <p>If the model is a versioned model, the name of the model group that the versioned model belongs to.</p>
   * @public
   */
  ModelPackageGroupName?: string | undefined;

  /**
   * <p>The version of the model package.</p>
   * @public
   */
  ModelPackageVersion?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   * @public
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>A brief summary of the model package.</p>
   * @public
   */
  ModelPackageDescription?: string | undefined;

  /**
   * <p>A timestamp specifying when the model package was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Details about inference jobs that you can run with models based on this model package.</p>
   * @public
   */
  InferenceSpecification?: InferenceSpecification | undefined;

  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   * @public
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification | undefined;

  /**
   * <p>Configurations for one or more transform jobs that SageMaker runs to test the model package.</p>
   * @public
   */
  ValidationSpecification?: ModelPackageValidationSpecification | undefined;

  /**
   * <p>The current status of the model package.</p>
   * @public
   */
  ModelPackageStatus: ModelPackageStatus | undefined;

  /**
   * <p>Details about the current status of the model package.</p>
   * @public
   */
  ModelPackageStatusDetails: ModelPackageStatusDetails | undefined;

  /**
   * <p>Whether the model package is certified for listing on Amazon Web Services Marketplace.</p>
   * @public
   */
  CertifyForMarketplace?: boolean | undefined;

  /**
   * <p>The approval status of the model package.</p>
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * <p>Metrics for the model.</p>
   * @public
   */
  ModelMetrics?: ModelMetrics | undefined;

  /**
   * <p>The last time that the model package was modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>A description provided for the model approval.</p>
   * @public
   */
  ApprovalDescription?: string | undefined;

  /**
   * <p>The machine learning domain of the model package you specified. Common machine learning domains include computer vision and natural language processing.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The machine learning task you specified that your model package accomplishes. Common machine learning tasks include object detection and image classification.</p>
   * @public
   */
  Task?: string | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored. This path points to a single gzip compressed tar archive (.tar.gz suffix).</p>
   * @public
   */
  SamplePayloadUrl?: string | undefined;

  /**
   * <p>The metadata properties associated with the model package versions.</p>
   * @public
   */
  CustomerMetadataProperties?: Record<string, string> | undefined;

  /**
   * <p>Represents the drift check baselines that can be used when the model monitor is set using the model package. For more information, see the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-quality-clarify-baseline-lifecycle.html#pipelines-quality-clarify-baseline-drift-detection">Drift Detection against Previous Baselines in SageMaker Pipelines</a> in the <i>Amazon SageMaker Developer Guide</i>. </p>
   * @public
   */
  DriftCheckBaselines?: DriftCheckBaselines | undefined;

  /**
   * <p>An array of additional Inference Specification objects. Each additional Inference Specification specifies artifacts based on this model package that can be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.</p>
   * @public
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[] | undefined;

  /**
   * <p>Indicates if you want to skip model validation.</p>
   * @public
   */
  SkipModelValidation?: SkipModelValidation | undefined;

  /**
   * <p>The URI of the source for the model package.</p>
   * @public
   */
  SourceUri?: string | undefined;

  /**
   * <p>The KMS Key ID (<code>KMSKeyId</code>) used for encryption of model package information.</p>
   * @public
   */
  SecurityConfig?: ModelPackageSecurityConfig | undefined;

  /**
   * <p>The model card associated with the model package. Since <code>ModelPackageModelCard</code> is tied to a model package, it is a specific usage of a model card and its schema is simplified compared to the schema of <code>ModelCard</code>. The <code>ModelPackageModelCard</code> schema does not include <code>model_package_details</code>, and <code>model_overview</code> is composed of the <code>model_creator</code> and <code>model_artifact</code> properties. For more information about the model package model card schema, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html#model-card-schema">Model package model card schema</a>. For more information about the model card associated with the model package, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html">View the Details of a Model Version</a>.</p>
   * @public
   */
  ModelCard?: ModelPackageModelCard | undefined;

  /**
   * <p> A structure describing the current state of the model in its life cycle. </p>
   * @public
   */
  ModelLifeCycle?: ModelLifeCycle | undefined;
}

/**
 * @public
 */
export interface DescribeModelPackageGroupInput {
  /**
   * <p>The name of the model group to describe.</p>
   * @public
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelPackageGroupOutput {
  /**
   * <p>The name of the model group.</p>
   * @public
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   * @public
   */
  ModelPackageGroupArn: string | undefined;

  /**
   * <p>A description of the model group.</p>
   * @public
   */
  ModelPackageGroupDescription?: string | undefined;

  /**
   * <p>The time that the model group was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  CreatedBy: UserContext | undefined;

  /**
   * <p>The status of the model group.</p>
   * @public
   */
  ModelPackageGroupStatus: ModelPackageGroupStatus | undefined;
}

/**
 * @public
 */
export interface DescribeModelQualityJobDefinitionRequest {
  /**
   * <p>The name of the model quality job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelQualityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model quality job.</p>
   * @public
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the quality job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time at which the model quality job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The baseline configuration for a model quality job.</p>
   * @public
   */
  ModelQualityBaselineConfig?: ModelQualityBaselineConfig | undefined;

  /**
   * <p>Configures the model quality job to run a specified Docker container image.</p>
   * @public
   */
  ModelQualityAppSpecification: ModelQualityAppSpecification | undefined;

  /**
   * <p>Inputs for the model quality job.</p>
   * @public
   */
  ModelQualityJobInput: ModelQualityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   * @public
   */
  ModelQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   * @public
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model quality job.</p>
   * @public
   */
  NetworkConfig?: MonitoringNetworkConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform tasks on your behalf.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   * @public
   */
  StoppingCondition?: MonitoringStoppingCondition | undefined;
}

/**
 * @public
 */
export interface DescribeMonitoringScheduleRequest {
  /**
   * <p>Name of a previously created monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * <p>Summary of information about the last monitoring job to run.</p>
 * @public
 */
export interface MonitoringExecutionSummary {
  /**
   * <p>The name of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The time the monitoring job was scheduled.</p>
   * @public
   */
  ScheduledTime: Date | undefined;

  /**
   * <p>The time at which the monitoring job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that indicates the last time the monitoring job was modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the monitoring job.</p>
   * @public
   */
  MonitoringExecutionStatus: ExecutionStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   * @public
   */
  ProcessingJobArn?: string | undefined;

  /**
   * <p>The name of the endpoint used to run the monitoring job.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>Contains the reason a monitoring job failed, if it failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The name of the monitoring job.</p>
   * @public
   */
  MonitoringJobDefinitionName?: string | undefined;

  /**
   * <p>The type of the monitoring job.</p>
   * @public
   */
  MonitoringType?: MonitoringType | undefined;
}

/**
 * @public
 */
export interface DescribeMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>Name of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The status of an monitoring job.</p>
   * @public
   */
  MonitoringScheduleStatus: ScheduleStatus | undefined;

  /**
   * <p>The type of the monitoring job that this schedule runs. This is one of the following values.</p> <ul> <li> <p> <code>DATA_QUALITY</code> - The schedule is for a data quality monitoring job.</p> </li> <li> <p> <code>MODEL_QUALITY</code> - The schedule is for a model quality monitoring job.</p> </li> <li> <p> <code>MODEL_BIAS</code> - The schedule is for a bias monitoring job.</p> </li> <li> <p> <code>MODEL_EXPLAINABILITY</code> - The schedule is for an explainability monitoring job.</p> </li> </ul>
   * @public
   */
  MonitoringType?: MonitoringType | undefined;

  /**
   * <p>A string, up to one KB in size, that contains the reason a monitoring job failed, if it failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The time at which the monitoring job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time at which the monitoring job was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the monitoring job.</p>
   * @public
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * <p> The name of the endpoint for the monitoring job.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>Describes metadata on the last execution to run, if there was one.</p>
   * @public
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary | undefined;
}

/**
 * @public
 */
export interface DescribeNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance that you want information about.</p>
   * @public
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface DescribeNotebookInstanceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   * @public
   */
  NotebookInstanceArn?: string | undefined;

  /**
   * <p>The name of the SageMaker AI notebook instance. </p>
   * @public
   */
  NotebookInstanceName?: string | undefined;

  /**
   * <p>The status of the notebook instance.</p>
   * @public
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | undefined;

  /**
   * <p>If status is <code>Failed</code>, the reason it failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The URL that you use to connect to the Jupyter notebook that is running in your notebook instance. </p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The type of ML compute instance running on the notebook instance.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The IP address type configured for the notebook instance. Returns <code>ipv4</code> for IPv4-only connectivity or <code>dualstack</code> for both IPv4 and IPv6 connectivity.</p>
   * @public
   */
  IpAddressType?: IPAddressType | undefined;

  /**
   * <p>The ID of the VPC subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The IDs of the VPC security groups.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the instance. </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key ID SageMaker AI uses to encrypt data when storing it on the ML storage volume attached to the instance. </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The network interface IDs that SageMaker AI created at the time of creating the instance. </p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>A timestamp. Use this parameter to retrieve the time when the notebook instance was last modified. </p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>A timestamp. Use this parameter to return the time when the notebook instance was created</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Returns the name of a notebook instance lifecycle configuration.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a> </p>
   * @public
   */
  NotebookInstanceLifecycleConfigName?: string | undefined;

  /**
   * <p>Describes whether SageMaker AI provides internet access to the notebook instance. If this value is set to <i>Disabled</i>, the notebook instance does not have internet access, and cannot connect to SageMaker AI training and endpoint services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access">Notebook Instances Are Internet-Enabled by Default</a>.</p>
   * @public
   */
  DirectInternetAccess?: DirectInternetAccess | undefined;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the notebook instance.</p>
   * @public
   */
  VolumeSizeInGB?: number | undefined;

  /**
   * <p>This parameter is no longer supported. Elastic Inference (EI) is no longer available.</p> <p>This parameter was used to specify a list of the EI instance types associated with this notebook instance.</p>
   * @public
   */
  AcceleratorTypes?: NotebookInstanceAcceleratorType[] | undefined;

  /**
   * <p>The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with SageMaker AI Notebook Instances</a>.</p>
   * @public
   */
  DefaultCodeRepository?: string | undefined;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with SageMaker AI Notebook Instances</a>.</p>
   * @public
   */
  AdditionalCodeRepositories?: string[] | undefined;

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance.</p> <note> <p>Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users.</p> </note>
   * @public
   */
  RootAccess?: RootAccess | undefined;

  /**
   * <p>The platform identifier of the notebook instance runtime environment.</p>
   * @public
   */
  PlatformIdentifier?: string | undefined;

  /**
   * <p>Information on the IMDS configuration of the notebook instance</p>
   * @public
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration to describe.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeNotebookInstanceLifecycleConfigOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigArn?: string | undefined;

  /**
   * <p>The name of the lifecycle configuration.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigName?: string | undefined;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance.</p>
   * @public
   */
  OnCreate?: NotebookInstanceLifecycleHook[] | undefined;

  /**
   * <p>The shell script that runs every time you start a notebook instance, including when you create the notebook instance.</p>
   * @public
   */
  OnStart?: NotebookInstanceLifecycleHook[] | undefined;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOptimizationJobRequest {
  /**
   * <p>The name that you assigned to the optimization job.</p>
   * @public
   */
  OptimizationJobName: string | undefined;
}

/**
 * <p>Output values produced by an optimization job.</p>
 * @public
 */
export interface OptimizationOutput {
  /**
   * <p>The image that SageMaker recommends that you use to host the optimized model that you created with an optimization job.</p>
   * @public
   */
  RecommendedInferenceImage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOptimizationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the optimization job.</p>
   * @public
   */
  OptimizationJobArn: string | undefined;

  /**
   * <p>The current status of the optimization job.</p>
   * @public
   */
  OptimizationJobStatus: OptimizationJobStatus | undefined;

  /**
   * <p>The time when the optimization job started.</p>
   * @public
   */
  OptimizationStartTime?: Date | undefined;

  /**
   * <p>The time when the optimization job finished processing.</p>
   * @public
   */
  OptimizationEndTime?: Date | undefined;

  /**
   * <p>The time when you created the optimization job.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time when the optimization job was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If the optimization job status is <code>FAILED</code>, the reason for the failure.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The name that you assigned to the optimization job.</p>
   * @public
   */
  OptimizationJobName: string | undefined;

  /**
   * <p>The location of the source model to optimize with an optimization job.</p>
   * @public
   */
  ModelSource: OptimizationJobModelSource | undefined;

  /**
   * <p>The environment variables to set in the model container.</p>
   * @public
   */
  OptimizationEnvironment?: Record<string, string> | undefined;

  /**
   * <p>The type of instance that hosts the optimized model that you create with the optimization job.</p>
   * @public
   */
  DeploymentInstanceType: OptimizationJobDeploymentInstanceType | undefined;

  /**
   * <p>Settings for each of the optimization techniques that the job applies.</p>
   * @public
   */
  OptimizationConfigs: OptimizationConfig[] | undefined;

  /**
   * <p>Details for where to store the optimized model that you create with the optimization job.</p>
   * @public
   */
  OutputConfig: OptimizationJobOutputConfig | undefined;

  /**
   * <p>Output values produced by an optimization job.</p>
   * @public
   */
  OptimizationOutput?: OptimizationOutput | undefined;

  /**
   * <p>The ARN of the IAM role that you assigned to the optimization job.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Specifies a limit to how long a job can run. When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs.</p> <p>To stop a training job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note>
   * @public
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>A VPC in Amazon VPC that your optimized model has access to.</p>
   * @public
   */
  VpcConfig?: OptimizationVpcConfig | undefined;
}

/**
 * @public
 */
export interface DescribePartnerAppRequest {
  /**
   * <p>The ARN of the SageMaker Partner AI App to describe.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>When set to <code>TRUE</code>, the response includes available upgrade information for the SageMaker Partner AI App. Default is <code>FALSE</code>.</p>
   * @public
   */
  IncludeAvailableUpgrade?: boolean | undefined;
}

/**
 * <p>This is an error field object that contains the error code and the reason for an operation failure.</p>
 * @public
 */
export interface ErrorInfo {
  /**
   * <p>The error code for an invalid or failed operation.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The failure reason for the operation.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface DescribePartnerAppResponse {
  /**
   * <p>The ARN of the SageMaker Partner AI App that was described.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the SageMaker Partner AI App.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of SageMaker Partner AI App. Must be one of the following: <code>lakera-guard</code>, <code>comet</code>, <code>deepchecks-llm-evaluation</code>, or <code>fiddler</code>.</p>
   * @public
   */
  Type?: PartnerAppType | undefined;

  /**
   * <p>The status of the SageMaker Partner AI App.</p> <ul> <li> <p>Creating: SageMaker AI is creating the partner AI app. The partner AI app is not available during creation.</p> </li> <li> <p>Updating: SageMaker AI is updating the partner AI app. The partner AI app is not available when updating.</p> </li> <li> <p>Deleting: SageMaker AI is deleting the partner AI app. The partner AI app is not available during deletion.</p> </li> <li> <p>Available: The partner AI app is provisioned and accessible.</p> </li> <li> <p>Failed: The partner AI app is in a failed state and isn't available. SageMaker AI is investigating the issue. For further guidance, contact Amazon Web Services Support.</p> </li> <li> <p>UpdateFailed: The partner AI app couldn't be updated but is available.</p> </li> <li> <p>Deleted: The partner AI app is permanently deleted and not available.</p> </li> </ul>
   * @public
   */
  Status?: PartnerAppStatus | undefined;

  /**
   * <p>The time that the SageMaker Partner AI App was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time that the SageMaker Partner AI App was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The ARN of the IAM role associated with the SageMaker Partner AI App.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services KMS customer managed key used to encrypt the data at rest associated with SageMaker Partner AI Apps.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The URL of the SageMaker Partner AI App that the Application SDK uses to support in-app calls for the user.</p>
   * @public
   */
  BaseUrl?: string | undefined;

  /**
   * <p>Maintenance configuration settings for the SageMaker Partner AI App.</p>
   * @public
   */
  MaintenanceConfig?: PartnerAppMaintenanceConfig | undefined;

  /**
   * <p>The instance type and size of the cluster attached to the SageMaker Partner AI App.</p>
   * @public
   */
  Tier?: string | undefined;

  /**
   * <p>The version of the SageMaker Partner AI App.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>Configuration settings for the SageMaker Partner AI App.</p>
   * @public
   */
  ApplicationConfig?: PartnerAppConfig | undefined;

  /**
   * <p>The authorization type that users use to access the SageMaker Partner AI App.</p>
   * @public
   */
  AuthType?: PartnerAppAuthType | undefined;

  /**
   * <p>When set to <code>TRUE</code>, the SageMaker Partner AI App sets the Amazon Web Services IAM session name or the authenticated IAM user as the identity of the SageMaker Partner AI App user.</p>
   * @public
   */
  EnableIamSessionBasedIdentity?: boolean | undefined;

  /**
   * <p>This is an error field object that contains the error code and the reason for an operation failure.</p>
   * @public
   */
  Error?: ErrorInfo | undefined;

  /**
   * <p>Indicates whether the SageMaker Partner AI App is configured for automatic minor version upgrades during scheduled maintenance windows.</p>
   * @public
   */
  EnableAutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The end-of-life date for the current version of the SageMaker Partner AI App.</p>
   * @public
   */
  CurrentVersionEolDate?: Date | undefined;

  /**
   * <p>A map of available minor version upgrades for the SageMaker Partner AI App. The key is the semantic version number, and the value is a list of release notes for that version. A null value indicates no upgrades are available.</p>
   * @public
   */
  AvailableUpgrade?: AvailableUpgrade | undefined;
}

/**
 * @public
 */
export interface DescribePipelineRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the pipeline to describe.</p>
   * @public
   */
  PipelineName: string | undefined;

  /**
   * <p>The ID of the pipeline version to describe.</p>
   * @public
   */
  PipelineVersionId?: number | undefined;
}

/**
 * @public
 */
export interface DescribePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  PipelineName?: string | undefined;

  /**
   * <p>The display name of the pipeline.</p>
   * @public
   */
  PipelineDisplayName?: string | undefined;

  /**
   * <p>The JSON pipeline definition.</p>
   * @public
   */
  PipelineDefinition?: string | undefined;

  /**
   * <p>The description of the pipeline.</p>
   * @public
   */
  PipelineDescription?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline uses to execute.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The status of the pipeline execution.</p>
   * @public
   */
  PipelineStatus?: PipelineStatus | undefined;

  /**
   * <p>The time when the pipeline was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time when the pipeline was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The time when the pipeline was last run.</p>
   * @public
   */
  LastRunTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>Lists the parallelism configuration applied to the pipeline.</p>
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;

  /**
   * <p>The display name of the pipeline version.</p>
   * @public
   */
  PipelineVersionDisplayName?: string | undefined;

  /**
   * <p>The description of the pipeline version.</p>
   * @public
   */
  PipelineVersionDescription?: string | undefined;
}

/**
 * @public
 */
export interface DescribePipelineDefinitionForExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn: string | undefined;
}

/**
 * @public
 */
export interface DescribePipelineDefinitionForExecutionResponse {
  /**
   * <p>The JSON pipeline definition.</p>
   * @public
   */
  PipelineDefinition?: string | undefined;

  /**
   * <p>The time when the pipeline was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn: string | undefined;
}

/**
 * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
 * @public
 */
export interface PipelineExperimentConfig {
  /**
   * <p>The name of the experiment.</p>
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * <p>The name of the trial.</p>
   * @public
   */
  TrialName?: string | undefined;
}

/**
 * <p>A step selected to run in selective execution mode.</p>
 * @public
 */
export interface SelectedStep {
  /**
   * <p>The name of the pipeline step.</p>
   * @public
   */
  StepName: string | undefined;
}

/**
 * <p>The selective execution configuration applied to the pipeline run.</p>
 * @public
 */
export interface SelectiveExecutionConfig {
  /**
   * <p>The ARN from a reference execution of the current pipeline. Used to copy input collaterals needed for the selected steps to run. The execution status of the pipeline can be either <code>Failed</code> or <code>Success</code>.</p> <p>This field is required if the steps you specify for <code>SelectedSteps</code> depend on output collaterals from any non-specified pipeline steps. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-selective-ex.html">Selective Execution for Pipeline Steps</a>.</p>
   * @public
   */
  SourcePipelineExecutionArn?: string | undefined;

  /**
   * <p>A list of pipeline steps to run. All step(s) in all path(s) between two selected steps should be included.</p>
   * @public
   */
  SelectedSteps: SelectedStep[] | undefined;
}

/**
 * @public
 */
export interface DescribePipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn?: string | undefined;

  /**
   * <p>The display name of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDisplayName?: string | undefined;

  /**
   * <p>The status of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionStatus?: PipelineExecutionStatus | undefined;

  /**
   * <p>The description of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDescription?: string | undefined;

  /**
   * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
   * @public
   */
  PipelineExperimentConfig?: PipelineExperimentConfig | undefined;

  /**
   * <p>If the execution failed, a message describing why.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The time when the pipeline execution was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time when the pipeline execution was modified last.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>The parallelism configuration applied to the pipeline.</p>
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;

  /**
   * <p>The selective execution configuration applied to the pipeline run.</p>
   * @public
   */
  SelectiveExecutionConfig?: SelectiveExecutionConfig | undefined;

  /**
   * <p>The ID of the pipeline version.</p>
   * @public
   */
  PipelineVersionId?: number | undefined;
}

/**
 * @public
 */
export interface DescribeProcessingJobRequest {
  /**
   * <p>The name of the processing job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  ProcessingJobName: string | undefined;
}

/**
 * @public
 */
export interface DescribeProcessingJobResponse {
  /**
   * <p>The inputs for a processing job.</p>
   * @public
   */
  ProcessingInputs?: ProcessingInput[] | undefined;

  /**
   * <p>Output configuration for the processing job.</p>
   * @public
   */
  ProcessingOutputConfig?: ProcessingOutputConfig | undefined;

  /**
   * <p>The name of the processing job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.</p>
   * @public
   */
  ProcessingResources: ProcessingResources | undefined;

  /**
   * <p>The time limit for how long the processing job is allowed to run.</p>
   * @public
   */
  StoppingCondition?: ProcessingStoppingCondition | undefined;

  /**
   * <p>Configures the processing job to run a specified container image.</p>
   * @public
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * <p>The environment variables set in the Docker container.</p>
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * <p>Networking options for a processing job.</p>
   * @public
   */
  NetworkConfig?: NetworkConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The configuration information used to create an experiment.</p>
   * @public
   */
  ExperimentConfig?: ExperimentConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   * @public
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>Provides the status of a processing job.</p>
   * @public
   */
  ProcessingJobStatus: ProcessingJobStatus | undefined;

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing container when the processing job exits.</p>
   * @public
   */
  ExitMessage?: string | undefined;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if it failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The time at which the processing job completed.</p>
   * @public
   */
  ProcessingEndTime?: Date | undefined;

  /**
   * <p>The time at which the processing job started.</p>
   * @public
   */
  ProcessingStartTime?: Date | undefined;

  /**
   * <p>The time at which the processing job was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The time at which the processing job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing job.</p>
   * @public
   */
  MonitoringScheduleArn?: string | undefined;

  /**
   * <p>The ARN of an AutoML job associated with this processing job.</p>
   * @public
   */
  AutoMLJobArn?: string | undefined;

  /**
   * <p>The ARN of a training job associated with this processing job.</p>
   * @public
   */
  TrainingJobArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProjectInput {
  /**
   * <p>The name of the project to describe.</p>
   * @public
   */
  ProjectName: string | undefined;
}

/**
 * <p>Details of a provisioned service catalog product. For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.</p>
 * @public
 */
export interface ServiceCatalogProvisionedProductDetails {
  /**
   * <p>The ID of the provisioned product.</p>
   * @public
   */
  ProvisionedProductId?: string | undefined;

  /**
   * <p>The current status of the product.</p> <ul> <li> <p> <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most recent operation succeeded and completed.</p> </li> <li> <p> <code>UNDER_CHANGE</code> - Transitive state. Operations performed might not have valid results. Wait for an AVAILABLE status before performing operations.</p> </li> <li> <p> <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.</p> </li> <li> <p> <code>ERROR</code> - An unexpected error occurred. The provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p> </li> <li> <p> <code>PLAN_IN_PROGRESS</code> - Transitive state. The plan operations were performed to provision a new product, but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an AVAILABLE status before performing operations.</p> </li> </ul>
   * @public
   */
  ProvisionedProductStatusMessage?: string | undefined;
}

/**
 * <p> Details about a template provider configuration and associated provisioning information. </p>
 * @public
 */
export interface TemplateProviderDetail {
  /**
   * <p> Details about a CloudFormation template provider configuration and associated provisioning information. </p>
   * @public
   */
  CfnTemplateProviderDetail?: CfnTemplateProviderDetail | undefined;
}

/**
 * @public
 */
export interface DescribeProjectOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  ProjectName: string | undefined;

  /**
   * <p>The ID of the project.</p>
   * @public
   */
  ProjectId: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  ProjectDescription?: string | undefined;

  /**
   * <p>Information used to provision a service catalog product. For information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.</p>
   * @public
   */
  ServiceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails | undefined;

  /**
   * <p>Information about a provisioned service catalog product.</p>
   * @public
   */
  ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails | undefined;

  /**
   * <p>The status of the project.</p>
   * @public
   */
  ProjectStatus: ProjectStatus | undefined;

  /**
   * <p> An array of template providers associated with the project. </p>
   * @public
   */
  TemplateProviderDetails?: TemplateProviderDetail[] | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>The time when the project was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The timestamp when project was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified a SageMaker resource.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;
}

/**
 * @public
 */
export interface DescribeReservedCapacityRequest {
  /**
   * <p>ARN of the reserved capacity to describe.</p>
   * @public
   */
  ReservedCapacityArn: string | undefined;
}

/**
 * <p>A summary of UltraServer resources and their current status.</p>
 * @public
 */
export interface UltraServerSummary {
  /**
   * <p>The type of UltraServer, such as ml.u-p6e-gb200x72.</p>
   * @public
   */
  UltraServerType: string | undefined;

  /**
   * <p>The Amazon EC2 instance type used in the UltraServer.</p>
   * @public
   */
  InstanceType: ReservedCapacityInstanceType | undefined;

  /**
   * <p>The number of UltraServers of this type.</p>
   * @public
   */
  UltraServerCount?: number | undefined;

  /**
   * <p>The number of available spare instances in the UltraServers.</p>
   * @public
   */
  AvailableSpareInstanceCount?: number | undefined;

  /**
   * <p>The total number of instances across all UltraServers of this type that are currently in an unhealthy state.</p>
   * @public
   */
  UnhealthyInstanceCount?: number | undefined;
}

/**
 * @public
 */
export interface DescribeReservedCapacityResponse {
  /**
   * <p>ARN of the reserved capacity.</p>
   * @public
   */
  ReservedCapacityArn: string | undefined;

  /**
   * <p>The type of reserved capacity.</p>
   * @public
   */
  ReservedCapacityType?: ReservedCapacityType | undefined;

  /**
   * <p>The current status of the reserved capacity.</p>
   * @public
   */
  Status?: ReservedCapacityStatus | undefined;

  /**
   * <p>The Availability Zone where the reserved capacity is provisioned.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The total duration of the reserved capacity in hours.</p>
   * @public
   */
  DurationHours?: number | undefined;

  /**
   * <p>The number of minutes for the duration of the reserved capacity. For example, if a reserved capacity starts at 08:55 and ends at 11:30, the minutes field would be 35.</p>
   * @public
   */
  DurationMinutes?: number | undefined;

  /**
   * <p>The timestamp when the reserved capacity becomes active.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The timestamp when the reserved capacity expires.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The Amazon EC2 instance type used in the reserved capacity.</p>
   * @public
   */
  InstanceType: ReservedCapacityInstanceType | undefined;

  /**
   * <p>The total number of instances allocated to this reserved capacity.</p>
   * @public
   */
  TotalInstanceCount: number | undefined;

  /**
   * <p>The number of instances currently available for use in this reserved capacity.</p>
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * <p>The number of instances currently in use from this reserved capacity.</p>
   * @public
   */
  InUseInstanceCount?: number | undefined;

  /**
   * <p>A summary of the UltraServer associated with this reserved capacity.</p>
   * @public
   */
  UltraServerSummary?: UltraServerSummary | undefined;
}

/**
 * @public
 */
export interface DescribeSpaceRequest {
  /**
   * <p>The ID of the associated domain.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  SpaceName: string | undefined;
}

/**
 * @public
 */
export interface DescribeSpaceResponse {
  /**
   * <p>The ID of the associated domain.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The space's Amazon Resource Name (ARN).</p>
   * @public
   */
  SpaceArn?: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  SpaceName?: string | undefined;

  /**
   * <p>The ID of the space's profile in the Amazon EFS volume.</p>
   * @public
   */
  HomeEfsFileSystemUid?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: SpaceStatus | undefined;

  /**
   * <p>The last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The failure reason.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>A collection of space settings.</p>
   * @public
   */
  SpaceSettings?: SpaceSettings | undefined;

  /**
   * <p>The collection of ownership settings for a space.</p>
   * @public
   */
  OwnershipSettings?: OwnershipSettings | undefined;

  /**
   * <p>The collection of space sharing settings for a space.</p>
   * @public
   */
  SpaceSharingSettings?: SpaceSharingSettings | undefined;

  /**
   * <p>The name of the space that appears in the Amazon SageMaker Studio UI.</p>
   * @public
   */
  SpaceDisplayName?: string | undefined;

  /**
   * <p>Returns the URL of the space. If the space is created with Amazon Web Services IAM Identity Center (Successor to Amazon Web Services Single Sign-On) authentication, users can navigate to the URL after appending the respective redirect parameter for the application type to be federated through Amazon Web Services IAM Identity Center.</p> <p>The following application types are supported:</p> <ul> <li> <p>Studio Classic: <code>&amp;redirect=JupyterServer</code> </p> </li> <li> <p>JupyterLab: <code>&amp;redirect=JupyterLab</code> </p> </li> <li> <p>Code Editor, based on Code-OSS, Visual Studio Code - Open Source: <code>&amp;redirect=CodeEditor</code> </p> </li> </ul>
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStudioLifecycleConfigRequest {
  /**
   * <p>The name of the Amazon SageMaker AI Studio Lifecycle Configuration to describe.</p>
   * @public
   */
  StudioLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeStudioLifecycleConfigResponse {
  /**
   * <p>The ARN of the Lifecycle Configuration to describe.</p>
   * @public
   */
  StudioLifecycleConfigArn?: string | undefined;

  /**
   * <p>The name of the Amazon SageMaker AI Studio Lifecycle Configuration that is described.</p>
   * @public
   */
  StudioLifecycleConfigName?: string | undefined;

  /**
   * <p>The creation time of the Amazon SageMaker AI Studio Lifecycle Configuration.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>This value is equivalent to CreationTime because Amazon SageMaker AI Studio Lifecycle Configurations are immutable.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The content of your Amazon SageMaker AI Studio Lifecycle Configuration script.</p>
   * @public
   */
  StudioLifecycleConfigContent?: string | undefined;

  /**
   * <p>The App type that the Lifecycle Configuration is attached to.</p>
   * @public
   */
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType | undefined;
}

/**
 * @public
 */
export interface DescribeSubscribedWorkteamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the subscribed work team to describe.</p>
   * @public
   */
  WorkteamArn: string | undefined;
}

/**
 * <p>Describes a work team of a vendor that does the labelling job.</p>
 * @public
 */
export interface SubscribedWorkteam {
  /**
   * <p>The Amazon Resource Name (ARN) of the vendor that you have subscribed.</p>
   * @public
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The title of the service provided by the vendor in the Amazon Marketplace.</p>
   * @public
   */
  MarketplaceTitle?: string | undefined;

  /**
   * <p>The name of the vendor in the Amazon Marketplace.</p>
   * @public
   */
  SellerName?: string | undefined;

  /**
   * <p>The description of the vendor from the Amazon Marketplace.</p>
   * @public
   */
  MarketplaceDescription?: string | undefined;

  /**
   * <p>Marketplace product listing ID.</p>
   * @public
   */
  ListingId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubscribedWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> instance that contains information about the work team.</p>
   * @public
   */
  SubscribedWorkteam: SubscribedWorkteam | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingJobRequest {
  /**
   * <p>The name of the training job.</p>
   * @public
   */
  TrainingJobName: string | undefined;
}

/**
 * <p>The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.</p>
 * @public
 */
export interface MetricData {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The value of the metric.</p>
   * @public
   */
  Value?: number | undefined;

  /**
   * <p>The date and time that the algorithm emitted the metric.</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * <p>Information about the status of the rule evaluation.</p>
 * @public
 */
export interface ProfilerRuleEvaluationStatus {
  /**
   * <p>The name of the rule configuration.</p>
   * @public
   */
  RuleConfigurationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule evaluation job.</p>
   * @public
   */
  RuleEvaluationJobArn?: string | undefined;

  /**
   * <p>Status of the rule evaluation.</p>
   * @public
   */
  RuleEvaluationStatus?: RuleEvaluationStatus | undefined;

  /**
   * <p>Details from the rule evaluation.</p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>Timestamp when the rule evaluation status was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * <p>An array element of <code>SecondaryStatusTransitions</code> for <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrainingJob.html">DescribeTrainingJob</a>. It provides additional details about a status that the training job has transitioned through. A training job can be in one of several states, for example, starting, downloading, training, or uploading. Within each state, there are a number of intermediate states. For example, within the starting state, SageMaker could be starting the training job or launching the ML instances. These transitional states are referred to as the job's secondary status. </p> <p/>
 * @public
 */
export interface SecondaryStatusTransition {
  /**
   * <p>Contains a secondary status information from a training job.</p> <p>Status might be one of the following secondary statuses:</p> <dl> <dt>InProgress</dt> <dd> <ul> <li> <p> <code>Starting</code> - Starting the training job.</p> </li> <li> <p> <code>Downloading</code> - An optional stage for algorithms that support <code>File</code> training input mode. It indicates that data is being downloaded to the ML storage volumes.</p> </li> <li> <p> <code>Training</code> - Training is in progress.</p> </li> <li> <p> <code>Uploading</code> - Training is complete and the model artifacts are being uploaded to the S3 location.</p> </li> </ul> </dd> <dt>Completed</dt> <dd> <ul> <li> <p> <code>Completed</code> - The training job has completed.</p> </li> </ul> </dd> <dt>Failed</dt> <dd> <ul> <li> <p> <code>Failed</code> - The training job has failed. The reason for the failure is returned in the <code>FailureReason</code> field of <code>DescribeTrainingJobResponse</code>.</p> </li> </ul> </dd> <dt>Stopped</dt> <dd> <ul> <li> <p> <code>MaxRuntimeExceeded</code> - The job stopped because it exceeded the maximum allowed runtime.</p> </li> <li> <p> <code>Stopped</code> - The training job has stopped.</p> </li> </ul> </dd> <dt>Stopping</dt> <dd> <ul> <li> <p> <code>Stopping</code> - Stopping the training job.</p> </li> </ul> </dd> </dl> <p>We no longer support the following secondary statuses:</p> <ul> <li> <p> <code>LaunchingMLInstances</code> </p> </li> <li> <p> <code>PreparingTrainingStack</code> </p> </li> <li> <p> <code>DownloadingTrainingImage</code> </p> </li> </ul>
   * @public
   */
  Status: SecondaryStatus | undefined;

  /**
   * <p>A timestamp that shows when the training job transitioned to the current secondary status state.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the training job transitioned out of this secondary status state into another secondary status state or when the training job has ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>A detailed description of the progress within a secondary status. </p> <p>SageMaker provides secondary statuses and status messages that apply to each of them:</p> <dl> <dt>Starting</dt> <dd> <ul> <li> <p>Starting the training job.</p> </li> <li> <p>Launching requested ML instances.</p> </li> <li> <p>Insufficient capacity error from EC2 while launching instances, retrying!</p> </li> <li> <p>Launched instance was unhealthy, replacing it!</p> </li> <li> <p>Preparing the instances for training.</p> </li> </ul> </dd> <dt>Training</dt> <dd> <ul> <li> <p>Training image download completed. Training in progress.</p> </li> </ul> </dd> </dl> <important> <p>Status messages are subject to change. Therefore, we recommend not including them in code that programmatically initiates actions. For examples, don't use status messages in if statements.</p> </important> <p>To have an overview of your training job's progress, view <code>TrainingJobStatus</code> and <code>SecondaryStatus</code> in <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrainingJob.html">DescribeTrainingJob</a>, and <code>StatusMessage</code> together. For example, at the start of a training job, you might see the following:</p> <ul> <li> <p> <code>TrainingJobStatus</code> - InProgress</p> </li> <li> <p> <code>SecondaryStatus</code> - Training</p> </li> <li> <p> <code>StatusMessage</code> - Downloading the training image</p> </li> </ul>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>Status and billing information about the warm pool.</p>
 * @public
 */
export interface WarmPoolStatus {
  /**
   * <p>The status of the warm pool.</p> <ul> <li> <p> <code>InUse</code>: The warm pool is in use for the training job.</p> </li> <li> <p> <code>Available</code>: The warm pool is available to reuse for a matching training job.</p> </li> <li> <p> <code>Reused</code>: The warm pool moved to a matching training job for reuse.</p> </li> <li> <p> <code>Terminated</code>: The warm pool is no longer available. Warm pools are unavailable if they are terminated by a user, terminated for a patch update, or terminated for exceeding the specified <code>KeepAlivePeriodInSeconds</code>.</p> </li> </ul>
   * @public
   */
  Status: WarmPoolResourceStatus | undefined;

  /**
   * <p>The billable time in seconds used by the warm pool. Billable time refers to the absolute wall-clock time.</p> <p>Multiply <code>ResourceRetainedBillableTimeInSeconds</code> by the number of instances (<code>InstanceCount</code>) in your training cluster to get the total compute time SageMaker bills you if you run warm pool training. The formula is as follows: <code>ResourceRetainedBillableTimeInSeconds * InstanceCount</code>.</p>
   * @public
   */
  ResourceRetainedBillableTimeInSeconds?: number | undefined;

  /**
   * <p>The name of the matching training job that reused the warm pool.</p>
   * @public
   */
  ReusedByJob?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingJobResponse {
  /**
   * <p> Name of the model training job. </p>
   * @public
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   * @public
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the training job was launched by a hyperparameter tuning job.</p>
   * @public
   */
  TuningJobArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SageMaker Ground Truth labeling job that created the transform or training job.</p>
   * @public
   */
  LabelingJobArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an AutoML job.</p>
   * @public
   */
  AutoMLJobArn?: string | undefined;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model artifacts. </p>
   * @public
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * <p>The status of the training job.</p> <p>SageMaker provides the following training job statuses:</p> <ul> <li> <p> <code>InProgress</code> - The training is in progress.</p> </li> <li> <p> <code>Completed</code> - The training job has completed.</p> </li> <li> <p> <code>Failed</code> - The training job has failed. To see the reason for the failure, see the <code>FailureReason</code> field in the response to a <code>DescribeTrainingJobResponse</code> call.</p> </li> <li> <p> <code>Stopping</code> - The training job is stopping.</p> </li> <li> <p> <code>Stopped</code> - The training job has stopped.</p> </li> </ul> <p>For more detailed information, see <code>SecondaryStatus</code>. </p>
   * @public
   */
  TrainingJobStatus: TrainingJobStatus | undefined;

  /**
   * <p> Provides detailed information about the state of the training job. For detailed information on the secondary status of the training job, see <code>StatusMessage</code> under <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SecondaryStatusTransition.html">SecondaryStatusTransition</a>.</p> <p>SageMaker provides primary statuses and secondary statuses that apply to each of them:</p> <dl> <dt>InProgress</dt> <dd> <ul> <li> <p> <code>Starting</code> - Starting the training job.</p> </li> <li> <p> <code>Downloading</code> - An optional stage for algorithms that support <code>File</code> training input mode. It indicates that data is being downloaded to the ML storage volumes.</p> </li> <li> <p> <code>Training</code> - Training is in progress.</p> </li> <li> <p> <code>Interrupted</code> - The job stopped because the managed spot training instances were interrupted. </p> </li> <li> <p> <code>Uploading</code> - Training is complete and the model artifacts are being uploaded to the S3 location.</p> </li> </ul> </dd> <dt>Completed</dt> <dd> <ul> <li> <p> <code>Completed</code> - The training job has completed.</p> </li> </ul> </dd> <dt>Failed</dt> <dd> <ul> <li> <p> <code>Failed</code> - The training job has failed. The reason for the failure is returned in the <code>FailureReason</code> field of <code>DescribeTrainingJobResponse</code>.</p> </li> </ul> </dd> <dt>Stopped</dt> <dd> <ul> <li> <p> <code>MaxRuntimeExceeded</code> - The job stopped because it exceeded the maximum allowed runtime.</p> </li> <li> <p> <code>MaxWaitTimeExceeded</code> - The job stopped because it exceeded the maximum allowed wait time.</p> </li> <li> <p> <code>Stopped</code> - The training job has stopped.</p> </li> </ul> </dd> <dt>Stopping</dt> <dd> <ul> <li> <p> <code>Stopping</code> - Stopping the training job.</p> </li> </ul> </dd> </dl> <important> <p>Valid values for <code>SecondaryStatus</code> are subject to change. </p> </important> <p>We no longer support the following secondary statuses:</p> <ul> <li> <p> <code>LaunchingMLInstances</code> </p> </li> <li> <p> <code>PreparingTraining</code> </p> </li> <li> <p> <code>DownloadingTrainingImage</code> </p> </li> </ul>
   * @public
   */
  SecondaryStatus: SecondaryStatus | undefined;

  /**
   * <p>If the training job failed, the reason it failed. </p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Algorithm-specific parameters. </p>
   * @public
   */
  HyperParameters?: Record<string, string> | undefined;

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata. </p>
   * @public
   */
  AlgorithmSpecification?: AlgorithmSpecification | undefined;

  /**
   * <p>The Amazon Web Services Identity and Access Management (IAM) role configured for the training job. </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input channel. </p>
   * @public
   */
  InputDataConfig?: Channel[] | undefined;

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are stored. SageMaker creates subfolders for model artifacts. </p>
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are configured for model training. </p>
   * @public
   */
  ResourceConfig?: ResourceConfig | undefined;

  /**
   * <p>The status of the warm pool associated with the training job.</p>
   * @public
   */
  WarmPoolStatus?: WarmPoolStatus | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that this training job has access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>.</p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long a managed Spot training job has to complete. When the job reaches the time limit, SageMaker ends the training job. Use this API to cap model training costs.</p> <p>To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p>
   * @public
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>A timestamp that indicates when the training job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are billed for the time interval between this time and the value of <code>TrainingEndTime</code>. The start time in CloudWatch Logs might be later than this time. The difference is due to the time it takes to download the training data and to the size of the training container.</p>
   * @public
   */
  TrainingStartTime?: Date | undefined;

  /**
   * <p>Indicates the time when the training job ends on training instances. You are billed for the time interval between the value of <code>TrainingStartTime</code> and this time. For successful jobs and stopped jobs, this is the time after model artifacts are uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   * @public
   */
  TrainingEndTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the status of the training job was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>A history of all of the secondary statuses that the training job has transitioned through.</p>
   * @public
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[] | undefined;

  /**
   * <p>A collection of <code>MetricData</code> objects that specify the names, values, and dates and times that the training algorithm emitted to Amazon CloudWatch.</p>
   * @public
   */
  FinalMetricDataList?: MetricData[] | undefined;

  /**
   * <p>If you want to allow inbound or outbound network calls, except for calls between peers within a training cluster for distributed training, choose <code>True</code>. If you enable network isolation for training jobs that are configured to use a VPC, SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.</p>
   * @public
   */
  EnableNetworkIsolation?: boolean | undefined;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training, choose <code>True</code>. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithms in distributed training.</p>
   * @public
   */
  EnableInterContainerTrafficEncryption?: boolean | undefined;

  /**
   * <p>A Boolean indicating whether managed spot training is enabled (<code>True</code>) or not (<code>False</code>).</p>
   * @public
   */
  EnableManagedSpotTraining?: boolean | undefined;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint data. </p>
   * @public
   */
  CheckpointConfig?: CheckpointConfig | undefined;

  /**
   * <p>The training time in seconds.</p>
   * @public
   */
  TrainingTimeInSeconds?: number | undefined;

  /**
   * <p>The billable time in seconds. Billable time refers to the absolute wall-clock time.</p> <p>Multiply <code>BillableTimeInSeconds</code> by the number of instances (<code>InstanceCount</code>) in your training cluster to get the total compute time SageMaker bills you if you run distributed training. The formula is as follows: <code>BillableTimeInSeconds * InstanceCount</code> .</p> <p>You can calculate the savings from using managed spot training using the formula <code>(1 - BillableTimeInSeconds / TrainingTimeInSeconds) * 100</code>. For example, if <code>BillableTimeInSeconds</code> is 100 and <code>TrainingTimeInSeconds</code> is 500, the savings is 80%.</p>
   * @public
   */
  BillableTimeInSeconds?: number | undefined;

  /**
   * <p>Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the <code>DebugHookConfig</code> parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
   * @public
   */
  DebugHookConfig?: DebugHookConfig | undefined;

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html">CreateProcessingJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html">CreateTransformJob</a> </p> </li> </ul>
   * @public
   */
  ExperimentConfig?: ExperimentConfig | undefined;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger rules for debugging output tensors.</p>
   * @public
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[] | undefined;

  /**
   * <p>Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.</p>
   * @public
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig | undefined;

  /**
   * <p>Evaluation status of Amazon SageMaker Debugger rules for debugging on a training job.</p>
   * @public
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[] | undefined;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and storage paths.</p>
   * @public
   */
  ProfilerConfig?: ProfilerConfig | undefined;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger rules for profiling system and framework metrics.</p>
   * @public
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[] | undefined;

  /**
   * <p>Evaluation status of Amazon SageMaker Debugger rules for profiling on a training job.</p>
   * @public
   */
  ProfilerRuleEvaluationStatuses?: ProfilerRuleEvaluationStatus[] | undefined;

  /**
   * <p>Profiling status of a training job.</p>
   * @public
   */
  ProfilingStatus?: ProfilingStatus | undefined;

  /**
   * <p>The environment variables to set in the Docker container.</p> <important> <p>Do not include any security-sensitive information including account access IDs, secrets, or tokens in any environment fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request environment variable or plain text fields.</p> </important>
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * <p>The number of times to retry the job when the job fails due to an <code>InternalServerError</code>.</p>
   * @public
   */
  RetryStrategy?: RetryStrategy | undefined;

  /**
   * <p>Configuration for remote debugging. To learn more about the remote debugging functionality of SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html">Access a training container through Amazon Web Services Systems Manager (SSM) for remote debugging</a>.</p>
   * @public
   */
  RemoteDebugConfig?: RemoteDebugConfig | undefined;

  /**
   * <p>Contains information about the infrastructure health check configuration for the training job.</p>
   * @public
   */
  InfraCheckConfig?: InfraCheckConfig | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingPlanRequest {
  /**
   * <p>The name of the training plan to describe.</p>
   * @public
   */
  TrainingPlanName: string | undefined;
}

/**
 * <p>Details of a reserved capacity for the training plan.</p> <p>For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingPlan.html">CreateTrainingPlan</a> </code>.</p>
 * @public
 */
export interface ReservedCapacitySummary {
  /**
   * <p>The Amazon Resource Name (ARN); of the reserved capacity.</p>
   * @public
   */
  ReservedCapacityArn: string | undefined;

  /**
   * <p>The type of reserved capacity.</p>
   * @public
   */
  ReservedCapacityType?: ReservedCapacityType | undefined;

  /**
   * <p>The type of UltraServer included in this reserved capacity, such as ml.u-p6e-gb200x72.</p>
   * @public
   */
  UltraServerType?: string | undefined;

  /**
   * <p>The number of UltraServers included in this reserved capacity.</p>
   * @public
   */
  UltraServerCount?: number | undefined;

  /**
   * <p>The instance type for the reserved capacity.</p>
   * @public
   */
  InstanceType: ReservedCapacityInstanceType | undefined;

  /**
   * <p>The total number of instances in the reserved capacity.</p>
   * @public
   */
  TotalInstanceCount: number | undefined;

  /**
   * <p>The current status of the reserved capacity.</p>
   * @public
   */
  Status: ReservedCapacityStatus | undefined;

  /**
   * <p>The availability zone for the reserved capacity.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The number of whole hours in the total duration for this reserved capacity.</p>
   * @public
   */
  DurationHours?: number | undefined;

  /**
   * <p>The additional minutes beyond whole hours in the total duration for this reserved capacity.</p>
   * @public
   */
  DurationMinutes?: number | undefined;

  /**
   * <p>The start time of the reserved capacity.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time of the reserved capacity.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingPlanResponse {
  /**
   * <p>The Amazon Resource Name (ARN); of the training plan.</p>
   * @public
   */
  TrainingPlanArn: string | undefined;

  /**
   * <p>The name of the training plan.</p>
   * @public
   */
  TrainingPlanName: string | undefined;

  /**
   * <p>The current status of the training plan (e.g., Pending, Active, Expired). To see the complete list of status values available for a training plan, refer to the <code>Status</code> attribute within the <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingPlanSummary.html">TrainingPlanSummary</a> </code> object.</p>
   * @public
   */
  Status: TrainingPlanStatus | undefined;

  /**
   * <p>A message providing additional information about the current status of the training plan.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The number of whole hours in the total duration for this training plan.</p>
   * @public
   */
  DurationHours?: number | undefined;

  /**
   * <p>The additional minutes beyond whole hours in the total duration for this training plan.</p>
   * @public
   */
  DurationMinutes?: number | undefined;

  /**
   * <p>The start time of the training plan.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time of the training plan.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The upfront fee for the training plan.</p>
   * @public
   */
  UpfrontFee?: string | undefined;

  /**
   * <p>The currency code for the upfront fee (e.g., USD).</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The total number of instances reserved in this training plan.</p>
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * <p>The number of instances currently available for use in this training plan.</p>
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * <p>The number of instances currently in use from this training plan.</p>
   * @public
   */
  InUseInstanceCount?: number | undefined;

  /**
   * <p>The number of instances in the training plan that are currently in an unhealthy state.</p>
   * @public
   */
  UnhealthyInstanceCount?: number | undefined;

  /**
   * <p>The number of available spare instances in the training plan.</p>
   * @public
   */
  AvailableSpareInstanceCount?: number | undefined;

  /**
   * <p>The total number of UltraServers reserved to this training plan.</p>
   * @public
   */
  TotalUltraServerCount?: number | undefined;

  /**
   * <p>The target resources (e.g., SageMaker Training Jobs, SageMaker HyperPod) that can use this training plan.</p> <p>Training plans are specific to their target resource.</p> <ul> <li> <p>A training plan designed for SageMaker training jobs can only be used to schedule and run training jobs.</p> </li> <li> <p>A training plan for HyperPod clusters can be used exclusively to provide compute resources to a cluster's instance group.</p> </li> </ul>
   * @public
   */
  TargetResources?: SageMakerResourceName[] | undefined;

  /**
   * <p>The list of Reserved Capacity providing the underlying compute resources of the plan. </p>
   * @public
   */
  ReservedCapacitySummaries?: ReservedCapacitySummary[] | undefined;
}

/**
 * @public
 */
export interface DescribeTransformJobRequest {
  /**
   * <p>The name of the transform job that you want to view details of.</p>
   * @public
   */
  TransformJobName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransformJobResponse {
  /**
   * <p>The name of the transform job.</p>
   * @public
   */
  TransformJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   * @public
   */
  TransformJobArn: string | undefined;

  /**
   * <p>The status of the transform job. If the transform job failed, the reason is returned in the <code>FailureReason</code> field.</p>
   * @public
   */
  TransformJobStatus: TransformJobStatus | undefined;

  /**
   * <p>If the transform job failed, <code>FailureReason</code> describes why it failed. A transform job creates a log file, which includes error messages, and stores it as an Amazon S3 object. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/logging-cloudwatch.html">Log Amazon SageMaker Events with Amazon CloudWatch</a>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The name of the model used in the transform job.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The maximum number of parallel requests on each instance node that can be launched in a transform job. The default value is 1.</p>
   * @public
   */
  MaxConcurrentTransforms?: number | undefined;

  /**
   * <p>The timeout and maximum number of retries for processing a transform job invocation.</p>
   * @public
   */
  ModelClientConfig?: ModelClientConfig | undefined;

  /**
   * <p>The maximum payload size, in MB, used in the transform job.</p>
   * @public
   */
  MaxPayloadInMB?: number | undefined;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference request. A <i>record</i> <i/> is a single unit of input data that inference can be made on. For example, a single line in a CSV file is a record. </p> <p>To enable the batch strategy, you must set <code>SplitType</code> to <code>Line</code>, <code>RecordIO</code>, or <code>TFRecord</code>.</p>
   * @public
   */
  BatchStrategy?: BatchStrategy | undefined;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.</p>
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * <p>Describes the dataset to be transformed and the Amazon S3 location where it is stored.</p>
   * @public
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</p>
   * @public
   */
  TransformOutput?: TransformOutput | undefined;

  /**
   * <p>Configuration to control how SageMaker captures inference data.</p>
   * @public
   */
  DataCaptureConfig?: BatchDataCaptureConfig | undefined;

  /**
   * <p>Describes the resources, including ML instance types and ML instance count, to use for the transform job.</p>
   * @public
   */
  TransformResources: TransformResources | undefined;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Indicates when the transform job starts on ML instances. You are billed for the time interval between this time and the value of <code>TransformEndTime</code>.</p>
   * @public
   */
  TransformStartTime?: Date | undefined;

  /**
   * <p>Indicates when the transform job has been completed, or has stopped or failed. You are billed for the time interval between this time and the value of <code>TransformStartTime</code>.</p>
   * @public
   */
  TransformEndTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the transform or training job.</p>
   * @public
   */
  LabelingJobArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML transform job.</p>
   * @public
   */
  AutoMLJobArn?: string | undefined;

  /**
   * <p>The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction Results with their Corresponding Input Records</a>.</p>
   * @public
   */
  DataProcessing?: DataProcessing | undefined;

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html">CreateProcessingJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html">CreateTransformJob</a> </p> </li> </ul>
   * @public
   */
  ExperimentConfig?: ExperimentConfig | undefined;
}

/**
 * @public
 */
export interface DescribeTrialRequest {
  /**
   * <p>The name of the trial to describe.</p>
   * @public
   */
  TrialName: string | undefined;
}

/**
 * <p>The source of the trial.</p>
 * @public
 */
export interface TrialSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   * @public
   */
  SourceType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrialResponse {
  /**
   * <p>The name of the trial.</p>
   * @public
   */
  TrialName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   * @public
   */
  TrialArn?: string | undefined;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified, <code>TrialName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The name of the experiment the trial is part of.</p>
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
   * @public
   */
  Source?: TrialSource | undefined;

  /**
   * <p>When the trial was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Who created the trial.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>When the trial was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Who last modified the trial.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;
}

/**
 * @public
 */
export interface DescribeTrialComponentRequest {
  /**
   * <p>The name of the trial component to describe.</p>
   * @public
   */
  TrialComponentName: string | undefined;
}

/**
 * <p>A summary of the metrics of a trial component.</p>
 * @public
 */
export interface TrialComponentMetricSummary {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>When the metric was last updated.</p>
   * @public
   */
  TimeStamp?: Date | undefined;

  /**
   * <p>The maximum value of the metric.</p>
   * @public
   */
  Max?: number | undefined;

  /**
   * <p>The minimum value of the metric.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The most recent value of the metric.</p>
   * @public
   */
  Last?: number | undefined;

  /**
   * <p>The number of samples used to generate the metric.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The average value of the metric.</p>
   * @public
   */
  Avg?: number | undefined;

  /**
   * <p>The standard deviation of the metric.</p>
   * @public
   */
  StdDev?: number | undefined;
}

/**
 * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
 * @public
 */
export interface TrialComponentSource {
  /**
   * <p>The source Amazon Resource Name (ARN).</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   * @public
   */
  SourceType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrialComponentResponse {
  /**
   * <p>The name of the trial component.</p>
   * @public
   */
  TrialComponentName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   * @public
   */
  TrialComponentArn?: string | undefined;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
   * @public
   */
  Source?: TrialComponentSource | undefined;

  /**
   * <p>The status of the component. States include:</p> <ul> <li> <p>InProgress</p> </li> <li> <p>Completed</p> </li> <li> <p>Failed</p> </li> </ul>
   * @public
   */
  Status?: TrialComponentStatus | undefined;

  /**
   * <p>When the component started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>When the component ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>When the component was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Who created the trial component.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>When the component was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Who last modified the component.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>The hyperparameters of the component.</p>
   * @public
   */
  Parameters?: Record<string, TrialComponentParameterValue> | undefined;

  /**
   * <p>The input artifacts of the component.</p>
   * @public
   */
  InputArtifacts?: Record<string, TrialComponentArtifact> | undefined;

  /**
   * <p>The output artifacts of the component.</p>
   * @public
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact> | undefined;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * <p>The metrics for the component.</p>
   * @public
   */
  Metrics?: TrialComponentMetricSummary[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupArn?: string | undefined;

  /**
   * <p>A list of ARNs and, if applicable, job types for multiple sources of an experiment run.</p>
   * @public
   */
  Sources?: TrialComponentSource[] | undefined;
}

/**
 * @public
 */
export interface DescribeUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name. This value is not case sensitive.</p>
   * @public
   */
  UserProfileName: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserProfileResponse {
  /**
   * <p>The ID of the domain that contains the profile.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   * @public
   */
  UserProfileArn?: string | undefined;

  /**
   * <p>The user profile name.</p>
   * @public
   */
  UserProfileName?: string | undefined;

  /**
   * <p>The ID of the user's profile in the Amazon Elastic File System volume.</p>
   * @public
   */
  HomeEfsFileSystemUid?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: UserProfileStatus | undefined;

  /**
   * <p>The last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The failure reason.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The IAM Identity Center user identifier.</p>
   * @public
   */
  SingleSignOnUserIdentifier?: string | undefined;

  /**
   * <p>The IAM Identity Center user value.</p>
   * @public
   */
  SingleSignOnUserValue?: string | undefined;

  /**
   * <p>A collection of settings.</p>
   * @public
   */
  UserSettings?: UserSettings | undefined;
}

/**
 * @public
 */
export interface DescribeWorkforceRequest {
  /**
   * <p>The name of the private workforce whose access you want to restrict. <code>WorkforceName</code> is automatically set to <code>default</code> when a workforce is created and cannot be modified. </p>
   * @public
   */
  WorkforceName: string | undefined;
}

/**
 * <p>Your OIDC IdP workforce configuration.</p>
 * @public
 */
export interface OidcConfigForResponse {
  /**
   * <p>The OIDC IdP client ID used to configure your private workforce.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The OIDC IdP issuer used to configure your private workforce.</p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>The OIDC IdP authorization endpoint used to configure your private workforce.</p>
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   * @public
   */
  LogoutEndpoint?: string | undefined;

  /**
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   * @public
   */
  JwksUri?: string | undefined;

  /**
   * <p>An array of string identifiers used to refer to the specific pieces of user data or claims that the client application wants to access.</p>
   * @public
   */
  Scope?: string | undefined;

  /**
   * <p>A string to string map of identifiers specific to the custom identity provider (IdP) being used.</p>
   * @public
   */
  AuthenticationRequestExtraParams?: Record<string, string> | undefined;
}

/**
 * <p>A VpcConfig object that specifies the VPC that you want your workforce to connect to.</p>
 * @public
 */
export interface WorkforceVpcConfigResponse {
  /**
   * <p>The ID of the VPC that the workforce uses for communication.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the subnets in the VPC that you want to connect.</p>
   * @public
   */
  Subnets: string[] | undefined;

  /**
   * <p>The IDs for the VPC service endpoints of your VPC workforce when it is created and updated.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;
}

/**
 * <p>A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each Amazon Web Services Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
 * @public
 */
export interface Workforce {
  /**
   * <p>The name of the private workforce.</p>
   * @public
   */
  WorkforceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the private workforce.</p>
   * @public
   */
  WorkforceArn: string | undefined;

  /**
   * <p>The most recent date that <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateWorkforce.html">UpdateWorkforce</a> was used to successfully add one or more IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to a private workforce's allow list.</p>
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * <p>A list of one to ten IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to be added to the workforce allow list. By default, a workforce isn't restricted to specific IP addresses.</p>
   * @public
   */
  SourceIpConfig?: SourceIpConfig | undefined;

  /**
   * <p>The subdomain for your OIDC Identity Provider.</p>
   * @public
   */
  SubDomain?: string | undefined;

  /**
   * <p>The configuration of an Amazon Cognito workforce. A single Cognito workforce is created using and corresponds to a single <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html"> Amazon Cognito user pool</a>.</p>
   * @public
   */
  CognitoConfig?: CognitoConfig | undefined;

  /**
   * <p>The configuration of an OIDC Identity Provider (IdP) private workforce.</p>
   * @public
   */
  OidcConfig?: OidcConfigForResponse | undefined;

  /**
   * <p>The date that the workforce is created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The configuration of a VPC workforce.</p>
   * @public
   */
  WorkforceVpcConfig?: WorkforceVpcConfigResponse | undefined;

  /**
   * <p>The status of your workforce.</p>
   * @public
   */
  Status?: WorkforceStatus | undefined;

  /**
   * <p>The reason your workforce failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The IP address type you specify - either <code>IPv4</code> only or <code>dualstack</code> (<code>IPv4</code> and <code>IPv6</code>) - to support your labeling workforce.</p>
   * @public
   */
  IpAddressType?: WorkforceIpAddressType | undefined;
}

/**
 * @public
 */
export interface DescribeWorkforceResponse {
  /**
   * <p>A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each Amazon Web Services Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   * @public
   */
  Workforce: Workforce | undefined;
}
