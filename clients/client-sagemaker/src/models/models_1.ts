// smithy-typescript generated code
import { LazyJsonString as __LazyJsonString, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AdditionalInferenceSpecificationDefinition,
  AlgorithmSpecification,
  AnnotationConsolidationConfig,
  AppNetworkAccessType,
  AppSecurityGroupManagement,
  AppSpecification,
  AppType,
  ArtifactSource,
  AsyncInferenceConfig,
  AthenaDatasetDefinition,
  AuthMode,
  AutoParameter,
  AutoRollbackConfig,
  Autotune,
  AwsManagedHumanLoopRequestSource,
  BatchDataCaptureConfig,
  BatchStrategy,
  BatchTransformInput,
  BestObjectiveNotImproving,
  Bias,
  BlueGreenUpdatePolicy,
  CanvasAppSettings,
  CapacitySize,
  CaptureContentTypeHeader,
  CaptureOption,
  CaptureStatus,
  CategoricalParameter,
  CategoricalParameterRange,
  Channel,
  CheckpointConfig,
  ClarifyExplainerConfig,
  CodeRepository,
  CognitoConfig,
  CognitoMemberDefinition,
  CollectionConfig,
  CollectionConfiguration,
  CollectionType,
  ContainerDefinition,
  ContentClassifier,
  ContinuousParameterRange,
  ConvergenceDetected,
  EndpointInput,
  HyperParameterScalingType,
  HyperParameterTuningJobObjective,
  InferenceSpecification,
  MetadataProperties,
  MetricDefinition,
  MetricsSource,
  ModelApprovalStatus,
  MonitoringConstraintsResource,
  MonitoringNetworkConfig,
  MonitoringOutputConfig,
  MonitoringResources,
  MonitoringStatisticsResource,
  MonitoringStoppingCondition,
  OutputDataConfig,
  ProcessingInstanceType,
  ProcessingS3DataDistributionType,
  ProcessingS3InputMode,
  ProcessingS3UploadMode,
  ProductionVariantInstanceType,
  ResourceConfig,
  ResourceSpec,
  StoppingCondition,
  Tag,
  TrainingInputMode,
  TrainingInstanceType,
  TransformInput,
  TransformJobDefinition,
  TransformOutput,
  TransformResources,
  VpcConfig,
} from "./models_0";

/**
 * @public
 */
export interface CreateDataQualityJobDefinitionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the job definition.</p>
   */
  JobDefinitionArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EdgePresetDeploymentType = {
  GreengrassV2Component: "GreengrassV2Component",
} as const;

/**
 * @public
 */
export type EdgePresetDeploymentType = (typeof EdgePresetDeploymentType)[keyof typeof EdgePresetDeploymentType];

/**
 * @public
 * <p>The output configuration.</p>
 */
export interface EdgeOutputConfig {
  /**
   * @public
   * <p>The Amazon Simple Storage (S3) bucker URI.</p>
   */
  S3OutputLocation: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume after compilation job.
   *      If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The deployment type SageMaker Edge Manager will create.
   *       Currently only supports Amazon Web Services IoT Greengrass Version 2 components.</p>
   */
  PresetDeploymentType?: EdgePresetDeploymentType;

  /**
   * @public
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

/**
 * @public
 */
export interface CreateDeviceFleetRequest {
  /**
   * @public
   * <p>The name of the fleet that the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that has access to Amazon Web Services Internet of Things (IoT).</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>A description of the fleet.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The output configuration for storing sample data collected by the fleet.</p>
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * @public
   * <p>Creates tags for the specified fleet.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Whether to create an Amazon Web Services IoT Role Alias during device fleet creation.
   *      The name of the role alias generated will match this pattern:
   *      "SageMakerEdge-\{DeviceFleetName\}".</p>
   *          <p>For example, if your device fleet is called "demo-fleet", the name of
   *      the role alias will be "SageMakerEdge-demo-fleet".</p>
   */
  EnableIotRoleAlias?: boolean;
}

/**
 * @public
 * <p>The JupyterServer app settings.</p>
 */
export interface JupyterServerAppSettings {
  /**
   * @public
   * <p>The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterServer app. If you use the <code>LifecycleConfigArns</code> parameter, then this parameter is also required.</p>
   */
  DefaultResourceSpec?: ResourceSpec;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the JupyterServerApp. If you use this parameter, the <code>DefaultResourceSpec</code> parameter is also required.</p>
   *          <note>
   *             <p>To remove a Lifecycle Config, you must set <code>LifecycleConfigArns</code> to an empty list.</p>
   *          </note>
   */
  LifecycleConfigArns?: string[];

  /**
   * @public
   * <p>A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application.</p>
   */
  CodeRepositories?: CodeRepository[];
}

/**
 * @public
 * <p>A custom SageMaker image. For more information, see
 *        <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.</p>
 */
export interface CustomImage {
  /**
   * @public
   * <p>The name of the CustomImage. Must be unique to your account.</p>
   */
  ImageName: string | undefined;

  /**
   * @public
   * <p>The version number of the CustomImage.</p>
   */
  ImageVersionNumber?: number;

  /**
   * @public
   * <p>The name of the AppImageConfig.</p>
   */
  AppImageConfigName: string | undefined;
}

/**
 * @public
 * <p>The KernelGateway app settings.</p>
 */
export interface KernelGatewayAppSettings {
  /**
   * @public
   * <p>The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.</p>
   *          <note>
   *             <p>The Amazon SageMaker Studio UI does not use the default instance type value set here. The default
   *           instance type set here is used when Apps are created using the Amazon Web Services Command Line Interface or Amazon Web Services CloudFormation
   *             and the instance type parameter value is not passed.</p>
   *          </note>
   */
  DefaultResourceSpec?: ResourceSpec;

  /**
   * @public
   * <p>A list of custom SageMaker images that are configured to run as a KernelGateway app.</p>
   */
  CustomImages?: CustomImage[];

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the the user profile or domain.</p>
   *          <note>
   *             <p>To remove a Lifecycle Config, you must set <code>LifecycleConfigArns</code> to an empty list.</p>
   *          </note>
   */
  LifecycleConfigArns?: string[];
}

/**
 * @public
 * <p>A collection of settings that apply to spaces created in the Domain.</p>
 */
export interface DefaultSpaceSettings {
  /**
   * @public
   * <p>The ARN of the execution role for the space.</p>
   */
  ExecutionRole?: string;

  /**
   * @public
   * <p>The security group IDs for the Amazon Virtual Private Cloud that the space uses for communication.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>The JupyterServer app settings.</p>
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;

  /**
   * @public
   * <p>The KernelGateway app settings.</p>
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;
}

/**
 * @public
 * <p>A collection of settings that apply to an <code>RSessionGateway</code> app.</p>
 */
export interface RSessionAppSettings {
  /**
   * @public
   * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
   *      the version runs on.</p>
   */
  DefaultResourceSpec?: ResourceSpec;

  /**
   * @public
   * <p>A list of custom SageMaker images that are configured to run as a RSession app.</p>
   */
  CustomImages?: CustomImage[];
}

/**
 * @public
 * @enum
 */
export const RStudioServerProAccessStatus = {
  Disabled: "DISABLED",
  Enabled: "ENABLED",
} as const;

/**
 * @public
 */
export type RStudioServerProAccessStatus =
  (typeof RStudioServerProAccessStatus)[keyof typeof RStudioServerProAccessStatus];

/**
 * @public
 * @enum
 */
export const RStudioServerProUserGroup = {
  Admin: "R_STUDIO_ADMIN",
  User: "R_STUDIO_USER",
} as const;

/**
 * @public
 */
export type RStudioServerProUserGroup = (typeof RStudioServerProUserGroup)[keyof typeof RStudioServerProUserGroup];

/**
 * @public
 * <p>A collection of settings that configure user interaction with the
 *                 <code>RStudioServerPro</code> app.</p>
 */
export interface RStudioServerProAppSettings {
  /**
   * @public
   * <p>Indicates whether the current user has access to the <code>RStudioServerPro</code>
   *             app.</p>
   */
  AccessStatus?: RStudioServerProAccessStatus;

  /**
   * @public
   * <p>The level of permissions that the user has within the <code>RStudioServerPro</code>
   *             app. This value defaults to `User`. The `Admin` value allows the user access to the
   *             RStudio Administrative Dashboard.</p>
   */
  UserGroup?: RStudioServerProUserGroup;
}

/**
 * @public
 * @enum
 */
export const NotebookOutputOption = {
  Allowed: "Allowed",
  Disabled: "Disabled",
} as const;

/**
 * @public
 */
export type NotebookOutputOption = (typeof NotebookOutputOption)[keyof typeof NotebookOutputOption];

/**
 * @public
 * <p>Specifies options for sharing SageMaker Studio notebooks. These settings are
 *     specified as part of <code>DefaultUserSettings</code> when the <code>CreateDomain</code>
 *     API is called, and as part of <code>UserSettings</code> when the <code>CreateUserProfile</code>
 *     API is called. When <code>SharingSettings</code> is not specified, notebook sharing
 *     isn't allowed.</p>
 */
export interface SharingSettings {
  /**
   * @public
   * <p>Whether to include the notebook cell output when sharing the notebook. The default
   *          is <code>Disabled</code>.</p>
   */
  NotebookOutputOption?: NotebookOutputOption;

  /**
   * @public
   * <p>When <code>NotebookOutputOption</code> is <code>Allowed</code>, the Amazon S3 bucket used
   *          to store the shared notebook snapshots.</p>
   */
  S3OutputPath?: string;

  /**
   * @public
   * <p>When <code>NotebookOutputOption</code> is <code>Allowed</code>, the Amazon Web Services Key Management Service (KMS)
   *          encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.</p>
   */
  S3KmsKeyId?: string;
}

/**
 * @public
 * <p>The TensorBoard app settings.</p>
 */
export interface TensorBoardAppSettings {
  /**
   * @public
   * <p>The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   */
  DefaultResourceSpec?: ResourceSpec;
}

/**
 * @public
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
   * @public
   * <p>The execution role for the user.</p>
   */
  ExecutionRole?: string;

  /**
   * @public
   * <p>The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.</p>
   *          <p>Optional when the <code>CreateDomain.AppNetworkAccessType</code> parameter is set to
   *          <code>PublicInternetOnly</code>.</p>
   *          <p>Required when the <code>CreateDomain.AppNetworkAccessType</code> parameter is set to
   *           <code>VpcOnly</code>, unless specified as part of the <code>DefaultUserSettings</code> for the domain.</p>
   *          <p>Amazon SageMaker adds a security group to allow NFS traffic from SageMaker Studio. Therefore, the
   *          number of security groups that you can specify is one less than the maximum number shown.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>Specifies options for sharing SageMaker Studio notebooks.</p>
   */
  SharingSettings?: SharingSettings;

  /**
   * @public
   * <p>The Jupyter server's app settings.</p>
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;

  /**
   * @public
   * <p>The kernel gateway app settings.</p>
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;

  /**
   * @public
   * <p>The TensorBoard app settings.</p>
   */
  TensorBoardAppSettings?: TensorBoardAppSettings;

  /**
   * @public
   * <p>A collection of settings that configure user interaction with the
   *                 <code>RStudioServerPro</code> app.</p>
   */
  RStudioServerProAppSettings?: RStudioServerProAppSettings;

  /**
   * @public
   * <p>A collection of settings that configure the <code>RSessionGateway</code> app.</p>
   */
  RSessionAppSettings?: RSessionAppSettings;

  /**
   * @public
   * <p>The Canvas app settings.</p>
   */
  CanvasAppSettings?: CanvasAppSettings;
}

/**
 * @public
 * @enum
 */
export const ExecutionRoleIdentityConfig = {
  DISABLED: "DISABLED",
  USER_PROFILE_NAME: "USER_PROFILE_NAME",
} as const;

/**
 * @public
 */
export type ExecutionRoleIdentityConfig =
  (typeof ExecutionRoleIdentityConfig)[keyof typeof ExecutionRoleIdentityConfig];

/**
 * @public
 * <p>A collection of settings that configure the <code>RStudioServerPro</code> Domain-level
 *             app.</p>
 */
export interface RStudioServerProDomainSettings {
  /**
   * @public
   * <p>The ARN of the execution role for the <code>RStudioServerPro</code> Domain-level
   *             app.</p>
   */
  DomainExecutionRoleArn: string | undefined;

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

  /**
   * @public
   * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
   *      the version runs on.</p>
   */
  DefaultResourceSpec?: ResourceSpec;
}

/**
 * @public
 * <p>A collection of settings that apply to the <code>SageMaker Domain</code>. These
 *             settings are specified through the <code>CreateDomain</code> API call.</p>
 */
export interface DomainSettings {
  /**
   * @public
   * <p>The security groups for the Amazon Virtual Private Cloud that the <code>Domain</code> uses for
   *             communication between Domain-level apps and user apps.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>A collection of settings that configure the <code>RStudioServerPro</code> Domain-level
   *             app.</p>
   */
  RStudioServerProDomainSettings?: RStudioServerProDomainSettings;

  /**
   * @public
   * <p>The configuration for attaching a SageMaker user profile name to the execution role as a
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html">sts:SourceIdentity key</a>.</p>
   */
  ExecutionRoleIdentityConfig?: ExecutionRoleIdentityConfig;
}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * @public
   * <p>A name for the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The mode of authentication that members use to access the domain.</p>
   */
  AuthMode: AuthMode | undefined;

  /**
   * @public
   * <p>The default settings to use to create a user profile when <code>UserSettings</code> isn't specified
   *          in the call to the <code>CreateUserProfile</code> API.</p>
   *          <p>
   *             <code>SecurityGroups</code> is aggregated when specified in both calls. For all other
   *          settings in <code>UserSettings</code>, the values specified in <code>CreateUserProfile</code>
   *          take precedence over those specified in <code>CreateDomain</code>.</p>
   */
  DefaultUserSettings: UserSettings | undefined;

  /**
   * @public
   * <p>The VPC subnets that Studio uses for communication.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>Tags to associated with the Domain. Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource. Tags are searchable using the
   *          <code>Search</code> API.</p>
   *          <p>Tags that you specify for the Domain are also added to all Apps that the
   *           Domain launches.</p>
   */
  Tags?: Tag[];

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
   * <p>SageMaker uses Amazon Web Services KMS to encrypt the EFS volume attached to the domain with an Amazon Web Services managed
   *          key by default. For more control, specify a customer managed key.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The entity that creates and manages the required security groups for inter-app
   *             communication in <code>VPCOnly</code> mode. Required when
   *                 <code>CreateDomain.AppNetworkAccessType</code> is <code>VPCOnly</code> and
   *                 <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is
   *             provided. If setting up the domain for use with RStudio, this value must be set to
   *                 <code>Service</code>.</p>
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement;

  /**
   * @public
   * <p>A collection of <code>Domain</code> settings.</p>
   */
  DomainSettings?: DomainSettings;

  /**
   * @public
   * <p>The default settings used to create a space.</p>
   */
  DefaultSpaceSettings?: DefaultSpaceSettings;
}

/**
 * @public
 */
export interface CreateDomainResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the created domain.</p>
   */
  DomainArn?: string;

  /**
   * @public
   * <p>The URL to the created domain.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>Contains information about the configuration of a model in a deployment.</p>
 */
export interface EdgeDeploymentModelConfig {
  /**
   * @public
   * <p>The name the device application uses to reference this model.</p>
   */
  ModelHandle: string | undefined;

  /**
   * @public
   * <p>The edge packaging job associated with this deployment.</p>
   */
  EdgePackagingJobName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FailureHandlingPolicy = {
  DoNothing: "DO_NOTHING",
  RollbackOnFailure: "ROLLBACK_ON_FAILURE",
} as const;

/**
 * @public
 */
export type FailureHandlingPolicy = (typeof FailureHandlingPolicy)[keyof typeof FailureHandlingPolicy];

/**
 * @public
 * <p>Contains information about the configuration of a deployment.</p>
 */
export interface EdgeDeploymentConfig {
  /**
   * @public
   * <p>Toggle that determines whether to rollback to previous configuration if the current
   *             deployment fails. By default this is turned on. You may turn this off if you want to
   *             investigate the errors yourself.</p>
   */
  FailureHandlingPolicy: FailureHandlingPolicy | undefined;
}

/**
 * @public
 * @enum
 */
export const DeviceSubsetType = {
  NameContains: "NAMECONTAINS",
  Percentage: "PERCENTAGE",
  Selection: "SELECTION",
} as const;

/**
 * @public
 */
export type DeviceSubsetType = (typeof DeviceSubsetType)[keyof typeof DeviceSubsetType];

/**
 * @public
 * <p>Contains information about the configurations of selected devices.</p>
 */
export interface DeviceSelectionConfig {
  /**
   * @public
   * <p>Type of device subsets to deploy to the current stage.</p>
   */
  DeviceSubsetType: DeviceSubsetType | undefined;

  /**
   * @public
   * <p>Percentage of devices in the fleet to deploy to the current stage.</p>
   */
  Percentage?: number;

  /**
   * @public
   * <p>List of devices chosen to deploy.</p>
   */
  DeviceNames?: string[];

  /**
   * @public
   * <p>A filter to select devices with names containing this name.</p>
   */
  DeviceNameContains?: string;
}

/**
 * @public
 * <p>Contains information about a stage in an edge deployment plan.</p>
 */
export interface DeploymentStage {
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
  DeploymentConfig?: EdgeDeploymentConfig;
}

/**
 * @public
 */
export interface CreateEdgeDeploymentPlanRequest {
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
   * <p>List of stages of the edge deployment plan. The number of stages is limited to 10 per
   *             deployment.</p>
   */
  Stages?: DeploymentStage[];

  /**
   * @public
   * <p>List of tags with which to tag the edge deployment plan.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateEdgeDeploymentPlanResponse {
  /**
   * @public
   * <p>The ARN of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanArn: string | undefined;
}

/**
 * @public
 */
export interface CreateEdgeDeploymentStageRequest {
  /**
   * @public
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * @public
   * <p>List of stages to be added to the edge deployment plan.</p>
   */
  Stages: DeploymentStage[] | undefined;
}

/**
 * @public
 */
export interface CreateEdgePackagingJobRequest {
  /**
   * @public
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;

  /**
   * @public
   * <p>The name of the SageMaker Neo compilation job that will be used to locate model artifacts for packaging.</p>
   */
  CompilationJobName: string | undefined;

  /**
   * @public
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The version of the model.</p>
   */
  ModelVersion: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to download and upload the model, and to contact SageMaker Neo.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>Provides information about the output location for the packaged model.</p>
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * @public
   * <p>The Amazon Web Services KMS key to use when encrypting the EBS volume the edge packaging job runs on.</p>
   */
  ResourceKey?: string;

  /**
   * @public
   * <p>Creates tags for the packaging job.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Specifies a rolling deployment strategy for updating a SageMaker endpoint.</p>
 */
export interface RollingUpdatePolicy {
  /**
   * @public
   * <p>Batch size for each rolling step to provision capacity and turn on traffic on the new
   *             endpoint fleet, and terminate capacity on the old endpoint fleet. Value must be between
   *             5% to 50% of the variant's total instance count.</p>
   */
  MaximumBatchSize: CapacitySize | undefined;

  /**
   * @public
   * <p>The length of the baking period, during which SageMaker monitors alarms for each batch on
   *             the new fleet.</p>
   */
  WaitIntervalInSeconds: number | undefined;

  /**
   * @public
   * <p>The time limit for the total deployment. Exceeding this limit causes a timeout.</p>
   */
  MaximumExecutionTimeoutInSeconds?: number;

  /**
   * @public
   * <p>Batch size for rollback to the old endpoint fleet. Each rolling step to provision
   *             capacity and turn on traffic on the old endpoint fleet, and terminate capacity on the
   *             new endpoint fleet. If this field is absent, the default value will be set to 100% of
   *             total capacity which means to bring up the whole capacity of the old fleet at once
   *             during rollback.</p>
   */
  RollbackMaximumBatchSize?: CapacitySize;
}

/**
 * @public
 * <p>The deployment configuration for an endpoint, which contains the desired deployment
 *             strategy and rollback configurations.</p>
 */
export interface DeploymentConfig {
  /**
   * @public
   * <p>Update policy for a blue/green deployment. If this update policy is specified, SageMaker
   *             creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips
   *             traffic to the new fleet according to the specified traffic routing configuration. Only
   *             one update policy should be used in the deployment configuration. If no update policy is
   *             specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting
   *             by default.</p>
   */
  BlueGreenUpdatePolicy?: BlueGreenUpdatePolicy;

  /**
   * @public
   * <p>Automatic rollback configuration for handling endpoint deployment failures and
   *             recovery.</p>
   */
  AutoRollbackConfiguration?: AutoRollbackConfig;

  /**
   * @public
   * <p>Specifies a rolling deployment strategy for updating a SageMaker endpoint.</p>
   */
  RollingUpdatePolicy?: RollingUpdatePolicy;
}

/**
 * @public
 */
export interface CreateEndpointInput {
  /**
   * @public
   * <p>The name of the endpoint.The name must be unique within an Amazon Web Services
   *             Region in your Amazon Web Services account. The name is case-insensitive in
   *                 <code>CreateEndpoint</code>, but the case is preserved and must be matched in <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpoint.html">InvokeEndpoint</a>.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>The name of an endpoint configuration. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a>. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * @public
   * <p>The deployment configuration for an endpoint, which contains the desired deployment
   *             strategy and rollback configurations.</p>
   */
  DeploymentConfig?: DeploymentConfig;

  /**
   * @public
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateEndpointOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 * <p>Configuration to control how SageMaker captures inference data.</p>
 */
export interface DataCaptureConfig {
  /**
   * @public
   * <p>Whether data capture should be enabled or disabled (defaults to enabled).</p>
   */
  EnableCapture?: boolean;

  /**
   * @public
   * <p>The percentage of requests SageMaker will capture. A lower value is recommended
   *          for Endpoints with high traffic.</p>
   */
  InitialSamplingPercentage: number | undefined;

  /**
   * @public
   * <p>The Amazon S3 location used to capture the data.</p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Key Management Service key that SageMaker
   *          uses to encrypt the captured data at rest using Amazon S3 server-side
   *          encryption.</p>
   *          <p>The KmsKeyId can be any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                   <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
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
   * @public
   * <p>Specifies data Model Monitor will capture. You can configure whether to collect only
   *          input, only output, or both</p>
   */
  CaptureOptions: CaptureOption[] | undefined;

  /**
   * @public
   * <p>Configuration specifying how to treat different headers. If no headers are specified
   *             SageMaker will by default base64 encode when capturing the data.</p>
   */
  CaptureContentTypeHeader?: CaptureContentTypeHeader;
}

/**
 * @public
 * <p>A parameter to activate explainers.</p>
 */
export interface ExplainerConfig {
  /**
   * @public
   * <p>A member of <code>ExplainerConfig</code> that contains configuration parameters for
   *             the SageMaker Clarify explainer.</p>
   */
  ClarifyExplainerConfig?: ClarifyExplainerConfig;
}

/**
 * @public
 * @enum
 */
export const ProductionVariantAcceleratorType = {
  ML_EIA1_LARGE: "ml.eia1.large",
  ML_EIA1_MEDIUM: "ml.eia1.medium",
  ML_EIA1_XLARGE: "ml.eia1.xlarge",
  ML_EIA2_LARGE: "ml.eia2.large",
  ML_EIA2_MEDIUM: "ml.eia2.medium",
  ML_EIA2_XLARGE: "ml.eia2.xlarge",
} as const;

/**
 * @public
 */
export type ProductionVariantAcceleratorType =
  (typeof ProductionVariantAcceleratorType)[keyof typeof ProductionVariantAcceleratorType];

/**
 * @public
 * <p>Specifies configuration for a core dump from the model container when the process
 *             crashes.</p>
 */
export interface ProductionVariantCoreDumpConfig {
  /**
   * @public
   * <p>The Amazon S3 bucket to send the core dump to.</p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker
   *             uses to encrypt the core dump data at rest using Amazon S3 server-side encryption. The
   *                 <code>KmsKeyId</code> can be any of the following formats: </p>
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
   *                   <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
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
   *                   <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you use a KMS key ID or an alias of your KMS key, the SageMaker execution role must
   *             include permissions to call <code>kms:Encrypt</code>. If you don't provide a KMS key ID,
   *             SageMaker uses the default KMS key for Amazon S3 for your role's account. SageMaker uses server-side
   *             encryption with KMS-managed keys for <code>OutputDataConfig</code>. If you use a bucket
   *             policy with an <code>s3:PutObject</code> permission that only allows objects with
   *             server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption
   *                 Keys</a> in the <i>Amazon Simple Storage Service Developer Guide.</i>
   *          </p>
   *          <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateEndpoint</code> and <code>UpdateEndpoint</code> requests. For more
   *             information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using Key Policies in Amazon Web Services KMS</a> in the <i>Amazon Web Services Key Management
   *                 Service Developer Guide</i>.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * <p>Specifies the serverless configuration for an endpoint variant.</p>
 */
export interface ProductionVariantServerlessConfig {
  /**
   * @public
   * <p>The memory size of your serverless endpoint. Valid values are in 1 GB increments: 1024 MB, 2048 MB, 3072 MB, 4096 MB, 5120 MB, or 6144 MB.</p>
   */
  MemorySizeInMB: number | undefined;

  /**
   * @public
   * <p>The maximum number of concurrent invocations your serverless endpoint can process.</p>
   */
  MaxConcurrency: number | undefined;

  /**
   * @public
   * <p>The amount of provisioned concurrency to allocate for the serverless endpoint.
   *    Should be less than or equal to <code>MaxConcurrency</code>.</p>
   *          <note>
   *             <p>This field is not supported for serverless endpoint recommendations for Inference Recommender jobs.
   *    For more information about creating an Inference Recommender job, see
   *    <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceRecommendationsJob.html">CreateInferenceRecommendationsJobs</a>.</p>
   *          </note>
   */
  ProvisionedConcurrency?: number;
}

/**
 * @public
 * <p> Identifies a model that you want to host and the resources chosen to deploy for
 *             hosting it. If you are deploying multiple models, tell SageMaker how to distribute traffic
 *             among the models by specifying variant weights. For more information on production
 *             variants, check <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html"> Production variants</a>.
 *         </p>
 */
export interface ProductionVariant {
  /**
   * @public
   * <p>The name of the production variant.</p>
   */
  VariantName: string | undefined;

  /**
   * @public
   * <p>The name of the model that you want to host. This is the name that you specified
   *             when creating the model.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>Number of instances to launch initially.</p>
   */
  InitialInstanceCount?: number;

  /**
   * @public
   * <p>The ML compute instance type.</p>
   */
  InstanceType?: ProductionVariantInstanceType;

  /**
   * @public
   * <p>Determines initial traffic distribution among all of the models that you specify in
   *             the endpoint configuration. The traffic to a production variant is determined by the
   *             ratio of the <code>VariantWeight</code> to the sum of all <code>VariantWeight</code>
   *             values across all ProductionVariants. If unspecified, it defaults to 1.0.
   *             </p>
   */
  InitialVariantWeight?: number;

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
   * <p>Specifies configuration for a core dump from the model container when the process
   *             crashes.</p>
   */
  CoreDumpConfig?: ProductionVariantCoreDumpConfig;

  /**
   * @public
   * <p>The serverless configuration for an endpoint. Specifies a serverless endpoint configuration instead of an instance-based endpoint configuration.</p>
   */
  ServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * @public
   * <p>The size, in GB, of the ML storage volume attached to individual inference instance
   *             associated with the production variant. Currently only Amazon EBS gp2 storage volumes are
   *             supported.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * @public
   * <p>The timeout value, in seconds, to download and extract the model that you want to host
   *             from Amazon S3 to the individual inference instance associated with this production
   *             variant.</p>
   */
  ModelDataDownloadTimeoutInSeconds?: number;

  /**
   * @public
   * <p>The timeout value, in seconds, for your inference container to pass health check by
   *             SageMaker Hosting. For more information about health check, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests">How Your Container Should Respond to Health Check (Ping) Requests</a>.</p>
   */
  ContainerStartupHealthCheckTimeoutInSeconds?: number;

  /**
   * @public
   * <p> You can use this parameter to turn on native Amazon Web Services Systems Manager (SSM)
   *             access for a production variant behind an endpoint. By default, SSM access is disabled
   *             for all production variants behind an endpoint. You can turn on or turn off SSM access
   *             for a production variant behind an existing endpoint by creating a new endpoint
   *             configuration and calling <code>UpdateEndpoint</code>. </p>
   */
  EnableSSMAccess?: boolean;
}

/**
 * @public
 */
export interface CreateEndpointConfigInput {
  /**
   * @public
   * <p>The name of the endpoint configuration. You specify this name in a <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> request. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * @public
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you want
   *             to host at this endpoint.</p>
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * @public
   * <p>Configuration to control how SageMaker captures inference data.</p>
   */
  DataCaptureConfig?: DataCaptureConfig;

  /**
   * @public
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that
   *             SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that
   *             hosts the endpoint.</p>
   *          <p>The KmsKeyId can be any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateEndpoint</code>, <code>UpdateEndpoint</code> requests. For more
   *             information, refer to the Amazon Web Services Key Management Service section<a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html"> Using Key
   *                 Policies in Amazon Web Services KMS </a>
   *          </p>
   *          <note>
   *             <p>Certain Nitro-based instances include local storage, dependent on the instance
   *                 type. Local storage volumes are encrypted using a hardware module on the instance.
   *                 You can't request a <code>KmsKeyId</code> when using an instance type with local
   *                 storage. If any of the models that you specify in the
   *                     <code>ProductionVariants</code> parameter use nitro-based instances with local
   *                 storage, do not specify a value for the <code>KmsKeyId</code> parameter. If you
   *                 specify a value for <code>KmsKeyId</code> when using any nitro-based instances with
   *                 local storage, the call to <code>CreateEndpointConfig</code> fails.</p>
   *             <p>For a list of instance types that support local instance storage, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *             <p>For more information about local instance storage encryption, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">SSD
   *                     Instance Store Volumes</a>.</p>
   *          </note>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Specifies configuration for how an endpoint performs asynchronous inference. This is a
   *             required field in order for your Endpoint to be invoked using <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpointAsync.html">InvokeEndpointAsync</a>.</p>
   */
  AsyncInferenceConfig?: AsyncInferenceConfig;

