// smithy-typescript generated code
import type {
  _InstanceType,
  AccountDefaultStatus,
  AppNetworkAccessType,
  AppSecurityGroupManagement,
  BooleanOperator,
  CrossAccountFilterOption,
  HomeEfsFileSystemCreation,
  HubContentSupportStatus,
  HubContentType,
  IPAddressType,
  JobType,
  ModelApprovalStatus,
  ModelCardStatus,
  ModelPackageRegistrationType,
  ModelRegistrationMode,
  NotebookInstanceAcceleratorType,
  PartnerAppAuthType,
  Processor,
  ResourceType,
  RootAccess,
  SearchSortOrder,
  TagPropagation,
  ThroughputMode,
  TrackingServerSize,
  VariantPropertyType,
  VendorGuidance,
  WorkforceIpAddressType,
} from "./enums";
import type {
  AdditionalInferenceSpecificationDefinition,
  CfnUpdateTemplateProvider,
  InferenceSpecification,
  Tag,
} from "./models_0";
import type {
  DefaultSpaceSettings,
  DeploymentConfig,
  EdgeOutputConfig,
  FeatureDefinition,
  InferenceComponentRuntimeConfig,
  InferenceComponentSpecification,
  InferenceExperimentDataStorageConfig,
  InferenceExperimentSchedule,
  ModelLifeCycle,
  ModelPackageModelCard,
  ModelVariantConfig,
  ShadowModeConfig,
  UserSettings,
} from "./models_1";
import type {
  IdcConfigInput,
  InstanceMetadataServiceConfiguration,
  MemberDefinition,
  MonitoringScheduleConfig,
  NotebookInstanceLifecycleHook,
  NotificationConfiguration,
  OidcConfig,
  ParallelismConfiguration,
  PartnerAppConfig,
  PartnerAppMaintenanceConfig,
  PipelineDefinitionS3Location,
  ProfilerRuleConfiguration,
  ProvisioningParameter,
  SourceIpConfig,
  SpaceSettings,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  WorkerAccessConfiguration,
  WorkforceVpcConfigRequest,
} from "./models_2";
import type {
  DesiredWeightAndCapacity,
  Device,
  DomainSettingsForUpdate,
  FeatureParameter,
  Filter,
  InferenceComponentDeploymentConfig,
  Workforce,
  Workteam,
} from "./models_3";
import type {
  NestedFilters,
  OnlineStoreConfigUpdate,
  ProfilerConfigForUpdate,
  RemoteDebugConfigForUpdate,
  ResourceConfigForUpdate,
  VisibilityConditions,
} from "./models_4";

/**
 * @public
 */
export interface UpdateContextRequest {
  /**
   * The name of the context to update.
   *
   * @public
   */
  ContextName: string | undefined;

