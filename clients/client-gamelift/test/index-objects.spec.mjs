import {
  AcceptMatchCommand,
  AcceptanceType,
  BackfillMode,
  BalancingStrategy,
  BuildStatus,
  CertificateType,
  ClaimGameServerCommand,
  ComparisonOperatorType,
  ComputeStatus,
  ComputeType,
  ConflictException,
  ContainerDependencyCondition,
  ContainerFleetBillingType,
  ContainerFleetLocationStatus,
  ContainerFleetRemoveAttribute,
  ContainerFleetStatus,
  ContainerGroupDefinitionStatus,
  ContainerGroupType,
  ContainerMountPointAccessLevel,
  ContainerOperatingSystem,
  CreateAliasCommand,
  CreateBuildCommand,
  CreateContainerFleetCommand,
  CreateContainerGroupDefinitionCommand,
  CreateFleetCommand,
  CreateFleetLocationsCommand,
  CreateGameServerGroupCommand,
  CreateGameSessionCommand,
  CreateGameSessionQueueCommand,
  CreateLocationCommand,
  CreateMatchmakingConfigurationCommand,
  CreateMatchmakingRuleSetCommand,
  CreatePlayerSessionCommand,
  CreatePlayerSessionsCommand,
  CreateScriptCommand,
  CreateVpcPeeringAuthorizationCommand,
  CreateVpcPeeringConnectionCommand,
  DeleteAliasCommand,
  DeleteBuildCommand,
  DeleteContainerFleetCommand,
  DeleteContainerGroupDefinitionCommand,
  DeleteFleetCommand,
  DeleteFleetLocationsCommand,
  DeleteGameServerGroupCommand,
  DeleteGameSessionQueueCommand,
  DeleteLocationCommand,
  DeleteMatchmakingConfigurationCommand,
  DeleteMatchmakingRuleSetCommand,
  DeleteScalingPolicyCommand,
  DeleteScriptCommand,
  DeleteVpcPeeringAuthorizationCommand,
  DeleteVpcPeeringConnectionCommand,
  DeploymentImpairmentStrategy,
  DeploymentProtectionStrategy,
  DeploymentStatus,
  DeregisterComputeCommand,
  DeregisterGameServerCommand,
  DescribeAliasCommand,
  DescribeBuildCommand,
  DescribeComputeCommand,
  DescribeContainerFleetCommand,
  DescribeContainerGroupDefinitionCommand,
  DescribeEC2InstanceLimitsCommand,
  DescribeFleetAttributesCommand,
  DescribeFleetCapacityCommand,
  DescribeFleetDeploymentCommand,
  DescribeFleetEventsCommand,
  DescribeFleetLocationAttributesCommand,
  DescribeFleetLocationCapacityCommand,
  DescribeFleetLocationUtilizationCommand,
  DescribeFleetPortSettingsCommand,
  DescribeFleetUtilizationCommand,
  DescribeGameServerCommand,
  DescribeGameServerGroupCommand,
  DescribeGameServerInstancesCommand,
  DescribeGameSessionDetailsCommand,
  DescribeGameSessionPlacementCommand,
  DescribeGameSessionQueuesCommand,
  DescribeGameSessionsCommand,
  DescribeInstancesCommand,
  DescribeMatchmakingCommand,
  DescribeMatchmakingConfigurationsCommand,
  DescribeMatchmakingRuleSetsCommand,
  DescribePlayerSessionsCommand,
  DescribeRuntimeConfigurationCommand,
  DescribeScalingPoliciesCommand,
  DescribeScriptCommand,
  DescribeVpcPeeringAuthorizationsCommand,
  DescribeVpcPeeringConnectionsCommand,
  EC2InstanceType,
  EventCode,
  FilterInstanceStatus,
  FleetAction,
  FleetCapacityExceededException,
  FleetStatus,
  FleetType,
  FlexMatchMode,
  GameLift,
  GameLiftClient,
  GameLiftServiceException,
  GameServerClaimStatus,
  GameServerGroupAction,
  GameServerGroupDeleteOption,
  GameServerGroupInstanceType,
  GameServerGroupStatus,
  GameServerHealthCheck,
  GameServerInstanceStatus,
  GameServerProtectionPolicy,
  GameServerUtilizationStatus,
  GameSessionFullException,
  GameSessionPlacementState,
  GameSessionStatus,
  GameSessionStatusReason,
  GetComputeAccessCommand,
  GetComputeAuthTokenCommand,
  GetGameSessionLogUrlCommand,
  GetInstanceAccessCommand,
  IdempotentParameterMismatchException,
  InstanceRoleCredentialsProvider,
  InstanceStatus,
  InternalServiceException,
  InvalidFleetStatusException,
  InvalidGameSessionStatusException,
  InvalidRequestException,
  IpProtocol,
  LimitExceededException,
  ListAliasesCommand,
  ListBuildsCommand,
  ListComputeCommand,
  ListComputeInputStatus,
  ListContainerFleetsCommand,
  ListContainerGroupDefinitionVersionsCommand,
  ListContainerGroupDefinitionsCommand,
  ListFleetDeploymentsCommand,
  ListFleetsCommand,
  ListGameServerGroupsCommand,
  ListGameServersCommand,
  ListLocationsCommand,
  ListScriptsCommand,
  ListTagsForResourceCommand,
  LocationFilter,
  LocationUpdateStatus,
  LogDestination,
  MatchmakingConfigurationStatus,
  MetricName,
  NotFoundException,
  NotReadyException,
  OperatingSystem,
  OutOfCapacityException,
  PlacementFallbackStrategy,
  PlayerSessionCreationPolicy,
  PlayerSessionStatus,
  PolicyType,
  PriorityType,
  ProtectionPolicy,
  PutScalingPolicyCommand,
  RegisterComputeCommand,
  RegisterGameServerCommand,
  RequestUploadCredentialsCommand,
  ResolveAliasCommand,
  ResumeGameServerGroupCommand,
  RoutingStrategyType,
  ScalingAdjustmentType,
  ScalingStatusType,
  SearchGameSessionsCommand,
  SortOrder,
  StartFleetActionsCommand,
  StartGameSessionPlacementCommand,
  StartMatchBackfillCommand,
  StartMatchmakingCommand,
  StopFleetActionsCommand,
  StopGameSessionPlacementCommand,
  StopMatchmakingCommand,
  SuspendGameServerGroupCommand,
  TagResourceCommand,
  TaggingFailedException,
  TerminalRoutingStrategyException,
  TerminateGameSessionCommand,
  TerminationMode,
  UnauthorizedException,
  UnsupportedRegionException,
  UntagResourceCommand,
  UpdateAliasCommand,
  UpdateBuildCommand,
  UpdateContainerFleetCommand,
  UpdateContainerGroupDefinitionCommand,
  UpdateFleetAttributesCommand,
  UpdateFleetCapacityCommand,
  UpdateFleetPortSettingsCommand,
  UpdateGameServerCommand,
  UpdateGameServerGroupCommand,
  UpdateGameSessionCommand,
  UpdateGameSessionQueueCommand,
  UpdateMatchmakingConfigurationCommand,
  UpdateRuntimeConfigurationCommand,
  UpdateScriptCommand,
  ValidateMatchmakingRuleSetCommand,
  paginateDescribeFleetAttributes,
  paginateDescribeFleetCapacity,
  paginateDescribeFleetEvents,
  paginateDescribeFleetLocationAttributes,
  paginateDescribeFleetUtilization,
  paginateDescribeGameServerInstances,
  paginateDescribeGameSessionDetails,
  paginateDescribeGameSessionQueues,
  paginateDescribeGameSessions,
  paginateDescribeInstances,
  paginateDescribeMatchmakingConfigurations,
  paginateDescribeMatchmakingRuleSets,
  paginateDescribePlayerSessions,
  paginateDescribeScalingPolicies,
  paginateListAliases,
  paginateListBuilds,
  paginateListCompute,
  paginateListContainerFleets,
  paginateListContainerGroupDefinitionVersions,
  paginateListContainerGroupDefinitions,
  paginateListFleetDeployments,
  paginateListFleets,
  paginateListGameServerGroups,
  paginateListGameServers,
  paginateListLocations,
  paginateListScripts,
  paginateSearchGameSessions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GameLiftClient === "function");