  /**
   * @public
   * <p>A member of <code>CreateEndpointConfig</code> that enables explainers.</p>
   */
  ExplainerConfig?: ExplainerConfig;

  /**
   * @public
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you want
   *             to host at this endpoint in shadow mode with production traffic replicated from the
   *             model specified on <code>ProductionVariants</code>. If you use this field, you can only
   *             specify one variant for <code>ProductionVariants</code> and one variant for
   *                 <code>ShadowProductionVariants</code>.</p>
   */
  ShadowProductionVariants?: ProductionVariant[];
}

/**
 * @public
 */
export interface CreateEndpointConfigOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration. </p>
   */
  EndpointConfigArn: string | undefined;
}

/**
 * @public
 */
export interface CreateExperimentRequest {
  /**
   * @public
   * <p>The name of the experiment. The name must be unique in your Amazon Web Services account and is not
   *       case-sensitive.</p>
   */
  ExperimentName: string | undefined;

  /**
   * @public
   * <p>The name of the experiment as displayed. The name doesn't need to be unique. If you don't
   *       specify <code>DisplayName</code>, the value in <code>ExperimentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of tags to associate with the experiment. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API
   *       to search on the tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateExperimentResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;
}

/**
 * @public
 * @enum
 */
export const FeatureType = {
  FRACTIONAL: "Fractional",
  INTEGRAL: "Integral",
  STRING: "String",
} as const;

/**
 * @public
 */
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];

/**
 * @public
 * <p>A list of features. You must include <code>FeatureName</code> and
 *             <code>FeatureType</code>. Valid feature <code>FeatureType</code>s are
 *             <code>Integral</code>, <code>Fractional</code> and <code>String</code>. </p>
 */
export interface FeatureDefinition {
  /**
   * @public
   * <p>The name of a feature. The type must be a string. <code>FeatureName</code> cannot be any
   *          of the following: <code>is_deleted</code>, <code>write_time</code>,
   *             <code>api_invocation_time</code>.</p>
   */
  FeatureName?: string;

  /**
   * @public
   * <p>The value type of a feature. Valid values are Integral, Fractional, or String.</p>
   */
  FeatureType?: FeatureType;

  /**
   * @public
   * <p>A grouping of elements where each element within the collection must have the same
   *          feature type (<code>String</code>, <code>Integral</code>, or
   *          <code>Fractional</code>).</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>List</code>: An ordered collection of elements.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Set</code>: An unordered collection of unique elements.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Vector</code>: A specialized list that represents a fixed-size array of
   *                elements. The vector dimension is determined by you. Must have elements with
   *                fractional feature types. </p>
   *             </li>
   *          </ul>
   */
  CollectionType?: CollectionType;

  /**
   * @public
   * <p>Configuration for your collection.</p>
   */
  CollectionConfig?: CollectionConfig;
}

/**
 * @public
 * <p>The meta data of the Glue table which serves as data catalog for the
 *             <code>OfflineStore</code>. </p>
 */
export interface DataCatalogConfig {
  /**
   * @public
   * <p>The name of the Glue table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The name of the Glue table catalog.</p>
   */
  Catalog: string | undefined;

  /**
   * @public
   * <p>The name of the Glue table database.</p>
   */
  Database: string | undefined;
}

/**
 * @public
 * <p>The Amazon Simple Storage (Amazon S3) location and and security configuration for
 *             <code>OfflineStore</code>.</p>
 */
export interface S3StorageConfig {
  /**
   * @public
   * <p>The S3 URI, or location in Amazon S3, of <code>OfflineStore</code>.</p>
   *          <p>S3 URIs have a format similar to the following:
   *          <code>s3://example-bucket/prefix/</code>.</p>
   */
  S3Uri: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Key Management Service (KMS) key ARN of the key used to encrypt
   *          any objects written into the <code>OfflineStore</code> S3 location.</p>
   *          <p>The IAM <code>roleARN</code> that is passed as a parameter to
   *             <code>CreateFeatureGroup</code> must have below permissions to the
   *          <code>KmsKeyId</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"kms:GenerateDataKey"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The S3 path where offline records are written.</p>
   */
  ResolvedOutputS3Uri?: string;
}

/**
 * @public
 * @enum
 */
export const TableFormat = {
  GLUE: "Glue",
  ICEBERG: "Iceberg",
} as const;

/**
 * @public
 */
export type TableFormat = (typeof TableFormat)[keyof typeof TableFormat];

/**
 * @public
 * <p>The configuration of an <code>OfflineStore</code>.</p>
 *          <p>Provide an <code>OfflineStoreConfig</code> in a request to
 *             <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p>
 *          <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key Management Service (KMS) key ID, or <code>KMSKeyId</code>, in
 *             <code>S3StorageConfig</code>.</p>
 */
export interface OfflineStoreConfig {
  /**
   * @public
   * <p>The Amazon Simple Storage (Amazon S3) location of <code>OfflineStore</code>.</p>
   */
  S3StorageConfig: S3StorageConfig | undefined;

  /**
   * @public
   * <p>Set to <code>True</code> to disable the automatic creation of an Amazon Web Services Glue
   *          table when configuring an <code>OfflineStore</code>. If set to <code>False</code>, Feature
   *          Store will name the <code>OfflineStore</code> Glue table following <a href="https://docs.aws.amazon.com/athena/latest/ug/tables-databases-columns-names.html">Athena's
   *             naming recommendations</a>.</p>
   *          <p>The default value is <code>False</code>.</p>
   */
  DisableGlueTableCreation?: boolean;

  /**
   * @public
   * <p>The meta data of the Glue table that is autogenerated when an <code>OfflineStore</code>
   *          is created. </p>
   */
  DataCatalogConfig?: DataCatalogConfig;

  /**
   * @public
   * <p>Format for the offline store table. Supported formats are Glue (Default) and <a href="https://iceberg.apache.org/">Apache Iceberg</a>.</p>
   */
  TableFormat?: TableFormat;
}

/**
 * @public
 * <p>The security configuration for <code>OnlineStore</code>.</p>
 */
export interface OnlineStoreSecurityConfig {
  /**
   * @public
   * <p>The Amazon Web Services Key Management Service (KMS) key ARN that SageMaker Feature Store
   *          uses to encrypt the Amazon S3 objects at rest using Amazon S3 server-side
   *          encryption.</p>
   *          <p>The caller (either user or IAM role) of <code>CreateFeatureGroup</code> must have below
   *          permissions to the <code>OnlineStore</code>
   *             <code>KmsKeyId</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"kms:Encrypt"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:Decrypt"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:DescribeKey"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:CreateGrant"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:RetireGrant"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:ReEncryptFrom"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:ReEncryptTo"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:GenerateDataKey"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:ListAliases"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:ListGrants"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"kms:RevokeGrant"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The caller (either user or IAM role) to all DataPlane operations
   *          (<code>PutRecord</code>, <code>GetRecord</code>, <code>DeleteRecord</code>) must have the
   *          following permissions to the <code>KmsKeyId</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"kms:Decrypt"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * @enum
 */
export const StorageType = {
  IN_MEMORY: "InMemory",
  STANDARD: "Standard",
} as const;

/**
 * @public
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

/**
 * @public
 * @enum
 */
export const TtlDurationUnit = {
  DAYS: "Days",
  HOURS: "Hours",
  MINUTES: "Minutes",
  SECONDS: "Seconds",
  WEEKS: "Weeks",
} as const;

/**
 * @public
 */
export type TtlDurationUnit = (typeof TtlDurationUnit)[keyof typeof TtlDurationUnit];

/**
 * @public
 * <p>Time to live duration, where the record is hard deleted after the expiration time is
 *          reached; <code>ExpiresAt</code> = <code>EventTime</code> + <code>TtlDuration</code>. For
 *          information on HardDelete, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html">DeleteRecord</a> API in the Amazon SageMaker API Reference guide.</p>
 */
export interface TtlDuration {
  /**
   * @public
   * <p>
   *             <code>TtlDuration</code> time unit.</p>
   */
  Unit?: TtlDurationUnit;

  /**
   * @public
   * <p>
   *             <code>TtlDuration</code> time value.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or
 *             <code>KMSKeyId</code>, for at rest data encryption. You can turn
 *             <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag
 *          at General Assembly.</p>
 *          <p>The default value is <code>False</code>.</p>
 */
export interface OnlineStoreConfig {
  /**
   * @public
   * <p>Use to specify KMS Key ID (<code>KMSKeyId</code>) for at-rest encryption of your
   *             <code>OnlineStore</code>.</p>
   */
  SecurityConfig?: OnlineStoreSecurityConfig;

  /**
   * @public
   * <p>Turn <code>OnlineStore</code> off by specifying <code>False</code> for the
   *             <code>EnableOnlineStore</code> flag. Turn <code>OnlineStore</code> on by specifying
   *             <code>True</code> for the <code>EnableOnlineStore</code> flag. </p>
   *          <p>The default value is <code>False</code>.</p>
   */
  EnableOnlineStore?: boolean;

  /**
   * @public
   * <p>Time to live duration, where the record is hard deleted after the expiration time is
   *          reached; <code>ExpiresAt</code> = <code>EventTime</code> + <code>TtlDuration</code>. For
   *          information on HardDelete, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html">DeleteRecord</a> API in the Amazon SageMaker API Reference guide.</p>
   */
  TtlDuration?: TtlDuration;

  /**
   * @public
   * <p>Option for different tiers of low latency storage for real-time data retrieval.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Standard</code>: A managed low latency data store for feature groups.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InMemory</code>: A managed data store for feature groups that supports very
   *                low latency retrieval. </p>
   *             </li>
   *          </ul>
   */
  StorageType?: StorageType;
}

/**
 * @public
 */
export interface CreateFeatureGroupRequest {
  /**
   * @public
   * <p>The name of the <code>FeatureGroup</code>. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account. The name:</p>
   *          <ul>
   *             <li>
   *                <p>Must start and end with an alphanumeric character.</p>
   *             </li>
   *             <li>
   *                <p>Can only contain alphanumeric character and hyphens. Spaces are not allowed.
   *             </p>
   *             </li>
   *          </ul>
   */
  FeatureGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the <code>Feature</code> whose value uniquely identifies a
   *             <code>Record</code> defined in the <code>FeatureStore</code>. Only the latest record per
   *          identifier value will be stored in the <code>OnlineStore</code>.
   *             <code>RecordIdentifierFeatureName</code> must be one of feature definitions'
   *          names.</p>
   *          <p>You use the <code>RecordIdentifierFeatureName</code> to access data in a
   *             <code>FeatureStore</code>.</p>
   *          <p>This name:</p>
   *          <ul>
   *             <li>
   *                <p>Must start and end with an alphanumeric character.</p>
   *             </li>
   *             <li>
   *                <p>Can only contains alphanumeric characters, hyphens, underscores. Spaces are not
   *                allowed. </p>
   *             </li>
   *          </ul>
   */
  RecordIdentifierFeatureName: string | undefined;

  /**
   * @public
   * <p>The name of the feature that stores the <code>EventTime</code> of a <code>Record</code>
   *          in a <code>FeatureGroup</code>.</p>
   *          <p>An <code>EventTime</code> is a point in time when a new event occurs that corresponds to
   *          the creation or update of a <code>Record</code> in a <code>FeatureGroup</code>. All
   *             <code>Records</code> in the <code>FeatureGroup</code> must have a corresponding
   *             <code>EventTime</code>.</p>
   *          <p>An <code>EventTime</code> can be a <code>String</code> or <code>Fractional</code>. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Fractional</code>: <code>EventTime</code> feature values must be a Unix
   *                timestamp in seconds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>String</code>: <code>EventTime</code> feature values must be an ISO-8601
   *                string in the format. The following formats are supported
   *                   <code>yyyy-MM-dd'T'HH:mm:ssZ</code> and <code>yyyy-MM-dd'T'HH:mm:ss.SSSZ</code>
   *                where <code>yyyy</code>, <code>MM</code>, and <code>dd</code> represent the year,
   *                month, and day respectively and <code>HH</code>, <code>mm</code>, <code>ss</code>,
   *                and if applicable, <code>SSS</code> represent the hour, month, second and
   *                milliseconds respsectively. <code>'T'</code> and <code>Z</code> are constants.</p>
   *             </li>
   *          </ul>
   */
  EventTimeFeatureName: string | undefined;

  /**
   * @public
   * <p>A list of <code>Feature</code> names and types. <code>Name</code> and <code>Type</code>
   *          is compulsory per <code>Feature</code>. </p>
   *          <p>Valid feature <code>FeatureType</code>s are <code>Integral</code>,
   *             <code>Fractional</code> and <code>String</code>.</p>
   *          <p>
   *             <code>FeatureName</code>s cannot be any of the following: <code>is_deleted</code>,
   *             <code>write_time</code>, <code>api_invocation_time</code>
   *          </p>
   *          <p>You can create up to 2,500 <code>FeatureDefinition</code>s per
   *          <code>FeatureGroup</code>.</p>
   */
  FeatureDefinitions: FeatureDefinition[] | undefined;

  /**
   * @public
   * <p>You can turn the <code>OnlineStore</code> on or off by specifying <code>True</code> for
   *          the <code>EnableOnlineStore</code> flag in <code>OnlineStoreConfig</code>.</p>
   *          <p>You can also include an Amazon Web Services KMS key ID (<code>KMSKeyId</code>) for
   *          at-rest encryption of the <code>OnlineStore</code>.</p>
   *          <p>The default value is <code>False</code>.</p>
   */
  OnlineStoreConfig?: OnlineStoreConfig;

  /**
   * @public
   * <p>Use this to configure an <code>OfflineFeatureStore</code>. This parameter allows you to
   *          specify:</p>
   *          <ul>
   *             <li>
   *                <p>The Amazon Simple Storage Service (Amazon S3) location of an
   *                   <code>OfflineStore</code>.</p>
   *             </li>
   *             <li>
   *                <p>A configuration for an Amazon Web Services Glue or Amazon Web Services Hive data
   *                catalog. </p>
   *             </li>
   *             <li>
   *                <p>An KMS encryption key to encrypt the Amazon S3 location used for
   *                   <code>OfflineStore</code>. If KMS encryption key is not specified, by default we
   *                encrypt all data at rest using Amazon Web Services KMS key. By defining your <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-key.html">bucket-level
   *                   key</a> for SSE, you can reduce Amazon Web Services KMS requests costs by up to
   *                99 percent.</p>
   *             </li>
   *             <li>
   *                <p>Format for the offline store table. Supported formats are Glue (Default) and
   *                   <a href="https://iceberg.apache.org/">Apache Iceberg</a>.</p>
   *             </li>
   *          </ul>
   *          <p>To learn more about this parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OfflineStoreConfig.html">OfflineStoreConfig</a>.</p>
   */
  OfflineStoreConfig?: OfflineStoreConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the
   *             <code>OfflineStore</code> if an <code>OfflineStoreConfig</code> is provided.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>A free-form description of a <code>FeatureGroup</code>.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Tags used to identify <code>Features</code> in each <code>FeatureGroup</code>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateFeatureGroupResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <code>FeatureGroup</code>. This is a unique
   *          identifier for the feature group. </p>
   */
  FeatureGroupArn: string | undefined;
}

/**
 * @public
 * <p>Defines under what conditions SageMaker creates a human loop. Used within <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateFlowDefinition.html">CreateFlowDefinition</a>. See <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HumanLoopActivationConditionsConfig.html">HumanLoopActivationConditionsConfig</a> for the required
 *          format of activation conditions.</p>
 */
export interface HumanLoopActivationConditionsConfig {
  /**
   * @public
   * <p>JSON expressing use-case specific conditions declaratively. If any condition is matched, atomic tasks are created against the configured work team.
   *          The set of conditions is different for Rekognition and Textract. For more information about how to structure the JSON, see
   *          <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-human-fallback-conditions-json-schema.html">JSON Schema for Human Loop Activation Conditions in Amazon Augmented AI</a>
   *          in the <i>Amazon SageMaker Developer Guide</i>.</p>
   */
  HumanLoopActivationConditions: __LazyJsonString | string | undefined;
}

/**
 * @public
 * <p>Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans.</p>
 */
export interface HumanLoopActivationConfig {
  /**
   * @public
   * <p>Container structure for defining under what conditions SageMaker creates a human
   *          loop.</p>
   */
  HumanLoopActivationConditionsConfig: HumanLoopActivationConditionsConfig | undefined;
}

/**
 * @public
 * <p>Represents an amount of money in United States dollars.</p>
 */
export interface USD {
  /**
   * @public
   * <p>The whole number of dollars in the amount.</p>
   */
  Dollars?: number;

  /**
   * @public
   * <p>The fractional portion, in cents, of the amount. </p>
   */
  Cents?: number;

  /**
   * @public
   * <p>Fractions of a cent, in tenths.</p>
   */
  TenthFractionsOfACent?: number;
}

/**
 * @public
 * <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p>
 *          <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and
 *             should be based on the complexity of the task; the longer it takes in your initial
 *             testing, the more you should offer.</p>
 *          <ul>
 *             <li>
 *                <p>0.036</p>
 *             </li>
 *             <li>
 *                <p>0.048</p>
 *             </li>
 *             <li>
 *                <p>0.060</p>
 *             </li>
 *             <li>
 *                <p>0.072</p>
 *             </li>
 *             <li>
 *                <p>0.120</p>
 *             </li>
 *             <li>
 *                <p>0.240</p>
 *             </li>
 *             <li>
 *                <p>0.360</p>
 *             </li>
 *             <li>
 *                <p>0.480</p>
 *             </li>
 *             <li>
 *                <p>0.600</p>
 *             </li>
 *             <li>
 *                <p>0.720</p>
 *             </li>
 *             <li>
 *                <p>0.840</p>
 *             </li>
 *             <li>
 *                <p>0.960</p>
 *             </li>
 *             <li>
 *                <p>1.080</p>
 *             </li>
 *             <li>
 *                <p>1.200</p>
 *             </li>
 *          </ul>
 *          <p>Use one of the following prices for image classification, text classification, and
 *             custom tasks. Prices are in US dollars.</p>
 *          <ul>
 *             <li>
 *                <p>0.012</p>
 *             </li>
 *             <li>
 *                <p>0.024</p>
 *             </li>
 *             <li>
 *                <p>0.036</p>
 *             </li>
 *             <li>
 *                <p>0.048</p>
 *             </li>
 *             <li>
 *                <p>0.060</p>
 *             </li>
 *             <li>
 *                <p>0.072</p>
 *             </li>
 *             <li>
 *                <p>0.120</p>
 *             </li>
 *             <li>
 *                <p>0.240</p>
 *             </li>
 *             <li>
 *                <p>0.360</p>
 *             </li>
 *             <li>
 *                <p>0.480</p>
 *             </li>
 *             <li>
 *                <p>0.600</p>
 *             </li>
 *             <li>
 *                <p>0.720</p>
 *             </li>
 *             <li>
 *                <p>0.840</p>
 *             </li>
 *             <li>
 *                <p>0.960</p>
 *             </li>
 *             <li>
 *                <p>1.080</p>
 *             </li>
 *             <li>
 *                <p>1.200</p>
 *             </li>
 *          </ul>
 *          <p>Use one of the following prices for semantic segmentation tasks. Prices are in US
 *             dollars.</p>
 *          <ul>
 *             <li>
 *                <p>0.840</p>
 *             </li>
 *             <li>
 *                <p>0.960</p>
 *             </li>
 *             <li>
 *                <p>1.080</p>
 *             </li>
 *             <li>
 *                <p>1.200</p>
 *             </li>
 *          </ul>
 *          <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon
 *             Augmented AI review tasks. Prices are in US dollars.</p>
 *          <ul>
 *             <li>
 *                <p>2.400 </p>
 *             </li>
 *             <li>
 *                <p>2.280 </p>
 *             </li>
 *             <li>
 *                <p>2.160 </p>
 *             </li>
 *             <li>
 *                <p>2.040 </p>
 *             </li>
 *             <li>
 *                <p>1.920 </p>
 *             </li>
 *             <li>
 *                <p>1.800 </p>
 *             </li>
 *             <li>
 *                <p>1.680 </p>
 *             </li>
 *             <li>
 *                <p>1.560 </p>
 *             </li>
 *             <li>
 *                <p>1.440 </p>
 *             </li>
 *             <li>
 *                <p>1.320 </p>
 *             </li>
 *             <li>
 *                <p>1.200 </p>
 *             </li>
 *             <li>
 *                <p>1.080 </p>
 *             </li>
 *             <li>
 *                <p>0.960 </p>
 *             </li>
 *             <li>
 *                <p>0.840 </p>
 *             </li>
 *             <li>
 *                <p>0.720 </p>
 *             </li>
 *             <li>
 *                <p>0.600 </p>
 *             </li>
 *             <li>
 *                <p>0.480 </p>
 *             </li>
 *             <li>
 *                <p>0.360 </p>
 *             </li>
 *             <li>
 *                <p>0.240 </p>
 *             </li>
 *             <li>
 *                <p>0.120 </p>
 *             </li>
 *             <li>
 *                <p>0.072 </p>
 *             </li>
 *             <li>
 *                <p>0.060 </p>
 *             </li>
 *             <li>
 *                <p>0.048 </p>
 *             </li>
 *             <li>
 *                <p>0.036 </p>
 *             </li>
 *             <li>
 *                <p>0.024 </p>
 *             </li>
 *             <li>
 *                <p>0.012 </p>
 *             </li>
 *          </ul>
 *          <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon
 *             Augmented AI review tasks. Prices are in US dollars.</p>
 *          <ul>
 *             <li>
 *                <p>1.200 </p>
 *             </li>
 *             <li>
 *                <p>1.080 </p>
 *             </li>
 *             <li>
 *                <p>0.960 </p>
 *             </li>
 *             <li>
 *                <p>0.840 </p>
 *             </li>
 *             <li>
 *                <p>0.720 </p>
 *             </li>
 *             <li>
 *                <p>0.600 </p>
 *             </li>
 *             <li>
 *                <p>0.480 </p>
 *             </li>
 *             <li>
 *                <p>0.360 </p>
 *             </li>
 *             <li>
 *                <p>0.240 </p>
 *             </li>
 *             <li>
 *                <p>0.120 </p>
 *             </li>
 *             <li>
 *                <p>0.072 </p>
 *             </li>
 *             <li>
 *                <p>0.060 </p>
 *             </li>
 *             <li>
 *                <p>0.048 </p>
 *             </li>
 *             <li>
 *                <p>0.036 </p>
 *             </li>
 *             <li>
 *                <p>0.024 </p>
 *             </li>
 *             <li>
 *                <p>0.012 </p>
 *             </li>
 *          </ul>
 *          <p>Use one of the following prices for Amazon Augmented AI custom human review tasks.
 *             Prices are in US dollars.</p>
 *          <ul>
 *             <li>
 *                <p>1.200 </p>
 *             </li>
 *             <li>
 *                <p>1.080 </p>
 *             </li>
 *             <li>
 *                <p>0.960 </p>
 *             </li>
 *             <li>
 *                <p>0.840 </p>
 *             </li>
 *             <li>
 *                <p>0.720 </p>
 *             </li>
 *             <li>
 *                <p>0.600 </p>
 *             </li>
 *             <li>
 *                <p>0.480 </p>
 *             </li>
 *             <li>
 *                <p>0.360 </p>
 *             </li>
 *             <li>
 *                <p>0.240 </p>
 *             </li>
 *             <li>
 *                <p>0.120 </p>
 *             </li>
 *             <li>
 *                <p>0.072 </p>
 *             </li>
 *             <li>
 *                <p>0.060 </p>
 *             </li>
 *             <li>
 *                <p>0.048 </p>
 *             </li>
 *             <li>
 *                <p>0.036 </p>
 *             </li>
 *             <li>
 *                <p>0.024 </p>
 *             </li>
 *             <li>
 *                <p>0.012 </p>
 *             </li>
 *          </ul>
 */
export interface PublicWorkforceTaskPrice {
  /**
   * @public
   * <p>Defines the amount of money paid to an Amazon Mechanical Turk worker in United States dollars.</p>
   */
  AmountInUsd?: USD;
}

/**
 * @public
 * <p>Describes the work to be performed by human workers.</p>
 */
export interface HumanLoopConfig {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of a team of workers. To learn more about the types of
   *          workforces and work teams you can create and use with Amazon A2I, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-management.html">Create
   *             and Manage Workforces</a>.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * @public
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
   * @public
   * <p>A title for the human worker task.</p>
   */
  TaskTitle: string | undefined;

  /**
   * @public
   * <p>A description for the human worker task.</p>
   */
  TaskDescription: string | undefined;

  /**
   * @public
   * <p>The number of distinct workers who will perform the same task on each object.
   *       For example, if <code>TaskCount</code> is set to <code>3</code> for an image classification
   *       labeling job, three workers will classify each input image.
   *       Increasing <code>TaskCount</code> can improve label accuracy.</p>
   */
  TaskCount: number | undefined;

  /**
   * @public
   * <p>The length of time that a task remains available for review by human workers.</p>
   */
  TaskAvailabilityLifetimeInSeconds?: number;

  /**
   * @public
   * <p>The amount of time that a worker has to complete a task. The default value is 3,600
   *          seconds (1 hour).</p>
   */
  TaskTimeLimitInSeconds?: number;

  /**
   * @public
   * <p>Keywords used to describe the task so that workers can discover the task.</p>
   */
  TaskKeywords?: string[];