  /**
   * The new description for the context.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The new list of properties. Overwrites the current property list.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * A list of properties to remove.
   *
   * @public
   */
  PropertiesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateContextResponse {
  /**
   * The Amazon Resource Name (ARN) of the context.
   *
   * @public
   */
  ContextArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDeviceFleetRequest {
  /**
   * The name of the fleet.
   *
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the device.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Description of the fleet.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Output configuration for storing sample data collected by the fleet.
   *
   * @public
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * Whether to create an Amazon Web Services IoT Role Alias during device fleet creation. The name of the role alias generated will match this pattern: "SageMakerEdge-\{DeviceFleetName\}".
   *
   * For example, if your device fleet is called "demo-fleet", the name of the role alias will be "SageMakerEdge-demo-fleet".
   *
   * @public
   */
  EnableIotRoleAlias?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDevicesRequest {
  /**
   * The name of the fleet the devices belong to.
   *
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * List of devices to register with Edge Manager agent.
   *
   * @public
   */
  Devices: Device[] | undefined;
}

/**
 * @public
 */
export interface UpdateDomainRequest {
  /**
   * The ID of the domain to be updated.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * A collection of settings.
   *
   * @public
   */
  DefaultUserSettings?: UserSettings | undefined;

  /**
   * A collection of `DomainSettings` configuration values to update.
   *
   * @public
   */
  DomainSettingsForUpdate?: DomainSettingsForUpdate | undefined;

  /**
   * The entity that creates and manages the required security groups for inter-app communication in `VPCOnly` mode. Required when `CreateDomain.AppNetworkAccessType` is `VPCOnly` and `DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn` is provided. If setting up the domain for use with RStudio, this value must be set to `Service`.
   *
   * @public
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement | undefined;

  /**
   * The default settings for shared spaces that users create in the domain.
   *
   * @public
   */
  DefaultSpaceSettings?: DefaultSpaceSettings | undefined;

  /**
   * The VPC subnets that Studio uses for communication.
   *
   * If removing subnets, ensure there are no apps in the `InService`, `Pending`, or `Deleting` state.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * Specifies the VPC used for non-EFS traffic.
   *
   * - `PublicInternetOnly` - Non-EFS traffic is through a VPC managed by Amazon SageMaker AI, which allows direct internet access.
   * - `VpcOnly` - All Studio traffic is through the specified VPC and subnets.
   *
   * This configuration can only be modified if there are no apps in the `InService`, `Pending`, or `Deleting` state. The configuration cannot be updated if `DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn` is already set or `DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn` is provided as part of the same request.
   *
   * @public
   */
  AppNetworkAccessType?: AppNetworkAccessType | undefined;

  /**
   * Indicates whether custom tag propagation is supported for the domain. Defaults to `DISABLED`.
   *
   * @public
   */
  TagPropagation?: TagPropagation | undefined;

  /**
   * Indicates whether to create a home EFS file system for the domain. You can change from `Disabled` to `Enabled` to provision EFS on demand, but you cannot change from `Enabled` to `Disabled`.
   *
   * @public
   */
  HomeEfsFileSystemCreation?: HomeEfsFileSystemCreation | undefined;

  /**
   * The identifier for the VPC used by the domain for network communication. Use this field only when adding VPC configuration to a SageMaker AI domain used in Amazon SageMaker Unified Studio that was created without VPC settings. SageMaker AI doesn't automatically apply VPC updates to existing applications. Stop and restart your applications to apply the changes.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainResponse {
  /**
   * The Amazon Resource Name (ARN) of the domain.
   *
   * @public
   */
  DomainArn?: string | undefined;
}

/**
 * Specifies a production variant property type for an Endpoint.
 *
 * If you are updating an endpoint with the `RetainAllVariantProperties` option of [UpdateEndpointInput](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html) set to `true`, the `VariantProperty` objects listed in the `ExcludeRetainedVariantProperties` parameter of [UpdateEndpointInput](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html) override the existing variant properties of the endpoint.
 *
 * @public
 */
export interface VariantProperty {
  /**
   * The type of variant property. The supported values are:
   *
   * - `DesiredInstanceCount`: Overrides the existing variant instance counts using the `InitialInstanceCount` values in the `ProductionVariants` of [CreateEndpointConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html).
   * - `DesiredWeight`: Overrides the existing variant weights using the `InitialVariantWeight` values in the `ProductionVariants` of [CreateEndpointConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html).
   * - `DataCaptureConfig`: (Not currently supported.)
   *
   * @public
   */
  VariantPropertyType: VariantPropertyType | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointInput {
  /**
   * The name of the endpoint whose configuration you want to update.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The name of the new endpoint configuration.
   *
   * @public
   */
  EndpointConfigName: string | undefined;

  /**
   * When updating endpoint resources, enables or disables the retention of [variant properties](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VariantProperty.html), such as the instance count or the variant weight. To retain the variant properties of an endpoint when updating it, set `RetainAllVariantProperties` to `true`. To use the variant properties specified in a new `EndpointConfig` call when updating an endpoint, set `RetainAllVariantProperties` to `false`. The default is `false`.
   *
   * @public
   */
  RetainAllVariantProperties?: boolean | undefined;

  /**
   * When you are updating endpoint resources with `RetainAllVariantProperties`, whose value is set to `true`, `ExcludeRetainedVariantProperties` specifies the list of type [VariantProperty](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VariantProperty.html) to override with the values provided by `EndpointConfig`. If you don't specify a value for `ExcludeRetainedVariantProperties`, no variant properties are overridden.
   *
   * @public
   */
  ExcludeRetainedVariantProperties?: VariantProperty[] | undefined;

  /**
   * The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.
   *
   * @public
   */
  DeploymentConfig?: DeploymentConfig | undefined;

  /**
   * Specifies whether to reuse the last deployment configuration. The default value is false (the configuration is not reused).
   *
   * @public
   */
  RetainDeploymentConfig?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointOutput {
  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   *
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointWeightsAndCapacitiesInput {
  /**
   * The name of an existing SageMaker endpoint.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * An object that provides new capacity and weight values for a variant.
   *
   * @public
   */
  DesiredWeightsAndCapacities: DesiredWeightAndCapacity[] | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointWeightsAndCapacitiesOutput {
  /**
   * The Amazon Resource Name (ARN) of the updated endpoint.
   *
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateExperimentRequest {
  /**
   * The name of the experiment to update.
   *
   * @public
   */
  ExperimentName: string | undefined;

  /**
   * The name of the experiment as displayed. The name doesn't need to be unique. If `DisplayName` isn't specified, `ExperimentName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the experiment.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateExperimentResponse {
  /**
   * The Amazon Resource Name (ARN) of the experiment.
   *
   * @public
   */
  ExperimentArn?: string | undefined;
}

/**
 * The new throughput configuration for the feature group. You can switch between on-demand and provisioned modes or update the read / write capacity of provisioned feature groups. You can switch a feature group to on-demand only once in a 24 hour period.
 *
 * @public
 */
export interface ThroughputConfigUpdate {
  /**
   * Target throughput mode of the feature group. Throughput update is an asynchronous operation, and the outcome should be monitored by polling `LastUpdateStatus` field in `DescribeFeatureGroup` response. You cannot update a feature group's throughput while another update is in progress.
   *
   * @public
   */
  ThroughputMode?: ThroughputMode | undefined;

  /**
   * For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling.
   *
   * @public
   */
  ProvisionedReadCapacityUnits?: number | undefined;

  /**
   * For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling.
   *
   * @public
   */
  ProvisionedWriteCapacityUnits?: number | undefined;
}

/**
 * @public
 */
export interface UpdateFeatureGroupRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the feature group that you're updating.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * Updates the feature group. Updating a feature group is an asynchronous operation. When you get an HTTP 200 response, you've made a valid request. It takes some time after you've made a valid request for Feature Store to update the feature group.
   *
   * @public
   */
  FeatureAdditions?: FeatureDefinition[] | undefined;

  /**
   * Updates the feature group online store configuration.
   *
   * @public
   */
  OnlineStoreConfig?: OnlineStoreConfigUpdate | undefined;

  /**
   * The new throughput configuration for the feature group. You can switch between on-demand and provisioned modes or update the read / write capacity of provisioned feature groups. You can switch a feature group to on-demand only once in a 24 hour period.
   *
   * @public
   */
  ThroughputConfig?: ThroughputConfigUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateFeatureGroupResponse {
  /**
   * The Amazon Resource Number (ARN) of the feature group that you're updating.
   *
   * @public
   */
  FeatureGroupArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateFeatureMetadataRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the feature group containing the feature that you're updating.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * The name of the feature that you're updating.
   *
   * @public
   */
  FeatureName: string | undefined;

  /**
   * A description that you can write to better describe the feature.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of key-value pairs that you can add to better describe the feature.
   *
   * @public
   */
  ParameterAdditions?: FeatureParameter[] | undefined;

  /**
   * A list of parameter keys that you can specify to remove parameters that describe your feature.
   *
   * @public
   */
  ParameterRemovals?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateHubRequest {
  /**
   * The name of the hub to update.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * A description of the updated hub.
   *
   * @public
   */
  HubDescription?: string | undefined;

  /**
   * The display name of the hub.
   *
   * @public
   */
  HubDisplayName?: string | undefined;

  /**
   * The searchable keywords for the hub.
   *
   * @public
   */
  HubSearchKeywords?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateHubResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated hub.
   *
   * @public
   */
  HubArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateHubContentRequest {
  /**
   * The name of the SageMaker hub that contains the hub content you want to update. You can optionally use the hub ARN instead.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The name of the hub content resource that you want to update.
   *
   * @public
   */
  HubContentName: string | undefined;

  /**
   * The content type of the resource that you want to update. Only specify a `Model` or `Notebook` resource for this API. To update a `ModelReference`, use the `UpdateHubContentReference` API instead.
   *
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * The hub content version that you want to update. For example, if you have two versions of a resource in your hub, you can update the second version.
   *
   * @public
   */
  HubContentVersion: string | undefined;

  /**
   * The display name of the hub content.
   *
   * @public
   */
  HubContentDisplayName?: string | undefined;

  /**
   * The description of the hub content.
   *
   * @public
   */
  HubContentDescription?: string | undefined;

  /**
   * A string that provides a description of the hub content. This string can include links, tables, and standard markdown formatting.
   *
   * @public
   */
  HubContentMarkdown?: string | undefined;

  /**
   * The searchable keywords of the hub content.
   *
   * @public
   */
  HubContentSearchKeywords?: string[] | undefined;

  /**
   * Indicates the current status of the hub content resource.
   *
   * @public
   */
  SupportStatus?: HubContentSupportStatus | undefined;
}

/**
 * @public
 */
export interface UpdateHubContentResponse {
  /**
   * The ARN of the private model hub that contains the updated hub content.
   *
   * @public
   */
  HubArn: string | undefined;

  /**
   * The ARN of the hub content resource that was updated.
   *
   * @public
   */
  HubContentArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateHubContentReferenceRequest {
  /**
   * The name of the SageMaker hub that contains the hub content you want to update. You can optionally use the hub ARN instead.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The name of the hub content resource that you want to update.
   *
   * @public
   */
  HubContentName: string | undefined;

  /**
   * The content type of the resource that you want to update. Only specify a `ModelReference` resource for this API. To update a `Model` or `Notebook` resource, use the `UpdateHubContent` API instead.
   *
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * The minimum hub content version of the referenced model that you want to use. The minimum version must be older than the latest available version of the referenced model. To support all versions of a model, set the value to `1.0.0`.
   *
   * @public
   */
  MinVersion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateHubContentReferenceResponse {
  /**
   * The ARN of the private model hub that contains the updated hub content.
   *
   * @public
   */
  HubArn: string | undefined;

  /**
   * The ARN of the hub content resource that was updated.
   *
   * @public
   */
  HubContentArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateImageRequest {
  /**
   * A list of properties to delete. Only the `Description` and `DisplayName` properties can be deleted.
   *
   * @public
   */
  DeleteProperties?: string[] | undefined;

  /**
   * The new description for the image.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The new display name for the image.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The name of the image to update.
   *
   * @public
   */
  ImageName: string | undefined;

  /**
   * The new ARN for the IAM role that enables Amazon SageMaker AI to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateImageResponse {
  /**
   * The ARN of the image.
   *
   * @public
   */
  ImageArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateImageVersionRequest {
  /**
   * The name of the image.
   *
   * @public
   */
  ImageName: string | undefined;

  /**
   * The alias of the image version.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * The version of the image.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * A list of aliases to add.
   *
   * @public
   */
  AliasesToAdd?: string[] | undefined;

  /**
   * A list of aliases to delete.
   *
   * @public
   */
  AliasesToDelete?: string[] | undefined;

  /**
   * The availability of the image version specified by the maintainer.
   *
   * - `NOT_PROVIDED`: The maintainers did not provide a status for image version stability.
   * - `STABLE`: The image version is stable.
   * - `TO_BE_ARCHIVED`: The image version is set to be archived. Custom image versions that are set to be archived are automatically archived after three months.
   * - `ARCHIVED`: The image version is archived. Archived image versions are not searchable and are no longer actively supported.
   *
   * @public
   */
  VendorGuidance?: VendorGuidance | undefined;

  /**
   * Indicates SageMaker AI job type compatibility.
   *
   * - `TRAINING`: The image version is compatible with SageMaker AI training jobs.
   * - `INFERENCE`: The image version is compatible with SageMaker AI inference jobs.
   * - `NOTEBOOK_KERNEL`: The image version is compatible with SageMaker AI notebook kernels.
   *
   * @public
   */
  JobType?: JobType | undefined;

  /**
   * The machine learning framework vended in the image version.
   *
   * @public
   */
  MLFramework?: string | undefined;

  /**
   * The supported programming language and its version.
   *
   * @public
   */
  ProgrammingLang?: string | undefined;

  /**
   * Indicates CPU or GPU compatibility.
   *
   * - `CPU`: The image version is compatible with CPU.
   * - `GPU`: The image version is compatible with GPU.
   *
   * @public
   */
  Processor?: Processor | undefined;

  /**
   * Indicates Horovod compatibility.
   *
   * @public
   */
  Horovod?: boolean | undefined;

  /**
   * The maintainer description of the image version.
   *
   * @public
   */
  ReleaseNotes?: string | undefined;
}

/**
 * @public
 */
export interface UpdateImageVersionResponse {
  /**
   * The ARN of the image version.
   *
   * @public
   */
  ImageVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceComponentInput {
  /**
   * The name of the inference component.
   *
   * @public
   */
  InferenceComponentName: string | undefined;

  /**
   * Details about the resources to deploy with this inference component, including the model, container, and compute resources.
   *
   * @public
   */
  Specification?: InferenceComponentSpecification | undefined;

  /**
   * A list of specification objects for the inference component, one per instance type. Use this parameter when you want to specify different model or resource configurations for the inference component on each instance type. You can use either this parameter or the singular `Specification` parameter, but not both.
   *
   * @public
   */
  Specifications?: InferenceComponentSpecification[] | undefined;

  /**
   * Runtime settings for a model that is deployed with an inference component.
   *
   * @public
   */
  RuntimeConfig?: InferenceComponentRuntimeConfig | undefined;

  /**
   * The deployment configuration for the inference component. The configuration contains the desired deployment strategy and rollback settings.
   *
   * @public
   */
  DeploymentConfig?: InferenceComponentDeploymentConfig | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceComponentOutput {
  /**
   * The Amazon Resource Name (ARN) of the inference component.
   *
   * @public
   */
  InferenceComponentArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceComponentRuntimeConfigInput {
  /**
   * The name of the inference component to update.
   *
   * @public
   */
  InferenceComponentName: string | undefined;

  /**
   * Runtime settings for a model that is deployed with an inference component.
   *
   * @public
   */
  DesiredRuntimeConfig: InferenceComponentRuntimeConfig | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceComponentRuntimeConfigOutput {
  /**
   * The Amazon Resource Name (ARN) of the inference component.
   *
   * @public
   */
  InferenceComponentArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceExperimentRequest {
  /**
   * The name of the inference experiment to be updated.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The duration for which the inference experiment will run. If the status of the inference experiment is `Created`, then you can update both the start and end dates. If the status of the inference experiment is `Running`, then you can update only the end date.
   *
   * @public
   */
  Schedule?: InferenceExperimentSchedule | undefined;

  /**
   * The description of the inference experiment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An array of `ModelVariantConfig` objects. There is one for each variant, whose infrastructure configuration you want to update.
   *
   * @public
   */
  ModelVariants?: ModelVariantConfig[] | undefined;

  /**
   * The Amazon S3 location and configuration for storing inference request and response data.
   *
   * @public
   */
  DataStorageConfig?: InferenceExperimentDataStorageConfig | undefined;

  /**
   * The configuration of `ShadowMode` inference experiment type. Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates.
   *
   * @public
   */
  ShadowModeConfig?: ShadowModeConfig | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceExperimentResponse {
  /**
   * The ARN of the updated inference experiment.
   *
   * @public
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateMlflowAppRequest {
  /**
   * The ARN of the MLflow App to update.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the MLflow App to update.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The new S3 URI for the general purpose bucket to use as the artifact store for the MLflow App.
   *
   * @public
   */
  ArtifactStoreUri?: string | undefined;

  /**
   * Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry. To enable automatic model registration, set this value to `AutoModelRegistrationEnabled`. To disable automatic model registration, set this value to `AutoModelRegistrationDisabled`. If not specified, `AutomaticModelRegistration` defaults to `AutoModelRegistrationEnabled`
   *
   * @public
   */
  ModelRegistrationMode?: ModelRegistrationMode | undefined;

  /**
   * The new weekly maintenance window start day and time to update. The maintenance window day and time should be in Coordinated Universal Time (UTC) 24-hour standard time. For example: TUE:03:30.
   *
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;

  /**
   * List of SageMaker Domain IDs for which this MLflow App is the default.
   *
   * @public
   */
  DefaultDomainIdList?: string[] | undefined;

  /**
   * Indicates whether this this MLflow App is the default for the account.
   *
   * @public
   */
  AccountDefaultStatus?: AccountDefaultStatus | undefined;
}

/**
 * @public
 */
export interface UpdateMlflowAppResponse {
  /**
   * The ARN of the updated MLflow App.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMlflowTrackingServerRequest {
  /**
   * The name of the MLflow Tracking Server to update.
   *
   * @public
   */
  TrackingServerName: string | undefined;

  /**
   * The new S3 URI for the general purpose bucket to use as the artifact store for the MLflow Tracking Server.
   *
   * @public
   */
  ArtifactStoreUri?: string | undefined;

  /**
   * The new size for the MLflow Tracking Server.
   *
   * @public
   */
  TrackingServerSize?: TrackingServerSize | undefined;

  /**
   * Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry. To enable automatic model registration, set this value to `True`. To disable automatic model registration, set this value to `False`. If not specified, `AutomaticModelRegistration` defaults to `False`
   *
   * @public
   */
  AutomaticModelRegistration?: boolean | undefined;

  /**
   * The new weekly maintenance window start day and time to update. The maintenance window day and time should be in Coordinated Universal Time (UTC) 24-hour standard time. For example: TUE:03:30.
   *
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;

  /**
   * The new expected Amazon Web Services account ID that owns the Amazon S3 bucket for artifact storage.
   *
   * @public
   */
  S3BucketOwnerAccountId?: string | undefined;

  /**
   * Whether to enable or disable Amazon S3 Bucket Owenrship Verifaction whenever the MLflow Tracking Server interacts with Amazon Amazon S3.
   *
   * @public
   */
  S3BucketOwnerVerification?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateMlflowTrackingServerResponse {
  /**
   * The ARN of the updated MLflow Tracking Server.
   *
   * @public
   */
  TrackingServerArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelCardRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the model card to update.
   *
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * The updated model card content. Content must be in [model card JSON schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema) and provided as a string.
   *
   * When updating model card content, be sure to include the full content and not just updated content.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.
   *
   * - `Draft`: The model card is a work in progress.
   * - `PendingReview`: The model card is pending review.
   * - `Approved`: The model card is approved.
   * - `Archived`: The model card is archived. No more updates should be made to the model card, but it can still be exported.
   *
   * @public
   */
  ModelCardStatus?: ModelCardStatus | undefined;
}

/**
 * @public
 */
export interface UpdateModelCardResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated model card.
   *
   * @public
   */
  ModelCardArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelPackageInput {
  /**
   * The Amazon Resource Name (ARN) of the model package.
   *
   * @public
   */
  ModelPackageArn: string | undefined;

  /**
   * The approval status of the model.
   *
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus | undefined;

  /**
   * The package registration type of the model package input.
   *
   * @public
   */
  ModelPackageRegistrationType?: ModelPackageRegistrationType | undefined;

  /**
   * A description for the approval status of the model.
   *
   * @public
   */
  ApprovalDescription?: string | undefined;

  /**
   * The metadata properties associated with the model package versions.
   *
   * @public
   */
  CustomerMetadataProperties?: Record<string, string> | undefined;

  /**
   * The metadata properties associated with the model package versions to remove.
   *
   * @public
   */
  CustomerMetadataPropertiesToRemove?: string[] | undefined;

  /**
   * An array of additional Inference Specification objects to be added to the existing array additional Inference Specification. Total number of additional Inference Specifications can not exceed 15. Each additional Inference Specification specifies artifacts based on this model package that can be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.
   *
   * @public
   */
  AdditionalInferenceSpecificationsToAdd?: AdditionalInferenceSpecificationDefinition[] | undefined;

  /**
   * Specifies details about inference jobs that you can run with models based on this model package, including the following information:
   *
   * - The Amazon ECR paths of containers that contain the inference code and model artifacts.
   * - The instance types that the model package supports for transform jobs and real-time endpoints used for inference.
   * - The input and output content formats that the model package supports for inference.
   *
   * @public
   */
  InferenceSpecification?: InferenceSpecification | undefined;

  /**
   * The URI of the source for the model package.
   *
   * @public
   */
  SourceUri?: string | undefined;

  /**
   * The model card associated with the model package. Since `ModelPackageModelCard` is tied to a model package, it is a specific usage of a model card and its schema is simplified compared to the schema of `ModelCard`. The `ModelPackageModelCard` schema does not include `model_package_details`, and `model_overview` is composed of the `model_creator` and `model_artifact` properties. For more information about the model package model card schema, see [Model package model card schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html#model-card-schema). For more information about the model card associated with the model package, see [View the Details of a Model Version](https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html).
   *
   * @public
   */
  ModelCard?: ModelPackageModelCard | undefined;

  /**
   * A structure describing the current state of the model in its life cycle.
   *
   * @public
   */
  ModelLifeCycle?: ModelLifeCycle | undefined;

  /**
   * A unique token that guarantees that the call to this API is idempotent.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelPackageOutput {
  /**
   * The Amazon Resource Name (ARN) of the model.
   *
   * @public
   */
  ModelPackageArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringAlertRequest {
  /**
   * The name of a monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * The name of a monitoring alert.
   *
   * @public
   */
  MonitoringAlertName: string | undefined;

  /**
   * Within `EvaluationPeriod`, how many execution failures will raise an alert.
   *
   * @public
   */
  DatapointsToAlert: number | undefined;

  /**
   * The number of most recent monitoring executions to consider when evaluating alert status.
   *
   * @public
   */
  EvaluationPeriod: number | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringAlertResponse {
  /**
   * The Amazon Resource Name (ARN) of the monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * The name of a monitoring alert.
   *
   * @public
   */
  MonitoringAlertName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringScheduleRequest {
  /**
   * The name of the monitoring schedule. The name must be unique within an Amazon Web Services Region within an Amazon Web Services account.
   *
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * The configuration object that specifies the monitoring schedule and defines the monitoring job.
   *
   * @public
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringScheduleResponse {
  /**
   * The Amazon Resource Name (ARN) of the monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateNotebookInstanceInput {
  /**
   * The name of the notebook instance to update.
   *
   * @public
   */
  NotebookInstanceName: string | undefined;

  /**
   * The Amazon ML compute instance type.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The IP address type for the notebook instance. Specify `ipv4` for IPv4-only connectivity or `dualstack` for both IPv4 and IPv6 connectivity. The notebook instance must be stopped before updating this setting. When you specify `dualstack`, the subnet must support IPv6 addressing.
   *
   * @public
   */
  IpAddressType?: IPAddressType | undefined;

  /**
   * The platform identifier of the notebook instance runtime environment.
   *
   * @public
   */
  PlatformIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that SageMaker AI can assume to access the notebook instance. For more information, see [SageMaker AI Roles](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html).
   *
   * > **Note:** To be able to pass this role to SageMaker AI, the caller of this API must have the `iam:PassRole` permission.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The name of a lifecycle configuration to associate with the notebook instance. For information about lifestyle configurations, see [Step 2.1: (Optional) Customize a Notebook Instance](https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html).
   *
   * @public
   */
  LifecycleConfigName?: string | undefined;

  /**
   * Set to `true` to remove the notebook instance lifecycle configuration currently associated with the notebook instance. This operation is idempotent. If you specify a lifecycle configuration that is not associated with the notebook instance when you call this method, it does not throw an error.
   *
   * @public
   */
  DisassociateLifecycleConfig?: boolean | undefined;

  /**
   * The size, in GB, of the ML storage volume to attach to the notebook instance. The default value is 5 GB. ML storage volumes are encrypted, so SageMaker AI can't determine the amount of available free space on the volume. Because of this, you can increase the volume size when you update a notebook instance, but you can't decrease the volume size. If you want to decrease the size of the ML storage volume in use, create a new notebook instance with the desired size.
   *
   * @public
   */
  VolumeSizeInGB?: number | undefined;

  /**
   * The Git repository to associate with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in [Amazon Web Services CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see [Associating Git Repositories with SageMaker AI Notebook Instances](https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html).
   *
   * @public
   */
  DefaultCodeRepository?: string | undefined;

  /**
   * An array of up to three Git repositories to associate with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in [Amazon Web Services CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see [Associating Git Repositories with SageMaker AI Notebook Instances](https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html).
   *
   * @public
   */
  AdditionalCodeRepositories?: string[] | undefined;

  /**
   * This parameter is no longer supported. Elastic Inference (EI) is no longer available.
   *
   * This parameter was used to specify a list of the EI instance types to associate with this notebook instance.
   *
   * @public
   */
  AcceleratorTypes?: NotebookInstanceAcceleratorType[] | undefined;

  /**
   * This parameter is no longer supported. Elastic Inference (EI) is no longer available.
   *
   * This parameter was used to specify a list of the EI instance types to remove from this notebook instance.
   *
   * @public
   */
  DisassociateAcceleratorTypes?: boolean | undefined;

  /**
   * The name or URL of the default Git repository to remove from this notebook instance. This operation is idempotent. If you specify a Git repository that is not associated with the notebook instance when you call this method, it does not throw an error.
   *
   * @public
   */
  DisassociateDefaultCodeRepository?: boolean | undefined;

  /**
   * A list of names or URLs of the default Git repositories to remove from this notebook instance. This operation is idempotent. If you specify a Git repository that is not associated with the notebook instance when you call this method, it does not throw an error.
   *
   * @public
   */
  DisassociateAdditionalCodeRepositories?: boolean | undefined;

  /**
   * Whether root access is enabled or disabled for users of the notebook instance. The default value is `Enabled`.
   *
   * > **Note:** If you set this to `Disabled`, users don't have root access on the notebook instance, but lifecycle configuration scripts still run with root permissions.
   *
   * @public
   */
  RootAccess?: RootAccess | undefined;

  /**
   * Information on the IMDS configuration of the notebook instance
   *
   * @public
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration | undefined;
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
   * The name of the lifecycle configuration.
   *
   * @public
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * The shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string.
   *
   * @public
   */
  OnCreate?: NotebookInstanceLifecycleHook[] | undefined;

  /**
   * The shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string.
   *
   * @public
   */
  OnStart?: NotebookInstanceLifecycleHook[] | undefined;
}

/**
 * @public
 */
export interface UpdateNotebookInstanceLifecycleConfigOutput {}

/**
 * @public
 */
export interface UpdatePartnerAppRequest {
  /**
   * The ARN of the SageMaker Partner AI App to update.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Maintenance configuration settings for the SageMaker Partner AI App.
   *
   * @public
   */
  MaintenanceConfig?: PartnerAppMaintenanceConfig | undefined;

  /**
   * Indicates the instance type and size of the cluster attached to the SageMaker Partner AI App.
   *
   * @public
   */
  Tier?: string | undefined;

  /**
   * Configuration settings for the SageMaker Partner AI App.
   *
   * @public
   */
  ApplicationConfig?: PartnerAppConfig | undefined;

  /**
   * Specifies the Amazon Web Services IAM Identity Center configuration for the SageMaker Partner AI App. Specify this parameter when `AuthType` is `IDC`. Apps that use `IAM` authorization don't use this parameter.
   *
   * @public
   */
  IdcConfig?: IdcConfigInput | undefined;

  /**
   * The authorization type that users use to access the SageMaker Partner AI App. Use this parameter to migrate an existing SageMaker Partner AI App from `IAM` authorization to `IDC` authorization. Valid values:
   *
   * - `IAM`: Users access the SageMaker Partner AI App with their Amazon Web Services IAM identity.
   * - `IDC`: Users access the SageMaker Partner AI App with their Amazon Web Services IAM Identity Center identity. Specify the Identity Center instance to use in `IdcConfig`.
   *
   * @public
   */
  AuthType?: PartnerAppAuthType | undefined;

  /**
   * When set to `TRUE`, the SageMaker Partner AI App sets the Amazon Web Services IAM session name or the authenticated IAM user as the identity of the SageMaker Partner AI App user.
   *
   * @public
   */
  EnableIamSessionBasedIdentity?: boolean | undefined;

  /**
   * When set to `TRUE`, the SageMaker Partner AI App is automatically upgraded to the latest minor version during the next scheduled maintenance window, if one is available.
   *
   * @public
   */
  EnableAutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The semantic version to upgrade the SageMaker Partner AI App to. Must be the same semantic version returned in the `AvailableUpgrade` field from `DescribePartnerApp`. Version skipping and downgrades are not supported.
   *
   * @public
   */
  AppVersion?: string | undefined;

  /**
   * A unique token that guarantees that the call to this API is idempotent.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Each tag consists of a key and an optional value. Tag keys must be unique per resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdatePartnerAppResponse {
  /**
   * The ARN of the SageMaker Partner AI App that was updated.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineRequest {
  /**
   * The name of the pipeline to update.
   *
   * @public
   */
  PipelineName: string | undefined;

  /**
   * The display name of the pipeline.
   *
   * @public
   */
  PipelineDisplayName?: string | undefined;

  /**
   * The JSON pipeline definition.
   *
   * @public
   */
  PipelineDefinition?: string | undefined;

  /**
   * The location of the pipeline definition stored in Amazon S3. If specified, SageMaker will retrieve the pipeline definition from this location.
   *
   * @public
   */
  PipelineDefinitionS3Location?: PipelineDefinitionS3Location | undefined;

  /**
   * The description of the pipeline.
   *
   * @public
   */
  PipelineDescription?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that the pipeline uses to execute.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * If specified, it applies to all executions of this pipeline by default.
   *
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated pipeline.
   *
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * The ID of the pipeline version.
   *
   * @public
   */
  PipelineVersionId?: number | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn: string | undefined;

  /**
   * The description of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionDescription?: string | undefined;

  /**
   * The display name of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionDisplayName?: string | undefined;

  /**
   * This configuration, if specified, overrides the parallelism configuration of the parent pipeline for this specific run.
   *
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineExecutionResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the pipeline.
   *
   * @public
   */
  PipelineArn: string | undefined;

  /**
   * The pipeline version ID to update.
   *
   * @public
   */
  PipelineVersionId: number | undefined;

  /**
   * The display name of the pipeline version.
   *
   * @public
   */
  PipelineVersionDisplayName?: string | undefined;

  /**
   * The description of the pipeline version.
   *
   * @public
   */
  PipelineVersionDescription?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineVersionResponse {
  /**
   * The Amazon Resource Name (ARN) of the pipeline.
   *
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * The ID of the pipeline version.
   *
   * @public
   */
  PipelineVersionId?: number | undefined;
}

/**
 * Details that you specify to provision a service catalog product. For information about service catalog, see [What is Amazon Web Services Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html).
 *
 * @public
 */
export interface ServiceCatalogProvisioningUpdateDetails {
  /**
   * The ID of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * A list of key value pairs that you specify when you provision a product.
   *
   * @public
   */
  ProvisioningParameters?: ProvisioningParameter[] | undefined;
}

/**
 * Contains configuration details for updating an existing template provider in the project.
 *
 * @public
 */
export interface UpdateTemplateProvider {
  /**
   * The CloudFormation template provider configuration to update.
   *
   * @public
   */
  CfnTemplateProvider?: CfnUpdateTemplateProvider | undefined;
}

/**
 * @public
 */
export interface UpdateProjectInput {
  /**
   * The name of the project.
   *
   * @public
   */
  ProjectName: string | undefined;

  /**
   * The description for the project.
   *
   * @public
   */
  ProjectDescription?: string | undefined;

  /**
   * The product ID and provisioning artifact ID to provision a service catalog. The provisioning artifact ID will default to the latest provisioning artifact ID of the product, if you don't provide the provisioning artifact ID. For more information, see [What is Amazon Web Services Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html).
   *
   * @public
   */
  ServiceCatalogProvisioningUpdateDetails?: ServiceCatalogProvisioningUpdateDetails | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). In addition, the project must have tag update constraints set in order to include this parameter in the request. For more information, see [Amazon Web Services Service Catalog Tag Update Constraints](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/constraints-resourceupdate.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The template providers to update in the project.
   *
   * @public
   */
  TemplateProvidersToUpdate?: UpdateTemplateProvider[] | undefined;
}

/**
 * @public
 */
export interface UpdateProjectOutput {
  /**
   * The Amazon Resource Name (ARN) of the project.
   *
   * @public
   */
  ProjectArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceRequest {
  /**
   * The ID of the associated domain.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The name of the space.
   *
   * @public
   */
  SpaceName: string | undefined;

  /**
   * A collection of space settings.
   *
   * @public
   */
  SpaceSettings?: SpaceSettings | undefined;

  /**
   * The name of the space that appears in the Amazon SageMaker Studio UI.
   *
   * @public
   */
  SpaceDisplayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceResponse {
  /**
   * The space's Amazon Resource Name (ARN).
   *
   * @public
   */
  SpaceArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrainingJobRequest {
  /**
   * The name of a training job to update the Debugger profiling configuration.
   *
   * @public
   */
  TrainingJobName: string | undefined;

  /**
   * Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and storage paths.
   *
   * @public
   */
  ProfilerConfig?: ProfilerConfigForUpdate | undefined;

  /**
   * Configuration information for Amazon SageMaker Debugger rules for profiling system and framework metrics.
   *
   * @public
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[] | undefined;

  /**
   * The training job `ResourceConfig` to update warm pool retention length.
   *
   * @public
   */
  ResourceConfig?: ResourceConfigForUpdate | undefined;

  /**
   * Configuration for remote debugging while the training job is running. You can update the remote debugging configuration when the `SecondaryStatus` of the job is `Downloading` or `Training`.To learn more about the remote debugging functionality of SageMaker, see [Access a training container through Amazon Web Services Systems Manager (SSM) for remote debugging](https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html).
   *
   * @public
   */
  RemoteDebugConfig?: RemoteDebugConfigForUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateTrainingJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the training job.
   *
   * @public
   */
  TrainingJobArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrialRequest {
  /**
   * The name of the trial to update.
   *
   * @public
   */
  TrialName: string | undefined;

  /**
   * The name of the trial as displayed. The name doesn't need to be unique. If `DisplayName` isn't specified, `TrialName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrialResponse {
  /**
   * The Amazon Resource Name (ARN) of the trial.
   *
   * @public
   */
  TrialArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrialComponentRequest {
  /**
   * The name of the component to update.
   *
   * @public
   */
  TrialComponentName: string | undefined;

  /**
   * The name of the component as displayed. The name doesn't need to be unique. If `DisplayName` isn't specified, `TrialComponentName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The new status of the component.
   *
   * @public
   */
  Status?: TrialComponentStatus | undefined;

  /**
   * When the component started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * When the component ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Replaces all of the component's hyperparameters with the specified hyperparameters or add new hyperparameters. Existing hyperparameters are replaced if the trial component is updated with an identical hyperparameter key.
   *
   * @public
   */
  Parameters?: Record<string, TrialComponentParameterValue> | undefined;

  /**
   * The hyperparameters to remove from the component.
   *
   * @public
   */
  ParametersToRemove?: string[] | undefined;

  /**
   * Replaces all of the component's input artifacts with the specified artifacts or adds new input artifacts. Existing input artifacts are replaced if the trial component is updated with an identical input artifact key.
   *
   * @public
   */
  InputArtifacts?: Record<string, TrialComponentArtifact> | undefined;

  /**
   * The input artifacts to remove from the component.
   *
   * @public
   */
  InputArtifactsToRemove?: string[] | undefined;

  /**
   * Replaces all of the component's output artifacts with the specified artifacts or adds new output artifacts. Existing output artifacts are replaced if the trial component is updated with an identical output artifact key.
   *
   * @public
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact> | undefined;

  /**
   * The output artifacts to remove from the component.
   *
   * @public
   */
  OutputArtifactsToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateTrialComponentResponse {
  /**
   * The Amazon Resource Name (ARN) of the trial component.
   *
   * @public
   */
  TrialComponentArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileRequest {
  /**
   * The domain ID.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The user profile name.
   *
   * @public
   */
  UserProfileName: string | undefined;

  /**
   * A collection of settings.
   *
   * @public
   */
  UserSettings?: UserSettings | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileResponse {
  /**
   * The user profile Amazon Resource Name (ARN).
   *
   * @public
   */
  UserProfileArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkforceRequest {
  /**
   * The name of the private workforce that you want to update. You can find your workforce name by using the [ListWorkforces](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListWorkforces.html) operation.
   *
   * @public
   */
  WorkforceName: string | undefined;

  /**
   * A list of one to ten worker IP address ranges ([CIDRs](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html)) that can be used to access tasks assigned to this workforce.
   *
   * Maximum: Ten CIDR values
   *
   * @public
   */
  SourceIpConfig?: SourceIpConfig | undefined;

  /**
   * Use this parameter to update your OIDC Identity Provider (IdP) configuration for a workforce made using your own IdP.
   *
   * @public
   */
  OidcConfig?: OidcConfig | undefined;

  /**
   * Use this parameter to update your VPC configuration for a workforce.
   *
   * @public
   */
  WorkforceVpcConfig?: WorkforceVpcConfigRequest | undefined;

  /**
   * Use this parameter to specify whether you want `IPv4` only or `dualstack` (`IPv4` and `IPv6`) to support your labeling workforce.
   *
   * @public
   */
  IpAddressType?: WorkforceIpAddressType | undefined;
}

/**
 * @public
 */
export interface UpdateWorkforceResponse {
  /**
   * A single private workforce. You can create one private work force in each Amazon Web Services Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see [Create a Private Workforce](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html).
   *
   * @public
   */
  Workforce: Workforce | undefined;
}

/**
 * @public
 */
export interface UpdateWorkteamRequest {
  /**
   * The name of the work team to update.
   *
   * @public
   */
  WorkteamName: string | undefined;

  /**
   * A list of `MemberDefinition` objects that contains objects that identify the workers that make up the work team.
   *
   * Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use `CognitoMemberDefinition`. For workforces created using your own OIDC identity provider (IdP) use `OidcMemberDefinition`. You should not provide input for both of these parameters in a single request.
   *
   * For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito *user groups* within the user pool used to create a workforce. All of the `CognitoMemberDefinition` objects that make up the member definition must have the same `ClientId` and `UserPool` values. To add a Amazon Cognito user group to an existing worker pool, see Adding groups to a User Pool. For more information about user pools, see [Amazon Cognito User Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html).
   *
   * For workforces created using your own OIDC IdP, specify the user groups that you want to include in your private work team in `OidcMemberDefinition` by listing those groups in `Groups`. Be aware that user groups that are already in the work team must also be listed in `Groups` when you make this request to remain on the work team. If you do not include these user groups, they will no longer be associated with the work team you update.
   *
   * @public
   */
  MemberDefinitions?: MemberDefinition[] | undefined;

  /**
   * An updated description for the work team.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Configures SNS topic notifications for available or expiring work items
   *
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration | undefined;

  /**
   * Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL.
   *
   * @public
   */
  WorkerAccessConfiguration?: WorkerAccessConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateWorkteamResponse {
  /**
   * A `Workteam` object that describes the updated work team.
   *
   * @public
   */
  Workteam: Workteam | undefined;
}

/**
 * A multi-expression that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. You must specify at least one subexpression, filter, or nested filter. A `SearchExpression` can contain up to twenty elements.
 *
 * A `SearchExpression` contains the following components:
 *
 * - A list of `Filter` objects. Each filter defines a simple Boolean expression comprised of a resource property name, Boolean operator, and value.
 * - A list of `NestedFilter` objects. Each nested filter defines a list of Boolean expressions using a list of resource properties. A nested filter is satisfied if a single object in the list satisfies all Boolean expressions.
 * - A list of `SearchExpression` objects. A search expression object can be nested in a list of search expression objects.
 * - A Boolean operator: `And` or `Or`.
 *
 * @public
 */
export interface SearchExpression {
  /**
   * A list of filter objects.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * A list of nested filter objects.
   *
   * @public
   */
  NestedFilters?: NestedFilters[] | undefined;

  /**
   * A list of search expression objects.
   *
   * @public
   */
  SubExpressions?: SearchExpression[] | undefined;

  /**
   * A Boolean operator used to evaluate the search expression. If you want every conditional statement in all lists to be satisfied for the entire search expression to be true, specify `And`. If only a single conditional statement needs to be true for the entire search expression to be true, specify `Or`. The default value is `And`.
   *
   * @public
   */
  Operator?: BooleanOperator | undefined;
}

/**
 * @public
 */
export interface SearchRequest {
  /**
   * The name of the SageMaker resource to search for.
   *
   * @public
   */
  Resource: ResourceType | undefined;

  /**
   * A Boolean conditional statement. Resources must satisfy this condition to be included in search results. You must provide at least one subexpression, filter, or nested filter. The maximum number of recursive `SubExpressions`, `NestedFilters`, and `Filters` that can be included in a `SearchExpression` object is 50.
   *
   * @public
   */
  SearchExpression?: SearchExpression | undefined;

  /**
   * The name of the resource property used to sort the `SearchResults`. The default is `LastModifiedTime`.
   *
   * @public
   */
  SortBy?: string | undefined;

  /**
   * How `SearchResults` are ordered. Valid values are `Ascending` or `Descending`. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: SearchSortOrder | undefined;

  /**
   * If more than `MaxResults` resources match the specified `SearchExpression`, the response includes a `NextToken`. The `NextToken` can be passed to the next `SearchRequest` to continue retrieving results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A cross account filter option. When the value is `"CrossAccount"` the search results will only include resources made discoverable to you from other accounts. When the value is `"SameAccount"` or `null` the search results will only include resources from your account. Default is `null`. For more information on searching for resources made discoverable to your account, see [Search discoverable resources](https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store-cross-account-discoverability-use.html) in the SageMaker Developer Guide. The maximum number of `ResourceCatalog`s viewable is 1000.
   *
   * @public
   */
  CrossAccountFilterOption?: CrossAccountFilterOption | undefined;

  /**
   * Limits the results of your search request to the resources that you can access.
   *
   * @public
   */
  VisibilityConditions?: VisibilityConditions[] | undefined;
}