assert(typeof GameLift === "function");
// commands
assert(typeof AcceptMatchCommand === "function");
assert(typeof ClaimGameServerCommand === "function");
assert(typeof CreateAliasCommand === "function");
assert(typeof CreateBuildCommand === "function");
assert(typeof CreateContainerFleetCommand === "function");
assert(typeof CreateContainerGroupDefinitionCommand === "function");
assert(typeof CreateFleetCommand === "function");
assert(typeof CreateFleetLocationsCommand === "function");
assert(typeof CreateGameServerGroupCommand === "function");
assert(typeof CreateGameSessionCommand === "function");
assert(typeof CreateGameSessionQueueCommand === "function");
assert(typeof CreateLocationCommand === "function");
assert(typeof CreateMatchmakingConfigurationCommand === "function");
assert(typeof CreateMatchmakingRuleSetCommand === "function");
assert(typeof CreatePlayerSessionCommand === "function");
assert(typeof CreatePlayerSessionsCommand === "function");
assert(typeof CreateScriptCommand === "function");
assert(typeof CreateVpcPeeringAuthorizationCommand === "function");
assert(typeof CreateVpcPeeringConnectionCommand === "function");
assert(typeof DeleteAliasCommand === "function");
assert(typeof DeleteBuildCommand === "function");
assert(typeof DeleteContainerFleetCommand === "function");
assert(typeof DeleteContainerGroupDefinitionCommand === "function");
assert(typeof DeleteFleetCommand === "function");
assert(typeof DeleteFleetLocationsCommand === "function");
assert(typeof DeleteGameServerGroupCommand === "function");
assert(typeof DeleteGameSessionQueueCommand === "function");
assert(typeof DeleteLocationCommand === "function");
assert(typeof DeleteMatchmakingConfigurationCommand === "function");
assert(typeof DeleteMatchmakingRuleSetCommand === "function");
assert(typeof DeleteScalingPolicyCommand === "function");
assert(typeof DeleteScriptCommand === "function");
assert(typeof DeleteVpcPeeringAuthorizationCommand === "function");
assert(typeof DeleteVpcPeeringConnectionCommand === "function");
assert(typeof DeregisterComputeCommand === "function");
assert(typeof DeregisterGameServerCommand === "function");
assert(typeof DescribeAliasCommand === "function");
assert(typeof DescribeBuildCommand === "function");
assert(typeof DescribeComputeCommand === "function");
assert(typeof DescribeContainerFleetCommand === "function");
assert(typeof DescribeContainerGroupDefinitionCommand === "function");
assert(typeof DescribeEC2InstanceLimitsCommand === "function");
assert(typeof DescribeFleetAttributesCommand === "function");
assert(typeof DescribeFleetCapacityCommand === "function");
assert(typeof DescribeFleetDeploymentCommand === "function");
assert(typeof DescribeFleetEventsCommand === "function");
assert(typeof DescribeFleetLocationAttributesCommand === "function");
assert(typeof DescribeFleetLocationCapacityCommand === "function");
assert(typeof DescribeFleetLocationUtilizationCommand === "function");
assert(typeof DescribeFleetPortSettingsCommand === "function");
assert(typeof DescribeFleetUtilizationCommand === "function");
assert(typeof DescribeGameServerCommand === "function");
assert(typeof DescribeGameServerGroupCommand === "function");
assert(typeof DescribeGameServerInstancesCommand === "function");
assert(typeof DescribeGameSessionDetailsCommand === "function");
assert(typeof DescribeGameSessionPlacementCommand === "function");
assert(typeof DescribeGameSessionQueuesCommand === "function");
assert(typeof DescribeGameSessionsCommand === "function");
assert(typeof DescribeInstancesCommand === "function");
assert(typeof DescribeMatchmakingCommand === "function");
assert(typeof DescribeMatchmakingConfigurationsCommand === "function");
assert(typeof DescribeMatchmakingRuleSetsCommand === "function");
assert(typeof DescribePlayerSessionsCommand === "function");
assert(typeof DescribeRuntimeConfigurationCommand === "function");
assert(typeof DescribeScalingPoliciesCommand === "function");
assert(typeof DescribeScriptCommand === "function");
assert(typeof DescribeVpcPeeringAuthorizationsCommand === "function");
assert(typeof DescribeVpcPeeringConnectionsCommand === "function");
assert(typeof GetComputeAccessCommand === "function");
assert(typeof GetComputeAuthTokenCommand === "function");
assert(typeof GetGameSessionLogUrlCommand === "function");
assert(typeof GetInstanceAccessCommand === "function");
assert(typeof ListAliasesCommand === "function");
assert(typeof ListBuildsCommand === "function");
assert(typeof ListComputeCommand === "function");
assert(typeof ListContainerFleetsCommand === "function");
assert(typeof ListContainerGroupDefinitionsCommand === "function");
assert(typeof ListContainerGroupDefinitionVersionsCommand === "function");
assert(typeof ListFleetDeploymentsCommand === "function");
assert(typeof ListFleetsCommand === "function");
assert(typeof ListGameServerGroupsCommand === "function");
assert(typeof ListGameServersCommand === "function");
assert(typeof ListLocationsCommand === "function");
assert(typeof ListScriptsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutScalingPolicyCommand === "function");
assert(typeof RegisterComputeCommand === "function");
assert(typeof RegisterGameServerCommand === "function");
assert(typeof RequestUploadCredentialsCommand === "function");
assert(typeof ResolveAliasCommand === "function");
assert(typeof ResumeGameServerGroupCommand === "function");
assert(typeof SearchGameSessionsCommand === "function");
assert(typeof StartFleetActionsCommand === "function");
assert(typeof StartGameSessionPlacementCommand === "function");
assert(typeof StartMatchBackfillCommand === "function");
assert(typeof StartMatchmakingCommand === "function");
assert(typeof StopFleetActionsCommand === "function");
assert(typeof StopGameSessionPlacementCommand === "function");
assert(typeof StopMatchmakingCommand === "function");
assert(typeof SuspendGameServerGroupCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TerminateGameSessionCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAliasCommand === "function");
assert(typeof UpdateBuildCommand === "function");
assert(typeof UpdateContainerFleetCommand === "function");
assert(typeof UpdateContainerGroupDefinitionCommand === "function");
assert(typeof UpdateFleetAttributesCommand === "function");
assert(typeof UpdateFleetCapacityCommand === "function");
assert(typeof UpdateFleetPortSettingsCommand === "function");
assert(typeof UpdateGameServerCommand === "function");
assert(typeof UpdateGameServerGroupCommand === "function");
assert(typeof UpdateGameSessionCommand === "function");
assert(typeof UpdateGameSessionQueueCommand === "function");
assert(typeof UpdateMatchmakingConfigurationCommand === "function");
assert(typeof UpdateRuntimeConfigurationCommand === "function");
assert(typeof UpdateScriptCommand === "function");
assert(typeof ValidateMatchmakingRuleSetCommand === "function");
// enums
assert(typeof AcceptanceType === "object");
assert(typeof BackfillMode === "object");
assert(typeof BalancingStrategy === "object");
assert(typeof BuildStatus === "object");
assert(typeof CertificateType === "object");
assert(typeof ComparisonOperatorType === "object");
assert(typeof ComputeStatus === "object");
assert(typeof ComputeType === "object");
assert(typeof ContainerDependencyCondition === "object");
assert(typeof ContainerFleetBillingType === "object");
assert(typeof ContainerFleetLocationStatus === "object");
assert(typeof ContainerFleetRemoveAttribute === "object");
assert(typeof ContainerFleetStatus === "object");
assert(typeof ContainerGroupDefinitionStatus === "object");
assert(typeof ContainerGroupType === "object");
assert(typeof ContainerMountPointAccessLevel === "object");
assert(typeof ContainerOperatingSystem === "object");
assert(typeof DeploymentImpairmentStrategy === "object");
assert(typeof DeploymentProtectionStrategy === "object");
assert(typeof DeploymentStatus === "object");
assert(typeof EC2InstanceType === "object");
assert(typeof EventCode === "object");
assert(typeof FilterInstanceStatus === "object");
assert(typeof FleetAction === "object");
assert(typeof FleetStatus === "object");
assert(typeof FleetType === "object");
assert(typeof FlexMatchMode === "object");
assert(typeof GameServerClaimStatus === "object");
assert(typeof GameServerGroupAction === "object");
assert(typeof GameServerGroupDeleteOption === "object");
assert(typeof GameServerGroupInstanceType === "object");
assert(typeof GameServerGroupStatus === "object");
assert(typeof GameServerHealthCheck === "object");
assert(typeof GameServerInstanceStatus === "object");
assert(typeof GameServerProtectionPolicy === "object");
assert(typeof GameServerUtilizationStatus === "object");
assert(typeof GameSessionPlacementState === "object");
assert(typeof GameSessionStatus === "object");
assert(typeof GameSessionStatusReason === "object");
assert(typeof InstanceRoleCredentialsProvider === "object");
assert(typeof InstanceStatus === "object");
assert(typeof IpProtocol === "object");
assert(typeof ListComputeInputStatus === "object");
assert(typeof LocationFilter === "object");
assert(typeof LocationUpdateStatus === "object");
assert(typeof LogDestination === "object");
assert(typeof MatchmakingConfigurationStatus === "object");
assert(typeof MetricName === "object");
assert(typeof OperatingSystem === "object");
assert(typeof PlacementFallbackStrategy === "object");
assert(typeof PlayerSessionCreationPolicy === "object");
assert(typeof PlayerSessionStatus === "object");
assert(typeof PolicyType === "object");
assert(typeof PriorityType === "object");
assert(typeof ProtectionPolicy === "object");
assert(typeof RoutingStrategyType === "object");
assert(typeof ScalingAdjustmentType === "object");
assert(typeof ScalingStatusType === "object");
assert(typeof SortOrder === "object");
assert(typeof TerminationMode === "object");
// errors
assert(ConflictException.prototype instanceof GameLiftServiceException);
assert(FleetCapacityExceededException.prototype instanceof GameLiftServiceException);
assert(GameSessionFullException.prototype instanceof GameLiftServiceException);
assert(IdempotentParameterMismatchException.prototype instanceof GameLiftServiceException);
assert(InternalServiceException.prototype instanceof GameLiftServiceException);
assert(InvalidFleetStatusException.prototype instanceof GameLiftServiceException);
assert(InvalidGameSessionStatusException.prototype instanceof GameLiftServiceException);
assert(InvalidRequestException.prototype instanceof GameLiftServiceException);
assert(LimitExceededException.prototype instanceof GameLiftServiceException);
assert(NotFoundException.prototype instanceof GameLiftServiceException);
assert(NotReadyException.prototype instanceof GameLiftServiceException);
assert(OutOfCapacityException.prototype instanceof GameLiftServiceException);
assert(TaggingFailedException.prototype instanceof GameLiftServiceException);
assert(TerminalRoutingStrategyException.prototype instanceof GameLiftServiceException);
assert(UnauthorizedException.prototype instanceof GameLiftServiceException);
assert(UnsupportedRegionException.prototype instanceof GameLiftServiceException);
assert(GameLiftServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeFleetAttributes === "function");
assert(typeof paginateDescribeFleetCapacity === "function");
assert(typeof paginateDescribeFleetEvents === "function");
assert(typeof paginateDescribeFleetLocationAttributes === "function");
assert(typeof paginateDescribeFleetUtilization === "function");
assert(typeof paginateDescribeGameServerInstances === "function");
assert(typeof paginateDescribeGameSessionDetails === "function");
assert(typeof paginateDescribeGameSessionQueues === "function");
assert(typeof paginateDescribeGameSessions === "function");
assert(typeof paginateDescribeInstances === "function");
assert(typeof paginateDescribeMatchmakingConfigurations === "function");
assert(typeof paginateDescribeMatchmakingRuleSets === "function");
assert(typeof paginateDescribePlayerSessions === "function");
assert(typeof paginateDescribeScalingPolicies === "function");
assert(typeof paginateListAliases === "function");
assert(typeof paginateListBuilds === "function");
assert(typeof paginateListCompute === "function");
assert(typeof paginateListContainerFleets === "function");
assert(typeof paginateListContainerGroupDefinitionVersions === "function");
assert(typeof paginateListContainerGroupDefinitions === "function");
assert(typeof paginateListFleetDeployments === "function");
assert(typeof paginateListFleets === "function");
assert(typeof paginateListGameServerGroups === "function");
assert(typeof paginateListGameServers === "function");
assert(typeof paginateListLocations === "function");
assert(typeof paginateListScripts === "function");
assert(typeof paginateSearchGameSessions === "function");
console.log(`GameLift index test passed.`);