  /**
   * @public
   * <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p>
   *          <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and
   *             should be based on the complexity of the task; the longer it takes in your initial
   *             testing, the more you should offer.</p>
   *          <ul>
   *             <li>
   *                <p>0.036</p>
   *             </li>
   *             <li>
   *                <p>0.048</p>
   *             </li>
   *             <li>
   *                <p>0.060</p>
   *             </li>
   *             <li>
   *                <p>0.072</p>
   *             </li>
   *             <li>
   *                <p>0.120</p>
   *             </li>
   *             <li>
   *                <p>0.240</p>
   *             </li>
   *             <li>
   *                <p>0.360</p>
   *             </li>
   *             <li>
   *                <p>0.480</p>
   *             </li>
   *             <li>
   *                <p>0.600</p>
   *             </li>
   *             <li>
   *                <p>0.720</p>
   *             </li>
   *             <li>
   *                <p>0.840</p>
   *             </li>
   *             <li>
   *                <p>0.960</p>
   *             </li>
   *             <li>
   *                <p>1.080</p>
   *             </li>
   *             <li>
   *                <p>1.200</p>
   *             </li>
   *          </ul>
   *          <p>Use one of the following prices for image classification, text classification, and
   *             custom tasks. Prices are in US dollars.</p>
   *          <ul>
   *             <li>
   *                <p>0.012</p>
   *             </li>
   *             <li>
   *                <p>0.024</p>
   *             </li>
   *             <li>
   *                <p>0.036</p>
   *             </li>
   *             <li>
   *                <p>0.048</p>
   *             </li>
   *             <li>
   *                <p>0.060</p>
   *             </li>
   *             <li>
   *                <p>0.072</p>
   *             </li>
   *             <li>
   *                <p>0.120</p>
   *             </li>
   *             <li>
   *                <p>0.240</p>
   *             </li>
   *             <li>
   *                <p>0.360</p>
   *             </li>
   *             <li>
   *                <p>0.480</p>
   *             </li>
   *             <li>
   *                <p>0.600</p>
   *             </li>
   *             <li>
   *                <p>0.720</p>
   *             </li>
   *             <li>
   *                <p>0.840</p>
   *             </li>
   *             <li>
   *                <p>0.960</p>
   *             </li>
   *             <li>
   *                <p>1.080</p>
   *             </li>
   *             <li>
   *                <p>1.200</p>
   *             </li>
   *          </ul>
   *          <p>Use one of the following prices for semantic segmentation tasks. Prices are in US
   *             dollars.</p>
   *          <ul>
   *             <li>
   *                <p>0.840</p>
   *             </li>
   *             <li>
   *                <p>0.960</p>
   *             </li>
   *             <li>
   *                <p>1.080</p>
   *             </li>
   *             <li>
   *                <p>1.200</p>
   *             </li>
   *          </ul>
   *          <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon
   *             Augmented AI review tasks. Prices are in US dollars.</p>
   *          <ul>
   *             <li>
   *                <p>2.400 </p>
   *             </li>
   *             <li>
   *                <p>2.280 </p>
   *             </li>
   *             <li>
   *                <p>2.160 </p>
   *             </li>
   *             <li>
   *                <p>2.040 </p>
   *             </li>
   *             <li>
   *                <p>1.920 </p>
   *             </li>
   *             <li>
   *                <p>1.800 </p>
   *             </li>
   *             <li>
   *                <p>1.680 </p>
   *             </li>
   *             <li>
   *                <p>1.560 </p>
   *             </li>
   *             <li>
   *                <p>1.440 </p>
   *             </li>
   *             <li>
   *                <p>1.320 </p>
   *             </li>
   *             <li>
   *                <p>1.200 </p>
   *             </li>
   *             <li>
   *                <p>1.080 </p>
   *             </li>
   *             <li>
   *                <p>0.960 </p>
   *             </li>
   *             <li>
   *                <p>0.840 </p>
   *             </li>
   *             <li>
   *                <p>0.720 </p>
   *             </li>
   *             <li>
   *                <p>0.600 </p>
   *             </li>
   *             <li>
   *                <p>0.480 </p>
   *             </li>
   *             <li>
   *                <p>0.360 </p>
   *             </li>
   *             <li>
   *                <p>0.240 </p>
   *             </li>
   *             <li>
   *                <p>0.120 </p>
   *             </li>
   *             <li>
   *                <p>0.072 </p>
   *             </li>
   *             <li>
   *                <p>0.060 </p>
   *             </li>
   *             <li>
   *                <p>0.048 </p>
   *             </li>
   *             <li>
   *                <p>0.036 </p>
   *             </li>
   *             <li>
   *                <p>0.024 </p>
   *             </li>
   *             <li>
   *                <p>0.012 </p>
   *             </li>
   *          </ul>
   *          <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon
   *             Augmented AI review tasks. Prices are in US dollars.</p>
   *          <ul>
   *             <li>
   *                <p>1.200 </p>
   *             </li>
   *             <li>
   *                <p>1.080 </p>
   *             </li>
   *             <li>
   *                <p>0.960 </p>
   *             </li>
   *             <li>
   *                <p>0.840 </p>
   *             </li>
   *             <li>
   *                <p>0.720 </p>
   *             </li>
   *             <li>
   *                <p>0.600 </p>
   *             </li>
   *             <li>
   *                <p>0.480 </p>
   *             </li>
   *             <li>
   *                <p>0.360 </p>
   *             </li>
   *             <li>
   *                <p>0.240 </p>
   *             </li>
   *             <li>
   *                <p>0.120 </p>
   *             </li>
   *             <li>
   *                <p>0.072 </p>
   *             </li>
   *             <li>
   *                <p>0.060 </p>
   *             </li>
   *             <li>
   *                <p>0.048 </p>
   *             </li>
   *             <li>
   *                <p>0.036 </p>
   *             </li>
   *             <li>
   *                <p>0.024 </p>
   *             </li>
   *             <li>
   *                <p>0.012 </p>
   *             </li>
   *          </ul>
   *          <p>Use one of the following prices for Amazon Augmented AI custom human review tasks.
   *             Prices are in US dollars.</p>
   *          <ul>
   *             <li>
   *                <p>1.200 </p>
   *             </li>
   *             <li>
   *                <p>1.080 </p>
   *             </li>
   *             <li>
   *                <p>0.960 </p>
   *             </li>
   *             <li>
   *                <p>0.840 </p>
   *             </li>
   *             <li>
   *                <p>0.720 </p>
   *             </li>
   *             <li>
   *                <p>0.600 </p>
   *             </li>
   *             <li>
   *                <p>0.480 </p>
   *             </li>
   *             <li>
   *                <p>0.360 </p>
   *             </li>
   *             <li>
   *                <p>0.240 </p>
   *             </li>
   *             <li>
   *                <p>0.120 </p>
   *             </li>
   *             <li>
   *                <p>0.072 </p>
   *             </li>
   *             <li>
   *                <p>0.060 </p>
   *             </li>
   *             <li>
   *                <p>0.048 </p>
   *             </li>
   *             <li>
   *                <p>0.036 </p>
   *             </li>
   *             <li>
   *                <p>0.024 </p>
   *             </li>
   *             <li>
   *                <p>0.012 </p>
   *             </li>
   *          </ul>
   */
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
}

/**
 * @public
 * <p>Container for configuring the source of human task requests.</p>
 */
export interface HumanLoopRequestSource {
  /**
   * @public
   * <p>Specifies whether Amazon Rekognition or Amazon Textract are used as the integration source.
   *       The default field settings and JSON parsing rules are different based on the integration source. Valid values:</p>
   */
  AwsManagedHumanLoopRequestSource: AwsManagedHumanLoopRequestSource | undefined;
}

/**
 * @public
 * <p>Contains information about where human output will be stored.</p>
 */
export interface FlowDefinitionOutputConfig {
  /**
   * @public
   * <p>The Amazon S3 path where the object containing human output will be made available.</p>
   *          <p>To learn more about the format of Amazon A2I output data, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-output-data.html">Amazon A2I
   *             Output Data</a>.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * @public
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 */
export interface CreateFlowDefinitionRequest {
  /**
   * @public
   * <p>The name of your flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * @public
   * <p>Container for configuring the source of human task requests. Use to specify if
   *       Amazon Rekognition or Amazon Textract is used as an integration source.</p>
   */
  HumanLoopRequestSource?: HumanLoopRequestSource;

  /**
   * @public
   * <p>An object containing information about the events that trigger a human workflow.</p>
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig;

  /**
   * @public
   * <p>An object containing information about the tasks the human reviewers will perform.</p>
   */
  HumanLoopConfig: HumanLoopConfig | undefined;

  /**
   * @public
   * <p>An object containing information about where the human review results will be uploaded.</p>
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role needed to call other services on your behalf. For example, <code>arn:aws:iam::1234567890:role/service-role/AmazonSageMaker-ExecutionRole-20180111T151298</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>An array of key-value pairs that contain metadata to help you categorize and organize a flow definition. Each tag consists of a key and a value, both of which you define.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateFlowDefinitionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow definition you create.</p>
   */
  FlowDefinitionArn: string | undefined;
}

/**
 * @public
 * <p>The Amazon S3 storage configuration of a hub.</p>
 */
export interface HubS3StorageConfig {
  /**
   * @public
   * <p>The Amazon S3 bucket prefix for hosting hub content.</p>
   */
  S3OutputPath?: string;
}

/**
 * @public
 */
export interface CreateHubRequest {
  /**
   * @public
   * <p>The name of the hub to create.</p>
   */
  HubName: string | undefined;

  /**
   * @public
   * <p>A description of the hub.</p>
   */
  HubDescription: string | undefined;

  /**
   * @public
   * <p>The display name of the hub.</p>
   */
  HubDisplayName?: string;

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
   * <p>Any tags to associate with the hub.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateHubResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hub.</p>
   */
  HubArn: string | undefined;
}

/**
 * @public
 * <p>The Liquid template for the worker user interface.</p>
 */
export interface UiTemplate {
  /**
   * @public
   * <p>The content of the Liquid template for the worker user interface.</p>
   */
  Content: string | undefined;
}

/**
 * @public
 */
export interface CreateHumanTaskUiRequest {
  /**
   * @public
   * <p>The name of the user interface you are creating.</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * @public
   * <p>The Liquid template for the worker user interface.</p>
   */
  UiTemplate: UiTemplate | undefined;

  /**
   * @public
   * <p>An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface. Each tag consists of a key and a value, both of which you define.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateHumanTaskUiResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the human review workflow user interface you create.</p>
   */
  HumanTaskUiArn: string | undefined;
}

/**
 * @public
 * <p>For a hyperparameter of the integer type, specifies the range
 *             that
 *             a hyperparameter tuning job searches.</p>
 */
export interface IntegerParameterRange {
  /**
   * @public
   * <p>The name of the hyperparameter to search.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The minimum
   *             value
   *             of the hyperparameter to search.</p>
   */
  MinValue: string | undefined;

  /**
   * @public
   * <p>The maximum
   *             value
   *             of the hyperparameter to search.</p>
   */
  MaxValue: string | undefined;

  /**
   * @public
   * <p>The scale that hyperparameter tuning uses to search the hyperparameter range. For
   *             information about choosing a hyperparameter scale, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type">Hyperparameter Scaling</a>. One of the following values:</p>
   *          <dl>
   *             <dt>Auto</dt>
   *             <dd>
   *                <p>SageMaker hyperparameter tuning chooses the best scale for the
   *                         hyperparameter.</p>
   *             </dd>
   *             <dt>Linear</dt>
   *             <dd>
   *                <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a linear scale.</p>
   *             </dd>
   *             <dt>Logarithmic</dt>
   *             <dd>
   *                <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a logarithmic scale.</p>
   *                <p>Logarithmic scaling works only for ranges that have only values greater
   *                         than 0.</p>
   *             </dd>
   *          </dl>
   */
  ScalingType?: HyperParameterScalingType;
}

/**
 * @public
 * <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a
 *             hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs
 *             with hyperparameter values within these ranges to find the combination of values that
 *             result in the training job with the best performance as measured by the objective metric
 *             of the hyperparameter tuning job.</p>
 *          <note>
 *             <p>The maximum number of items specified for <code>Array Members</code> refers to the
 *                 maximum number of hyperparameters for each range and also the maximum for the
 *                 hyperparameter tuning job itself. That is, the sum of the number of hyperparameters
 *                 for all the ranges can't exceed the maximum number specified.</p>
 *          </note>
 */
export interface ParameterRanges {
  /**
   * @public
   * <p>The array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_IntegerParameterRange.html">IntegerParameterRange</a> objects that specify ranges of integer
   *             hyperparameters that a hyperparameter tuning job searches.</p>
   */
  IntegerParameterRanges?: IntegerParameterRange[];

  /**
   * @public
   * <p>The array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ContinuousParameterRange.html">ContinuousParameterRange</a> objects that specify ranges of continuous
   *             hyperparameters that a hyperparameter tuning job searches.</p>
   */
  ContinuousParameterRanges?: ContinuousParameterRange[];

  /**
   * @public
   * <p>The array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CategoricalParameterRange.html">CategoricalParameterRange</a> objects that specify ranges of categorical
   *             hyperparameters that a hyperparameter tuning job searches.</p>
   */
  CategoricalParameterRanges?: CategoricalParameterRange[];

  /**
   * @public
   * <p>A list containing hyperparameter names and example values to be used by Autotune to
   *             determine optimal ranges for your tuning job.</p>
   */
  AutoParameters?: AutoParameter[];
}

/**
 * @public
 * <p>Specifies the maximum number of training jobs and parallel training jobs that a
 *             hyperparameter tuning job can launch.</p>
 */
export interface ResourceLimits {
  /**
   * @public
   * <p>The maximum number of training jobs that a hyperparameter tuning job can
   *             launch.</p>
   */
  MaxNumberOfTrainingJobs?: number;

  /**
   * @public
   * <p>The maximum number of concurrent training jobs that a hyperparameter tuning job can
   *             launch.</p>
   */
  MaxParallelTrainingJobs: number | undefined;

  /**
   * @public
   * <p>The maximum time in seconds that a hyperparameter tuning job can run.</p>
   */
  MaxRuntimeInSeconds?: number;
}

/**
 * @public
 * @enum
 */
export const HyperParameterTuningJobStrategyType = {
  BAYESIAN: "Bayesian",
  GRID: "Grid",
  HYPERBAND: "Hyperband",
  RANDOM: "Random",
} as const;

/**
 * @public
 */
export type HyperParameterTuningJobStrategyType =
  (typeof HyperParameterTuningJobStrategyType)[keyof typeof HyperParameterTuningJobStrategyType];

/**
 * @public
 * <p>The configuration for <code>Hyperband</code>, a multi-fidelity based hyperparameter
 *          tuning strategy. <code>Hyperband</code> uses the final and intermediate results of a
 *          training job to dynamically allocate resources to utilized hyperparameter configurations
 *          while automatically stopping under-performing configurations. This parameter should be
 *          provided only if <code>Hyperband</code> is selected as the <code>StrategyConfig</code>
 *          under the <code>HyperParameterTuningJobConfig</code> API.</p>
 */
export interface HyperbandStrategyConfig {
  /**
   * @public
   * <p>The minimum number of resources (such as epochs) that can be used by a training job
   *          launched by a hyperparameter tuning job. If the value for <code>MinResource</code> has not
   *          been reached, the training job is not stopped by <code>Hyperband</code>.</p>
   */
  MinResource?: number;

  /**
   * @public
   * <p>The maximum number of resources (such as epochs) that can be used by a training job
   *          launched by a hyperparameter tuning job. Once a job reaches the <code>MaxResource</code>
   *          value, it is stopped. If a value for <code>MaxResource</code> is not provided, and
   *             <code>Hyperband</code> is selected as the hyperparameter tuning strategy,
   *             <code>HyperbandTrainingJ</code> attempts to infer <code>MaxResource</code> from the
   *          following keys (if present) in <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html#sagemaker-Type-HyperParameterTrainingJobDefinition-StaticHyperParameters">StaticsHyperParameters</a>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>epochs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>numepochs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>n-epochs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>n_epochs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>num_epochs</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If <code>HyperbandStrategyConfig</code> is unable to infer a value for
   *             <code>MaxResource</code>, it generates a validation error. The maximum value is 20,000
   *          epochs. All metrics that correspond to an objective metric are used to derive <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-early-stopping.html">early stopping
   *             decisions</a>. For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/distributed-training.html">distributive</a> training jobs,
   *          ensure that duplicate metrics are not printed in the logs across the individual nodes in a
   *          training job. If multiple nodes are publishing duplicate or incorrect metrics, training
   *          jobs may make an incorrect stopping decision and stop the job prematurely. </p>
   */
  MaxResource?: number;
}

/**
 * @public
 * <p>The configuration for a training job launched by a hyperparameter tuning job. Choose
 *             <code>Bayesian</code> for Bayesian optimization, and <code>Random</code> for random
 *          search optimization. For more advanced use cases, use <code>Hyperband</code>, which
 *          evaluates objective metrics for training jobs after every epoch. For more information about
 *          strategies, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How Hyperparameter
 *             Tuning Works</a>.</p>
 */
export interface HyperParameterTuningJobStrategyConfig {
  /**
   * @public
   * <p>The configuration for the object that specifies the <code>Hyperband</code> strategy.
   *          This parameter is only supported for the <code>Hyperband</code> selection for
   *             <code>Strategy</code> within the <code>HyperParameterTuningJobConfig</code> API.</p>
   */
  HyperbandStrategyConfig?: HyperbandStrategyConfig;
}

/**
 * @public
 * @enum
 */
export const TrainingJobEarlyStoppingType = {
  AUTO: "Auto",
  OFF: "Off",
} as const;

/**
 * @public
 */
export type TrainingJobEarlyStoppingType =
  (typeof TrainingJobEarlyStoppingType)[keyof typeof TrainingJobEarlyStoppingType];

/**
 * @public
 * <p>The job completion criteria.</p>
 */
export interface TuningJobCompletionCriteria {
  /**
   * @public
   * <p>The value of the objective metric.</p>
   */
  TargetObjectiveMetricValue?: number;

  /**
   * @public
   * <p>A flag to stop your hyperparameter tuning job if model performance fails to improve as
   *             evaluated against an objective function.</p>
   */
  BestObjectiveNotImproving?: BestObjectiveNotImproving;

  /**
   * @public
   * <p>A flag to top your hyperparameter tuning job if automatic model tuning (AMT) has
   *             detected that your model has converged as evaluated against your objective
   *             function.</p>
   */
  ConvergenceDetected?: ConvergenceDetected;
}

/**
 * @public
 * <p>Configures a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobConfig {
  /**
   * @public
   * <p>Specifies how hyperparameter tuning chooses the combinations of hyperparameter values
   *             to use for the training job it launches. For information about search strategies, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How
   *                 Hyperparameter Tuning Works</a>.</p>
   */
  Strategy: HyperParameterTuningJobStrategyType | undefined;

  /**
   * @public
   * <p>The configuration for the <code>Hyperband</code> optimization strategy. This parameter
   *          should be provided only if <code>Hyperband</code> is selected as the strategy for
   *             <code>HyperParameterTuningJobConfig</code>.</p>
   */
  StrategyConfig?: HyperParameterTuningJobStrategyConfig;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobObjective.html">HyperParameterTuningJobObjective</a> specifies the objective metric used to
   *             evaluate the performance of training jobs launched by this tuning job.</p>
   */
  HyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ResourceLimits.html">ResourceLimits</a>
   *             object that specifies the maximum number of training and parallel training jobs that can
   *             be used for this hyperparameter tuning job.</p>
   */
  ResourceLimits: ResourceLimits | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ParameterRanges.html">ParameterRanges</a>
   *             object that specifies the ranges of hyperparameters that this tuning job searches over
   *             to find the optimal configuration for the highest model performance against your chosen
   *             objective metric. </p>
   */
  ParameterRanges?: ParameterRanges;

  /**
   * @public
   * <p>Specifies whether to use early stopping for training jobs launched by the
   *             hyperparameter tuning job. Because the <code>Hyperband</code> strategy has its own
   *             advanced internal early stopping mechanism, <code>TrainingJobEarlyStoppingType</code>
   *             must be <code>OFF</code> to use <code>Hyperband</code>. This parameter can take on one
   *             of the following values (the default value is <code>OFF</code>):</p>
   *          <dl>
   *             <dt>OFF</dt>
   *             <dd>
   *                <p>Training jobs launched by the hyperparameter tuning job do not use early
   *                         stopping.</p>
   *             </dd>
   *             <dt>AUTO</dt>
   *             <dd>
   *                <p>SageMaker stops training jobs launched by the hyperparameter tuning job when
   *                         they are unlikely to perform better than previously completed training jobs.
   *                         For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-early-stopping.html">Stop Training Jobs Early</a>.</p>
   *             </dd>
   *          </dl>
   */
  TrainingJobEarlyStoppingType?: TrainingJobEarlyStoppingType;

  /**
   * @public
   * <p>The tuning job's completion criteria.</p>
   */
  TuningJobCompletionCriteria?: TuningJobCompletionCriteria;

  /**
   * @public
   * <p>A value used to initialize a pseudo-random number generator. Setting a random seed and
   *             using the same seed later for the same tuning job will allow hyperparameter optimization
   *             to find more a consistent hyperparameter configuration between the two runs.</p>
   */
  RandomSeed?: number;
}

/**
 * @public
 * <p>Specifies
 *             which
 *             training algorithm to use for training jobs that a hyperparameter
 *             tuning job launches and the metrics to monitor.</p>
 */
export interface HyperParameterAlgorithmSpecification {
  /**
   * @public
   * <p> The registry path of the Docker image that contains the training algorithm. For
   *             information about Docker registry paths for built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Algorithms
   *                 Provided by Amazon SageMaker: Common Parameters</a>. SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with
   *                 Amazon SageMaker</a>.</p>
   */
  TrainingImage?: string;

  /**
   * @public
   * <p>The training input mode that the algorithm supports. For more information about input
   *             modes, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>.</p>
   *          <p>
   *             <b>Pipe mode</b>
   *          </p>
   *          <p>If an algorithm supports <code>Pipe</code> mode, Amazon SageMaker streams data directly from
   *             Amazon S3 to the container.</p>
   *          <p>
   *             <b>File mode</b>
   *          </p>
   *          <p>If an algorithm supports <code>File</code> mode, SageMaker downloads the training data from
   *             S3 to the provisioned ML storage volume, and mounts the directory to the Docker volume
   *             for the training container.</p>
   *          <p>You must provision the ML storage volume with sufficient capacity to accommodate the
   *             data downloaded from S3. In addition to the training data, the ML storage volume also
   *             stores the output model. The algorithm container uses the ML storage volume to also
   *             store intermediate information, if any.</p>
   *          <p>For distributed algorithms, training data is distributed uniformly. Your training
   *             duration is predictable if the input data objects sizes are approximately the same. SageMaker
   *             does not split the files any further for model training. If the object sizes are skewed,
   *             training won't be optimal as the data distribution is also skewed when one host in a
   *             training cluster is overloaded, thus becoming a bottleneck in training.</p>
   *          <p>
   *             <b>FastFile mode</b>
   *          </p>
   *          <p>If an algorithm supports <code>FastFile</code> mode, SageMaker streams data directly from
   *             S3 to the container with no code changes, and provides file system access to the data.
   *             Users can author their training script to interact with these files as if they were
   *             stored on disk.</p>
   *          <p>
   *             <code>FastFile</code> mode works best when the data is read sequentially. Augmented
   *             manifest files aren't supported. The startup time is lower when there are fewer files in
   *             the S3 bucket provided.</p>
   */
  TrainingInputMode: TrainingInputMode | undefined;

  /**
   * @public
   * <p>The name of the resource algorithm to use for the hyperparameter tuning job. If you
   *             specify a value for this parameter, do not specify a value for
   *                 <code>TrainingImage</code>.</p>
   */
  AlgorithmName?: string;

  /**
   * @public
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_MetricDefinition.html">MetricDefinition</a> objects that specify the
   *             metrics
   *             that the algorithm emits.</p>
   */
  MetricDefinitions?: MetricDefinition[];
}

/**
 * @public
 * @enum
 */
export const HyperParameterTuningAllocationStrategy = {
  PRIORITIZED: "Prioritized",
} as const;

/**
 * @public
 */
export type HyperParameterTuningAllocationStrategy =
  (typeof HyperParameterTuningAllocationStrategy)[keyof typeof HyperParameterTuningAllocationStrategy];

/**
 * @public
 * <p>The configuration for hyperparameter tuning resources for use in training jobs
 *             launched by the tuning job. These resources include compute instances and storage
 *             volumes. Specify one or more compute instance configurations and allocation strategies
 *             to select resources (optional).</p>
 */
export interface HyperParameterTuningInstanceConfig {
  /**
   * @public
   * <p>The instance type used for processing of hyperparameter optimization jobs. Choose from
   *             general purpose (no GPUs) instance types: ml.m5.xlarge, ml.m5.2xlarge, and ml.m5.4xlarge
   *             or compute optimized (no GPUs) instance types: ml.c5.xlarge and ml.c5.2xlarge. For more
   *             information about instance types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebooks-available-instance-types.html">instance type
   *                 descriptions</a>.</p>
   */
  InstanceType: TrainingInstanceType | undefined;

  /**
   * @public
   * <p>The number of instances of the type specified by <code>InstanceType</code>. Choose an
   *             instance count larger than 1 for distributed training algorithms. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/data-parallel-use-api.html">Step 2:
   *                 Launch a SageMaker Distributed Training Job Using the SageMaker Python SDK</a> for more
   *             information.</p>
   */
  InstanceCount: number | undefined;

  /**
   * @public
   * <p>The volume size in GB of the data to be processed for hyperparameter optimization
   *             (optional).</p>
   */
  VolumeSizeInGB: number | undefined;
}

/**
 * @public
 * <p>The configuration of resources, including compute instances and storage volumes for
 *             use in training jobs launched by hyperparameter tuning jobs.
 *                 <code>HyperParameterTuningResourceConfig</code> is similar to
 *                 <code>ResourceConfig</code>, but has the additional <code>InstanceConfigs</code> and
 *                 <code>AllocationStrategy</code> fields to allow for flexible instance management.
 *             Specify one or more instance types, count, and the allocation strategy for instance
 *             selection.</p>
 *          <note>
 *             <p>
 *                <code>HyperParameterTuningResourceConfig</code> supports the capabilities of
 *                     <code>ResourceConfig</code> with the exception of
 *                     <code>KeepAlivePeriodInSeconds</code>. Hyperparameter tuning jobs use warm pools
 *                 by default, which reuse clusters between training jobs.</p>
 *          </note>
 */
export interface HyperParameterTuningResourceConfig {
  /**
   * @public
   * <p>The instance type used to run hyperparameter optimization tuning jobs. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebooks-available-instance-types.html"> descriptions of
   *                 instance types</a> for more information.</p>
   */
  InstanceType?: TrainingInstanceType;

  /**
   * @public
   * <p>The number of compute instances of type <code>InstanceType</code> to use. For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/data-parallel-use-api.html">distributed training</a>, select a value greater than 1.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>The volume size in GB for the storage volume to be used in processing hyperparameter
   *             optimization jobs (optional). These volumes store model artifacts, incremental states
   *             and optionally, scratch space for training algorithms. Do not provide a value for this
   *             parameter if a value for <code>InstanceConfigs</code> is also specified.</p>
   *          <p>Some instance types have a fixed total local storage size. If you select one of these
   *             instances for training, <code>VolumeSizeInGB</code> cannot be greater than this total
   *             size. For a list of instance types with local instance storage and their sizes, see
   *                 <a href="http://aws.amazon.com/releasenotes/host-instance-storage-volumes-table/">instance store volumes</a>.</p>
   *          <note>
   *             <p>SageMaker supports only the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html">General Purpose SSD
   *                     (gp2)</a> storage volume type.</p>
   *          </note>
   */
  VolumeSizeInGB?: number;

  /**
   * @public
   * <p>A key used by Amazon Web Services Key Management Service to encrypt data on the storage volume
   *             attached to the compute instances used to run the training job. You can use either of
   *             the following formats to specify a key.</p>
   *          <p>KMS Key ID:</p>
   *          <p>
   *             <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *          </p>
   *          <p>Amazon Resource Name (ARN) of a KMS key:</p>
   *          <p>
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *          </p>
   *          <p>Some instances use local storage, which use a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">hardware module to
   *                 encrypt</a> storage volumes. If you choose one of these instance types, you
   *             cannot request a <code>VolumeKmsKeyId</code>. For a list of instance types that use
   *             local storage, see <a href="http://aws.amazon.com/releasenotes/host-instance-storage-volumes-table/">instance store
   *                 volumes</a>. For more information about Amazon Web Services Key Management Service, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security-kms-permissions.html">KMS
   *                 encryption</a> for more information.</p>
   */
  VolumeKmsKeyId?: string;

  /**
   * @public
   * <p>The strategy that determines the order of preference for resources specified in
   *                 <code>InstanceConfigs</code> used in hyperparameter optimization.</p>
   */
  AllocationStrategy?: HyperParameterTuningAllocationStrategy;

  /**
   * @public
   * <p>A list containing the configuration(s) for one or more resources for processing
   *             hyperparameter jobs. These resources include compute instances and storage volumes to
   *             use in model training jobs launched by hyperparameter tuning jobs. The
   *                 <code>AllocationStrategy</code> controls the order in which multiple configurations
   *             provided in <code>InstanceConfigs</code> are used.</p>
   *          <note>
   *             <p>If you only want to use a single instance configuration inside the
   *                     <code>HyperParameterTuningResourceConfig</code> API, do not provide a value for
   *                     <code>InstanceConfigs</code>. Instead, use <code>InstanceType</code>,
   *                     <code>VolumeSizeInGB</code> and <code>InstanceCount</code>. If you use
   *                     <code>InstanceConfigs</code>, do not provide values for
   *                     <code>InstanceType</code>, <code>VolumeSizeInGB</code> or
   *                     <code>InstanceCount</code>.</p>
   *          </note>
   */
  InstanceConfigs?: HyperParameterTuningInstanceConfig[];
}

/**
 * @public
 * <p>The retry strategy to use when a training job fails due to an
 *                 <code>InternalServerError</code>. <code>RetryStrategy</code> is specified as part of
 *             the <code>CreateTrainingJob</code> and <code>CreateHyperParameterTuningJob</code>
 *             requests. You can add the <code>StoppingCondition</code> parameter to the request to
 *             limit the training time for the complete job.</p>
 */
export interface RetryStrategy {
  /**
   * @public
   * <p>The number of times to retry the job. When the job is retried, it's
   *                 <code>SecondaryStatus</code> is changed to <code>STARTING</code>.</p>
   */
  MaximumRetryAttempts: number | undefined;
}

/**
 * @public
 * <p>Defines
 *             the training jobs launched by a hyperparameter tuning job.</p>
 */
export interface HyperParameterTrainingJobDefinition {
  /**
   * @public
   * <p>The job definition name.</p>
   */
  DefinitionName?: string;

  /**
   * @public
   * <p>Defines the objective metric for a hyperparameter tuning job.
   *             Hyperparameter
   *             tuning uses the value of this metric to evaluate the training jobs it launches, and
   *             returns the training job that results in either the highest or lowest value for this
   *             metric, depending on the value you specify for the <code>Type</code>
   *             parameter.</p>
   */
  TuningObjective?: HyperParameterTuningJobObjective;

  /**
   * @public
   * <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a
   *             hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs
   *             with hyperparameter values within these ranges to find the combination of values that
   *             result in the training job with the best performance as measured by the objective metric
   *             of the hyperparameter tuning job.</p>
   *          <note>
   *             <p>The maximum number of items specified for <code>Array Members</code> refers to the
   *                 maximum number of hyperparameters for each range and also the maximum for the
   *                 hyperparameter tuning job itself. That is, the sum of the number of hyperparameters
   *                 for all the ranges can't exceed the maximum number specified.</p>
   *          </note>
   */
  HyperParameterRanges?: ParameterRanges;

  /**
   * @public
   * <p>Specifies the values of hyperparameters
   *             that
   *             do not change for the tuning job.</p>
   */
  StaticHyperParameters?: Record<string, string>;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterAlgorithmSpecification.html">HyperParameterAlgorithmSpecification</a> object that
   *             specifies
   *             the resource algorithm to use for the training jobs that the tuning
   *             job launches.</p>
   */
  AlgorithmSpecification: HyperParameterAlgorithmSpecification | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the
   *             IAM
   *             role associated with the training jobs that the tuning job
   *             launches.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Channel.html">Channel</a> objects that
   *             specify
   *             the
   *             input for the training jobs that the tuning job launches.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that you want the training jobs
   *             that this hyperparameter tuning job launches to connect to. Control access to and from
   *             your training container by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * @public
   * <p>Specifies the path to the Amazon S3 bucket where you
   *             store
   *             model artifacts from the training jobs that the tuning job
   *             launches.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * @public
   * <p>The resources,
   *             including
   *             the compute instances and storage volumes, to use for the training
   *             jobs that the tuning job launches.</p>
   *          <p>Storage volumes store model artifacts and
   *             incremental
   *             states. Training algorithms might also use storage volumes for
   *             scratch
   *             space. If you want SageMaker to use the storage volume to store the
   *             training data, choose <code>File</code> as the <code>TrainingInputMode</code> in the
   *             algorithm specification. For distributed training algorithms, specify an instance count
   *             greater than 1.</p>
   *          <note>
   *             <p>If you want to use hyperparameter optimization with instance type flexibility, use
   *                     <code>HyperParameterTuningResourceConfig</code> instead.</p>
   *          </note>
   */
  ResourceConfig?: ResourceConfig;

