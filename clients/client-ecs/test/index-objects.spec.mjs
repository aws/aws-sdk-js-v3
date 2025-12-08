import {
  AcceleratorManufacturer,
  AcceleratorName,
  AcceleratorType,
  AccessDeniedException,
  AccessType,
  AgentUpdateStatus,
  ApplicationProtocol,
  AssignPublicIp,
  AttributeLimitExceededException,
  AvailabilityZoneRebalancing,
  BareMetal,
  BlockedException,
  BurstablePerformance,
  CPUArchitecture,
  CapacityProviderField,
  CapacityProviderStatus,
  CapacityProviderType,
  CapacityProviderUpdateStatus,
  ClientException,
  ClusterContainsCapacityProviderException,
  ClusterContainsContainerInstancesException,
  ClusterContainsServicesException,
  ClusterContainsTasksException,
  ClusterField,
  ClusterNotFoundException,
  ClusterSettingName,
  Compatibility,
  ConflictException,
  Connectivity,
  ContainerCondition,
  ContainerInstanceField,
  ContainerInstanceStatus,
  CpuManufacturer,
  CreateCapacityProviderCommand,
  CreateClusterCommand,
  CreateExpressGatewayServiceCommand,
  CreateServiceCommand,
  CreateTaskSetCommand,
  DeleteAccountSettingCommand,
  DeleteAttributesCommand,
  DeleteCapacityProviderCommand,
  DeleteClusterCommand,
  DeleteExpressGatewayServiceCommand,
  DeleteServiceCommand,
  DeleteTaskDefinitionsCommand,
  DeleteTaskSetCommand,
  DeploymentControllerType,
  DeploymentLifecycleHookStage,
  DeploymentRolloutState,
  DeploymentStrategy,
  DeregisterContainerInstanceCommand,
  DeregisterTaskDefinitionCommand,
  DescribeCapacityProvidersCommand,
  DescribeClustersCommand,
  DescribeContainerInstancesCommand,
  DescribeExpressGatewayServiceCommand,
  DescribeServiceDeploymentsCommand,
  DescribeServiceRevisionsCommand,
  DescribeServicesCommand,
  DescribeTaskDefinitionCommand,
  DescribeTaskSetsCommand,
  DescribeTasksCommand,
  DesiredStatus,
  DeviceCgroupPermission,
  DiscoverPollEndpointCommand,
  EBSResourceType,
  ECS,
  ECSClient,
  ECSServiceException,
  EFSAuthorizationConfigIAM,
  EFSTransitEncryption,
  EnvironmentFileType,
  ExecuteCommandCommand,
  ExecuteCommandLogging,
  ExpressGatewayServiceInclude,
  ExpressGatewayServiceScalingMetric,
  ExpressGatewayServiceStatusCode,
  FirelensConfigurationType,
  GetTaskProtectionCommand,
  HealthStatus,
  InstanceGeneration,
  InstanceHealthCheckState,
  InstanceHealthCheckType,
  InvalidParameterException,
  IpcMode,
  LaunchType,
  LimitExceededException,
  ListAccountSettingsCommand,
  ListAttributesCommand,
  ListClustersCommand,
  ListContainerInstancesCommand,
  ListServiceDeploymentsCommand,
  ListServicesByNamespaceCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  ListTaskDefinitionFamiliesCommand,
  ListTaskDefinitionsCommand,
  ListTasksCommand,
  LocalStorage,
  LocalStorageType,
  LogDriver,
  ManagedAgentName,
  ManagedDraining,
  ManagedInstancesMonitoringOptions,
  ManagedResourceStatus,
  ManagedScalingStatus,
  ManagedTerminationProtection,
  MissingVersionException,
  NamespaceNotFoundException,
  NetworkMode,
  NoUpdateAvailableException,
  OSFamily,
  PidMode,
  PlacementConstraintType,
  PlacementStrategyType,
  PlatformDeviceType,
  PlatformTaskDefinitionIncompatibilityException,
  PlatformUnknownException,
  PropagateMITags,
  PropagateTags,
  ProxyConfigurationType,
  PutAccountSettingCommand,
  PutAccountSettingDefaultCommand,
  PutAttributesCommand,
  PutClusterCapacityProvidersCommand,
  RegisterContainerInstanceCommand,
  RegisterTaskDefinitionCommand,
  ResourceInUseException,
  ResourceManagementType,
  ResourceNotFoundException,
  ResourceType,
  RunTaskCommand,
  ScaleUnit,
  SchedulingStrategy,
  Scope,
  ServerException,
  ServiceConnectAccessLoggingFormat,
  ServiceConnectIncludeQueryParameters,
  ServiceDeploymentLifecycleStage,
  ServiceDeploymentNotFoundException,
  ServiceDeploymentRollbackMonitorsStatus,
  ServiceDeploymentStatus,
  ServiceField,
  ServiceNotActiveException,
  ServiceNotFoundException,
  SettingName,
  SettingType,
  SortOrder,
  StabilityStatus,
  StartTaskCommand,
  StopServiceDeploymentCommand,
  StopServiceDeploymentStopType,
  StopTaskCommand,
  SubmitAttachmentStateChangesCommand,
  SubmitContainerStateChangeCommand,
  SubmitTaskStateChangeCommand,
  TagResourceCommand,
  TargetNotConnectedException,
  TargetNotFoundException,
  TargetType,
  TaskDefinitionFamilyStatus,
  TaskDefinitionField,
  TaskDefinitionPlacementConstraintType,
  TaskDefinitionStatus,
  TaskField,
  TaskFilesystemType,
  TaskSetField,
  TaskSetNotFoundException,
  TaskStopCode,
  TransportProtocol,
  UlimitName,
  UnsupportedFeatureException,
  UntagResourceCommand,
  UpdateCapacityProviderCommand,
  UpdateClusterCommand,
  UpdateClusterSettingsCommand,
  UpdateContainerAgentCommand,
  UpdateContainerInstancesStateCommand,
  UpdateExpressGatewayServiceCommand,
  UpdateInProgressException,
  UpdateServiceCommand,
  UpdateServicePrimaryTaskSetCommand,
  UpdateTaskProtectionCommand,
  UpdateTaskSetCommand,
  VersionConsistency,
  paginateListAccountSettings,
  paginateListAttributes,
  paginateListClusters,
  paginateListContainerInstances,
  paginateListServices,
  paginateListServicesByNamespace,
  paginateListTaskDefinitionFamilies,
  paginateListTaskDefinitions,
  paginateListTasks,
  waitForServicesInactive,
  waitForServicesStable,
  waitForTasksRunning,
  waitForTasksStopped,
  waitUntilServicesInactive,
  waitUntilServicesStable,
  waitUntilTasksRunning,
  waitUntilTasksStopped,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ECSClient === "function");
