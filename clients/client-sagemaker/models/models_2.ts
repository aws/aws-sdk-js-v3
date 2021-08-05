import {
  ActionStatus,
  ActionSummary,
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
  CacheHitResult,
  CallbackStepMetadata,
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
  ConditionStepMetadata,
  ContextSummary,
  EdgeOutputConfig,
  FeatureDefinition,
  HyperParameterTuningJobStrategyType,
  InferenceSpecification,
  KernelGatewayImageConfig,
  LabelingJobInputConfig,
  MetadataProperties,
  OfflineStoreConfig,
  OnlineStoreConfig,
  OutputDataConfig,
  OutputParameter,
  ResourceConfig,
  ResourceLimits,
  RetryStrategy,
  StoppingCondition,
  Tag,
  TransformInput,
  TransformOutput,
  TransformResources,
  UiTemplate,
  UserContext,
  UserSettings,
  VpcConfig,
} from "./models_0";
import {
  DataCaptureConfigSummary,
  DataProcessing,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DeploymentConfig,
  DomainStatus,
  EdgePackagingJobStatus,
  EndpointStatus,
  ExecutionStatus,
  ExperimentConfig,
  ExperimentSource,
  FeatureGroupStatus,
  FlowDefinitionStatus,
  HyperParameterTrainingJobSummary,
  HyperParameterTuningJobStatus,
  ImageStatus,
  ImageVersionStatus,
  LabelCounters,
  LabelingJobOutput,
  LabelingJobStatus,
  MemberDefinition,
  MetricData,
  ModelApprovalStatus,
  ModelArtifacts,
  ModelClientConfig,
  ModelMetrics,
  ModelPackageGroupStatus,
  ModelPackageStatus,
  ModelPackageStatusDetails,
  ModelPackageValidationSpecification,
  MonitoringExecutionSummary,
  MonitoringScheduleConfig,
  MonitoringType,
  NetworkConfig,
  NotebookInstanceStatus,
  NotificationConfiguration,
  ObjectiveStatusCounters,
  OfflineStoreStatus,
  OfflineStoreStatusValue,
  PipelineExecutionStatus,
  PipelineExperimentConfig,
  PipelineStatus,
  ProcessingInput,
  ProcessingJobStatus,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  ProductionVariantSummary,
  ProjectStatus,
  ScheduleStatus,
  SecondaryStatus,
  SecondaryStatusTransition,
  SourceAlgorithmSpecification,
  SourceIpConfig,
  SubscribedWorkteam,
  TensorBoardOutputConfig,
  TrainingJobStatus,
  TrainingJobStatusCounters,
  TransformJobStatus,
  TrialComponentArtifact,
  TrialComponentMetricSummary,
  TrialComponentParameterValue,
  TrialComponentSource,
  TrialComponentStatus,
  TrialSource,
  _InstanceType,
} from "./models_1";

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
   * <p>Who created the component.</p>
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
  Parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];
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
   * <p>The name of the
   *             variant
   *             to update.</p>
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
}

export namespace DeviceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceSummary): any => ({
    ...obj,
  });
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
   * <p></p>
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
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
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
  MODEL_PACKAGE = "ModelPackage",
  MODEL_PACKAGE_GROUP = "ModelPackageGroup",
  PIPELINE = "Pipeline",
  PIPELINE_EXECUTION = "PipelineExecution",
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
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
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
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
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
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
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
   * <p>The
   *             field
   *             to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: HyperParameterTuningJobSortByOptions | string;

  /**
   * <p>The sort
   *             order
   *             for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A string in the tuning job name. This filter returns only tuning jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only tuning jobs that were created after the
   *             specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only tuning jobs that were created before the
   *             specified
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
   * <p>A filter that returns only tuning jobs with the
   *             specified
   *             status.</p>
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
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
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
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
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
   * <p>A filter that returns onlyl the model packages of the specified type. This can be one
   *             of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>VERSIONED</code> - List only versioned models.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>UNVERSIONED</code> - List only unversioined models.</p>
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
   *             <ul>
   *             <li>
   *                     <p>
   *                   <code>APPROVED</code> - The model is approved</p>
   *                 </li>
   *             <li>
   *                     <p>
   *                   <code>REJECTED</code> - The model is rejected.</p>
   *                 </li>
   *             <li>
   *                     <p>
   *                   <code>PENDING_MANUAL_APPROVAL</code> - The model is waiting for manual
   *                         approval.</p>
   *                 </li>
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
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
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
   * <p>A string in the training job name. This filter returns only models in the training
   *             job whose name contains the specified string.</p>
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
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
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
   * <p>If the response is truncated, Amazon SageMaker returns this token. To get the next set of
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
 * <p>Provides summary information for an Amazon SageMaker notebook instance.</p>
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
   * <p>The
   *             URL that you use to connect to the Jupyter instance running in your notebook instance.
   *             </p>
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
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with Amazon SageMaker Notebook Instances</a>.</p>
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
   *             truncated, Amazon SageMaker returns this token. To retrieve the next set of notebook instances, use
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

/**
 * <p>Metadata for Model steps.</p>
 */
