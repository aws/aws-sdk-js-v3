// smithy-typescript generated code
import type {
  BackfillMode,
  BalancingStrategy,
  ContainerFleetRemoveAttribute,
  ContainerGroupDefinitionRemoveAttribute,
  ContainerOperatingSystem,
  FlexMatchMode,
  GameServerHealthCheck,
  GameServerProtectionPolicy,
  GameServerUtilizationStatus,
  PlayerSessionCreationPolicy,
  ProtectionPolicy,
} from "./enums";
import type {
  AnywhereConfiguration,
  Build,
  ConnectionPortRange,
  ContainerFleet,
  ContainerGroupDefinition,
  DeploymentConfiguration,
  FilterConfiguration,
  GameProperty,
  GameServer,
  GameServerContainerDefinitionInput,
  GameServerGroup,
  GameSession,
  GameSessionCreationLimitPolicy,
  GameSessionQueue,
  GameSessionQueueDestination,
  InstanceDefinition,
  IpPermission,
  LogConfiguration,
  ManagedCapacityConfiguration,
  MatchmakingConfiguration,
  PlayerLatencyPolicy,
  PriorityConfiguration,
  ResourceCreationLimitPolicy,
  RuntimeConfiguration,
  S3Location,
  Script,
  SupportContainerDefinitionInput,
} from "./models_0";

/**
 * @public
 */
export interface UpdateBuildOutput {
  /**
   * The updated build resource.
   *
   * @public
   */
  Build?: Build | undefined;
}

/**
 * @public
 */
export interface UpdateContainerFleetInput {
  /**
   * A unique identifier for the container fleet to update. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The name or ARN value of a new game server container group definition to deploy on the fleet. If you're updating the fleet to a specific version of a container group definition, use the ARN value and include the version number. If you're updating the fleet to the latest version of a container group definition, you can use the name value. You can't remove a fleet's game server container group definition, you can only update or replace it with another definition.
   *
   * Update a container group definition by calling [UpdateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateContainerGroupDefinition.html). This operation creates a [ContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html) resource with an incremented version.
   *
   * @public
   */
  GameServerContainerGroupDefinitionName?: string | undefined;

  /**
   * The name or ARN value of a new per-instance container group definition to deploy on the fleet. If you're updating the fleet to a specific version of a container group definition, use the ARN value and include the version number. If you're updating the fleet to the latest version of a container group definition, you can use the name value.
   *
   * Update a container group definition by calling [UpdateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateContainerGroupDefinition.html). This operation creates a [ContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html) resource with an incremented version.
   *
   * To remove a fleet's per-instance container group definition, leave this parameter empty and use the parameter `RemoveAttributes`.
   *
   * @public
   */
  PerInstanceContainerGroupDefinitionName?: string | undefined;

  /**
   * The number of times to replicate the game server container group on each fleet instance. By default, Amazon GameLift Servers calculates the maximum number of game server container groups that can fit on each instance. You can remove this property value to use the calculated value, or set it manually. If you set this number manually, Amazon GameLift Servers uses your value as long as it's less than the calculated maximum.
   *
   * @public
   */
  GameServerContainerGroupsPerInstance?: number | undefined;

  /**
   * A revised set of port numbers to open on each fleet instance. By default, Amazon GameLift Servers calculates an optimal port range based on your fleet configuration. If you previously set this parameter manually, you can't reset this to use the calculated settings.
   *
   * The port range must not overlap with the Amazon GameLift Servers reserved port range `4092-4191`. This range is reserved for internal Amazon GameLift Servers services.
   *
   * @public
   */
  InstanceConnectionPortRange?: ConnectionPortRange | undefined;

  /**
   * A set of ports to add to the container fleet's inbound permissions.
   *
   * The port range must not overlap with the Amazon GameLift Servers reserved port range `4092-4191`. This range is reserved for internal Amazon GameLift Servers services.
   *
   * @public
   */
  InstanceInboundPermissionAuthorizations?: IpPermission[] | undefined;

  /**
   * A set of ports to remove from the container fleet's inbound permissions.
   *
   * @public
   */
  InstanceInboundPermissionRevocations?: IpPermission[] | undefined;