  /**
   * @public
   * <p>Specifies a limit to how long a model hyperparameter training job can run. It also
   *             specifies how long a managed spot training job has to complete. When the job reaches the
   *             time limit, SageMaker ends the training job. Use this API to cap model training costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * @public
   * <p>Isolates the training container. No inbound or outbound network calls can be made,
   *             except for calls between peers within a training cluster for distributed training. If
   *             network isolation is used for training jobs that are configured to use a VPC, SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * @public
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
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
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;

  /**
   * @public
   * <p>The configuration for the hyperparameter tuning resources, including the compute
   *             instances and storage volumes, used for training jobs launched by the tuning job. By
   *             default, storage volumes hold model artifacts and incremental states. Choose
   *                 <code>File</code> for <code>TrainingInputMode</code> in the
   *                 <code>AlgorithmSpecification</code> parameter to additionally store training data in
   *             the storage volume (optional).</p>
   */
  HyperParameterTuningResourceConfig?: HyperParameterTuningResourceConfig;

  /**
   * @public
   * <p>An environment variable that you can pass into the SageMaker <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a> API. You can use an existing <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html#sagemaker-CreateTrainingJob-request-Environment">environment variable from the training container</a> or use your own. See
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html">Define metrics and variables</a> for more information.</p>
   *          <note>
   *             <p>The maximum number of items specified for <code>Map Entries</code> refers to the
   *                 maximum number of environment variables for each <code>TrainingJobDefinition</code>
   *                 and also the maximum for the hyperparameter tuning job itself. That is, the sum of
   *                 the number of environment variables for all the training job definitions can't
   *                 exceed the maximum number specified.</p>
   *          </note>
   */
  Environment?: Record<string, string>;
}

/**
 * @public
 * <p>A previously completed or stopped hyperparameter tuning job to be used as a starting
 *             point for a new hyperparameter tuning job.</p>
 */
export interface ParentHyperParameterTuningJob {
  /**
   * @public
   * <p>The name of the hyperparameter tuning job to be used as a starting point for a new
   *             hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobName?: string;
}

/**
 * @public
 * @enum
 */
export const HyperParameterTuningJobWarmStartType = {
  IDENTICAL_DATA_AND_ALGORITHM: "IdenticalDataAndAlgorithm",
  TRANSFER_LEARNING: "TransferLearning",
} as const;

/**
 * @public
 */
export type HyperParameterTuningJobWarmStartType =
  (typeof HyperParameterTuningJobWarmStartType)[keyof typeof HyperParameterTuningJobWarmStartType];

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
export interface HyperParameterTuningJobWarmStartConfig {
  /**
   * @public
   * <p>An array of hyperparameter tuning jobs that are used as the starting point for the new
   *             hyperparameter tuning job. For more information about warm starting a hyperparameter
   *             tuning job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-warm-start.html">Using a Previous
   *                 Hyperparameter Tuning Job as a Starting Point</a>.</p>
   *          <p>Hyperparameter tuning jobs created before October 1, 2018 cannot be used as parent
   *             jobs for warm start tuning jobs.</p>
   */
  ParentHyperParameterTuningJobs: ParentHyperParameterTuningJob[] | undefined;

  /**
   * @public
   * <p>Specifies one of the following:</p>
   *          <dl>
   *             <dt>IDENTICAL_DATA_AND_ALGORITHM</dt>
   *             <dd>
   *                <p>The new hyperparameter tuning job uses the same input data and training
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
   *             </dd>
   *             <dt>TRANSFER_LEARNING</dt>
   *             <dd>
   *                <p>The new hyperparameter tuning job can include input data, hyperparameter
   *                         ranges, maximum number of concurrent training jobs, and maximum number of
   *                         training jobs that are different than those of its parent hyperparameter
   *                         tuning jobs. The training image can also be a different version from the
   *                         version used in the parent hyperparameter tuning job. You can also change
   *                         hyperparameters from tunable to static, and from static to tunable, but the
   *                         total number of static plus tunable hyperparameters must remain the same as
   *                         it is in all parent jobs. The objective metric for the new tuning job must
   *                         be the same as for all parent jobs.</p>
   *             </dd>
   *          </dl>
   */
  WarmStartType: HyperParameterTuningJobWarmStartType | undefined;
}

/**
 * @public
 */
export interface CreateHyperParameterTuningJobRequest {
  /**
   * @public
   * <p>The name of the tuning job. This name is the prefix for the names of all training jobs
   *             that this tuning job launches. The name must be unique within the same Amazon Web Services account and Amazon Web Services Region. The name must have 1 to 32 characters. Valid
   *             characters are a-z, A-Z, 0-9, and : + = @ _ % - (hyphen). The name is not case
   *             sensitive.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html">HyperParameterTuningJobConfig</a> object that describes the tuning job,
   *             including the search strategy, the objective metric used to evaluate training jobs,
   *             ranges of parameters to search, and resource limits for the tuning job. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How
   *                 Hyperparameter Tuning Works</a>.</p>
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html">HyperParameterTrainingJobDefinition</a> object that describes the training jobs
   *             that this tuning job launches, including static hyperparameters, input data
   *             configuration, output data configuration, resource configuration, and stopping
   *             condition.</p>
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
   * <p>Specifies the configuration for starting the hyperparameter tuning job using one or
   *             more previous tuning jobs as a starting point. The results of previous tuning jobs are
   *             used to inform which combinations of hyperparameters to search over in the new tuning
   *             job.</p>
   *          <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using
   *             the objective metric. If you specify <code>IDENTICAL_DATA_AND_ALGORITHM</code> as the
   *                 <code>WarmStartType</code> value for the warm start configuration, the training job
   *             that performs the best in the new tuning job is compared to the best training jobs from
   *             the parent tuning jobs. From these, the training job that performs the best as measured
   *             by the objective metric is returned as the overall best training job.</p>
   *          <note>
   *             <p>All training jobs launched by parent hyperparameter tuning jobs and the new
   *                 hyperparameter tuning jobs count against the limit of training jobs for the tuning
   *                 job.</p>
   *          </note>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * @public
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   *          <p>Tags that you specify for the tuning job are also added to all training jobs that the
   *             tuning job launches.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Configures SageMaker Automatic model tuning (AMT) to automatically find optimal
   *             parameters for the following fields:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html#sagemaker-Type-HyperParameterTuningJobConfig-ParameterRanges">ParameterRanges</a>: The names and ranges of parameters that a
   *                     hyperparameter tuning job can optimize.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ResourceLimits.html">ResourceLimits</a>: The maximum resources that can be used for a
   *                     training job. These resources include the maximum number of training jobs, the
   *                     maximum runtime of a tuning job, and the maximum number of training jobs to run
   *                     at the same time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html#sagemaker-Type-HyperParameterTuningJobConfig-TrainingJobEarlyStoppingType">TrainingJobEarlyStoppingType</a>: A flag that specifies whether or not
   *                     to use early stopping for training jobs launched by a hyperparameter tuning
   *                     job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html#sagemaker-Type-HyperParameterTrainingJobDefinition-RetryStrategy">RetryStrategy</a>: The number of times to retry a training job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html">Strategy</a>: Specifies how hyperparameter tuning chooses the
   *                     combinations of hyperparameter values to use for the training jobs that it
   *                     launches.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ConvergenceDetected.html">ConvergenceDetected</a>: A flag to indicate that Automatic model tuning
   *                     (AMT) has detected model convergence.</p>
   *             </li>
   *          </ul>
   */
  Autotune?: Autotune;
}

/**
 * @public
 */
export interface CreateHyperParameterTuningJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the tuning job. SageMaker assigns an ARN to a
   *             hyperparameter tuning job when you create it.</p>
   */
  HyperParameterTuningJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateImageRequest {
  /**
   * @public
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The display name of the image. If not provided, <code>ImageName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The name of the image. Must be unique to your account.</p>
   */
  ImageName: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A list of tags to apply to the image.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateImageResponse {
  /**
   * @public
   * <p>The ARN of the image.</p>
   */
  ImageArn?: string;
}

/**
 * @public
 * @enum
 */
export const JobType = {
  INFERENCE: "INFERENCE",
  NOTEBOOK_KERNEL: "NOTEBOOK_KERNEL",
  TRAINING: "TRAINING",
} as const;

/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const Processor = {
  CPU: "CPU",
  GPU: "GPU",
} as const;

/**
 * @public
 */
export type Processor = (typeof Processor)[keyof typeof Processor];

/**
 * @public
 * @enum
 */
export const VendorGuidance = {
  ARCHIVED: "ARCHIVED",
  NOT_PROVIDED: "NOT_PROVIDED",
  STABLE: "STABLE",
  TO_BE_ARCHIVED: "TO_BE_ARCHIVED",
} as const;

/**
 * @public
 */
export type VendorGuidance = (typeof VendorGuidance)[keyof typeof VendorGuidance];

/**
 * @public
 */
export interface CreateImageVersionRequest {
  /**
   * @public
   * <p>The registry path of the container image to use as the starting point for this
   *         version. The path is an Amazon Elastic Container Registry (ECR) URI in the following format:</p>
   *          <p>
   *             <code><acct-id>.dkr.ecr.<region>.amazonaws.com/<repo-name[:tag] or [@digest]></code>
   *          </p>
   */
  BaseImage: string | undefined;

  /**
   * @public
   * <p>A unique ID. If not specified, the Amazon Web Services CLI and Amazon Web Services SDKs, such as the SDK for Python
   *         (Boto3), add a unique value to the call.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The <code>ImageName</code> of the <code>Image</code> to create a version of.</p>
   */
  ImageName: string | undefined;

  /**
   * @public
   * <p>A list of aliases created with the image version.</p>
   */
  Aliases?: string[];

  /**
   * @public
   * <p>The stability of the image version, specified by the maintainer.</p>
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
export interface CreateImageVersionResponse {
  /**
   * @public
   * <p>The ARN of the image version.</p>
   */
  ImageVersionArn?: string;
}

/**
 * @public
 * <p>The Amazon S3 location and configuration for storing inference request and response data.</p>
 */
export interface InferenceExperimentDataStorageConfig {
  /**
   * @public
   * <p>The Amazon S3 bucket where the inference request and response data is stored. </p>
   */
  Destination: string | undefined;

  /**
   * @public
   * <p>
   *            The Amazon Web Services Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3
   *            server-side encryption.
   *         </p>
   */
  KmsKey?: string;

  /**
   * @public
   * <p>Configuration specifying how to treat different headers. If no headers are specified
   *             Amazon SageMaker will by default base64 encode when capturing the data.</p>
   */
  ContentType?: CaptureContentTypeHeader;
}

/**
 * @public
 * @enum
 */
export const ModelInfrastructureType = {
  REAL_TIME_INFERENCE: "RealTimeInference",
} as const;

/**
 * @public
 */
export type ModelInfrastructureType = (typeof ModelInfrastructureType)[keyof typeof ModelInfrastructureType];

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  ML_C4_2XLARGE: "ml.c4.2xlarge",
  ML_C4_4XLARGE: "ml.c4.4xlarge",
  ML_C4_8XLARGE: "ml.c4.8xlarge",
  ML_C4_XLARGE: "ml.c4.xlarge",
  ML_C5D_18XLARGE: "ml.c5d.18xlarge",
  ML_C5D_2XLARGE: "ml.c5d.2xlarge",
  ML_C5D_4XLARGE: "ml.c5d.4xlarge",
  ML_C5D_9XLARGE: "ml.c5d.9xlarge",
  ML_C5D_XLARGE: "ml.c5d.xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_G4DN_12XLARGE: "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE: "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE: "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE: "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE: "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE: "ml.g4dn.xlarge",
  ML_G5_12XLARGE: "ml.g5.12xlarge",
  ML_G5_16XLARGE: "ml.g5.16xlarge",
  ML_G5_24XLARGE: "ml.g5.24xlarge",
  ML_G5_2XLARGE: "ml.g5.2xlarge",
  ML_G5_48XLARGE: "ml.g5.48xlarge",
  ML_G5_4XLARGE: "ml.g5.4xlarge",
  ML_G5_8XLARGE: "ml.g5.8xlarge",
  ML_G5_XLARGE: "ml.g5.xlarge",
  ML_INF1_24XLARGE: "ml.inf1.24xlarge",
  ML_INF1_2XLARGE: "ml.inf1.2xlarge",
  ML_INF1_6XLARGE: "ml.inf1.6xlarge",
  ML_INF1_XLARGE: "ml.inf1.xlarge",
  ML_M4_10XLARGE: "ml.m4.10xlarge",
  ML_M4_16XLARGE: "ml.m4.16xlarge",
  ML_M4_2XLARGE: "ml.m4.2xlarge",
  ML_M4_4XLARGE: "ml.m4.4xlarge",
  ML_M4_XLARGE: "ml.m4.xlarge",
  ML_M5D_12XLARGE: "ml.m5d.12xlarge",
  ML_M5D_16XLARGE: "ml.m5d.16xlarge",
  ML_M5D_24XLARGE: "ml.m5d.24xlarge",
  ML_M5D_2XLARGE: "ml.m5d.2xlarge",
  ML_M5D_4XLARGE: "ml.m5d.4xlarge",
  ML_M5D_8XLARGE: "ml.m5d.8xlarge",
  ML_M5D_LARGE: "ml.m5d.large",
  ML_M5D_XLARGE: "ml.m5d.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_P2_16XLARGE: "ml.p2.16xlarge",
  ML_P2_8XLARGE: "ml.p2.8xlarge",
  ML_P2_XLARGE: "ml.p2.xlarge",
  ML_P3DN_24XLARGE: "ml.p3dn.24xlarge",
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_P4DE_24XLARGE: "ml.p4de.24xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
  ML_R5_12XLARGE: "ml.r5.12xlarge",
  ML_R5_16XLARGE: "ml.r5.16xlarge",
  ML_R5_24XLARGE: "ml.r5.24xlarge",
  ML_R5_2XLARGE: "ml.r5.2xlarge",
  ML_R5_4XLARGE: "ml.r5.4xlarge",
  ML_R5_8XLARGE: "ml.r5.8xlarge",
  ML_R5_LARGE: "ml.r5.large",
  ML_R5_XLARGE: "ml.r5.xlarge",
  ML_T2_2XLARGE: "ml.t2.2xlarge",
  ML_T2_LARGE: "ml.t2.large",
  ML_T2_MEDIUM: "ml.t2.medium",
  ML_T2_XLARGE: "ml.t2.xlarge",
  ML_T3_2XLARGE: "ml.t3.2xlarge",
  ML_T3_LARGE: "ml.t3.large",
  ML_T3_MEDIUM: "ml.t3.medium",
  ML_T3_XLARGE: "ml.t3.xlarge",
} as const;

/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * @public
 * <p>The infrastructure configuration for deploying the model to a real-time inference endpoint.</p>
 */
export interface RealTimeInferenceConfig {
  /**
   * @public
   * <p>The instance type the model is deployed to.</p>
   */
  InstanceType: _InstanceType | undefined;

  /**
   * @public
   * <p>The number of instances of the type specified by <code>InstanceType</code>.</p>
   */
  InstanceCount: number | undefined;
}

/**
 * @public
 * <p>The configuration for the infrastructure that the model will be deployed to.</p>
 */
export interface ModelInfrastructureConfig {
  /**
   * @public
   * <p>The inference option to which to deploy your model. Possible values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RealTime</code>: Deploy to real-time inference.</p>
   *             </li>
   *          </ul>
   */
  InfrastructureType: ModelInfrastructureType | undefined;

  /**
   * @public
   * <p>The infrastructure configuration for deploying the model to real-time inference.</p>
   */
  RealTimeInferenceConfig: RealTimeInferenceConfig | undefined;
}

/**
 * @public
 * <p>Contains information about the deployment options of a model.</p>
 */
export interface ModelVariantConfig {
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
   * <p>The configuration for the infrastructure that the model will be deployed to.</p>
   */
  InfrastructureConfig: ModelInfrastructureConfig | undefined;
}

/**
 * @public
 * <p>The start and end times of an inference experiment.</p>
 *          <p>The maximum duration that you can set for an inference experiment is 30 days.</p>
 */
export interface InferenceExperimentSchedule {
  /**
   * @public
   * <p>The timestamp at which the inference experiment started or will start.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The timestamp at which the inference experiment ended or will end.</p>
   */
  EndTime?: Date;
}

/**
 * @public
 * <p>The name and sampling percentage of a shadow variant.</p>
 */
export interface ShadowModelVariantConfig {
  /**
   * @public
   * <p>The name of the shadow variant.</p>
   */
  ShadowModelVariantName: string | undefined;

  /**
   * @public
   * <p>
   *            The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant.
   *        </p>
   */
  SamplingPercentage: number | undefined;
}

/**
 * @public
 * <p>
 *            The configuration of <code>ShadowMode</code> inference experiment type, which specifies a production variant
 *            to take all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the
 *            inference requests. For the shadow variant it also specifies the percentage of requests that Amazon SageMaker replicates.
 *        </p>
 */
export interface ShadowModeConfig {
  /**
   * @public
   * <p>
   *            The name of the production variant, which takes all the inference requests.
   *        </p>
   */
  SourceModelVariantName: string | undefined;

  /**
   * @public
   * <p>List of shadow variant configurations.</p>
   */
  ShadowModelVariants: ShadowModelVariantConfig[] | undefined;
}

/**
 * @public
 * @enum
 */
export const InferenceExperimentType = {
  SHADOW_MODE: "ShadowMode",
} as const;

/**
 * @public
 */
export type InferenceExperimentType = (typeof InferenceExperimentType)[keyof typeof InferenceExperimentType];

/**
 * @public
 */
export interface CreateInferenceExperimentRequest {
  /**
   * @public
   * <p>The name for the inference experiment.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>
   *            The type of the inference experiment that you want to run. The following types of experiments are possible:
   *        </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ShadowMode</code>: You can use this type to validate a shadow variant. For more information,
   *                    see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests.html">Shadow tests</a>.
   *                </p>
   *             </li>
   *          </ul>
   */
  Type: InferenceExperimentType | undefined;

  /**
   * @public
   * <p>
   *            The duration for which you want the inference experiment to run. If you don't specify this field, the
   *            experiment automatically starts immediately upon creation and concludes after 7 days.
   *        </p>
   */
  Schedule?: InferenceExperimentSchedule;

  /**
   * @public
   * <p>A description for the inference experiment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *            The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage
   *            Amazon SageMaker Inference endpoints for model deployment.
   *        </p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>
   *            The name of the Amazon SageMaker endpoint on which you want to run the inference experiment.
   *        </p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>
   *            An array of <code>ModelVariantConfig</code> objects. There is one for each variant in the inference
   *            experiment. Each <code>ModelVariantConfig</code> object in the array describes the infrastructure
   *            configuration for the corresponding variant.
   *        </p>
   */
  ModelVariants: ModelVariantConfig[] | undefined;

  /**
   * @public
   * <p>
   *            The Amazon S3 location and configuration for storing inference request and response data.
   *        </p>
   *          <p>
   *            This is an optional parameter that you can use for data capture. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-capture.html">Capture data</a>.
   *        </p>
   */
  DataStorageConfig?: InferenceExperimentDataStorageConfig;

  /**
   * @public
   * <p>
   *            The configuration of <code>ShadowMode</code> inference experiment type. Use this field to specify a
   *            production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a
   *            percentage of the inference requests. For the shadow variant also specify the percentage of requests that
   *            Amazon SageMaker replicates.
   *        </p>
   */
  ShadowModeConfig: ShadowModeConfig | undefined;

  /**
   * @public
   * <p>
   *            The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on
   *            the storage volume attached to the ML compute instance that hosts the endpoint.  The <code>KmsKey</code> can
   *            be any of the following formats:
   *        </p>
   *          <ul>
   *             <li>
   *                <p>KMS key ID</p>
   *                <p>
   *                   <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS key</p>
   *                <p>
   *                   <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>KMS key Alias</p>
   *                <p>
   *                   <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS key Alias</p>
   *                <p>
   *                   <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *            If you use a KMS key ID or an alias of your KMS key, the Amazon SageMaker execution role must include permissions to
   *            call <code>kms:Encrypt</code>. If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for
   *            your role's account. Amazon SageMaker uses server-side encryption with KMS managed keys for
   *            <code>OutputDataConfig</code>. If you use a bucket policy with an <code>s3:PutObject</code> permission that
   *            only allows objects with server-side encryption, set the condition key of
   *            <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS managed Encryption Keys</a>
   *            in the <i>Amazon Simple Storage Service Developer Guide.</i>
   *          </p>
   *          <p>
   *            The KMS key policy must grant permission to the IAM role that you specify in your
   *            <code>CreateEndpoint</code> and <code>UpdateEndpoint</code> requests. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using Key Policies in Amazon Web Services KMS</a> in the <i>Amazon Web Services Key Management Service Developer
   *            Guide</i>.
   *        </p>
   */
  KmsKey?: string;

  /**
   * @public
   * <p>
   *            Array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different
   *            ways, for example, by purpose, owner, or environment. For more information, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/tagging.html">Tagging your Amazon Web Services Resources</a>.
   *        </p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateInferenceExperimentResponse {
  /**
   * @public
   * <p>The ARN for your inference experiment.</p>
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 * <p>The configuration for the payload for a recommendation job.</p>
 */
export interface RecommendationJobPayloadConfig {
  /**
   * @public
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  SamplePayloadUrl?: string;

  /**
   * @public
   * <p>The supported MIME types for the input data.</p>
   */
  SupportedContentTypes?: string[];
}

/**
 * @public
 * @enum
 */
export const RecommendationJobSupportedEndpointType = {
  REALTIME: "RealTime",
  SERVERLESS: "Serverless",
} as const;

/**
 * @public
 */
export type RecommendationJobSupportedEndpointType =
  (typeof RecommendationJobSupportedEndpointType)[keyof typeof RecommendationJobSupportedEndpointType];

/**
 * @public
 * <p>Specifies mandatory fields for running an Inference Recommender job directly in the
 *          <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceRecommendationsJob.html">CreateInferenceRecommendationsJob</a>
 *          API. The fields specified in <code>ContainerConfig</code> override the corresponding fields in the model package. Use
 *       <code>ContainerConfig</code> if you want to specify these fields for the recommendation job but don't want to edit them in your model package.</p>
 */
export interface RecommendationJobContainerConfig {
  /**
   * @public
   * <p>The machine learning domain of the model and its components.</p>
   *          <p>Valid Values: <code>COMPUTER_VISION | NATURAL_LANGUAGE_PROCESSING |
   *       MACHINE_LEARNING</code>
   *          </p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The machine learning task that the model accomplishes.</p>
   *          <p>Valid Values: <code>IMAGE_CLASSIFICATION | OBJECT_DETECTION
   *          | TEXT_GENERATION | IMAGE_SEGMENTATION | FILL_MASK | CLASSIFICATION |
   *       REGRESSION | OTHER</code>
   *          </p>
   */
  Task?: string;

  /**
   * @public
   * <p>The machine learning framework of the container image.</p>
   *          <p>Valid Values: <code>TENSORFLOW | PYTORCH | XGBOOST | SAGEMAKER-SCIKIT-LEARN</code>
   *          </p>
   */
  Framework?: string;

  /**
   * @public
   * <p>The framework version of the container image.</p>
   */
  FrameworkVersion?: string;

  /**
   * @public
   * <p>Specifies the <code>SamplePayloadUrl</code> and all other sample payload-related fields.</p>
   */
  PayloadConfig?: RecommendationJobPayloadConfig;

  /**
   * @public
   * <p>The name of a pre-trained machine learning model benchmarked by Amazon SageMaker Inference Recommender that matches your model.</p>
   *          <p>Valid Values: <code>efficientnetb7 | unet | xgboost | faster-rcnn-resnet101 | nasnetlarge | vgg16 | inception-v3 | mask-rcnn | sagemaker-scikit-learn |
   *       densenet201-gluon | resnet18v2-gluon | xception | densenet201 | yolov4 | resnet152 | bert-base-cased | xceptionV1-keras | resnet50 | retinanet</code>
   *          </p>
   */
  NearestModelName?: string;

  /**
   * @public
   * <p>A list of the instance types that are used to generate inferences in real-time.</p>
   */
  SupportedInstanceTypes?: string[];

  /**
   * @public
   * <p>Specifies the name and shape of the expected data inputs for your trained model with a JSON dictionary form.
   *          This field is used for optimizing your model using SageMaker Neo. For more information, see
   *          <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_InputConfig.html#sagemaker-Type-InputConfig-DataInputConfig">DataInputConfig</a>.</p>
   */
  DataInputConfig?: string;

  /**
   * @public
   * <p>The endpoint type to receive recommendations for. By default this is null, and the results of
   *          the inference recommendation job return a combined list of both real-time and serverless benchmarks.
   *          By specifying a value for this field, you can receive a longer list of benchmarks for the desired endpoint type.</p>
   */
  SupportedEndpointType?: RecommendationJobSupportedEndpointType;

  /**
   * @public
   * <p>The supported MIME types for the output data.</p>
   */
  SupportedResponseMIMETypes?: string[];
}

/**
 * @public
 * <p>Specifies the range of environment parameters</p>
 */
export interface EnvironmentParameterRanges {
  /**
   * @public
   * <p>Specified a list of parameters for each category.</p>
   */
  CategoricalParameterRanges?: CategoricalParameter[];
}

/**
 * @public
 * <p>The endpoint configuration for the load test.</p>
 */
export interface EndpointInputConfiguration {
  /**
   * @public
   * <p>The instance types to use for the load test.</p>
   */
  InstanceType?: ProductionVariantInstanceType;

  /**
   * @public
   * <p>The inference specification name in the model package version.</p>
   */
  InferenceSpecificationName?: string;

  /**
   * @public
   * <p> The parameter you want to benchmark against.</p>
   */
  EnvironmentParameterRanges?: EnvironmentParameterRanges;

  /**
   * @public
   * <p>Specifies the serverless configuration for an endpoint variant.</p>
   */
  ServerlessConfig?: ProductionVariantServerlessConfig;
}

/**
 * @public
 * <p>Details about a customer endpoint that was compared in an Inference Recommender job.</p>
 */
export interface EndpointInfo {
  /**
   * @public
   * <p>The name of a customer's endpoint.</p>
   */
  EndpointName: string | undefined;
}

/**
 * @public
 * <p>Specifies the maximum number of jobs that can run in parallel
 *     and the maximum number of jobs that can run.</p>
 */
export interface RecommendationJobResourceLimit {
  /**
   * @public
   * <p>Defines the maximum number of load tests.</p>
   */
  MaxNumberOfTests?: number;

  /**
   * @public
   * <p>Defines the maximum number of parallel load tests.</p>
   */
  MaxParallelOfTests?: number;
}

/**
 * @public
 * <p>Defines the traffic pattern.</p>
 */
export interface Phase {
  /**
   * @public
   * <p>Specifies how many concurrent users to start with. The value should be between 1 and 3.</p>
   */
  InitialNumberOfUsers?: number;

  /**
   * @public
   * <p>Specified how many new users to spawn in a minute.</p>
   */
  SpawnRate?: number;

  /**
   * @public
   * <p>Specifies how long a traffic phase should be. For custom load tests, the value should be between 120 and 3600.
   *       This value should not exceed <code>JobDurationInSeconds</code>.</p>
   */
  DurationInSeconds?: number;
}

/**
 * @public
 * <p>Defines the stairs traffic pattern for an Inference Recommender load test. This pattern
 *          type consists of multiple steps where the number of users increases at each step.</p>
 *          <p>Specify either the stairs or phases traffic pattern.</p>
 */
export interface Stairs {
  /**
   * @public
   * <p>Defines how long each traffic step should be.</p>
   */
  DurationInSeconds?: number;

  /**
   * @public
   * <p>Specifies how many steps to perform during traffic.</p>
   */
  NumberOfSteps?: number;

  /**
   * @public
   * <p>Specifies how many new users to spawn in each step.</p>
   */
  UsersPerStep?: number;
}

/**
 * @public
 * @enum
 */
export const TrafficType = {
  PHASES: "PHASES",
  STAIRS: "STAIRS",
} as const;

/**
 * @public
 */
export type TrafficType = (typeof TrafficType)[keyof typeof TrafficType];

/**
 * @public
 * <p>Defines the traffic pattern of the load test.</p>
 */
export interface TrafficPattern {
  /**
   * @public
   * <p>Defines the traffic patterns. Choose either <code>PHASES</code> or <code>STAIRS</code>.</p>
   */
  TrafficType?: TrafficType;

  /**
   * @public
   * <p>Defines the phases traffic specification.</p>
   */
  Phases?: Phase[];

  /**
   * @public
   * <p>Defines the stairs traffic pattern.</p>
   */
  Stairs?: Stairs;
}

/**
 * @public
 * <p>Inference Recommender provisions SageMaker endpoints with access to VPC in the inference recommendation job.</p>
 */
export interface RecommendationJobVpcConfig {
  /**
   * @public
   * <p>The VPC security group IDs. IDs have the form of <code>sg-xxxxxxxx</code>.
   *          Specify the security groups for the VPC that is specified in the <code>Subnets</code> field.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * @public
   * <p>The ID of the subnets in the VPC to which you want to connect your model.</p>
   */
  Subnets: string[] | undefined;
}

/**
 * @public
 * <p>The input configuration of the recommendation job.</p>
 */
export interface RecommendationJobInputConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a versioned model package.</p>
   */
  ModelPackageVersionArn?: string;

  /**
   * @public
   * <p>Specifies the maximum duration of the job, in seconds. The maximum value is 18,000 seconds.</p>
   */
  JobDurationInSeconds?: number;

  /**
   * @public
   * <p>Specifies the traffic pattern of the job.</p>
   */
  TrafficPattern?: TrafficPattern;

  /**
   * @public
   * <p>Defines the resource limit of the job.</p>
   */
  ResourceLimit?: RecommendationJobResourceLimit;

