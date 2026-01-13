import {
  AcceptanceType,
  AcceptMatch$,
  AcceptMatchCommand,
  AcceptMatchInput$,
  AcceptMatchOutput$,
  Alias$,
  AnywhereConfiguration$,
  AttributeValue$,
  AwsCredentials$,
  BackfillMode,
  BalancingStrategy,
  Build$,
  BuildStatus,
  CertificateConfiguration$,
  CertificateType,
  ClaimFilterOption$,
  ClaimGameServer$,
  ClaimGameServerCommand,
  ClaimGameServerInput$,
  ClaimGameServerOutput$,
  ComparisonOperatorType,
  Compute$,
  ComputeStatus,
  ComputeType,
  ConflictException,
  ConflictException$,
  ConnectionPortRange$,
  ContainerAttribute$,
  ContainerDependency$,
  ContainerDependencyCondition,
  ContainerEnvironment$,
  ContainerFleet$,
  ContainerFleetBillingType,
  ContainerFleetLocationAttributes$,
  ContainerFleetLocationStatus,
  ContainerFleetRemoveAttribute,
  ContainerFleetStatus,
  ContainerGroupDefinition$,
  ContainerGroupDefinitionStatus,
  ContainerGroupType,
  ContainerHealthCheck$,
  ContainerIdentifier$,
  ContainerMountPoint$,
  ContainerMountPointAccessLevel,
  ContainerOperatingSystem,
  ContainerPortConfiguration$,
  ContainerPortRange$,
  CreateAlias$,
  CreateAliasCommand,
  CreateAliasInput$,
  CreateAliasOutput$,
  CreateBuild$,
  CreateBuildCommand,
  CreateBuildInput$,
  CreateBuildOutput$,
  CreateContainerFleet$,
  CreateContainerFleetCommand,
  CreateContainerFleetInput$,
  CreateContainerFleetOutput$,
  CreateContainerGroupDefinition$,
  CreateContainerGroupDefinitionCommand,
  CreateContainerGroupDefinitionInput$,
  CreateContainerGroupDefinitionOutput$,
  CreateFleet$,
  CreateFleetCommand,
  CreateFleetInput$,
  CreateFleetLocations$,
  CreateFleetLocationsCommand,
  CreateFleetLocationsInput$,
  CreateFleetLocationsOutput$,
  CreateFleetOutput$,
  CreateGameServerGroup$,
  CreateGameServerGroupCommand,
  CreateGameServerGroupInput$,
  CreateGameServerGroupOutput$,
  CreateGameSession$,
  CreateGameSessionCommand,
  CreateGameSessionInput$,
  CreateGameSessionOutput$,
  CreateGameSessionQueue$,
  CreateGameSessionQueueCommand,
  CreateGameSessionQueueInput$,
  CreateGameSessionQueueOutput$,
  CreateLocation$,
  CreateLocationCommand,
  CreateLocationInput$,
  CreateLocationOutput$,
  CreateMatchmakingConfiguration$,
  CreateMatchmakingConfigurationCommand,
  CreateMatchmakingConfigurationInput$,
  CreateMatchmakingConfigurationOutput$,
  CreateMatchmakingRuleSet$,
  CreateMatchmakingRuleSetCommand,
  CreateMatchmakingRuleSetInput$,
  CreateMatchmakingRuleSetOutput$,
  CreatePlayerSession$,
  CreatePlayerSessionCommand,
  CreatePlayerSessionInput$,
  CreatePlayerSessionOutput$,
  CreatePlayerSessions$,
  CreatePlayerSessionsCommand,
  CreatePlayerSessionsInput$,
  CreatePlayerSessionsOutput$,
  CreateScript$,
  CreateScriptCommand,
  CreateScriptInput$,
  CreateScriptOutput$,
  CreateVpcPeeringAuthorization$,
  CreateVpcPeeringAuthorizationCommand,
  CreateVpcPeeringAuthorizationInput$,
  CreateVpcPeeringAuthorizationOutput$,
  CreateVpcPeeringConnection$,
  CreateVpcPeeringConnectionCommand,
  CreateVpcPeeringConnectionInput$,
  CreateVpcPeeringConnectionOutput$,
  DeleteAlias$,
  DeleteAliasCommand,
  DeleteAliasInput$,
  DeleteBuild$,
  DeleteBuildCommand,
  DeleteBuildInput$,
  DeleteContainerFleet$,
  DeleteContainerFleetCommand,
  DeleteContainerFleetInput$,
  DeleteContainerFleetOutput$,
  DeleteContainerGroupDefinition$,
  DeleteContainerGroupDefinitionCommand,
  DeleteContainerGroupDefinitionInput$,
  DeleteContainerGroupDefinitionOutput$,
  DeleteFleet$,
  DeleteFleetCommand,
  DeleteFleetInput$,
  DeleteFleetLocations$,
  DeleteFleetLocationsCommand,
  DeleteFleetLocationsInput$,
  DeleteFleetLocationsOutput$,
  DeleteGameServerGroup$,
  DeleteGameServerGroupCommand,
  DeleteGameServerGroupInput$,
  DeleteGameServerGroupOutput$,
  DeleteGameSessionQueue$,
  DeleteGameSessionQueueCommand,
  DeleteGameSessionQueueInput$,
  DeleteGameSessionQueueOutput$,
  DeleteLocation$,
  DeleteLocationCommand,
  DeleteLocationInput$,
  DeleteLocationOutput$,
  DeleteMatchmakingConfiguration$,
  DeleteMatchmakingConfigurationCommand,
  DeleteMatchmakingConfigurationInput$,
  DeleteMatchmakingConfigurationOutput$,
  DeleteMatchmakingRuleSet$,
  DeleteMatchmakingRuleSetCommand,
  DeleteMatchmakingRuleSetInput$,
  DeleteMatchmakingRuleSetOutput$,
  DeleteScalingPolicy$,
  DeleteScalingPolicyCommand,
  DeleteScalingPolicyInput$,
  DeleteScript$,
  DeleteScriptCommand,
  DeleteScriptInput$,
  DeleteVpcPeeringAuthorization$,
  DeleteVpcPeeringAuthorizationCommand,
  DeleteVpcPeeringAuthorizationInput$,
  DeleteVpcPeeringAuthorizationOutput$,
  DeleteVpcPeeringConnection$,
  DeleteVpcPeeringConnectionCommand,
  DeleteVpcPeeringConnectionInput$,
  DeleteVpcPeeringConnectionOutput$,
  DeploymentConfiguration$,
  DeploymentDetails$,
  DeploymentImpairmentStrategy,
  DeploymentProtectionStrategy,
  DeploymentStatus,
  DeregisterCompute$,
  DeregisterComputeCommand,
  DeregisterComputeInput$,
  DeregisterComputeOutput$,
  DeregisterGameServer$,
  DeregisterGameServerCommand,
  DeregisterGameServerInput$,
  DescribeAlias$,
  DescribeAliasCommand,
  DescribeAliasInput$,
  DescribeAliasOutput$,
  DescribeBuild$,
  DescribeBuildCommand,
  DescribeBuildInput$,
  DescribeBuildOutput$,
  DescribeCompute$,
  DescribeComputeCommand,
  DescribeComputeInput$,
  DescribeComputeOutput$,
  DescribeContainerFleet$,
  DescribeContainerFleetCommand,
  DescribeContainerFleetInput$,
  DescribeContainerFleetOutput$,
  DescribeContainerGroupDefinition$,
  DescribeContainerGroupDefinitionCommand,
  DescribeContainerGroupDefinitionInput$,
  DescribeContainerGroupDefinitionOutput$,
  DescribeEC2InstanceLimits$,
  DescribeEC2InstanceLimitsCommand,
  DescribeEC2InstanceLimitsInput$,
  DescribeEC2InstanceLimitsOutput$,
  DescribeFleetAttributes$,
  DescribeFleetAttributesCommand,
  DescribeFleetAttributesInput$,
  DescribeFleetAttributesOutput$,
  DescribeFleetCapacity$,
  DescribeFleetCapacityCommand,
  DescribeFleetCapacityInput$,
  DescribeFleetCapacityOutput$,
  DescribeFleetDeployment$,
  DescribeFleetDeploymentCommand,
  DescribeFleetDeploymentInput$,
  DescribeFleetDeploymentOutput$,
  DescribeFleetEvents$,
  DescribeFleetEventsCommand,
  DescribeFleetEventsInput$,
  DescribeFleetEventsOutput$,
  DescribeFleetLocationAttributes$,
  DescribeFleetLocationAttributesCommand,
  DescribeFleetLocationAttributesInput$,
  DescribeFleetLocationAttributesOutput$,
  DescribeFleetLocationCapacity$,
  DescribeFleetLocationCapacityCommand,
  DescribeFleetLocationCapacityInput$,
  DescribeFleetLocationCapacityOutput$,
  DescribeFleetLocationUtilization$,
  DescribeFleetLocationUtilizationCommand,
  DescribeFleetLocationUtilizationInput$,
  DescribeFleetLocationUtilizationOutput$,
  DescribeFleetPortSettings$,
  DescribeFleetPortSettingsCommand,
  DescribeFleetPortSettingsInput$,
  DescribeFleetPortSettingsOutput$,
  DescribeFleetUtilization$,
  DescribeFleetUtilizationCommand,
  DescribeFleetUtilizationInput$,
  DescribeFleetUtilizationOutput$,
  DescribeGameServer$,
  DescribeGameServerCommand,
  DescribeGameServerGroup$,
  DescribeGameServerGroupCommand,
  DescribeGameServerGroupInput$,
  DescribeGameServerGroupOutput$,
  DescribeGameServerInput$,
  DescribeGameServerInstances$,
  DescribeGameServerInstancesCommand,
  DescribeGameServerInstancesInput$,
  DescribeGameServerInstancesOutput$,
  DescribeGameServerOutput$,
  DescribeGameSessionDetails$,
  DescribeGameSessionDetailsCommand,
  DescribeGameSessionDetailsInput$,
  DescribeGameSessionDetailsOutput$,
  DescribeGameSessionPlacement$,
  DescribeGameSessionPlacementCommand,
  DescribeGameSessionPlacementInput$,
  DescribeGameSessionPlacementOutput$,
  DescribeGameSessionQueues$,
  DescribeGameSessionQueuesCommand,
  DescribeGameSessionQueuesInput$,
  DescribeGameSessionQueuesOutput$,
  DescribeGameSessions$,
  DescribeGameSessionsCommand,
  DescribeGameSessionsInput$,
  DescribeGameSessionsOutput$,
  DescribeInstances$,
  DescribeInstancesCommand,
  DescribeInstancesInput$,
  DescribeInstancesOutput$,
  DescribeMatchmaking$,
  DescribeMatchmakingCommand,
  DescribeMatchmakingConfigurations$,
  DescribeMatchmakingConfigurationsCommand,
  DescribeMatchmakingConfigurationsInput$,
  DescribeMatchmakingConfigurationsOutput$,
  DescribeMatchmakingInput$,
  DescribeMatchmakingOutput$,
  DescribeMatchmakingRuleSets$,
  DescribeMatchmakingRuleSetsCommand,
  DescribeMatchmakingRuleSetsInput$,
  DescribeMatchmakingRuleSetsOutput$,
  DescribePlayerSessions$,
  DescribePlayerSessionsCommand,
  DescribePlayerSessionsInput$,
  DescribePlayerSessionsOutput$,
  DescribeRuntimeConfiguration$,
  DescribeRuntimeConfigurationCommand,
  DescribeRuntimeConfigurationInput$,
  DescribeRuntimeConfigurationOutput$,
  DescribeScalingPolicies$,
  DescribeScalingPoliciesCommand,
  DescribeScalingPoliciesInput$,
  DescribeScalingPoliciesOutput$,
  DescribeScript$,
  DescribeScriptCommand,
  DescribeScriptInput$,
  DescribeScriptOutput$,
  DescribeVpcPeeringAuthorizations$,
  DescribeVpcPeeringAuthorizationsCommand,
  DescribeVpcPeeringAuthorizationsInput$,
  DescribeVpcPeeringAuthorizationsOutput$,
  DescribeVpcPeeringConnections$,
  DescribeVpcPeeringConnectionsCommand,
  DescribeVpcPeeringConnectionsInput$,
  DescribeVpcPeeringConnectionsOutput$,
  DesiredPlayerSession$,
  EC2InstanceCounts$,
  EC2InstanceLimit$,
  EC2InstanceType,
  Event$,
  EventCode,
  FilterConfiguration$,
  FilterInstanceStatus,
  FleetAction,
  FleetAttributes$,
  FleetCapacity$,
  FleetCapacityExceededException,
  FleetCapacityExceededException$,
  FleetDeployment$,
  FleetStatus,
  FleetType,
  FleetUtilization$,
  FlexMatchMode,
  GameLift,
  GameLiftClient,
  GameLiftServiceException,
  GameProperty$,
  GameServer$,
  GameServerClaimStatus,
  GameServerContainerDefinition$,
  GameServerContainerDefinitionInput$,
  GameServerContainerGroupCounts$,
  GameServerGroup$,
  GameServerGroupAction,
  GameServerGroupAutoScalingPolicy$,
  GameServerGroupDeleteOption,
  GameServerGroupInstanceType,
  GameServerGroupStatus,
  GameServerHealthCheck,
  GameServerInstance$,
  GameServerInstanceStatus,
  GameServerProtectionPolicy,
  GameServerUtilizationStatus,
  GameSession$,
  GameSessionConnectionInfo$,
  GameSessionCreationLimitPolicy$,
  GameSessionDetail$,
  GameSessionFullException,
  GameSessionFullException$,
  GameSessionPlacement$,
  GameSessionPlacementState,
  GameSessionQueue$,
  GameSessionQueueDestination$,
  GameSessionStatus,
  GameSessionStatusReason,
  GetComputeAccess$,
  GetComputeAccessCommand,
  GetComputeAccessInput$,
  GetComputeAccessOutput$,
  GetComputeAuthToken$,
  GetComputeAuthTokenCommand,
  GetComputeAuthTokenInput$,
  GetComputeAuthTokenOutput$,
  GetGameSessionLogUrl$,
  GetGameSessionLogUrlCommand,
  GetGameSessionLogUrlInput$,
  GetGameSessionLogUrlOutput$,
  GetInstanceAccess$,
  GetInstanceAccessCommand,
  GetInstanceAccessInput$,
  GetInstanceAccessOutput$,
  IdempotentParameterMismatchException,
  IdempotentParameterMismatchException$,
  Instance$,
  InstanceAccess$,
  InstanceCredentials$,
  InstanceDefinition$,
  InstanceRoleCredentialsProvider,
  InstanceStatus,
  InternalServiceException,
  InternalServiceException$,
  InvalidFleetStatusException,
  InvalidFleetStatusException$,
  InvalidGameSessionStatusException,
  InvalidGameSessionStatusException$,
  InvalidRequestException,
  InvalidRequestException$,
  IpPermission$,
  IpProtocol,
  LaunchTemplateSpecification$,
  LimitExceededException,
  LimitExceededException$,
  ListAliases$,
  ListAliasesCommand,
  ListAliasesInput$,
  ListAliasesOutput$,
  ListBuilds$,
  ListBuildsCommand,
  ListBuildsInput$,
  ListBuildsOutput$,
  ListCompute$,
  ListComputeCommand,
  ListComputeInput$,
  ListComputeInputStatus,
  ListComputeOutput$,
  ListContainerFleets$,
  ListContainerFleetsCommand,
  ListContainerFleetsInput$,
  ListContainerFleetsOutput$,
  ListContainerGroupDefinitions$,
  ListContainerGroupDefinitionsCommand,
  ListContainerGroupDefinitionsInput$,
  ListContainerGroupDefinitionsOutput$,
  ListContainerGroupDefinitionVersions$,
  ListContainerGroupDefinitionVersionsCommand,
  ListContainerGroupDefinitionVersionsInput$,
  ListContainerGroupDefinitionVersionsOutput$,
  ListFleetDeployments$,
  ListFleetDeploymentsCommand,
  ListFleetDeploymentsInput$,
  ListFleetDeploymentsOutput$,
  ListFleets$,
  ListFleetsCommand,
  ListFleetsInput$,
  ListFleetsOutput$,
  ListGameServerGroups$,
  ListGameServerGroupsCommand,
  ListGameServerGroupsInput$,
  ListGameServerGroupsOutput$,
  ListGameServers$,
  ListGameServersCommand,
  ListGameServersInput$,
  ListGameServersOutput$,
  ListLocations$,
  ListLocationsCommand,
  ListLocationsInput$,
  ListLocationsOutput$,
  ListScripts$,
  ListScriptsCommand,
  ListScriptsInput$,
  ListScriptsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LocationalDeployment$,
  LocationAttributes$,
  LocationConfiguration$,
  LocationFilter,
  LocationModel$,
  LocationState$,
  LocationUpdateStatus,
  LogConfiguration$,
  LogDestination,
  MatchedPlayerSession$,
  MatchmakingConfiguration$,
  MatchmakingConfigurationStatus,
  MatchmakingRuleSet$,
  MatchmakingTicket$,
  MetricName,
  NotFoundException,
  NotFoundException$,
  NotReadyException,
  NotReadyException$,
  OperatingSystem,
  OutOfCapacityException,
  OutOfCapacityException$,
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
  paginateListContainerGroupDefinitions,
  paginateListContainerGroupDefinitionVersions,
  paginateListFleetDeployments,
  paginateListFleets,
  paginateListGameServerGroups,
  paginateListGameServers,
  paginateListLocations,
  paginateListScripts,
  paginateSearchGameSessions,
  PingBeacon$,
  PlacedPlayerSession$,
  PlacementFallbackStrategy,
  Player$,
  PlayerLatency$,
  PlayerLatencyPolicy$,
  PlayerSession$,
  PlayerSessionCreationPolicy,
  PlayerSessionStatus,
  PolicyType,
  PriorityConfiguration$,
  PriorityConfigurationOverride$,
  PriorityType,
  ProtectionPolicy,
  PutScalingPolicy$,
  PutScalingPolicyCommand,
  PutScalingPolicyInput$,
  PutScalingPolicyOutput$,
  RegisterCompute$,
  RegisterComputeCommand,
  RegisterComputeInput$,
  RegisterComputeOutput$,
  RegisterGameServer$,
  RegisterGameServerCommand,
  RegisterGameServerInput$,
  RegisterGameServerOutput$,
  RequestUploadCredentials$,
  RequestUploadCredentialsCommand,
  RequestUploadCredentialsInput$,
  RequestUploadCredentialsOutput$,
  ResolveAlias$,
  ResolveAliasCommand,
  ResolveAliasInput$,
  ResolveAliasOutput$,
  ResourceCreationLimitPolicy$,
  ResumeGameServerGroup$,
  ResumeGameServerGroupCommand,
  ResumeGameServerGroupInput$,
  ResumeGameServerGroupOutput$,
  RoutingStrategy$,
  RoutingStrategyType,
  RuntimeConfiguration$,
  S3Location$,
  ScalingAdjustmentType,
  ScalingPolicy$,
  ScalingStatusType,
  Script$,
  SearchGameSessions$,
  SearchGameSessionsCommand,
  SearchGameSessionsInput$,
  SearchGameSessionsOutput$,
  ServerProcess$,
  SortOrder,
  StartFleetActions$,
  StartFleetActionsCommand,
  StartFleetActionsInput$,
  StartFleetActionsOutput$,
  StartGameSessionPlacement$,
  StartGameSessionPlacementCommand,
  StartGameSessionPlacementInput$,
  StartGameSessionPlacementOutput$,
  StartMatchBackfill$,
  StartMatchBackfillCommand,
  StartMatchBackfillInput$,
  StartMatchBackfillOutput$,
  StartMatchmaking$,
  StartMatchmakingCommand,
  StartMatchmakingInput$,
  StartMatchmakingOutput$,
  StopFleetActions$,
  StopFleetActionsCommand,
  StopFleetActionsInput$,
  StopFleetActionsOutput$,
  StopGameSessionPlacement$,
  StopGameSessionPlacementCommand,
  StopGameSessionPlacementInput$,
  StopGameSessionPlacementOutput$,
  StopMatchmaking$,
  StopMatchmakingCommand,
  StopMatchmakingInput$,
  StopMatchmakingOutput$,
  SupportContainerDefinition$,
  SupportContainerDefinitionInput$,
  SuspendGameServerGroup$,
  SuspendGameServerGroupCommand,
  SuspendGameServerGroupInput$,
  SuspendGameServerGroupOutput$,
  Tag$,
  TaggingFailedException,
  TaggingFailedException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetConfiguration$,
  TargetTrackingConfiguration$,
  TerminalRoutingStrategyException,
  TerminalRoutingStrategyException$,
  TerminateGameSession$,
  TerminateGameSessionCommand,
  TerminateGameSessionInput$,
  TerminateGameSessionOutput$,
  TerminationMode,
  UDPEndpoint$,
  UnauthorizedException,
  UnauthorizedException$,
  UnsupportedRegionException,
  UnsupportedRegionException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAlias$,
  UpdateAliasCommand,
  UpdateAliasInput$,
  UpdateAliasOutput$,
  UpdateBuild$,
  UpdateBuildCommand,
  UpdateBuildInput$,
  UpdateBuildOutput$,
  UpdateContainerFleet$,
  UpdateContainerFleetCommand,
  UpdateContainerFleetInput$,
  UpdateContainerFleetOutput$,
  UpdateContainerGroupDefinition$,
  UpdateContainerGroupDefinitionCommand,
  UpdateContainerGroupDefinitionInput$,
  UpdateContainerGroupDefinitionOutput$,
  UpdateFleetAttributes$,
  UpdateFleetAttributesCommand,
  UpdateFleetAttributesInput$,
  UpdateFleetAttributesOutput$,
  UpdateFleetCapacity$,
  UpdateFleetCapacityCommand,
  UpdateFleetCapacityInput$,
  UpdateFleetCapacityOutput$,
  UpdateFleetPortSettings$,
  UpdateFleetPortSettingsCommand,
  UpdateFleetPortSettingsInput$,
  UpdateFleetPortSettingsOutput$,
  UpdateGameServer$,
  UpdateGameServerCommand,
  UpdateGameServerGroup$,
  UpdateGameServerGroupCommand,
  UpdateGameServerGroupInput$,
  UpdateGameServerGroupOutput$,
  UpdateGameServerInput$,
  UpdateGameServerOutput$,
  UpdateGameSession$,
  UpdateGameSessionCommand,
  UpdateGameSessionInput$,
  UpdateGameSessionOutput$,
  UpdateGameSessionQueue$,
  UpdateGameSessionQueueCommand,
  UpdateGameSessionQueueInput$,
  UpdateGameSessionQueueOutput$,
  UpdateMatchmakingConfiguration$,
  UpdateMatchmakingConfigurationCommand,
  UpdateMatchmakingConfigurationInput$,
  UpdateMatchmakingConfigurationOutput$,
  UpdateRuntimeConfiguration$,
  UpdateRuntimeConfigurationCommand,
  UpdateRuntimeConfigurationInput$,
  UpdateRuntimeConfigurationOutput$,
  UpdateScript$,
  UpdateScriptCommand,
  UpdateScriptInput$,
  UpdateScriptOutput$,
  ValidateMatchmakingRuleSet$,
  ValidateMatchmakingRuleSetCommand,
  ValidateMatchmakingRuleSetInput$,
  ValidateMatchmakingRuleSetOutput$,
  VpcPeeringAuthorization$,
  VpcPeeringConnection$,
  VpcPeeringConnectionStatus$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GameLiftClient === "function");