  /**
   * Instructions for how to deploy updates to a container fleet, if the fleet update initiates a deployment. The deployment configuration lets you determine how to replace fleet instances and what actions to take if the deployment fails.
   *
   * @public
   */
  DeploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * A meaningful description of the container fleet.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of an Amazon Web Services CloudWatch metric group to add this fleet to.
   *
   * @public
   */
  MetricGroups?: string[] | undefined;

  /**
   * The game session protection policy to apply to all new game sessions that are started in this fleet. Game sessions that already exist are not affected.
   *
   * @public
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy | undefined;

  /**
   * A policy that limits the number of game sessions that each individual player can create on instances in this fleet. The limit applies for a specified span of time.
   *
   * @public
   */
  GameSessionCreationLimitPolicy?: GameSessionCreationLimitPolicy | undefined;

  /**
   * The method for collecting container logs for the fleet.
   *
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * If set, this update removes a fleet's per-instance container group definition. You can't remove a fleet's game server container group definition.
   *
   * @public
   */
  RemoveAttributes?: ContainerFleetRemoveAttribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateContainerFleetOutput {
  /**
   * A collection of container fleet objects for all fleets that match the request criteria.
   *
   * @public
   */
  ContainerFleet?: ContainerFleet | undefined;
}

/**
 * @public
 */
export interface UpdateContainerGroupDefinitionInput {
  /**
   * A descriptive identifier for the container group definition. The name value must be unique in an Amazon Web Services Region.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An updated definition for the game server container in this group. Define a game server container only when the container group type is `GAME_SERVER`. You can pass in your container definitions as a JSON file.
   *
   * @public
   */
  GameServerContainerDefinition?: GameServerContainerDefinitionInput | undefined;

  /**
   * One or more definitions for support containers in this group. You can define a support container in any type of container group. You can pass in your container definitions as a JSON file.
   *
   * @public
   */
  SupportContainerDefinitions?: SupportContainerDefinitionInput[] | undefined;

  /**
   * The maximum amount of memory (in MiB) to allocate to the container group. All containers in the group share this memory. If you specify memory limits for an individual container, the total value must be greater than any individual container's memory limit.
   *
   * @public
   */
  TotalMemoryLimitMebibytes?: number | undefined;

  /**
   * The maximum amount of vCPU units to allocate to the container group (1 vCPU is equal to 1024 CPU units). All containers in the group share these resources. If you set vCPU reservations for individual containers, the total value must be equal to or greater than the sum of the `Vcpu` values for all containers in the group.
   *
   * For a game server container group, Amazon GameLift Servers requires either a total vCPU limit or a `Vcpu` value for the game server container. If the container group has a total vCPU limit, Amazon GameLift Servers uses this value to calculate how many game server container groups fit on an instance. If the container group doesn't have a total vCPU limit, its containers can use up to the instance's available vCPU, and Amazon GameLift Servers uses the sum of the containers' `Vcpu` values to calculate how many game server container groups fit on an instance. To remove the total vCPU limit, omit this parameter and set `RemoveAttributes` to `TOTAL_VCPU_LIMIT`.
   *
   * @public
   */
  TotalVcpuLimit?: number | undefined;

  /**
   * A description for this update to the container group definition.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The container group definition version to update. The new version starts with values from the source version, and then updates values included in this request.
   *
   * @public
   */
  SourceVersionNumber?: number | undefined;

  /**
   * The platform that all containers in the group use. Containers in a group must run on the same operating system.
   *
   * > **Note:** Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the [Amazon Linux 2 FAQs](http://aws.amazon.com/amazon-linux-2/faqs/). For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See [Migrate to server SDK version 5.](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html)
   *
   * @public
   */
  OperatingSystem?: ContainerOperatingSystem | undefined;