  /**
   * @public
   * <p>Specifies the endpoint configuration to use for a job.</p>
   */
  EndpointConfigurations?: EndpointInputConfiguration[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service (Amazon Web Services KMS) key
   *          that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
   *          This key will be passed to SageMaker Hosting for endpoint creation. </p>
   *          <p>The SageMaker execution role must have <code>kms:CreateGrant</code> permission in order to encrypt data on the storage
   *          volume of the endpoints created for inference recommendation. The inference recommendation job will fail
   *          asynchronously during endpoint configuration creation if the role passed does not have
   *          <code>kms:CreateGrant</code> permission.</p>
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

  /**
   * @public
   * <p>Specifies mandatory fields for running an Inference Recommender job. The fields specified in <code>ContainerConfig</code>
   *          override the corresponding fields in the model package.</p>
   */
  ContainerConfig?: RecommendationJobContainerConfig;

  /**
   * @public
   * <p>Existing customer endpoints on which to run an Inference Recommender job.</p>
   */
  Endpoints?: EndpointInfo[];

  /**
   * @public
   * <p>Inference Recommender provisions SageMaker endpoints with access to VPC in the inference recommendation job.</p>
   */
  VpcConfig?: RecommendationJobVpcConfig;

  /**
   * @public
   * <p>The name of the created model.</p>
   */
  ModelName?: string;
}

/**
 * @public
 * @enum
 */
export const RecommendationJobType = {
  ADVANCED: "Advanced",
  DEFAULT: "Default",
} as const;

/**
 * @public
 */
export type RecommendationJobType = (typeof RecommendationJobType)[keyof typeof RecommendationJobType];

/**
 * @public
 * <p>Provides information about the output configuration for the compiled
 *          model.</p>
 */
export interface RecommendationJobCompiledOutputConfig {
  /**
   * @public
   * <p>Identifies the Amazon S3 bucket where you want SageMaker to store the
   *          compiled model artifacts.</p>
   */
  S3OutputUri?: string;
}

/**
 * @public
 * <p>Provides information about the output configuration for the compiled model.</p>
 */
export interface RecommendationJobOutputConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service (Amazon Web Services KMS) key
   *          that Amazon SageMaker uses to encrypt your output artifacts with Amazon S3 server-side encryption.
   *          The SageMaker execution role must have <code>kms:GenerateDataKey</code> permission.</p>
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
   * @public
   * <p>Provides information about the output configuration for the compiled
   *          model.</p>
   */
  CompiledOutputConfig?: RecommendationJobCompiledOutputConfig;
}

/**
 * @public
 * @enum
 */
export const FlatInvocations = {
  CONTINUE: "Continue",
  STOP: "Stop",
} as const;

/**
 * @public
 */
export type FlatInvocations = (typeof FlatInvocations)[keyof typeof FlatInvocations];

/**
 * @public
 * <p>The model latency threshold.</p>
 */
export interface ModelLatencyThreshold {
  /**
   * @public
   * <p>The model latency percentile threshold. Acceptable values are <code>P95</code> and <code>P99</code>.
   *          For custom load tests, specify the value as <code>P95</code>.</p>
   */
  Percentile?: string;

  /**
   * @public
   * <p>The model latency percentile value in milliseconds.</p>
   */
  ValueInMilliseconds?: number;
}

/**
 * @public
 * <p>Specifies conditions for stopping a job. When a job reaches a
 *            stopping condition limit, SageMaker ends the job.</p>
 */
export interface RecommendationJobStoppingConditions {
  /**
   * @public
   * <p>The maximum number of requests per minute expected for the endpoint.</p>
   */
  MaxInvocations?: number;

  /**
   * @public
   * <p>The interval of time taken by a model to respond as viewed from SageMaker.
   *           The interval includes the local communication time taken to send the request
   *           and to fetch the response from the container of a model and the time taken to
   *           complete the inference in the container.</p>
   */
  ModelLatencyThresholds?: ModelLatencyThreshold[];

  /**
   * @public
   * <p>Stops a load test when the number of invocations (TPS) peaks and flattens,
   *          which means that the instance has reached capacity. The default value is <code>Stop</code>.
   *       If you want the load test to continue after invocations have flattened, set the value to <code>Continue</code>.</p>
   */
  FlatInvocations?: FlatInvocations;
}

/**
 * @public
 */
export interface CreateInferenceRecommendationsJobRequest {
  /**
   * @public
   * <p>A name for the recommendation job. The name must be unique within
   *            the Amazon Web Services Region and within your Amazon Web Services account.
   *           The job name is passed down to the resources created by the recommendation job.
   *           The names of resources (such as the model, endpoint configuration, endpoint, and compilation)
   *           that are prefixed with the job name are truncated at 40 characters.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>Defines the type of recommendation job. Specify <code>Default</code> to initiate an instance
   *            recommendation and <code>Advanced</code> to initiate a load test. If left unspecified,
   *            Amazon SageMaker Inference Recommender will run an instance recommendation (<code>DEFAULT</code>) job.</p>
   */
  JobType: RecommendationJobType | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker
   *     to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>Provides information about the versioned model package Amazon Resource Name (ARN),
   *     the traffic pattern, and endpoint configurations.</p>
   */
  InputConfig: RecommendationJobInputConfig | undefined;

  /**
   * @public
   * <p>Description of the recommendation job.</p>
   */
  JobDescription?: string;

  /**
   * @public
   * <p>A set of conditions for stopping a recommendation job.  If any of
   *           the conditions are met, the job is automatically stopped.</p>
   */
  StoppingConditions?: RecommendationJobStoppingConditions;

  /**
   * @public
   * <p>Provides information about the output artifacts and the KMS key
   *          to use for Amazon S3 server-side encryption.</p>
   */
  OutputConfig?: RecommendationJobOutputConfig;

  /**
   * @public
   * <p>The metadata that you apply to Amazon Web Services resources to help you
   *            categorize and organize them. Each tag consists of a key and a value, both of
   *            which you define. For more information, see
   *            <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>
   *            in the Amazon Web Services General Reference.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateInferenceRecommendationsJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the recommendation job.</p>
   */
  JobArn: string | undefined;
}

/**
 * @public
 * <p>Provided configuration information for the worker UI for a labeling job. Provide
 *             either <code>HumanTaskUiArn</code> or <code>UiTemplateS3Uri</code>.</p>
 *          <p>For named entity recognition, 3D point cloud and video frame labeling jobs, use
 *                 <code>HumanTaskUiArn</code>.</p>
 *          <p>For all other Ground Truth built-in task types and custom task types, use
 *                 <code>UiTemplateS3Uri</code> to specify the location of a worker task template in
 *             Amazon S3.</p>
 */
export interface UiConfig {
  /**
   * @public
   * <p>The Amazon S3 bucket location of the UI template, or worker task template. This is the
   *             template used to render the worker UI and tools for labeling job tasks. For more
   *             information about the contents of a UI template, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step2.html"> Creating Your Custom
   *                 Labeling Task Template</a>.</p>
   */
  UiTemplateS3Uri?: string;

  /**
   * @public
   * <p>The ARN of the worker task template used to render the worker UI and tools for
   *             labeling job tasks.</p>
   *          <p>Use this parameter when you are creating a labeling job for named entity recognition,
   *             3D point cloud and video frame labeling jobs. Use your labeling job task type to select
   *             one of the following ARNs and use it with this parameter when you create a labeling job.
   *             Replace <code>aws-region</code> with the Amazon Web Services Region you are creating your labeling job
   *             in. For example, replace <code>aws-region</code> with <code>us-west-1</code> if you
   *             create a labeling job in US West (N. California).</p>
   *          <p>
   *             <b>Named Entity Recognition</b>
   *          </p>
   *          <p>Use the following <code>HumanTaskUiArn</code> for named entity recognition labeling
   *             jobs:</p>
   *          <p>
   *             <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/NamedEntityRecognition</code>
   *          </p>
   *          <p>
   *             <b>3D Point Cloud HumanTaskUiArns</b>
   *          </p>
   *          <p>Use this <code>HumanTaskUiArn</code> for 3D point cloud object detection and 3D point
   *             cloud object detection adjustment labeling jobs. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p> Use this <code>HumanTaskUiArn</code> for 3D point cloud object tracking and 3D point
   *             cloud object tracking adjustment labeling jobs. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p> Use this <code>HumanTaskUiArn</code> for 3D point cloud semantic segmentation and 3D
   *             point cloud semantic segmentation adjustment labeling jobs.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Video Frame HumanTaskUiArns</b>
   *          </p>
   *          <p>Use this <code>HumanTaskUiArn</code> for video frame object detection and video frame
   *             object detection adjustment labeling jobs. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:sagemaker:region:394669845002:human-task-ui/VideoObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p> Use this <code>HumanTaskUiArn</code> for video frame object tracking and video frame
   *             object tracking adjustment labeling jobs. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/VideoObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  HumanTaskUiArn?: string;
}

/**
 * @public
 * <p>Information required for human workers to complete a labeling task.</p>
 */
export interface HumanTaskConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the work team assigned to complete the tasks.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * @public
   * <p>Information about the user interface that workers use to complete the labeling
   *             task.</p>
   */
  UiConfig: UiConfig | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a Lambda function that is run before a data object
   *             is sent to a human worker. Use this function to provide input to a custom labeling
   *             job.</p>
   *          <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in
   *                 task types</a>, use one of the following Amazon SageMaker Ground Truth Lambda function ARNs for
   *                 <code>PreHumanTaskLambdaArn</code>. For custom labeling workflows, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step3.html#sms-custom-templates-step3-prelambda">Pre-annotation Lambda</a>. </p>
   *          <p>
   *             <b>Bounding box</b> - Finds the most similar boxes from
   *                     different workers based on the Jaccard index of the boxes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-BoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-BoundingBox</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Image classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true class of an image based on
   *                     annotations from individual workers.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClass</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Multi-label image classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true classes of an image based on
   *                     annotations from individual workers.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Semantic segmentation</b> - Treats each pixel in an image as
   *                     a multi-class classification and treats pixel annotations from workers as
   *                     "votes" for the correct label.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-SemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Text classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true class of text based on annotations
   *                     from individual workers.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClass</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Multi-label text classification</b> - Uses a variant of the
   *                     Expectation Maximization approach to estimate the true classes of text based on
   *                     annotations from individual workers.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Named entity recognition</b> - Groups similar selections and
   *                     calculates aggregate boundaries, resolving to most-assigned label.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-NamedEntityRecognition</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Video Classification</b> - Use this task type when you need workers to classify videos using
   *             predefined labels that you specify. Workers are shown videos and are asked to choose one
   *             label for each video.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoMultiClass</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoMultiClass</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Video Frame Object Detection</b> - Use this task type to
   *             have workers identify and locate objects in a sequence of video frames (images extracted
   *             from a video) using bounding boxes. For example, you can use this task to ask workers to
   *             identify and localize various objects in a series of video frames, such as cars, bikes,
   *             and pedestrians.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Video Frame Object Tracking</b> - Use this task type to
   *             have workers track the movement of objects in a sequence of video frames (images
   *             extracted from a video) using bounding boxes. For example, you can use this task to ask
   *             workers to track the movement of objects, such as cars, bikes, and pedestrians. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>3D Point Cloud Modalities</b>
   *          </p>
   *          <p>Use the following pre-annotation lambdas for 3D point cloud labeling modality tasks.
   *             See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud-task-types.html">3D Point Cloud Task types
   *             </a> to learn more. </p>
   *          <p>
   *             <b>3D Point Cloud Object Detection</b> -
   *         Use this task type when you want workers to classify objects in a 3D point cloud by
   *         drawing 3D cuboids around objects. For example, you can use this task type to ask workers
   *         to identify different types of objects in a point cloud, such as cars, bikes, and pedestrians.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>3D Point Cloud Object Tracking</b> -
   *         Use this task type when you want workers to draw 3D cuboids around objects
   *         that appear in a sequence of 3D point cloud frames.
   *         For example, you can use this task type to ask workers to track
   *         the movement of vehicles across multiple point cloud frames.
   *         </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>3D Point Cloud Semantic Segmentation</b> -
   *             Use this task type when you want workers to create a point-level semantic segmentation masks by
   *             painting objects in a 3D point cloud using different colors where each color is assigned to one of
   *             the classes you specify.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Use the following ARNs for Label Verification and Adjustment Jobs</b>
   *          </p>
   *          <p>Use label verification and adjustment jobs to review and adjust labels. To learn more,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html">Verify and Adjust Labels </a>.</p>
   *          <p>
   *             <b>Bounding box verification</b> - Uses a variant of the
   *                 Expectation Maximization approach to estimate the true class of verification
   *                 judgement for bounding box labels based on annotations from individual
   *                 workers.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Bounding box adjustment</b> - Finds the most similar boxes
   *                     from different workers based on the Jaccard index of the adjusted
   *                     annotations.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentBoundingBox</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Semantic segmentation verification</b> - Uses a variant of
   *                     the Expectation Maximization approach to estimate the true class of verification
   *                     judgment for semantic segmentation labels based on annotations from individual
   *                     workers.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Semantic segmentation adjustment</b> - Treats each pixel in
   *                     an image as a multi-class classification and treats pixel adjusted annotations
   *                     from workers as "votes" for the correct label.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Video Frame Object Detection Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to classify and localize objects in a sequence of video frames.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Video Frame Object Tracking Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to track object movement across a sequence of video frames.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>3D point cloud object detection adjustment</b> - Adjust
   *             3D cuboids in a point cloud frame. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>3D point cloud object tracking adjustment</b> - Adjust 3D
   *             cuboids across a sequence of point cloud frames. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>3D point cloud semantic segmentation adjustment</b> -
   *             Adjust semantic segmentation masks in a 3D point cloud. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * @public
   * <p>Keywords used to describe the task so that workers on Amazon Mechanical Turk can
   *             discover the task.</p>
   */
  TaskKeywords?: string[];

  /**
   * @public
   * <p>A title for the task for your human workers.</p>
   */
  TaskTitle: string | undefined;

  /**
   * @public
   * <p>A description of the task for your human workers.</p>
   */
  TaskDescription: string | undefined;

  /**
   * @public
   * <p>The number of human workers that will label an object. </p>
   */
  NumberOfHumanWorkersPerDataObject: number | undefined;

  /**
   * @public
   * <p>The amount of time that a worker has to complete a task. </p>
   *          <p>If you create a custom labeling job, the maximum value for this parameter is 8 hours
   *             (28,800 seconds).</p>
   *          <p>If you create a labeling job using a <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task type</a> the maximum
   *             for this parameter depends on the task type you use:</p>
   *          <ul>
   *             <li>
   *                <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-label-images.html">image</a> and
   *                     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-label-text.html">text</a> labeling jobs,
   *                     the maximum is 8 hours (28,800 seconds).</p>
   *             </li>
   *             <li>
   *                <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud.html">3D point cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-video.html">video frame</a> labeling jobs, the maximum is 30 days (2952,000 seconds) for non-AL mode. For most users, the maximum is also 30 days.</p>
   *             </li>
   *          </ul>
   */
  TaskTimeLimitInSeconds: number | undefined;

  /**
   * @public
   * <p>The length of time that a task remains available for labeling by human workers. The
   *             default and maximum values for this parameter depend on the type of workforce you
   *             use.</p>
   *          <ul>
   *             <li>
   *                <p>If you choose the Amazon Mechanical Turk workforce, the maximum is 12 hours (43,200 seconds).
   *                     The default is 6 hours (21,600 seconds).</p>
   *             </li>
   *             <li>
   *                <p>If you choose a private or vendor workforce, the default value is 30 days (2592,000 seconds) for non-AL mode. For most users, the maximum is also 30 days.</p>
   *             </li>
   *          </ul>
   */
  TaskAvailabilityLifetimeInSeconds?: number;

  /**
   * @public
   * <p>Defines the maximum number of data objects that can be labeled by human workers at the
   *             same time. Also referred to as batch size. Each object may have more than one worker at one time.
   *             The default value is 1000 objects. To increase the maximum value to 5000 objects, contact Amazon Web Services Support.</p>
   */
  MaxConcurrentTaskCount?: number;

  /**
   * @public
   * <p>Configures how labels are consolidated across human workers.</p>
   */
  AnnotationConsolidationConfig: AnnotationConsolidationConfig | undefined;

  /**
   * @public
   * <p>The price that you pay for each task performed by an Amazon Mechanical Turk worker.</p>
   */
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
}

/**
 * @public
 * <p>Attributes of the data specified by the customer. Use these to describe the data to be
 *             labeled.</p>
 */
export interface LabelingJobDataAttributes {
  /**
   * @public
   * <p>Declares that your content is free of personally identifiable information or adult
   *             content. SageMaker may restrict the Amazon Mechanical Turk workers that can view your task
   *             based on this information.</p>
   */
  ContentClassifiers?: ContentClassifier[];
}

/**
 * @public
 * <p>The Amazon S3 location of the input data objects.</p>
 */
export interface LabelingJobS3DataSource {
  /**
   * @public
   * <p>The Amazon S3 location of the manifest file that describes the input data objects. </p>
   *          <p>The input manifest file referenced in <code>ManifestS3Uri</code> must contain one of
   *             the following keys: <code>source-ref</code> or <code>source</code>. The value of the
   *             keys are interpreted as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>source-ref</code>: The source of the object is the Amazon S3 object
   *                     specified in the value. Use this value when the object is a binary object, such
   *                     as an image.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source</code>: The source of the object is the value. Use this
   *                     value when the object is a text value.</p>
   *             </li>
   *          </ul>
   *          <p>If you are a new user of Ground Truth, it is recommended you review <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-input-data-input-manifest.html">Use an Input Manifest File </a> in the Amazon SageMaker Developer Guide to learn how to
   *             create an input manifest file.</p>
   */
  ManifestS3Uri: string | undefined;
}

/**
 * @public
 * <p>An Amazon SNS data source used for streaming labeling jobs.</p>
 */
export interface LabelingJobSnsDataSource {
  /**
   * @public
   * <p>The Amazon SNS input topic Amazon Resource Name (ARN). Specify the ARN of the input topic
   *       you will use to send new data objects to a streaming labeling job.</p>
   */
  SnsTopicArn: string | undefined;
}

/**
 * @public
 * <p>Provides information about the location of input data.</p>
 *          <p>You must specify at least one of the following: <code>S3DataSource</code> or <code>SnsDataSource</code>.</p>
 *          <p>Use <code>SnsDataSource</code> to specify an SNS input topic
 *     for a streaming labeling job. If you do not specify
 *     and SNS input topic ARN, Ground Truth will create a one-time labeling job.</p>
 *          <p>Use <code>S3DataSource</code> to specify an input
 *     manifest file for both streaming and one-time labeling jobs.
 *     Adding an <code>S3DataSource</code> is optional if you use <code>SnsDataSource</code> to create a streaming labeling job.</p>
 */
export interface LabelingJobDataSource {
  /**
   * @public
   * <p>The Amazon S3 location of the input data objects.</p>
   */
  S3DataSource?: LabelingJobS3DataSource;

  /**
   * @public
   * <p>An Amazon SNS data source used for streaming labeling jobs. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-labeling-job.html#sms-streaming-how-it-works-send-data">Send Data to a Streaming Labeling Job</a>. </p>
   */
  SnsDataSource?: LabelingJobSnsDataSource;
}

/**
 * @public
 * <p>Input configuration information for a labeling job.</p>
 */
export interface LabelingJobInputConfig {
  /**
   * @public
   * <p>The location of the input data.</p>
   */
  DataSource: LabelingJobDataSource | undefined;

  /**
   * @public
   * <p>Attributes of the data specified by the customer.</p>
   */
  DataAttributes?: LabelingJobDataAttributes;
}

/**
 * @public
 * <p>Configure encryption on the storage volume attached to the ML compute instance used to
 *             run automated data labeling model training and inference. </p>
 */
export interface LabelingJobResourceConfig {
  /**
   * @public
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume
   *             attached to the ML compute instance(s) that run the training and inference jobs used for
   *             automated data labeling. </p>
   *          <p>You can only specify a <code>VolumeKmsKeyId</code> when you create a labeling job with
   *             automated data labeling enabled using the API operation <code>CreateLabelingJob</code>.
   *             You cannot specify an Amazon Web Services KMS key to encrypt the storage volume used for
   *             automated data labeling model training and inference when you create a labeling job
   *             using the console. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security.html">Output Data and Storage Volume
   *                 Encryption</a>.</p>
   *          <p>The <code>VolumeKmsKeyId</code> can be any of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID</p>
   *                <p>
   *                   <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key</p>
   *                <p>
   *                   <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * @public
   * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
   *             access to and from your training and model containers by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

/**
 * @public
 * <p>Provides configuration information for auto-labeling of your data objects. A
 *                 <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use
 *             auto-labeling.</p>
 */
export interface LabelingJobAlgorithmsConfig {
  /**
   * @public
   * <p>Specifies the Amazon Resource Name (ARN) of the algorithm used for auto-labeling. You
   *             must select one of the following ARNs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>Image classification</i>
   *                </p>
   *                <p>
   *                   <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/image-classification</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Text classification</i>
   *                </p>
   *                <p>
   *                   <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/text-classification</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Object detection</i>
   *                </p>
   *                <p>
   *                   <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/object-detection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Semantic Segmentation</i>
   *                </p>
   *                <p>
   *                   <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/semantic-segmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  LabelingJobAlgorithmSpecificationArn: string | undefined;

  /**
   * @public
   * <p>At the end of an auto-label job Ground Truth sends the Amazon Resource Name (ARN) of the final
   *             model used for auto-labeling. You can use this model as the starting point for
   *             subsequent similar jobs by providing the ARN of the model here. </p>
   */
  InitialActiveLearningModelArn?: string;

  /**
   * @public
   * <p>Provides configuration information for a labeling job.</p>
   */
  LabelingJobResourceConfig?: LabelingJobResourceConfig;
}

/**
 * @public
 * <p>Output configuration information for a labeling job.</p>
 */
export interface LabelingJobOutputConfig {
  /**
   * @public
   * <p>The Amazon S3 location to write output data.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Key Management Service ID of the key used to encrypt the output data, if any.</p>
   *          <p>If you provide your own KMS key ID, you must add the required permissions to your KMS
   *             key described in <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security-permission.html#sms-security-kms-permissions">Encrypt Output Data and Storage Volume with Amazon Web Services KMS</a>.</p>
   *          <p>If you don't provide a KMS key ID, Amazon SageMaker uses the default Amazon Web Services KMS key for Amazon S3 for your
   *             role's account to encrypt your output data.</p>
   *          <p>If you use a bucket policy with an <code>s3:PutObject</code> permission that only
   *             allows objects with server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption Keys</a> in the <i>Amazon Simple Storage Service Developer
   *                 Guide.</i>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>An Amazon Simple Notification Service (Amazon SNS) output topic ARN. Provide a <code>SnsTopicArn</code> if you want to
   *             do real time chaining to another streaming job and receive an Amazon SNS notifications each
   *             time a data object is submitted by a worker.</p>
   *          <p>If you provide an <code>SnsTopicArn</code> in <code>OutputConfig</code>, when workers
   *             complete labeling tasks, Ground Truth will send labeling task output data to the SNS output
   *             topic you specify here. </p>
   *          <p>To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-labeling-job.html#sms-streaming-how-it-works-output-data">Receive Output Data from a Streaming Labeling
   *                 Job</a>. </p>
   */
  SnsTopicArn?: string;
}

/**
 * @public
 * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the
 *             job is automatically stopped. You can use these conditions to control the cost of data
 *             labeling.</p>
 *          <note>
 *             <p>Labeling jobs fail after 30 days with an appropriate client error message.</p>
 *          </note>
 */
export interface LabelingJobStoppingConditions {
  /**
   * @public
   * <p>The maximum number of objects that can be labeled by human workers.</p>
   */
  MaxHumanLabeledObjectCount?: number;

  /**
   * @public
   * <p>The maximum number of input data objects that should be labeled.</p>
   */
  MaxPercentageOfInputDatasetLabeled?: number;
}

/**
 * @public
 */
export interface CreateLabelingJobRequest {
  /**
   * @public
   * <p>The name of the labeling job. This name is used to identify the job in a list of
   *             labeling jobs. Labeling job names must be unique within an Amazon Web Services account and region.
   *                 <code>LabelingJobName</code> is not case sensitive. For example, Example-job and
   *             example-job are considered the same labeling job name by Ground Truth.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * @public
   * <p>The attribute name to use for the label in the output manifest file. This is the key
   *             for the key/value pair formed with the label that a worker assigns to the object. The
   *                 <code>LabelAttributeName</code> must meet the following requirements.</p>
   *          <ul>
   *             <li>
   *                <p>The name can't end with "-metadata". </p>
   *             </li>
   *             <li>
   *                <p>If you are using one of the following <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task types</a>,
   *                     the attribute name <i>must</i> end with "-ref". If the task type
   *                     you are using is not listed below, the attribute name <i>must
   *                         not</i> end with "-ref".</p>
   *                <ul>
   *                   <li>
   *                      <p>Image semantic segmentation (<code>SemanticSegmentation)</code>, and
   *                             adjustment (<code>AdjustmentSemanticSegmentation</code>) and
   *                             verification (<code>VerificationSemanticSegmentation</code>) labeling
   *                             jobs for this task type.</p>
   *                   </li>
   *                   <li>
   *                      <p>Video frame object detection (<code>VideoObjectDetection</code>), and
   *                             adjustment and verification
   *                             (<code>AdjustmentVideoObjectDetection</code>) labeling jobs for this
   *                             task type.</p>
   *                   </li>
   *                   <li>
   *                      <p>Video frame object tracking (<code>VideoObjectTracking</code>), and
   *                             adjustment and verification (<code>AdjustmentVideoObjectTracking</code>)
   *                             labeling jobs for this task type.</p>
   *                   </li>
   *                   <li>
   *                      <p>3D point cloud semantic segmentation
   *                                 (<code>3DPointCloudSemanticSegmentation</code>), and adjustment and
   *                             verification (<code>Adjustment3DPointCloudSemanticSegmentation</code>)
   *                             labeling jobs for this task type. </p>
   *                   </li>
   *                   <li>
   *                      <p>3D point cloud object tracking
   *                                 (<code>3DPointCloudObjectTracking</code>), and adjustment and
   *                             verification (<code>Adjustment3DPointCloudObjectTracking</code>)
   *                             labeling jobs for this task type. </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p></p>
   *          <important>
   *             <p>If you are creating an adjustment or verification labeling job, you must use a
   *                     <i>different</i>
   *                <code>LabelAttributeName</code> than the one used in the original labeling job. The
   *                 original labeling job is the Ground Truth labeling job that produced the labels that you
   *                 want verified or adjusted. To learn more about adjustment and verification labeling
   *                 jobs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html">Verify and Adjust
   *                     Labels</a>.</p>
   *          </important>
   */
  LabelAttributeName: string | undefined;

  /**
   * @public
   * <p>Input data for the labeling job, such as the Amazon S3 location of the data objects and the
   *             location of the manifest file that describes the data objects.</p>
   *          <p>You must specify at least one of the following: <code>S3DataSource</code> or
   *                 <code>SnsDataSource</code>. </p>
   *          <ul>
   *             <li>
   *                <p>Use <code>SnsDataSource</code> to specify an SNS input topic for a streaming
   *                     labeling job. If you do not specify and SNS input topic ARN, Ground Truth will
   *                     create a one-time labeling job that stops after all data objects in the input
   *                     manifest file have been labeled.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>S3DataSource</code> to specify an input manifest file for both
   *                     streaming and one-time labeling jobs. Adding an <code>S3DataSource</code> is
   *                     optional if you use <code>SnsDataSource</code> to create a streaming labeling
   *                     job.</p>
   *             </li>
   *          </ul>
   *          <p>If you use the Amazon Mechanical Turk workforce, your input data should not include
   *             confidential information, personal information or protected health information. Use
   *                 <code>ContentClassifiers</code> to specify that your data is free of personally
   *             identifiable information and adult content.</p>
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * @public
   * <p>The location of the output data and the Amazon Web Services Key Management Service key ID for the key used to encrypt
   *             the output data, if any.</p>
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * @public
   * <p>The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf
   *             during data labeling. You must grant this role the necessary permissions so that Amazon SageMaker
   *             can successfully complete data labeling.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The S3 URI of the file, referred to as a <i>label category configuration
   *                 file</i>, that defines the categories used to label the data objects.</p>
   *          <p>For 3D point cloud and video frame task types, you can add label category attributes
   *             and frame attributes to your label category configuration file. To learn how, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud-label-category-config.html">Create a
   *                 Labeling Category Configuration File for 3D Point Cloud Labeling Jobs</a>. </p>
   *          <p>For named entity recognition jobs, in addition to <code>"labels"</code>, you must
   *             provide worker instructions in the label category configuration file using the
   *                 <code>"instructions"</code> parameter: <code>"instructions":
   *                 \{"shortInstruction":"<h1>Add header</h1><p>Add Instructions</p>",
   *                 "fullInstruction":"<p>Add additional instructions.</p>"\}</code>. For details
   *             and an example, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-named-entity-recg.html#sms-creating-ner-api">Create a
   *                 Named Entity Recognition Labeling Job (API) </a>.</p>
   *          <p>For all other <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task types</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates.html">custom
   *                 tasks</a>, your label category configuration file must be a JSON file in the
   *             following format. Identify the labels you want to use by replacing <code>label_1</code>,
   *                 <code>label_2</code>,<code>...</code>,<code>label_n</code> with your label
   *             categories.</p>
   *          <p>
   *             <code>\{ </code>
   *          </p>
   *          <p>
   *             <code>"document-version": "2018-11-28",</code>
   *          </p>
   *          <p>
   *             <code>"labels": [\{"label": "label_1"\},\{"label": "label_2"\},...\{"label":
   *                 "label_n"\}]</code>
   *          </p>
   *          <p>
   *             <code>\}</code>
   *          </p>
   *          <p>Note the following about the label category configuration file:</p>
   *          <ul>
   *             <li>
   *                <p>For image classification and text classification (single and multi-label) you
   *                     must specify at least two label categories. For all other task types, the
   *                     minimum number of label categories required is one. </p>
   *             </li>
   *             <li>
   *                <p>Each label category must be unique, you cannot specify duplicate label
   *                     categories.</p>
   *             </li>
   *             <li>
   *                <p>If you create a 3D point cloud or video frame adjustment or verification
   *                     labeling job, you must include <code>auditLabelAttributeName</code> in the label
   *                     category configuration. Use this parameter to enter the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateLabelingJob.html#sagemaker-CreateLabelingJob-request-LabelAttributeName">
   *                      <code>LabelAttributeName</code>
   *                   </a> of the labeling job you want to
   *                     adjust or verify annotations of.</p>
   *             </li>
   *          </ul>
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * @public
   * <p>A set of conditions for stopping the labeling job. If any of the conditions are met,
   *             the job is automatically stopped. You can use these conditions to control the cost of
   *             data labeling.</p>
   */
  StoppingConditions?: LabelingJobStoppingConditions;