assert(typeof GameLift === "function");
// commands
assert(typeof AcceptMatchCommand === "function");
assert(typeof AcceptMatch$ === "object");
assert(typeof ClaimGameServerCommand === "function");
assert(typeof ClaimGameServer$ === "object");
assert(typeof CreateAliasCommand === "function");
assert(typeof CreateAlias$ === "object");
assert(typeof CreateBuildCommand === "function");
assert(typeof CreateBuild$ === "object");
assert(typeof CreateContainerFleetCommand === "function");
assert(typeof CreateContainerFleet$ === "object");
assert(typeof CreateContainerGroupDefinitionCommand === "function");
assert(typeof CreateContainerGroupDefinition$ === "object");
assert(typeof CreateFleetCommand === "function");
assert(typeof CreateFleet$ === "object");
assert(typeof CreateFleetLocationsCommand === "function");
assert(typeof CreateFleetLocations$ === "object");
assert(typeof CreateGameServerGroupCommand === "function");
assert(typeof CreateGameServerGroup$ === "object");
assert(typeof CreateGameSessionCommand === "function");
assert(typeof CreateGameSession$ === "object");
assert(typeof CreateGameSessionQueueCommand === "function");
assert(typeof CreateGameSessionQueue$ === "object");
assert(typeof CreateLocationCommand === "function");
assert(typeof CreateLocation$ === "object");
assert(typeof CreateMatchmakingConfigurationCommand === "function");
assert(typeof CreateMatchmakingConfiguration$ === "object");
assert(typeof CreateMatchmakingRuleSetCommand === "function");
assert(typeof CreateMatchmakingRuleSet$ === "object");
assert(typeof CreatePlayerSessionCommand === "function");
assert(typeof CreatePlayerSession$ === "object");
assert(typeof CreatePlayerSessionsCommand === "function");
assert(typeof CreatePlayerSessions$ === "object");
assert(typeof CreateScriptCommand === "function");
assert(typeof CreateScript$ === "object");
assert(typeof CreateVpcPeeringAuthorizationCommand === "function");
assert(typeof CreateVpcPeeringAuthorization$ === "object");
assert(typeof CreateVpcPeeringConnectionCommand === "function");
assert(typeof CreateVpcPeeringConnection$ === "object");
assert(typeof DeleteAliasCommand === "function");
assert(typeof DeleteAlias$ === "object");
assert(typeof DeleteBuildCommand === "function");
assert(typeof DeleteBuild$ === "object");
assert(typeof DeleteContainerFleetCommand === "function");
assert(typeof DeleteContainerFleet$ === "object");
assert(typeof DeleteContainerGroupDefinitionCommand === "function");
assert(typeof DeleteContainerGroupDefinition$ === "object");
assert(typeof DeleteFleetCommand === "function");
assert(typeof DeleteFleet$ === "object");
assert(typeof DeleteFleetLocationsCommand === "function");
assert(typeof DeleteFleetLocations$ === "object");
assert(typeof DeleteGameServerGroupCommand === "function");
assert(typeof DeleteGameServerGroup$ === "object");
assert(typeof DeleteGameSessionQueueCommand === "function");
assert(typeof DeleteGameSessionQueue$ === "object");
assert(typeof DeleteLocationCommand === "function");
assert(typeof DeleteLocation$ === "object");
assert(typeof DeleteMatchmakingConfigurationCommand === "function");
assert(typeof DeleteMatchmakingConfiguration$ === "object");
assert(typeof DeleteMatchmakingRuleSetCommand === "function");
assert(typeof DeleteMatchmakingRuleSet$ === "object");
assert(typeof DeleteScalingPolicyCommand === "function");
assert(typeof DeleteScalingPolicy$ === "object");
assert(typeof DeleteScriptCommand === "function");
assert(typeof DeleteScript$ === "object");
assert(typeof DeleteVpcPeeringAuthorizationCommand === "function");
assert(typeof DeleteVpcPeeringAuthorization$ === "object");
assert(typeof DeleteVpcPeeringConnectionCommand === "function");
assert(typeof DeleteVpcPeeringConnection$ === "object");
assert(typeof DeregisterComputeCommand === "function");
assert(typeof DeregisterCompute$ === "object");
assert(typeof DeregisterGameServerCommand === "function");
assert(typeof DeregisterGameServer$ === "object");
assert(typeof DescribeAliasCommand === "function");
assert(typeof DescribeAlias$ === "object");
assert(typeof DescribeBuildCommand === "function");
assert(typeof DescribeBuild$ === "object");
assert(typeof DescribeComputeCommand === "function");
assert(typeof DescribeCompute$ === "object");
assert(typeof DescribeContainerFleetCommand === "function");
assert(typeof DescribeContainerFleet$ === "object");
assert(typeof DescribeContainerGroupDefinitionCommand === "function");
assert(typeof DescribeContainerGroupDefinition$ === "object");
assert(typeof DescribeEC2InstanceLimitsCommand === "function");
assert(typeof DescribeEC2InstanceLimits$ === "object");
assert(typeof DescribeFleetAttributesCommand === "function");
assert(typeof DescribeFleetAttributes$ === "object");
assert(typeof DescribeFleetCapacityCommand === "function");
assert(typeof DescribeFleetCapacity$ === "object");
assert(typeof DescribeFleetDeploymentCommand === "function");
assert(typeof DescribeFleetDeployment$ === "object");
assert(typeof DescribeFleetEventsCommand === "function");
assert(typeof DescribeFleetEvents$ === "object");
assert(typeof DescribeFleetLocationAttributesCommand === "function");
assert(typeof DescribeFleetLocationAttributes$ === "object");
assert(typeof DescribeFleetLocationCapacityCommand === "function");
assert(typeof DescribeFleetLocationCapacity$ === "object");
assert(typeof DescribeFleetLocationUtilizationCommand === "function");
assert(typeof DescribeFleetLocationUtilization$ === "object");
assert(typeof DescribeFleetPortSettingsCommand === "function");
assert(typeof DescribeFleetPortSettings$ === "object");
assert(typeof DescribeFleetUtilizationCommand === "function");
assert(typeof DescribeFleetUtilization$ === "object");
assert(typeof DescribeGameServerCommand === "function");
assert(typeof DescribeGameServer$ === "object");
assert(typeof DescribeGameServerGroupCommand === "function");
assert(typeof DescribeGameServerGroup$ === "object");
assert(typeof DescribeGameServerInstancesCommand === "function");
assert(typeof DescribeGameServerInstances$ === "object");
assert(typeof DescribeGameSessionDetailsCommand === "function");
assert(typeof DescribeGameSessionDetails$ === "object");
assert(typeof DescribeGameSessionPlacementCommand === "function");
assert(typeof DescribeGameSessionPlacement$ === "object");
assert(typeof DescribeGameSessionQueuesCommand === "function");
assert(typeof DescribeGameSessionQueues$ === "object");
assert(typeof DescribeGameSessionsCommand === "function");
assert(typeof DescribeGameSessions$ === "object");
assert(typeof DescribeInstancesCommand === "function");
assert(typeof DescribeInstances$ === "object");
assert(typeof DescribeMatchmakingCommand === "function");
assert(typeof DescribeMatchmaking$ === "object");
assert(typeof DescribeMatchmakingConfigurationsCommand === "function");
assert(typeof DescribeMatchmakingConfigurations$ === "object");
assert(typeof DescribeMatchmakingRuleSetsCommand === "function");
assert(typeof DescribeMatchmakingRuleSets$ === "object");
assert(typeof DescribePlayerSessionsCommand === "function");
assert(typeof DescribePlayerSessions$ === "object");
assert(typeof DescribeRuntimeConfigurationCommand === "function");
assert(typeof DescribeRuntimeConfiguration$ === "object");
assert(typeof DescribeScalingPoliciesCommand === "function");
assert(typeof DescribeScalingPolicies$ === "object");
assert(typeof DescribeScriptCommand === "function");
assert(typeof DescribeScript$ === "object");
assert(typeof DescribeVpcPeeringAuthorizationsCommand === "function");
assert(typeof DescribeVpcPeeringAuthorizations$ === "object");
assert(typeof DescribeVpcPeeringConnectionsCommand === "function");
assert(typeof DescribeVpcPeeringConnections$ === "object");
assert(typeof GetComputeAccessCommand === "function");
assert(typeof GetComputeAccess$ === "object");
assert(typeof GetComputeAuthTokenCommand === "function");
assert(typeof GetComputeAuthToken$ === "object");
assert(typeof GetGameSessionLogUrlCommand === "function");
assert(typeof GetGameSessionLogUrl$ === "object");
assert(typeof GetInstanceAccessCommand === "function");
assert(typeof GetInstanceAccess$ === "object");
assert(typeof ListAliasesCommand === "function");
assert(typeof ListAliases$ === "object");
assert(typeof ListBuildsCommand === "function");
assert(typeof ListBuilds$ === "object");
assert(typeof ListComputeCommand === "function");
assert(typeof ListCompute$ === "object");
assert(typeof ListContainerFleetsCommand === "function");
assert(typeof ListContainerFleets$ === "object");
assert(typeof ListContainerGroupDefinitionsCommand === "function");
assert(typeof ListContainerGroupDefinitions$ === "object");
assert(typeof ListContainerGroupDefinitionVersionsCommand === "function");
assert(typeof ListContainerGroupDefinitionVersions$ === "object");
assert(typeof ListFleetDeploymentsCommand === "function");
assert(typeof ListFleetDeployments$ === "object");
assert(typeof ListFleetsCommand === "function");
assert(typeof ListFleets$ === "object");
assert(typeof ListGameServerGroupsCommand === "function");
assert(typeof ListGameServerGroups$ === "object");
assert(typeof ListGameServersCommand === "function");
assert(typeof ListGameServers$ === "object");
assert(typeof ListLocationsCommand === "function");
assert(typeof ListLocations$ === "object");
assert(typeof ListScriptsCommand === "function");
assert(typeof ListScripts$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutScalingPolicyCommand === "function");
assert(typeof PutScalingPolicy$ === "object");
assert(typeof RegisterComputeCommand === "function");
assert(typeof RegisterCompute$ === "object");
assert(typeof RegisterGameServerCommand === "function");
assert(typeof RegisterGameServer$ === "object");
assert(typeof RequestUploadCredentialsCommand === "function");
assert(typeof RequestUploadCredentials$ === "object");
assert(typeof ResolveAliasCommand === "function");
assert(typeof ResolveAlias$ === "object");
assert(typeof ResumeGameServerGroupCommand === "function");
assert(typeof ResumeGameServerGroup$ === "object");
assert(typeof SearchGameSessionsCommand === "function");
assert(typeof SearchGameSessions$ === "object");
assert(typeof StartFleetActionsCommand === "function");
assert(typeof StartFleetActions$ === "object");
assert(typeof StartGameSessionPlacementCommand === "function");
assert(typeof StartGameSessionPlacement$ === "object");
assert(typeof StartMatchBackfillCommand === "function");
assert(typeof StartMatchBackfill$ === "object");
assert(typeof StartMatchmakingCommand === "function");
assert(typeof StartMatchmaking$ === "object");
assert(typeof StopFleetActionsCommand === "function");
assert(typeof StopFleetActions$ === "object");
assert(typeof StopGameSessionPlacementCommand === "function");
assert(typeof StopGameSessionPlacement$ === "object");
assert(typeof StopMatchmakingCommand === "function");
assert(typeof StopMatchmaking$ === "object");
assert(typeof SuspendGameServerGroupCommand === "function");
assert(typeof SuspendGameServerGroup$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TerminateGameSessionCommand === "function");
assert(typeof TerminateGameSession$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAliasCommand === "function");
assert(typeof UpdateAlias$ === "object");
assert(typeof UpdateBuildCommand === "function");
assert(typeof UpdateBuild$ === "object");
assert(typeof UpdateContainerFleetCommand === "function");
assert(typeof UpdateContainerFleet$ === "object");
assert(typeof UpdateContainerGroupDefinitionCommand === "function");
assert(typeof UpdateContainerGroupDefinition$ === "object");
assert(typeof UpdateFleetAttributesCommand === "function");
assert(typeof UpdateFleetAttributes$ === "object");
assert(typeof UpdateFleetCapacityCommand === "function");
assert(typeof UpdateFleetCapacity$ === "object");
assert(typeof UpdateFleetPortSettingsCommand === "function");
assert(typeof UpdateFleetPortSettings$ === "object");
assert(typeof UpdateGameServerCommand === "function");
assert(typeof UpdateGameServer$ === "object");
assert(typeof UpdateGameServerGroupCommand === "function");
assert(typeof UpdateGameServerGroup$ === "object");
assert(typeof UpdateGameSessionCommand === "function");
assert(typeof UpdateGameSession$ === "object");
assert(typeof UpdateGameSessionQueueCommand === "function");
assert(typeof UpdateGameSessionQueue$ === "object");
assert(typeof UpdateMatchmakingConfigurationCommand === "function");
assert(typeof UpdateMatchmakingConfiguration$ === "object");
assert(typeof UpdateRuntimeConfigurationCommand === "function");
assert(typeof UpdateRuntimeConfiguration$ === "object");
assert(typeof UpdateScriptCommand === "function");
assert(typeof UpdateScript$ === "object");
assert(typeof ValidateMatchmakingRuleSetCommand === "function");
assert(typeof ValidateMatchmakingRuleSet$ === "object");
// structural schemas
assert(typeof AcceptMatchInput$ === "object");
assert(typeof AcceptMatchOutput$ === "object");
assert(typeof Alias$ === "object");
assert(typeof AnywhereConfiguration$ === "object");
assert(typeof AttributeValue$ === "object");
assert(typeof AwsCredentials$ === "object");
assert(typeof Build$ === "object");
assert(typeof CertificateConfiguration$ === "object");
assert(typeof ClaimFilterOption$ === "object");
assert(typeof ClaimGameServerInput$ === "object");
assert(typeof ClaimGameServerOutput$ === "object");
assert(typeof Compute$ === "object");
assert(typeof ConnectionPortRange$ === "object");
assert(typeof ContainerAttribute$ === "object");
assert(typeof ContainerDependency$ === "object");
assert(typeof ContainerEnvironment$ === "object");
assert(typeof ContainerFleet$ === "object");
assert(typeof ContainerFleetLocationAttributes$ === "object");
assert(typeof ContainerGroupDefinition$ === "object");
assert(typeof ContainerHealthCheck$ === "object");
assert(typeof ContainerIdentifier$ === "object");
assert(typeof ContainerMountPoint$ === "object");
assert(typeof ContainerPortConfiguration$ === "object");
assert(typeof ContainerPortRange$ === "object");
assert(typeof CreateAliasInput$ === "object");
assert(typeof CreateAliasOutput$ === "object");
assert(typeof CreateBuildInput$ === "object");
assert(typeof CreateBuildOutput$ === "object");
assert(typeof CreateContainerFleetInput$ === "object");
assert(typeof CreateContainerFleetOutput$ === "object");
assert(typeof CreateContainerGroupDefinitionInput$ === "object");
assert(typeof CreateContainerGroupDefinitionOutput$ === "object");
assert(typeof CreateFleetInput$ === "object");
assert(typeof CreateFleetLocationsInput$ === "object");
assert(typeof CreateFleetLocationsOutput$ === "object");
assert(typeof CreateFleetOutput$ === "object");
assert(typeof CreateGameServerGroupInput$ === "object");
assert(typeof CreateGameServerGroupOutput$ === "object");
assert(typeof CreateGameSessionInput$ === "object");
assert(typeof CreateGameSessionOutput$ === "object");
assert(typeof CreateGameSessionQueueInput$ === "object");
assert(typeof CreateGameSessionQueueOutput$ === "object");
assert(typeof CreateLocationInput$ === "object");
assert(typeof CreateLocationOutput$ === "object");
assert(typeof CreateMatchmakingConfigurationInput$ === "object");
assert(typeof CreateMatchmakingConfigurationOutput$ === "object");
assert(typeof CreateMatchmakingRuleSetInput$ === "object");
assert(typeof CreateMatchmakingRuleSetOutput$ === "object");
assert(typeof CreatePlayerSessionInput$ === "object");
assert(typeof CreatePlayerSessionOutput$ === "object");
assert(typeof CreatePlayerSessionsInput$ === "object");
assert(typeof CreatePlayerSessionsOutput$ === "object");
assert(typeof CreateScriptInput$ === "object");
assert(typeof CreateScriptOutput$ === "object");
assert(typeof CreateVpcPeeringAuthorizationInput$ === "object");
assert(typeof CreateVpcPeeringAuthorizationOutput$ === "object");
assert(typeof CreateVpcPeeringConnectionInput$ === "object");
assert(typeof CreateVpcPeeringConnectionOutput$ === "object");
assert(typeof DeleteAliasInput$ === "object");
assert(typeof DeleteBuildInput$ === "object");
assert(typeof DeleteContainerFleetInput$ === "object");
assert(typeof DeleteContainerFleetOutput$ === "object");
assert(typeof DeleteContainerGroupDefinitionInput$ === "object");
assert(typeof DeleteContainerGroupDefinitionOutput$ === "object");
assert(typeof DeleteFleetInput$ === "object");
assert(typeof DeleteFleetLocationsInput$ === "object");
assert(typeof DeleteFleetLocationsOutput$ === "object");
assert(typeof DeleteGameServerGroupInput$ === "object");
assert(typeof DeleteGameServerGroupOutput$ === "object");
assert(typeof DeleteGameSessionQueueInput$ === "object");
assert(typeof DeleteGameSessionQueueOutput$ === "object");
assert(typeof DeleteLocationInput$ === "object");
assert(typeof DeleteLocationOutput$ === "object");
assert(typeof DeleteMatchmakingConfigurationInput$ === "object");
assert(typeof DeleteMatchmakingConfigurationOutput$ === "object");
assert(typeof DeleteMatchmakingRuleSetInput$ === "object");
assert(typeof DeleteMatchmakingRuleSetOutput$ === "object");
assert(typeof DeleteScalingPolicyInput$ === "object");
assert(typeof DeleteScriptInput$ === "object");
assert(typeof DeleteVpcPeeringAuthorizationInput$ === "object");
assert(typeof DeleteVpcPeeringAuthorizationOutput$ === "object");
assert(typeof DeleteVpcPeeringConnectionInput$ === "object");
assert(typeof DeleteVpcPeeringConnectionOutput$ === "object");
assert(typeof DeploymentConfiguration$ === "object");
assert(typeof DeploymentDetails$ === "object");
assert(typeof DeregisterComputeInput$ === "object");
assert(typeof DeregisterComputeOutput$ === "object");
assert(typeof DeregisterGameServerInput$ === "object");
assert(typeof DescribeAliasInput$ === "object");
assert(typeof DescribeAliasOutput$ === "object");
assert(typeof DescribeBuildInput$ === "object");
assert(typeof DescribeBuildOutput$ === "object");
assert(typeof DescribeComputeInput$ === "object");
assert(typeof DescribeComputeOutput$ === "object");
assert(typeof DescribeContainerFleetInput$ === "object");
assert(typeof DescribeContainerFleetOutput$ === "object");
assert(typeof DescribeContainerGroupDefinitionInput$ === "object");
assert(typeof DescribeContainerGroupDefinitionOutput$ === "object");
assert(typeof DescribeEC2InstanceLimitsInput$ === "object");
assert(typeof DescribeEC2InstanceLimitsOutput$ === "object");
assert(typeof DescribeFleetAttributesInput$ === "object");
assert(typeof DescribeFleetAttributesOutput$ === "object");
assert(typeof DescribeFleetCapacityInput$ === "object");
assert(typeof DescribeFleetCapacityOutput$ === "object");
assert(typeof DescribeFleetDeploymentInput$ === "object");
assert(typeof DescribeFleetDeploymentOutput$ === "object");
assert(typeof DescribeFleetEventsInput$ === "object");
assert(typeof DescribeFleetEventsOutput$ === "object");
assert(typeof DescribeFleetLocationAttributesInput$ === "object");
assert(typeof DescribeFleetLocationAttributesOutput$ === "object");
assert(typeof DescribeFleetLocationCapacityInput$ === "object");
assert(typeof DescribeFleetLocationCapacityOutput$ === "object");
assert(typeof DescribeFleetLocationUtilizationInput$ === "object");
assert(typeof DescribeFleetLocationUtilizationOutput$ === "object");
assert(typeof DescribeFleetPortSettingsInput$ === "object");
assert(typeof DescribeFleetPortSettingsOutput$ === "object");
assert(typeof DescribeFleetUtilizationInput$ === "object");
assert(typeof DescribeFleetUtilizationOutput$ === "object");
assert(typeof DescribeGameServerGroupInput$ === "object");
assert(typeof DescribeGameServerGroupOutput$ === "object");
assert(typeof DescribeGameServerInput$ === "object");
assert(typeof DescribeGameServerInstancesInput$ === "object");
assert(typeof DescribeGameServerInstancesOutput$ === "object");
assert(typeof DescribeGameServerOutput$ === "object");
assert(typeof DescribeGameSessionDetailsInput$ === "object");
assert(typeof DescribeGameSessionDetailsOutput$ === "object");
assert(typeof DescribeGameSessionPlacementInput$ === "object");
assert(typeof DescribeGameSessionPlacementOutput$ === "object");
assert(typeof DescribeGameSessionQueuesInput$ === "object");
assert(typeof DescribeGameSessionQueuesOutput$ === "object");
assert(typeof DescribeGameSessionsInput$ === "object");
assert(typeof DescribeGameSessionsOutput$ === "object");
assert(typeof DescribeInstancesInput$ === "object");
assert(typeof DescribeInstancesOutput$ === "object");
assert(typeof DescribeMatchmakingConfigurationsInput$ === "object");
assert(typeof DescribeMatchmakingConfigurationsOutput$ === "object");
assert(typeof DescribeMatchmakingInput$ === "object");
assert(typeof DescribeMatchmakingOutput$ === "object");
assert(typeof DescribeMatchmakingRuleSetsInput$ === "object");
assert(typeof DescribeMatchmakingRuleSetsOutput$ === "object");
assert(typeof DescribePlayerSessionsInput$ === "object");
assert(typeof DescribePlayerSessionsOutput$ === "object");
assert(typeof DescribeRuntimeConfigurationInput$ === "object");
assert(typeof DescribeRuntimeConfigurationOutput$ === "object");
assert(typeof DescribeScalingPoliciesInput$ === "object");
assert(typeof DescribeScalingPoliciesOutput$ === "object");
assert(typeof DescribeScriptInput$ === "object");
assert(typeof DescribeScriptOutput$ === "object");
assert(typeof DescribeVpcPeeringAuthorizationsInput$ === "object");
assert(typeof DescribeVpcPeeringAuthorizationsOutput$ === "object");
assert(typeof DescribeVpcPeeringConnectionsInput$ === "object");
assert(typeof DescribeVpcPeeringConnectionsOutput$ === "object");
assert(typeof DesiredPlayerSession$ === "object");
assert(typeof EC2InstanceCounts$ === "object");
assert(typeof EC2InstanceLimit$ === "object");
assert(typeof Event$ === "object");
assert(typeof FilterConfiguration$ === "object");
assert(typeof FleetAttributes$ === "object");
assert(typeof FleetCapacity$ === "object");
assert(typeof FleetDeployment$ === "object");
assert(typeof FleetUtilization$ === "object");
assert(typeof GameProperty$ === "object");
assert(typeof GameServer$ === "object");
assert(typeof GameServerContainerDefinition$ === "object");
assert(typeof GameServerContainerDefinitionInput$ === "object");
assert(typeof GameServerContainerGroupCounts$ === "object");
assert(typeof GameServerGroup$ === "object");
assert(typeof GameServerGroupAutoScalingPolicy$ === "object");
assert(typeof GameServerInstance$ === "object");
assert(typeof GameSession$ === "object");
assert(typeof GameSessionConnectionInfo$ === "object");
assert(typeof GameSessionCreationLimitPolicy$ === "object");
assert(typeof GameSessionDetail$ === "object");
assert(typeof GameSessionPlacement$ === "object");
assert(typeof GameSessionQueue$ === "object");
assert(typeof GameSessionQueueDestination$ === "object");
assert(typeof GetComputeAccessInput$ === "object");
assert(typeof GetComputeAccessOutput$ === "object");
assert(typeof GetComputeAuthTokenInput$ === "object");
assert(typeof GetComputeAuthTokenOutput$ === "object");
assert(typeof GetGameSessionLogUrlInput$ === "object");
assert(typeof GetGameSessionLogUrlOutput$ === "object");
assert(typeof GetInstanceAccessInput$ === "object");
assert(typeof GetInstanceAccessOutput$ === "object");
assert(typeof Instance$ === "object");
assert(typeof InstanceAccess$ === "object");
assert(typeof InstanceCredentials$ === "object");
assert(typeof InstanceDefinition$ === "object");
assert(typeof IpPermission$ === "object");
assert(typeof LaunchTemplateSpecification$ === "object");
assert(typeof ListAliasesInput$ === "object");
assert(typeof ListAliasesOutput$ === "object");
assert(typeof ListBuildsInput$ === "object");
assert(typeof ListBuildsOutput$ === "object");
assert(typeof ListComputeInput$ === "object");
assert(typeof ListComputeOutput$ === "object");
assert(typeof ListContainerFleetsInput$ === "object");
assert(typeof ListContainerFleetsOutput$ === "object");
assert(typeof ListContainerGroupDefinitionsInput$ === "object");
assert(typeof ListContainerGroupDefinitionsOutput$ === "object");
assert(typeof ListContainerGroupDefinitionVersionsInput$ === "object");
assert(typeof ListContainerGroupDefinitionVersionsOutput$ === "object");
assert(typeof ListFleetDeploymentsInput$ === "object");
assert(typeof ListFleetDeploymentsOutput$ === "object");
assert(typeof ListFleetsInput$ === "object");
assert(typeof ListFleetsOutput$ === "object");
assert(typeof ListGameServerGroupsInput$ === "object");
assert(typeof ListGameServerGroupsOutput$ === "object");
assert(typeof ListGameServersInput$ === "object");
assert(typeof ListGameServersOutput$ === "object");
assert(typeof ListLocationsInput$ === "object");
assert(typeof ListLocationsOutput$ === "object");
assert(typeof ListScriptsInput$ === "object");
assert(typeof ListScriptsOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LocationalDeployment$ === "object");
assert(typeof LocationAttributes$ === "object");
assert(typeof LocationConfiguration$ === "object");
assert(typeof LocationModel$ === "object");
assert(typeof LocationState$ === "object");
assert(typeof LogConfiguration$ === "object");
assert(typeof MatchedPlayerSession$ === "object");
assert(typeof MatchmakingConfiguration$ === "object");
assert(typeof MatchmakingRuleSet$ === "object");
assert(typeof MatchmakingTicket$ === "object");
assert(typeof PingBeacon$ === "object");
assert(typeof PlacedPlayerSession$ === "object");
assert(typeof Player$ === "object");
assert(typeof PlayerLatency$ === "object");
assert(typeof PlayerLatencyPolicy$ === "object");
assert(typeof PlayerSession$ === "object");
assert(typeof PriorityConfiguration$ === "object");
assert(typeof PriorityConfigurationOverride$ === "object");
assert(typeof PutScalingPolicyInput$ === "object");
assert(typeof PutScalingPolicyOutput$ === "object");
assert(typeof RegisterComputeInput$ === "object");
assert(typeof RegisterComputeOutput$ === "object");
assert(typeof RegisterGameServerInput$ === "object");
assert(typeof RegisterGameServerOutput$ === "object");
assert(typeof RequestUploadCredentialsInput$ === "object");
assert(typeof RequestUploadCredentialsOutput$ === "object");
assert(typeof ResolveAliasInput$ === "object");
assert(typeof ResolveAliasOutput$ === "object");
assert(typeof ResourceCreationLimitPolicy$ === "object");
assert(typeof ResumeGameServerGroupInput$ === "object");
assert(typeof ResumeGameServerGroupOutput$ === "object");
assert(typeof RoutingStrategy$ === "object");
assert(typeof RuntimeConfiguration$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof ScalingPolicy$ === "object");
assert(typeof Script$ === "object");
assert(typeof SearchGameSessionsInput$ === "object");
assert(typeof SearchGameSessionsOutput$ === "object");
assert(typeof ServerProcess$ === "object");
assert(typeof StartFleetActionsInput$ === "object");
assert(typeof StartFleetActionsOutput$ === "object");
assert(typeof StartGameSessionPlacementInput$ === "object");
assert(typeof StartGameSessionPlacementOutput$ === "object");
assert(typeof StartMatchBackfillInput$ === "object");
assert(typeof StartMatchBackfillOutput$ === "object");
assert(typeof StartMatchmakingInput$ === "object");
assert(typeof StartMatchmakingOutput$ === "object");
assert(typeof StopFleetActionsInput$ === "object");
assert(typeof StopFleetActionsOutput$ === "object");
assert(typeof StopGameSessionPlacementInput$ === "object");
assert(typeof StopGameSessionPlacementOutput$ === "object");
assert(typeof StopMatchmakingInput$ === "object");
assert(typeof StopMatchmakingOutput$ === "object");
assert(typeof SupportContainerDefinition$ === "object");
assert(typeof SupportContainerDefinitionInput$ === "object");
assert(typeof SuspendGameServerGroupInput$ === "object");
assert(typeof SuspendGameServerGroupOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetConfiguration$ === "object");
assert(typeof TargetTrackingConfiguration$ === "object");
assert(typeof TerminateGameSessionInput$ === "object");
assert(typeof TerminateGameSessionOutput$ === "object");
assert(typeof UDPEndpoint$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAliasInput$ === "object");
assert(typeof UpdateAliasOutput$ === "object");
assert(typeof UpdateBuildInput$ === "object");
assert(typeof UpdateBuildOutput$ === "object");
assert(typeof UpdateContainerFleetInput$ === "object");
assert(typeof UpdateContainerFleetOutput$ === "object");
assert(typeof UpdateContainerGroupDefinitionInput$ === "object");
assert(typeof UpdateContainerGroupDefinitionOutput$ === "object");
assert(typeof UpdateFleetAttributesInput$ === "object");
assert(typeof UpdateFleetAttributesOutput$ === "object");
assert(typeof UpdateFleetCapacityInput$ === "object");
assert(typeof UpdateFleetCapacityOutput$ === "object");
assert(typeof UpdateFleetPortSettingsInput$ === "object");
assert(typeof UpdateFleetPortSettingsOutput$ === "object");
assert(typeof UpdateGameServerGroupInput$ === "object");
assert(typeof UpdateGameServerGroupOutput$ === "object");
assert(typeof UpdateGameServerInput$ === "object");
assert(typeof UpdateGameServerOutput$ === "object");
assert(typeof UpdateGameSessionInput$ === "object");
assert(typeof UpdateGameSessionOutput$ === "object");
assert(typeof UpdateGameSessionQueueInput$ === "object");
assert(typeof UpdateGameSessionQueueOutput$ === "object");
assert(typeof UpdateMatchmakingConfigurationInput$ === "object");
assert(typeof UpdateMatchmakingConfigurationOutput$ === "object");
assert(typeof UpdateRuntimeConfigurationInput$ === "object");
assert(typeof UpdateRuntimeConfigurationOutput$ === "object");
assert(typeof UpdateScriptInput$ === "object");
assert(typeof UpdateScriptOutput$ === "object");
assert(typeof ValidateMatchmakingRuleSetInput$ === "object");
assert(typeof ValidateMatchmakingRuleSetOutput$ === "object");
assert(typeof VpcPeeringAuthorization$ === "object");
assert(typeof VpcPeeringConnection$ === "object");
assert(typeof VpcPeeringConnectionStatus$ === "object");
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
assert(typeof ConflictException$ === "object");
assert(FleetCapacityExceededException.prototype instanceof GameLiftServiceException);
assert(typeof FleetCapacityExceededException$ === "object");
assert(GameSessionFullException.prototype instanceof GameLiftServiceException);
assert(typeof GameSessionFullException$ === "object");
assert(IdempotentParameterMismatchException.prototype instanceof GameLiftServiceException);
assert(typeof IdempotentParameterMismatchException$ === "object");
assert(InternalServiceException.prototype instanceof GameLiftServiceException);
assert(typeof InternalServiceException$ === "object");
assert(InvalidFleetStatusException.prototype instanceof GameLiftServiceException);
assert(typeof InvalidFleetStatusException$ === "object");
assert(InvalidGameSessionStatusException.prototype instanceof GameLiftServiceException);
assert(typeof InvalidGameSessionStatusException$ === "object");
assert(InvalidRequestException.prototype instanceof GameLiftServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(LimitExceededException.prototype instanceof GameLiftServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotFoundException.prototype instanceof GameLiftServiceException);
assert(typeof NotFoundException$ === "object");
assert(NotReadyException.prototype instanceof GameLiftServiceException);
assert(typeof NotReadyException$ === "object");
assert(OutOfCapacityException.prototype instanceof GameLiftServiceException);
assert(typeof OutOfCapacityException$ === "object");
assert(TaggingFailedException.prototype instanceof GameLiftServiceException);
assert(typeof TaggingFailedException$ === "object");
assert(TerminalRoutingStrategyException.prototype instanceof GameLiftServiceException);
assert(typeof TerminalRoutingStrategyException$ === "object");
assert(UnauthorizedException.prototype instanceof GameLiftServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(UnsupportedRegionException.prototype instanceof GameLiftServiceException);
assert(typeof UnsupportedRegionException$ === "object");
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