  /**
   * If set, this update removes the container group's total vCPU limit, and the group's containers can use up to the instance's available vCPU. You can't remove the total vCPU limit from a per-instance container group. A game server container group needs either a total vCPU limit or a `Vcpu` value for the game server container. You can't set `TotalVcpuLimit` in the same request.
   *
   * @public
   */
  RemoveAttributes?: ContainerGroupDefinitionRemoveAttribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateContainerGroupDefinitionOutput {
  /**
   * The properties of the updated container group definition version.
   *
   * @public
   */
  ContainerGroupDefinition?: ContainerGroupDefinition | undefined;
}

/**
 * @public
 */
export interface UpdateFleetAttributesInput {
  /**
   * A unique identifier for the fleet to update attribute metadata for. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A human-readable description of a fleet.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The game session protection policy to apply to all new game sessions created in this fleet. Game sessions that already exist are not affected. You can set protection for individual game sessions using [UpdateGameSession](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html) .
   *
   * - **NoProtection** -- The game session can be terminated during a scale-down event.
   * - **FullProtection** -- If the game session is in an `ACTIVE` status, it cannot be terminated during a scale-down event.
   *
   * @public
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy | undefined;

  /**
   * Policy settings that limit the number of game sessions an individual player can create over a span of time.
   *
   * @public
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy | undefined;

  /**
   * The name of a metric group to add this fleet to. Use a metric group in Amazon CloudWatch to aggregate the metrics from multiple fleets. Provide an existing metric group name, or create a new metric group by providing a new name. A fleet can only be in one metric group at a time.
   *
   * @public
   */
  MetricGroups?: string[] | undefined;