  /**
   * @public
   * <p>Configures the information required to perform automated data labeling.</p>
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * @public
   * <p>Configures the labeling task and how it is presented to workers; including, but not limited to price, keywords, and batch size (task count).</p>
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * @public
   * <p>An array of key/value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateLabelingJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the labeling job. You use this ARN to identify the
   *             labeling job.</p>
   */
  LabelingJobArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InferenceExecutionMode = {
  DIRECT: "Direct",
  SERIAL: "Serial",
} as const;

/**
 * @public
 */
export type InferenceExecutionMode = (typeof InferenceExecutionMode)[keyof typeof InferenceExecutionMode];

/**
 * @public
 * <p>Specifies details about how containers in a multi-container endpoint are run.</p>
 */
export interface InferenceExecutionConfig {
  /**
   * @public
   * <p>How containers in a multi-container are run. The following values are valid.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SERIAL</code> - Containers run as a serial pipeline.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT</code> - Only the individual container that you specify is
   *                     run.</p>
   *             </li>
   *          </ul>
   */
  Mode: InferenceExecutionMode | undefined;
}

/**
 * @public
 */
export interface CreateModelInput {
  /**
   * @public
   * <p>The name of the new model.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The location of the primary docker image containing inference code, associated
   *             artifacts, and custom environment map that the inference code uses when the model is
   *             deployed for predictions. </p>
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * @public
   * <p>Specifies the containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];

  /**
   * @public
   * <p>Specifies details of how containers in a multi-container endpoint are called.</p>
   */
  InferenceExecutionConfig?: InferenceExecutionConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access model
   *             artifacts and docker image for deployment on ML compute instances or for batch transform
   *             jobs. Deploying on ML compute instances is part of model hosting. For more information,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker
   *                 Roles</a>. </p>
   *          <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *          </note>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * @public
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that you want your model to connect
   *             to. Control access to and from your model container by configuring the VPC.
   *                 <code>VpcConfig</code> is used in hosting services and in batch transform. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-vpc.html">Protect Data in Batch
   *                 Transform Jobs by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * @public
   * <p>Isolates the model container. No inbound or outbound network calls can be made to or
   *             from the model container.</p>
   */
  EnableNetworkIsolation?: boolean;
}

/**
 * @public
 */
export interface CreateModelOutput {
  /**
   * @public
   * <p>The ARN of the model created in SageMaker.</p>
   */
  ModelArn: string | undefined;
}

/**
 * @public
 * <p>Docker container image configuration object for the model bias job.</p>
 */
export interface ModelBiasAppSpecification {
  /**
   * @public
   * <p>The container image to be run by the model bias job.</p>
   */
  ImageUri: string | undefined;

  /**
   * @public
   * <p>JSON formatted S3 file that defines bias parameters. For more information on this JSON
   *          configuration file, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-bias-parameters.html">Configure
   *             bias parameters</a>.</p>
   */
  ConfigUri: string | undefined;

  /**
   * @public
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;
}

/**
 * @public
 * <p>The configuration for a baseline model bias job.</p>
 */
export interface ModelBiasBaselineConfig {
  /**
   * @public
   * <p>The name of the baseline model bias job.</p>
   */
  BaseliningJobName?: string;

  /**
   * @public
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

/**
 * @public
 * <p>The ground truth labels for the dataset used for the monitoring job.</p>
 */
export interface MonitoringGroundTruthS3Input {
  /**
   * @public
   * <p>The address of the Amazon S3 location of the ground truth labels.</p>
   */
  S3Uri?: string;
}

/**
 * @public
 * <p>Inputs for the model bias job.</p>
 */
export interface ModelBiasJobInput {
  /**
   * @public
   * <p>Input object for the endpoint</p>
   */
  EndpointInput?: EndpointInput;

  /**
   * @public
   * <p>Input object for the batch transform job.</p>
   */
  BatchTransformInput?: BatchTransformInput;

  /**
   * @public
   * <p>Location of ground truth labels to use in model bias job.</p>
   */
  GroundTruthS3Input: MonitoringGroundTruthS3Input | undefined;
}

/**
 * @public
 */
export interface CreateModelBiasJobDefinitionRequest {
  /**
   * @public
   * <p>The name of the bias job definition. The name must be unique within an Amazon Web Services
   *    Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

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
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can
   *    assume to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * @public
   * <p>(Optional) An array of key-value pairs. For more information, see
   *    <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">
   *    Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateModelBiasJobDefinitionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model bias job.</p>
   */
  JobDefinitionArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelCardStatus = {
  APPROVED: "Approved",
  ARCHIVED: "Archived",
  DRAFT: "Draft",
  PENDINGREVIEW: "PendingReview",
} as const;

/**
 * @public
 */
export type ModelCardStatus = (typeof ModelCardStatus)[keyof typeof ModelCardStatus];

/**
 * @public
 * <p>Configure the security settings to protect model card data.</p>
 */
export interface ModelCardSecurityConfig {
  /**
   * @public
   * <p>A Key Management Service
   *          <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">key
   *             ID</a> to use for encrypting a model card.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 */
export interface CreateModelCardRequest {
  /**
   * @public
   * <p>The unique name of the model card.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>An optional Key Management Service
   *          key to encrypt, decrypt, and re-encrypt model card content for regulated workloads with
   *          highly sensitive data.</p>
   */
  SecurityConfig?: ModelCardSecurityConfig;

  /**
   * @public
   * <p>The content of the model card. Content must be in <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema">model card JSON schema</a> and provided as a string.</p>
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
   * <p>Key-value pairs used to manage metadata for model cards.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateModelCardResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the successfully created model card.</p>
   */
  ModelCardArn: string | undefined;
}

/**
 * @public
 * <p>Configure the export output details for an Amazon SageMaker Model Card.</p>
 */
export interface ModelCardExportOutputConfig {
  /**
   * @public
   * <p>The Amazon S3 output path to export your model card PDF.</p>
   */
  S3OutputPath: string | undefined;
}

/**
 * @public
 */
export interface CreateModelCardExportJobRequest {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the model card to export.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>The version of the model card to export. If a version is not provided, then the latest version of the model card is exported.</p>
   */
  ModelCardVersion?: number;

  /**
   * @public
   * <p>The name of the model card export job.</p>
   */
  ModelCardExportJobName: string | undefined;

  /**
   * @public
   * <p>The model card output configuration that specifies the Amazon S3 path for exporting.</p>
   */
  OutputConfig: ModelCardExportOutputConfig | undefined;
}

/**
 * @public
 */
export interface CreateModelCardExportJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model card export job.</p>
   */
  ModelCardExportJobArn: string | undefined;
}

/**
 * @public
 * <p>Docker container image configuration object for the model explainability job.</p>
 */
export interface ModelExplainabilityAppSpecification {
  /**
   * @public
   * <p>The container image to be run by the model explainability job.</p>
   */
  ImageUri: string | undefined;

  /**
   * @public
   * <p>JSON formatted Amazon S3 file that defines explainability parameters. For more
   *          information on this JSON configuration file, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-model-explainability-parameters.html">Configure model explainability parameters</a>.</p>
   */
  ConfigUri: string | undefined;

  /**
   * @public
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;
}

/**
 * @public
 * <p>The configuration for a baseline model explainability job.</p>
 */
export interface ModelExplainabilityBaselineConfig {
  /**
   * @public
   * <p>The name of the baseline model explainability job.</p>
   */
  BaseliningJobName?: string;

  /**
   * @public
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

/**
 * @public
 * <p>Inputs for the model explainability job.</p>
 */
export interface ModelExplainabilityJobInput {
  /**
   * @public
   * <p>Input object for the endpoint</p>
   */
  EndpointInput?: EndpointInput;

  /**
   * @public
   * <p>Input object for the batch transform job.</p>
   */
  BatchTransformInput?: BatchTransformInput;
}

/**
 * @public
 */
export interface CreateModelExplainabilityJobDefinitionRequest {
  /**
   * @public
   * <p> The name of the model explainability job definition. The name must be unique within an
   *             Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

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
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can
   *    assume to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * @public
   * <p>(Optional) An array of key-value pairs. For more information, see
   *    <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">
   *    Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateModelExplainabilityJobDefinitionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model explainability job.</p>
   */
  JobDefinitionArn: string | undefined;
}

/**
 * @public
 * <p>Contains details regarding the file source.</p>
 */
export interface FileSource {
  /**
   * @public
   * <p>The type of content stored in the file source.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The digest of the file source.</p>
   */
  ContentDigest?: string;

  /**
   * @public
   * <p>The Amazon S3 URI for the file source.</p>
   */
  S3Uri: string | undefined;
}

/**
 * @public
 * <p>Represents the drift check bias baselines that can be used when the model monitor is set using the
 *             model package.</p>
 */
export interface DriftCheckBias {
  /**
   * @public
   * <p>The bias config file for a model.</p>
   */
  ConfigFile?: FileSource;

  /**
   * @public
   * <p>The pre-training constraints.</p>
   */
  PreTrainingConstraints?: MetricsSource;

  /**
   * @public
   * <p>The post-training constraints.</p>
   */
  PostTrainingConstraints?: MetricsSource;
}

/**
 * @public
 * <p>Represents the drift check explainability baselines that can be used when the model monitor is set
 *             using the model package. </p>
 */
export interface DriftCheckExplainability {
  /**
   * @public
   * <p>The drift check explainability constraints.</p>
   */
  Constraints?: MetricsSource;

  /**
   * @public
   * <p>The explainability config file for the model.</p>
   */
  ConfigFile?: FileSource;
}

/**
 * @public
 * <p>Represents the drift check data quality baselines that can be used when the model monitor is set using
 *             the model package. </p>
 */
export interface DriftCheckModelDataQuality {
  /**
   * @public
   * <p>The drift check model data quality statistics.</p>
   */
  Statistics?: MetricsSource;

  /**
   * @public
   * <p>The drift check model data quality constraints.</p>
   */
  Constraints?: MetricsSource;
}

/**
 * @public
 * <p>Represents the drift check model quality baselines that can be used when the model monitor is set using
 *             the model package. </p>
 */
export interface DriftCheckModelQuality {
  /**
   * @public
   * <p>The drift check model quality statistics.</p>
   */
  Statistics?: MetricsSource;

  /**
   * @public
   * <p>The drift check model quality constraints.</p>
   */
  Constraints?: MetricsSource;
}

/**
 * @public
 * <p>Represents the drift check baselines that can be used when the model monitor is set using the model
 *             package. </p>
 */
export interface DriftCheckBaselines {
  /**
   * @public
   * <p>Represents the drift check bias baselines that can be used when the model monitor is set using the model
   *             package. </p>
   */
  Bias?: DriftCheckBias;

  /**
   * @public
   * <p>Represents the drift check explainability baselines that can be used when the model monitor is set using
   *             the model package. </p>
   */
  Explainability?: DriftCheckExplainability;

  /**
   * @public
   * <p>Represents the drift check model quality baselines that can be used when the model monitor is set using
   *             the model package.</p>
   */
  ModelQuality?: DriftCheckModelQuality;

  /**
   * @public
   * <p>Represents the drift check model data quality baselines that can be used when the model monitor is set
   *             using the model package.</p>
   */
  ModelDataQuality?: DriftCheckModelDataQuality;
}

/**
 * @public
 * <p>Contains explainability metrics for a model.</p>
 */
export interface Explainability {
  /**
   * @public
   * <p>The explainability report for a model.</p>
   */
  Report?: MetricsSource;
}

/**
 * @public
 * <p>Data quality constraints and statistics for a model.</p>
 */
export interface ModelDataQuality {
  /**
   * @public
   * <p>Data quality statistics for a model.</p>
   */
  Statistics?: MetricsSource;

  /**
   * @public
   * <p>Data quality constraints for a model.</p>
   */
  Constraints?: MetricsSource;
}

/**
 * @public
 * <p>Model quality statistics and constraints.</p>
 */
export interface ModelQuality {
  /**
   * @public
   * <p>Model quality statistics.</p>
   */
  Statistics?: MetricsSource;

  /**
   * @public
   * <p>Model quality constraints.</p>
   */
  Constraints?: MetricsSource;
}

/**
 * @public
 * <p>Contains metrics captured from a model.</p>
 */
export interface ModelMetrics {
  /**
   * @public
   * <p>Metrics that measure the quality of a model.</p>
   */
  ModelQuality?: ModelQuality;

  /**
   * @public
   * <p>Metrics that measure the quality of the input data for a model.</p>
   */
  ModelDataQuality?: ModelDataQuality;

  /**
   * @public
   * <p>Metrics that measure bais in a model.</p>
   */
  Bias?: Bias;

  /**
   * @public
   * <p>Metrics that help explain a model.</p>
   */
  Explainability?: Explainability;
}

/**
 * @public
 * @enum
 */
export const SkipModelValidation = {
  ALL: "All",
  NONE: "None",
} as const;

/**
 * @public
 */
export type SkipModelValidation = (typeof SkipModelValidation)[keyof typeof SkipModelValidation];

/**
 * @public
 * <p>Specifies an algorithm that was used to create the model package. The algorithm must
 *             be either an algorithm resource in your SageMaker account or an algorithm in Amazon Web Services Marketplace that you are subscribed to.</p>
 */
export interface SourceAlgorithm {
  /**
   * @public
   * <p>The Amazon S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single <code>gzip</code> compressed tar archive
   *                 (<code>.tar.gz</code> suffix).</p>
   *          <note>
   *             <p>The model artifacts must be in an S3 bucket that is in the same Amazon Web Services
   *                 region as the algorithm.</p>
   *          </note>
   */
  ModelDataUrl?: string;

  /**
   * @public
   * <p>The name of an algorithm that was used to create the model package. The algorithm must
   *             be either an algorithm resource in your SageMaker account or an algorithm in Amazon Web Services Marketplace that you are subscribed to.</p>
   */
  AlgorithmName: string | undefined;
}

/**
 * @public
 * <p>A list of algorithms that were used to create a model package.</p>
 */
export interface SourceAlgorithmSpecification {
  /**
   * @public
   * <p>A list of the algorithms that were used to create a model package.</p>
   */
  SourceAlgorithms: SourceAlgorithm[] | undefined;
}

/**
 * @public
 * <p>Contains data, such as the inputs and targeted instance types that are used in the
 *             process of validating the model package.</p>
 *          <p>The data provided in the validation profile is made available to your buyers on Amazon Web Services
 *             Marketplace.</p>
 */
export interface ModelPackageValidationProfile {
  /**
   * @public
   * <p>The name of the profile for the model package.</p>
   */
  ProfileName: string | undefined;

  /**
   * @public
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job used
   *             for the validation of the model package.</p>
   */
  TransformJobDefinition: TransformJobDefinition | undefined;
}

/**
 * @public
 * <p>Specifies batch transform jobs that SageMaker runs to validate your model package.</p>
 */
export interface ModelPackageValidationSpecification {
  /**
   * @public
   * <p>The IAM roles to be used for the validation of the model package.</p>
   */
  ValidationRole: string | undefined;

  /**
   * @public
   * <p>An array of <code>ModelPackageValidationProfile</code> objects, each of which
   *             specifies a batch transform job that SageMaker runs to validate your model package.</p>
   */
  ValidationProfiles: ModelPackageValidationProfile[] | undefined;
}

/**
 * @public
 */
export interface CreateModelPackageInput {
  /**
   * @public
   * <p>The name of the model package. The name must have 1 to 63 characters. Valid characters
   *             are a-z, A-Z, 0-9, and - (hyphen).</p>
   *          <p>This parameter is required for unversioned models. It is not applicable to versioned
   *             models.</p>
   */
  ModelPackageName?: string;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the model package group that this model version belongs to.</p>
   *          <p>This parameter is required for versioned models, and does not apply to unversioned
   *             models.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * @public
   * <p>A description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * @public
   * <p>Specifies details about inference jobs that can be run with models based on this model
   *             package, including the following:</p>
   *          <ul>
   *             <li>
   *                <p>The Amazon ECR paths of containers that contain the inference code and model
   *                     artifacts.</p>
   *             </li>
   *             <li>
   *                <p>The instance types that the model package supports for transform jobs and
   *                     real-time endpoints used for inference.</p>
   *             </li>
   *             <li>
   *                <p>The input and output content formats that the model package supports for
   *                     inference.</p>
   *             </li>
   *          </ul>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * @public
   * <p>Specifies configurations for one or more transform jobs that SageMaker runs to test the
   *             model package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * @public
   * <p>Details about the algorithm that was used to create the model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * @public
   * <p>Whether to certify the model package for listing on Amazon Web Services Marketplace.</p>
   *          <p>This parameter is optional for unversioned models, and does not apply to versioned
   *             models.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * @public
   * <p>A list of key value pairs associated with the model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   *          <p>If you supply <code>ModelPackageGroupName</code>, your model package belongs to the model group
   * 	    you specify and uses the tags associated with the model group. In this case, you cannot
   * 	    supply a <code>tag</code> argument.
   * </p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Whether the model is approved for deployment.</p>
   *          <p>This parameter is optional for versioned models, and does not apply to unversioned
   *             models.</p>
   *          <p>For versioned models, the value of this parameter must be set to <code>Approved</code>
   *         to deploy the model.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus;

  /**
   * @public
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * @public
   * <p>A structure that contains model metrics reports.</p>
   */
  ModelMetrics?: ModelMetrics;

  /**
   * @public
   * <p>A unique token that guarantees that the call to this API is idempotent.</p>
   */
  ClientToken?: string;

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
   * <p>The machine learning domain of your model package and its components. Common
   *             machine learning domains include computer vision and natural language processing.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The machine learning task your model package accomplishes. Common machine
   *             learning tasks include object detection and image classification. The following
   *             tasks are supported by Inference Recommender:
   *             <code>"IMAGE_CLASSIFICATION"</code> | <code>"OBJECT_DETECTION"</code> | <code>"TEXT_GENERATION"</code> |<code>"IMAGE_SEGMENTATION"</code> |
   *             <code>"FILL_MASK"</code> | <code>"CLASSIFICATION"</code> | <code>"REGRESSION"</code> | <code>"OTHER"</code>.</p>
   *          <p>Specify "OTHER" if none of the tasks listed fit your use case.</p>
   */
  Task?: string;

  /**
   * @public
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored. This path must point
   *             to a single gzip compressed tar archive (.tar.gz suffix). This archive can hold multiple files
   *             that are all equally used in the load test. Each file in the archive must satisfy the size constraints of the
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpoint.html#API_runtime_InvokeEndpoint_RequestSyntax">InvokeEndpoint</a> call.</p>
   */
  SamplePayloadUrl?: string;

  /**
   * @public
   * <p>An array of additional Inference Specification objects. Each additional
   *             Inference Specification specifies artifacts based on this model package that can
   *             be used on inference endpoints. Generally used with SageMaker Neo to store the
   *             compiled artifacts. </p>
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
export interface CreateModelPackageOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the new model package.</p>
   */
  ModelPackageArn: string | undefined;
}

/**
 * @public
 */
export interface CreateModelPackageGroupInput {
  /**
   * @public
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * @public
   * <p>A description for the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * @public
   * <p>A list of key value pairs associated with the model group. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateModelPackageGroupOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MonitoringProblemType = {
  BINARY_CLASSIFICATION: "BinaryClassification",
  MULTICLASS_CLASSIFICATION: "MulticlassClassification",
  REGRESSION: "Regression",
} as const;

/**
 * @public
 */
export type MonitoringProblemType = (typeof MonitoringProblemType)[keyof typeof MonitoringProblemType];

/**
 * @public
 * <p>Container image configuration object for the monitoring job.</p>
 */
export interface ModelQualityAppSpecification {
  /**
   * @public
   * <p>The address of the container image that the monitoring job runs.</p>
   */
  ImageUri: string | undefined;

  /**
   * @public
   * <p>Specifies the entrypoint for a container that the monitoring job runs.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * @public
   * <p>An array of arguments for the container used to run the monitoring job.</p>
   */
  ContainerArguments?: string[];

  /**
   * @public
   * <p>An Amazon S3 URI to a script that is called per row prior to running analysis. It can
   *    base64 decode the payload and convert it into a flattened JSON so that the built-in container can use
   *    the converted data. Applicable only for the built-in (first party) containers.</p>
   */
  RecordPreprocessorSourceUri?: string;

  /**
   * @public
   * <p>An Amazon S3 URI to a script that is called after analysis has been performed. Applicable
   *    only for the built-in (first party) containers.</p>
   */
  PostAnalyticsProcessorSourceUri?: string;

  /**
   * @public
   * <p>The machine learning problem type of the model that the monitoring job monitors.</p>
   */
  ProblemType?: MonitoringProblemType;

  /**
   * @public
   * <p>Sets the environment variables in the container that the monitoring job runs.</p>
   */
  Environment?: Record<string, string>;
}

/**
 * @public
 * <p>Configuration for monitoring constraints and monitoring statistics. These baseline resources are
 *    compared against the results of the current job from the series of jobs scheduled to collect data
 *    periodically.</p>
 */
export interface ModelQualityBaselineConfig {
  /**
   * @public
   * <p>The name of the job that performs baselining for the monitoring job.</p>
   */
  BaseliningJobName?: string;

  /**
   * @public
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

/**
 * @public
 * <p>The input for the model quality monitoring job. Currently endpoints are supported for
 *          input for model quality monitoring jobs.</p>
 */
export interface ModelQualityJobInput {
  /**
   * @public
   * <p>Input object for the endpoint</p>
   */
  EndpointInput?: EndpointInput;

  /**
   * @public
   * <p>Input object for the batch transform job.</p>
   */
  BatchTransformInput?: BatchTransformInput;

  /**
   * @public
   * <p>The ground truth label provided for the model.</p>
   */
  GroundTruthS3Input: MonitoringGroundTruthS3Input | undefined;
}

/**
 * @public
 */
export interface CreateModelQualityJobDefinitionRequest {
  /**
   * @public
   * <p>The name of the monitoring job definition.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * @public
   * <p>Specifies the constraints and baselines for the monitoring job.</p>
   */
  ModelQualityBaselineConfig?: ModelQualityBaselineConfig;

  /**
   * @public
   * <p>The container that runs the monitoring job.</p>
   */
  ModelQualityAppSpecification: ModelQualityAppSpecification | undefined;

  /**
   * @public
   * <p>A list of the inputs that are monitored. Currently endpoints are supported.</p>
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
   * <p>Specifies the network configuration for the monitoring job.</p>
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

  /**
   * @public
   * <p>(Optional) An array of key-value pairs. For more information, see
   *    <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">
   *    Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateModelQualityJobDefinitionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model quality monitoring job.</p>
   */
  JobDefinitionArn: string | undefined;
}

/**
 * @public
 * <p>Configuration for monitoring constraints and monitoring statistics. These baseline resources are
 *    compared against the results of the current job from the series of jobs scheduled to collect data
 *    periodically.</p>
 */
export interface MonitoringBaselineConfig {
  /**
   * @public
   * <p>The name of the job that performs baselining for the monitoring job.</p>
   */
  BaseliningJobName?: string;

  /**
   * @public
   * <p>The baseline constraint file in Amazon S3 that the current monitoring job should
   *          validated against.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;

  /**
   * @public
   * <p>The baseline statistics file in Amazon S3 that the current monitoring job should
   *          be validated against.</p>
   */
  StatisticsResource?: MonitoringStatisticsResource;
}

/**
 * @public
 * <p>Container image configuration object for the monitoring job.</p>
 */
export interface MonitoringAppSpecification {
  /**
   * @public
   * <p>The container image to be run by the monitoring job.</p>
   */
  ImageUri: string | undefined;

  /**
   * @public
   * <p>Specifies the entrypoint for a container used to run the monitoring job.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * @public
   * <p>An array of arguments for the container used to run the monitoring job.</p>
   */
  ContainerArguments?: string[];

  /**
   * @public
   * <p>An Amazon S3 URI to a script that is called per row prior to running analysis. It can
   *    base64 decode the payload and convert it into a flattened JSON so that the built-in container can use
   *    the converted data. Applicable only for the built-in (first party) containers.</p>
   */
  RecordPreprocessorSourceUri?: string;

  /**
   * @public
   * <p>An Amazon S3 URI to a script that is called after analysis has been performed. Applicable
   *    only for the built-in (first party) containers.</p>
   */
  PostAnalyticsProcessorSourceUri?: string;
}

/**
 * @public
 * <p>The inputs for a monitoring job.</p>
 */
export interface MonitoringInput {
  /**
   * @public
   * <p>The endpoint for a monitoring job.</p>
   */
  EndpointInput?: EndpointInput;

  /**
   * @public
   * <p>Input object for the batch transform job.</p>
   */
  BatchTransformInput?: BatchTransformInput;
}

/**
 * @public
 * <p>Networking options for a job, such as network traffic encryption between containers,
 *          whether to allow inbound and outbound network calls to and from containers, and the VPC
 *          subnets and security groups to use for VPC-enabled jobs.</p>
 */
export interface NetworkConfig {
  /**
   * @public
   * <p>Whether to encrypt all communications between distributed processing jobs. Choose
   *             <code>True</code> to encrypt communications. Encryption provides greater security for distributed
   *             processing jobs, but the processing might take longer.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * @public
   * <p>Whether to allow inbound and outbound network calls to and from the containers used for
   *          the processing job.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * @public
   * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
   *             access to and from your training and model containers by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

/**
 * @public
 * <p>Defines the monitoring job.</p>
 */
export interface MonitoringJobDefinition {
  /**
   * @public
   * <p>Baseline configuration used to validate that the data conforms to the specified
   *          constraints and statistics</p>
   */
  BaselineConfig?: MonitoringBaselineConfig;

  /**
   * @public
   * <p>The array of inputs for the monitoring job. Currently we support monitoring an Amazon SageMaker Endpoint.</p>
   */
  MonitoringInputs: MonitoringInput[] | undefined;

  /**
   * @public
   * <p>The array of outputs from the monitoring job to be uploaded to Amazon S3.</p>
   */
  MonitoringOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * @public
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *          monitoring job. In distributed processing, you specify more than one instance.</p>
   */
  MonitoringResources: MonitoringResources | undefined;

  /**
   * @public
   * <p>Configures the monitoring job to run a specified Docker container image.</p>
   */
  MonitoringAppSpecification: MonitoringAppSpecification | undefined;

  /**
   * @public
   * <p>Specifies a time limit for how long the monitoring job is allowed to run.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * @public
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * @public
   * <p>Specifies networking options for an monitoring job.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can
   *    assume to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MonitoringType = {
  DATA_QUALITY: "DataQuality",
  MODEL_BIAS: "ModelBias",
  MODEL_EXPLAINABILITY: "ModelExplainability",
  MODEL_QUALITY: "ModelQuality",
} as const;

/**
 * @public
 */
export type MonitoringType = (typeof MonitoringType)[keyof typeof MonitoringType];

/**
 * @public
 * <p>Configuration details about the monitoring schedule.</p>
 */
export interface ScheduleConfig {
  /**
   * @public
   * <p>A cron expression that describes details about the monitoring schedule.</p>
   *          <p>The supported cron expressions are:</p>
   *          <ul>
   *             <li>
   *                <p>If you want to set the job to start every hour, use the following:</p>
   *                <p>
   *                   <code>Hourly: cron(0 * ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>If you want to start the job daily:</p>
   *                <p>
   *                   <code>cron(0 [00-23] ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>If you want to run the job one time, immediately, use the following
   *                keyword:</p>
   *                <p>
   *                   <code>NOW</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For example, the following are valid cron expressions:</p>
   *          <ul>
   *             <li>
   *                <p>Daily at noon UTC: <code>cron(0 12 ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Daily at midnight UTC: <code>cron(0 0 ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To support running every 6, 12 hours, the following are also supported:</p>
   *          <p>
   *             <code>cron(0 [00-23]/[01-24] ? * * *)</code>
   *          </p>
   *          <p>For example, the following are valid cron expressions:</p>
   *          <ul>
   *             <li>
   *                <p>Every 12 hours, starting at 5pm UTC: <code>cron(0 17/12 ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Every two hours starting at midnight: <code>cron(0 0/2 ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Even though the cron expression is set to start at 5PM UTC, note that there
   *                   could be a delay of 0-20 minutes from the actual requested time to run the
   *                   execution. </p>
   *                </li>
   *                <li>
   *                   <p>We recommend that if you would like a daily schedule, you do not provide this
   *                   parameter. Amazon SageMaker will pick a time for running every day.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>You can also specify the keyword <code>NOW</code> to run the monitoring job immediately,
   *          one time, without recurring.</p>
   */
  ScheduleExpression: string | undefined;