export interface ModelStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the created model.</p>
   */
  Arn?: string;
}

export namespace ModelStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a processing job step.</p>
 */
export interface ProcessingJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  Arn?: string;
}

export namespace ProcessingJobStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingJobStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a register model job step.</p>
 */
export interface RegisterModelStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  Arn?: string;
}

export namespace RegisterModelStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterModelStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a training job step.</p>
 */
export interface TrainingJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   */
  Arn?: string;
}

export namespace TrainingJobStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJobStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a transform job step.</p>
 */
export interface TransformJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   */
  Arn?: string;
}

export namespace TransformJobStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformJobStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a tuning step.</p>
 */
export interface TuningJobStepMetaData {
  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   */
  Arn?: string;
}

export namespace TuningJobStepMetaData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TuningJobStepMetaData): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a step execution.</p>
 */
export interface PipelineExecutionStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   */
  TrainingJob?: TrainingJobStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job that was run by this step execution.</p>
   */
  ProcessingJob?: ProcessingJobStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   */
  TransformJob?: TransformJobStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   */
  TuningJob?: TuningJobStepMetaData;

  /**
   * <p>The Amazon Resource Name (ARN) of the model that was created by this step execution.</p>
   */
  Model?: ModelStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package the model was registered to by this step execution.</p>
   */
  RegisterModel?: RegisterModelStepMetadata;

  /**
   * <p>The outcome of the condition evaluation that was run by this step execution.</p>
   */
  Condition?: ConditionStepMetadata;

  /**
   * <p>The URL of the Amazon SQS queue used by this step execution, the pipeline generated token,
   *         and a list of output parameters.</p>
   */
  Callback?: CallbackStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution and a list of
   *         output parameters.</p>
   */
  Lambda?: LambdaStepMetadata;
}

export namespace PipelineExecutionStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineExecutionStepMetadata): any => ({
    ...obj,
  });
}

export enum StepStatus {
  EXECUTING = "Executing",
  FAILED = "Failed",
  STARTING = "Starting",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
  SUCCEEDED = "Succeeded",
}

/**
 * <p>An execution of a step in a pipeline.</p>
 */
export interface PipelineExecutionStep {
  /**
   * <p>The name of the step that is executed.</p>
   */
  StepName?: string;

  /**
   * <p>The time that the step started executing.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time that the step stopped executing.</p>
   */
  EndTime?: Date;

  /**
   * <p>The status of the step execution.</p>
   */
  StepStatus?: StepStatus | string;

  /**
   * <p>If this pipeline execution step was cached, details on the cache hit.</p>
   */
  CacheHitResult?: CacheHitResult;

  /**
   * <p>The reason why the step failed execution. This is only returned if the step failed its execution.</p>
   */
  FailureReason?: string;

  /**
   * <p>Metadata for the step execution.</p>
   */
  Metadata?: PipelineExecutionStepMetadata;
}