assert(typeof ECS === "function");
// commands
assert(typeof CreateCapacityProviderCommand === "function");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateExpressGatewayServiceCommand === "function");
assert(typeof CreateServiceCommand === "function");
assert(typeof CreateTaskSetCommand === "function");
assert(typeof DeleteAccountSettingCommand === "function");
assert(typeof DeleteAttributesCommand === "function");
assert(typeof DeleteCapacityProviderCommand === "function");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteExpressGatewayServiceCommand === "function");
assert(typeof DeleteServiceCommand === "function");
assert(typeof DeleteTaskDefinitionsCommand === "function");
assert(typeof DeleteTaskSetCommand === "function");
assert(typeof DeregisterContainerInstanceCommand === "function");
assert(typeof DeregisterTaskDefinitionCommand === "function");
assert(typeof DescribeCapacityProvidersCommand === "function");
assert(typeof DescribeClustersCommand === "function");
assert(typeof DescribeContainerInstancesCommand === "function");
assert(typeof DescribeExpressGatewayServiceCommand === "function");
assert(typeof DescribeServiceDeploymentsCommand === "function");
assert(typeof DescribeServiceRevisionsCommand === "function");
assert(typeof DescribeServicesCommand === "function");
assert(typeof DescribeTaskDefinitionCommand === "function");
assert(typeof DescribeTasksCommand === "function");
assert(typeof DescribeTaskSetsCommand === "function");
assert(typeof DiscoverPollEndpointCommand === "function");
assert(typeof ExecuteCommandCommand === "function");
assert(typeof GetTaskProtectionCommand === "function");
assert(typeof ListAccountSettingsCommand === "function");
assert(typeof ListAttributesCommand === "function");
assert(typeof ListClustersCommand === "function");
assert(typeof ListContainerInstancesCommand === "function");
assert(typeof ListServiceDeploymentsCommand === "function");
assert(typeof ListServicesCommand === "function");
assert(typeof ListServicesByNamespaceCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTaskDefinitionFamiliesCommand === "function");
assert(typeof ListTaskDefinitionsCommand === "function");
assert(typeof ListTasksCommand === "function");
assert(typeof PutAccountSettingCommand === "function");
assert(typeof PutAccountSettingDefaultCommand === "function");
assert(typeof PutAttributesCommand === "function");
assert(typeof PutClusterCapacityProvidersCommand === "function");
assert(typeof RegisterContainerInstanceCommand === "function");
assert(typeof RegisterTaskDefinitionCommand === "function");
assert(typeof RunTaskCommand === "function");
assert(typeof StartTaskCommand === "function");
assert(typeof StopServiceDeploymentCommand === "function");
assert(typeof StopTaskCommand === "function");
assert(typeof SubmitAttachmentStateChangesCommand === "function");
assert(typeof SubmitContainerStateChangeCommand === "function");
assert(typeof SubmitTaskStateChangeCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateCapacityProviderCommand === "function");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateClusterSettingsCommand === "function");
assert(typeof UpdateContainerAgentCommand === "function");
assert(typeof UpdateContainerInstancesStateCommand === "function");
assert(typeof UpdateExpressGatewayServiceCommand === "function");
assert(typeof UpdateServiceCommand === "function");
assert(typeof UpdateServicePrimaryTaskSetCommand === "function");
assert(typeof UpdateTaskProtectionCommand === "function");
assert(typeof UpdateTaskSetCommand === "function");
// enums
assert(typeof AcceleratorManufacturer === "object");
assert(typeof AcceleratorName === "object");
assert(typeof AcceleratorType === "object");
assert(typeof AccessType === "object");
assert(typeof AgentUpdateStatus === "object");
assert(typeof ApplicationProtocol === "object");
assert(typeof AssignPublicIp === "object");
assert(typeof AvailabilityZoneRebalancing === "object");
assert(typeof BareMetal === "object");
assert(typeof BurstablePerformance === "object");
assert(typeof CapacityProviderField === "object");
assert(typeof CapacityProviderStatus === "object");
assert(typeof CapacityProviderType === "object");
assert(typeof CapacityProviderUpdateStatus === "object");
assert(typeof ClusterField === "object");
assert(typeof ClusterSettingName === "object");
assert(typeof Compatibility === "object");
assert(typeof Connectivity === "object");
assert(typeof ContainerCondition === "object");
assert(typeof ContainerInstanceField === "object");
assert(typeof ContainerInstanceStatus === "object");
assert(typeof CPUArchitecture === "object");
assert(typeof CpuManufacturer === "object");
assert(typeof DeploymentControllerType === "object");
assert(typeof DeploymentLifecycleHookStage === "object");
assert(typeof DeploymentRolloutState === "object");
assert(typeof DeploymentStrategy === "object");
assert(typeof DesiredStatus === "object");
assert(typeof DeviceCgroupPermission === "object");
assert(typeof EBSResourceType === "object");
assert(typeof EFSAuthorizationConfigIAM === "object");
assert(typeof EFSTransitEncryption === "object");
assert(typeof EnvironmentFileType === "object");
assert(typeof ExecuteCommandLogging === "object");
assert(typeof ExpressGatewayServiceInclude === "object");
assert(typeof ExpressGatewayServiceScalingMetric === "object");
assert(typeof ExpressGatewayServiceStatusCode === "object");
assert(typeof FirelensConfigurationType === "object");
assert(typeof HealthStatus === "object");
assert(typeof InstanceGeneration === "object");
assert(typeof InstanceHealthCheckState === "object");
assert(typeof InstanceHealthCheckType === "object");
assert(typeof IpcMode === "object");
assert(typeof LaunchType === "object");
assert(typeof LocalStorage === "object");
assert(typeof LocalStorageType === "object");
assert(typeof LogDriver === "object");
assert(typeof ManagedAgentName === "object");
assert(typeof ManagedDraining === "object");
assert(typeof ManagedInstancesMonitoringOptions === "object");
assert(typeof ManagedResourceStatus === "object");
assert(typeof ManagedScalingStatus === "object");
assert(typeof ManagedTerminationProtection === "object");
assert(typeof NetworkMode === "object");
assert(typeof OSFamily === "object");
assert(typeof PidMode === "object");
assert(typeof PlacementConstraintType === "object");
assert(typeof PlacementStrategyType === "object");
assert(typeof PlatformDeviceType === "object");
assert(typeof PropagateMITags === "object");
assert(typeof PropagateTags === "object");
assert(typeof ProxyConfigurationType === "object");
assert(typeof ResourceManagementType === "object");
assert(typeof ResourceType === "object");
assert(typeof ScaleUnit === "object");
assert(typeof SchedulingStrategy === "object");
assert(typeof Scope === "object");
assert(typeof ServiceConnectAccessLoggingFormat === "object");
assert(typeof ServiceConnectIncludeQueryParameters === "object");
assert(typeof ServiceDeploymentLifecycleStage === "object");
assert(typeof ServiceDeploymentRollbackMonitorsStatus === "object");
assert(typeof ServiceDeploymentStatus === "object");
assert(typeof ServiceField === "object");
assert(typeof SettingName === "object");
assert(typeof SettingType === "object");
assert(typeof SortOrder === "object");
assert(typeof StabilityStatus === "object");
assert(typeof StopServiceDeploymentStopType === "object");
assert(typeof TargetType === "object");
assert(typeof TaskDefinitionFamilyStatus === "object");
assert(typeof TaskDefinitionField === "object");
assert(typeof TaskDefinitionPlacementConstraintType === "object");
assert(typeof TaskDefinitionStatus === "object");
assert(typeof TaskField === "object");
assert(typeof TaskFilesystemType === "object");
assert(typeof TaskSetField === "object");
assert(typeof TaskStopCode === "object");
assert(typeof TransportProtocol === "object");
assert(typeof UlimitName === "object");
assert(typeof VersionConsistency === "object");
// errors
assert(AccessDeniedException.prototype instanceof ECSServiceException);
assert(AttributeLimitExceededException.prototype instanceof ECSServiceException);
assert(BlockedException.prototype instanceof ECSServiceException);
assert(ClientException.prototype instanceof ECSServiceException);
assert(ClusterContainsCapacityProviderException.prototype instanceof ECSServiceException);
assert(ClusterContainsContainerInstancesException.prototype instanceof ECSServiceException);
assert(ClusterContainsServicesException.prototype instanceof ECSServiceException);
assert(ClusterContainsTasksException.prototype instanceof ECSServiceException);
assert(ClusterNotFoundException.prototype instanceof ECSServiceException);
assert(ConflictException.prototype instanceof ECSServiceException);
assert(InvalidParameterException.prototype instanceof ECSServiceException);
assert(LimitExceededException.prototype instanceof ECSServiceException);
assert(MissingVersionException.prototype instanceof ECSServiceException);
assert(NamespaceNotFoundException.prototype instanceof ECSServiceException);
assert(NoUpdateAvailableException.prototype instanceof ECSServiceException);
assert(PlatformTaskDefinitionIncompatibilityException.prototype instanceof ECSServiceException);
assert(PlatformUnknownException.prototype instanceof ECSServiceException);
assert(ResourceInUseException.prototype instanceof ECSServiceException);
assert(ResourceNotFoundException.prototype instanceof ECSServiceException);
assert(ServerException.prototype instanceof ECSServiceException);
assert(ServiceDeploymentNotFoundException.prototype instanceof ECSServiceException);
assert(ServiceNotActiveException.prototype instanceof ECSServiceException);
assert(ServiceNotFoundException.prototype instanceof ECSServiceException);
assert(TargetNotConnectedException.prototype instanceof ECSServiceException);
assert(TargetNotFoundException.prototype instanceof ECSServiceException);
assert(TaskSetNotFoundException.prototype instanceof ECSServiceException);
assert(UnsupportedFeatureException.prototype instanceof ECSServiceException);
assert(UpdateInProgressException.prototype instanceof ECSServiceException);
assert(ECSServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForServicesInactive === "function");
assert(typeof waitForServicesStable === "function");
assert(typeof waitForTasksRunning === "function");
assert(typeof waitForTasksStopped === "function");
assert(typeof waitUntilServicesInactive === "function");
assert(typeof waitUntilServicesStable === "function");
assert(typeof waitUntilTasksRunning === "function");
assert(typeof waitUntilTasksStopped === "function");
// paginators
assert(typeof paginateListAccountSettings === "function");
assert(typeof paginateListAttributes === "function");
assert(typeof paginateListClusters === "function");
assert(typeof paginateListContainerInstances === "function");
assert(typeof paginateListServices === "function");
assert(typeof paginateListServicesByNamespace === "function");
assert(typeof paginateListTaskDefinitionFamilies === "function");
assert(typeof paginateListTaskDefinitions === "function");
assert(typeof paginateListTasks === "function");
console.log(`ECS index test passed.`);