  /**
   * @public
   * <p>Sets the start time for a monitoring job window. Express this time as an offset to the
   *          times that you schedule your monitoring jobs to run. You schedule monitoring jobs with the
   *             <code>ScheduleExpression</code> parameter. Specify this offset in ISO 8601 duration
   *          format. For example, if you want to monitor the five hours of data in your dataset that
   *          precede the start of each monitoring job, you would specify: <code>"-PT5H"</code>.</p>
   *          <p>The start time that you specify must not precede the end time that you specify by more
   *          than 24 hours. You specify the end time with the <code>DataAnalysisEndTime</code>
   *          parameter.</p>
   *          <p>If you set <code>ScheduleExpression</code> to <code>NOW</code>, this parameter is
   *          required.</p>
   */
  DataAnalysisStartTime?: string;

  /**
   * @public
   * <p>Sets the end time for a monitoring job window. Express this time as an offset to the
   *          times that you schedule your monitoring jobs to run. You schedule monitoring jobs with the
   *             <code>ScheduleExpression</code> parameter. Specify this offset in ISO 8601 duration
   *          format. For example, if you want to end the window one hour before the start of each
   *          monitoring job, you would specify: <code>"-PT1H"</code>.</p>
   *          <p>The end time that you specify must not follow the start time that you specify by more
   *          than 24 hours. You specify the start time with the <code>DataAnalysisStartTime</code>
   *          parameter.</p>
   *          <p>If you set <code>ScheduleExpression</code> to <code>NOW</code>, this parameter is
   *          required.</p>
   */
  DataAnalysisEndTime?: string;
}

/**
 * @public
 * <p>Configures the monitoring schedule and defines the monitoring job.</p>
 */
export interface MonitoringScheduleConfig {
  /**
   * @public
   * <p>Configures the monitoring schedule.</p>
   */
  ScheduleConfig?: ScheduleConfig;

  /**
   * @public
   * <p>Defines the monitoring job.</p>
   */
  MonitoringJobDefinition?: MonitoringJobDefinition;

  /**
   * @public
   * <p>The name of the monitoring job definition to schedule.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * @public
   * <p>The type of the monitoring job definition to schedule.</p>
   */
  MonitoringType?: MonitoringType;
}

/**
 * @public
 */
export interface CreateMonitoringScheduleRequest {
  /**
   * @public
   * <p>The name of the monitoring schedule. The name must be unique within an Amazon Web Services
   *    Region within an Amazon Web Services account.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * @public
   * <p>The configuration object that specifies the monitoring schedule and defines the monitoring
   *    job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * @public
   * <p>(Optional) An array of key-value pairs. For more information, see <a href=" https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost
   *             Management User Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateMonitoringScheduleResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NotebookInstanceAcceleratorType = {
  ML_EIA1_LARGE: "ml.eia1.large",
  ML_EIA1_MEDIUM: "ml.eia1.medium",
  ML_EIA1_XLARGE: "ml.eia1.xlarge",
  ML_EIA2_LARGE: "ml.eia2.large",
  ML_EIA2_MEDIUM: "ml.eia2.medium",
  ML_EIA2_XLARGE: "ml.eia2.xlarge",
} as const;

/**
 * @public
 */
export type NotebookInstanceAcceleratorType =
  (typeof NotebookInstanceAcceleratorType)[keyof typeof NotebookInstanceAcceleratorType];

/**
 * @public
 * @enum
 */
export const DirectInternetAccess = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type DirectInternetAccess = (typeof DirectInternetAccess)[keyof typeof DirectInternetAccess];

/**
 * @public
 * <p>Information on the IMDS configuration of the notebook instance</p>
 */
export interface InstanceMetadataServiceConfiguration {
  /**
   * @public
   * <p>Indicates the minimum IMDS version that the notebook instance supports. When passed as part of <code>CreateNotebookInstance</code>, if no value is selected, then it defaults to IMDSv1. This means that both IMDSv1 and IMDSv2 are supported. If passed as part of <code>UpdateNotebookInstance</code>, there is no default.</p>
   */
  MinimumInstanceMetadataServiceVersion: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RootAccess = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type RootAccess = (typeof RootAccess)[keyof typeof RootAccess];

/**
 * @public
 */
export interface CreateNotebookInstanceInput {
  /**
   * @public
   * <p>The name of the new notebook instance.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * @public
   * <p>The type of ML compute instance to launch for the notebook instance.</p>
   */
  InstanceType: _InstanceType | undefined;

  /**
   * @public
   * <p>The ID of the subnet in a VPC to which you would like to have a connectivity from
   *             your ML compute instance. </p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be
   *             for the same VPC as specified in the subnet. </p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p> When you send any requests to Amazon Web Services resources from the notebook
   *             instance, SageMaker assumes this role to perform tasks on your behalf. You must grant this
   *             role necessary permissions so SageMaker can perform these tasks. The policy must allow the
   *             SageMaker service principal (sagemaker.amazonaws.com) permissions to assume this role. For
   *             more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker Roles</a>. </p>
   *          <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *          </note>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that
   *             SageMaker uses to encrypt data on the storage volume attached to your notebook instance. The
   *             KMS key you provide must be enabled. For information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/enabling-keys.html">Enabling and Disabling
   *                 Keys</a> in the <i>Amazon Web Services Key Management Service Developer
   *                 Guide</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The name of a lifecycle configuration to associate with the notebook instance. For
   *             information about lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional)
   *                 Customize a Notebook Instance</a>.</p>
   */
  LifecycleConfigName?: string;

  /**
   * @public
   * <p>Sets whether SageMaker provides internet access to the notebook instance. If you set this
   *             to <code>Disabled</code> this notebook instance is able to access resources only in your
   *             VPC, and is not be able to connect to SageMaker training and endpoint services unless you
   *             configure a NAT Gateway in your VPC.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access">Notebook Instances Are Internet-Enabled by Default</a>. You can set the value
   *             of this parameter to <code>Disabled</code> only if you set a value for the
   *                 <code>SubnetId</code> parameter.</p>
   */
  DirectInternetAccess?: DirectInternetAccess;

  /**
   * @public
   * <p>The size, in GB, of the ML storage volume to attach to the notebook instance. The
   *             default value is 5 GB.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * @public
   * <p>A list of Elastic Inference (EI) instance types to associate with this notebook
   *             instance. Currently, only one instance type can be associated with a notebook instance.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorTypes?: NotebookInstanceAcceleratorType[];

  /**
   * @public
   * <p>A Git repository to associate with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. When you open a notebook instance, it opens in the
   *             directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * @public
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. These repositories are cloned at the same level as the
   *             default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * @public
   * <p>Whether root access is enabled or disabled for users of the notebook instance. The
   *             default value is <code>Enabled</code>.</p>
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
export interface CreateNotebookInstanceOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the notebook instance. </p>
   */
  NotebookInstanceArn?: string;
}

/**
 * @public
 * <p>Contains the notebook instance lifecycle configuration script.</p>
 *          <p>Each lifecycle configuration script has a limit of 16384 characters.</p>
 *          <p>The value of the <code>$PATH</code> environment variable that is available to both
 *             scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p>
 *          <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group
 *                 <code>/aws/sagemaker/NotebookInstances</code> in log stream
 *                 <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p>
 *          <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs
 *             for longer than 5 minutes, it fails and the notebook instance is not created or
 *             started.</p>
 *          <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
 *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
 */
export interface NotebookInstanceLifecycleHook {
  /**
   * @public
   * <p>A base64-encoded string that contains a shell script for a notebook instance lifecycle
   *             configuration.</p>
   */
  Content?: string;
}

/**
 * @public
 */
export interface CreateNotebookInstanceLifecycleConfigInput {
  /**
   * @public
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * @public
   * <p>A shell script that runs only once, when you create a notebook instance. The shell
   *             script must be a base64-encoded string.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * @public
   * <p>A shell script that runs every time you start a notebook instance, including when you
   *             create the notebook instance. The shell script must be a base64-encoded string.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];
}

/**
 * @public
 */
export interface CreateNotebookInstanceLifecycleConfigOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn?: string;
}

/**
 * @public
 * <p>Configuration that controls the parallelism of the pipeline.
 *             By default, the parallelism configuration specified applies to all
 *             executions of the pipeline unless overridden.</p>
 */
export interface ParallelismConfiguration {
  /**
   * @public
   * <p>The max number of steps that can be executed in parallel. </p>
   */
  MaxParallelExecutionSteps: number | undefined;
}

/**
 * @public
 * <p>The location of the pipeline definition stored in Amazon S3.</p>
 */
export interface PipelineDefinitionS3Location {
  /**
   * @public
   * <p>Name of the S3 bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The object key (or key name) uniquely identifies the
   *             object in an S3 bucket. </p>
   */
  ObjectKey: string | undefined;

  /**
   * @public
   * <p>Version Id of the pipeline definition file. If not specified, Amazon SageMaker
   *             will retrieve the latest version.</p>
   */
  VersionId?: string;
}

/**
 * @public
 */
export interface CreatePipelineRequest {
  /**
   * @public
   * <p>The name of the pipeline.</p>
   */
  PipelineName: string | undefined;

  /**
   * @public
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * @public
   * <p>The <a href="https://aws-sagemaker-mlops.github.io/sagemaker-model-building-pipeline-definition-JSON-schema/">JSON
   *          pipeline definition</a> of the pipeline.</p>
   */
  PipelineDefinition?: string;

  /**
   * @public
   * <p>The location of the pipeline definition stored in Amazon S3. If specified,
   *             SageMaker will retrieve the pipeline definition from this location.</p>
   */
  PipelineDefinitionS3Location?: PipelineDefinitionS3Location;

  /**
   * @public
   * <p>A description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role used by the pipeline to access and create resources.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A list of tags to apply to the created pipeline.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>This is the configuration that controls the parallelism of the pipeline.
   *             If specified, it applies to all runs of this pipeline by default.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * @public
 */
export interface CreatePipelineResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the created pipeline.</p>
   */
  PipelineArn?: string;
}

/**
 * @public
 */
export interface CreatePresignedDomainUrlRequest {
  /**
   * @public
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * @public
   * <p>The name of the UserProfile to sign-in as.</p>
   */
  UserProfileName: string | undefined;

  /**
   * @public
   * <p>The session expiration duration in seconds. This value defaults to 43200.</p>
   */
  SessionExpirationDurationInSeconds?: number;

  /**
   * @public
   * <p>The number of seconds until the pre-signed URL expires. This value defaults to
   *          300.</p>
   */
  ExpiresInSeconds?: number;

  /**
   * @public
   * <p>The name of the space.</p>
   */
  SpaceName?: string;
}

/**
 * @public
 */
export interface CreatePresignedDomainUrlResponse {
  /**
   * @public
   * <p>The presigned URL.</p>
   */
  AuthorizedUrl?: string;
}

/**
 * @public
 */
export interface CreatePresignedNotebookInstanceUrlInput {
  /**
   * @public
   * <p>The name of the notebook instance.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * @public
   * <p>The duration of the session, in seconds. The default is 12 hours.</p>
   */
  SessionExpirationDurationInSeconds?: number;
}

/**
 * @public
 */
export interface CreatePresignedNotebookInstanceUrlOutput {
  /**
   * @public
   * <p>A JSON object that contains the URL string. </p>
   */
  AuthorizedUrl?: string;
}

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
export interface ExperimentConfig {
  /**
   * @public
   * <p>The name of an existing experiment to associate with the trial component.</p>
   */
  ExperimentName?: string;

  /**
   * @public
   * <p>The name of an existing trial to associate the trial component with. If not specified, a
   *       new trial is created.</p>
   */
  TrialName?: string;

  /**
   * @public
   * <p>The display name for the trial component. If this key isn't specified, the display name is
   *       the trial component name.</p>
   */
  TrialComponentDisplayName?: string;

  /**
   * @public
   * <p>The name of the experiment run to associate with the trial component.</p>
   */
  RunName?: string;
}

/**
 * @public
 * @enum
 */
export const DataDistributionType = {
  FULLYREPLICATED: "FullyReplicated",
  SHARDEDBYS3KEY: "ShardedByS3Key",
} as const;

/**
 * @public
 */
export type DataDistributionType = (typeof DataDistributionType)[keyof typeof DataDistributionType];

/**
 * @public
 * @enum
 */
export const InputMode = {
  FILE: "File",
  PIPE: "Pipe",
} as const;

/**
 * @public
 */
export type InputMode = (typeof InputMode)[keyof typeof InputMode];

/**
 * @public
 * @enum
 */
export const RedshiftResultCompressionType = {
  BZIP2: "BZIP2",
  GZIP: "GZIP",
  NONE: "None",
  SNAPPY: "SNAPPY",
  ZSTD: "ZSTD",
} as const;

/**
 * @public
 */
export type RedshiftResultCompressionType =
  (typeof RedshiftResultCompressionType)[keyof typeof RedshiftResultCompressionType];

/**
 * @public
 * @enum
 */
export const RedshiftResultFormat = {
  CSV: "CSV",
  PARQUET: "PARQUET",
} as const;

/**
 * @public
 */
export type RedshiftResultFormat = (typeof RedshiftResultFormat)[keyof typeof RedshiftResultFormat];

/**
 * @public
 * <p>Configuration for Redshift Dataset Definition input.</p>
 */
export interface RedshiftDatasetDefinition {
  /**
   * @public
   * <p>The Redshift cluster Identifier.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The name of the Redshift database used in Redshift query execution.</p>
   */
  Database: string | undefined;

  /**
   * @public
   * <p>The database user name used in Redshift query execution.</p>
   */
  DbUser: string | undefined;

  /**
   * @public
   * <p>The SQL query statements to be executed.</p>
   */
  QueryString: string | undefined;

  /**
   * @public
   * <p>The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets.</p>
   */
  ClusterRoleArn: string | undefined;

  /**
   * @public
   * <p>The location in Amazon S3 where the Redshift query results are stored.</p>
   */
  OutputS3Uri: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data from a
   *             Redshift execution.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The data storage format for Redshift query results.</p>
   */
  OutputFormat: RedshiftResultFormat | undefined;

  /**
   * @public
   * <p>The compression used for Redshift query results.</p>
   */
  OutputCompression?: RedshiftResultCompressionType;
}

/**
 * @public
 * <p>Configuration for Dataset Definition inputs. The Dataset Definition input must specify
 *             exactly one of either <code>AthenaDatasetDefinition</code> or <code>RedshiftDatasetDefinition</code>
 *             types.</p>
 */
export interface DatasetDefinition {
  /**
   * @public
   * <p>Configuration for Athena Dataset Definition input.</p>
   */
  AthenaDatasetDefinition?: AthenaDatasetDefinition;

  /**
   * @public
   * <p>Configuration for Redshift Dataset Definition input.</p>
   */
  RedshiftDatasetDefinition?: RedshiftDatasetDefinition;

  /**
   * @public
   * <p>The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a
   *             processing job. <code>LocalPath</code> is an absolute path to the input data. This is a required
   *             parameter when <code>AppManaged</code> is <code>False</code> (default).</p>
   */
  LocalPath?: string;

  /**
   * @public
   * <p>Whether the generated dataset is <code>FullyReplicated</code> or
   *             <code>ShardedByS3Key</code> (default).</p>
   */
  DataDistributionType?: DataDistributionType;

  /**
   * @public
   * <p>Whether to use <code>File</code> or <code>Pipe</code> input mode. In <code>File</code> (default) mode,
   *             Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store
   *             (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used
   *             input mode. In <code>Pipe</code> mode, Amazon SageMaker streams input data from the source directly to your
   *             algorithm without using the EBS volume.</p>
   */
  InputMode?: InputMode;
}

/**
 * @public
 * @enum
 */
export const ProcessingS3CompressionType = {
  GZIP: "Gzip",
  NONE: "None",
} as const;

/**
 * @public
 */
export type ProcessingS3CompressionType =
  (typeof ProcessingS3CompressionType)[keyof typeof ProcessingS3CompressionType];

/**
 * @public
 * @enum
 */
export const ProcessingS3DataType = {
  MANIFEST_FILE: "ManifestFile",
  S3_PREFIX: "S3Prefix",
} as const;

/**
 * @public
 */
export type ProcessingS3DataType = (typeof ProcessingS3DataType)[keyof typeof ProcessingS3DataType];

/**
 * @public
 * <p>Configuration for downloading input data from Amazon S3 into the processing container.</p>
 */
export interface ProcessingS3Input {
  /**
   * @public
   * <p>The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job.</p>
   */
  S3Uri: string | undefined;

  /**
   * @public
   * <p>The local path in your container where you want Amazon SageMaker to write input data to.
   *             <code>LocalPath</code> is an absolute path to the input data and must begin with
   *             <code>/opt/ml/processing/</code>. <code>LocalPath</code> is a required
   *             parameter when <code>AppManaged</code> is <code>False</code> (default).</p>
   */
  LocalPath?: string;

  /**
   * @public
   * <p>Whether you use an <code>S3Prefix</code> or a <code>ManifestFile</code> for
   *             the data type. If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key
   *             name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing
   *             job. If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object
   *             that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for
   *             the processing job.</p>
   */
  S3DataType: ProcessingS3DataType | undefined;

  /**
   * @public
   * <p>Whether to use <code>File</code> or <code>Pipe</code> input mode. In File mode, Amazon SageMaker copies the data
   *             from the input source onto the local ML storage volume before starting your processing
   *             container. This is the most commonly used input mode. In <code>Pipe</code> mode, Amazon SageMaker
   *             streams input data from the source directly to your processing container into named
   *             pipes without using the ML storage volume.</p>
   */
  S3InputMode?: ProcessingS3InputMode;

  /**
   * @public
   * <p>Whether to distribute the data from Amazon S3 to all processing instances with
   *             <code>FullyReplicated</code>, or whether the data from Amazon S3 is shared by Amazon S3 key,
   *             downloading one shard of data to each processing instance.</p>
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType;

  /**
   * @public
   * <p>Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing
   *             container. <code>Gzip</code> can only be used when <code>Pipe</code> mode is
   *             specified as the <code>S3InputMode</code>. In <code>Pipe</code> mode, Amazon SageMaker streams input
   *             data from the source directly to your container without using the EBS volume.</p>
   */
  S3CompressionType?: ProcessingS3CompressionType;
}

/**
 * @public
 * <p>The inputs for a processing job. The processing input must specify exactly one of either
 *             <code>S3Input</code> or <code>DatasetDefinition</code> types.</p>
 */
export interface ProcessingInput {
  /**
   * @public
   * <p>The name for the processing job input.</p>
   */
  InputName: string | undefined;

  /**
   * @public
   * <p>When <code>True</code>, input operations such as data download are managed natively by the
   *             processing job application. When <code>False</code> (default), input operations are managed by Amazon SageMaker.</p>
   */
  AppManaged?: boolean;

  /**
   * @public
   * <p>Configuration for downloading input data from Amazon S3 into the processing container.</p>
   */
  S3Input?: ProcessingS3Input;

  /**
   * @public
   * <p>Configuration for a Dataset Definition input. </p>
   */
  DatasetDefinition?: DatasetDefinition;
}

/**
 * @public
 * <p>Configuration for processing job outputs in Amazon SageMaker Feature Store.</p>
 */
export interface ProcessingFeatureStoreOutput {
  /**
   * @public
   * <p>The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output. Note that your
   *             processing script is responsible for putting records into your Feature Store.</p>
   */
  FeatureGroupName: string | undefined;
}

/**
 * @public
 * <p>Configuration for uploading output data to Amazon S3 from the processing container.</p>
 */
export interface ProcessingS3Output {
  /**
   * @public
   * <p>A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of
   *             a processing job.</p>
   */
  S3Uri: string | undefined;

  /**
   * @public
   * <p>The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3.
   *             <code>LocalPath</code> is an absolute path to a directory containing output files.
   *             This directory will be created by the platform and exist when your container's
   *             entrypoint is invoked.</p>
   */
  LocalPath: string | undefined;

  /**
   * @public
   * <p>Whether to upload the results of the processing job continuously or after the job
   *             completes.</p>
   */
  S3UploadMode: ProcessingS3UploadMode | undefined;
}

/**
 * @public
 * <p>Describes the results of a processing job. The processing output must specify exactly one of
 *             either <code>S3Output</code> or <code>FeatureStoreOutput</code> types.</p>
 */
export interface ProcessingOutput {
  /**
   * @public
   * <p>The name for the processing job output.</p>
   */
  OutputName: string | undefined;

  /**
   * @public
   * <p>Configuration for processing job outputs in Amazon S3.</p>
   */
  S3Output?: ProcessingS3Output;

  /**
   * @public
   * <p>Configuration for processing job outputs in Amazon SageMaker Feature Store. This processing output
   *             type is only supported when <code>AppManaged</code> is specified. </p>
   */
  FeatureStoreOutput?: ProcessingFeatureStoreOutput;

  /**
   * @public
   * <p>When <code>True</code>, output operations such as data upload are managed natively by the
   *             processing job application. When <code>False</code> (default), output operations are managed by
   *             Amazon SageMaker.</p>
   */
  AppManaged?: boolean;
}

/**
 * @public
 * <p>Configuration for uploading output from the processing container.</p>
 */
export interface ProcessingOutputConfig {
  /**
   * @public
   * <p>An array of outputs configuring the data to upload from the processing container.</p>
   */
  Outputs: ProcessingOutput[] | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt the processing
   *             job output. <code>KmsKeyId</code> can be an ID of a KMS key, ARN of a KMS key, alias of
   *             a KMS key, or alias of a KMS key. The <code>KmsKeyId</code> is applied to all
   *             outputs.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * <p>Configuration for the cluster used to run a processing job.</p>
 */
export interface ProcessingClusterConfig {
  /**
   * @public
   * <p>The number of ML compute instances to use in the processing job. For distributed
   *             processing jobs, specify a value greater than 1. The default value is 1.</p>
   */
  InstanceCount: number | undefined;

  /**
   * @public
   * <p>The ML compute instance type for the processing job.</p>
   */
  InstanceType: ProcessingInstanceType | undefined;

  /**
   * @public
   * <p>The size of the ML storage volume in gigabytes that you want to provision. You must
   *             specify sufficient ML storage for your scenario.</p>
   *          <note>
   *             <p>Certain Nitro-based instances include local storage with a fixed total size,
   *                 dependent on the instance type. When using these instances for processing, Amazon SageMaker mounts
   *                 the local instance storage instead of Amazon EBS gp2 storage. You can't request a
   *                 <code>VolumeSizeInGB</code> greater than the total size of the local instance
   *                 storage.</p>
   *             <p>For a list of instance types that support local instance storage, including the
   *                 total size per instance type, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *          </note>
   */
  VolumeSizeInGB: number | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the
   *             storage volume attached to the ML compute instance(s) that run the processing job.
   *         </p>
   *          <note>
   *             <p>Certain Nitro-based instances include local storage, dependent on the instance
   *                 type. Local storage volumes are encrypted using a hardware module on the instance.
   *                 You can't request a <code>VolumeKmsKeyId</code> when using an instance type with
   *                 local storage.</p>
   *             <p>For a list of instance types that support local instance storage, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *             <p>For more information about local instance storage encryption, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">SSD
   *                 Instance Store Volumes</a>.</p>
   *          </note>
   */
  VolumeKmsKeyId?: string;
}

/**
 * @public
 * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
 *             processing job. In distributed training, you specify more than one instance.</p>
 */
export interface ProcessingResources {
  /**
   * @public
   * <p>The configuration for the resources in a cluster used to run the processing
   *             job.</p>
   */
  ClusterConfig: ProcessingClusterConfig | undefined;
}

/**
 * @public
 * <p>Configures conditions under which the processing job should be stopped, such as how long
 *             the processing job has been running. After the condition is met, the processing job is stopped.</p>
 */
export interface ProcessingStoppingCondition {
  /**
   * @public
   * <p>Specifies the maximum runtime in seconds.</p>
   */
  MaxRuntimeInSeconds: number | undefined;
}

/**
 * @public
 */
export interface CreateProcessingJobRequest {
  /**
   * @public
   * <p>An array of inputs configuring the data to download into the
   *             processing container.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * @public
   * <p>Output configuration for the processing job.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * @public
   * <p> The name of the processing job. The name must be unique within an Amazon Web Services Region in the
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
   * <p>Configures the processing job to run a specified Docker container image.</p>
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * @public
   * <p>The environment variables to set in the Docker container. Up to
   *             100 key and values entries in the map are supported.</p>
   */
  Environment?: Record<string, string>;

  /**
   * @public
   * <p>Networking options for a processing job, such as whether to allow inbound and
   *             outbound network calls to and from processing containers, and the VPC subnets and
   *             security groups to use for VPC-enabled processing jobs.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *             your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>(Optional) An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];

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
export interface CreateProcessingJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  ProcessingJobArn: string | undefined;
}

/**
 * @public
 * <p>A key value pair used when you provision a project as a service catalog product. For
 *             information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
 *                 Catalog</a>.</p>
 */
export interface ProvisioningParameter {
  /**
   * @public
   * <p>The key that identifies a provisioning parameter.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value of the provisioning parameter.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Details that you specify to provision a service catalog product. For information about
 *             service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
 *                 Catalog</a>.</p>
 */
export interface ServiceCatalogProvisioningDetails {
  /**
   * @public
   * <p>The ID of the product to provision.</p>
   */
  ProductId: string | undefined;

  /**
   * @public
   * <p>The ID of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * @public
   * <p>The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. </p>
   */
  PathId?: string;

  /**
   * @public
   * <p>A list of key value pairs that you specify when you provision a product.</p>
   */
  ProvisioningParameters?: ProvisioningParameter[];
}

/**
 * @public
 */
export interface CreateProjectInput {
  /**
   * @public
   * <p>The name of the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * @public
   * <p>A description for the project.</p>
   */
  ProjectDescription?: string;

  /**
   * @public
   * <p>The product ID and provisioning artifact ID to provision a service catalog. The provisioning
   *             artifact ID will default to the latest provisioning artifact ID of the product, if you don't
   *             provide the provisioning artifact ID. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *                 Catalog</a>.</p>
   */
  ServiceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails | undefined;

  /**
   * @public
   * <p>An array of key-value pairs that you want to use to organize and track your Amazon Web Services
   *             resource costs. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateProjectOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;

  /**
   * @public
   * <p>The ID of the new project.</p>
   */
  ProjectId: string | undefined;
}

/**
 * @public
 * <p>A collection of space settings.</p>
 */
export interface SpaceSettings {
  /**
   * @public
   * <p>The JupyterServer app settings.</p>
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;

  /**
   * @public
   * <p>The KernelGateway app settings.</p>
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;
}

/**
 * @public
 */
export interface CreateSpaceRequest {
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

  /**
   * @public
   * <p>Tags to associated with the space. Each tag consists of a key and an optional value.
   *             Tag keys must be unique for each resource. Tags are searchable using the
   *             <code>Search</code> API.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A collection of space settings.</p>
   */
  SpaceSettings?: SpaceSettings;
}

/**
 * @public
 */
export interface CreateSpaceResponse {
  /**
   * @public
   * <p>The space's Amazon Resource Name (ARN).</p>
   */
  SpaceArn?: string;
}

/**
 * @public
 * @enum
 */
export const StudioLifecycleConfigAppType = {
  JupyterServer: "JupyterServer",
  KernelGateway: "KernelGateway",
} as const;

/**
 * @public
 */
export type StudioLifecycleConfigAppType =
  (typeof StudioLifecycleConfigAppType)[keyof typeof StudioLifecycleConfigAppType];

/**
 * @public
 */
export interface CreateStudioLifecycleConfigRequest {
  /**
   * @public
   * <p>The name of the Studio Lifecycle Configuration to create.</p>
   */
  StudioLifecycleConfigName: string | undefined;

  /**
   * @public
   * <p>The content of your Studio Lifecycle Configuration script. This content must be base64 encoded.</p>
   */
  StudioLifecycleConfigContent: string | undefined;

  /**
   * @public
   * <p>The App type that the Lifecycle Configuration is attached to.</p>
   */
  StudioLifecycleConfigAppType: StudioLifecycleConfigAppType | undefined;

  /**
   * @public
   * <p>Tags to be associated with the Lifecycle Configuration. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API. </p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateStudioLifecycleConfigResponse {
  /**
   * @public
   * <p>The ARN of your created Lifecycle Configuration.</p>
   */
  StudioLifecycleConfigArn?: string;
}

/**
 * @public
 * <p>Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and
 *             storage paths. To learn more about
 *             how to configure the <code>DebugHookConfig</code> parameter,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
 */
export interface DebugHookConfig {
  /**
   * @public
   * <p>Path to local storage location for metrics and tensors. Defaults to
   *                 <code>/opt/ml/output/tensors/</code>.</p>
   */
  LocalPath?: string;

  /**
   * @public
   * <p>Path to Amazon S3 storage location for metrics and tensors.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * @public
   * <p>Configuration information for the Amazon SageMaker Debugger hook parameters.</p>
   */
  HookParameters?: Record<string, string>;

  /**
   * @public
   * <p>Configuration information for Amazon SageMaker Debugger tensor collections. To learn more about
   *             how to configure the <code>CollectionConfiguration</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   */
  CollectionConfigurations?: CollectionConfiguration[];
}

/**
 * @public
 * <p>Configuration information for SageMaker Debugger rules for debugging. To learn more about
 *             how to configure the <code>DebugRuleConfiguration</code> parameter,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
 */
export interface DebugRuleConfiguration {
  /**
   * @public
   * <p>The name of the rule configuration. It must be unique relative to other rule
   *             configuration names.</p>
   */
  RuleConfigurationName: string | undefined;

  /**
   * @public
   * <p>Path to local storage location for output of rules. Defaults to
   *                 <code>/opt/ml/processing/output/rule/</code>.</p>
   */
  LocalPath?: string;

  /**
   * @public
   * <p>Path to Amazon S3 storage location for rules.</p>
   */
  S3OutputPath?: string;