export namespace PipelineExecutionStep {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineExecutionStep): any => ({
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

/**
 * <p>Assigns a value to a named Pipeline parameter.</p>
 */
export interface Parameter {
  /**
   * <p>The name of the parameter to assign a value to. This parameter name must match a named parameter in the pipeline definition.</p>
   */
  Name: string | undefined;

  /**
   * <p>The literal value for the parameter.</p>
   */
  Value: string | undefined;
}

export namespace Parameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Parameter): any => ({
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

export enum SortPipelinesBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
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

/**
 * <p>A summary of a pipeline.</p>
 */
export interface PipelineSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the pipeline.</p>
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
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline used to execute.</p>
   */
  RoleArn?: string;

  /**
   * <p>The creation time of the pipeline.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that the pipeline was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The last time that a pipeline execution began.</p>
   */
  LastExecutionTime?: Date;
}

export namespace PipelineSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineSummary): any => ({
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

/**
 * <p>Summary of information about a processing job.</p>
 */
export interface ProcessingJobSummary {
  /**
   * <p>The name of the processing job.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job..</p>
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>The time at which the processing job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time at which the processing job completed.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>A timestamp that indicates the last time the processing job was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the processing job.</p>
   */
  ProcessingJobStatus: ProcessingJobStatus | string | undefined;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;
}

export namespace ProcessingJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingJobSummary): any => ({
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

export enum ProjectSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum ProjectSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
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

/**
 * <p>Information about a project.</p>
 */
export interface ProjectSummary {
  /**
   * <p>The name of the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The description of the project.</p>
   */
  ProjectDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;

  /**
   * <p>The ID of the project.</p>
   */
  ProjectId: string | undefined;

  /**
   * <p>The time that the project was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of the project.</p>
   */
  ProjectStatus: ProjectStatus | string | undefined;
}

export namespace ProjectSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProjectSummary): any => ({
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
   * <p> If the response to the previous <code>ListTags</code> request is truncated, Amazon SageMaker
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
   * <p> If response is truncated, Amazon SageMaker includes a token in the response. You can use this
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

/**
 * <p>Provides summary information about a training job.</p>
 */
export interface TrainingJobSummary {
  /**
   * <p>The name of the training job that you want a summary for.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>A timestamp that shows when the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the training job ended. This field is set only if the
   *             training job has one of the terminal statuses (<code>Completed</code>,
   *                 <code>Failed</code>, or <code>Stopped</code>). </p>
   */
  TrainingEndTime?: Date;

  /**
   * <p> Timestamp when the training job was last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the training job.</p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;
}

export namespace TrainingJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJobSummary): any => ({
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
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
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

export enum TrainingJobSortByOptions {
  CreationTime = "CreationTime",
  FinalObjectiveMetricValue = "FinalObjectiveMetricValue",
  Name = "Name",
  Status = "Status",
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
   * <p>A filter that returns only training jobs with the
   *             specified
   *             status.</p>
   */
  StatusEquals?: TrainingJobStatus | string;

  /**
   * <p>The field to sort
   *             results
   *             by. The default is <code>Name</code>.</p>
   *         <p>If the value of this field is <code>FinalObjectiveMetricValue</code>, any training
   *             jobs that did not return an objective metric are not listed.</p>
   */
  SortBy?: TrainingJobSortByOptions | string;

  /**
   * <p>The sort order
   *             for
   *             results. The default is <code>Ascending</code>.</p>
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

/**
 * <p>Provides a
 *             summary
 *             of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a
 *             list after in response to a <a>ListTransformJobs</a> call.</p>
 */
export interface TransformJobSummary {
  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Indicates when the transform
   *             job
   *             ends on compute instances. For successful jobs and stopped jobs, this
   *             is the exact time
   *             recorded
   *             after the results are uploaded. For failed jobs, this is when Amazon SageMaker
   *             detected that the job failed.</p>
   */
  TransformEndTime?: Date;

  /**
   * <p>Indicates when the transform job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the transform job.</p>
   */
  TransformJobStatus: TransformJobStatus | string | undefined;

  /**
   * <p>If the transform job failed,
   *             the
   *             reason it failed.</p>
   */
  FailureReason?: string;
}

export namespace TransformJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformJobSummary): any => ({
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

export enum SortTrialComponentsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
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

/**
 * <p>A summary of the properties of a trial component. To get all the properties, call the
 *         <a>DescribeTrialComponent</a> API and provide the
 *       <code>TrialComponentName</code>.</p>
 */
export interface TrialComponentSummary {
  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The ARN of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
   */
  TrialComponentSource?: TrialComponentSource;

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
   * <p>Who created the component.</p>
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
}

export namespace TrialComponentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentSummary): any => ({
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

export enum SortTrialsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
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

/**
 * <p>A summary of the properties of a trial. To get the complete set of properties, call the
 *         <a>DescribeTrial</a> API and provide the <code>TrialName</code>.</p>
 */
export interface TrialSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The source of the trial.</p>
   */
  TrialSource?: TrialSource;

  /**
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the trial was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace TrialSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialSummary): any => ({
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

export enum UserProfileSortKey {
  CreationTime = "CreationTime",
  LastModifiedTime = "LastModifiedTime",
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

/**
 * <p>The user profile details.</p>
 */
export interface UserProfileDetails {
  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: UserProfileStatus | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;
}

export namespace UserProfileDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserProfileDetails): any => ({
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

export enum ListWorkforcesSortByOptions {
  CreateDate = "CreateDate",
  Name = "Name",
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

export enum ListWorkteamsSortByOptions {
  CreateDate = "CreateDate",
  Name = "Name",
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

/**
 * <p>A versioned model that can be deployed for SageMaker inference.</p>
 */
export interface ModelPackage {
  /**
   * <p>The name of the model.</p>
   */
  ModelPackageName?: string;

  /**
   * <p>The model group to which the model belongs.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The version number of a versioned model.</p>
   */
  ModelPackageVersion?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn?: string;

  /**
   * <p>The description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>The time that the model package was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Defines how to perform inference generation after a training job is run.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>A list of algorithms that were used to create a model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Specifies batch transform jobs that Amazon SageMaker runs to validate your model package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * <p>The status of the model package. This can be one of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> - The model package is pending being created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>IN_PROGRESS</code> - The model package is in the process of being
   *                     created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>COMPLETED</code> - The model package was successfully created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> - The model package failed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETING</code> - The model package is in the process of being deleted.</p>
   *             </li>
   *          </ul>
   */
  ModelPackageStatus?: ModelPackageStatus | string;

  /**
   * <p>Specifies the validation and image scan statuses of the model package.</p>
   */
  ModelPackageStatusDetails?: ModelPackageStatusDetails;

  /**
   * <p>Whether the model package is to be certified to be listed on Amazon Web Services Marketplace. For
   *             information about listing model packages on Amazon Web Services Marketplace, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-mkt-list.html">List Your
   *                 Algorithm or Model Package on Amazon Web Services Marketplace</a>.</p>
   */
  CertifyForMarketplace?: boolean;

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

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
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
   * <p>The last time the model package was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>A description provided when the model approval is set.</p>
   */
  ApprovalDescription?: string;

  /**
   * <p>A list of the tags associated with the model package. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace ModelPackage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackage): any => ({
    ...obj,
  });
}

/**
 * <p>A group of versioned models in the model registry.</p>
 */
export interface ModelPackageGroup {
  /**
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn?: string;

  /**
   * <p>The description for the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * <p>The time that the model group was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>The status of the model group. This can be one of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> - The model group is pending being created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>IN_PROGRESS</code> - The model group is in the process of being
   *                     created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>COMPLETED</code> - The model group was successfully created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> - The model group failed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETING</code> - The model group is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETE_FAILED</code> - SageMaker failed to delete the model group.</p>
   *             </li>
   *          </ul>
   */
  ModelPackageGroupStatus?: ModelPackageGroupStatus | string;

  /**
   * <p>A list of the tags associated with the model group. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace ModelPackageGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageGroup): any => ({
    ...obj,
  });
}

/**
 * <p>A list of nested <a>Filter</a> objects. A resource must satisfy the conditions
 *       of all filters to be included in the results returned from the <a>Search</a> API.</p>
 *          <p>For example, to filter on a training job's <code>InputDataConfig</code> property with a
 *       specific channel name and <code>S3Uri</code> prefix, define the following filters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>'{Name:"InputDataConfig.ChannelName", "Operator":"Equals", "Value":"train"}',</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>'{Name:"InputDataConfig.DataSource.S3DataSource.S3Uri", "Operator":"Contains",
 *             "Value":"mybucket/catdata"}'</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface NestedFilters {
  /**
   * <p>The name of the property to use in the nested filters. The value must match a listed property name,
   *       such as <code>InputDataConfig</code>.</p>
   */
  NestedPropertyName: string | undefined;

  /**
   * <p>A list of filters. Each filter acts on a property. Filters must contain at least one
   *       <code>Filters</code> value. For example, a <code>NestedFilters</code> call might
   *       include a filter on the <code>PropertyName</code> parameter of the
   *       <code>InputDataConfig</code> property:
   *       <code>InputDataConfig.DataSource.S3DataSource.S3Uri</code>.</p>
   */
  Filters: Filter[] | undefined;
}

export namespace NestedFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NestedFilters): any => ({
    ...obj,
  });
}

/**
 * <p>The trial that a trial component is associated with and the experiment the trial is part
 *       of. A component might not be associated with a trial. A component can be associated with
 *       multiple trials.</p>
 */
export interface Parent {
  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;
}

export namespace Parent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Parent): any => ({
    ...obj,
  });
}

/**
 * <p>A SageMaker Model Building Pipeline instance.</p>
 */
export interface Pipeline {
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
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that created the pipeline.</p>
   */
  RoleArn?: string;

  /**
   * <p>The status of the pipeline.</p>
   */
  PipelineStatus?: PipelineStatus | string;

  /**
   * <p>The creation time of the pipeline.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that the pipeline was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time when the pipeline was last run.</p>
   */
  LastRunTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>A list of tags that apply to the pipeline.</p>
   */
  Tags?: Tag[];
}

export namespace Pipeline {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Pipeline): any => ({
    ...obj,
  });
}

/**
 * <p>An execution of a pipeline.</p>
 */
export interface PipelineExecution {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline that was executed.</p>
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
   * <p>The status of the pipeline status.</p>
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
   * <p>The creation time of the pipeline execution.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that the pipeline execution was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   */
  PipelineParameters?: Parameter[];
}

export namespace PipelineExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineExecution): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html">Process
 *                 Data and Evaluate Models</a>.</p>
 */
export interface ProcessingJob {
  /**
   * <p>List of input configurations for the processing job.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p>Configuration for uploading output from the processing container.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p>The name of the processing job.</p>
   */
  ProcessingJobName?: string;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources?: ProcessingResources;

  /**
   * <p>Configures conditions under which the processing job should be stopped, such as how long
   *             the processing job has been running. After the condition is met, the processing job is stopped.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>Configuration to run a processing job in a specified container image.</p>
   */
  AppSpecification?: AppSpecification;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Networking options for a job, such as network traffic encryption between containers,
   *          whether to allow inbound and outbound network calls to and from containers, and the VPC
   *          subnets and security groups to use for VPC-enabled jobs.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The ARN of the role used to create the processing job.</p>
   */
  RoleArn?: string;

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
   * <p>The ARN of the processing job.</p>
   */
  ProcessingJobArn?: string;

  /**
   * <p>The status of the processing job.</p>
   */
  ProcessingJobStatus?: ProcessingJobStatus | string;

  /**
   * <p>A string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time that the processing job ended.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>The time that the processing job started.</p>
   */
  ProcessingStartTime?: Date;

  /**
   * <p>The time the processing job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time the processing job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing
   *             job.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job associated with this processing job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>The ARN of the training job associated with this processing job.</p>
   */
  TrainingJobArn?: string;

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace ProcessingJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingJob): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for updating the Debugger profile parameters, system and framework metrics configurations, and
 *             storage paths.</p>
 */
export interface ProfilerConfigForUpdate {
  /**
   * <p>Path to Amazon S3 storage location for system and framework metrics.</p>
   */
  S3OutputPath?: string;

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
  ProfilingParameters?: { [key: string]: string };

  /**
   * <p>To disable Debugger monitoring and profiling, set to <code>True</code>.</p>
   */
  DisableProfiler?: boolean;
}

export namespace ProfilerConfigForUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProfilerConfigForUpdate): any => ({
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

/**
 * <p>Contains input values for a task.</p>
 */
export interface RenderableTask {
  /**
   * <p>A JSON object that contains values for the variables defined in the template. It is
   *             made available to the template under the substitution variable <code>task.input</code>.
   *             For example, if you define a variable <code>task.input.text</code> in your template, you
   *             can supply the variable in the JSON object as <code>"text": "sample text"</code>.</p>
   */
  Input: string | undefined;
}

export namespace RenderableTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenderableTask): any => ({
    ...obj,
  });
}

/**
 * <p>A description of an error that occurred while rendering the template.</p>
 */
export interface RenderingError {
  /**
   * <p>A unique identifier for a specific class of errors.</p>
   */
  Code: string | undefined;

  /**
   * <p>A human-readable message describing the error.</p>
   */
  Message: string | undefined;
}

export namespace RenderingError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenderingError): any => ({
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

export enum SearchSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

/**
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
   *         <p>Training job statuses are:</p>
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
   *         <p>For
   *             more detailed information, see <code>SecondaryStatus</code>. </p>
   */
  TrainingJobStatus?: TrainingJobStatus | string;

  /**
   * <p> Provides detailed information about the state of the training job. For detailed
   *             information about the secondary status of the training job, see
   *                 <code>StatusMessage</code> under <a>SecondaryStatusTransition</a>.</p>
   *         <p>Amazon SageMaker provides primary statuses and secondary statuses that apply to each of
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
  SecondaryStatus?: SecondaryStatus | string;

  /**
   * <p>If the training job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>Algorithm-specific parameters.</p>
   */
  HyperParameters?: { [key: string]: string };

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.</p>
   */
  AlgorithmSpecification?: AlgorithmSpecification;

  /**
   * <p>The Amazon Web Services Identity and Access Management (IAM) role configured for the training job.</p>
   */
  RoleArn?: string;

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input
   *             channel.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. Amazon SageMaker creates subfolders for model artifacts.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are configured
   *             for model training.</p>
   */
  ResourceConfig?: ResourceConfig;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this training job has
   *             access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, Amazon SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
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
   *             uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>
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
   * <p>Information about the debug rule configuration.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Configuration of storage locations for the Debugger TensorBoard output data.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Information about the evaluation status of the rules for the training job.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * <p>The environment variables to set in the Docker container.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];
}

export namespace TrainingJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJob): any => ({
    ...obj,
  });
}

/**
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
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;
}

export namespace TrialComponentSimpleSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentSimpleSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of a trial as returned by the <a>Search</a> API.</p>
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
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Who last modified the trial.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The list of tags that are associated with the trial. You can use <a>Search</a>
   *       API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of the components associated with the trial. For each component, a summary of the
   *       component's properties is included.</p>
   */
  TrialComponentSummaries?: TrialComponentSimpleSummary[];
}

export namespace Trial {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Trial): any => ({
    ...obj,
  });
}

