import {
  AcceleratorCountRequest$,
  AcceleratorManufacturer,
  AcceleratorName,
  AcceleratorTotalMemoryMiBRequest$,
  AcceleratorType,
  AccessDeniedException,
  AccessDeniedException$,
  AccessType,
  AdvancedConfiguration$,
  AgentUpdateStatus,
  ApplicationProtocol,
  AssignPublicIp,
  Attachment$,
  AttachmentStateChange$,
  Attribute$,
  AttributeLimitExceededException,
  AttributeLimitExceededException$,
  AutoScalingGroupProvider$,
  AutoScalingGroupProviderUpdate$,
  AvailabilityZoneRebalancing,
  AwsVpcConfiguration$,
  BareMetal,
  BaselineEbsBandwidthMbpsRequest$,
  BlockedException,
  BlockedException$,
  BurstablePerformance,
  CanaryConfiguration$,
  CapacityOptionType,
  CapacityProvider$,
  CapacityProviderField,
  CapacityProviderStatus,
  CapacityProviderStrategyItem$,
  CapacityProviderType,
  CapacityProviderUpdateStatus,
  ClientException,
  ClientException$,
  Cluster$,
  ClusterConfiguration$,
  ClusterContainsCapacityProviderException,
  ClusterContainsCapacityProviderException$,
  ClusterContainsContainerInstancesException,
  ClusterContainsContainerInstancesException$,
  ClusterContainsServicesException,
  ClusterContainsServicesException$,
  ClusterContainsTasksException,
  ClusterContainsTasksException$,
  ClusterField,
  ClusterNotFoundException,
  ClusterNotFoundException$,
  ClusterServiceConnectDefaults$,
  ClusterServiceConnectDefaultsRequest$,
  ClusterSetting$,
  ClusterSettingName,
  Compatibility,
  ConflictException,
  ConflictException$,
  Connectivity,
  Container$,
  ContainerCondition,
  ContainerDefinition$,
  ContainerDependency$,
  ContainerImage$,
  ContainerInstance$,
  ContainerInstanceField,
  ContainerInstanceHealthStatus$,
  ContainerInstanceStatus,
  ContainerOverride$,
  ContainerRestartPolicy$,
  ContainerStateChange$,
  CPUArchitecture,
  CpuManufacturer,
  CreateCapacityProvider$,
  CreateCapacityProviderCommand,
  CreateCapacityProviderRequest$,
  CreateCapacityProviderResponse$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterRequest$,
  CreateClusterResponse$,
  CreatedAt$,
  CreateExpressGatewayService$,
  CreateExpressGatewayServiceCommand,
  CreateExpressGatewayServiceRequest$,
  CreateExpressGatewayServiceResponse$,
  CreateManagedInstancesProviderConfiguration$,
  CreateService$,
  CreateServiceCommand,
  CreateServiceRequest$,
  CreateServiceResponse$,
  CreateTaskSet$,
  CreateTaskSetCommand,
  CreateTaskSetRequest$,
  CreateTaskSetResponse$,
  DeleteAccountSetting$,
  DeleteAccountSettingCommand,
  DeleteAccountSettingRequest$,
  DeleteAccountSettingResponse$,
  DeleteAttributes$,
  DeleteAttributesCommand,
  DeleteAttributesRequest$,
  DeleteAttributesResponse$,
  DeleteCapacityProvider$,
  DeleteCapacityProviderCommand,
  DeleteCapacityProviderRequest$,
  DeleteCapacityProviderResponse$,
  DeleteCluster$,
  DeleteClusterCommand,
  DeleteClusterRequest$,
  DeleteClusterResponse$,
  DeleteExpressGatewayService$,
  DeleteExpressGatewayServiceCommand,
  DeleteExpressGatewayServiceRequest$,
  DeleteExpressGatewayServiceResponse$,
  DeleteService$,
  DeleteServiceCommand,
  DeleteServiceRequest$,
  DeleteServiceResponse$,
  DeleteTaskDefinitions$,
  DeleteTaskDefinitionsCommand,
  DeleteTaskDefinitionsRequest$,
  DeleteTaskDefinitionsResponse$,
  DeleteTaskSet$,
  DeleteTaskSetCommand,
  DeleteTaskSetRequest$,
  DeleteTaskSetResponse$,
  Deployment$,
  DeploymentAlarms$,
  DeploymentCircuitBreaker$,
  DeploymentConfiguration$,
  DeploymentController$,
  DeploymentControllerType,
  DeploymentEphemeralStorage$,
  DeploymentLifecycleHook$,
  DeploymentLifecycleHookStage,
  DeploymentRolloutState,
  DeploymentStrategy,
  DeregisterContainerInstance$,
  DeregisterContainerInstanceCommand,
  DeregisterContainerInstanceRequest$,
  DeregisterContainerInstanceResponse$,
  DeregisterTaskDefinition$,
  DeregisterTaskDefinitionCommand,
  DeregisterTaskDefinitionRequest$,
  DeregisterTaskDefinitionResponse$,
  DescribeCapacityProviders$,
  DescribeCapacityProvidersCommand,
  DescribeCapacityProvidersRequest$,
  DescribeCapacityProvidersResponse$,
  DescribeClusters$,
  DescribeClustersCommand,
  DescribeClustersRequest$,
  DescribeClustersResponse$,
  DescribeContainerInstances$,
  DescribeContainerInstancesCommand,
  DescribeContainerInstancesRequest$,
  DescribeContainerInstancesResponse$,
  DescribeExpressGatewayService$,
  DescribeExpressGatewayServiceCommand,
  DescribeExpressGatewayServiceRequest$,
  DescribeExpressGatewayServiceResponse$,
  DescribeServiceDeployments$,
  DescribeServiceDeploymentsCommand,
  DescribeServiceDeploymentsRequest$,
  DescribeServiceDeploymentsResponse$,
  DescribeServiceRevisions$,
  DescribeServiceRevisionsCommand,
  DescribeServiceRevisionsRequest$,
  DescribeServiceRevisionsResponse$,
  DescribeServices$,
  DescribeServicesCommand,
  DescribeServicesRequest$,
  DescribeServicesResponse$,
  DescribeTaskDefinition$,
  DescribeTaskDefinitionCommand,
  DescribeTaskDefinitionRequest$,
  DescribeTaskDefinitionResponse$,
  DescribeTasks$,
  DescribeTasksCommand,
  DescribeTaskSets$,
  DescribeTaskSetsCommand,
  DescribeTaskSetsRequest$,
  DescribeTaskSetsResponse$,
  DescribeTasksRequest$,
  DescribeTasksResponse$,
  DesiredStatus,
  Device$,
  DeviceCgroupPermission,
  DiscoverPollEndpoint$,
  DiscoverPollEndpointCommand,
  DiscoverPollEndpointRequest$,
  DiscoverPollEndpointResponse$,
  DockerVolumeConfiguration$,
  EBSResourceType,
  EBSTagSpecification$,
  ECS,
  ECSClient,
  ECSExpressGatewayService$,
  ECSManagedResources$,
  ECSServiceException,
  EFSAuthorizationConfig$,
  EFSAuthorizationConfigIAM,
  EFSTransitEncryption,
  EFSVolumeConfiguration$,
  EnvironmentFile$,
  EnvironmentFileType,
  EphemeralStorage$,
  ExecuteCommand$,
  ExecuteCommandCommand,
  ExecuteCommandConfiguration$,
  ExecuteCommandLogConfiguration$,
  ExecuteCommandLogging,
  ExecuteCommandRequest$,
  ExecuteCommandResponse$,
  ExpressGatewayContainer$,
  ExpressGatewayRepositoryCredentials$,
  ExpressGatewayScalingTarget$,
  ExpressGatewayServiceAwsLogsConfiguration$,
  ExpressGatewayServiceConfiguration$,
  ExpressGatewayServiceInclude,
  ExpressGatewayServiceNetworkConfiguration$,
  ExpressGatewayServiceScalingMetric,
  ExpressGatewayServiceStatus$,
  ExpressGatewayServiceStatusCode,
  Failure$,
  FirelensConfiguration$,
  FirelensConfigurationType,
  FSxWindowsFileServerAuthorizationConfig$,
  FSxWindowsFileServerVolumeConfiguration$,
  GetTaskProtection$,
  GetTaskProtectionCommand,
  GetTaskProtectionRequest$,
  GetTaskProtectionResponse$,
  HealthCheck$,
  HealthStatus,
  HostEntry$,
  HostVolumeProperties$,
  InferenceAccelerator$,
  InferenceAcceleratorOverride$,
  InfrastructureOptimization$,
  IngressPathSummary$,
  InstanceGeneration,
  InstanceHealthCheckResult$,
  InstanceHealthCheckState,
  InstanceHealthCheckType,
  InstanceLaunchTemplate$,
  InstanceLaunchTemplateUpdate$,
  InstanceRequirementsRequest$,
  InvalidParameterException,
  InvalidParameterException$,
  IpcMode,
  KernelCapabilities$,
  KeyValuePair$,
  LaunchType,
  LimitExceededException,
  LimitExceededException$,
  LinearConfiguration$,
  LinuxParameters$,
  ListAccountSettings$,
  ListAccountSettingsCommand,
  ListAccountSettingsRequest$,
  ListAccountSettingsResponse$,
  ListAttributes$,
  ListAttributesCommand,
  ListAttributesRequest$,
  ListAttributesResponse$,
  ListClusters$,
  ListClustersCommand,
  ListClustersRequest$,
  ListClustersResponse$,
  ListContainerInstances$,
  ListContainerInstancesCommand,
  ListContainerInstancesRequest$,
  ListContainerInstancesResponse$,
  ListServiceDeployments$,
  ListServiceDeploymentsCommand,
  ListServiceDeploymentsRequest$,
  ListServiceDeploymentsResponse$,
  ListServices$,
  ListServicesByNamespace$,
  ListServicesByNamespaceCommand,
  ListServicesByNamespaceRequest$,
  ListServicesByNamespaceResponse$,
  ListServicesCommand,
  ListServicesRequest$,
  ListServicesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTaskDefinitionFamilies$,
  ListTaskDefinitionFamiliesCommand,
  ListTaskDefinitionFamiliesRequest$,
  ListTaskDefinitionFamiliesResponse$,
  ListTaskDefinitions$,
  ListTaskDefinitionsCommand,
  ListTaskDefinitionsRequest$,
  ListTaskDefinitionsResponse$,
  ListTasks$,
  ListTasksCommand,
  ListTasksRequest$,
  ListTasksResponse$,
  LoadBalancer$,
  LocalStorage,
  LocalStorageType,
  LogConfiguration$,
  LogDriver,
  ManagedAgent$,
  ManagedAgentName,
  ManagedAgentStateChange$,
  ManagedApplicationAutoScalingPolicy$,
  ManagedAutoScaling$,
  ManagedCertificate$,
  ManagedDraining,
  ManagedIngressPath$,
  ManagedInstancesMonitoringOptions,
  ManagedInstancesNetworkConfiguration$,
  ManagedInstancesProvider$,
  ManagedInstancesStorageConfiguration$,
  ManagedListener$,
  ManagedListenerRule$,
  ManagedLoadBalancer$,
  ManagedLogGroup$,
  ManagedMetricAlarm$,
  ManagedResourceStatus,
  ManagedScalableTarget$,
  ManagedScaling$,
  ManagedScalingStatus,
  ManagedSecurityGroup$,
  ManagedStorageConfiguration$,
  ManagedTargetGroup$,
  ManagedTerminationProtection,
  MemoryGiBPerVCpuRequest$,
  MemoryMiBRequest$,
  MissingVersionException,
  MissingVersionException$,
  MountPoint$,
  NamespaceNotFoundException,
  NamespaceNotFoundException$,
  NetworkBandwidthGbpsRequest$,
  NetworkBinding$,
  NetworkConfiguration$,
  NetworkInterface$,
  NetworkInterfaceCountRequest$,
  NetworkMode,
  NoUpdateAvailableException,
  NoUpdateAvailableException$,
  OSFamily,
  paginateListAccountSettings,
  paginateListAttributes,
  paginateListClusters,
  paginateListContainerInstances,
  paginateListServices,
  paginateListServicesByNamespace,
  paginateListTaskDefinitionFamilies,
  paginateListTaskDefinitions,
  paginateListTasks,
  PidMode,
  PlacementConstraint$,
  PlacementConstraintType,
  PlacementStrategy$,
  PlacementStrategyType,
  PlatformDevice$,
  PlatformDeviceType,
  PlatformTaskDefinitionIncompatibilityException,
  PlatformTaskDefinitionIncompatibilityException$,
  PlatformUnknownException,
  PlatformUnknownException$,
  PortMapping$,
  PropagateMITags,
  PropagateTags,
  ProtectedTask$,
  ProxyConfiguration$,
  ProxyConfigurationType,
  PutAccountSetting$,
  PutAccountSettingCommand,
  PutAccountSettingDefault$,
  PutAccountSettingDefaultCommand,
  PutAccountSettingDefaultRequest$,
  PutAccountSettingDefaultResponse$,
  PutAccountSettingRequest$,
  PutAccountSettingResponse$,
  PutAttributes$,
  PutAttributesCommand,
  PutAttributesRequest$,
  PutAttributesResponse$,
  PutClusterCapacityProviders$,
  PutClusterCapacityProvidersCommand,
  PutClusterCapacityProvidersRequest$,
  PutClusterCapacityProvidersResponse$,
  RegisterContainerInstance$,
  RegisterContainerInstanceCommand,
  RegisterContainerInstanceRequest$,
  RegisterContainerInstanceResponse$,
  RegisterTaskDefinition$,
  RegisterTaskDefinitionCommand,
  RegisterTaskDefinitionRequest$,
  RegisterTaskDefinitionResponse$,
  RepositoryCredentials$,
  ResolvedConfiguration$,
  Resource$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceManagementType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceRequirement$,
  ResourceType,
  Rollback$,
  RunTask$,
  RunTaskCommand,
  RunTaskRequest$,
  RunTaskResponse$,
  RuntimePlatform$,
  Scale$,
  ScaleUnit,
  SchedulingStrategy,
  Scope,
  Secret$,
  ServerException,
  ServerException$,
  Service$,
  ServiceConnectAccessLogConfiguration$,
  ServiceConnectAccessLoggingFormat,
  ServiceConnectClientAlias$,
  ServiceConnectConfiguration$,
  ServiceConnectIncludeQueryParameters,
  ServiceConnectService$,
  ServiceConnectServiceResource$,
  ServiceConnectTestTrafficHeaderMatchRules$,
  ServiceConnectTestTrafficHeaderRules$,
  ServiceConnectTestTrafficRules$,
  ServiceConnectTlsCertificateAuthority$,
  ServiceConnectTlsConfiguration$,
  ServiceCurrentRevisionSummary$,
  ServiceDeployment$,
  ServiceDeploymentAlarms$,
  ServiceDeploymentBrief$,
  ServiceDeploymentCircuitBreaker$,
  ServiceDeploymentLifecycleStage,
  ServiceDeploymentNotFoundException,
  ServiceDeploymentNotFoundException$,
  ServiceDeploymentRollbackMonitorsStatus,
  ServiceDeploymentStatus,
  ServiceEvent$,
  ServiceField,
  ServiceManagedEBSVolumeConfiguration$,
  ServiceNotActiveException,
  ServiceNotActiveException$,
  ServiceNotFoundException,
  ServiceNotFoundException$,
  ServiceRegistry$,
  ServiceRevision$,
  ServiceRevisionLoadBalancer$,
  ServiceRevisionSummary$,
  ServiceVolumeConfiguration$,
  Session$,
  Setting$,
  SettingName,
  SettingType,
  SortOrder,
  StabilityStatus,
  StartTask$,
  StartTaskCommand,
  StartTaskRequest$,
  StartTaskResponse$,
  StopServiceDeployment$,
  StopServiceDeploymentCommand,
  StopServiceDeploymentRequest$,
  StopServiceDeploymentResponse$,
  StopServiceDeploymentStopType,
  StopTask$,
  StopTaskCommand,
  StopTaskRequest$,
  StopTaskResponse$,
  SubmitAttachmentStateChanges$,
  SubmitAttachmentStateChangesCommand,
  SubmitAttachmentStateChangesRequest$,
  SubmitAttachmentStateChangesResponse$,
  SubmitContainerStateChange$,
  SubmitContainerStateChangeCommand,
  SubmitContainerStateChangeRequest$,
  SubmitContainerStateChangeResponse$,
  SubmitTaskStateChange$,
  SubmitTaskStateChangeCommand,
  SubmitTaskStateChangeRequest$,
  SubmitTaskStateChangeResponse$,
  SystemControl$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetNotConnectedException,
  TargetNotConnectedException$,
  TargetNotFoundException,
  TargetNotFoundException$,
  TargetType,
  Task$,
  TaskDefinition$,
  TaskDefinitionFamilyStatus,
  TaskDefinitionField,
  TaskDefinitionPlacementConstraint$,
  TaskDefinitionPlacementConstraintType,
  TaskDefinitionStatus,
  TaskEphemeralStorage$,
  TaskField,
  TaskFilesystemType,
  TaskManagedEBSVolumeConfiguration$,
  TaskManagedEBSVolumeTerminationPolicy$,
  TaskOverride$,
  TaskSet$,
  TaskSetField,
  TaskSetNotFoundException,
  TaskSetNotFoundException$,
  TaskStopCode,
  TaskVolumeConfiguration$,
  TimeoutConfiguration$,
  Tmpfs$,
  TotalLocalStorageGBRequest$,
  TransportProtocol,
  Ulimit$,
  UlimitName,
  UnsupportedFeatureException,
  UnsupportedFeatureException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateCapacityProvider$,
  UpdateCapacityProviderCommand,
  UpdateCapacityProviderRequest$,
  UpdateCapacityProviderResponse$,
  UpdateCluster$,
  UpdateClusterCommand,
  UpdateClusterRequest$,
  UpdateClusterResponse$,
  UpdateClusterSettings$,
  UpdateClusterSettingsCommand,
  UpdateClusterSettingsRequest$,
  UpdateClusterSettingsResponse$,
  UpdateContainerAgent$,
  UpdateContainerAgentCommand,
  UpdateContainerAgentRequest$,
  UpdateContainerAgentResponse$,
  UpdateContainerInstancesState$,
  UpdateContainerInstancesStateCommand,
  UpdateContainerInstancesStateRequest$,
  UpdateContainerInstancesStateResponse$,
  UpdatedExpressGatewayService$,
  UpdateExpressGatewayService$,
  UpdateExpressGatewayServiceCommand,
  UpdateExpressGatewayServiceRequest$,
  UpdateExpressGatewayServiceResponse$,
  UpdateInProgressException,
  UpdateInProgressException$,
  UpdateManagedInstancesProviderConfiguration$,
  UpdateService$,
  UpdateServiceCommand,
  UpdateServicePrimaryTaskSet$,
  UpdateServicePrimaryTaskSetCommand,
  UpdateServicePrimaryTaskSetRequest$,
  UpdateServicePrimaryTaskSetResponse$,
  UpdateServiceRequest$,
  UpdateServiceResponse$,
  UpdateTaskProtection$,
  UpdateTaskProtectionCommand,
  UpdateTaskProtectionRequest$,
  UpdateTaskProtectionResponse$,
  UpdateTaskSet$,
  UpdateTaskSetCommand,
  UpdateTaskSetRequest$,
  UpdateTaskSetResponse$,
  VCpuCountRangeRequest$,
  VersionConsistency,
  VersionInfo$,
  Volume$,
  VolumeFrom$,
  VpcLatticeConfiguration$,
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
assert(typeof CreateCapacityProvider$ === "object");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateCluster$ === "object");
assert(typeof CreateExpressGatewayServiceCommand === "function");
assert(typeof CreateExpressGatewayService$ === "object");
assert(typeof CreateServiceCommand === "function");
assert(typeof CreateService$ === "object");
assert(typeof CreateTaskSetCommand === "function");
assert(typeof CreateTaskSet$ === "object");
assert(typeof DeleteAccountSettingCommand === "function");
assert(typeof DeleteAccountSetting$ === "object");
assert(typeof DeleteAttributesCommand === "function");
assert(typeof DeleteAttributes$ === "object");
assert(typeof DeleteCapacityProviderCommand === "function");
assert(typeof DeleteCapacityProvider$ === "object");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteCluster$ === "object");
assert(typeof DeleteExpressGatewayServiceCommand === "function");
assert(typeof DeleteExpressGatewayService$ === "object");
assert(typeof DeleteServiceCommand === "function");
assert(typeof DeleteService$ === "object");
assert(typeof DeleteTaskDefinitionsCommand === "function");
assert(typeof DeleteTaskDefinitions$ === "object");
assert(typeof DeleteTaskSetCommand === "function");
assert(typeof DeleteTaskSet$ === "object");
assert(typeof DeregisterContainerInstanceCommand === "function");
assert(typeof DeregisterContainerInstance$ === "object");
assert(typeof DeregisterTaskDefinitionCommand === "function");
assert(typeof DeregisterTaskDefinition$ === "object");
assert(typeof DescribeCapacityProvidersCommand === "function");
assert(typeof DescribeCapacityProviders$ === "object");
assert(typeof DescribeClustersCommand === "function");
assert(typeof DescribeClusters$ === "object");
assert(typeof DescribeContainerInstancesCommand === "function");
assert(typeof DescribeContainerInstances$ === "object");
assert(typeof DescribeExpressGatewayServiceCommand === "function");
assert(typeof DescribeExpressGatewayService$ === "object");
assert(typeof DescribeServiceDeploymentsCommand === "function");
assert(typeof DescribeServiceDeployments$ === "object");
assert(typeof DescribeServiceRevisionsCommand === "function");
assert(typeof DescribeServiceRevisions$ === "object");
assert(typeof DescribeServicesCommand === "function");
assert(typeof DescribeServices$ === "object");
assert(typeof DescribeTaskDefinitionCommand === "function");
assert(typeof DescribeTaskDefinition$ === "object");
assert(typeof DescribeTasksCommand === "function");
assert(typeof DescribeTasks$ === "object");
assert(typeof DescribeTaskSetsCommand === "function");
assert(typeof DescribeTaskSets$ === "object");
assert(typeof DiscoverPollEndpointCommand === "function");
assert(typeof DiscoverPollEndpoint$ === "object");
assert(typeof ExecuteCommandCommand === "function");
assert(typeof ExecuteCommand$ === "object");
assert(typeof GetTaskProtectionCommand === "function");
assert(typeof GetTaskProtection$ === "object");
assert(typeof ListAccountSettingsCommand === "function");
assert(typeof ListAccountSettings$ === "object");
assert(typeof ListAttributesCommand === "function");
assert(typeof ListAttributes$ === "object");
assert(typeof ListClustersCommand === "function");
assert(typeof ListClusters$ === "object");
assert(typeof ListContainerInstancesCommand === "function");
assert(typeof ListContainerInstances$ === "object");
assert(typeof ListServiceDeploymentsCommand === "function");
assert(typeof ListServiceDeployments$ === "object");
assert(typeof ListServicesCommand === "function");
assert(typeof ListServices$ === "object");
assert(typeof ListServicesByNamespaceCommand === "function");
assert(typeof ListServicesByNamespace$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTaskDefinitionFamiliesCommand === "function");
assert(typeof ListTaskDefinitionFamilies$ === "object");
assert(typeof ListTaskDefinitionsCommand === "function");
assert(typeof ListTaskDefinitions$ === "object");
assert(typeof ListTasksCommand === "function");
assert(typeof ListTasks$ === "object");
assert(typeof PutAccountSettingCommand === "function");
assert(typeof PutAccountSetting$ === "object");
assert(typeof PutAccountSettingDefaultCommand === "function");
assert(typeof PutAccountSettingDefault$ === "object");
assert(typeof PutAttributesCommand === "function");
assert(typeof PutAttributes$ === "object");
assert(typeof PutClusterCapacityProvidersCommand === "function");
assert(typeof PutClusterCapacityProviders$ === "object");
assert(typeof RegisterContainerInstanceCommand === "function");
assert(typeof RegisterContainerInstance$ === "object");
assert(typeof RegisterTaskDefinitionCommand === "function");
assert(typeof RegisterTaskDefinition$ === "object");
assert(typeof RunTaskCommand === "function");
assert(typeof RunTask$ === "object");
assert(typeof StartTaskCommand === "function");
assert(typeof StartTask$ === "object");
assert(typeof StopServiceDeploymentCommand === "function");
assert(typeof StopServiceDeployment$ === "object");
assert(typeof StopTaskCommand === "function");
assert(typeof StopTask$ === "object");
assert(typeof SubmitAttachmentStateChangesCommand === "function");
assert(typeof SubmitAttachmentStateChanges$ === "object");
assert(typeof SubmitContainerStateChangeCommand === "function");
assert(typeof SubmitContainerStateChange$ === "object");
assert(typeof SubmitTaskStateChangeCommand === "function");
assert(typeof SubmitTaskStateChange$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCapacityProviderCommand === "function");
assert(typeof UpdateCapacityProvider$ === "object");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateCluster$ === "object");
assert(typeof UpdateClusterSettingsCommand === "function");
assert(typeof UpdateClusterSettings$ === "object");
assert(typeof UpdateContainerAgentCommand === "function");
assert(typeof UpdateContainerAgent$ === "object");
assert(typeof UpdateContainerInstancesStateCommand === "function");
assert(typeof UpdateContainerInstancesState$ === "object");
assert(typeof UpdateExpressGatewayServiceCommand === "function");
assert(typeof UpdateExpressGatewayService$ === "object");
assert(typeof UpdateServiceCommand === "function");
assert(typeof UpdateService$ === "object");
assert(typeof UpdateServicePrimaryTaskSetCommand === "function");
assert(typeof UpdateServicePrimaryTaskSet$ === "object");
assert(typeof UpdateTaskProtectionCommand === "function");
assert(typeof UpdateTaskProtection$ === "object");
assert(typeof UpdateTaskSetCommand === "function");
assert(typeof UpdateTaskSet$ === "object");
// structural schemas
assert(typeof AcceleratorCountRequest$ === "object");
assert(typeof AcceleratorTotalMemoryMiBRequest$ === "object");
assert(typeof AdvancedConfiguration$ === "object");
assert(typeof Attachment$ === "object");
assert(typeof AttachmentStateChange$ === "object");
assert(typeof Attribute$ === "object");
assert(typeof AutoScalingGroupProvider$ === "object");
assert(typeof AutoScalingGroupProviderUpdate$ === "object");
assert(typeof AwsVpcConfiguration$ === "object");
assert(typeof BaselineEbsBandwidthMbpsRequest$ === "object");
assert(typeof CanaryConfiguration$ === "object");
assert(typeof CapacityProvider$ === "object");
assert(typeof CapacityProviderStrategyItem$ === "object");
assert(typeof Cluster$ === "object");
assert(typeof ClusterConfiguration$ === "object");
assert(typeof ClusterServiceConnectDefaults$ === "object");
assert(typeof ClusterServiceConnectDefaultsRequest$ === "object");
assert(typeof ClusterSetting$ === "object");
assert(typeof Container$ === "object");
assert(typeof ContainerDefinition$ === "object");
assert(typeof ContainerDependency$ === "object");
assert(typeof ContainerImage$ === "object");
assert(typeof ContainerInstance$ === "object");
assert(typeof ContainerInstanceHealthStatus$ === "object");
assert(typeof ContainerOverride$ === "object");
assert(typeof ContainerRestartPolicy$ === "object");
assert(typeof ContainerStateChange$ === "object");
assert(typeof CreateCapacityProviderRequest$ === "object");
assert(typeof CreateCapacityProviderResponse$ === "object");
assert(typeof CreateClusterRequest$ === "object");
assert(typeof CreateClusterResponse$ === "object");
assert(typeof CreatedAt$ === "object");
assert(typeof CreateExpressGatewayServiceRequest$ === "object");
assert(typeof CreateExpressGatewayServiceResponse$ === "object");
assert(typeof CreateManagedInstancesProviderConfiguration$ === "object");
assert(typeof CreateServiceRequest$ === "object");
assert(typeof CreateServiceResponse$ === "object");
assert(typeof CreateTaskSetRequest$ === "object");
assert(typeof CreateTaskSetResponse$ === "object");
assert(typeof DeleteAccountSettingRequest$ === "object");
assert(typeof DeleteAccountSettingResponse$ === "object");
assert(typeof DeleteAttributesRequest$ === "object");
assert(typeof DeleteAttributesResponse$ === "object");
assert(typeof DeleteCapacityProviderRequest$ === "object");
assert(typeof DeleteCapacityProviderResponse$ === "object");
assert(typeof DeleteClusterRequest$ === "object");
assert(typeof DeleteClusterResponse$ === "object");
assert(typeof DeleteExpressGatewayServiceRequest$ === "object");
assert(typeof DeleteExpressGatewayServiceResponse$ === "object");
assert(typeof DeleteServiceRequest$ === "object");
assert(typeof DeleteServiceResponse$ === "object");
assert(typeof DeleteTaskDefinitionsRequest$ === "object");
assert(typeof DeleteTaskDefinitionsResponse$ === "object");
assert(typeof DeleteTaskSetRequest$ === "object");
assert(typeof DeleteTaskSetResponse$ === "object");
assert(typeof Deployment$ === "object");
assert(typeof DeploymentAlarms$ === "object");
assert(typeof DeploymentCircuitBreaker$ === "object");
assert(typeof DeploymentConfiguration$ === "object");
assert(typeof DeploymentController$ === "object");
assert(typeof DeploymentEphemeralStorage$ === "object");
assert(typeof DeploymentLifecycleHook$ === "object");
assert(typeof DeregisterContainerInstanceRequest$ === "object");
assert(typeof DeregisterContainerInstanceResponse$ === "object");
assert(typeof DeregisterTaskDefinitionRequest$ === "object");
assert(typeof DeregisterTaskDefinitionResponse$ === "object");
assert(typeof DescribeCapacityProvidersRequest$ === "object");
assert(typeof DescribeCapacityProvidersResponse$ === "object");
assert(typeof DescribeClustersRequest$ === "object");
assert(typeof DescribeClustersResponse$ === "object");
assert(typeof DescribeContainerInstancesRequest$ === "object");
assert(typeof DescribeContainerInstancesResponse$ === "object");
assert(typeof DescribeExpressGatewayServiceRequest$ === "object");
assert(typeof DescribeExpressGatewayServiceResponse$ === "object");
assert(typeof DescribeServiceDeploymentsRequest$ === "object");
assert(typeof DescribeServiceDeploymentsResponse$ === "object");
assert(typeof DescribeServiceRevisionsRequest$ === "object");
assert(typeof DescribeServiceRevisionsResponse$ === "object");
assert(typeof DescribeServicesRequest$ === "object");
assert(typeof DescribeServicesResponse$ === "object");
assert(typeof DescribeTaskDefinitionRequest$ === "object");
assert(typeof DescribeTaskDefinitionResponse$ === "object");
assert(typeof DescribeTaskSetsRequest$ === "object");
assert(typeof DescribeTaskSetsResponse$ === "object");
assert(typeof DescribeTasksRequest$ === "object");
assert(typeof DescribeTasksResponse$ === "object");
assert(typeof Device$ === "object");
assert(typeof DiscoverPollEndpointRequest$ === "object");
assert(typeof DiscoverPollEndpointResponse$ === "object");
assert(typeof DockerVolumeConfiguration$ === "object");
assert(typeof EBSTagSpecification$ === "object");
assert(typeof ECSExpressGatewayService$ === "object");
assert(typeof ECSManagedResources$ === "object");
assert(typeof EFSAuthorizationConfig$ === "object");
assert(typeof EFSVolumeConfiguration$ === "object");
assert(typeof EnvironmentFile$ === "object");
assert(typeof EphemeralStorage$ === "object");
assert(typeof ExecuteCommandConfiguration$ === "object");
assert(typeof ExecuteCommandLogConfiguration$ === "object");
assert(typeof ExecuteCommandRequest$ === "object");
assert(typeof ExecuteCommandResponse$ === "object");
assert(typeof ExpressGatewayContainer$ === "object");
assert(typeof ExpressGatewayRepositoryCredentials$ === "object");
assert(typeof ExpressGatewayScalingTarget$ === "object");
assert(typeof ExpressGatewayServiceAwsLogsConfiguration$ === "object");
assert(typeof ExpressGatewayServiceConfiguration$ === "object");
assert(typeof ExpressGatewayServiceNetworkConfiguration$ === "object");
assert(typeof ExpressGatewayServiceStatus$ === "object");
assert(typeof Failure$ === "object");
assert(typeof FirelensConfiguration$ === "object");
assert(typeof FSxWindowsFileServerAuthorizationConfig$ === "object");
assert(typeof FSxWindowsFileServerVolumeConfiguration$ === "object");
assert(typeof GetTaskProtectionRequest$ === "object");
assert(typeof GetTaskProtectionResponse$ === "object");
assert(typeof HealthCheck$ === "object");
assert(typeof HostEntry$ === "object");
assert(typeof HostVolumeProperties$ === "object");
assert(typeof InferenceAccelerator$ === "object");
assert(typeof InferenceAcceleratorOverride$ === "object");
assert(typeof InfrastructureOptimization$ === "object");
assert(typeof IngressPathSummary$ === "object");
assert(typeof InstanceHealthCheckResult$ === "object");
assert(typeof InstanceLaunchTemplate$ === "object");
assert(typeof InstanceLaunchTemplateUpdate$ === "object");
assert(typeof InstanceRequirementsRequest$ === "object");
assert(typeof KernelCapabilities$ === "object");
assert(typeof KeyValuePair$ === "object");
assert(typeof LinearConfiguration$ === "object");
assert(typeof LinuxParameters$ === "object");
assert(typeof ListAccountSettingsRequest$ === "object");
assert(typeof ListAccountSettingsResponse$ === "object");
assert(typeof ListAttributesRequest$ === "object");
assert(typeof ListAttributesResponse$ === "object");
assert(typeof ListClustersRequest$ === "object");
assert(typeof ListClustersResponse$ === "object");
assert(typeof ListContainerInstancesRequest$ === "object");
assert(typeof ListContainerInstancesResponse$ === "object");
assert(typeof ListServiceDeploymentsRequest$ === "object");
assert(typeof ListServiceDeploymentsResponse$ === "object");
assert(typeof ListServicesByNamespaceRequest$ === "object");
assert(typeof ListServicesByNamespaceResponse$ === "object");
assert(typeof ListServicesRequest$ === "object");
assert(typeof ListServicesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTaskDefinitionFamiliesRequest$ === "object");
assert(typeof ListTaskDefinitionFamiliesResponse$ === "object");
assert(typeof ListTaskDefinitionsRequest$ === "object");
assert(typeof ListTaskDefinitionsResponse$ === "object");
assert(typeof ListTasksRequest$ === "object");
assert(typeof ListTasksResponse$ === "object");
assert(typeof LoadBalancer$ === "object");
assert(typeof LogConfiguration$ === "object");
assert(typeof ManagedAgent$ === "object");
assert(typeof ManagedAgentStateChange$ === "object");
assert(typeof ManagedApplicationAutoScalingPolicy$ === "object");
assert(typeof ManagedAutoScaling$ === "object");
assert(typeof ManagedCertificate$ === "object");
assert(typeof ManagedIngressPath$ === "object");
assert(typeof ManagedInstancesNetworkConfiguration$ === "object");
assert(typeof ManagedInstancesProvider$ === "object");
assert(typeof ManagedInstancesStorageConfiguration$ === "object");
assert(typeof ManagedListener$ === "object");
assert(typeof ManagedListenerRule$ === "object");
assert(typeof ManagedLoadBalancer$ === "object");
assert(typeof ManagedLogGroup$ === "object");
assert(typeof ManagedMetricAlarm$ === "object");
assert(typeof ManagedScalableTarget$ === "object");
assert(typeof ManagedScaling$ === "object");
assert(typeof ManagedSecurityGroup$ === "object");
assert(typeof ManagedStorageConfiguration$ === "object");
assert(typeof ManagedTargetGroup$ === "object");
assert(typeof MemoryGiBPerVCpuRequest$ === "object");
assert(typeof MemoryMiBRequest$ === "object");
assert(typeof MountPoint$ === "object");
assert(typeof NetworkBandwidthGbpsRequest$ === "object");
assert(typeof NetworkBinding$ === "object");
assert(typeof NetworkConfiguration$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof NetworkInterfaceCountRequest$ === "object");
assert(typeof PlacementConstraint$ === "object");
assert(typeof PlacementStrategy$ === "object");
assert(typeof PlatformDevice$ === "object");
assert(typeof PortMapping$ === "object");
assert(typeof ProtectedTask$ === "object");
assert(typeof ProxyConfiguration$ === "object");
assert(typeof PutAccountSettingDefaultRequest$ === "object");
assert(typeof PutAccountSettingDefaultResponse$ === "object");
assert(typeof PutAccountSettingRequest$ === "object");
assert(typeof PutAccountSettingResponse$ === "object");
assert(typeof PutAttributesRequest$ === "object");
assert(typeof PutAttributesResponse$ === "object");
assert(typeof PutClusterCapacityProvidersRequest$ === "object");
assert(typeof PutClusterCapacityProvidersResponse$ === "object");
assert(typeof RegisterContainerInstanceRequest$ === "object");
assert(typeof RegisterContainerInstanceResponse$ === "object");
assert(typeof RegisterTaskDefinitionRequest$ === "object");
assert(typeof RegisterTaskDefinitionResponse$ === "object");
assert(typeof RepositoryCredentials$ === "object");
assert(typeof ResolvedConfiguration$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceRequirement$ === "object");
assert(typeof Rollback$ === "object");
assert(typeof RunTaskRequest$ === "object");
assert(typeof RunTaskResponse$ === "object");
assert(typeof RuntimePlatform$ === "object");
assert(typeof Scale$ === "object");
assert(typeof Secret$ === "object");
assert(typeof Service$ === "object");
assert(typeof ServiceConnectAccessLogConfiguration$ === "object");
assert(typeof ServiceConnectClientAlias$ === "object");
assert(typeof ServiceConnectConfiguration$ === "object");
assert(typeof ServiceConnectService$ === "object");
assert(typeof ServiceConnectServiceResource$ === "object");
assert(typeof ServiceConnectTestTrafficHeaderMatchRules$ === "object");
assert(typeof ServiceConnectTestTrafficHeaderRules$ === "object");
assert(typeof ServiceConnectTestTrafficRules$ === "object");
assert(typeof ServiceConnectTlsCertificateAuthority$ === "object");
assert(typeof ServiceConnectTlsConfiguration$ === "object");
assert(typeof ServiceCurrentRevisionSummary$ === "object");
assert(typeof ServiceDeployment$ === "object");
assert(typeof ServiceDeploymentAlarms$ === "object");
assert(typeof ServiceDeploymentBrief$ === "object");
assert(typeof ServiceDeploymentCircuitBreaker$ === "object");
assert(typeof ServiceEvent$ === "object");
assert(typeof ServiceManagedEBSVolumeConfiguration$ === "object");
assert(typeof ServiceRegistry$ === "object");
assert(typeof ServiceRevision$ === "object");
assert(typeof ServiceRevisionLoadBalancer$ === "object");
assert(typeof ServiceRevisionSummary$ === "object");
assert(typeof ServiceVolumeConfiguration$ === "object");
assert(typeof Session$ === "object");
assert(typeof Setting$ === "object");
assert(typeof StartTaskRequest$ === "object");
assert(typeof StartTaskResponse$ === "object");
assert(typeof StopServiceDeploymentRequest$ === "object");
assert(typeof StopServiceDeploymentResponse$ === "object");
assert(typeof StopTaskRequest$ === "object");
assert(typeof StopTaskResponse$ === "object");
assert(typeof SubmitAttachmentStateChangesRequest$ === "object");
assert(typeof SubmitAttachmentStateChangesResponse$ === "object");
assert(typeof SubmitContainerStateChangeRequest$ === "object");
assert(typeof SubmitContainerStateChangeResponse$ === "object");
assert(typeof SubmitTaskStateChangeRequest$ === "object");
assert(typeof SubmitTaskStateChangeResponse$ === "object");
assert(typeof SystemControl$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Task$ === "object");
assert(typeof TaskDefinition$ === "object");
assert(typeof TaskDefinitionPlacementConstraint$ === "object");
assert(typeof TaskEphemeralStorage$ === "object");
assert(typeof TaskManagedEBSVolumeConfiguration$ === "object");
assert(typeof TaskManagedEBSVolumeTerminationPolicy$ === "object");
assert(typeof TaskOverride$ === "object");
assert(typeof TaskSet$ === "object");
assert(typeof TaskVolumeConfiguration$ === "object");
assert(typeof TimeoutConfiguration$ === "object");
assert(typeof Tmpfs$ === "object");
assert(typeof TotalLocalStorageGBRequest$ === "object");
assert(typeof Ulimit$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateCapacityProviderRequest$ === "object");
assert(typeof UpdateCapacityProviderResponse$ === "object");
assert(typeof UpdateClusterRequest$ === "object");
assert(typeof UpdateClusterResponse$ === "object");
assert(typeof UpdateClusterSettingsRequest$ === "object");
assert(typeof UpdateClusterSettingsResponse$ === "object");
assert(typeof UpdateContainerAgentRequest$ === "object");
assert(typeof UpdateContainerAgentResponse$ === "object");
assert(typeof UpdateContainerInstancesStateRequest$ === "object");
assert(typeof UpdateContainerInstancesStateResponse$ === "object");
assert(typeof UpdatedExpressGatewayService$ === "object");
assert(typeof UpdateExpressGatewayServiceRequest$ === "object");
assert(typeof UpdateExpressGatewayServiceResponse$ === "object");
assert(typeof UpdateManagedInstancesProviderConfiguration$ === "object");
assert(typeof UpdateServicePrimaryTaskSetRequest$ === "object");
assert(typeof UpdateServicePrimaryTaskSetResponse$ === "object");
assert(typeof UpdateServiceRequest$ === "object");
assert(typeof UpdateServiceResponse$ === "object");
assert(typeof UpdateTaskProtectionRequest$ === "object");
assert(typeof UpdateTaskProtectionResponse$ === "object");
assert(typeof UpdateTaskSetRequest$ === "object");
assert(typeof UpdateTaskSetResponse$ === "object");
assert(typeof VCpuCountRangeRequest$ === "object");
assert(typeof VersionInfo$ === "object");
assert(typeof Volume$ === "object");
assert(typeof VolumeFrom$ === "object");
assert(typeof VpcLatticeConfiguration$ === "object");
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
assert(typeof CapacityOptionType === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(AttributeLimitExceededException.prototype instanceof ECSServiceException);
assert(typeof AttributeLimitExceededException$ === "object");
assert(BlockedException.prototype instanceof ECSServiceException);
assert(typeof BlockedException$ === "object");
assert(ClientException.prototype instanceof ECSServiceException);
assert(typeof ClientException$ === "object");
assert(ClusterContainsCapacityProviderException.prototype instanceof ECSServiceException);
assert(typeof ClusterContainsCapacityProviderException$ === "object");
assert(ClusterContainsContainerInstancesException.prototype instanceof ECSServiceException);
assert(typeof ClusterContainsContainerInstancesException$ === "object");
assert(ClusterContainsServicesException.prototype instanceof ECSServiceException);
assert(typeof ClusterContainsServicesException$ === "object");
assert(ClusterContainsTasksException.prototype instanceof ECSServiceException);
assert(typeof ClusterContainsTasksException$ === "object");
assert(ClusterNotFoundException.prototype instanceof ECSServiceException);
assert(typeof ClusterNotFoundException$ === "object");
assert(ConflictException.prototype instanceof ECSServiceException);
assert(typeof ConflictException$ === "object");
assert(InvalidParameterException.prototype instanceof ECSServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(LimitExceededException.prototype instanceof ECSServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MissingVersionException.prototype instanceof ECSServiceException);
assert(typeof MissingVersionException$ === "object");
assert(NamespaceNotFoundException.prototype instanceof ECSServiceException);
assert(typeof NamespaceNotFoundException$ === "object");
assert(NoUpdateAvailableException.prototype instanceof ECSServiceException);
assert(typeof NoUpdateAvailableException$ === "object");
assert(PlatformTaskDefinitionIncompatibilityException.prototype instanceof ECSServiceException);
assert(typeof PlatformTaskDefinitionIncompatibilityException$ === "object");
assert(PlatformUnknownException.prototype instanceof ECSServiceException);
assert(typeof PlatformUnknownException$ === "object");
assert(ResourceInUseException.prototype instanceof ECSServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ECSServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServerException.prototype instanceof ECSServiceException);
assert(typeof ServerException$ === "object");
assert(ServiceDeploymentNotFoundException.prototype instanceof ECSServiceException);
assert(typeof ServiceDeploymentNotFoundException$ === "object");
assert(ServiceNotActiveException.prototype instanceof ECSServiceException);
assert(typeof ServiceNotActiveException$ === "object");
assert(ServiceNotFoundException.prototype instanceof ECSServiceException);
assert(typeof ServiceNotFoundException$ === "object");
assert(TargetNotConnectedException.prototype instanceof ECSServiceException);
assert(typeof TargetNotConnectedException$ === "object");
assert(TargetNotFoundException.prototype instanceof ECSServiceException);
assert(typeof TargetNotFoundException$ === "object");
assert(TaskSetNotFoundException.prototype instanceof ECSServiceException);
assert(typeof TaskSetNotFoundException$ === "object");
assert(UnsupportedFeatureException.prototype instanceof ECSServiceException);
assert(typeof UnsupportedFeatureException$ === "object");
assert(UpdateInProgressException.prototype instanceof ECSServiceException);
assert(typeof UpdateInProgressException$ === "object");
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