  /**
   * Amazon GameLift Servers Anywhere configuration options.
   *
   * @public
   */
  AnywhereConfiguration?: AnywhereConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFleetAttributesOutput {
  /**
   * A unique identifier for the fleet that was updated.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912`.
   *
   * @public
   */
  FleetArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFleetCapacityInput {
  /**
   * A unique identifier for the fleet to update capacity settings for. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The number of Amazon EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits. Changes in desired instance value can take up to 1 minute to be reflected when viewing the fleet's capacity settings.
   *
   * @public
   */
  DesiredInstances?: number | undefined;

  /**
   * The minimum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 0. This parameter cannot be set when using a ManagedCapacityConfiguration where ZeroCapacityStrategy has a value of SCALE_TO_AND_FROM_ZERO.
   *
   * @public
   */
  MinSize?: number | undefined;

  /**
   * The maximum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 1.
   *
   * @public
   */
  MaxSize?: number | undefined;

  /**
   * The name of a remote location to update fleet capacity settings for, in the form of an Amazon Web Services Region code such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * Configuration for Amazon GameLift Servers-managed capacity scaling options.
   *
   * @public
   */
  ManagedCapacityConfiguration?: ManagedCapacityConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFleetCapacityOutput {
  /**
   * A unique identifier for the fleet that was updated.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912`.
   *
   * @public
   */
  FleetArn?: string | undefined;

  /**
   * The remote location being updated, expressed as an Amazon Web Services Region code, such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * Configuration for Amazon GameLift Servers-managed capacity scaling options.
   *
   * @public
   */
  ManagedCapacityConfiguration?: ManagedCapacityConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFleetPortSettingsInput {
  /**
   * A unique identifier for the fleet to update port settings for. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * A collection of port settings to be added to the fleet resource.
   *
   * @public
   */
  InboundPermissionAuthorizations?: IpPermission[] | undefined;

  /**
   * A collection of port settings to be removed from the fleet resource.
   *
   * @public
   */
  InboundPermissionRevocations?: IpPermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateFleetPortSettingsOutput {
  /**
   * A unique identifier for the fleet that was updated.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912`.
   *
   * @public
   */
  FleetArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGameServerInput {
  /**
   * A unique identifier for the game server group where the game server is running.
   *
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * A custom string that uniquely identifies the game server to update.
   *
   * @public
   */
  GameServerId: string | undefined;

  /**
   * A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers.
   *
   * @public
   */
  GameServerData?: string | undefined;

  /**
   * Indicates if the game server is available or is currently hosting gameplay. You can update a game server status from `AVAILABLE` to `UTILIZED`, but you can't change the status from `UTILIZED` to `AVAILABLE`.
   *
   * @public
   */
  UtilizationStatus?: GameServerUtilizationStatus | undefined;

  /**
   * Indicates health status of the game server. A request that includes this parameter updates the game server's *LastHealthCheckTime* timestamp.
   *
   * @public
   */
  HealthCheck?: GameServerHealthCheck | undefined;
}

/**
 * @public
 */
export interface UpdateGameServerOutput {
  /**
   * Object that describes the newly updated game server.
   *
   * @public
   */
  GameServer?: GameServer | undefined;
}

/**
 * @public
 */
export interface UpdateGameServerGroupInput {
  /**
   * A unique identifier for the game server group. Use either the name or ARN value.
   *
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) for an IAM role that allows Amazon GameLift Servers to access your Amazon EC2 Auto Scaling groups.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * An updated list of Amazon EC2 instance types to use in the Auto Scaling group. The instance definitions must specify at least two different instance types that are supported by Amazon GameLift Servers FleetIQ. This updated list replaces the entire current list of instance definitions for the game server group. For more information on instance types, see [EC2 Instance Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*. You can optionally specify capacity weighting for each instance type. If no weight value is specified for an instance type, it is set to the default value "1". For more information about capacity weighting, see [Instance Weighting for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html) in the Amazon EC2 Auto Scaling User Guide.
   *
   * @public
   */
  InstanceDefinitions?: InstanceDefinition[] | undefined;

  /**
   * A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion. An exception to this is with Spot Instances, which can be terminated by Amazon Web Services regardless of protection status. This property is set to `NO_PROTECTION` by default.
   *
   * @public
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy | undefined;

  /**
   * Indicates how Amazon GameLift Servers FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group. Method options include the following:
   *
   * - `SPOT_ONLY` - Only Spot Instances are used in the game server group. If Spot Instances are unavailable or not viable for game hosting, the game server group provides no hosting capacity until Spot Instances can again be used. Until then, no new instances are started, and the existing nonviable Spot Instances are terminated (after current gameplay ends) and are not replaced.
   * - `SPOT_PREFERRED` - (default value) Spot Instances are used whenever available in the game server group. If Spot Instances are unavailable, the game server group continues to provide hosting capacity by falling back to On-Demand Instances. Existing nonviable Spot Instances are terminated (after current gameplay ends) and are replaced with new On-Demand Instances.
   * - `ON_DEMAND_ONLY` - Only On-Demand Instances are used in the game server group. No Spot Instances are used, even when available, while this balancing strategy is in force.
   *
   * @public
   */
  BalancingStrategy?: BalancingStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateGameServerGroupOutput {
  /**
   * An object that describes the game server group resource with updated properties.
   *
   * @public
   */
  GameServerGroup?: GameServerGroup | undefined;
}

/**
 * @public
 */
export interface UpdateGameSessionInput {
  /**
   * An identifier for the game session that is unique across all regions to update. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`.
   *
   * @public
   */
  GameSessionId: string | undefined;

  /**
   * The maximum number of players that can be connected simultaneously to the game session.
   *
   * @public
   */
  MaximumPlayerSessionCount?: number | undefined;

  /**
   * A descriptive label that is associated with a game session. Session names do not need to be unique.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A policy that determines whether the game session is accepting new players.
   *
   * @public
   */
  PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy | undefined;

  /**
   * Game session protection policy to apply to this game session only.
   *
   * - `NoProtection` -- The game session can be terminated during a scale-down event.
   * - `FullProtection` -- If the game session is in an `ACTIVE` status, it cannot be terminated during a scale-down event.
   *
   * @public
   */
  ProtectionPolicy?: ProtectionPolicy | undefined;

  /**
   * A set of key-value pairs that can store custom data in a game session. For example: `\{"Key": "difficulty", "Value": "novice"\}`. You can use this parameter to modify game properties in an active game session. This action adds new properties and modifies existing properties. There is no way to delete properties. For an example, see [Update the value of a game property](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#game-properties-update).
   *
   * > **Note:**
   * >
   * > - Avoid using periods (".") in property keys if you plan to search for game sessions by properties. Property keys containing periods cannot be searched and will be filtered out from search results due to search index limitations.
   * > - If you use SearchGameSessions API, there is a limit of 500 game property keys across all game sessions and all fleets per region. If the limit is exceeded, there will potentially be game session entries missing from SearchGameSessions API results.
   *
   * @public
   */
  GameProperties?: GameProperty[] | undefined;
}

/**
 * @public
 */
export interface UpdateGameSessionOutput {
  /**
   * The updated game session properties.
   *
   * @public
   */
  GameSession?: GameSession | undefined;
}

/**
 * @public
 */
export interface UpdateGameSessionQueueInput {
  /**
   * A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a `TIMED_OUT` status.
   *
   * > **Note:** The minimum value is 10 and the maximum value is 600.
   *
   * @public
   */
  TimeoutInSeconds?: number | undefined;

  /**
   * A set of policies that enforce a sliding cap on player latency when processing game sessions placement requests. Use multiple policies to gradually relax the cap over time if Amazon GameLift Servers can't make a placement. Policies are evaluated in order starting with the lowest maximum latency value. When updating policies, provide a complete collection of policies.
   *
   * @public
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[] | undefined;

  /**
   * A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference. When updating this list, provide a complete list of destinations.
   *
   * @public
   */
  Destinations?: GameSessionQueueDestination[] | undefined;

  /**
   * A list of locations where a queue is allowed to place new game sessions. Locations are specified in the form of Amazon Web Services Region codes, such as `us-west-2`. If this parameter is not set, game sessions can be placed in any queue location. To remove an existing filter configuration, pass in an empty set.
   *
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * Custom settings to use when prioritizing destinations and locations for game session placements. This configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly named will be automatically applied at the end of the prioritization process. To remove an existing priority configuration, pass in an empty set.
   *
   * @public
   */
  PriorityConfiguration?: PriorityConfiguration | undefined;

  /**
   * Information to be added to all events that are related to this game session queue.
   *
   * @public
   */
  CustomEventData?: string | undefined;

  /**
   * An SNS topic ARN that is set up to receive game session placement notifications. See [Setting up notifications for game session placement](https://docs.aws.amazon.com/gamelift/latest/developerguide/queue-notification.html).
   *
   * @public
   */
  NotificationTarget?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGameSessionQueueOutput {
  /**
   * An object that describes the newly updated game session queue.
   *
   * @public
   */
  GameSessionQueue?: GameSessionQueue | undefined;
}

/**
 * @public
 */
export interface UpdateMatchmakingConfigurationInput {
  /**
   * A unique identifier for the matchmaking configuration to update. You can use either the configuration name or ARN value.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description for the matchmaking configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::gamesessionqueue/<queue name>`. Queues can be located in any Region. Queues are used to start new Amazon GameLift Servers-hosted game sessions for matches that are created with this matchmaking configuration. A matchmaking configuration supports only one queue; if you specify more than one ARN, the request fails with an `InvalidRequestException`. If `FlexMatchMode` is set to `STANDALONE`, do not set this parameter.
   *
   * @public
   */
  GameSessionQueueArns?: string[] | undefined;

  /**
   * The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that fail due to timing out can be resubmitted as needed.
   *
   * @public
   */
  RequestTimeoutSeconds?: number | undefined;

  /**
   * The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.
   *
   * @public
   */
  AcceptanceTimeoutSeconds?: number | undefined;

  /**
   * A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE. With this option enabled, matchmaking tickets use the status `REQUIRES_ACCEPTANCE` to indicate when a completed potential match is waiting for player acceptance.
   *
   * @public
   */
  AcceptanceRequired?: boolean | undefined;

  /**
   * A unique identifier for the matchmaking rule set to use with this configuration. You can use either the rule set name or ARN value. A matchmaking configuration can only use rule sets that are defined in the same Region.
   *
   * @public
   */
  RuleSetName?: string | undefined;

  /**
   * An SNS topic ARN that is set up to receive matchmaking notifications. See [Setting up notifications for matchmaking](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html) for more information.
   *
   * @public
   */
  NotificationTarget?: string | undefined;

  /**
   * The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match. This parameter is not used if `FlexMatchMode` is set to `STANDALONE`.
   *
   * @public
   */
  AdditionalPlayerCount?: number | undefined;

  /**
   * Information to add to all events related to the matchmaking configuration.
   *
   * @public
   */
  CustomEventData?: string | undefined;

  /**
   * A set of key-value pairs that can store custom data in a game session. For example: `\{"Key": "difficulty", "Value": "novice"\}`. This information is added to the new `GameSession` object that is created for a successful match. This parameter is not used if `FlexMatchMode` is set to `STANDALONE`.
   *
   * > **Note:**
   * >
   * > - Avoid using periods (".") in property keys if you plan to search for game sessions by properties. Property keys containing periods cannot be searched and will be filtered out from search results due to search index limitations.
   * > - If you use SearchGameSessions API, there is a limit of 500 game property keys across all game sessions and all fleets per region. If the limit is exceeded, there will potentially be game session entries missing from SearchGameSessions API results.
   *
   * @public
   */
  GameProperties?: GameProperty[] | undefined;

  /**
   * A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see [Start a game session](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession). This information is added to the game session that is created for a successful match. This parameter is not used if `FlexMatchMode` is set to `STANDALONE`.
   *
   * @public
   */
  GameSessionData?: string | undefined;

  /**
   * The method that is used to backfill game sessions created with this matchmaking configuration. Specify MANUAL when your game manages backfill requests manually or does not use the match backfill feature. Specify AUTOMATIC to have GameLift create a match backfill request whenever a game session has one or more open slots. Learn more about manual and automatic backfill in [Backfill Existing Games with FlexMatch](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html). Automatic backfill is not available when `FlexMatchMode` is set to `STANDALONE`.
   *
   * @public
   */
  BackfillMode?: BackfillMode | undefined;

  /**
   * Indicates whether this matchmaking configuration is being used with Amazon GameLift Servers hosting or as a standalone matchmaking solution.
   *
   * - **STANDALONE** - FlexMatch forms matches and returns match information, including players and team assignments, in a [MatchmakingSucceeded](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded) event.
   * - **WITH_QUEUE** - FlexMatch forms matches and uses the specified Amazon GameLift Servers queue to start a game session for the match.
   *
   * @public
   */
  FlexMatchMode?: FlexMatchMode | undefined;
}

/**
 * @public
 */
export interface UpdateMatchmakingConfigurationOutput {
  /**
   * The updated matchmaking configuration.
   *
   * @public
   */
  Configuration?: MatchmakingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRuntimeConfigurationInput {
  /**
   * A unique identifier for the fleet to update runtime configuration for. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * Instructions for launching server processes on fleet computes. Server processes run either a custom game build executable or a Amazon GameLift Servers Realtime script. The runtime configuration lists the types of server processes to run, how to launch them, and the number of processes to run concurrently.
   *
   * @public
   */
  RuntimeConfiguration: RuntimeConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRuntimeConfigurationOutput {
  /**
   * The runtime configuration currently in use by computes in the fleet. If the update is successful, all property changes are shown.
   *
   * @public
   */
  RuntimeConfiguration?: RuntimeConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateScriptInput {
  /**
   * A unique identifier for the Realtime script to update. You can use either the script ID or ARN value.
   *
   * @public
   */
  ScriptId: string | undefined;

  /**
   * A descriptive label that is associated with a script. Script names do not need to be unique.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Version information that is associated with a build or script. Version strings do not need to be unique.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift Servers to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift Servers uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the `ObjectVersion` parameter to specify an earlier version.
   *
   * @public
   */
  StorageLocation?: S3Location | undefined;

  /**
   * A data object containing your Realtime scripts and dependencies as a zip file. The zip file can have one or multiple files. Maximum size of a zip file is 5 MB.
   *
   * When using the Amazon Web Services CLI tool to create a script, this parameter is set to the zip file name. It must be prepended with the string "fileb://" to indicate that the file data is a binary object. For example: `--zip-file fileb://myRealtimeScript.zip`.
   *
   * @public
   */
  ZipFile?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateScriptOutput {
  /**
   * The newly created script record with a unique script ID. The new script's storage location reflects an Amazon S3 location: (1) If the script was uploaded from an S3 bucket under your account, the storage location reflects the information that was provided in the *CreateScript* request; (2) If the script file was uploaded from a local zip file, the storage location reflects an S3 location controlled by the Amazon GameLift Servers service.
   *
   * @public
   */
  Script?: Script | undefined;
}

/**
 * @public
 */
export interface ValidateMatchmakingRuleSetInput {
  /**
   * A collection of matchmaking rules to validate, formatted as a JSON string.
   *
   * @public
   */
  RuleSetBody: string | undefined;
}

/**
 * @public
 */
export interface ValidateMatchmakingRuleSetOutput {
  /**
   * A response indicating whether the rule set is valid.
   *
   * @public
   */
  Valid?: boolean | undefined;
}