/**
 * <p>A batch transform job. For information about SageMaker batch transform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Use Batch
 *         Transform</a>.</p>
 */
export interface TransformJob {
  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn?: string;

  /**
   * <p>The status of the transform job.</p>
   *          <p>Transform job statuses are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InProgress</code> - The job is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Completed</code> - The job has completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The transform job has failed. To see the reason for the failure,
   *           see the <code>FailureReason</code> field in the response to a
   *             <code>DescribeTransformJob</code> call.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopping</code> - The transform job is stopping.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopped</code> - The transform job has stopped.</p>
   *             </li>
   *          </ul>
   */
  TransformJobStatus?: TransformJobStatus | string;

  /**
   * <p>If the transform job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the model associated with the transform job.</p>
   */
  ModelName?: string;

  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a transform
   *       job. If <code>MaxConcurrentTransforms</code> is set to 0 or left unset, SageMaker checks the
   *       optional execution-parameters to determine the settings for your chosen algorithm. If the
   *       execution-parameters endpoint is not enabled, the default value is 1. For built-in algorithms,
   *       you don't need to set a value for <code>MaxConcurrentTransforms</code>.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>Configures the timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * <p>The maximum allowed size of the payload, in MB. A payload is the data portion of a record
   *       (without metadata). The value in <code>MaxPayloadInMB</code> must be greater than, or equal
   *       to, the size of a single record. To estimate the size of a record in MB, divide the size of
   *       your dataset by the number of records. To ensure that the records fit within the maximum
   *       payload size, we recommend using a slightly larger value. The default value is 6 MB. For cases
   *       where the payload might be arbitrarily large and is transmitted using HTTP chunked encoding,
   *       set the value to 0. This feature works only in supported algorithms. Currently, SageMaker built-in
   *       algorithms do not support HTTP chunked encoding.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference request.
   *       A record is a single unit of input data that inference can be made on. For example, a single
   *       line in a CSV file is a record.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *       values entries in the map.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Describes the input source of a transform job and the way the transform job consumes
   *             it.</p>
   */
  TransformInput?: TransformInput;