  /**
   * @public
   * <p>The Amazon Elastic Container (ECR) Image for the managed rule evaluation.</p>
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * @public
   * <p>The instance type to deploy a custom rule for debugging a training job.</p>
   */
  InstanceType?: ProcessingInstanceType;

  /**
   * @public
   * <p>The size, in GB, of the ML storage volume attached to the processing instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * @public
   * <p>Runtime configuration for rule container.</p>
   */
  RuleParameters?: Record<string, string>;
}

/**
 * @public
 * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and
 *             storage paths.</p>
 */
export interface ProfilerConfig {
  /**
   * @public
   * <p>Path to Amazon S3 storage location for system and framework metrics.</p>
   */
  S3OutputPath?: string;

  /**
   * @public
   * <p>A time interval for capturing system metrics in milliseconds. Available values are
   *             100, 200, 500, 1000 (1 second), 5000 (5 seconds), and 60000 (1 minute) milliseconds. The default value is 500 milliseconds.</p>
   */
  ProfilingIntervalInMilliseconds?: number;

  /**
   * @public
   * <p>Configuration information for capturing framework metrics. Available key strings for different profiling options are
   *             <code>DetailedProfilingConfig</code>, <code>PythonProfilingConfig</code>, and <code>DataLoaderProfilingConfig</code>.
   *             The following codes are configuration structures for the <code>ProfilingParameters</code> parameter. To learn more about
   *             how to configure the <code>ProfilingParameters</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   */
  ProfilingParameters?: Record<string, string>;

  /**
   * @public
   * <p>Configuration to turn off Amazon SageMaker Debugger's system monitoring and profiling functionality. To turn it off, set to <code>True</code>.</p>
   */
  DisableProfiler?: boolean;
}

/**
 * @public
 * <p>Configuration information for profiling rules.</p>
 */
export interface ProfilerRuleConfiguration {
  /**
   * @public
   * <p>The name of the rule configuration. It must be unique relative to other rule configuration names.</p>
   */
  RuleConfigurationName: string | undefined;

  /**
   * @public
   * <p>Path to local storage location for output of rules. Defaults to <code>/opt/ml/processing/output/rule/</code>. </p>
   */
  LocalPath?: string;

  /**
   * @public
   * <p>Path to Amazon S3 storage location for rules.</p>
   */
  S3OutputPath?: string;

  /**
   * @public
   * <p>The Amazon Elastic Container Registry Image for the managed rule evaluation.</p>
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * @public
   * <p>The instance type to deploy a custom rule for profiling a training job.</p>
   */
  InstanceType?: ProcessingInstanceType;

  /**
   * @public
   * <p>The size, in GB, of the ML storage volume attached to the processing instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * @public
   * <p>Runtime configuration for rule container.</p>
   */
  RuleParameters?: Record<string, string>;
}

/**
 * @public
 * <p>Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.</p>
 */
export interface TensorBoardOutputConfig {
  /**
   * @public
   * <p>Path to local storage location for tensorBoard output. Defaults to
   *                 <code>/opt/ml/output/tensorboard</code>.</p>
   */
  LocalPath?: string;

  /**
   * @public
   * <p>Path to Amazon S3 storage location for TensorBoard output.</p>
   */
  S3OutputPath: string | undefined;
}

/**
 * @public
 */
export interface CreateTrainingJobRequest {
  /**
   * @public
   * <p>The name of the training job. The name must be unique within an Amazon Web Services
   *             Region in an Amazon Web Services account. </p>
   */
  TrainingJobName: string | undefined;

  /**
   * @public
   * <p>Algorithm-specific parameters that influence the quality of the model. You set
   *             hyperparameters before you start the learning process. For a list of hyperparameters for
   *             each training algorithm provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
   *          <p>You can specify a maximum of 100 hyperparameters. Each hyperparameter is a
   *             key-value pair. Each key and value is limited to 256 characters, as specified by the
   *                 <code>Length Constraint</code>. </p>
   *          <important>
   *             <p>Do not include any security-sensitive information including account access IDs,
   *                 secrets or tokens in any hyperparameter field. If the use of security-sensitive
   *                 credentials are detected, SageMaker will reject your training job request and return an
   *                 exception error.</p>
   *          </important>
   */
  HyperParameters?: Record<string, string>;

  /**
   * @public
   * <p>The registry path of the Docker image that contains the training algorithm and
   *             algorithm-specific metadata, including the input mode. For more information about
   *             algorithms provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about
   *             providing your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with
   *                 Amazon SageMaker</a>. </p>
   */
  AlgorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that SageMaker can assume to perform
   *             tasks on your behalf. </p>
   *          <p>During model training, SageMaker needs your permission to read input data from an S3
   *             bucket, download a Docker image that contains training code, write model artifacts to an
   *             S3 bucket, write logs to Amazon CloudWatch Logs, and publish metrics to Amazon CloudWatch. You grant
   *             permissions for all of these tasks to an IAM role. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker
   *                 Roles</a>. </p>
   *          <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *          </note>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>An array of <code>Channel</code> objects. Each channel is a named input source.
   *                 <code>InputDataConfig</code> describes the input data and its location. </p>
   *          <p>Algorithms can accept input data from one or more channels. For example, an
   *             algorithm might have two channels of input data, <code>training_data</code> and
   *                 <code>validation_data</code>. The configuration for each channel provides the S3,
   *             EFS, or FSx location where the input data is stored. It also provides information about
   *             the stored data: the MIME type, compression method, and whether the data is wrapped in
   *             RecordIO format. </p>
   *          <p>Depending on the input mode that the algorithm supports, SageMaker either copies input
   *             data files from an S3 bucket to a local directory in the Docker container, or makes it
   *             available as input streams. For example, if you specify an EFS location, input data
   *             files are available as input streams. They do not need to be downloaded.</p>
   *          <p>Your input must be in the same Amazon Web Services region as your training
   *             job.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * @public
   * <p>Specifies the path to the S3 location where you want to store model artifacts. SageMaker
   *             creates subfolders for the artifacts. </p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * @public
   * <p>The resources, including the ML compute instances and ML storage volumes, to use
   *             for model training. </p>
   *          <p>ML storage volumes store model artifacts and incremental states. Training
   *             algorithms might also use ML storage volumes for scratch space. If you want SageMaker to use
   *             the ML storage volume to store the training data, choose <code>File</code> as the
   *                 <code>TrainingInputMode</code> in the algorithm specification. For distributed
   *             training algorithms, specify an instance count greater than 1.</p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * @public
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that you want your training job to
   *             connect to. Control access to and from your training container by configuring the VPC.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
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
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Isolates the training container. No inbound or outbound network calls can be made,
   *             except for calls between peers within a training cluster for distributed training. If
   *             you enable network isolation for training jobs that are configured to use a VPC, SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * @public
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-encrypt.html">Protect Communications Between ML
   *                 Compute Instances in a Distributed Training Job</a>.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * @public
   * <p>To train models using managed spot training, choose <code>True</code>. Managed spot
   *             training provides a fully managed and scalable infrastructure for training machine
   *             learning models. this option is useful when training jobs can be interrupted and when
   *             there is flexibility when the training job is run. </p>
   *          <p>The complete and intermediate results of jobs are stored in an Amazon S3 bucket, and can be
   *             used as a starting point to train models incrementally. Amazon SageMaker provides metrics and
   *             logs in CloudWatch. They can be used to see when managed spot training jobs are running,
   *             interrupted, resumed, or completed. </p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * @public
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data.</p>
   */
  CheckpointConfig?: CheckpointConfig;

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
   * <p>The environment variables to set in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * @public
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;
}

/**
 * @public
 */
export interface CreateTrainingJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JoinSource = {
  INPUT: "Input",
  NONE: "None",
} as const;

/**
 * @public
 */
export type JoinSource = (typeof JoinSource)[keyof typeof JoinSource];

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
export interface DataProcessing {
  /**
   * @public
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators">JSONPath</a> expression used to select a portion of the input data to pass to
   *             the algorithm. Use the <code>InputFilter</code> parameter to exclude fields, such as an
   *             ID column, from the input. If you want SageMaker to pass the entire input dataset to the
   *             algorithm, accept the default value <code>$</code>.</p>
   *          <p>Examples: <code>"$"</code>, <code>"$[1:]"</code>, <code>"$.features"</code>
   *          </p>
   */
  InputFilter?: string;

  /**
   * @public
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators">JSONPath</a> expression used to select a portion of the joined dataset to save
   *             in the output file for a batch transform job. If you want SageMaker to store the entire input
   *             dataset in the output file, leave the default value, <code>$</code>. If you specify
   *             indexes that aren't within the dimension size of the joined dataset, you get an
   *             error.</p>
   *          <p>Examples: <code>"$"</code>, <code>"$[0,5:]"</code>,
   *                 <code>"$['id','SageMakerOutput']"</code>
   *          </p>
   */
  OutputFilter?: string;

  /**
   * @public
   * <p>Specifies the source of the data to join with the transformed data. The valid values
   *             are <code>None</code> and <code>Input</code>. The default value is <code>None</code>,
   *             which specifies not to join the input with the transformed data. If you want the batch
   *             transform job to join the original input data with the transformed data, set
   *                 <code>JoinSource</code> to <code>Input</code>. You can specify
   *                 <code>OutputFilter</code> as an additional filter to select a portion of the joined
   *             dataset and store it in the output file.</p>
   *          <p>For JSON or JSONLines objects, such as a JSON array, SageMaker adds the transformed data to
   *             the input JSON object in an attribute called <code>SageMakerOutput</code>. The joined
   *             result for JSON must be a key-value pair object. If the input is not a key-value pair
   *             object, SageMaker creates a new JSON file. In the new JSON file, and the input data is stored
   *             under the <code>SageMakerInput</code> key and the results are stored in
   *                 <code>SageMakerOutput</code>.</p>
   *          <p>For CSV data, SageMaker takes each row as a JSON array and joins the transformed data with
   *             the input by appending each transformed row to the end of the input. The joined data has
   *             the original input data followed by the transformed data and the output is a CSV
   *             file.</p>
   *          <p>For information on how joining in applied, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#batch-transform-data-processing-workflow">Workflow for Associating Inferences with Input Records</a>.</p>
   */
  JoinSource?: JoinSource;
}

/**
 * @public
 * <p>Configures the timeout and maximum number of retries for processing a transform job
 *             invocation.</p>
 */
export interface ModelClientConfig {
  /**
   * @public
   * <p>The timeout value in seconds for an invocation request. The default value is
   *             600.</p>
   */
  InvocationsTimeoutInSeconds?: number;

  /**
   * @public
   * <p>The maximum number of retries when invocation requests are failing. The default value
   *             is 3.</p>
   */
  InvocationsMaxRetries?: number;
}

/**
 * @public
 */
export interface CreateTransformJobRequest {
  /**
   * @public
   * <p>The name of the transform job. The name must be unique within an Amazon Web Services Region in an
   *             Amazon Web Services account. </p>
   */
  TransformJobName: string | undefined;

  /**
   * @public
   * <p>The name of the model that you want to use for the transform job.
   *             <code>ModelName</code> must be the name of an existing Amazon SageMaker model within an Amazon Web Services
   *             Region in an Amazon Web Services account.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The maximum number of parallel requests that can be sent to each instance in a
   *             transform job. If <code>MaxConcurrentTransforms</code> is set to <code>0</code> or left
   *             unset, Amazon SageMaker checks the optional execution-parameters to determine the settings for your
   *             chosen algorithm. If the execution-parameters endpoint is not enabled, the default value
   *             is <code>1</code>. For more information on execution-parameters, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-batch-code.html#your-algorithms-batch-code-how-containe-serves-requests">How Containers Serve Requests</a>. For built-in algorithms, you don't need to
   *             set a value for <code>MaxConcurrentTransforms</code>.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * @public
   * <p>Configures the timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * @public
   * <p>The maximum allowed size of the payload, in MB. A <i>payload</i> is the
   *             data portion of a record (without metadata). The value in <code>MaxPayloadInMB</code>
   *             must be greater than, or equal to, the size of a single record. To estimate the size of
   *             a record in MB, divide the size of your dataset by the number of records. To ensure that
   *             the records fit within the maximum payload size, we recommend using a slightly larger
   *             value. The default value is <code>6</code> MB.
   *             </p>
   *          <p>The value of <code>MaxPayloadInMB</code> cannot be greater than 100 MB. If you specify
   *             the <code>MaxConcurrentTransforms</code> parameter, the value of
   *                 <code>(MaxConcurrentTransforms * MaxPayloadInMB)</code> also cannot exceed 100
   *             MB.</p>
   *          <p>For cases where the payload might be arbitrarily large and is transmitted using HTTP
   *             chunked encoding, set the value to <code>0</code>.
   *             This
   *             feature works only in supported algorithms. Currently, Amazon SageMaker built-in
   *             algorithms do not support HTTP chunked encoding.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * @public
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference
   *             request. A <i>record</i>
   *             <i></i> is a single unit of input data that
   *             inference can be made on. For example, a single line in a CSV file is a record. </p>
   *          <p>To enable the batch strategy, you must set the <code>SplitType</code> property to
   *                 <code>Line</code>, <code>RecordIO</code>, or <code>TFRecord</code>.</p>
   *          <p>To use only one record when making an HTTP invocation request to a container, set
   *                 <code>BatchStrategy</code> to <code>SingleRecord</code> and <code>SplitType</code>
   *             to <code>Line</code>.</p>
   *          <p>To fit as many records in a mini-batch as can fit within the
   *                 <code>MaxPayloadInMB</code> limit, set <code>BatchStrategy</code> to
   *                 <code>MultiRecord</code> and <code>SplitType</code> to <code>Line</code>.</p>
   */
  BatchStrategy?: BatchStrategy;

  /**
   * @public
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *             values entries in the map.</p>
   */
  Environment?: Record<string, string>;

  /**
   * @public
   * <p>Describes the input source and
   *             the
   *             way the transform job consumes it.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * @public
   * <p>Describes the results of the transform job.</p>
   */
  TransformOutput: TransformOutput | undefined;

  /**
   * @public
   * <p>Configuration to control how SageMaker captures inference data.</p>
   */
  DataCaptureConfig?: BatchDataCaptureConfig;

  /**
   * @public
   * <p>Describes the resources, including
   *             ML
   *             instance types and ML instance count, to use for the transform
   *             job.</p>
   */
  TransformResources: TransformResources | undefined;

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
   * <p>(Optional)
   *             An
   *             array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];

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
export interface CreateTransformJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateTrialRequest {
  /**
   * @public
   * <p>The name of the trial. The name must be unique in your Amazon Web Services account and is not
   *       case-sensitive.</p>
   */
  TrialName: string | undefined;

  /**
   * @public
   * <p>The name of the trial as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The name of the experiment to associate the trial with.</p>
   */
  ExperimentName: string | undefined;

  /**
   * @public
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * @public
   * <p>A list of tags to associate with the trial. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to
   *       search on the tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTrialResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

/**
 * @public
 * <p>Represents an input or output artifact of a trial component. You specify
 *         <code>TrialComponentArtifact</code> as part of the <code>InputArtifacts</code> and
 *       <code>OutputArtifacts</code> parameters in the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrialComponent.html">CreateTrialComponent</a>
 *       request.</p>
 *          <p>Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and
 *       instance types. Examples of output artifacts are metrics, snapshots, logs, and images.</p>
 */
export interface TrialComponentArtifact {
  /**
   * @public
   * <p>The media type of the artifact, which indicates the type of data in the artifact file. The
   *       media type consists of a <i>type</i> and a <i>subtype</i>
   *       concatenated with a slash (/) character, for example, text/csv, image/jpeg, and s3/uri. The
   *       type specifies the category of the media. The subtype specifies the kind of data.</p>
   */
  MediaType?: string;

  /**
   * @public
   * <p>The location of the artifact.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or
 *         <code>StringValue</code> can be specified.</p>
 *          <p>This object is specified in the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrialComponent.html">CreateTrialComponent</a> request.</p>
 */
export type TrialComponentParameterValue =
  | TrialComponentParameterValue.NumberValueMember
  | TrialComponentParameterValue.StringValueMember
  | TrialComponentParameterValue.$UnknownMember;

/**
 * @public
 */
export namespace TrialComponentParameterValue {
  /**
   * @public
   * <p>The string value of a categorical hyperparameter. If you specify a value for this
   *       parameter, you can't specify the <code>NumberValue</code> parameter.</p>
   */
  export interface StringValueMember {
    StringValue: string;
    NumberValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The numeric value of a numeric hyperparameter. If you specify a value for this parameter,
   *       you can't specify the <code>StringValue</code> parameter.</p>
   */
  export interface NumberValueMember {
    StringValue?: never;
    NumberValue: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringValue?: never;
    NumberValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    StringValue: (value: string) => T;
    NumberValue: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TrialComponentParameterValue, visitor: Visitor<T>): T => {
    if (value.StringValue !== undefined) return visitor.StringValue(value.StringValue);
    if (value.NumberValue !== undefined) return visitor.NumberValue(value.NumberValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const TrialComponentPrimaryStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type TrialComponentPrimaryStatus =
  (typeof TrialComponentPrimaryStatus)[keyof typeof TrialComponentPrimaryStatus];

/**
 * @public
 * <p>The status of the trial component.</p>
 */
export interface TrialComponentStatus {
  /**
   * @public
   * <p>The status of the trial component.</p>
   */
  PrimaryStatus?: TrialComponentPrimaryStatus;

  /**
   * @public
   * <p>If the component failed, a message describing why.</p>
   */
  Message?: string;
}

/**
 * @public
 */
export interface CreateTrialComponentRequest {
  /**
   * @public
   * <p>The name of the component. The name must be unique in your Amazon Web Services account and is not
   *       case-sensitive.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * @public
   * <p>The name of the component as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

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
   * <p>The hyperparameters for the component.</p>
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * @public
   * <p>The input artifacts for the component. Examples of input artifacts are datasets,
   *       algorithms, hyperparameters, source code, and instance types.</p>
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * @public
   * <p>The output artifacts for the component. Examples of output artifacts are metrics,
   *       snapshots, logs, and images.</p>
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * @public
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * @public
   * <p>A list of tags to associate with the component. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API
   *       to search on the tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTrialComponentResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

/**
 * @public
 */
export interface CreateUserProfileRequest {
  /**
   * @public
   * <p>The ID of the associated Domain.</p>
   */
  DomainId: string | undefined;

  /**
   * @public
   * <p>A name for the UserProfile. This value is not case sensitive.</p>
   */
  UserProfileName: string | undefined;

  /**
   * @public
   * <p>A specifier for the type of value specified in SingleSignOnUserValue.  Currently, the only supported value is "UserName".
   *           If the Domain's AuthMode is IAM Identity Center, this field is required.  If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
   *        </p>
   */
  SingleSignOnUserIdentifier?: string;

  /**
   * @public
   * <p>The username of the associated Amazon Web Services Single Sign-On User for this UserProfile.  If the Domain's AuthMode is IAM Identity Center, this field is
   *           required, and must match a valid username of a user in your directory.  If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
   *        </p>
   */
  SingleSignOnUserValue?: string;

  /**
   * @public
   * <p>Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource.</p>
   *          <p>Tags that you specify for the User Profile are also added to all Apps that the
   *           User Profile launches.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

/**
 * @public
 */
export interface CreateUserProfileResponse {
  /**
   * @public
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;
}

/**
 * @public
 * <p>Use this parameter to configure your OIDC Identity Provider (IdP).</p>
 */
export interface OidcConfig {
  /**
   * @public
   * <p>The OIDC IdP client ID used to configure your private workforce.</p>
   */
  ClientId: string | undefined;

  /**
   * @public
   * <p>The OIDC IdP client secret used to configure your private workforce.</p>
   */
  ClientSecret: string | undefined;

  /**
   * @public
   * <p>The OIDC IdP issuer used to configure your private workforce.</p>
   */
  Issuer: string | undefined;

  /**
   * @public
   * <p>The OIDC IdP authorization endpoint used to configure your private workforce.</p>
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * @public
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   */
  TokenEndpoint: string | undefined;

  /**
   * @public
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   */
  UserInfoEndpoint: string | undefined;

  /**
   * @public
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   */
  LogoutEndpoint: string | undefined;

  /**
   * @public
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   */
  JwksUri: string | undefined;
}

/**
 * @public
 * <p>A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow
 *             list of IP addresses for a private workforce. Workers will only be able to login to their worker portal from an
 *             IP address within this range. By default, a workforce isn't restricted to specific IP addresses.</p>
 */
export interface SourceIpConfig {
  /**
   * @public
   * <p>A list of one to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Classless Inter-Domain Routing</a> (CIDR) values.</p>
   *          <p>Maximum: Ten CIDR values</p>
   *          <note>
   *             <p>The following Length Constraints apply to individual CIDR values in
   *                 the CIDR value list.</p>
   *          </note>
   */
  Cidrs: string[] | undefined;
}

/**
 * @public
 * <p>The VPC object you use to create or update a workforce.</p>
 */
export interface WorkforceVpcConfigRequest {
  /**
   * @public
   * <p>The ID of the VPC that the workforce uses for communication.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The ID of the subnets in the VPC that you want to connect.</p>
   */
  Subnets?: string[];
}

/**
 * @public
 */
export interface CreateWorkforceRequest {
  /**
   * @public
   * <p>Use this parameter to configure an Amazon Cognito private workforce.
   *       A single Cognito workforce is created using and corresponds to a single
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       Amazon Cognito user pool</a>.</p>
   *          <p>Do not use <code>OidcConfig</code> if you specify values for
   *       <code>CognitoConfig</code>.</p>
   */
  CognitoConfig?: CognitoConfig;

  /**
   * @public
   * <p>Use this parameter to configure a private workforce using your own OIDC Identity Provider.</p>
   *          <p>Do not use <code>CognitoConfig</code> if you specify values for
   *       <code>OidcConfig</code>.</p>
   */
  OidcConfig?: OidcConfig;

  /**
   * @public
   * <p>A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow
   *             list of IP addresses for a private workforce. Workers will only be able to login to their worker portal from an
   *             IP address within this range. By default, a workforce isn't restricted to specific IP addresses.</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * @public
   * <p>The name of the private workforce.</p>
   */
  WorkforceName: string | undefined;

  /**
   * @public
   * <p>An array of key-value pairs that contain metadata to help you categorize and
   *       organize our workforce. Each tag consists of a key and a value,
   *       both of which you define.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Use this parameter to configure a workforce using VPC.</p>
   */
  WorkforceVpcConfig?: WorkforceVpcConfigRequest;
}

/**
 * @public
 */
export interface CreateWorkforceResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the workforce.</p>
   */
  WorkforceArn: string | undefined;
}

/**
 * @public
 * <p>A list of user groups that exist in your OIDC Identity Provider (IdP).
 *             One to ten groups can be used to create a single private work team.
 *             When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more
 *             private work teams. If you add a user group to a private work team, all workers in that user group
 *             are added to the work team.</p>
 */
export interface OidcMemberDefinition {
  /**
   * @public
   * <p>A list of comma seperated strings that identifies
   *             user groups in your OIDC IdP. Each user group is
   *             made up of a group of private workers.</p>
   */
  Groups: string[] | undefined;
}

/**
 * @public
 * <p>Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.</p>
 */
export interface MemberDefinition {
  /**
   * @public
   * <p>The Amazon Cognito user group that is part of the work team.</p>
   */
  CognitoMemberDefinition?: CognitoMemberDefinition;

  /**
   * @public
   * <p>A list user groups that exist in your OIDC Identity Provider (IdP).
   *             One to ten groups can be used to create a single private work team.
   *             When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more
   *             private work teams. If you add a user group to a private work team, all workers in that user group
   *             are added to the work team.</p>
   */
  OidcMemberDefinition?: OidcMemberDefinition;
}

/**
 * @public
 * <p>Configures Amazon SNS notifications of available or expiring work items for work
 *             teams.</p>
 */
export interface NotificationConfiguration {
  /**
   * @public
   * <p>The ARN for the Amazon SNS topic to which notifications should be published.</p>
   */
  NotificationTopicArn?: string;
}

/**
 * @public
 */
export interface CreateWorkteamRequest {
  /**
   * @public
   * <p>The name of the work team. Use this name to identify the work team.</p>
   */
  WorkteamName: string | undefined;

  /**
   * @public
   * <p>The name of the workforce.</p>
   */
  WorkforceName?: string;

  /**
   * @public
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *          <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For
   *             private workforces created using Amazon Cognito use <code>CognitoMemberDefinition</code>. For
   *             workforces created using your own OIDC identity provider (IdP) use
   *                 <code>OidcMemberDefinition</code>. Do not provide input for both of these parameters
   *             in a single request.</p>
   *          <p>For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito
   *                 <i>user groups</i> within the user pool used to create a workforce. All of the
   *                 <code>CognitoMemberDefinition</code> objects that make up the member definition must
   *             have the same <code>ClientId</code> and <code>UserPool</code> values. To add a Amazon
   *             Cognito user group to an existing worker pool, see <a href="">Adding groups to a User
   *                 Pool</a>. For more information about user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User
   *                 Pools</a>.</p>
   *          <p>For workforces created using your own OIDC IdP, specify the user groups that you want to
   *         include in your private work team in <code>OidcMemberDefinition</code> by listing those groups
   *         in <code>Groups</code>.</p>
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * @public
   * <p>A description of the work team.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>Configures notification of workers regarding available or expiring work items.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;

  /**
   * @public
   * <p>An array of key-value pairs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html">Resource
   *                 Tag</a> and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                     Cost Allocation Tags</a> in the <i> Amazon Web Services Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateWorkteamResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the work team. You can use this ARN to identify the
   *             work team.</p>
   */
  WorkteamArn?: string;
}

/**
 * @public
 * @enum
 */
export const CrossAccountFilterOption = {
  CROSS_ACCOUNT: "CrossAccount",
  SAME_ACCOUNT: "SameAccount",
} as const;

/**
 * @public
 */
export type CrossAccountFilterOption = (typeof CrossAccountFilterOption)[keyof typeof CrossAccountFilterOption];

/**
 * @public
 * @enum
 */
export const Statistic = {
  AVERAGE: "Average",
  MAXIMUM: "Maximum",
  MINIMUM: "Minimum",
  SAMPLE_COUNT: "SampleCount",
  SUM: "Sum",
} as const;

/**
 * @public
 */
export type Statistic = (typeof Statistic)[keyof typeof Statistic];

/**
 * @public
 * <p>A customized metric.</p>
 */
export interface CustomizedMetricSpecification {
  /**
   * @public
   * <p>The name of the customized metric.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The namespace of the customized metric.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The statistic of the customized metric.</p>
   */
  Statistic?: Statistic;
}

/**
 * @public
 * <p>The currently active data capture configuration used by your Endpoint.</p>
 */
export interface DataCaptureConfigSummary {
  /**
   * @public
   * <p>Whether data capture is enabled or disabled.</p>
   */
  EnableCapture: boolean | undefined;

  /**
   * @public
   * <p>Whether data capture is currently functional.</p>
   */
  CaptureStatus: CaptureStatus | undefined;

  /**
   * @public
   * <p>The percentage of requests being captured by your Endpoint.</p>
   */
  CurrentSamplingPercentage: number | undefined;

  /**
   * @public
   * <p>The Amazon S3 location being used to capture the data.</p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * @public
   * <p>The KMS key being used to encrypt the data in Amazon S3.</p>
   */
  KmsKeyId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleEvaluationStatus = {
  ERROR: "Error",
  IN_PROGRESS: "InProgress",
  ISSUES_FOUND: "IssuesFound",
  NO_ISSUES_FOUND: "NoIssuesFound",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type RuleEvaluationStatus = (typeof RuleEvaluationStatus)[keyof typeof RuleEvaluationStatus];

/**
 * @public
 * <p>Information about the status of the rule evaluation.</p>
 */
export interface DebugRuleEvaluationStatus {
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
 */
export interface DeleteActionRequest {
  /**
   * @public
   * <p>The name of the action to delete.</p>
   */
  ActionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteActionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;
}

/**
 * @public
 */
export interface DeleteAlgorithmInput {
  /**
   * @public
   * <p>The name of the algorithm to delete.</p>
   */
  AlgorithmName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppRequest {
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
   * <p>The name of the space. If this value is not set, then <code>UserProfileName</code> must be set.</p>
   */
  SpaceName?: string;
}

/**
 * @public
 */
export interface DeleteAppImageConfigRequest {
  /**
   * @public
   * <p>The name of the AppImageConfig to delete.</p>
   */
  AppImageConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteArtifactRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the artifact to delete.</p>
   */
  ArtifactArn?: string;

  /**
   * @public
   * <p>The URI of the source.</p>
   */
  Source?: ArtifactSource;
}

/**
 * @public
 */
export interface DeleteArtifactResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;
}

/**
 * @public
 */
export interface DeleteAssociationRequest {
  /**
   * @public
   * <p>The ARN of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  DestinationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssociationResponse {
  /**
   * @public
   * <p>The ARN of the source.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  DestinationArn?: string;
}

/**
 * @public
 */
export interface DeleteCodeRepositoryInput {
  /**
   * @public
   * <p>The name of the Git repository to delete.</p>
   */
  CodeRepositoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteContextRequest {
  /**
   * @public
   * <p>The name of the context to delete.</p>
   */
  ContextName: string | undefined;
}

/**
 * @public
 */
export interface DeleteContextResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;
}

/**
 * @internal
 */
export const CreateModelCardRequestFilterSensitiveLog = (obj: CreateModelCardRequest): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OidcConfigFilterSensitiveLog = (obj: OidcConfig): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateWorkforceRequestFilterSensitiveLog = (obj: CreateWorkforceRequest): any => ({
  ...obj,
  ...(obj.OidcConfig && { OidcConfig: OidcConfigFilterSensitiveLog(obj.OidcConfig) }),
});