  /**
   * <p>Describes the results of a transform job.</p>
   */
  TransformOutput?: TransformOutput;

  /**
   * <p>Describes the resources, including ML instance types and ML instance count, to use for
   *             transform job.</p>
   */
  TransformResources?: TransformResources;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Indicates when the transform job starts on ML instances. You are billed for the time
   *       interval between this time and the value of <code>TransformEndTime</code>.</p>
   */
  TransformStartTime?: Date;

  /**
   * <p>Indicates when the transform job has been completed, or has stopped or failed. You are
   *       billed for the time interval between this time and the value of
   *         <code>TransformStartTime</code>.</p>
   */
  TransformEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the  labeling job that created the transform job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job that created the transform job.</p>
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

  /**
   * <p>A list of tags associated with the transform job.</p>
   */
  Tags?: Tag[];
}

export namespace TransformJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformJob): any => ({
    ...obj,
  });
}

/**
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

export namespace TrialComponentSourceDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentSourceDetail): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of a trial component as returned by the <a>Search</a>
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
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The hyperparameters of the component.</p>
   */
  Parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

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
   * <p>The list of tags that are associated with the component. You can use <a>Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>An array of the parents of the component. A parent is a trial the component is associated
   *       with and the experiment the trial is part of. A component might not have any parents.</p>
   */
  Parents?: Parent[];
}

export namespace TrialComponent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponent): any => ({
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

/**
 * <p>A single resource returned as part of the <a>Search</a> API response.</p>
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
   * <p>Amazon SageMaker Feature Store stores features in a collection called Feature Group.
   *          A Feature Group can be visualized as a table which has rows,
   *          with a unique identifier for each row where each column in the table is a feature.
   *          In principle, a Feature Group is composed of features and values per features.</p>
   */
  FeatureGroup?: FeatureGroup;
}

export namespace SearchRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchRecord): any => ({
    ...obj,
    ...(obj.TrialComponent && { TrialComponent: TrialComponent.filterSensitiveLog(obj.TrialComponent) }),
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
   *          operation. An idempotent operation completes no more than one time.</p>
   */
  ClientRequestToken?: string;
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
   *          operation. An idempotent operation completes no more than one time.</p>
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
   * <p>The name of the transform job to stop.</p>
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
  Properties?: { [key: string]: string };

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
  Properties?: { [key: string]: string };

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
  Properties?: { [key: string]: string };

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

export enum VariantPropertyType {
  DataCaptureConfig = "DataCaptureConfig",
  DesiredInstanceCount = "DesiredInstanceCount",
  DesiredWeight = "DesiredWeight",
}

/**
 * <p>Specifies a production variant property type for an Endpoint.</p>
 *         <p>If you are updating an endpoint with the <a>UpdateEndpointInput$RetainAllVariantProperties</a> option set to
 *                 <code>true</code>, the <code>VariantProperty</code> objects listed in <a>UpdateEndpointInput$ExcludeRetainedVariantProperties</a> override the
 *             existing variant properties of the endpoint.</p>
 */
export interface VariantProperty {
  /**
   * <p>The type of variant property. The supported values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DesiredInstanceCount</code>: Overrides the existing variant instance
   *                     counts using the <a>ProductionVariant$InitialInstanceCount</a> values
   *                     in the <a>CreateEndpointConfigInput$ProductionVariants</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DesiredWeight</code>: Overrides the existing variant weights using the
   *                         <a>ProductionVariant$InitialVariantWeight</a> values in the <a>CreateEndpointConfigInput$ProductionVariants</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DataCaptureConfig</code>: (Not currently supported.)</p>
   *             </li>
   *          </ul>
   */
  VariantPropertyType: VariantPropertyType | string | undefined;
}

export namespace VariantProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VariantProperty): any => ({
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
   * <p>The deployment configuration for the endpoint to be updated.</p>
   */
  DeploymentConfig?: DeploymentConfig;
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
   * <p>The name of an existing Amazon SageMaker endpoint.</p>
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
