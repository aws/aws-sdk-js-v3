// smithy-typescript generated code
import type {
  AcceptanceType,
  BackfillMode,
  BalancingStrategy,
  BuildStatus,
  CertificateType,
  ComparisonOperatorType,
  ComputeStatus,
  ComputeType,
  ContainerDependencyCondition,
  ContainerFleetBillingType,
  ContainerFleetLocationStatus,
  ContainerFleetStatus,
  ContainerGroupDefinitionStatus,
  ContainerGroupType,
  ContainerMountPointAccessLevel,
  ContainerOperatingSystem,
  DeploymentImpairmentStrategy,
  DeploymentProtectionStrategy,
  DeploymentStatus,
  EC2InstanceType,
  EventCode,
  FilterInstanceStatus,
  FleetAction,
  FleetStatus,
  FleetType,
  FlexMatchMode,
  GameServerClaimStatus,
  GameServerGroupAction,
  GameServerGroupDeleteOption,
  GameServerGroupInstanceType,
  GameServerGroupStatus,
  GameServerInstanceStatus,
  GameServerIpProtocolSupported,
  GameServerProtectionPolicy,
  GameServerUtilizationStatus,
  GameSessionPlacementState,
  GameSessionStatus,
  GameSessionStatusReason,
  InstanceRoleCredentialsProvider,
  InstanceStatus,
  IpProtocol,
  LinuxCapability,
  ListComputeInputStatus,
  LocationFilter,
  LocationUpdateStatus,
  LogDestination,
  MatchmakingConfigurationStatus,
  MetricName,
  OperatingSystem,
  PlacementFallbackStrategy,
  PlayerGatewayMode,
  PlayerGatewayStatus,
  PlayerSessionCreationPolicy,
  PlayerSessionStatus,
  PolicyType,
  PriorityType,
  ProtectionPolicy,
  RoutingStrategyType,
  ScalingAdjustmentType,
  ScalingStatusType,
  SortOrder,
  TerminationMode,
  ZeroCapacityStrategy,
} from "./enums";

/**
 * @public
 */
export interface AcceptMatchInput {
  /**
   * A unique identifier for a matchmaking ticket. The ticket must be in status `REQUIRES_ACCEPTANCE`; otherwise this request will fail.
   *
   * @public
   */
  TicketId: string | undefined;

  /**
   * A unique identifier for a player delivering the response. This parameter can include one or multiple player IDs.
   *
   * @public
   */
  PlayerIds: string[] | undefined;

  /**
   * Player response to the proposed match.
   *
   * @public
   */
  AcceptanceType: AcceptanceType | undefined;
}

/**
 * @public
 */
export interface AcceptMatchOutput {}

/**
 * The routing configuration for a fleet alias.
 *
 * **Related actions**
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @public
 */
export interface RoutingStrategy {
  /**
   * The type of routing strategy for the alias.
   *
   * Possible routing types include the following:
   *
   * - **SIMPLE** - The alias resolves to one specific fleet. Use this type when routing to active fleets.
   * - **TERMINAL** - The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the message embedded.
   *
   * @public
   */
  Type?: RoutingStrategyType | undefined;

  /**
   * A unique identifier for the fleet that the alias points to. This value is the fleet ID, not the fleet ARN.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The message text to be used with a terminal routing strategy.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Properties that describe an alias resource.
 *
 * **Related actions**
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @public
 */
export interface Alias {
  /**
   * A unique identifier for the alias. Alias IDs are unique within a Region.
   *
   * @public
   */
  AliasId?: string | undefined;

  /**
   * A descriptive label that is associated with an alias. Alias names do not need to be unique.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers alias resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::alias/alias-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912`. In a GameLift alias ARN, the resource ID matches the alias ID value.
   *
   * @public
   */
  AliasArn?: string | undefined;

  /**
   * A human-readable description of an alias.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The routing configuration, including routing type and fleet target, for the alias.
   *
   * @public
   */
  RoutingStrategy?: RoutingStrategy | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time that this data object was last modified. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * Amazon GameLift Servers configuration options for your Anywhere fleets.
 *
 * @public
 */
export interface AnywhereConfiguration {
  /**
   * The cost to run your fleet per hour. Amazon GameLift Servers uses the provided cost of your fleet to balance usage in queues. For more information about queues, see [Setting up queues](https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html) in the *Amazon GameLift Servers Developer Guide*.
   *
   * @public
   */
  Cost: string | undefined;
}

/**
 * Values for use in player attribute key-value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each `AttributeValue` object can use only one of the available properties.
 *
 * @public
 */
export interface AttributeValue {
  /**
   * For single string values. Maximum string length is 100 characters.
   *
   * @public
   */
  S?: string | undefined;

  /**
   * For number values, expressed as double.
   *
   * @public
   */
  N?: number | undefined;

  /**
   * For a list of up to 100 strings. Maximum length for each string is 100 characters. Duplicate values are not recognized; all occurrences of the repeated value after the first of a repeated value are ignored.
   *
   * @public
   */
  SL?: string[] | undefined;

  /**
   * For a map of up to 10 data type:value pairs. Maximum length for each string value is 100 characters.
   *
   * @public
   */
  SDM?: Record<string, number> | undefined;
}

/**
 * Amazon Web Services account security credentials that allow interactions with Amazon GameLift Servers resources. The credentials are temporary and valid for a limited time span. You can request fresh credentials at any time.
 *
 * Amazon Web Services security credentials consist of three parts: an access key ID, a secret access key, and a session token. You must use all three parts together to authenticate your access requests.
 *
 * You need Amazon Web Services credentials for the following tasks:
 *
 * - To upload a game server build directly to Amazon GameLift Servers S3 storage using `CreateBuild`. To get access for this task, call [https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html](https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html).
 * - To remotely connect to an active Amazon GameLift Servers fleet instance. To get remote access, call [https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetComputeAccess.html](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetComputeAccess.html).
 *
 * @public
 */
export interface AwsCredentials {
  /**
   * The access key ID that identifies the temporary security credentials.
   *
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * The secret access key that can be used to sign requests.
   *
   * @public
   */
  SecretAccessKey?: string | undefined;

  /**
   * The token that users must pass to the service API to use the temporary credentials.
   *
   * @public
   */
  SessionToken?: string | undefined;
}

/**
 * Properties describing a custom game build.
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @public
 */
export interface Build {
  /**
   * A unique identifier for the build.
   *
   * @public
   */
  BuildId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers build resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::build/build-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912`. In a GameLift build ARN, the resource ID matches the *BuildId* value.
   *
   * @public
   */
  BuildArn?: string | undefined;

  /**
   * A descriptive label that is associated with a build. Build names do not need to be unique. It can be set using [CreateBuild](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html) or [UpdateBuild](https://docs.aws.amazon.com/gamelift/latest/apireference/UpdateBuild).
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
   * Current status of the build.
   *
   * Possible build statuses include the following:
   *
   * - **INITIALIZED** -- A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value.
   * - **READY** -- The game build has been successfully uploaded. You can now create new fleets for this build.
   * - **FAILED** -- The game build upload failed. You cannot create new fleets for this build.
   *
   * @public
   */
  Status?: BuildStatus | undefined;

  /**
   * File size of the uploaded game build, expressed in bytes. When the build status is `INITIALIZED` or when using a custom Amazon S3 storage location, this value is 0.
   *
   * @public
   */
  SizeOnDisk?: number | undefined;

  /**
   * Operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build.
   *
   * > **Note:** Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the [Amazon Linux 2 FAQs](http://aws.amazon.com/amazon-linux-2/faqs/). For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See [Migrate to server SDK version 5.](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html)
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The Amazon GameLift Servers Server SDK version used to develop your game server.
   *
   * @public
   */
  ServerSdkVersion?: string | undefined;
}

/**
 * Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate. The certificate can be retrieved by calling the [Amazon GameLift Servers Server SDK](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html) operation `GetInstanceCertificate`.
 *
 * @public
 */
export interface CertificateConfiguration {
  /**
   * Indicates whether a TLS/SSL certificate is generated for a fleet.
   *
   * Valid values include:
   *
   * - **GENERATED** - Generate a TLS/SSL certificate for this fleet.
   * - **DISABLED** - (default) Do not generate a TLS/SSL certificate for this fleet.
   *
   * @public
   */
  CertificateType: CertificateType | undefined;
}

/**
 * Filters which game servers may be claimed when calling `ClaimGameServer`.
 *
 * @public
 */
export interface ClaimFilterOption {
  /**
   * List of instance statuses that game servers may be claimed on. If provided, the list must contain the `ACTIVE` status.
   *
   * @public
   */
  InstanceStatuses?: FilterInstanceStatus[] | undefined;
}

/**
 * @public
 */
export interface ClaimGameServerInput {
  /**
   * A unique identifier for the game server group where the game server is running. If you are not specifying a game server to claim, this value identifies where you want Amazon GameLift Servers FleetIQ to look for an available game server to claim.
   *
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * A custom string that uniquely identifies the game server to claim. If this parameter is left empty, Amazon GameLift Servers FleetIQ searches for an available game server in the specified game server group.
   *
   * @public
   */
  GameServerId?: string | undefined;

  /**
   * A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers.
   *
   * @public
   */
  GameServerData?: string | undefined;

  /**
   * Object that restricts how a claimed game server is chosen.
   *
   * @public
   */
  FilterOption?: ClaimFilterOption | undefined;
}

/**
 * Properties describing a game server that is running on an instance in a game server group.
 *
 * A game server is created by a successful call to `RegisterGameServer` and deleted by calling `DeregisterGameServer`. A game server is claimed to host a game session by calling `ClaimGameServer`.
 *
 * @public
 */
export interface GameServer {
  /**
   * A unique identifier for the game server group where the game server is running.
   *
   * @public
   */
  GameServerGroupName?: string | undefined;

  /**
   * The ARN identifier for the game server group where the game server is located.
   *
   * @public
   */
  GameServerGroupArn?: string | undefined;

  /**
   * A custom string that uniquely identifies the game server. Game server IDs are developer-defined and are unique across all game server groups in an Amazon Web Services account.
   *
   * @public
   */
  GameServerId?: string | undefined;

  /**
   * The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: `i-1234567890abcdef0`.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The port and IP address that must be used to establish a client connection to the game server.
   *
   * @public
   */
  ConnectionInfo?: string | undefined;

  /**
   * A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers.
   *
   * @public
   */
  GameServerData?: string | undefined;

  /**
   * Indicates when an available game server has been reserved for gameplay but has not yet started hosting a game. Once it is claimed, the game server remains in `CLAIMED` status for a maximum of one minute. During this time, game clients connect to the game server to start the game and trigger the game server to update its utilization status. After one minute, the game server claim status reverts to null.
   *
   * @public
   */
  ClaimStatus?: GameServerClaimStatus | undefined;

  /**
   * Indicates whether the game server is currently available for new games or is busy. Possible statuses include:
   *
   * - `AVAILABLE` - The game server is available to be claimed. A game server that has been claimed remains in this status until it reports game hosting activity.
   * - `UTILIZED` - The game server is currently hosting a game session with players.
   *
   * @public
   */
  UtilizationStatus?: GameServerUtilizationStatus | undefined;

  /**
   * Timestamp that indicates when the game server registered. The format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  RegistrationTime?: Date | undefined;

  /**
   * Timestamp that indicates the last time the game server was claimed. The format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`). This value is used to calculate when a claimed game server's status should revert to null.
   *
   * @public
   */
  LastClaimTime?: Date | undefined;

  /**
   * Timestamp that indicates the last time the game server was updated with health status. The format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`). After game server registration, this property is only changed when a game server update specifies a health check value.
   *
   * @public
   */
  LastHealthCheckTime?: Date | undefined;
}

/**
 * @public
 */
export interface ClaimGameServerOutput {
  /**
   * Object that describes the newly claimed game server.
   *
   * @public
   */
  GameServer?: GameServer | undefined;
}

/**
 * A unique identifier for a container in a container fleet compute.
 *
 * **Returned by:** [DescribeCompute](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeCompute.html)
 *
 * @public
 */
export interface ContainerAttribute {
  /**
   * The identifier for a container that's running in a compute.
   *
   * @public
   */
  ContainerName?: string | undefined;

  /**
   * The runtime ID for the container that's running in a compute. This value is unique within the compute.
   *
   * @public
   */
  ContainerRuntimeId?: string | undefined;
}

/**
 * An Amazon GameLift Servers compute resource for hosting your game servers. Computes in an Amazon GameLift Servers fleet differ depending on the fleet's compute type property as follows:
 *
 * - For managed EC2 fleets, a compute is an EC2 instance.
 * - For Anywhere fleets, a compute is a computing resource that you provide and is registered to the fleet.
 *
 * @public
 */
export interface Compute {
  /**
   * A unique identifier for the fleet that the compute belongs to.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the fleet that the compute belongs to.
   *
   * @public
   */
  FleetArn?: string | undefined;

  /**
   * A descriptive label for the compute resource. For instances in a managed EC2 fleet, the compute name is the same value as the `InstanceId` ID.
   *
   * @public
   */
  ComputeName?: string | undefined;

  /**
   * The ARN that is assigned to a compute resource and uniquely identifies it. ARNs are unique across locations. Instances in managed EC2 fleets are not assigned a Compute ARN.
   *
   * @public
   */
  ComputeArn?: string | undefined;

  /**
   * The IP address of a compute resource. Amazon GameLift Servers requires a DNS name or IP address for a compute.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The DNS name of a compute resource. Amazon GameLift Servers requires a DNS name or IP address for a compute.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * Current status of the compute. A compute must have an `ACTIVE` status to host game sessions. Valid values include `PENDING`, `ACTIVE`, `TERMINATING`, and `IMPAIRED`.
   *
   * > **Note:** While the ComputeStatus enum type is valid for Container based servers, the result may also include other non-enumerated string values such as "Active" for fleets which are not Container-based.
   *
   * @public
   */
  ComputeStatus?: ComputeStatus | undefined;

  /**
   * The name of the custom location you added to the fleet that this compute resource resides in.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The type of operating system on the compute resource.
   *
   * > **Note:** Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the [Amazon Linux 2 FAQs](http://aws.amazon.com/aws.amazon.com/amazon-linux-2/faqs/). For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See [Migrate to server SDK version 5.](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html)
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * The Amazon EC2 instance type that the fleet uses. For registered computes in an Amazon GameLift Servers Anywhere fleet, this property is empty.
   *
   * @public
   */
  Type?: EC2InstanceType | undefined;

  /**
   * The Amazon GameLift Servers SDK endpoint connection for a registered compute resource in an Anywhere fleet. The game servers on the compute use this endpoint to connect to the Amazon GameLift Servers service.
   *
   * @public
   */
  GameLiftServiceSdkEndpoint?: string | undefined;

  /**
   * The endpoint of the Amazon GameLift Servers Agent.
   *
   * @public
   */
  GameLiftAgentEndpoint?: string | undefined;

  /**
   * The `InstanceID` of the EC2 instance that is hosting the compute.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * A set of attributes for each container in the compute.
   *
   * @public
   */
  ContainerAttributes?: ContainerAttribute[] | undefined;

  /**
   * The game server container group definition for the compute.
   *
   * @public
   */
  GameServerContainerGroupDefinitionArn?: string | undefined;
}

/**
 * The set of port numbers to open on each instance in a container fleet. Connection ports are used by inbound traffic to connect with processes that are running in containers on the fleet.
 *
 * The port range must not overlap with the Amazon GameLift Servers reserved port range `4092-4191`. This range is reserved for internal Amazon GameLift Servers services.
 *
 * @public
 */
export interface ConnectionPortRange {
  /**
   * Starting value for the port range.
   *
   * @public
   */
  FromPort: number | undefined;

  /**
   * Ending value for the port. Port numbers are end-inclusive. This value must be equal to or greater than `FromPort`.
   *
   * @public
   */
  ToPort: number | undefined;
}

/**
 * A container's dependency on another container in the same container group. The dependency impacts how the dependent container is able to start or shut down based on the status of the other container.
 *
 * For example, *ContainerA* is configured with the following dependency: a `START` dependency on *ContainerB*. This means that *ContainerA* can't start until *ContainerB* has started. It also means that *ContainerA* must shut down before *ContainerB*.
 *
 * **Part of:** [GameServerContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinition.html), [GameServerContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput.html), [SupportContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinition.html), [SupportContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinitionInput.html)
 *
 * @public
 */
export interface ContainerDependency {
  /**
   * A descriptive label for the container definition that this container depends on.
   *
   * @public
   */
  ContainerName: string | undefined;

  /**
   * The condition that the dependency container must reach before the dependent container can start. Valid conditions include:
   *
   * - START - The dependency container must have started.
   * - COMPLETE - The dependency container has run to completion (exits). Use this condition with nonessential containers, such as those that run a script and then exit. The dependency container can't be an essential container.
   * - SUCCESS - The dependency container has run to completion and exited with a zero status. The dependency container can't be an essential container.
   * - HEALTHY - The dependency container has passed its Docker health check. Use this condition with dependency containers that have health checks configured. This condition is confirmed at container group startup only.
   *
   * @public
   */
  Condition: ContainerDependencyCondition | undefined;
}

/**
 * An environment variable to set inside a container, in the form of a key-value pair.
 *
 * **Part of:** [GameServerContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinition.html), [GameServerContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput.html), [SupportContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinition.html), [SupportContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinitionInput.html)
 *
 * @public
 */
export interface ContainerEnvironment {
  /**
   * The environment variable name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The environment variable value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Information about the most recent deployment for the container fleet.
 *
 * @public
 */
export interface DeploymentDetails {
  /**
   * A unique identifier for a fleet deployment.
   *
   * @public
   */
  LatestDeploymentId?: string | undefined;
}

/**
 * A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.
 *
 * The policy is evaluated when a player tries to create a new game session. On receiving a `CreateGameSession` request, Amazon GameLift Servers checks that the player (identified by `CreatorId`) has created fewer than the game session limit in the specified time period.
 *
 * @public
 */
export interface GameSessionCreationLimitPolicy {
  /**
   * A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.
   *
   * The policy evaluates when a player tries to create a new game session. On receiving a `CreateGameSession` request, Amazon GameLift Servers checks that the player (identified by `CreatorId`) has created fewer than the game session limit in the specified time period.
   *
   * @public
   */
  NewGameSessionsPerCreator?: number | undefined;

  /**
   * The time span used in evaluating the resource creation limit policy.
   *
   * @public
   */
  PolicyPeriodInMinutes?: number | undefined;
}

/**
 * A range of IP addresses and port settings that allow inbound traffic to connect to processes on an instance in a fleet. Processes are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges.
 *
 * For Amazon GameLift Servers Realtime fleets, Amazon GameLift Servers automatically opens two port ranges, one for TCP messaging and one for UDP.
 *
 * @public
 */
export interface IpPermission {
  /**
   * A starting value for a range of allowed port numbers.
   *
   * For fleets using Linux builds, only ports `22` and `1026-60000` are valid.
   *
   * For fleets using Windows builds, only ports `1026-60000` are valid.
   *
   * @public
   */
  FromPort: number | undefined;

  /**
   * An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be equal to or greater than `FromPort`.
   *
   * For fleets using Linux builds, only ports `22` and `1026-60000` are valid.
   *
   * For fleets using Windows builds, only ports `1026-60000` are valid.
   *
   * @public
   */
  ToPort: number | undefined;

  /**
   * A range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "`000.000.000.000/[subnet mask]`" or optionally the shortened version "`0.0.0.0/[subnet mask]`".
   *
   * @public
   */
  IpRange: string | undefined;

  /**
   * The network communication protocol used by the fleet.
   *
   * @public
   */
  Protocol: IpProtocol | undefined;
}

/**
 * Details about a location in a multi-location container fleet.
 *
 * @public
 */
export interface ContainerFleetLocationAttributes {
  /**
   * A location identifier.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The status of fleet activity in the location.
   *
   * - `PENDING` -- A new container fleet has been requested.
   * - `CREATING` -- A new container fleet resource is being created.
   * - `CREATED` -- A new container fleet resource has been created. No fleet instances have been deployed.
   * - `ACTIVATING` -- New container fleet instances are being deployed.
   * - `ACTIVE` -- The container fleet has been deployed and is ready to host game sessions.
   * - `UPDATING` -- The container fleet is being updated. A deployment is in progress.
   * - `EXPIRED` -- The container fleet has been expired. The fleet is scaled down to zero instances and cannot host new game sessions.
   *
   * @public
   */
  Status?: ContainerFleetLocationStatus | undefined;

  /**
   * The current status of player gateway in this location for this container fleet. Note, even if a container fleet has PlayerGatewayMode configured as `ENABLED`, player gateway might not be available in a specific location. For more information about locations where player gateway is supported, see [Amazon GameLift Servers service locations](https://docs.aws.amazon.com/gameliftservers/latest/developerguide/gamelift-regions.html).
   *
   * Possible values include:
   *
   * - `ENABLED` -- Player gateway is available for this container fleet location.
   * - `DISABLED` -- Player gateway is not available for this container fleet location.
   *
   * @public
   */
  PlayerGatewayStatus?: PlayerGatewayStatus | undefined;
}

/**
 * A method for collecting container logs for the fleet. Amazon GameLift Servers saves all standard output for each container in logs, including game session logs. You can select from the following methods:
 *
 * @public
 */
export interface LogConfiguration {
  /**
   * The type of log collection to use for a fleet.
   *
   * - `CLOUDWATCH` -- (default value) Send logs to an Amazon CloudWatch log group that you define. Each container emits a log stream, which is organized in the log group.
   * - `S3` -- Store logs in an Amazon S3 bucket that you define. This bucket must reside in the fleet's home Amazon Web Services Region.
   * - `NONE` -- Don't collect container logs.
   *
   * @public
   */
  LogDestination?: LogDestination | undefined;

  /**
   * If log destination is `S3`, logs are sent to the specified Amazon S3 bucket name.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * If log destination is `CLOUDWATCH`, logs are sent to the specified log group in Amazon CloudWatch.
   *
   * @public
   */
  LogGroupArn?: string | undefined;
}

/**
 * Describes an Amazon GameLift Servers managed container fleet.
 *
 * @public
 */
export interface ContainerFleet {
  /**
   * A unique identifier for the container fleet to retrieve.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912`. In a GameLift fleet ARN, the resource ID matches the `FleetId` value.
   *
   * @public
   */
  FleetArn?: string | undefined;

  /**
   * The unique identifier for an Identity and Access Management (IAM) role with permissions to run your containers on resources that are managed by Amazon GameLift Servers. See [Set up an IAM service role](https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html). This fleet property can't be changed.
   *
   * @public
   */
  FleetRoleArn?: string | undefined;

  /**
   * The name of the fleet's game server container group definition, which describes how to deploy containers with your game server build and support software onto each fleet instance.
   *
   * @public
   */
  GameServerContainerGroupDefinitionName?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to the fleet's game server container group. The ARN value also identifies the specific container group definition version in use.
   *
   * @public
   */
  GameServerContainerGroupDefinitionArn?: string | undefined;

  /**
   * The name of the fleet's per-instance container group definition.
   *
   * @public
   */
  PerInstanceContainerGroupDefinitionName?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to the fleet's per-instance container group. The ARN value also identifies the specific container group definition version in use.
   *
   * @public
   */
  PerInstanceContainerGroupDefinitionArn?: string | undefined;

  /**
   * The set of port numbers to open on each instance in a container fleet. Connection ports are used by inbound traffic to connect with processes that are running in containers on the fleet.
   *
   * The port range must not overlap with the Amazon GameLift Servers reserved port range `4092-4191`. This range is reserved for internal Amazon GameLift Servers services.
   *
   * @public
   */
  InstanceConnectionPortRange?: ConnectionPortRange | undefined;

  /**
   * The IP address ranges and port settings that allow inbound traffic to access game server processes and other processes on this fleet.
   *
   * @public
   */
  InstanceInboundPermissions?: IpPermission[] | undefined;

  /**
   * The number of times to replicate the game server container group on each fleet instance.
   *
   * @public
   */
  GameServerContainerGroupsPerInstance?: number | undefined;

  /**
   * The calculated maximum number of game server container groups that can be deployed on each fleet instance. The calculation depends on the resource needs of the container group and the CPU and memory resources of the fleet's instance type.
   *
   * @public
   */
  MaximumGameServerContainerGroupsPerInstance?: number | undefined;

  /**
   * The Amazon EC2 instance type to use for all instances in the fleet. Instance type determines the computing resources and processing power that's available to host your game servers. This includes CPU, memory, storage, and networking capacity. You can't update this fleet property.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * Indicates whether the fleet uses On-Demand or Spot instances for this fleet. Learn more about when to use [On-Demand versus Spot Instances](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot). You can't update this fleet property.
   *
   * By default, this property is set to `ON_DEMAND`.
   *
   * @public
   */
  BillingType?: ContainerFleetBillingType | undefined;

  /**
   * A meaningful description of the container fleet.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The name of an Amazon Web Services CloudWatch metric group to add this fleet to. Metric groups aggregate metrics for multiple fleets.
   *
   * @public
   */
  MetricGroups?: string[] | undefined;

  /**
   * Determines whether Amazon GameLift Servers can shut down game sessions on the fleet that are actively running and hosting players. Amazon GameLift Servers might prompt an instance shutdown when scaling down fleet capacity or when retiring unhealthy instances. You can also set game session protection for individual game sessions using [UpdateGameSession](gamelift/latest/apireference/API_UpdateGameSession.html).
   *
   * - **NoProtection** -- Game sessions can be shut down during active gameplay.
   * - **FullProtection** -- Game sessions in `ACTIVE` status can't be shut down.
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
   * The current status of the container fleet.
   *
   * - `PENDING` -- A new container fleet has been requested.
   * - `CREATING` -- A new container fleet resource is being created.
   * - `CREATED` -- A new container fleet resource has been created. No fleet instances have been deployed.
   * - `ACTIVATING` -- New container fleet instances are being deployed.
   * - `ACTIVE` -- The container fleet has been deployed and is ready to host game sessions.
   * - `UPDATING` -- The container fleet is being updated. A deployment is in progress.
   * - `EXPIRED` -- The container fleet has been expired. The fleet is scaled down to zero instances and cannot host new game sessions.
   *
   * @public
   */
  Status?: ContainerFleetStatus | undefined;

  /**
   * Information about the most recent deployment for the container fleet.
   *
   * @public
   */
  DeploymentDetails?: DeploymentDetails | undefined;

  /**
   * The method that is used to collect container logs for the fleet. Amazon GameLift Servers saves all standard output for each container in logs, including game session logs.
   *
   * - `CLOUDWATCH` -- Send logs to an Amazon CloudWatch log group that you define. Each container emits a log stream, which is organized in the log group.
   * - `S3` -- Store logs in an Amazon S3 bucket that you define.
   * - `NONE` -- Don't collect container logs.
   *
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * Information about the container fleet's remote locations where fleet instances are deployed.
   *
   * @public
   */
  LocationAttributes?: ContainerFleetLocationAttributes[] | undefined;

  /**
   * Indicates whether player gateway is enabled for this container fleet. Player gateway provides benefits such as DDoS protection with negligible impact to latency.
   *
   * If `ENABLED` or `REQUIRED`, game clients can use player gateway to connect with the game server. If `DISABLED`, game clients cannot use player gateway. Instead, they have to directly connect to the game server.
   *
   * @public
   */
  PlayerGatewayMode?: PlayerGatewayMode | undefined;
}

/**
 * A set of Linux capabilities that are added to a container's default Docker configuration for a container defined in the [ContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html). For more detailed information about these Linux capabilities, see the [capabilities(7)](https://man7.org/linux/man-pages/man7/capabilities.7.html) Linux manual page.
 *
 * **Modifying capabilities on an existing container:** To remove a capability, update the `Include` list with only the needed capabilities. To revert back to default capabilities, omit `LinuxCapabilities` within the ContainerDefinition.
 *
 * **Part of:** [GameServerContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinition.html), [GameServerContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput.html), [SupportContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinition.html), [SupportContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinitionInput.html)
 *
 * **Returned by:** [CreateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerGroupDefinition.html), [DescribeContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeContainerGroupDefinition.html), [ListContainerGroupDefinitions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListContainerGroupDefinitions.html), [ListContainerGroupDefinitionVersions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListContainerGroupDefinitionVersions.html), [UpdateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateContainerGroupDefinition.html)
 *
 * @public
 */
export interface LinuxCapabilities {
  /**
   * The list of Linux capabilities to add to the container's default configuration. Specify each capability as a string from the set of supported capability names (for example, `NET_BIND_SERVICE` or `SYS_PTRACE`).
   *
   * @public
   */
  Include?: LinuxCapability[] | undefined;
}

/**
 * A mount point that binds a container to a file or directory on the host system.
 *
 * **Part of:** [GameServerContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinition.html), [https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput.html](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput.html), [SupportContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinition.html), [https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinitionInput.html](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinitionInput.html)
 *
 * @public
 */
export interface ContainerMountPoint {
  /**
   * The path to the source file or directory.
   *
   * @public
   */
  InstancePath: string | undefined;

  /**
   * The mount path on the container. If this property isn't set, the instance path is used.
   *
   * @public
   */
  ContainerPath?: string | undefined;

  /**
   * The type of access for the container.
   *
   * @public
   */
  AccessLevel?: ContainerMountPointAccessLevel | undefined;
}

/**
 * A set of one or more port numbers that can be opened on the container, and the supported network protocol.
 *
 * **Part of:** [ContainerPortConfiguration](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerPortConfiguration.html)
 *
 * @public
 */
export interface ContainerPortRange {
  /**
   * A starting value for the range of allowed port numbers.
   *
   * @public
   */
  FromPort: number | undefined;

  /**
   * An ending value for the range of allowed port numbers. Port numbers are end-inclusive. This value must be equal to or greater than `FromPort`.
   *
   * @public
   */
  ToPort: number | undefined;

  /**
   * The network protocol that these ports support.
   *
   * @public
   */
  Protocol: IpProtocol | undefined;
}

/**
 * A set of port ranges that can be opened on the container. A process that's running in the container can bind to a port number, making it accessible to inbound traffic when it's mapped to a container fleet's connection port.
 *
 * Each container port range specifies a network protocol. When the configuration supports more than one protocol, we recommend that you use a different range for each protocol. If your ranges have overlapping port numbers, Amazon GameLift Servers maps a duplicated container port number to different connection ports. For example, if you include 1935 in port ranges for both TCP and UDP, it might result in the following mappings:
 *
 * - container port 1935 (tcp) => connection port 2001
 * - container port 1935 (udp) => connection port 2002
 *
 * **Part of:** [GameServerContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinition.html), [GameServerContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput.html), [SupportContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinition.html), [SupportContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinitionInput.html)
 *
 * @public
 */
export interface ContainerPortConfiguration {
  /**
   * A set of one or more container port number ranges. The ranges can't overlap if the ranges' network protocols are the same. Overlapping ranges with different protocols is allowed but not recommended.
   *
   * @public
   */
  ContainerPortRanges: ContainerPortRange[] | undefined;
}

/**
 * Describes the game server container in an existing game server container group. A game server container identifies a container image with your game server build. A game server container is automatically considered essential; if an essential container fails, the entire container group restarts.
 *
 * You can update a container definition and deploy the updates to an existing fleet. When creating or updating a game server container group definition, use the property [https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput).
 *
 * **Part of:** [ContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html)
 *
 * **Returned by:** [CreateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerGroupDefinition.html), [DescribeContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeContainerGroupDefinition.html), [ListContainerGroupDefinitions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListContainerGroupDefinitions.html), [ListContainerGroupDefinitionVersions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListContainerGroupDefinitionVersions.html), [UpdateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateContainerGroupDefinition.html)
 *
 * @public
 */
export interface GameServerContainerDefinition {
  /**
   * The container definition identifier. Container names are unique within a container group definition.
   *
   * @public
   */
  ContainerName?: string | undefined;

  /**
   * Indicates that the container relies on the status of other containers in the same container group during startup and shutdown sequences. A container might have dependencies on multiple containers.
   *
   * @public
   */
  DependsOn?: ContainerDependency[] | undefined;

  /**
   * A mount point that binds a path inside the container to a file or directory on the host system and lets it access the file or directory.
   *
   * @public
   */
  MountPoints?: ContainerMountPoint[] | undefined;

  /**
   * A set of environment variables that's passed to the container on startup. See the [ContainerDefinition::environment](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-environment) parameter in the *Amazon Elastic Container Service API Reference*.
   *
   * @public
   */
  EnvironmentOverride?: ContainerEnvironment[] | undefined;

  /**
   * The URI to the image that Amazon GameLift Servers uses when deploying this container to a container fleet. For a more specific identifier, see `ResolvedImageDigest`.
   *
   * @public
   */
  ImageUri?: string | undefined;

  /**
   * The set of ports that are available to bind to processes in the container. For example, a game server process requires a container port to allow game clients to connect to it. Container ports aren't directly accessed by inbound traffic. Amazon GameLift Servers maps these container ports to externally accessible connection ports, which are assigned as needed from the container fleet's `ConnectionPortRange`.
   *
   * @public
   */
  PortConfiguration?: ContainerPortConfiguration | undefined;

  /**
   * A unique and immutable identifier for the container image. The digest is a SHA 256 hash of the container image manifest.
   *
   * @public
   */
  ResolvedImageDigest?: string | undefined;

  /**
   * The Amazon GameLift Servers server SDK version that the game server is integrated with. Only game servers using 5.2.0 or higher are compatible with container fleets.
   *
   * @public
   */
  ServerSdkVersion?: string | undefined;

  /**
   * Linux-specific modifications that are applied to the default Docker container configuration, such as Linux capabilities. For more information see [LinuxCapabilities](https://docs.aws.amazon.com/gamelift/latest/apireference/API_LinuxCapabilities.html).
   *
   * @public
   */
  LinuxCapabilities?: LinuxCapabilities | undefined;

  /**
   * The number of vCPU units reserved for the game server container. The container can use more vCPU when it's available, up to the container group's total vCPU limit if one is set. If the container group has a total vCPU limit and the request doesn't set this value, Amazon GameLift Servers calculates the game server container's vCPU as the total vCPU limit minus the sum of the vCPU units reserved for the group's support containers.
   *
   * A game server container group needs either a total vCPU limit or this value. If the container group doesn't have a total vCPU limit, the group's containers can use up to the instance's available vCPU, and Amazon GameLift Servers uses the sum of the group's container `Vcpu` values to calculate how many game server container groups fit on an instance.
   *
   * **Related data type:** [ContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html) `TotalVcpuLimit`
   *
   * @public
   */
  Vcpu?: number | undefined;
}

/**
 * Instructions on when and how to check the health of a support container in a container fleet. These properties override any Docker health checks that are set in the container image. For more information on container health checks, see [HealthCheck command](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_HealthCheck.html#ECS-Type-HealthCheck-command) in the *Amazon Elastic Container Service API*. Game server containers don't have a health check parameter; Amazon GameLift Servers automatically handles health checks for these containers.
 *
 * The following example instructs the container to initiate a health check command every 60 seconds and wait 10 seconds for it to succeed. If it fails, retry the command 3 times before flagging the container as unhealthy. It also tells the container to wait 100 seconds after launch before counting failed health checks.
 *
 * `\{"Command": [ "CMD-SHELL", "ps cax | grep "processmanager" || exit 1" ], "Interval": 60, "Timeout": 10, "Retries": 3, "StartPeriod": 100 \}`
 *
 * **Part of:** [SupportContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinition.html), [SupportContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinitionInput.html)
 *
 * @public
 */
export interface ContainerHealthCheck {
  /**
   * A string array that specifies the command that the container runs to determine if it's healthy.
   *
   * @public
   */
  Command: string[] | undefined;

  /**
   * The time period (in seconds) between each health check.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The number of times to retry a failed health check before flagging the container unhealthy. The first run of the command does not count as a retry.
   *
   * @public
   */
  Retries?: number | undefined;

  /**
   * The optional grace period (in seconds) to give a container time to bootstrap before the first failed health check counts toward the number of retries.
   *
   * @public
   */
  StartPeriod?: number | undefined;

  /**
   * The time period (in seconds) to wait for a health check to succeed before counting a failed health check.
   *
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * Describes a support container in a container group. A support container might be in a game server container group or a per-instance container group. Support containers don't run game server processes.
 *
 * You can update a support container definition and deploy the updates to an existing fleet. When creating or updating a game server container group definition, use the property [GameServerContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput.html).
 *
 * **Part of:** [ContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html)
 *
 * **Returned by:** [CreateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerGroupDefinition.html), [DescribeContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeContainerGroupDefinition.html), [ListContainerGroupDefinitions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListContainerGroupDefinitions.html), [ListContainerGroupDefinitionVersions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListContainerGroupDefinitionVersions.html), [UpdateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateContainerGroupDefinition.html)
 *
 * @public
 */
export interface SupportContainerDefinition {
  /**
   * The container definition identifier. Container names are unique within a container group definition.
   *
   * @public
   */
  ContainerName?: string | undefined;

  /**
   * Indicates that the container relies on the status of other containers in the same container group during its startup and shutdown sequences. A container might have dependencies on multiple containers.
   *
   * @public
   */
  DependsOn?: ContainerDependency[] | undefined;

  /**
   * A mount point that binds a path inside the container to a file or directory on the host system and lets it access the file or directory.
   *
   * @public
   */
  MountPoints?: ContainerMountPoint[] | undefined;

  /**
   * A set of environment variables that's passed to the container on startup. See the [ContainerDefinition::environment](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-environment) parameter in the *Amazon Elastic Container Service API Reference*.
   *
   * @public
   */
  EnvironmentOverride?: ContainerEnvironment[] | undefined;

  /**
   * Indicates whether the container is vital to the container group. If an essential container fails, the entire container group restarts.
   *
   * @public
   */
  Essential?: boolean | undefined;

  /**
   * A configuration for a non-terminal health check. A support container automatically restarts if it stops functioning or if it fails this health check.
   *
   * @public
   */
  HealthCheck?: ContainerHealthCheck | undefined;

  /**
   * The URI to the image that Amazon GameLift Servers deploys to a container fleet. For a more specific identifier, see `ResolvedImageDigest`.
   *
   * @public
   */
  ImageUri?: string | undefined;

  /**
   * The amount of memory that Amazon GameLift Servers makes available to the container. If memory limits aren't set for an individual container, the container shares the container group's total memory allocation.
   *
   * **Related data type:** [ContainerGroupDefinition TotalMemoryLimitMebibytes](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html)
   *
   * @public
   */
  MemoryHardLimitMebibytes?: number | undefined;

  /**
   * A set of ports that allow access to the container from external users. Processes running in the container can bind to one of these ports. Container ports aren't directly accessed by inbound traffic. Amazon GameLift Servers maps these container ports to externally accessible connection ports, which are assigned as needed from the container fleet's `ConnectionPortRange`.
   *
   * @public
   */
  PortConfiguration?: ContainerPortConfiguration | undefined;

  /**
   * A unique and immutable identifier for the container image. The digest is a SHA 256 hash of the container image manifest.
   *
   * @public
   */
  ResolvedImageDigest?: string | undefined;

  /**
   * The number of vCPU units that are reserved for the container. If no resources are reserved, the container shares the total vCPU limit for the container group.
   *
   * **Related data type:** [ContainerGroupDefinition TotalVcpuLimit](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html)
   *
   * @public
   */
  Vcpu?: number | undefined;

  /**
   * Linux-specific modifications that are applied to the default Docker container configuration, such as Linux capabilities. For more information see [LinuxCapabilities](https://docs.aws.amazon.com/gamelift/latest/apireference/API_LinuxCapabilities.html).
   *
   * @public
   */
  LinuxCapabilities?: LinuxCapabilities | undefined;
}

/**
 * The properties that describe a container group resource. You can update all properties of a container group definition. Updates to a container group definition are saved as new versions.
 *
 * **Used with:** [CreateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerGroupDefinition.html)
 *
 * **Returned by:** [DescribeContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeContainerGroupDefinition.html), [ListContainerGroupDefinitions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListContainerGroupDefinitions.html), [UpdateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateContainerGroupDefinition.html)
 *
 * @public
 */
export interface ContainerGroupDefinition {
  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to an Amazon GameLift Servers `ContainerGroupDefinition` resource. It uniquely identifies the resource across all Amazon Web Services Regions. Format is `arn:aws:gamelift:[region]::containergroupdefinition/[container group definition name]:[version]`.
   *
   * @public
   */
  ContainerGroupDefinitionArn?: string | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The platform that all containers in the container group definition run on.
   *
   * > **Note:** Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the [Amazon Linux 2 FAQs](http://aws.amazon.com/amazon-linux-2/faqs/). For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See [Migrate to server SDK version 5.](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html)
   *
   * @public
   */
  OperatingSystem?: ContainerOperatingSystem | undefined;

  /**
   * A descriptive identifier for the container group definition. The name value is unique in an Amazon Web Services Region.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of container group. Container group type determines how Amazon GameLift Servers deploys the container group on each fleet instance.
   *
   * @public
   */
  ContainerGroupType?: ContainerGroupType | undefined;

  /**
   * The amount of memory (in MiB) on a fleet instance to allocate for the container group. All containers in the group share these resources.
   *
   * You can set a limit for each container definition in the group. If individual containers have limits, this total value must be greater than any individual container's memory limit.
   *
   * @public
   */
  TotalMemoryLimitMebibytes?: number | undefined;

  /**
   * The amount of vCPU units on a fleet instance to allocate for the container group (1 vCPU is equal to 1024 CPU units). All containers in the group share these resources. You can set a vCPU reservation for each container definition in the group. If individual containers have reservations, this total value must be equal to or greater than the sum of the reservations for each container in the group.
   *
   * For a game server container group, if this property is set, Amazon GameLift Servers uses this value to calculate how many game server container groups fit on an instance. If this property isn't set, the group's containers can use up to the instance's available vCPU, and Amazon GameLift Servers uses the sum of the containers' `Vcpu` values to calculate how many game server container groups fit on an instance.
   *
   * @public
   */
  TotalVcpuLimit?: number | undefined;

  /**
   * The definition for the game server container in this group. This property is used only when the container group type is `GAME_SERVER`. This container definition specifies a container image with the game server build.
   *
   * @public
   */
  GameServerContainerDefinition?: GameServerContainerDefinition | undefined;

  /**
   * The set of definitions for support containers in this group. A container group definition might have zero support container definitions. Support containers can be used in any type of container group.
   *
   * @public
   */
  SupportContainerDefinitions?: SupportContainerDefinition[] | undefined;

  /**
   * Indicates the version of a particular container group definition. This number is incremented automatically when you update a container group definition. You can view, update, or delete individual versions or the entire container group definition.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * An optional description that was provided for a container group definition update. Each version can have a unique description.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * Current status of the container group definition resource. Values include:
   *
   * - `COPYING` -- Amazon GameLift Servers is in the process of making copies of all container images that are defined in the group. While in this state, the resource can't be used to create a container fleet.
   * - `READY` -- Amazon GameLift Servers has copied the registry images for all containers that are defined in the group. You can use a container group definition in this status to create a container fleet.
   * - `FAILED` -- Amazon GameLift Servers failed to create a valid container group definition resource. For more details on the cause of the failure, see `StatusReason`. A container group definition resource in failed status will be deleted within a few minutes.
   *
   * @public
   */
  Status?: ContainerGroupDefinitionStatus | undefined;

  /**
   * Additional information about a container group definition that's in `FAILED` status. Possible reasons include:
   *
   * - An internal issue prevented Amazon GameLift Servers from creating the container group definition resource. Delete the failed resource and call [CreateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerGroupDefinition.html) again.
   * - An access-denied message means that you don't have permissions to access the container image on ECR. See [IAM permission examples](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-iam-policy-examples.html) for help setting up required IAM permissions for Amazon GameLift Servers.
   * - The `ImageUri` value for at least one of the containers in the container group definition was invalid or not found in the current Amazon Web Services account.
   * - At least one of the container images referenced in the container group definition exceeds the allowed size. For size limits, see [Amazon GameLift Servers endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/gamelift.html).
   * - At least one of the container images referenced in the container group definition uses a different operating system than the one defined for the container group.
   *
   * @public
   */
  StatusReason?: string | undefined;
}

/**
 * Describes a mapping between a container port and a connection port on a fleet instance. You define container ports in a container group definition. Amazon GameLift Servers assigns connection ports when it deploys the container group to an instance.
 *
 * **Part of:** [ContainerGroupPortMapping](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupPortMapping.html)
 *
 * @public
 */
export interface ContainerPortMapping {
  /**
   * The port number on the container. This port is defined in the container group definition. Container port numbers must be unique within a container group definition.
   *
   * @public
   */
  ContainerPort?: number | undefined;

  /**
   * The port number on the fleet instance that maps to the container port. Connection ports are assigned by Amazon GameLift Servers when the container group is deployed to an instance.
   *
   * @public
   */
  ConnectionPort?: number | undefined;

  /**
   * The network protocol for the port mapping. Valid values are `TCP` or `UDP`.
   *
   * @public
   */
  Protocol?: IpProtocol | undefined;
}

/**
 * Describes the port mappings for a single container in a container group. Each mapping shows how a container port maps to a connection port on the fleet instance.
 *
 * **Returned by:** [DescribeContainerGroupPortMappings](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeContainerGroupPortMappings.html)
 *
 * @public
 */
export interface ContainerGroupPortMapping {
  /**
   * The name of the container, as defined in the container group definition.
   *
   * @public
   */
  ContainerName?: string | undefined;

  /**
   * The runtime ID for the container that's running in a compute. This value is unique within the compute.
   *
   * @public
   */
  ContainerRuntimeId?: string | undefined;

  /**
   * A list of `ContainerPortMapping` objects that describe the port mappings for this container.
   *
   * @public
   */
  ContainerPortMappings?: ContainerPortMapping[] | undefined;
}

/**
 * A unique identifier for a container in a compute on a managed container fleet instance. This information makes it possible to remotely connect to a specific container on a fleet instance.
 *
 * **Related to:** [ContainerAttribute](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerAttribute.html)
 *
 * **Use with:** [GetComputeAccess](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetComputeAccess.html)
 *
 * @public
 */
export interface ContainerIdentifier {
  /**
   * The identifier for a container that's running in a compute.
   *
   * @public
   */
  ContainerName?: string | undefined;

  /**
   * The runtime ID for the container that's running in a compute. This value is unique within the compute. It is returned as a `ContainerAttribute` value in a `Compute` object.
   *
   * @public
   */
  ContainerRuntimeId?: string | undefined;
}

/**
 * A label that you can assign to a Amazon GameLift Servers resource.
 *
 * **Learn more**
 *
 * [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*
 *
 * [Amazon Web Services Tagging Strategies](http://aws.amazon.com/answers/account-management/aws-tagging-strategies/)
 *
 * **Related actions**
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @public
 */
export interface Tag {
  /**
   * The key for a developer-defined key value pair for tagging an Amazon Web Services resource.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value for a developer-defined key value pair for tagging an Amazon Web Services resource.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAliasInput {
  /**
   * A descriptive label that is associated with an alias. Alias names do not need to be unique.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A human-readable description of the alias.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The routing configuration, including routing type and fleet target, for the alias.
   *
   * @public
   */
  RoutingStrategy: RoutingStrategy | undefined;

  /**
   * A list of labels to assign to the new alias resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management and cost allocation. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAliasOutput {
  /**
   * The newly created alias resource.
   *
   * @public
   */
  Alias?: Alias | undefined;
}

/**
 * The location in Amazon S3 where build or script files are stored for access by Amazon GameLift Servers.
 *
 * @public
 */
export interface S3Location {
  /**
   * An Amazon S3 bucket identifier. The name of the S3 bucket.
   *
   * > **Note:** Amazon GameLift Servers doesn't support uploading from Amazon S3 buckets with names that contain a dot (.).
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The name of the zip file that contains the build files or script files.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) for an IAM role that allows Amazon GameLift Servers to access the S3 bucket.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The version of the file, if object versioning is turned on for the bucket. Amazon GameLift Servers uses this information when retrieving files from an S3 bucket that you own. Use this parameter to specify a specific version of the file. If not set, the latest version of the file is retrieved.
   *
   * @public
   */
  ObjectVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateBuildInput {
  /**
   * A descriptive label that is associated with a build. Build names do not need to be unique. You can change this value later.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Version information that is associated with a build or script. Version strings do not need to be unique. You can change this value later.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * Information indicating where your game build files are stored. Use this parameter only when creating a build with files stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key. The location must also specify a role ARN that you set up to allow Amazon GameLift Servers to access your Amazon S3 bucket. The S3 bucket and your new build must be in the same Region.
   *
   * If a `StorageLocation` is specified, the size of your file can be found in your Amazon S3 bucket. Amazon GameLift Servers will report a `SizeOnDisk` of 0.
   *
   * @public
   */
  StorageLocation?: S3Location | undefined;

  /**
   * The operating system that your game server binaries run on. This value determines the type of fleet resources that you use for this build. If your game build contains multiple executables, they all must run on the same operating system. You must specify a valid operating system in this request. There is no default value. You can't change a build's operating system later.
   *
   * > **Note:** Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the [Amazon Linux 2 FAQs](http://aws.amazon.com/amazon-linux-2/faqs/). For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See [Migrate to server SDK version 5.](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html)
   *
   * > **Note:** Windows Server 2016 will reach end of support on 1/12/2027. For game servers that are hosted on Windows Server 2016 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to Windows Server 2022 instances. See [Migrate to server SDK version 5.](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html)
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * A list of labels to assign to the new build resource. Tags are developer defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management and cost allocation. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*. Once the resource is created, you can use [TagResource](https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html), [UntagResource](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html), and [ListTagsForResource](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html) to add, remove, and view tags. The maximum tag limit may be lower than stated. See the Amazon Web Services General Reference for actual tagging limits.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A server SDK version you used when integrating your game server build with Amazon GameLift Servers. For more information see [Integrate games with custom game servers](https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-custom-intro.html). By default Amazon GameLift Servers sets this value to `4.0.2`.
   *
   * @public
   */
  ServerSdkVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateBuildOutput {
  /**
   * The newly created build resource, including a unique build ID and status.
   *
   * @public
   */
  Build?: Build | undefined;

  /**
   * This element is returned only when the operation is called without a storage location. It contains credentials to use when you are uploading a build file to an Amazon S3 bucket that is owned by Amazon GameLift Servers. Credentials have a limited life span. To refresh these credentials, call [RequestUploadCredentials](https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html).
   *
   * @public
   */
  UploadCredentials?: AwsCredentials | undefined;

  /**
   * Amazon S3 location for your game build file, including bucket name and key.
   *
   * @public
   */
  StorageLocation?: S3Location | undefined;
}

/**
 * A remote location where a multi-location fleet can deploy game servers for game hosting.
 *
 * @public
 */
export interface LocationConfiguration {
  /**
   * An Amazon Web Services Region code, such as `us-west-2`. For a list of supported Regions and Local Zones, see [Amazon GameLift Servers service locations](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html) for managed hosting.
   *
   * @public
   */
  Location: string | undefined;
}

/**
 * @public
 */
export interface CreateContainerFleetInput {
  /**
   * The unique identifier for an Identity and Access Management (IAM) role with permissions to run your containers on resources that are managed by Amazon GameLift Servers. Use an IAM service role with the `GameLiftContainerFleetPolicy` managed policy attached. For more information, see [Set up an IAM service role](https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html). You can't change this fleet property after the fleet is created.
   *
   * IAM role ARN values use the following pattern: `arn:aws:iam::[Amazon Web Services account]:role/[role name]`.
   *
   * @public
   */
  FleetRoleArn: string | undefined;

  /**
   * A meaningful description of the container fleet.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A container group definition resource that describes how to deploy containers with your game server build and support software onto each fleet instance. You can specify the container group definition's name to use the latest version. Alternatively, provide an ARN value with a specific version number.
   *
   * Create a container group definition by calling [CreateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerGroupDefinition.html). This operation creates a [ContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html) resource.
   *
   * @public
   */
  GameServerContainerGroupDefinitionName?: string | undefined;

  /**
   * The name of a container group definition resource that describes a set of auxiliary software. A fleet instance has one process for executables in this container group. A per-instance container group is optional. You can update the fleet to add or remove a per-instance container group at any time. You can specify the container group definition's name to use the latest version. Alternatively, provide an ARN value with a specific version number.
   *
   * Create a container group definition by calling [https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerGroupDefinition.html](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerGroupDefinition.html). This operation creates a [https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html) resource.
   *
   * @public
   */
  PerInstanceContainerGroupDefinitionName?: string | undefined;

  /**
   * The set of port numbers to open on each fleet instance. A fleet's connection ports map to container ports that are configured in the fleet's container group definitions.
   *
   * By default, Amazon GameLift Servers calculates an optimal port range based on your fleet configuration. To use the calculated range, don't set this parameter. The values are:
   *
   * - Port range: 4192 to a number calculated based on your fleet configuration. Amazon GameLift Servers uses the following formula: `4192 + [# of game server container groups per fleet instance] * [# of container ports in the game server container group definition] + [# of container ports in the per instance container group definition]`
   *
   * You can also choose to manually set this parameter. When manually setting this parameter, you must use port numbers that match the fleet's inbound permissions port range.
   *
   * > **Note:** If you set values manually, Amazon GameLift Servers no longer calculates a port range for you, even if you later remove the manual settings.
   *
   * The port range must not overlap with the Amazon GameLift Servers reserved port range `4092-4191`. This range is reserved for internal Amazon GameLift Servers services.
   *
   * @public
   */
  InstanceConnectionPortRange?: ConnectionPortRange | undefined;

  /**
   * The IP address ranges and port settings that allow inbound traffic to access game server processes and other processes on this fleet. As a best practice, when remotely accessing a fleet instance, we recommend opening ports only when you need them and closing them when you're finished.
   *
   * By default, Amazon GameLift Servers calculates an optimal port range based on your fleet configuration. To use the calculated range, don't set this parameter. The values are:
   *
   * - Protocol: UDP
   * - Port range: 4192 to a number calculated based on your fleet configuration. Amazon GameLift Servers uses the following formula: `4192 + [# of game server container groups per fleet instance] * [# of container ports in the game server container group definition] + [# of container ports in the per instance container group definition]`
   *
   * You can also choose to manually set this parameter. When manually setting this parameter, you must use port numbers that match the fleet's connection port range.
   *
   * > **Note:** If you set values manually, Amazon GameLift Servers no longer calculates a port range for you, even if you later remove the manual settings.
   *
   * The port range must not overlap with the Amazon GameLift Servers reserved port range `4092-4191`. This range is reserved for internal Amazon GameLift Servers services.
   *
   * @public
   */
  InstanceInboundPermissions?: IpPermission[] | undefined;

  /**
   * The number of times to replicate the game server container group on each fleet instance.
   *
   * By default, Amazon GameLift Servers calculates the maximum number of game server container groups that can fit on each instance. This calculation is based on the CPU and memory resources of the fleet's instance type. To use the calculated maximum, don't set this parameter. If you set this number manually, Amazon GameLift Servers uses your value as long as it's less than the calculated maximum.
   *
   * @public
   */
  GameServerContainerGroupsPerInstance?: number | undefined;

  /**
   * The Amazon EC2 instance type to use for all instances in the fleet. For multi-location fleets, the instance type must be available in the home region and all remote locations. Instance type determines the computing resources and processing power that's available to host your game servers. This includes CPU, memory, storage, and networking capacity.
   *
   * By default, Amazon GameLift Servers uses the `c5.large` instance type. If this instance type does not have sufficient resources for your container groups, you can choose a different instance type that better fits your needs. See [Amazon Elastic Compute Cloud Instance Types](http://aws.amazon.com/ec2/instance-types/) for detailed descriptions of Amazon EC2 instance types.
   *
   * You can't update this fleet property later.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * Indicates whether to use On-Demand or Spot instances for this fleet. Learn more about when to use [On-Demand versus Spot Instances](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot). This fleet property can't be changed after the fleet is created.
   *
   * By default, this property is set to `ON_DEMAND`.
   *
   * You can't update this fleet property later.
   *
   * @public
   */
  BillingType?: ContainerFleetBillingType | undefined;

  /**
   * A set of locations to deploy container fleet instances to. You can add any Amazon Web Services Region or Local Zone that's supported by Amazon GameLift Servers. Provide a list of one or more Amazon Web Services Region codes, such as `us-west-2`, or Local Zone names. Also include the fleet's home Region, which is the Amazon Web Services Region where the fleet is created. For a list of supported Regions and Local Zones, see [Amazon GameLift Servers service locations](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html) for managed hosting.
   *
   * @public
   */
  Locations?: LocationConfiguration[] | undefined;

  /**
   * The name of an Amazon Web Services CloudWatch metric group to add this fleet to. You can use a metric group to aggregate metrics for multiple fleets. You can specify an existing metric group name or use a new name to create a new metric group. Each fleet can have only one metric group, but you can change this value at any time.
   *
   * @public
   */
  MetricGroups?: string[] | undefined;

  /**
   * Determines whether Amazon GameLift Servers can shut down game sessions on the fleet that are actively running and hosting players. Amazon GameLift Servers might prompt an instance shutdown when scaling down fleet capacity or when retiring unhealthy instances. You can also set game session protection for individual game sessions using [UpdateGameSession](gamelift/latest/apireference/API_UpdateGameSession.html).
   *
   * - **NoProtection** -- Game sessions can be shut down during active gameplay.
   * - **FullProtection** -- Game sessions in `ACTIVE` status can't be shut down.
   *
   * By default, this property is set to `NoProtection`.
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
   * A method for collecting container logs for the fleet. Amazon GameLift Servers saves all standard output for each container in logs, including game session logs. You can select from the following methods:
   *
   * - `CLOUDWATCH` -- Send logs to an Amazon CloudWatch log group that you define. Each container emits a log stream, which is organized in the log group.
   * - `S3` -- Store logs in an Amazon S3 bucket that you define.
   * - `NONE` -- Don't collect container logs.
   *
   * By default, this property is set to `CLOUDWATCH`.
   *
   * Amazon GameLift Servers requires permissions to send logs to other Amazon Web Services services in your account. These permissions are included in the IAM fleet role for this container fleet (see `FleetRoleArn`).
   *
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * A list of labels to assign to the new fleet resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management and cost allocation. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Configures player gateway for your fleet. Player gateway provides benefits such as DDoS protection by rate limiting and validating traffic before it reaches game servers, hiding game server IP addresses from players, and providing updated endpoints when relay endpoints become unhealthy.
   *
   * **How it works:** When enabled, game clients connect to relay endpoints instead of to your game servers. Player gateway validates player gateway tokens and routes traffic to the appropriate game server. Your game backend calls [GetPlayerConnectionDetails](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetPlayerConnectionDetails.html) to retrieve relay endpoints and player gateway tokens for your game clients. To learn more about this topic, see [DDoS protection with Amazon GameLift Servers player gateway](https://docs.aws.amazon.com/gameliftservers/latest/developerguide/ddos-protection-intro.html).
   *
   * Possible values include:
   *
   * - `DISABLED` (default) -- Game clients connect to the game server endpoint. Use this when you do not intend to integrate your game with player gateway.
   * - `ENABLED` -- Player gateway is available in fleet locations where it is supported. Your game backend can call [GetPlayerConnectionDetails](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetPlayerConnectionDetails.html) to obtain a player gateway token and endpoints for game clients.
   * - `REQUIRED` -- Player gateway is available in fleet locations where it is supported, and the fleet can only use locations that support this feature. Attempting to add a remote location to your fleet which does not support player gateway will result in an `InvalidRequestException`.
   *
   * @public
   */
  PlayerGatewayMode?: PlayerGatewayMode | undefined;
}

/**
 * @public
 */
export interface CreateContainerFleetOutput {
  /**
   * The properties for the new container fleet, including current status. All fleets are initially placed in `PENDING` status.
   *
   * @public
   */
  ContainerFleet?: ContainerFleet | undefined;
}

/**
 * Describes the configuration for a container that runs your game server executable. This definition includes container configuration, resources, and start instructions. Use this data type when creating or updating a game server container group definition. For properties of a deployed container, see [GameServerContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinition.html). A game server container is automatically considered essential; if an essential container fails, the entire container group restarts.
 *
 * **Use with:** [CreateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerGroupDefinition.html), [UpdateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateContainerGroupDefinition.html)
 *
 * @public
 */
export interface GameServerContainerDefinitionInput {
  /**
   * A string that uniquely identifies the container definition within a container group.
   *
   * @public
   */
  ContainerName: string | undefined;

  /**
   * Establishes dependencies between this container and the status of other containers in the same container group. A container can have dependencies on multiple different containers.
   *
   * You can use dependencies to establish a startup/shutdown sequence across the container group. For example, you might specify that *ContainerB* has a `START` dependency on *ContainerA*. This dependency means that *ContainerB* can't start until after *ContainerA* has started. This dependency is reversed on shutdown, which means that *ContainerB* must shut down before *ContainerA* can shut down.
   *
   * @public
   */
  DependsOn?: ContainerDependency[] | undefined;

  /**
   * A mount point that binds a path inside the container to a file or directory on the host system and lets it access the file or directory.
   *
   * @public
   */
  MountPoints?: ContainerMountPoint[] | undefined;

  /**
   * A set of environment variables to pass to the container on startup. See the [ContainerDefinition::environment](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-environment) parameter in the *Amazon Elastic Container Service API Reference*.
   *
   * @public
   */
  EnvironmentOverride?: ContainerEnvironment[] | undefined;

  /**
   * The location of the container image to deploy to a container fleet. Provide an image in an Amazon Elastic Container Registry public or private repository. The repository must be in the same Amazon Web Services account and Amazon Web Services Region where you're creating the container group definition. For limits on image size, see [Amazon GameLift Servers endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/gamelift.html). You can use any of the following image URI formats:
   *
   * - Image ID only: `[AWS account].dkr.ecr.[AWS region].amazonaws.com/[repository ID]`
   * - Image ID and digest: `[AWS account].dkr.ecr.[AWS region].amazonaws.com/[repository ID]@[digest]`
   * - Image ID and tag: `[AWS account].dkr.ecr.[AWS region].amazonaws.com/[repository ID]:[tag]`
   *
   * @public
   */
  ImageUri: string | undefined;

  /**
   * A set of ports that Amazon GameLift Servers can assign to processes in a container. The container port configuration must have enough ports for each container process that accepts inbound traffic connections. For example, a game server process requires a container port to allow game clients to connect to it. A container port configuration can have one or more container port ranges. Each range specifies starting and ending values as well as the supported network protocol.
   *
   * Container ports aren't directly accessed by inbound traffic. Amazon GameLift Servers maps each container port to an externally accessible connection port (see the container fleet property `ConnectionPortRange`).
   *
   * @public
   */
  PortConfiguration: ContainerPortConfiguration | undefined;

  /**
   * The Amazon GameLift Servers server SDK version that the game server is integrated with. Only game servers using 5.2.0 or higher are compatible with container fleets.
   *
   * @public
   */
  ServerSdkVersion: string | undefined;

  /**
   * Linux-specific modifications that are applied to the default Docker container configuration, such as Linux capabilities. For more information see [LinuxCapabilities](https://docs.aws.amazon.com/gamelift/latest/apireference/API_LinuxCapabilities.html).
   *
   * @public
   */
  LinuxCapabilities?: LinuxCapabilities | undefined;

  /**
   * The number of vCPU units reserved for the game server container. The container can use more vCPU when it's available, up to the container group's total vCPU limit if one is set. If the container group has a total vCPU limit and the request doesn't set this value, Amazon GameLift Servers calculates the game server container's vCPU as the total vCPU limit minus the sum of the vCPU units reserved for the group's support containers.
   *
   * A game server container group needs either a total vCPU limit or this value. If the container group doesn't have a total vCPU limit, the group's containers can use up to the instance's available vCPU, and Amazon GameLift Servers uses the sum of the group's container `Vcpu` values to calculate how many game server container groups fit on an instance.
   *
   * **Related data type:** [ContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html) `TotalVcpuLimit`
   *
   * @public
   */
  Vcpu?: number | undefined;
}

/**
 * Describes a support container in a container group. You can define a support container in either a game server container group or a per-instance container group. Support containers don't run game server processes.
 *
 * This definition includes container configuration, resources, and start instructions. Use this data type when creating or updating a container group definition. For properties of a deployed support container, see [SupportContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinition.html).
 *
 * **Use with:** [CreateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerGroupDefinition.html), [UpdateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateContainerGroupDefinition.html)
 *
 * @public
 */
export interface SupportContainerDefinitionInput {
  /**
   * A string that uniquely identifies the container definition within a container group.
   *
   * @public
   */
  ContainerName: string | undefined;

  /**
   * Establishes dependencies between this container and the status of other containers in the same container group. A container can have dependencies on multiple different containers.
   *
   * You can use dependencies to establish a startup/shutdown sequence across the container group. For example, you might specify that *ContainerB* has a `START` dependency on *ContainerA*. This dependency means that *ContainerB* can't start until after *ContainerA* has started. This dependency is reversed on shutdown, which means that *ContainerB* must shut down before *ContainerA* can shut down.
   *
   * @public
   */
  DependsOn?: ContainerDependency[] | undefined;

  /**
   * A mount point that binds a path inside the container to a file or directory on the host system and lets it access the file or directory.
   *
   * @public
   */
  MountPoints?: ContainerMountPoint[] | undefined;

  /**
   * A set of environment variables to pass to the container on startup. See the [ContainerDefinition::environment](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-environment) parameter in the *Amazon Elastic Container Service API Reference*.
   *
   * @public
   */
  EnvironmentOverride?: ContainerEnvironment[] | undefined;

  /**
   * Flags the container as vital for the container group to function properly. If an essential container fails, the entire container group restarts. At least one support container in a per-instance container group must be essential. When flagging a container as essential, also configure a health check so that the container can signal that it's healthy.
   *
   * @public
   */
  Essential?: boolean | undefined;

  /**
   * Configuration for a non-terminal health check. A container automatically restarts if it stops functioning. With a health check, you can define additional reasons to flag a container as unhealthy and restart it. If an essential container fails a health check, the entire container group restarts.
   *
   * @public
   */
  HealthCheck?: ContainerHealthCheck | undefined;

  /**
   * The location of the container image to deploy to a container fleet. Provide an image in an Amazon Elastic Container Registry public or private repository. The repository must be in the same Amazon Web Services account and Amazon Web Services Region where you're creating the container group definition. For limits on image size, see [Amazon GameLift Servers endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/gamelift.html). You can use any of the following image URI formats:
   *
   * - Image ID only: `[AWS account].dkr.ecr.[AWS region].amazonaws.com/[repository ID]`
   * - Image ID and digest: `[AWS account].dkr.ecr.[AWS region].amazonaws.com/[repository ID]@[digest]`
   * - Image ID and tag: `[AWS account].dkr.ecr.[AWS region].amazonaws.com/[repository ID]:[tag]`
   *
   * @public
   */
  ImageUri: string | undefined;

  /**
   * A specified amount of memory (in MiB) to reserve for this container. If you don't specify a container-specific memory limit, the container shares the container group's total memory allocation.
   *
   * **Related data type:** [ContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html) `TotalMemoryLimitMebibytes`
   *
   * @public
   */
  MemoryHardLimitMebibytes?: number | undefined;

  /**
   * A set of ports that Amazon GameLift Servers can assign to processes in a container. The container port configuration must have enough ports for each container process that accepts inbound traffic connections. A container port configuration can have one or more container port ranges. Each range specifies starting and ending values as well as the supported network protocol.
   *
   * Container ports aren't directly accessed by inbound traffic. Amazon GameLift Servers maps each container port to an externally accessible connection port (see the container fleet property `ConnectionPortRange`).
   *
   * @public
   */
  PortConfiguration?: ContainerPortConfiguration | undefined;

  /**
   * The number of vCPU units to reserve for this container. The container can use more resources when needed, if available. If you don't reserve vCPU units for this container, it shares the container group's total vCPU limit.
   *
   * **Related data type:** [ContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html) TotalVcpuLimit
   *
   * @public
   */
  Vcpu?: number | undefined;

  /**
   * Linux-specific modifications that are applied to the default Docker container configuration, such as Linux capabilities. For more information see [LinuxCapabilities](https://docs.aws.amazon.com/gamelift/latest/apireference/API_LinuxCapabilities.html).
   *
   * @public
   */
  LinuxCapabilities?: LinuxCapabilities | undefined;
}

/**
 * @public
 */
export interface CreateContainerGroupDefinitionInput {
  /**
   * A descriptive identifier for the container group definition. The name value must be unique in an Amazon Web Services Region.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of container group being defined. Container group type determines how Amazon GameLift Servers deploys the container group on each fleet instance.
   *
   * Default value: `GAME_SERVER`
   *
   * @public
   */
  ContainerGroupType?: ContainerGroupType | undefined;

  /**
   * The maximum amount of memory (in MiB) to allocate to the container group. All containers in the group share this memory. If you specify memory limits for an individual container, the total value must be greater than any individual container's memory limit.
   *
   * Default value: 1024
   *
   * @public
   */
  TotalMemoryLimitMebibytes: number | undefined;

  /**
   * The maximum amount of vCPU units to allocate to the container group (1 vCPU is equal to 1024 CPU units). All containers in the group share these resources. If you set vCPU reservations for individual containers, the total value must be equal to or greater than the sum of the `Vcpu` values for all containers in the group.
   *
   * This property is required for a per-instance container group.
   *
   * For a game server container group, Amazon GameLift Servers requires either a total vCPU limit or a `Vcpu` value for the game server container. If you set a total vCPU limit for a game server container group, Amazon GameLift Servers uses this value to calculate how many game server container groups fit on an instance. If you don't set a total vCPU limit, the group's containers can use up to the instance's available vCPU, and Amazon GameLift Servers uses the sum of the containers' `Vcpu` values to calculate how many game server container groups fit on an instance.
   *
   * @public
   */
  TotalVcpuLimit?: number | undefined;

  /**
   * The definition for the game server container in this group. Define a game server container only when the container group type is `GAME_SERVER`. Game server containers specify a container image with your game server build. You can pass in your container definitions as a JSON file.
   *
   * @public
   */
  GameServerContainerDefinition?: GameServerContainerDefinitionInput | undefined;

  /**
   * One or more definition for support containers in this group. You can define a support container in any type of container group. You can pass in your container definitions as a JSON file.
   *
   * @public
   */
  SupportContainerDefinitions?: SupportContainerDefinitionInput[] | undefined;

  /**
   * The platform that all containers in the group use. Containers in a group must run on the same operating system.
   *
   * Default value: `AMAZON_LINUX_2023`
   *
   * > **Note:** Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the [Amazon Linux 2 FAQs](http://aws.amazon.com/amazon-linux-2/faqs/). For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See [Migrate to server SDK version 5.](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html)
   *
   * @public
   */
  OperatingSystem: ContainerOperatingSystem | undefined;

  /**
   * A description for the initial version of this container group definition.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * A list of labels to assign to the container group definition resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management and cost allocation. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateContainerGroupDefinitionOutput {
  /**
   * The properties of the new container group definition resource. You can use this resource to create a container fleet.
   *
   * @public
   */
  ContainerGroupDefinition?: ContainerGroupDefinition | undefined;
}

/**
 * Configuration settings for player gateway. Use these settings to specify advanced options for how player gateway handles connections.
 *
 * @public
 */
export interface PlayerGatewayConfiguration {
  /**
   * The IP protocol that your game servers support for player connections through player gateway. If the value is set to `IPv4`, GameLift will install and execute a lightweight IP translation software on fleet instances to receive and transform incoming IPv6 traffic to IPv4. If the value is set to `DUAL_STACK`, the lightweight IP translation software will not be installed on fleet instances. `DUAL_STACK` provides slightly better performance than `IPv4`.
   *
   * @public
   */
  GameServerIpProtocolSupported?: GameServerIpProtocolSupported | undefined;
}

/**
 * A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.
 *
 * The policy is evaluated when a player tries to create a new game session. On receiving a `CreateGameSession` request, Amazon GameLift Servers checks that the player (identified by `CreatorId`) has created fewer than the game session limit in the specified time period.
 *
 * The purpose of this policy is to prevent a single player from consuming a large share of available hosting resources. For example, setting `NewGameSessionsPerCreator` to `4` and `PolicyPeriodInMinutes` to `10` limits each player to creating 4 game sessions every 10 minutes. Setting these values too high (for example, 200 game sessions every 1000 minutes) still allows a single player to rapidly consume resources. We recommend keeping these values small.
 *
 * @public
 */
export interface ResourceCreationLimitPolicy {
  /**
   * A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.
   *
   * The policy is evaluated when a player tries to create a new game session. On receiving a `CreateGameSession` request, Amazon GameLift Servers checks that the player (identified by `CreatorId`) has created fewer than the game session limit in the specified time period.
   *
   * @public
   */
  NewGameSessionsPerCreator?: number | undefined;

  /**
   * The time span used in evaluating the resource creation limit policy.
   *
   * @public
   */
  PolicyPeriodInMinutes?: number | undefined;
}

/**
 * A set of instructions for launching server processes on fleet computes. Server processes run either an executable in a custom game build or a Amazon GameLift Servers Realtime script. Server process configurations are part of a fleet's runtime configuration.
 *
 * @public
 */
export interface ServerProcess {
  /**
   * The location of a game build executable or Realtime script. Game builds and Realtime scripts are installed on instances at the root:
   *
   * - Windows (custom game builds only): `C:\game`. Example: "`C:\game\MyGame\server.exe`"
   * - Linux: `/local/game`. Examples: "`/local/game/MyGame/server.exe`" or "`/local/game/MyRealtimeScript.js`"
   *
   * > **Note:** Amazon GameLift Servers doesn't support the use of setup scripts that launch the game executable. For custom game builds, this parameter must indicate the executable that calls the server SDK operations `initSDK()` and `ProcessReady()`.
   *
   * @public
   */
  LaunchPath: string | undefined;

  /**
   * An optional list of parameters to pass to the server executable or Realtime script on launch.
   *
   * @public
   */
  Parameters?: string | undefined;

  /**
   * The number of server processes using this configuration that run concurrently on each instance or compute.
   *
   * @public
   */
  ConcurrentExecutions: number | undefined;
}

/**
 * A set of instructions that define the set of server processes to run on computes in a fleet. Server processes run either an executable in a custom game build or a Amazon GameLift Servers Realtime script. Amazon GameLift Servers launches the processes, manages their life cycle, and replaces them as needed. Computes check regularly for an updated runtime configuration.
 *
 * An Amazon GameLift Servers instance is limited to 50 processes running concurrently. To calculate the total number of processes defined in a runtime configuration, add the values of the `ConcurrentExecutions` parameter for each server process. Learn more about [Running Multiple Processes on a Fleet](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html).
 *
 * @public
 */
export interface RuntimeConfiguration {
  /**
   * A collection of server process configurations that identify what server processes to run on fleet computes.
   *
   * @public
   */
  ServerProcesses?: ServerProcess[] | undefined;

  /**
   * The number of game sessions in status `ACTIVATING` to allow on an instance or compute. This setting limits the instance resources that can be used for new game activations at any one time.
   *
   * @public
   */
  MaxConcurrentGameSessionActivations?: number | undefined;

  /**
   * The maximum amount of time (in seconds) allowed to launch a new game session and have it report ready to host players. During this time, the game session is in status `ACTIVATING`. If the game session does not become active before the timeout, it is ended and the game session status is changed to `TERMINATED`.
   *
   * @public
   */
  GameSessionActivationTimeoutSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CreateFleetInput {
  /**
   * A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description for the fleet.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier for a custom game server build to be deployed to a fleet with compute type `EC2`. You can use either the build ID or ARN. The build must be uploaded to Amazon GameLift Servers and in `READY` status. This fleet property can't be changed after the fleet is created.
   *
   * @public
   */
  BuildId?: string | undefined;

  /**
   * The unique identifier for a Realtime configuration script to be deployed to a fleet with compute type `EC2`. You can use either the script ID or ARN. Scripts must be uploaded to Amazon GameLift Servers prior to creating the fleet. This fleet property can't be changed after the fleet is created.
   *
   * @public
   */
  ScriptId?: string | undefined;

  /**
   * **This parameter is no longer used.** Specify a server launch path using the `RuntimeConfiguration` parameter. Requests that use this parameter instead continue to be valid.
   *
   * @public
   */
  ServerLaunchPath?: string | undefined;

  /**
   * **This parameter is no longer used.** Specify server launch parameters using the `RuntimeConfiguration` parameter. Requests that use this parameter instead continue to be valid.
   *
   * @public
   */
  ServerLaunchParameters?: string | undefined;

  /**
   * **This parameter is no longer used.** To specify where Amazon GameLift Servers should store log files once a server process shuts down, use the Amazon GameLift Servers server API `ProcessReady()` and specify one or more directory paths in `logParameters`. For more information, see [Initialize the server process](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-initialize) in the *Amazon GameLift Servers Developer Guide*.
   *
   * @public
   */
  LogPaths?: string[] | undefined;

  /**
   * The Amazon GameLift Servers-supported Amazon EC2 instance type to use with managed EC2 fleets. Instance type determines the computing resources that will be used to host your game servers, including CPU, memory, storage, and networking capacity. See [Amazon Elastic Compute Cloud Instance Types](http://aws.amazon.com/ec2/instance-types/) for detailed descriptions of Amazon EC2 instance types.
   *
   * @public
   */
  EC2InstanceType?: EC2InstanceType | undefined;

  /**
   * The IP address ranges and port settings that allow inbound traffic to access game server processes and other processes on this fleet. Set this parameter for managed EC2 fleets. You can leave this parameter empty when creating the fleet, but you must call [https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetPortSettings](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetPortSettings) to set it before players can connect to game sessions. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. For Amazon GameLift Servers Realtime fleets, Amazon GameLift Servers automatically sets TCP and UDP ranges.
   *
   * @public
   */
  EC2InboundPermissions?: IpPermission[] | undefined;

  /**
   * The status of termination protection for active game sessions on the fleet. By default, this property is set to `NoProtection`. You can also set game session protection for an individual game session by calling [UpdateGameSession](gamelift/latest/apireference/API_UpdateGameSession.html).
   *
   * - **NoProtection** - Game sessions can be terminated during active gameplay as a result of a scale-down event.
   * - **FullProtection** - Game sessions in `ACTIVE` status cannot be terminated during a scale-down event.
   *
   * @public
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy | undefined;

  /**
   * Instructions for how to launch and run server processes on the fleet. Set runtime configuration for managed EC2 fleets. For an Anywhere fleet, set this parameter only if the fleet is running the Amazon GameLift Servers Agent. The runtime configuration defines one or more server process configurations. Each server process identifies a game executable or Realtime script file and the number of processes to run concurrently.
   *
   * > **Note:** This parameter replaces the parameters `ServerLaunchPath` and `ServerLaunchParameters`, which are still supported for backward compatibility.
   *
   * @public
   */
  RuntimeConfiguration?: RuntimeConfiguration | undefined;

  /**
   * A policy that limits the number of game sessions that an individual player can create on instances in this fleet within a specified span of time.
   *
   * @public
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy | undefined;

  /**
   * The name of an Amazon Web Services CloudWatch metric group to add this fleet to. A metric group is used to aggregate the metrics for multiple fleets. You can specify an existing metric group name or set a new name to create a new metric group. A fleet can be included in only one metric group at a time.
   *
   * @public
   */
  MetricGroups?: string[] | undefined;

  /**
   * Used when peering your Amazon GameLift Servers fleet with a VPC, the unique identifier for the Amazon Web Services account that owns the VPC. You can find your account ID in the Amazon Web Services Management Console under account settings.
   *
   * @public
   */
  PeerVpcAwsAccountId?: string | undefined;

  /**
   * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift Servers fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the [VPC Dashboard](https://console.aws.amazon.com/vpc/) in the Amazon Web Services Management Console. Learn more about VPC peering in [VPC Peering with Amazon GameLift Servers Fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html).
   *
   * @public
   */
  PeerVpcId?: string | undefined;

  /**
   * Indicates whether to use On-Demand or Spot instances for this fleet. By default, this property is set to `ON_DEMAND`. Learn more about when to use [On-Demand versus Spot Instances](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot). This fleet property can't be changed after the fleet is created.
   *
   * @public
   */
  FleetType?: FleetType | undefined;

  /**
   * A unique identifier for an IAM role that manages access to your Amazon Web Services services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN by using the [IAM dashboard](https://console.aws.amazon.com/iam/) in the Amazon Web Services Management Console. Learn more about using on-box credentials for your game servers at [Access external resources from a game server](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html). This fleet property can't be changed after the fleet is created.
   *
   * @public
   */
  InstanceRoleArn?: string | undefined;

  /**
   * Prompts Amazon GameLift Servers to generate a TLS/SSL certificate for the fleet. Amazon GameLift Servers uses the certificates to encrypt traffic between game clients and the game servers running on Amazon GameLift Servers. By default, the `CertificateConfiguration` is `DISABLED`. You can't change this property after you create the fleet.
   *
   * Certificate Manager (ACM) certificates expire after 13 months. Certificate expiration can cause fleets to fail, preventing players from connecting to instances in the fleet. We recommend you replace fleets before 13 months, consider using fleet aliases for a smooth transition.
   *
   * > **Note:** ACM isn't available in all Amazon Web Services regions. A fleet creation request with certificate generation enabled in an unsupported Region, fails with a 4xx error. For more information about the supported Regions, see [Supported Regions](https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html) in the *Certificate Manager User Guide*.
   *
   * @public
   */
  CertificateConfiguration?: CertificateConfiguration | undefined;

  /**
   * A set of remote locations to deploy additional instances to and manage as a multi-location fleet. Use this parameter when creating a fleet in Amazon Web Services Regions that support multiple locations. You can add any Amazon Web Services Region or Local Zone that's supported by Amazon GameLift Servers. Provide a list of one or more Amazon Web Services Region codes, such as `us-west-2`, or Local Zone names. When using this parameter, Amazon GameLift Servers requires you to include your home location in the request. For a list of supported Regions and Local Zones, see [Amazon GameLift Servers service locations](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html) for managed hosting.
   *
   * @public
   */
  Locations?: LocationConfiguration[] | undefined;

  /**
   * A list of labels to assign to the new fleet resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management and cost allocation. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The type of compute resource used to host your game servers.
   *
   * - `EC2` – The game server build is deployed to Amazon EC2 instances for cloud hosting. This is the default setting.
   * - `ANYWHERE` – Game servers and supporting software are deployed to compute resources that you provide and manage. With this compute type, you can also set the `AnywhereConfiguration` parameter.
   *
   * @public
   */
  ComputeType?: ComputeType | undefined;

  /**
   * Amazon GameLift Servers Anywhere configuration options.
   *
   * @public
   */
  AnywhereConfiguration?: AnywhereConfiguration | undefined;

  /**
   * Prompts Amazon GameLift Servers to generate a shared credentials file for the IAM role that's defined in `InstanceRoleArn`. The shared credentials file is stored on each fleet instance and refreshed as needed. Use shared credentials for applications that are deployed along with the game server executable, if the game server is integrated with server SDK version 5.x. For more information about using shared credentials, see [Communicate with other Amazon Web Services resources from your fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html).
   *
   * @public
   */
  InstanceRoleCredentialsProvider?: InstanceRoleCredentialsProvider | undefined;

  /**
   * Configures player gateway for your fleet. Player gateway provides benefits such as DDoS protection by rate limiting and validating traffic before it reaches game servers, hiding game server IP addresses from players, and providing updated endpoints when relay endpoints become unhealthy. Note, player gateway is only available for fleets using server SDK 5.x or later game server builds.
   *
   * **How it works:** When enabled, game clients connect to relay endpoints instead of to your game servers. Player gateway validates player gateway tokens and routes traffic to the appropriate game server. Your game backend calls [GetPlayerConnectionDetails](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetPlayerConnectionDetails.html) to retrieve relay endpoints and player gateway tokens for your game clients. To learn more about this topic, see [DDoS protection with Amazon GameLift Servers player gateway](https://docs.aws.amazon.com/gameliftservers/latest/developerguide/ddos-protection-intro.html).
   *
   * Possible values include:
   *
   * - `DISABLED` (default) -- Game clients connect to the game server endpoint. Use this when you do not intend to integrate your game with player gateway.
   * - `ENABLED` -- Player gateway is available in fleet locations where it is supported. Your game backend can call [GetPlayerConnectionDetails](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetPlayerConnectionDetails.html) to obtain a player gateway token and endpoints for game clients.
   * - `REQUIRED` -- Player gateway is available in fleet locations where it is supported, and the fleet can only use locations that support this feature. Attempting to add a remote location to your fleet which does not support player gateway will result in an `InvalidRequestException`.
   *
   * @public
   */
  PlayerGatewayMode?: PlayerGatewayMode | undefined;

  /**
   * Configuration settings for player gateway. Use this to specify advanced options for how player gateway handles connections.
   *
   * @public
   */
  PlayerGatewayConfiguration?: PlayerGatewayConfiguration | undefined;
}

/**
 * Describes an Amazon GameLift Servers fleet of game hosting resources. Attributes differ based on the fleet's compute type, as follows:
 *
 * - EC2 fleet attributes identify a `Build` resource (for fleets with customer game server builds) or a `Script` resource (for Amazon GameLift Servers Realtime fleets).
 * - Amazon GameLift Servers Anywhere fleets have an abbreviated set of attributes, because most fleet configurations are set directly on the fleet's computes. Attributes include fleet identifiers and descriptive properties, creation/termination time, and fleet status.
 *
 * **Returned by:** [https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetAttributes](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetAttributes)
 *
 * @public
 */
export interface FleetAttributes {
  /**
   * A unique identifier for the fleet.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912`. In a GameLift fleet ARN, the resource ID matches the `FleetId` value.
   *
   * @public
   */
  FleetArn?: string | undefined;

  /**
   * Indicates whether the fleet uses On-Demand or Spot instances. For more information, see [On-Demand versus Spot Instances](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot). This fleet property can't be changed after the fleet is created.
   *
   * @public
   */
  FleetType?: FleetType | undefined;

  /**
   * The Amazon EC2 instance type that the fleet uses. Instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. See [Amazon Elastic Compute Cloud Instance Types](http://aws.amazon.com/ec2/instance-types/) for detailed descriptions. This attribute is used with fleets where `ComputeType` is `EC2`.
   *
   * @public
   */
  InstanceType?: EC2InstanceType | undefined;

  /**
   * A human-readable description of the fleet.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  TerminationTime?: Date | undefined;

  /**
   * Current status of the fleet. Possible fleet statuses include the following:
   *
   * - NEW -- A new fleet resource has been defined and Amazon GameLift Servers has started creating the fleet. Desired instances is set to 1.
   * - DOWNLOADING/VALIDATING/BUILDING -- Amazon GameLift Servers is downloading the game server build, running install scripts, and then validating the build files. When complete, Amazon GameLift Servers launches a fleet instance.
   * - ACTIVATING -- Amazon GameLift Servers is launching a game server process and testing its connectivity with the Amazon GameLift Servers service.
   * - ACTIVE -- The fleet is now ready to host game sessions.
   * - ERROR -- An error occurred when downloading, validating, building, or activating the fleet.
   * - EXPIRED -- The fleet has been expired. The fleet is scaled down to zero instances and cannot host new game sessions.
   * - DELETING -- Hosts are responding to a delete fleet request.
   * - TERMINATED -- The fleet no longer exists.
   *
   * @public
   */
  Status?: FleetStatus | undefined;

  /**
   * A unique identifier for the build resource that is deployed on instances in this fleet. This attribute is used with fleets where `ComputeType` is "EC2".
   *
   * @public
   */
  BuildId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) associated with the Amazon GameLift Servers build resource that is deployed on instances in this fleet. In a GameLift build ARN, the resource ID matches the `BuildId` value. This attribute is used with fleets where `ComputeType` is "EC2".
   *
   * @public
   */
  BuildArn?: string | undefined;

  /**
   * A unique identifier for the Realtime script resource that is deployed on instances in this fleet. This attribute is used with fleets where `ComputeType` is "EC2".
   *
   * @public
   */
  ScriptId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) associated with the GameLift script resource that is deployed on instances in this fleet. In a GameLift script ARN, the resource ID matches the `ScriptId` value.
   *
   * @public
   */
  ScriptArn?: string | undefined;

  /**
   * **This parameter is no longer used.** Server launch paths are now defined using the fleet's [RuntimeConfiguration](https://docs.aws.amazon.com/gamelift/latest/apireference/RuntimeConfiguration.html). Requests that use this parameter continue to be valid.
   *
   * @public
   */
  ServerLaunchPath?: string | undefined;

  /**
   * **This parameter is no longer used.** Server launch parameters are now defined using the fleet's runtime configuration. Requests that use this parameter continue to be valid.
   *
   * @public
   */
  ServerLaunchParameters?: string | undefined;

  /**
   * **This parameter is no longer used.** Game session log paths are now defined using the Amazon GameLift Servers server API `ProcessReady()` `logParameters`. See more information in the [Server API Reference](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api-ref.html#gamelift-sdk-server-api-ref-dataypes-process).
   *
   * @public
   */
  LogPaths?: string[] | undefined;

  /**
   * The type of game session protection to set on all new instances that are started in the fleet. This attribute is used with fleets where `ComputeType` is `EC2`.
   *
   * - **NoProtection** -- The game session can be terminated during a scale-down event.
   * - **FullProtection** -- If the game session is in an `ACTIVE` status, it cannot be terminated during a scale-down event.
   *
   * @public
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy | undefined;

  /**
   * The operating system of the fleet's computing resources. A fleet's operating system is determined by the OS of the build or script that is deployed on this fleet. This attribute is used with fleets where `ComputeType` is `EC2`.
   *
   * > **Note:** Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the [Amazon Linux 2 FAQs](http://aws.amazon.com/aws.amazon.com/amazon-linux-2/faqs/). For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See [Migrate to server SDK version 5.](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html)
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.
   *
   * The policy is evaluated when a player tries to create a new game session. On receiving a `CreateGameSession` request, Amazon GameLift Servers checks that the player (identified by `CreatorId`) has created fewer than the game session limit in the specified time period.
   *
   * The purpose of this policy is to prevent a single player from consuming a large share of available hosting resources. For example, setting `NewGameSessionsPerCreator` to `4` and `PolicyPeriodInMinutes` to `10` limits each player to creating 4 game sessions every 10 minutes. Setting these values too high (for example, 200 game sessions every 1000 minutes) still allows a single player to rapidly consume resources. We recommend keeping these values small.
   *
   * @public
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy | undefined;

  /**
   * Name of a metric group that metrics for this fleet are added to. In Amazon CloudWatch, you can view aggregated metrics for fleets that are in a metric group. A fleet can be included in only one metric group at a time. This attribute is used with fleets where `ComputeType` is `EC2`.
   *
   * @public
   */
  MetricGroups?: string[] | undefined;

  /**
   * A list of fleet activity that has been suspended using [StopFleetActions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html). This includes fleet auto-scaling. This attribute is used with fleets where `ComputeType` is `EC2`.
   *
   * @public
   */
  StoppedActions?: FleetAction[] | undefined;

  /**
   * A unique identifier for an IAM role that manages access to your Amazon Web Services services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN by using the [IAM dashboard](https://console.aws.amazon.com/iam/) in the Amazon Web Services Management Console. Learn more about using on-box credentials for your game servers at [Access external resources from a game server](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html). This attribute is used with fleets where `ComputeType` is `EC2`.
   *
   * @public
   */
  InstanceRoleArn?: string | undefined;

  /**
   * Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate.
   *
   * @public
   */
  CertificateConfiguration?: CertificateConfiguration | undefined;

  /**
   * The type of compute resource used to host your game servers. You can use your own compute resources with Amazon GameLift Servers Anywhere or use Amazon EC2 instances with managed Amazon GameLift Servers.
   *
   * @public
   */
  ComputeType?: ComputeType | undefined;

  /**
   * A set of attributes that are specific to an Anywhere fleet.
   *
   * @public
   */
  AnywhereConfiguration?: AnywhereConfiguration | undefined;

  /**
   * Indicates that fleet instances maintain a shared credentials file for the IAM role defined in `InstanceRoleArn`. Shared credentials allow applications that are deployed with the game server executable to communicate with other Amazon Web Services resources. This property is used only when the game server is integrated with the server SDK version 5.x. For more information about using shared credentials, see [Communicate with other Amazon Web Services resources from your fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html). This attribute is used with fleets where `ComputeType` is `EC2`.
   *
   * @public
   */
  InstanceRoleCredentialsProvider?: InstanceRoleCredentialsProvider | undefined;

  /**
   * Indicates whether player gateway is enabled for this fleet. Player gateway provides benefits such as DDoS protection with negligible impact to latency.
   *
   * If `ENABLED` or `REQUIRED`, game clients can use player gateway to connect with the game server. If `DISABLED`, game clients cannot use player gateway. Instead, they have to directly connect to the game server.
   *
   * @public
   */
  PlayerGatewayMode?: PlayerGatewayMode | undefined;

  /**
   * Configuration settings for player gateway on this fleet.
   *
   * @public
   */
  PlayerGatewayConfiguration?: PlayerGatewayConfiguration | undefined;
}

/**
 * A fleet location and its life-cycle state. A location state object might be used to describe a fleet's remote location or home Region. Life-cycle state tracks the progress of launching the first instance in a new location and preparing it for game hosting, and then removing all instances and deleting the location from the fleet.
 *
 * - **NEW** -- A new fleet location has been defined and desired instances is set to 1.
 * - **DOWNLOADING/VALIDATING/BUILDING/ACTIVATING** -- Amazon GameLift Servers is setting up the new fleet location, creating new instances with the game build or Realtime script and starting server processes.
 * - **ACTIVE** -- Hosts can now accept game sessions.
 * - **ERROR** -- An error occurred when downloading, validating, building, or activating the fleet location.
 * - **DELETING** -- Hosts are responding to a delete fleet location request.
 * - **TERMINATED** -- The fleet location no longer exists.
 * - **NOT_FOUND** -- The fleet location was not found. This could be because the custom location was removed or not created.
 *
 * @public
 */
export interface LocationState {
  /**
   * The fleet location, expressed as an Amazon Web Services Region code such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The life-cycle status of a fleet location.
   *
   * @public
   */
  Status?: FleetStatus | undefined;

  /**
   * The current status of player gateway in this location for this fleet. Note, even if a fleet has PlayerGatewayMode configured as `ENABLED`, player gateway might not be available in a specific location. For more information about locations where player gateway is supported, see [Amazon GameLift Servers service locations](https://docs.aws.amazon.com/gameliftservers/latest/developerguide/gamelift-regions.html).
   *
   * Possible values include:
   *
   * - `ENABLED` -- Player gateway is available for this fleet location.
   * - `DISABLED` -- Player gateway is not available for this fleet location.
   *
   * @public
   */
  PlayerGatewayStatus?: PlayerGatewayStatus | undefined;
}

/**
 * @public
 */
export interface CreateFleetOutput {
  /**
   * The properties for the new fleet, including the current status. All fleets are placed in `NEW` status on creation.
   *
   * @public
   */
  FleetAttributes?: FleetAttributes | undefined;

  /**
   * The fleet's locations and life-cycle status of each location. For new fleets, the status of all locations is set to `NEW`. During fleet creation, Amazon GameLift Servers updates each location status as instances are deployed there and prepared for game hosting. This list includes an entry for the fleet's home Region. For fleets with no remote locations, only one entry, representing the home Region, is returned.
   *
   * @public
   */
  LocationStates?: LocationState[] | undefined;
}

/**
 * @public
 */
export interface CreateFleetLocationsInput {
  /**
   * A unique identifier for the fleet to add locations to. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * A list of locations to deploy additional instances to and manage as part of the fleet. You can add any Amazon GameLift Servers-supported Amazon Web Services Region as a remote location, in the form of an Amazon Web Services Region code such as `us-west-2`.
   *
   * @public
   */
  Locations: LocationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateFleetLocationsOutput {
  /**
   * A unique identifier for the fleet that was updated with new locations.
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
   * The remote locations that are being added to the fleet, and the life-cycle status of each location. For new locations, the status is set to `NEW`. During location creation, Amazon GameLift Servers updates each location's status as instances are deployed there and prepared for game hosting. This list does not include the fleet home Region or any remote locations that were already added to the fleet.
   *
   * @public
   */
  LocationStates?: LocationState[] | undefined;
}

/**
 * Settings for a target-based scaling policy as part of a [GameServerGroupAutoScalingPolicy](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerGroupAutoScalingPolicy.html) . These settings are used to create a target-based policy that tracks the Amazon GameLift Servers FleetIQ metric `"PercentUtilizedGameServers"` and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value.
 *
 * @public
 */
export interface TargetTrackingConfiguration {
  /**
   * Desired value to use with a game server group target-based scaling policy.
   *
   * @public
   */
  TargetValue: number | undefined;
}

/**
 * Configuration settings for intelligent automatic scaling that uses target tracking. These settings are used to add an Auto Scaling policy when creating the corresponding Auto Scaling group. After the Auto Scaling group is created, all updates to Auto Scaling policies, including changing this policy and adding or removing other policies, is done directly on the Auto Scaling group.
 *
 * @public
 */
export interface GameServerGroupAutoScalingPolicy {
  /**
   * Length of time, in seconds, it takes for a new instance to start new game server processes and register with Amazon GameLift Servers FleetIQ. Specifying a warm-up time can be useful, particularly with game servers that take a long time to start up, because it avoids prematurely starting new instances.
   *
   * @public
   */
  EstimatedInstanceWarmup?: number | undefined;

  /**
   * Settings for a target-based scaling policy applied to Auto Scaling group. These settings are used to create a target-based policy that tracks the Amazon GameLift Servers FleetIQ metric `"PercentUtilizedGameServers"` and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value.
   *
   * @public
   */
  TargetTrackingConfiguration: TargetTrackingConfiguration | undefined;
}

/**
 * An allowed instance type for a game server group. All game server groups must have at least two instance types defined for it. Amazon GameLift Servers FleetIQ periodically evaluates each defined instance type for viability. It then updates the Auto Scaling group with the list of viable instance types.
 *
 * @public
 */
export interface InstanceDefinition {
  /**
   * An Amazon EC2 instance type designation.
   *
   * @public
   */
  InstanceType: GameServerGroupInstanceType | undefined;

  /**
   * Instance weighting that indicates how much this instance type contributes to the total capacity of a game server group. Instance weights are used by Amazon GameLift Servers FleetIQ to calculate the instance type's cost per unit hour and better identify the most cost-effective options. For detailed information on weighting instance capacity, see [Instance Weighting](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html) in the *Amazon Elastic Compute Cloud Auto Scaling User Guide*. Default value is "1".
   *
   * @public
   */
  WeightedCapacity?: string | undefined;
}

/**
 * An Amazon Elastic Compute Cloud launch template that contains configuration settings and game server code to be deployed to all instances in a game server group. The launch template is specified when creating a new game server group.
 *
 * @public
 */
export interface LaunchTemplateSpecification {
  /**
   * A unique identifier for an existing Amazon EC2 launch template.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * A readable identifier for an existing Amazon EC2 launch template.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * The version of the Amazon EC2 launch template to use. If no version is specified, the default version will be used. With Amazon EC2, you can specify a default version for a launch template. If none is set, the default is the first version created.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface CreateGameServerGroupInput {
  /**
   * An identifier for the new game server group. This value is used to generate unique ARN identifiers for the Amazon EC2 Auto Scaling group and the Amazon GameLift Servers FleetIQ game server group. The name must be unique per Region per Amazon Web Services account.
   *
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) for an IAM role that allows Amazon GameLift Servers to access your Amazon EC2 Auto Scaling groups.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The minimum number of instances allowed in the Amazon EC2 Auto Scaling group. During automatic scaling events, Amazon GameLift Servers FleetIQ and Amazon EC2 do not scale down the group below this minimum. In production, this value should be set to at least 1. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs.
   *
   * @public
   */
  MinSize: number | undefined;

  /**
   * The maximum number of instances allowed in the Amazon EC2 Auto Scaling group. During automatic scaling events, Amazon GameLift Servers FleetIQ and EC2 do not scale up the group above this maximum. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs.
   *
   * @public
   */
  MaxSize: number | undefined;

  /**
   * The Amazon EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group. You can specify the template using either the template name or ID. For help with creating a launch template, see [Creating a Launch Template for an Auto Scaling Group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html) in the *Amazon Elastic Compute Cloud Auto Scaling User Guide*. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs.
   *
   * > **Note:** If you specify network interfaces in your launch template, you must explicitly set the property `AssociatePublicIpAddress` to "true". If no network interface is specified in the launch template, Amazon GameLift Servers FleetIQ uses your account's default VPC.
   *
   * @public
   */
  LaunchTemplate: LaunchTemplateSpecification | undefined;

  /**
   * The Amazon EC2 instance types and sizes to use in the Auto Scaling group. The instance definitions must specify at least two different instance types that are supported by Amazon GameLift Servers FleetIQ. For more information on instance types, see [EC2 Instance Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon Elastic Compute Cloud User Guide*. You can optionally specify capacity weighting for each instance type. If no weight value is specified for an instance type, it is set to the default value "1". For more information about capacity weighting, see [Instance Weighting for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html) in the Amazon EC2 Auto Scaling User Guide.
   *
   * @public
   */
  InstanceDefinitions: InstanceDefinition[] | undefined;

  /**
   * Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting. The scaling policy uses the metric `"PercentUtilizedGameServers"` to maintain a buffer of idle game servers that can immediately accommodate new games and players. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs.
   *
   * @public
   */
  AutoScalingPolicy?: GameServerGroupAutoScalingPolicy | undefined;

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

  /**
   * A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion. An exception to this is with Spot Instances, which can be terminated by Amazon Web Services regardless of protection status. This property is set to `NO_PROTECTION` by default.
   *
   * @public
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy | undefined;

  /**
   * A list of virtual private cloud (VPC) subnets to use with instances in the game server group. By default, all Amazon GameLift Servers FleetIQ-supported Availability Zones are used. You can use this parameter to specify VPCs that you've set up. This property cannot be updated after the game server group is created, and the corresponding Auto Scaling group will always use the property value that is set with this request, even if the Auto Scaling group is updated directly.
   *
   * @public
   */
  VpcSubnets?: string[] | undefined;

  /**
   * A list of labels to assign to the new game server group resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management, and cost allocation. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Properties that describe a game server group resource. A game server group manages certain properties related to a corresponding Amazon EC2 Auto Scaling group.
 *
 * A game server group is created by a successful call to `CreateGameServerGroup` and deleted by calling `DeleteGameServerGroup`. Game server group activity can be temporarily suspended and resumed by calling `SuspendGameServerGroup` and `ResumeGameServerGroup`, respectively.
 *
 * @public
 */
export interface GameServerGroup {
  /**
   * A developer-defined identifier for the game server group. The name is unique for each Region in each Amazon Web Services account.
   *
   * @public
   */
  GameServerGroupName?: string | undefined;

  /**
   * A generated unique ID for the game server group.
   *
   * @public
   */
  GameServerGroupArn?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) for an IAM role that allows Amazon GameLift Servers to access your Amazon EC2 Auto Scaling groups.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The set of Amazon EC2 instance types that Amazon GameLift Servers FleetIQ can use when balancing and automatically scaling instances in the corresponding Auto Scaling group.
   *
   * @public
   */
  InstanceDefinitions?: InstanceDefinition[] | undefined;

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

  /**
   * A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion. An exception to this is with Spot Instances, which can be terminated by Amazon Web Services regardless of protection status.
   *
   * @public
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy | undefined;

  /**
   * A generated unique ID for the Amazon EC2 Auto Scaling group that is associated with this game server group.
   *
   * @public
   */
  AutoScalingGroupArn?: string | undefined;

  /**
   * The current status of the game server group. Possible statuses include:
   *
   * - `NEW` - Amazon GameLift Servers FleetIQ has validated the `CreateGameServerGroup()` request.
   * - `ACTIVATING` - Amazon GameLift Servers FleetIQ is setting up a game server group, which includes creating an Auto Scaling group in your Amazon Web Services account.
   * - `ACTIVE` - The game server group has been successfully created.
   * - `DELETE_SCHEDULED` - A request to delete the game server group has been received.
   * - `DELETING` - Amazon GameLift Servers FleetIQ has received a valid `DeleteGameServerGroup()` request and is processing it. Amazon GameLift Servers FleetIQ must first complete and release hosts before it deletes the Auto Scaling group and the game server group.
   * - `DELETED` - The game server group has been successfully deleted.
   * - `ERROR` - The asynchronous processes of activating or deleting a game server group has failed, resulting in an error state.
   *
   * @public
   */
  Status?: GameServerGroupStatus | undefined;

  /**
   * Additional information about the current game server group status. This information might provide additional insight on groups that are in `ERROR` status.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * A list of activities that are currently suspended for this game server group. If this property is empty, all activities are occurring.
   *
   * @public
   */
  SuspendedActions?: GameServerGroupAction[] | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A timestamp that indicates when this game server group was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateGameServerGroupOutput {
  /**
   * The newly created game server group object, including the new ARN value for the Amazon GameLift Servers FleetIQ game server group and the object's status. The Amazon EC2 Auto Scaling group ARN is initially null, since the group has not yet been created. This value is added once the game server group status reaches `ACTIVE`.
   *
   * @public
   */
  GameServerGroup?: GameServerGroup | undefined;
}

/**
 * This key-value pair can store custom data about a game session. For example, you might use a `GameProperty` to track a game session's map, level of difficulty, or remaining time. The difficulty level could be specified like this: `\{"Key": "difficulty", "Value":"Novice"\}`.
 *
 * You can set game properties when creating a game session. You can also modify game properties of an active game session. When searching for game sessions, you can filter on game property keys and values. You can't delete game properties from a game session.
 *
 * For examples of working with game properties, see [Create a game session with properties](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#game-properties).
 *
 * @public
 */
export interface GameProperty {
  /**
   * The game property identifier.
   *
   * > **Note:**
   * >
   * > - Avoid using periods (".") in property keys if you plan to search for game sessions by properties. Property keys containing periods cannot be searched and will be filtered out from search results due to search index limitations.
   * > - If you use SearchGameSessions API, there is a limit of 500 game property keys across all game sessions and all fleets per region. If the limit is exceeded, there will potentially be game session entries missing from SearchGameSessions API results.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The game property value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateGameSessionInput {
  /**
   * A unique identifier for the fleet to create a game session in. You can use either the fleet ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * A unique identifier for the alias associated with the fleet to create a game session in. You can use either the alias ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.
   *
   * @public
   */
  AliasId?: string | undefined;

  /**
   * The maximum number of players that can be connected simultaneously to the game session.
   *
   * @public
   */
  MaximumPlayerSessionCount: number | undefined;

  /**
   * A descriptive label that is associated with a game session. Session names do not need to be unique.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A set of key-value pairs that can store custom data in a game session. For example: `\{"Key": "difficulty", "Value": "novice"\}`. For an example, see [Create a game session with custom properties](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#game-properties-create).
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
   * A unique identifier for a player or entity creating the game session.
   *
   * If you add a resource creation limit policy to a fleet, the `CreateGameSession` operation requires a `CreatorId`. Amazon GameLift Servers limits the number of game session creation requests with the same `CreatorId` in a specified time period.
   *
   * If your fleet doesn't have a resource creation limit policy and you provide a `CreatorId` in your `CreateGameSession` requests, Amazon GameLift Servers limits requests to one request per `CreatorId` per second.
   *
   * To not limit `CreateGameSession` requests with the same `CreatorId`, don't provide a `CreatorId` in your `CreateGameSession` request.
   *
   * @public
   */
  CreatorId?: string | undefined;

  /**
   * *This parameter is deprecated. Use `IdempotencyToken` instead.*
   *
   * Custom string that uniquely identifies a request for a new game session. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID.
   *
   * @public
   */
  GameSessionId?: string | undefined;

  /**
   * Custom string that uniquely identifies the new game session request. This is useful for ensuring that game session requests with the same idempotency token are processed only once. Subsequent requests with the same string return the original `GameSession` object, with an updated status. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`. Idempotency tokens remain in use for 30 days after a game session has ended; game session objects are retained for this time period and then deleted.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see [Start a game session](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession).
   *
   * @public
   */
  GameSessionData?: string | undefined;

  /**
   * A fleet's remote location to place the new game session in. If this parameter is not set, the new game session is placed in the fleet's home Region. Specify a remote location with an Amazon Web Services Region code such as `us-west-2`. When using an Anywhere fleet, this parameter is required and must be set to the Anywhere fleet's custom location.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * Properties describing a game session.
 *
 * A game session in ACTIVE status can host players. When a game session ends, its status is set to `TERMINATED`.
 *
 * Amazon GameLift Servers retains a game session resource for 30 days after the game session ends. You can reuse idempotency token values after this time. Game session logs are retained for 14 days.
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @public
 */
export interface GameSession {
  /**
   * An identifier for the game session that is unique across all regions. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`.
   *
   * @public
   */
  GameSessionId?: string | undefined;

  /**
   * A descriptive label that is associated with a game session. Session names do not need to be unique.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A unique identifier for the fleet that the game session is running on.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) associated with the GameLift fleet that this game session is running on.
   *
   * @public
   */
  FleetArn?: string | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  TerminationTime?: Date | undefined;

  /**
   * Number of players currently in the game session.
   *
   * @public
   */
  CurrentPlayerSessionCount?: number | undefined;

  /**
   * The maximum number of players that can be connected simultaneously to the game session.
   *
   * @public
   */
  MaximumPlayerSessionCount?: number | undefined;

  /**
   * Current status of the game session. A game session must have an `ACTIVE` status to have player sessions.
   *
   * @public
   */
  Status?: GameSessionStatus | undefined;

  /**
   * Provides additional information about game session status.
   *
   * - `INTERRUPTED` -- The game session was hosted on an EC2 Spot instance that was reclaimed, causing the active game session to be stopped.
   * - `TRIGGERED_ON_PROCESS_TERMINATE` – The game session was stopped by calling `TerminateGameSession` with the termination mode `TRIGGER_ON_PROCESS_TERMINATE`.
   * - `FORCE_TERMINATED` – The game session was stopped by calling `TerminateGameSession` with the termination mode `FORCE_TERMINATE`.
   *
   * @public
   */
  StatusReason?: GameSessionStatusReason | undefined;

  /**
   * A set of key-value pairs that can store custom data in a game session. For example: `\{"Key": "difficulty", "Value": "novice"\}`.
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
   * The IP address of the game session. To connect to a Amazon GameLift Servers game server, an app needs both the IP address and port number.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The DNS identifier assigned to the instance that is running the game session. Values have the following format:
   *
   * - TLS-enabled fleets: `<unique identifier>.<region identifier>.amazongamelift.com`.
   * - Non-TLS-enabled fleets: `ec2-<unique identifier>.compute.amazonaws.com`. (See [Amazon EC2 Instance IP Addressing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses).)
   *
   * When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * The port number for the game session. To connect to a Amazon GameLift Servers game server, an app needs both the IP address and port number.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Indicates whether the game session is accepting new players.
   *
   * @public
   */
  PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy | undefined;

  /**
   * A unique identifier for a player. This ID is used to enforce a resource protection policy (if one exists), that limits the number of game sessions a player can create.
   *
   * @public
   */
  CreatorId?: string | undefined;

  /**
   * A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see [Start a game session](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession).
   *
   * @public
   */
  GameSessionData?: string | undefined;

  /**
   * Information about the matchmaking process that resulted in the game session, if matchmaking was used. Data is in JSON syntax, formatted as a string. Information includes the matchmaker ID as well as player attributes and team assignments. For more details on matchmaker data, see [Match Data](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data). Matchmaker data is updated whenever new players are added during a successful backfill (see [StartMatchBackfill](https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchBackfill.html)).
   *
   * @public
   */
  MatchmakerData?: string | undefined;

  /**
   * The fleet location where the game session is running. This value might specify the fleet's home Region or a remote location. Location is expressed as an Amazon Web Services Region code such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * A descriptive label for the compute resource. The compute resource that is hosting the game session. For EC2 fleets, this is the EC2 instance ID. For Container fleets, each game server container group on a fleet instance is assigned a compute name. For Anywhere fleets, this is the custom compute name.
   *
   * @public
   */
  ComputeName?: string | undefined;

  /**
   * Indicates whether player gateway is available for use for this game session. Note, even if a fleet has PlayerGatewayMode configured as `ENABLED`, player gateway might not be available in a specific location. For more information about locations where player gateway is supported, see [Amazon GameLift Servers service locations](https://docs.aws.amazon.com/gameliftservers/latest/developerguide/gamelift-regions.html).
   *
   * Possible values include:
   *
   * - `ENABLED` -- Player gateway is available for routing player connections for this game session.
   * - `DISABLED` -- Player gateway is not available for this game session.
   *
   * @public
   */
  PlayerGatewayStatus?: PlayerGatewayStatus | undefined;
}

/**
 * @public
 */
export interface CreateGameSessionOutput {
  /**
   * Object that describes the newly created game session record.
   *
   * @public
   */
  GameSession?: GameSession | undefined;
}

/**
 * A fleet or alias designated in a game session queue. Queues fulfill requests for new game sessions by placing a new game session on any of the queue's destinations.
 *
 * @public
 */
export interface GameSessionQueueDestination {
  /**
   * The Amazon Resource Name (ARN) that is assigned to fleet or fleet alias. ARNs, which include a fleet ID or alias ID and a Region name, provide a unique identifier across all Regions.
   *
   * @public
   */
  DestinationArn?: string | undefined;
}

/**
 * A list of fleet locations where a game session queue can place new game sessions. You can use a filter to temporarily exclude specific locations from receiving placements. For queues that have multi-location fleets, you can use a filter configuration to allow placement with some, but not all, of a fleet's locations.
 *
 * @public
 */
export interface FilterConfiguration {
  /**
   * A list of locations to allow game session placement in, in the form of Amazon Web Services Region codes such as `us-west-2`.
   *
   * @public
   */
  AllowedLocations?: string[] | undefined;
}

/**
 * Sets a latency cap for individual players when placing a game session. With a latency policy in force, a game session cannot be placed in a fleet location where a player reports latency higher than the cap. Latency policies are used only with placement requests that provide player latency information. Player latency policies can be stacked to gradually relax latency requirements over time.
 *
 * @public
 */
export interface PlayerLatencyPolicy {
  /**
   * The maximum latency value that is allowed for any player, in milliseconds. All policies must have a value set for this property.
   *
   * @public
   */
  MaximumIndividualPlayerLatencyMilliseconds?: number | undefined;

  /**
   * The length of time, in seconds, that the policy is enforced while placing a new game session. A null value for this property means that the policy is enforced until the queue times out.
   *
   * @public
   */
  PolicyDurationSeconds?: number | undefined;
}

/**
 * Custom prioritization settings to use with a game session queue. Prioritization settings determine how the queue selects a game hosting resource to start a new game session. This configuration replaces the default prioritization process for queues.
 *
 * By default, a queue makes game session placements based on the following criteria:
 *
 * - When a game session request does not include player latency data, Amazon GameLift Servers places game sessions based on the following priorities: (1) the queue's default destination order, and (2) for multi-location fleets, an alphabetic list of locations.
 * - When a game session request includes player latency data, Amazon GameLift Servers re-orders the queue's destinations to make placements where the average player latency is lowest. It reorders based on the following priorities: (1) the lowest average latency across all players, (2) the lowest hosting cost, (3) the queue's default destination order, and (4) for multi-location fleets, an alphabetic list of locations.
 *
 * @public
 */
export interface PriorityConfiguration {
  /**
   * A custom sequence to use when prioritizing where to place new game sessions. Each priority type is listed once.
   *
   * - `LATENCY` -- Amazon GameLift Servers prioritizes locations where the average player latency is lowest. Player latency data is provided in each game session placement request.
   * - `COST` -- Amazon GameLift Servers prioritizes queue destinations with the lowest current hosting costs. Cost is evaluated based on the destination's location, instance type, and fleet type (Spot or On-Demand).
   * - `DESTINATION` -- Amazon GameLift Servers prioritizes based on the list order of destinations in the queue configuration.
   * - `LOCATION` -- Amazon GameLift Servers prioritizes based on the provided order of locations, as defined in `LocationOrder`.
   *
   * @public
   */
  PriorityOrder?: PriorityType[] | undefined;

  /**
   * The prioritization order to use for fleet locations, when the `PriorityOrder` property includes `LOCATION`. Locations can include Amazon Web Services Region codes (such as `us-west-2`), local zones, and custom locations (for Anywhere fleets). Each location must be listed only once. For details, see [Amazon GameLift Servers service locations.](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html)
   *
   * @public
   */
  LocationOrder?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateGameSessionQueueInput {
  /**
   * A descriptive label that is associated with game session queue. Queue names must be unique within each Region.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a `TIMED_OUT` status. If you don't specify a request timeout, the queue uses a default value.
   *
   * > **Note:** The minimum value is 10 and the maximum value is 600.
   *
   * @public
   */
  TimeoutInSeconds?: number | undefined;

  /**
   * A set of policies that enforce a sliding cap on player latency when processing game sessions placement requests. Use multiple policies to gradually relax the cap over time if Amazon GameLift Servers can't make a placement. Policies are evaluated in order starting with the lowest maximum latency value.
   *
   * @public
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[] | undefined;

  /**
   * A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference.
   *
   * @public
   */
  Destinations?: GameSessionQueueDestination[] | undefined;

  /**
   * A list of locations where a queue is allowed to place new game sessions. Locations are specified in the form of Amazon Web Services Region codes, such as `us-west-2`. If this parameter is not set, game sessions can be placed in any queue location.
   *
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * Custom settings to use when prioritizing destinations and locations for game session placements. This configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly named will be automatically applied at the end of the prioritization process.
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

  /**
   * A list of labels to assign to the new game session queue resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management and cost allocation. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Configuration for a game session placement mechanism that processes requests for new game sessions. A queue can be used on its own or as part of a matchmaking solution.
 *
 * @public
 */
export interface GameSessionQueue {
  /**
   * A descriptive label that is associated with game session queue. Queue names must be unique within each Region.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::gamesessionqueue/<queue name>`. In a Amazon GameLift Servers game session queue ARN, the resource ID matches the *Name* value.
   *
   * @public
   */
  GameSessionQueueArn?: string | undefined;

  /**
   * The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a `TIMED_OUT` status.
   *
   * > **Note:** The minimum value is 10 and the maximum value is 600.
   *
   * @public
   */
  TimeoutInSeconds?: number | undefined;

  /**
   * A set of policies that enforce a sliding cap on player latency when processing game sessions placement requests. Use multiple policies to gradually relax the cap over time if Amazon GameLift Servers can't make a placement. Policies are evaluated in order starting with the lowest maximum latency value.
   *
   * @public
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[] | undefined;

  /**
   * A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference.
   *
   * @public
   */
  Destinations?: GameSessionQueueDestination[] | undefined;

  /**
   * A list of locations where a queue is allowed to place new game sessions. Locations are specified in the form of Amazon Web Services Region codes, such as `us-west-2`. If this parameter is not set, game sessions can be placed in any queue location.
   *
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * Custom settings to use when prioritizing destinations and locations for game session placements. This configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly named will be automatically applied at the end of the prioritization process.
   *
   * @public
   */
  PriorityConfiguration?: PriorityConfiguration | undefined;

  /**
   * Information that is added to all events that are related to this game session queue.
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
export interface CreateGameSessionQueueOutput {
  /**
   * An object that describes the newly created game session queue.
   *
   * @public
   */
  GameSessionQueue?: GameSessionQueue | undefined;
}

/**
 * @public
 */
export interface CreateLocationInput {
  /**
   * A descriptive name for the custom location.
   *
   * @public
   */
  LocationName: string | undefined;

  /**
   * A list of labels to assign to the new resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management, and cost allocation. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The domain name and port information for a UDP endpoint.
 *
 * @public
 */
export interface UDPEndpoint {
  /**
   * The domain name of the UDP endpoint.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The port number of the UDP endpoint. For Amazon GameLift Servers ping beacons, this is typically port 7770.
   *
   * @public
   */
  Port?: number | undefined;
}

/**
 * Information about a UDP ping beacon that can be used to measure network latency between a player device and an Amazon GameLift Servers hosting location.
 *
 * @public
 */
export interface PingBeacon {
  /**
   * The domain name and port of the UDP ping beacon. Your game client can send UDP messages to this endpoint and receive responses to measure network latency.
   *
   * @public
   */
  UDPEndpoint?: UDPEndpoint | undefined;
}

/**
 * Properties of a location, which can include its name, ARN (for custom locations), and ping beacon information.
 *
 * @public
 */
export interface LocationModel {
  /**
   * The location's name.
   *
   * @public
   */
  LocationName?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a custom location resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::location/location-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912`.
   *
   * @public
   */
  LocationArn?: string | undefined;

  /**
   * Information about the UDP ping beacon for this location. Ping beacons are fixed endpoints that you can use to measure network latency between a player device and an Amazon GameLift Servers hosting location.
   *
   * @public
   */
  PingBeacon?: PingBeacon | undefined;
}

/**
 * @public
 */
export interface CreateLocationOutput {
  /**
   * The details of the custom location you created.
   *
   * @public
   */
  Location?: LocationModel | undefined;
}

/**
 * @public
 */
export interface CreateMatchmakingConfigurationInput {
  /**
   * A unique identifier for the matchmaking configuration. This name is used to identify the configuration associated with a matchmaking request or ticket.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A human-readable description of the matchmaking configuration.
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
  RequestTimeoutSeconds: number | undefined;

  /**
   * The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.
   *
   * @public
   */
  AcceptanceTimeoutSeconds?: number | undefined;

  /**
   * A flag that determines whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to `TRUE`. With this option enabled, matchmaking tickets use the status `REQUIRES_ACCEPTANCE` to indicate when a completed potential match is waiting for player acceptance.
   *
   * @public
   */
  AcceptanceRequired: boolean | undefined;

  /**
   * A unique identifier for the matchmaking rule set to use with this configuration. You can use either the rule set name or ARN value. A matchmaking configuration can only use rule sets that are defined in the same Region.
   *
   * @public
   */
  RuleSetName: string | undefined;

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
   * Information to be added to all events related to this matchmaking configuration.
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
   * A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see [Start a game session](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession). This information is added to the new `GameSession` object that is created for a successful match. This parameter is not used if `FlexMatchMode` is set to `STANDALONE`.
   *
   * @public
   */
  GameSessionData?: string | undefined;

  /**
   * The method used to backfill game sessions that are created with this matchmaking configuration. Specify `MANUAL` when your game manages backfill requests manually or does not use the match backfill feature. Specify `AUTOMATIC` to have Amazon GameLift Servers create a backfill request whenever a game session has one or more open slots. Learn more about manual and automatic backfill in [Backfill Existing Games with FlexMatch](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html). Automatic backfill is not available when `FlexMatchMode` is set to `STANDALONE`.
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

  /**
   * A list of labels to assign to the new matchmaking configuration resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management and cost allocation. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration.
 *
 * @public
 */
export interface MatchmakingConfiguration {
  /**
   * A unique identifier for the matchmaking configuration. This name is used to identify the configuration associated with a matchmaking request or ticket.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers matchmaking configuration resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::matchmakingconfiguration/<matchmaking configuration name>`. In a Amazon GameLift Servers configuration ARN, the resource ID matches the *Name* value.
   *
   * @public
   */
  ConfigurationArn?: string | undefined;

  /**
   * A descriptive label that is associated with matchmaking configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::gamesessionqueue/<queue name>`. Queues can be located in any Region. Queues are used to start new Amazon GameLift Servers-hosted game sessions for matches that are created with this matchmaking configuration. This property is not set when `FlexMatchMode` is set to `STANDALONE`.
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
   * The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required. If any player rejects the match or fails to accept before the timeout, the ticket continues to look for an acceptable match.
   *
   * @public
   */
  AcceptanceTimeoutSeconds?: number | undefined;

  /**
   * A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE. When this option is enabled, matchmaking tickets use the status `REQUIRES_ACCEPTANCE` to indicate when a completed potential match is waiting for player acceptance.
   *
   * @public
   */
  AcceptanceRequired?: boolean | undefined;

  /**
   * A unique identifier for the matchmaking rule set to use with this configuration. A matchmaking configuration can only use rule sets that are defined in the same Region.
   *
   * @public
   */
  RuleSetName?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) associated with the GameLift matchmaking rule set resource that this configuration uses.
   *
   * @public
   */
  RuleSetArn?: string | undefined;

  /**
   * An SNS topic ARN that is set up to receive matchmaking notifications.
   *
   * @public
   */
  NotificationTarget?: string | undefined;

  /**
   * The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match. This parameter is not used when `FlexMatchMode` is set to `STANDALONE`.
   *
   * @public
   */
  AdditionalPlayerCount?: number | undefined;

  /**
   * Information to attach to all events related to the matchmaking configuration.
   *
   * @public
   */
  CustomEventData?: string | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A set of key-value pairs that can store custom data in a game session. For example: `\{"Key": "difficulty", "Value": "novice"\}`. This information is added to the new `GameSession` object that is created for a successful match. This parameter is not used when `FlexMatchMode` is set to `STANDALONE`.
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
   * A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see [Start a game session](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession). This information is added to the new `GameSession` object that is created for a successful match. This parameter is not used when `FlexMatchMode` is set to `STANDALONE`.
   *
   * @public
   */
  GameSessionData?: string | undefined;

  /**
   * The method used to backfill game sessions created with this matchmaking configuration. MANUAL indicates that the game makes backfill requests or does not use the match backfill feature. AUTOMATIC indicates that GameLift creates backfill requests whenever a game session has one or more open slots. Learn more about manual and automatic backfill in [Backfill existing games with FlexMatch](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html). Automatic backfill is not available when `FlexMatchMode` is set to `STANDALONE`.
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
export interface CreateMatchmakingConfigurationOutput {
  /**
   * Object that describes the newly created matchmaking configuration.
   *
   * @public
   */
  Configuration?: MatchmakingConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMatchmakingRuleSetInput {
  /**
   * A unique identifier for the matchmaking rule set. A matchmaking configuration identifies the rule set it uses by this name value. Note that the rule set name is different from the optional `name` field in the rule set body.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A collection of matchmaking rules, formatted as a JSON string. Comments are not allowed in JSON, but most elements support a description field.
   *
   * @public
   */
  RuleSetBody: string | undefined;

  /**
   * A list of labels to assign to the new matchmaking rule set resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management and cost allocation. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Set of rule statements, used with FlexMatch, that determine how to build your player matches. Each rule set describes a type of group to be created and defines the parameters for acceptable player matches.
 *
 * A rule set may define the following elements for a match. For detailed information and examples showing how to construct a rule set, see [Build a FlexMatch rule set](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html).
 *
 * - Teams -- Required. A rule set must define one or multiple teams for the match and set minimum and maximum team sizes. For example, a rule set might describe a 4x4 match that requires all eight slots to be filled.
 * - Player attributes -- Optional. These attributes specify a set of player characteristics to evaluate when looking for a match. Matchmaking requests that use a rule set with player attributes must provide the corresponding attribute values. For example, an attribute might specify a player's skill or level.
 * - Rules -- Optional. Rules define how to evaluate potential players for a match based on player attributes. A rule might specify minimum requirements for individual players, teams, or entire matches. For example, a rule might require each player to meet a certain skill level, each team to have at least one player in a certain role, or the match to have a minimum average skill level, or may describe an entire group--such as all teams must be evenly matched or have at least one player in a certain role.
 * - Expansions -- Optional. Expansions allow you to relax the rules after a period of time when no acceptable matches are found. This feature lets you balance getting players into games in a reasonable amount of time instead of making them wait indefinitely for the best possible match. For example, you might use an expansion to increase the maximum skill variance between players after 30 seconds.
 *
 * @public
 */
export interface MatchmakingRuleSet {
  /**
   * A unique identifier for the matchmaking rule set
   *
   * @public
   */
  RuleSetName?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers matchmaking rule set resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::matchmakingruleset/<ruleset name>`. In a GameLift rule set ARN, the resource ID matches the *RuleSetName* value.
   *
   * @public
   */
  RuleSetArn?: string | undefined;

  /**
   * A collection of matchmaking rules, formatted as a JSON string. Comments are not allowed in JSON, but most elements support a description field.
   *
   * @public
   */
  RuleSetBody: string | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateMatchmakingRuleSetOutput {
  /**
   * The newly created matchmaking rule set.
   *
   * @public
   */
  RuleSet: MatchmakingRuleSet | undefined;
}

/**
 * @public
 */
export interface CreatePlayerSessionInput {
  /**
   * An identifier for the game session that is unique across all regions to add a player to. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`.
   *
   * @public
   */
  GameSessionId: string | undefined;

  /**
   * A unique identifier for a player. Player IDs are developer-defined.
   *
   * @public
   */
  PlayerId: string | undefined;

  /**
   * Developer-defined information related to a player. Amazon GameLift Servers does not use this data, so it can be formatted as needed for use in the game.
   *
   * @public
   */
  PlayerData?: string | undefined;
}

/**
 * Represents a player session. Player sessions are created either for a specific game session, or as part of a game session placement or matchmaking request. A player session can represent a reserved player slot in a game session (when status is `RESERVED`) or actual player activity in a game session (when status is `ACTIVE`). A player session object, including player data, is automatically passed to a game session when the player connects to the game session and is validated. After the game session ends, player session information is retained for 30 days and then removed.
 *
 * **Related actions**
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @public
 */
export interface PlayerSession {
  /**
   * A unique identifier for a player session.
   *
   * @public
   */
  PlayerSessionId?: string | undefined;

  /**
   * A unique identifier for a player that is associated with this player session.
   *
   * @public
   */
  PlayerId?: string | undefined;

  /**
   * An identifier for the game session that is unique across all regions that the player session is connected to. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`.
   *
   * @public
   */
  GameSessionId?: string | undefined;

  /**
   * A unique identifier for the fleet that the player's game session is running on.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) associated with the GameLift fleet that the player's game session is running on.
   *
   * @public
   */
  FleetArn?: string | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  TerminationTime?: Date | undefined;

  /**
   * Current status of the player session.
   *
   * Possible player session statuses include the following:
   *
   * - **RESERVED** -- The player session request has been received, but the player has not yet connected to the server process and/or been validated.
   * - **ACTIVE** -- The player has been validated by the server process and is currently connected.
   * - **COMPLETED** -- The player connection has been dropped.
   * - **TIMEDOUT** -- A player session request was received, but the player did not connect and/or was not validated within the timeout limit (60 seconds).
   *
   * @public
   */
  Status?: PlayerSessionStatus | undefined;

  /**
   * The IP address of the game session. To connect to a Amazon GameLift Servers game server, an app needs both the IP address and port number.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The DNS identifier assigned to the instance that is running the game session. Values have the following format:
   *
   * - TLS-enabled fleets: `<unique identifier>.<region identifier>.amazongamelift.com`.
   * - Non-TLS-enabled fleets: `ec2-<unique identifier>.compute.amazonaws.com`. (See [Amazon EC2 Instance IP Addressing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses).)
   *
   * When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * Port number for the game session. To connect to a Amazon GameLift Servers server process, an app needs both the IP address and port number.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Developer-defined information related to a player. Amazon GameLift Servers does not use this data, so it can be formatted as needed for use in the game.
   *
   * @public
   */
  PlayerData?: string | undefined;
}

/**
 * @public
 */
export interface CreatePlayerSessionOutput {
  /**
   * Object that describes the newly created player session record.
   *
   * @public
   */
  PlayerSession?: PlayerSession | undefined;
}

/**
 * @public
 */
export interface CreatePlayerSessionsInput {
  /**
   * An identifier for the game session that is unique across all regions to add players to. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`.
   *
   * @public
   */
  GameSessionId: string | undefined;

  /**
   * List of unique identifiers for the players to be added.
   *
   * @public
   */
  PlayerIds: string[] | undefined;

  /**
   * Map of string pairs, each specifying a player ID and a set of developer-defined information related to the player. Amazon GameLift Servers does not use this data, so it can be formatted as needed for use in the game. Any player data strings for player IDs that are not included in the `PlayerIds` parameter are ignored.
   *
   * @public
   */
  PlayerDataMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePlayerSessionsOutput {
  /**
   * A collection of player session objects created for the added players.
   *
   * @public
   */
  PlayerSessions?: PlayerSession[] | undefined;
}

/**
 * @public
 */
export interface CreateScriptInput {
  /**
   * A descriptive label that is associated with a script. Script names do not need to be unique. You can use [UpdateScript](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html) to change this value later.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Version information that is associated with a build or script. Version strings do not need to be unique. You can use [UpdateScript](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html) to change this value later.
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

  /**
   * A list of labels to assign to the new script resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management and cost allocation. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*. Once the resource is created, you can use [TagResource](https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html), [UntagResource](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html), and [ListTagsForResource](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html) to add, remove, and view tags. The maximum tag limit may be lower than stated. See the Amazon Web Services General Reference for actual tagging limits.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Node.js version used for execution of your Realtime script. The valid values are `10.x | 24.x`. By default, `NodeJsVersion` is `10.x`. This value cannot be updated later.
   *
   * > **Note:** Node.js 10 will reach end of support on September 30, 2026. See more details in the [Node.js 10 FAQs](http://aws.amazon.com/gamelift/faq/nodejs10/). For migration guidance, see [Migrating from Node.js 10 to 24](https://docs.aws.amazon.com/gamelift/latest/realtimeguide/realtime-script.html#realtime-script-nodejs-migration).
   *
   * @public
   */
  NodeJsVersion?: string | undefined;
}

/**
 * Properties describing a Realtime script.
 *
 * **Related actions**
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @public
 */
export interface Script {
  /**
   * A unique identifier for the Realtime script
   *
   * @public
   */
  ScriptId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers script resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift script ARN, the resource ID matches the *ScriptId* value.
   *
   * @public
   */
  ScriptArn?: string | undefined;

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
   * The file size of the uploaded Realtime script, expressed in bytes. When files are uploaded from an S3 location, this value remains at "0".
   *
   * @public
   */
  SizeOnDisk?: number | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift Servers to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift Servers uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the `ObjectVersion` parameter to specify an earlier version.
   *
   * @public
   */
  StorageLocation?: S3Location | undefined;

  /**
   * The Node.js version used for execution of your Realtime script. The valid values are `10.x | 24.x`. By default, `NodeJsVersion` is `10.x`. This value cannot be updated later.
   *
   * > **Note:** Node.js 10 will reach end of support on September 30, 2026. See more details in the [Node.js 10 FAQs](http://aws.amazon.com/gamelift/faq/nodejs10/). For migration guidance, see [Migrating from Node.js 10 to 24](https://docs.aws.amazon.com/gamelift/latest/realtimeguide/realtime-script.html#realtime-script-nodejs-migration).
   *
   * @public
   */
  NodeJsVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateScriptOutput {
  /**
   * The newly created script record with a unique script ID and ARN. The new script's storage location reflects an Amazon S3 location: (1) If the script was uploaded from an S3 bucket under your account, the storage location reflects the information that was provided in the *CreateScript* request; (2) If the script file was uploaded from a local zip file, the storage location reflects an S3 location controlled by the Amazon GameLift Servers service.
   *
   * @public
   */
  Script?: Script | undefined;
}

/**
 * @public
 */
export interface CreateVpcPeeringAuthorizationInput {
  /**
   * A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift Servers fleet. You can find your Account ID in the Amazon Web Services Management Console under account settings.
   *
   * @public
   */
  GameLiftAwsAccountId: string | undefined;

  /**
   * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift Servers fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the [VPC Dashboard](https://console.aws.amazon.com/vpc/) in the Amazon Web Services Management Console. Learn more about VPC peering in [VPC Peering with Amazon GameLift Servers Fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html).
   *
   * @public
   */
  PeerVpcId: string | undefined;
}

/**
 * Represents an authorization for a VPC peering connection between the VPC for an Amazon GameLift Servers fleet and another VPC on an account you have access to. This authorization must exist and be valid for the peering connection to be established. Authorizations are valid for 24 hours after they are issued.
 *
 * **Related actions**
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @public
 */
export interface VpcPeeringAuthorization {
  /**
   * A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift Servers fleet. You can find your Account ID in the Amazon Web Services Management Console under account settings.
   *
   * @public
   */
  GameLiftAwsAccountId?: string | undefined;

  /**
   * The authorization's peer VPC Amazon Web Services account ID.
   *
   * @public
   */
  PeerVpcAwsAccountId?: string | undefined;

  /**
   * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift Servers fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the [VPC Dashboard](https://console.aws.amazon.com/vpc/) in the Amazon Web Services Management Console. Learn more about VPC peering in [VPC Peering with Amazon GameLift Servers Fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html).
   *
   * @public
   */
  PeerVpcId?: string | undefined;

  /**
   * Time stamp indicating when this authorization was issued. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Time stamp indicating when this authorization expires (24 hours after issuance). Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  ExpirationTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateVpcPeeringAuthorizationOutput {
  /**
   * Details on the requested VPC peering authorization, including expiration.
   *
   * @public
   */
  VpcPeeringAuthorization?: VpcPeeringAuthorization | undefined;
}

/**
 * @public
 */
export interface CreateVpcPeeringConnectionInput {
  /**
   * A unique identifier for the fleet. You can use either the fleet ID or ARN value. This tells Amazon GameLift Servers which GameLift VPC to peer with.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * A unique identifier for the Amazon Web Services account with the VPC that you want to peer your Amazon GameLift Servers fleet with. You can find your Account ID in the Amazon Web Services Management Console under account settings.
   *
   * @public
   */
  PeerVpcAwsAccountId: string | undefined;

  /**
   * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift Servers fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the [VPC Dashboard](https://console.aws.amazon.com/vpc/) in the Amazon Web Services Management Console. Learn more about VPC peering in [VPC Peering with Amazon GameLift Servers Fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html).
   *
   * @public
   */
  PeerVpcId: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcPeeringConnectionOutput {}

/**
 * @public
 */
export interface DeleteAliasInput {
  /**
   * A unique identifier of the alias that you want to delete. You can use either the alias ID or ARN value.
   *
   * @public
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBuildInput {
  /**
   * A unique identifier for the build to delete. You can use either the build ID or ARN value.
   *
   * @public
   */
  BuildId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerFleetInput {
  /**
   * A unique identifier for the container fleet to delete. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerFleetOutput {}

/**
 * @public
 */
export interface DeleteContainerGroupDefinitionInput {
  /**
   * The unique identifier for the container group definition to delete. You can use either the `Name` or `ARN` value.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The specific version to delete.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The number of most recent versions to keep while deleting all older versions.
   *
   * @public
   */
  VersionCountToRetain?: number | undefined;
}

/**
 * @public
 */
export interface DeleteContainerGroupDefinitionOutput {}

/**
 * @public
 */
export interface DeleteFleetInput {
  /**
   * A unique identifier for the fleet to be deleted. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetLocationsInput {
  /**
   * A unique identifier for the fleet to delete locations for. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The list of fleet locations to delete. Specify locations in the form of an Amazon Web Services Region code, such as `us-west-2`.
   *
   * @public
   */
  Locations: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteFleetLocationsOutput {
  /**
   * A unique identifier for the fleet that location attributes are being deleted for.
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
   * The remote locations that are being deleted, with each location status set to `DELETING`.
   *
   * @public
   */
  LocationStates?: LocationState[] | undefined;
}

/**
 * @public
 */
export interface DeleteGameServerGroupInput {
  /**
   * A unique identifier for the game server group. Use either the name or ARN value.
   *
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * The type of delete to perform. Options include the following:
   *
   * - `SAFE_DELETE` – (default) Terminates the game server group and Amazon EC2 Auto Scaling group only when it has no game servers that are in `UTILIZED` status.
   * - `FORCE_DELETE` – Terminates the game server group, including all active game servers regardless of their utilization status, and the Amazon EC2 Auto Scaling group.
   * - `RETAIN` – Does a safe delete of the game server group but retains the Amazon EC2 Auto Scaling group as is.
   *
   * @public
   */
  DeleteOption?: GameServerGroupDeleteOption | undefined;
}

/**
 * @public
 */
export interface DeleteGameServerGroupOutput {
  /**
   * An object that describes the deleted game server group resource, with status updated to `DELETE_SCHEDULED`.
   *
   * @public
   */
  GameServerGroup?: GameServerGroup | undefined;
}

/**
 * @public
 */
export interface DeleteGameSessionQueueInput {
  /**
   * A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteGameSessionQueueOutput {}

/**
 * @public
 */
export interface DeleteLocationInput {
  /**
   * The location name of the custom location to be deleted.
   *
   * @public
   */
  LocationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLocationOutput {}

/**
 * @public
 */
export interface DeleteMatchmakingConfigurationInput {
  /**
   * A unique identifier for the matchmaking configuration. You can use either the configuration name or ARN value.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteMatchmakingConfigurationOutput {}

/**
 * @public
 */
export interface DeleteMatchmakingRuleSetInput {
  /**
   * A unique identifier for the matchmaking rule set to be deleted. (Note: The rule set name is different from the optional "name" field in the rule set body.) You can use either the rule set name or ARN value.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteMatchmakingRuleSetOutput {}

/**
 * @public
 */
export interface DeleteScalingPolicyInput {
  /**
   * A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique identifier for the fleet to be deleted. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteScriptInput {
  /**
   * A unique identifier for the Realtime script to delete. You can use either the script ID or ARN value.
   *
   * @public
   */
  ScriptId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringAuthorizationInput {
  /**
   * A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift Servers fleet. You can find your Account ID in the Amazon Web Services Management Console under account settings.
   *
   * @public
   */
  GameLiftAwsAccountId: string | undefined;

  /**
   * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift Servers fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the [VPC Dashboard](https://console.aws.amazon.com/vpc/) in the Amazon Web Services Management Console. Learn more about VPC peering in [VPC Peering with Amazon GameLift Servers Fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html).
   *
   * @public
   */
  PeerVpcId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringAuthorizationOutput {}

/**
 * @public
 */
export interface DeleteVpcPeeringConnectionInput {
  /**
   * A unique identifier for the fleet. This fleet specified must match the fleet referenced in the VPC peering connection record. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * A unique identifier for a VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringConnectionOutput {}

/**
 * Set of rules for processing a deployment for a container fleet update.
 *
 * @public
 */
export interface DeploymentConfiguration {
  /**
   * Determines how fleet deployment activity affects active game sessions on the fleet. With protection, a deployment honors game session protection, and delays actions that would interrupt a protected active game session until the game session ends. Without protection, deployment activity can shut down all running tasks, including active game sessions, regardless of game session protection.
   *
   * @public
   */
  ProtectionStrategy?: DeploymentProtectionStrategy | undefined;

  /**
   * Sets a minimum level of healthy tasks to maintain during deployment activity.
   *
   * @public
   */
  MinimumHealthyPercentage?: number | undefined;

  /**
   * Determines what actions to take if a deployment fails. If the fleet is multi-location, this strategy applies across all fleet locations. With a rollback strategy, updated fleet instances are rolled back to the last successful deployment. Alternatively, you can maintain a few impaired containers for the purpose of debugging, while all other tasks return to the last successful deployment.
   *
   * @public
   */
  ImpairmentStrategy?: DeploymentImpairmentStrategy | undefined;
}

/**
 * @public
 */
export interface DeregisterComputeInput {
  /**
   * A unique identifier for the fleet the compute resource is currently registered to.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The unique identifier of the compute resource to deregister. For an Anywhere fleet compute, use the registered compute name.
   *
   * @public
   */
  ComputeName: string | undefined;
}

/**
 * @public
 */
export interface DeregisterComputeOutput {}

/**
 * @public
 */
export interface DeregisterGameServerInput {
  /**
   * A unique identifier for the game server group where the game server is running.
   *
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * A custom string that uniquely identifies the game server to deregister.
   *
   * @public
   */
  GameServerId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAliasInput {
  /**
   * The unique identifier for the fleet alias that you want to retrieve. You can use either the alias ID or ARN value.
   *
   * @public
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAliasOutput {
  /**
   * The requested alias resource.
   *
   * @public
   */
  Alias?: Alias | undefined;
}

/**
 * @public
 */
export interface DescribeBuildInput {
  /**
   * A unique identifier for the build to retrieve properties for. You can use either the build ID or ARN value.
   *
   * @public
   */
  BuildId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBuildOutput {
  /**
   * Set of properties describing the requested build.
   *
   * @public
   */
  Build?: Build | undefined;
}

/**
 * @public
 */
export interface DescribeComputeInput {
  /**
   * A unique identifier for the fleet that the compute belongs to. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The unique identifier of the compute resource to retrieve properties for. For a managed container fleet or Anywhere fleet, use a compute name. For an EC2 fleet, use an instance ID. To retrieve a fleet's compute identifiers, call [ListCompute](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListCompute.html).
   *
   * @public
   */
  ComputeName: string | undefined;
}

/**
 * @public
 */
export interface DescribeComputeOutput {
  /**
   * The set of properties for the requested compute resource.
   *
   * @public
   */
  Compute?: Compute | undefined;
}

/**
 * @public
 */
export interface DescribeContainerFleetInput {
  /**
   * A unique identifier for the container fleet to retrieve. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeContainerFleetOutput {
  /**
   * The properties for the requested container fleet, including current status.
   *
   * @public
   */
  ContainerFleet?: ContainerFleet | undefined;
}

/**
 * @public
 */
export interface DescribeContainerGroupDefinitionInput {
  /**
   * The unique identifier for the container group definition to retrieve properties for. You can use either the `Name` or `ARN` value.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The specific version to retrieve.
   *
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DescribeContainerGroupDefinitionOutput {
  /**
   * The properties of the requested container group definition resource.
   *
   * @public
   */
  ContainerGroupDefinition?: ContainerGroupDefinition | undefined;
}

/**
 * @public
 */
export interface DescribeContainerGroupPortMappingsInput {
  /**
   * A unique identifier for the container fleet. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The type of container group to retrieve port mappings for.
   *
   * - `GAME_SERVER` -- Get port mappings for a game server container group.
   * - `PER_INSTANCE` -- Get port mappings for a per-instance container group.
   *
   * @public
   */
  ContainerGroupType: ContainerGroupType | undefined;

  /**
   * A unique identifier for the compute resource for which to retrieve port mappings. For a container fleet, a compute represents a game server container group running on a fleet instance. You can use either the compute name or ARN value.
   *
   * When `ContainerGroupType` is `GAME_SERVER`, this parameter is required.
   *
   * When `ContainerGroupType` is `PER_INSTANCE`, do not provide this parameter. If you provide a compute name with `PER_INSTANCE`, the request fails with an `InvalidRequestException`.
   *
   * @public
   */
  ComputeName?: string | undefined;

  /**
   * A unique identifier for the fleet instance to retrieve port mappings for.
   *
   * When `ContainerGroupType` is `PER_INSTANCE`, this parameter is required.
   *
   * When `ContainerGroupType` is `GAME_SERVER`, this parameter is optional. If you provide an instance ID, it must match the instance that's running the specified compute. If the instance ID doesn't match, the request fails with an `InvalidRequestException`.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * A container name to filter the results. When provided, the operation returns port mappings for the specified container only. If no container with the specified name exists in the container group, the request fails with a `NotFoundException`.
   *
   * If not provided, the operation returns port mappings for all containers in the container group.
   *
   * @public
   */
  ContainerName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeContainerGroupPortMappingsOutput {
  /**
   * A unique identifier for the container fleet.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912`. In a GameLift fleet ARN, the resource ID matches the `FleetId` value.
   *
   * @public
   */
  FleetArn?: string | undefined;

  /**
   * The location of the fleet instance, expressed as an Amazon Web Services Region code, such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to the container group definition. The ARN value also identifies the specific container group definition version in use.
   *
   * @public
   */
  ContainerGroupDefinitionArn?: string | undefined;

  /**
   * The type of container group that was specified in the request. Valid values are `GAME_SERVER` or `PER_INSTANCE`.
   *
   * @public
   */
  ContainerGroupType?: ContainerGroupType | undefined;

  /**
   * A unique identifier for the compute resource running the game server container group. Returned when `ContainerGroupType` is `GAME_SERVER`.
   *
   * @public
   */
  ComputeName?: string | undefined;

  /**
   * A unique identifier for the fleet instance. For `GAME_SERVER` requests, this is the instance running the specified compute. For `PER_INSTANCE` requests, this is the instance specified in the request.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * A list of `ContainerGroupPortMapping` objects that describe the port mappings for each container in the container group.
   *
   * @public
   */
  ContainerGroupPortMappings?: ContainerGroupPortMapping[] | undefined;
}

/**
 * @public
 */
export interface DescribeEC2InstanceLimitsInput {
  /**
   * Name of an Amazon EC2 instance type that is supported in Amazon GameLift Servers. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Do not specify a value for this parameter to retrieve limits for all instance types.
   *
   * @public
   */
  EC2InstanceType?: EC2InstanceType | undefined;

  /**
   * The name of a remote location to request instance limits for, in the form of an Amazon Web Services Region code such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * The Amazon GameLift Servers service limits for an Amazon EC2 instance type and current utilization. Amazon GameLift Servers allows Amazon Web Services accounts a maximum number of instances, per instance type, per Amazon Web Services Region or location, for use with Amazon GameLift Servers. You can request a limit increase for your account by using the **Service limits** page in the Amazon GameLift Servers console.
 *
 * @public
 */
export interface EC2InstanceLimit {
  /**
   * The name of an Amazon EC2 instance type. See [Amazon Elastic Compute Cloud Instance Types](http://aws.amazon.com/ec2/instance-types/) for detailed descriptions.
   *
   * @public
   */
  EC2InstanceType?: EC2InstanceType | undefined;

  /**
   * The number of instances for the specified type and location that are currently being used by the Amazon Web Services account.
   *
   * @public
   */
  CurrentInstances?: number | undefined;

  /**
   * The number of instances that is allowed for the specified instance type and location.
   *
   * @public
   */
  InstanceLimit?: number | undefined;

  /**
   * An Amazon Web Services Region code, such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEC2InstanceLimitsOutput {
  /**
   * The maximum number of instances for the specified instance type.
   *
   * @public
   */
  EC2InstanceLimits?: EC2InstanceLimit[] | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAttributesInput {
  /**
   * A list of unique fleet identifiers to retrieve attributes for. You can use either the fleet ID or ARN value. To retrieve attributes for all current fleets, do not include this parameter.
   *
   * @public
   */
  FleetIds?: string[] | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAttributesOutput {
  /**
   * A collection of objects containing attribute metadata for each requested fleet ID. Attribute objects are returned only for fleets that currently exist.
   *
   * @public
   */
  FleetAttributes?: FleetAttributes[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetCapacityInput {
  /**
   * A unique identifier for the fleet to retrieve capacity information for. You can use either the fleet ID or ARN value. Leave this parameter empty to retrieve capacity information for all fleets.
   *
   * @public
   */
  FleetIds?: string[] | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The number and status of game server container groups that are deployed across a container fleet. Combine this count with the number of server processes that each game server container group runs to learn how many game sessions the fleet is capable of hosting concurrently. For example, if a fleet has 50 game server container groups, and the game server container in each group runs 1 game server process, then the fleet has the capacity to host 50 game sessions at a time.
 *
 * **Returned by:** [https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html), [https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html)
 *
 * @public
 */
export interface GameServerContainerGroupCounts {
  /**
   * The number of container groups that are starting up but haven't yet registered.
   *
   * @public
   */
  PENDING?: number | undefined;

  /**
   * The number of container groups that have active game sessions.
   *
   * @public
   */
  ACTIVE?: number | undefined;

  /**
   * The number of container groups that have no active game sessions.
   *
   * @public
   */
  IDLE?: number | undefined;

  /**
   * The number of container groups that are in the process of shutting down.
   *
   * @public
   */
  TERMINATING?: number | undefined;
}

/**
 * Resource capacity settings. Fleet capacity is measured in Amazon EC2 instances. Pending and terminating counts are non-zero when the fleet capacity is adjusting to a scaling event or if access to resources is temporarily affected.
 *
 * @public
 */
export interface EC2InstanceCounts {
  /**
   * Requested number of active instances. Amazon GameLift Servers takes action as needed to maintain the desired number of instances. Capacity is scaled up or down by changing the desired instances. A change in the desired instances value can take up to 1 minute to be reflected when viewing a fleet's capacity settings.
   *
   * @public
   */
  DESIRED?: number | undefined;

  /**
   * The minimum instance count value allowed.
   *
   * @public
   */
  MINIMUM?: number | undefined;

  /**
   * The maximum instance count value allowed.
   *
   * @public
   */
  MAXIMUM?: number | undefined;

  /**
   * Number of instances that are starting but not yet active.
   *
   * @public
   */
  PENDING?: number | undefined;

  /**
   * Actual number of instances that are ready to host game sessions.
   *
   * @public
   */
  ACTIVE?: number | undefined;

  /**
   * Number of active instances that are not currently hosting a game session.
   *
   * @public
   */
  IDLE?: number | undefined;

  /**
   * Number of instances that are no longer active but haven't yet been terminated.
   *
   * @public
   */
  TERMINATING?: number | undefined;
}

/**
 * Use ManagedCapacityConfiguration with the "SCALE_TO_AND_FROM_ZERO" ZeroCapacityStrategy to enable Amazon GameLift Servers to fully manage the MinSize value, switching between 0 and 1 based on game session activity. This is ideal for eliminating compute costs during periods of no game activity. It is particularly beneficial during development when you're away from your desk, iterating on builds for extended periods, in production environments serving low-traffic locations, or for games with long, predictable downtime windows. By automatically managing capacity between 0 and 1 instances, you avoid paying for idle instances while maintaining the ability to serve game sessions when demand arrives. Note that while scale-out is triggered immediately upon receiving a game session request, actual game session availability depends on your server process startup time, so this approach works best with multi-location Fleets where cold-start latency is tolerable. With a "MANUAL" ZeroCapacityStrategy Amazon GameLift Servers will not modify Fleet MinSize values automatically and will not scale out from zero instances in response to game sessions.
 *
 * @public
 */
export interface ManagedCapacityConfiguration {
  /**
   * The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero instances in response to game session activity. Game session activity refers to any active running sessions or game session requests.
   *
   * Possible ZeroCapacityStrategy types include:
   *
   * - **MANUAL** -- (default value) Amazon GameLift Servers will not update capacity to and from zero on your behalf.
   * - **SCALE_TO_AND_FROM_ZERO** -- Amazon GameLift Servers will automatically scale out MinSize and DesiredInstances from 0 to 1 in response to a game session request, and will scale in MinSize and DesiredInstances to 0 after a period with no game session activity. The duration of this scale in period can be configured using ScaleInAfterInactivityMinutes.
   *
   * @public
   */
  ZeroCapacityStrategy?: ZeroCapacityStrategy | undefined;

  /**
   * Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity. Default: 30 minutes.
   *
   * @public
   */
  ScaleInAfterInactivityMinutes?: number | undefined;
}

/**
 * Current resource capacity settings for managed EC2 fleets and managed container fleets. For multi-location fleets, location values might refer to a fleet's remote location or its home Region.
 *
 * **Returned by:** [DescribeFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html), [DescribeFleetLocationCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html), [UpdateFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html)
 *
 * @public
 */
export interface FleetCapacity {
  /**
   * A unique identifier for the fleet associated with the location.
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
   * The Amazon EC2 instance type that is used for instances in a fleet. Instance type determines the computing resources in use, including CPU, memory, storage, and networking capacity. See [Amazon Elastic Compute Cloud Instance Types](http://aws.amazon.com/ec2/instance-types/) for detailed descriptions.
   *
   * @public
   */
  InstanceType?: EC2InstanceType | undefined;

  /**
   * The current number of instances in the fleet, listed by instance status. Counts for pending and terminating instances might be non-zero if the fleet is adjusting to a scaling event or if access to resources is temporarily affected.
   *
   * @public
   */
  InstanceCounts?: EC2InstanceCounts | undefined;

  /**
   * The fleet location for the instance count information, expressed as an Amazon Web Services Region code, such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The number and status of game server container groups deployed in a container fleet.
   *
   * @public
   */
  GameServerContainerGroupCounts?: GameServerContainerGroupCounts | undefined;

  /**
   * Configuration settings for managed capacity scaling.
   *
   * @public
   */
  ManagedCapacityConfiguration?: ManagedCapacityConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeFleetCapacityOutput {
  /**
   * A collection of objects that contains capacity information for each requested fleet ID. Capacity objects are returned only for fleets that currently exist. Changes in desired instance value can take up to 1 minute to be reflected.
   *
   * @public
   */
  FleetCapacity?: FleetCapacity[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetDeploymentInput {
  /**
   * A unique identifier for the container fleet. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * A unique identifier for the deployment to return information for.
   *
   * @public
   */
  DeploymentId?: string | undefined;
}

/**
 * Describes a container fleet deployment with updates to the fleet.
 *
 * @public
 */
export interface FleetDeployment {
  /**
   * A unique identifier for the deployment.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * A unique identifier for the container fleet.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The unique identifier for the version of the game server container group definition that is being deployed.
   *
   * @public
   */
  GameServerBinaryArn?: string | undefined;

  /**
   * The unique identifier for the version of the game server container group definition to roll back to if deployment fails. Amazon GameLift Servers sets this property to the container group definition version that the fleet used when it was last active.
   *
   * @public
   */
  RollbackGameServerBinaryArn?: string | undefined;

  /**
   * The unique identifier for the version of the per-instance container group definition that is being deployed.
   *
   * @public
   */
  PerInstanceBinaryArn?: string | undefined;

  /**
   * The unique identifier for the version of the per-instance container group definition to roll back to if deployment fails. Amazon GameLift Servers sets this property to the container group definition version that the fleet used when it was last active.
   *
   * @public
   */
  RollbackPerInstanceBinaryArn?: string | undefined;

  /**
   * The status of fleet deployment activity in the location.
   *
   * - `IN_PROGRESS` -- The deployment is in progress.
   * - `IMPAIRED` -- The deployment failed and the fleet has some impaired containers.
   * - `COMPLETE` -- The deployment has completed successfully.
   * - `ROLLBACK_IN_PROGRESS` -- The deployment failed and rollback has been initiated.
   * - `ROLLBACK_IN_COMPLETE` -- The deployment failed and rollback has been completed.
   * - `CANCELLED` -- The deployment was cancelled.
   *
   * @public
   */
  DeploymentStatus?: DeploymentStatus | undefined;

  /**
   * Instructions for how to deploy updates to a container fleet and what actions to take if the deployment fails.
   *
   * @public
   */
  DeploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * For a multi-location container fleet, describes the progress of a deployment across all fleet locations.
 *
 * @public
 */
export interface LocationalDeployment {
  /**
   * The status of fleet deployment activity in the location.
   *
   * - `IN_PROGRESS` -- The deployment is in progress.
   * - `IMPAIRED` -- The deployment failed and the fleet has some impaired containers.
   * - `COMPLETE` -- The deployment has completed successfully.
   * - `ROLLBACK_IN_PROGRESS` -- The deployment failed and rollback has been initiated.
   * - `ROLLBACK_IN_COMPLETE` -- The deployment failed and rollback has been completed.
   * - `CANCELLED` -- The deployment was cancelled.
   *
   * @public
   */
  DeploymentStatus?: DeploymentStatus | undefined;
}

/**
 * @public
 */
export interface DescribeFleetDeploymentOutput {
  /**
   * The requested deployment information.
   *
   * @public
   */
  FleetDeployment?: FleetDeployment | undefined;

  /**
   * If the deployment is for a multi-location fleet, the requests returns the deployment status in each fleet location.
   *
   * @public
   */
  LocationalDeployments?: Record<string, LocationalDeployment> | undefined;
}

/**
 * @public
 */
export interface DescribeFleetEventsInput {
  /**
   * A unique identifier for the fleet to get event logs for. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The earliest date to retrieve event logs for. If no start time is specified, this call returns entries starting from when the fleet was created to the specified end time. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057").
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The most recent date to retrieve event logs for. If no end time is specified, this call returns entries from the specified start time up to the present. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057").
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Log entry describing an event that involves Amazon GameLift Servers resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems.
 *
 * @public
 */
export interface Event {
  /**
   * A unique identifier for a fleet event.
   *
   * @public
   */
  EventId?: string | undefined;

  /**
   * A unique identifier for an event resource, such as a fleet ID.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of event being logged.
   *
   * **Fleet state transition events:**
   *
   * - FLEET_CREATED -- A fleet resource was successfully created with a status of `NEW`. Event messaging includes the fleet ID.
   * - FLEET_STATE_DOWNLOADING -- Fleet status changed from `NEW` to `DOWNLOADING`. Amazon GameLift Servers is downloading the compressed build and running install scripts.
   * - FLEET_STATE_VALIDATING -- Fleet status changed from `DOWNLOADING` to `VALIDATING`. Amazon GameLift Servers has successfully installed build and is now validating the build files.
   * - FLEET_STATE_BUILDING -- Fleet status changed from `VALIDATING` to `BUILDING`. Amazon GameLift Servers has successfully verified the build files and is now launching a fleet instance.
   * - FLEET_STATE_ACTIVATING -- Fleet status changed from `BUILDING` to `ACTIVATING`. Amazon GameLift Servers is launching a game server process on the fleet instance and is testing its connectivity with the Amazon GameLift Servers service.
   * - FLEET_STATE_ACTIVE -- The fleet's status changed from `ACTIVATING` to `ACTIVE`. The fleet is now ready to host game sessions.
   * - FLEET_STATE_ERROR -- The Fleet's status changed to `ERROR`. Describe the fleet event message for more details.
   *
   * **Fleet creation events (ordered by fleet creation activity):**
   *
   * - FLEET_BINARY_DOWNLOAD_FAILED -- The build failed to download to the fleet instance.
   * - FLEET_CREATION_EXTRACTING_BUILD -- The game server build was successfully downloaded to an instance, and Amazon GameLift Servers is now extracting the build files from the uploaded build. Failure at this stage prevents a fleet from moving to ACTIVE status. Logs for this stage display a list of the files that are extracted and saved on the instance. Access the logs by using the URL in *PreSignedLogUrl*.
   * - FLEET_CREATION_RUNNING_INSTALLER -- The game server build files were successfully extracted, and Amazon GameLift Servers is now running the build's install script (if one is included). Failure in this stage prevents a fleet from moving to ACTIVE status. Logs for this stage list the installation steps and whether or not the install completed successfully. Access the logs by using the URL in *PreSignedLogUrl*.
   * - FLEET_CREATION_COMPLETED_INSTALLER -- The game server build files were successfully installed and validation of the installation will begin soon.
   * - FLEET_CREATION_FAILED_INSTALLER -- The installer failed while attempting to install the build files. This event indicates that the failure occurred before Amazon GameLift Servers could start validation.
   * - FLEET_CREATION_VALIDATING_RUNTIME_CONFIG -- The build process was successful, and GameLift is now verifying that the game server launch paths, which are specified in the fleet's runtime configuration, exist. If any listed launch path exists, Amazon GameLift Servers tries to launch a game server process and waits for the process to report ready. Failures in this stage prevent a fleet from moving to `ACTIVE` status. Logs for this stage list the launch paths in the runtime configuration and indicate whether each is found. Access the logs by using the URL in *PreSignedLogUrl*.
   * - FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND -- Validation of the runtime configuration failed because the executable specified in a launch path does not exist on the instance.
   * - FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE -- Validation of the runtime configuration failed because the executable specified in a launch path failed to run on the fleet instance.
   * - FLEET_VALIDATION_TIMED_OUT -- Validation of the fleet at the end of creation timed out. Try fleet creation again.
   * - FLEET_ACTIVATION_FAILED -- The fleet failed to successfully complete one of the steps in the fleet activation process. This event code indicates that the game build was successfully downloaded to a fleet instance, built, and validated, but was not able to start a server process. For more information, see [Debug Fleet Creation Issues](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation).
   * - FLEET_ACTIVATION_FAILED_NO_INSTANCES -- Fleet creation was not able to obtain any instances based on the input fleet attributes. Try again at a different time or choose a different combination of fleet attributes such as fleet type, instance type, etc.
   * - FLEET_INITIALIZATION_FAILED -- A generic exception occurred during fleet creation. Describe the fleet event message for more details.
   *
   * **VPC peering events:**
   *
   * - FLEET_VPC_PEERING_SUCCEEDED -- A VPC peering connection has been established between the VPC for an Amazon GameLift Servers fleet and a VPC in your Amazon Web Services account.
   * - FLEET_VPC_PEERING_FAILED -- A requested VPC peering connection has failed. Event details and status information provide additional detail. A common reason for peering failure is that the two VPCs have overlapping CIDR blocks of IPv4 addresses. To resolve this, change the CIDR block for the VPC in your Amazon Web Services account. For more information on VPC peering failures, see [https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html](https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html)
   * - FLEET_VPC_PEERING_DELETED -- A VPC peering connection has been successfully deleted.
   *
   * **Spot instance events:**
   *
   * - INSTANCE_INTERRUPTED -- A spot instance was interrupted by EC2 with a two-minute notification.
   * - INSTANCE_RECYCLED -- A spot instance was determined to have a high risk of interruption and is scheduled to be recycled once it has no active game sessions.
   *
   * **Server process events:**
   *
   * - SERVER_PROCESS_INVALID_PATH -- The game server executable or script could not be found based on the Fleet runtime configuration. Check that the launch path is correct based on the operating system of the Fleet.
   * - SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT -- The server process did not call `InitSDK()` within the time expected (5 minutes). Check your game session log to see why `InitSDK()` was not called in time. This event is not emitted for managed container fleets and Anywhere fleets unless they're deployed with the Amazon GameLift Servers Agent.
   * - SERVER_PROCESS_PROCESS_READY_TIMEOUT -- The server process did not call `ProcessReady()` within the time expected (5 minutes) after calling `InitSDK()`. Check your game session log to see why `ProcessReady()` was not called in time.
   * - SERVER_PROCESS_CRASHED -- The server process exited without calling `ProcessEnding()`. Check your game session log to see why `ProcessEnding()` was not called.
   * - SERVER_PROCESS_TERMINATED_UNHEALTHY -- The server process did not report a valid health check for too long and was therefore terminated by GameLift. Check your game session log to see if the thread became stuck processing a synchronous task for too long.
   * - SERVER_PROCESS_FORCE_TERMINATED -- The server process did not exit cleanly within the time expected after `OnProcessTerminate()` was sent. Check your game session log to see why termination took longer than expected.
   * - SERVER_PROCESS_PROCESS_EXIT_TIMEOUT -- The server process did not exit cleanly within the time expected (30 seconds) after calling `ProcessEnding()`. Check your game session log to see why termination took longer than expected.
   *
   * **Game session events:**
   *
   * - GAME_SESSION_ACTIVATION_TIMEOUT -- GameSession failed to activate within the expected time. Check your game session log to see why `ActivateGameSession()` took longer to complete than expected.
   *
   * **Other fleet events:**
   *
   * - FLEET_SCALING_EVENT -- A change was made to the fleet's capacity settings (desired instances, minimum/maximum scaling limits). Event messaging includes the new capacity settings.
   * - FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED -- A change was made to the fleet's game session protection policy setting. Event messaging includes both the old and new policy setting.
   * - FLEET_DELETED -- A request to delete a fleet was initiated.
   * - FLEET_EXPIRED -- The fleet has been expired. The fleet is scaled down to zero instances and can no longer host game sessions.
   * - GENERIC_EVENT -- An unspecified event has occurred.
   *
   * @public
   */
  EventCode?: EventCode | undefined;

  /**
   * Additional information related to the event.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Time stamp indicating when this event occurred. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  EventTime?: Date | undefined;

  /**
   * Location of stored logs with additional detail that is related to the event. This is useful for debugging issues. The URL is valid for 15 minutes. You can also access fleet creation logs through the Amazon GameLift Servers console.
   *
   * @public
   */
  PreSignedLogUrl?: string | undefined;

  /**
   * The number of times that this event occurred.
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFleetEventsOutput {
  /**
   * A collection of objects containing event log entries for the specified fleet.
   *
   * @public
   */
  Events?: Event[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetLocationAttributesInput {
  /**
   * A unique identifier for the fleet to retrieve remote locations for. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * A list of fleet locations to retrieve information for. Specify locations in the form of an Amazon Web Services Region code, such as `us-west-2`.
   *
   * @public
   */
  Locations?: string[] | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages. This limit is not currently enforced.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Details about a location in a multi-location fleet.
 *
 * @public
 */
export interface LocationAttributes {
  /**
   * A fleet location and its current life-cycle state.
   *
   * @public
   */
  LocationState?: LocationState | undefined;

  /**
   * A list of fleet actions that have been suspended in the fleet location.
   *
   * @public
   */
  StoppedActions?: FleetAction[] | undefined;

  /**
   * The status of fleet activity updates to the location. The status `PENDING_UPDATE` indicates that `StopFleetActions` or `StartFleetActions` has been requested but the update has not yet been completed for the location.
   *
   * @public
   */
  UpdateStatus?: LocationUpdateStatus | undefined;
}

/**
 * @public
 */
export interface DescribeFleetLocationAttributesOutput {
  /**
   * A unique identifier for the fleet that location attributes were requested for.
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
   * Location-specific information on the requested fleet's remote locations.
   *
   * @public
   */
  LocationAttributes?: LocationAttributes[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetLocationCapacityInput {
  /**
   * A unique identifier for the fleet to request location capacity for. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The fleet location to retrieve capacity information for. Specify a location in the form of an Amazon Web Services Region code, such as `us-west-2`.
   *
   * @public
   */
  Location: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetLocationCapacityOutput {
  /**
   * Resource capacity information for the requested fleet location. Capacity objects are returned only for fleets and locations that currently exist. Changes in desired instance value can take up to 1 minute to be reflected.
   *
   * @public
   */
  FleetCapacity?: FleetCapacity | undefined;
}

/**
 * @public
 */
export interface DescribeFleetLocationUtilizationInput {
  /**
   * A unique identifier for the fleet to request location utilization for. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The fleet location to retrieve utilization information for. Specify a location in the form of an Amazon Web Services Region code, such as `us-west-2`.
   *
   * @public
   */
  Location: string | undefined;
}

/**
 * Current resource utilization statistics in a specified fleet or location. The location value might refer to a fleet's remote location or its home region.
 *
 * @public
 */
export interface FleetUtilization {
  /**
   * A unique identifier for the fleet associated with the location.
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
   * The number of server processes in `ACTIVE` status that are currently running across all instances in the fleet location.
   *
   * @public
   */
  ActiveServerProcessCount?: number | undefined;

  /**
   * The number of active game sessions that are currently being hosted across all instances in the fleet location.
   *
   * @public
   */
  ActiveGameSessionCount?: number | undefined;

  /**
   * The number of active player sessions that are currently being hosted across all instances in the fleet location.
   *
   * @public
   */
  CurrentPlayerSessionCount?: number | undefined;

  /**
   * The maximum number of players allowed across all game sessions that are currently being hosted across all instances in the fleet location.
   *
   * @public
   */
  MaximumPlayerSessionCount?: number | undefined;

  /**
   * The fleet location for the fleet utilization information, expressed as an Amazon Web Services Region code, such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetLocationUtilizationOutput {
  /**
   * Utilization information for the requested fleet location. Utilization objects are returned only for fleets and locations that currently exist.
   *
   * @public
   */
  FleetUtilization?: FleetUtilization | undefined;
}

/**
 * @public
 */
export interface DescribeFleetPortSettingsInput {
  /**
   * A unique identifier for the fleet to retrieve port settings for. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * A remote location to check for status of port setting updates. Use the Amazon Web Services Region code format, such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetPortSettingsOutput {
  /**
   * A unique identifier for the fleet that was requested.
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
   * The port settings for the requested fleet ID.
   *
   * @public
   */
  InboundPermissions?: IpPermission[] | undefined;

  /**
   * The current status of updates to the fleet's port settings in the requested fleet location. A status of `PENDING_UPDATE` indicates that an update was requested for the fleet but has not yet been completed for the location.
   *
   * @public
   */
  UpdateStatus?: LocationUpdateStatus | undefined;

  /**
   * The requested fleet location, expressed as an Amazon Web Services Region code, such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetUtilizationInput {
  /**
   * A unique identifier for the fleet to retrieve utilization data for. You can use either the fleet ID or ARN value. To retrieve attributes for all current fleets, do not include this parameter.
   *
   * @public
   */
  FleetIds?: string[] | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetUtilizationOutput {
  /**
   * A collection of objects containing utilization information for each requested fleet ID. Utilization objects are returned only for fleets that currently exist.
   *
   * @public
   */
  FleetUtilization?: FleetUtilization[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGameServerInput {
  /**
   * A unique identifier for the game server group where the game server is running.
   *
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * A custom string that uniquely identifies the game server information to be retrieved.
   *
   * @public
   */
  GameServerId: string | undefined;
}

/**
 * @public
 */
export interface DescribeGameServerOutput {
  /**
   * Object that describes the requested game server.
   *
   * @public
   */
  GameServer?: GameServer | undefined;
}

/**
 * @public
 */
export interface DescribeGameServerGroupInput {
  /**
   * A unique identifier for the game server group. Use either the name or ARN value.
   *
   * @public
   */
  GameServerGroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeGameServerGroupOutput {
  /**
   * An object with the property settings for the requested game server group resource.
   *
   * @public
   */
  GameServerGroup?: GameServerGroup | undefined;
}

/**
 * @public
 */
export interface DescribeGameServerInstancesInput {
  /**
   * A unique identifier for the game server group. Use either the name or ARN value.
   *
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * The Amazon EC2 instance IDs that you want to retrieve status on. Amazon EC2 instance IDs use a 17-character format, for example: `i-1234567890abcdef0`. To retrieve all instances in the game server group, leave this parameter empty.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Additional properties, including status, that describe an EC2 instance in a game server group. Instance configurations are set with game server group properties (see `DescribeGameServerGroup`) and with the EC2 launch template that was used when creating the game server group.
 *
 * Retrieve game server instances for a game server group by calling `DescribeGameServerInstances`.
 *
 * @public
 */
export interface GameServerInstance {
  /**
   * A developer-defined identifier for the game server group that includes the game server instance. The name is unique for each Region in each Amazon Web Services account.
   *
   * @public
   */
  GameServerGroupName?: string | undefined;

  /**
   * A generated unique identifier for the game server group that includes the game server instance.
   *
   * @public
   */
  GameServerGroupArn?: string | undefined;

  /**
   * The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: `i-1234567890abcdef0`.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * Current status of the game server instance
   *
   * @public
   */
  InstanceStatus?: GameServerInstanceStatus | undefined;
}

/**
 * @public
 */
export interface DescribeGameServerInstancesOutput {
  /**
   * The collection of requested game server instances.
   *
   * @public
   */
  GameServerInstances?: GameServerInstance[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGameSessionDetailsInput {
  /**
   * A unique identifier for the fleet to retrieve all game sessions active on the fleet. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * An identifier for the game session that is unique across all regions to retrieve. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`.
   *
   * @public
   */
  GameSessionId?: string | undefined;

  /**
   * A unique identifier for the alias associated with the fleet to retrieve all game sessions for. You can use either the alias ID or ARN value.
   *
   * @public
   */
  AliasId?: string | undefined;

  /**
   * A fleet location to get game session details for. You can specify a fleet's home Region or a remote location. Use the Amazon Web Services Region code format, such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * Game session status to filter results on. Possible game session statuses include `ACTIVE`, `TERMINATED`, `ACTIVATING` and `TERMINATING` (the last two are transitory).
   *
   * @public
   */
  StatusFilter?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A game session's properties plus the protection policy currently in force.
 *
 * @public
 */
export interface GameSessionDetail {
  /**
   * Object that describes a game session.
   *
   * @public
   */
  GameSession?: GameSession | undefined;

  /**
   * Current status of protection for the game session.
   *
   * - **NoProtection** -- The game session can be terminated during a scale-down event.
   * - **FullProtection** -- If the game session is in an `ACTIVE` status, it cannot be terminated during a scale-down event.
   *
   * @public
   */
  ProtectionPolicy?: ProtectionPolicy | undefined;
}

/**
 * @public
 */
export interface DescribeGameSessionDetailsOutput {
  /**
   * A collection of properties for each game session that matches the request.
   *
   * @public
   */
  GameSessionDetails?: GameSessionDetail[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGameSessionPlacementInput {
  /**
   * A unique identifier for a game session placement to retrieve.
   *
   * @public
   */
  PlacementId: string | undefined;
}

/**
 * Information about a player session. This object contains only the player ID and player session ID. To retrieve full details on a player session, call [DescribePlayerSessions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html) with the player session ID.
 *
 * @public
 */
export interface PlacedPlayerSession {
  /**
   * A unique identifier for a player that is associated with this player session.
   *
   * @public
   */
  PlayerId?: string | undefined;

  /**
   * A unique identifier for a player session.
   *
   * @public
   */
  PlayerSessionId?: string | undefined;
}

/**
 * Regional latency information for a player, used when requesting a new game session. This value indicates the amount of time lag that exists when the player is connected to a fleet in the specified location (an Amazon Web Services Region or a custom location for Amazon GameLift Servers Anywhere fleets). The relative difference between a player's latency values for multiple locations are used to determine which fleets are best suited to place a new game session for the player.
 *
 * @public
 */
export interface PlayerLatency {
  /**
   * A unique identifier for a player associated with the latency data.
   *
   * @public
   */
  PlayerId?: string | undefined;

  /**
   * Name of the Region or custom location that is associated with the latency value. For Amazon GameLift Servers Anywhere fleets, use the custom location name.
   *
   * @public
   */
  RegionIdentifier?: string | undefined;

  /**
   * Amount of time that represents the time lag experienced by the player when connected to the specified Region.
   *
   * @public
   */
  LatencyInMilliseconds?: number | undefined;
}

/**
 * An alternate list of prioritized locations for use with a game session queue. When this property is included in a [StartGameSessionPlacement](https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html) request, the alternate list overrides the queue's default location priorities, as defined in the queue's [PriorityConfiguration](gamelift/latest/apireference/API_PriorityConfiguration.html) setting (*LocationOrder*). The override is valid for an individual placement request only. Use this property only with queues that have a `PriorityConfiguration` setting that prioritizes `LOCATION` first.
 *
 * > **Note:** A priority configuration override list does not override a queue's FilterConfiguration setting, if the queue has one. Filter configurations are used to limit placements to a subset of the locations in a queue's destinations. If the override list includes a location that's not in the `FilterConfiguration` allowed list, Amazon GameLift Servers won't attempt to place a game session there.
 *
 * @public
 */
export interface PriorityConfigurationOverride {
  /**
   * Instructions for how to proceed if placement fails in every location on the priority override list. Valid strategies include:
   *
   * - `DEFAULT_AFTER_SINGLE_PASS` -- After attempting to place a new game session in every location on the priority override list, try to place a game session in queue's other locations. This is the default behavior.
   * - `NONE` -- Limit placements to locations on the priority override list only.
   *
   * @public
   */
  PlacementFallbackStrategy?: PlacementFallbackStrategy | undefined;

  /**
   * A prioritized list of hosting locations. The list can include Amazon Web Services Regions (such as `us-west-2`), local zones, and custom locations (for Anywhere fleets). Each location must be listed only once. For details, see [Amazon GameLift Servers service locations.](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html)
   *
   * @public
   */
  LocationOrder: string[] | undefined;
}

/**
 * Represents a potential game session placement, including the full details of the original placement request and the current status.
 *
 * > **Note:** If the game session placement status is `PENDING`, the properties for game session ID/ARN, region, IP address/DNS, and port aren't final. A game session is not active and ready to accept players until placement status reaches `FULFILLED`. When the placement is in `PENDING` status, Amazon GameLift Servers may attempt to place a game session multiple times before succeeding. With each attempt it creates a [https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameSession](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameSession) object and updates this placement object with the new game session properties.
 *
 * @public
 */
export interface GameSessionPlacement {
  /**
   * A unique identifier for a game session placement.
   *
   * @public
   */
  PlacementId?: string | undefined;

  /**
   * A descriptive label that is associated with game session queue. Queue names must be unique within each Region.
   *
   * @public
   */
  GameSessionQueueName?: string | undefined;

  /**
   * Current status of the game session placement request.
   *
   * - **PENDING** -- The placement request is in the queue waiting to be processed. Game session properties are not yet final.
   * - **FULFILLED** -- A new game session has been successfully placed. Game session properties are now final.
   * - **CANCELLED** -- The placement request was canceled.
   * - **TIMED_OUT** -- A new game session was not successfully created before the time limit expired. You can resubmit the placement request as needed.
   * - **FAILED** -- Amazon GameLift Servers is not able to complete the process of placing the game session. Common reasons are the game session terminated before the placement process was completed, or an unexpected internal error.
   *
   * @public
   */
  Status?: GameSessionPlacementState | undefined;

  /**
   * A set of key-value pairs that can store custom data in a game session. For example: `\{"Key": "difficulty", "Value": "novice"\}`.
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
  GameSessionName?: string | undefined;

  /**
   * An identifier for the game session that is unique across all regions. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`. This value is the same as `GameSessionArn`. This value isn't final until placement status is `FULFILLED`.
   *
   * @public
   */
  GameSessionId?: string | undefined;

  /**
   * An identifier for the game session that is unique across all regions. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`. This value is the same as `GameSessionId`. This value isn't final until placement status is `FULFILLED`.
   *
   * @public
   */
  GameSessionArn?: string | undefined;

  /**
   * Name of the Region where the game session created by this placement request is running. This value isn't final until placement status is `FULFILLED`.
   *
   * @public
   */
  GameSessionRegion?: string | undefined;

  /**
   * A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to a fleet location (Amazon Web Services Regions or custom locations for Amazon GameLift Servers Anywhere fleets).
   *
   * @public
   */
  PlayerLatencies?: PlayerLatency[] | undefined;

  /**
   * Time stamp indicating when this request was placed in the queue. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Time stamp indicating when this request was completed, canceled, or timed out.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The IP address of the game session. To connect to a Amazon GameLift Servers game server, an app needs both the IP address and port number. This value isn't final until placement status is `FULFILLED`.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The DNS identifier assigned to the instance that is running the game session. Values have the following format:
   *
   * - TLS-enabled fleets: `<unique identifier>.<region identifier>.amazongamelift.com`.
   * - Non-TLS-enabled fleets: `ec2-<unique identifier>.compute.amazonaws.com`. (See [Amazon EC2 Instance IP Addressing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses).)
   *
   * When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * The port number for the game session. To connect to a Amazon GameLift Servers game server, an app needs both the IP address and port number. This value isn't final until placement status is `FULFILLED`.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * A collection of information on player sessions created in response to the game session placement request. These player sessions are created only after a new game session is successfully placed (placement status is `FULFILLED`). This information includes the player ID, provided in the placement request, and a corresponding player session ID.
   *
   * @public
   */
  PlacedPlayerSessions?: PlacedPlayerSession[] | undefined;

  /**
   * A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see [Start a game session](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession).
   *
   * @public
   */
  GameSessionData?: string | undefined;

  /**
   * Information on the matchmaking process for this game. Data is in JSON syntax, formatted as a string. It identifies the matchmaking configuration used to create the match, and contains data on all players assigned to the match, including player attributes and team assignments. For more details on matchmaker data, see [Match Data](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data).
   *
   * @public
   */
  MatchmakerData?: string | undefined;

  /**
   * An alternative priority list of locations that's included with a game session placement request. When provided, the list overrides a queue's location order list for this game session placement request only. The list might include Amazon Web Services Regions, local zones, and custom locations (for Anywhere fleets). The fallback strategy tells Amazon GameLift Servers what action to take (if any) in the event that it failed to place a new game session.
   *
   * @public
   */
  PriorityConfigurationOverride?: PriorityConfigurationOverride | undefined;

  /**
   * The current status of player gateway for the game session placement. Note, even if a fleet has PlayerGatewayMode configured as `ENABLED`, player gateway might not be available in a specific location. For more information about locations where player gateway is supported, see [Amazon GameLift Servers service locations](https://docs.aws.amazon.com/gameliftservers/latest/developerguide/gamelift-regions.html).
   *
   * Possible values include:
   *
   * - `ENABLED` -- Player gateway is available for this game session placement.
   * - `DISABLED` -- Player gateway is not available for this game session placement.
   *
   * @public
   */
  PlayerGatewayStatus?: PlayerGatewayStatus | undefined;
}

/**
 * @public
 */
export interface DescribeGameSessionPlacementOutput {
  /**
   * Object that describes the requested game session placement.
   *
   * @public
   */
  GameSessionPlacement?: GameSessionPlacement | undefined;
}

/**
 * @public
 */
export interface DescribeGameSessionQueuesInput {
  /**
   * A list of queue names to retrieve information for. You can use either the queue ID or ARN value. To request settings for all queues, leave this parameter empty.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages. You can request up to 50 results.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGameSessionQueuesOutput {
  /**
   * A collection of objects that describe the requested game session queues.
   *
   * @public
   */
  GameSessionQueues?: GameSessionQueue[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGameSessionsInput {
  /**
   * A unique identifier for the fleet to retrieve game sessions for. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * An identifier for the game session that is unique across all regions to retrieve. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`.
   *
   * @public
   */
  GameSessionId?: string | undefined;

  /**
   * A unique identifier for the alias associated with the fleet to retrieve game sessions for. You can use either the alias ID or ARN value.
   *
   * @public
   */
  AliasId?: string | undefined;

  /**
   * A fleet location to get game sessions for. You can specify a fleet's home Region or a remote location. Use the Amazon Web Services Region code format, such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * Game session status to filter results on. You can filter on the following states: `ACTIVE`, `TERMINATED`, `ACTIVATING`, and `TERMINATING`. The last two are transitory and used for only very brief periods of time.
   *
   * @public
   */
  StatusFilter?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGameSessionsOutput {
  /**
   * A collection of properties for each game session that matches the request.
   *
   * @public
   */
  GameSessions?: GameSession[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstancesInput {
  /**
   * A unique identifier for the fleet to retrieve instance information for. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * A unique identifier for an instance to retrieve. Specify an instance ID or leave blank to retrieve all instances in the fleet.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of a location to retrieve instance information for, in the form of an Amazon Web Services Region code such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * Represents a virtual computing instance that runs game server processes and hosts game sessions. In Amazon GameLift Servers, one or more instances make up a managed EC2 fleet.
 *
 * @public
 */
export interface Instance {
  /**
   * A unique identifier for the fleet that the instance belongs to.
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
   * A unique identifier for the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * IP address that is assigned to the instance.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The DNS identifier assigned to the instance that is running the game session. Values have the following format:
   *
   * - TLS-enabled fleets: `<unique identifier>.<region identifier>.amazongamelift.com`.
   * - Non-TLS-enabled fleets: `ec2-<unique identifier>.compute.amazonaws.com`. (See [Amazon EC2 Instance IP Addressing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses).)
   *
   * When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * Operating system that is running on this EC2 instance.
   *
   * > **Note:** Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the [Amazon Linux 2 FAQs](http://aws.amazon.com/aws.amazon.com/amazon-linux-2/faqs/). For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See [Migrate to server SDK version 5.](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html)
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * EC2 instance type that defines the computing resources of this instance.
   *
   * @public
   */
  Type?: EC2InstanceType | undefined;

  /**
   * Current status of the instance. Possible statuses include the following:
   *
   * - **PENDING** -- The instance is in the process of being created and launching server processes as defined in the fleet's run-time configuration.
   * - **ACTIVE** -- The instance has been successfully created and at least one server process has successfully launched and reported back to Amazon GameLift Servers that it is ready to host a game session. The instance is now considered ready to host game sessions.
   * - **TERMINATING** -- The instance is in the process of shutting down. This may happen to reduce capacity during a scaling down event or to recycle resources in the event of a problem.
   *
   * @public
   */
  Status?: InstanceStatus | undefined;

  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The fleet location of the instance, expressed as an Amazon Web Services Region code, such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstancesOutput {
  /**
   * A collection of objects containing properties for each instance returned.
   *
   * @public
   */
  Instances?: Instance[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMatchmakingInput {
  /**
   * A unique identifier for a matchmaking ticket. You can include up to 10 ID values.
   *
   * @public
   */
  TicketIds: string[] | undefined;
}

/**
 * Represents a new player session that is created as a result of a successful FlexMatch match. A successful match automatically creates new player sessions for every player ID in the original matchmaking request.
 *
 * When players connect to the match's game session, they must include both player ID and player session ID in order to claim their assigned player slot.
 *
 * @public
 */
export interface MatchedPlayerSession {
  /**
   * A unique identifier for a player
   *
   * @public
   */
  PlayerId?: string | undefined;

  /**
   * A unique identifier for a player session. PlayerSessionId will only be populated for player sessions that are in ACTIVE or RESERVED status when the ticket is completed.
   *
   * @public
   */
  PlayerSessionId?: string | undefined;
}

/**
 * Connection information for a new game session that is created in response to a start matchmaking request. Once a match is made, the FlexMatch engine creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the matchmaking ticket.
 *
 * @public
 */
export interface GameSessionConnectionInfo {
  /**
   * An identifier for the game session that is unique across all regions. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`.
   *
   * @public
   */
  GameSessionArn?: string | undefined;

  /**
   * The IP address of the game session. To connect to a Amazon GameLift Servers game server, an app needs both the IP address and port number.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The DNS identifier assigned to the instance that is running the game session. Values have the following format:
   *
   * - TLS-enabled fleets: `<unique identifier>.<region identifier>.amazongamelift.com`.
   * - Non-TLS-enabled fleets: `ec2-<unique identifier>.compute.amazonaws.com`. (See [Amazon EC2 Instance IP Addressing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses).)
   *
   * When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * The port number for the game session. To connect to a Amazon GameLift Servers game server, an app needs both the IP address and port number.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * A collection of player session IDs, one for each player ID that was included in the original matchmaking request.
   *
   * @public
   */
  MatchedPlayerSessions?: MatchedPlayerSession[] | undefined;

  /**
   * The current status of player gateway for the game session. Note, even if a fleet has PlayerGatewayMode configured as `ENABLED`, player gateway might not be available in a specific location. For more information about locations where player gateway is supported, see [supported locations](https://docs.aws.amazon.com/gameliftservers/latest/developerguide/gamelift-regions.html).
   *
   * Possible values include:
   *
   * - `ENABLED` -- Player gateway is available for this game session.
   * - `DISABLED` -- Player gateway is not available for this game session.
   *
   * @public
   */
  PlayerGatewayStatus?: PlayerGatewayStatus | undefined;
}

/**
 * Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed.
 *
 * @public
 */
export interface Player {
  /**
   * A unique identifier for a player
   *
   * @public
   */
  PlayerId?: string | undefined;

  /**
   * A collection of key:value pairs containing player information for use in matchmaking. Player attribute keys must match the *playerAttributes* used in a matchmaking rule set. Example: `"PlayerAttributes": \{"skill": \{"N": "23"\}, "gameMode": \{"S": "deathmatch"\}\}`.
   *
   * You can provide up to 10 `PlayerAttributes`.
   *
   * @public
   */
  PlayerAttributes?: Record<string, AttributeValue> | undefined;

  /**
   * Name of the team that the player is assigned to in a match. Team names are defined in a matchmaking rule set.
   *
   * @public
   */
  Team?: string | undefined;

  /**
   * A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to a fleet location (Amazon Web Services Regions or custom locations for Amazon GameLift Servers Anywhere fleets). If this property is present, FlexMatch considers placing the match only in Regions for which latency is reported.
   *
   * If a matchmaker has a rule that evaluates player latency, players must report latency in order to be matched. If no latency is reported in this scenario, FlexMatch assumes that no Regions are available to the player and the ticket is not matchable.
   *
   * @public
   */
  LatencyInMs?: Record<string, number> | undefined;
}

/**
 * Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request.
 *
 * @public
 */
export interface MatchmakingTicket {
  /**
   * A unique identifier for a matchmaking ticket.
   *
   * @public
   */
  TicketId?: string | undefined;

  /**
   * Name of the matchmaking configuration that is used with this ticket. Matchmaking configurations determine how players are grouped into a match and how a new game session is created for the match.
   *
   * @public
   */
  ConfigurationName?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) associated with the GameLift matchmaking configuration resource that is used with this ticket.
   *
   * @public
   */
  ConfigurationArn?: string | undefined;

  /**
   * Current status of the matchmaking request.
   *
   * - **QUEUED** -- The matchmaking request has been received and is currently waiting to be processed.
   * - **SEARCHING** -- The matchmaking request is currently being processed.
   * - **REQUIRES_ACCEPTANCE** -- A match has been proposed and the players must accept the match. This status is used only with requests that use a matchmaking configuration with a player acceptance requirement.
   * - **PLACING** -- The FlexMatch engine has matched players and is in the process of placing a new game session for the match.
   * - **COMPLETED** -- Players have been matched and a game session is ready to host the players. A ticket in this state contains the necessary connection information for players.
   * - **FAILED** -- The matchmaking request was not completed.
   * - **CANCELLED** -- The matchmaking request was canceled. This may be the result of a `StopMatchmaking` operation or a proposed match that one or more players failed to accept.
   * - **TIMED_OUT** -- The matchmaking request was not successful within the duration specified in the matchmaking configuration.
   *
   * > **Note:** Matchmaking requests that fail to successfully complete (statuses FAILED, CANCELLED, TIMED_OUT) can be resubmitted as new requests with new ticket IDs.
   *
   * @public
   */
  Status?: MatchmakingConfigurationStatus | undefined;

  /**
   * Code to explain the current status. For example, a status reason may indicate when a ticket has returned to `SEARCHING` status after a proposed match fails to receive player acceptances.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * Additional information about the current status.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Time stamp indicating when this matchmaking request was received. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Time stamp indicating when the matchmaking request stopped being processed due to successful completion, timeout, or cancellation. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * A set of `Player` objects, each representing a player to find matches for. Players are identified by a unique player ID and may include latency data for use during matchmaking. If the ticket is in status `COMPLETED`, the `Player` objects include the team the players were assigned to in the resulting match.
   *
   * @public
   */
  Players?: Player[] | undefined;

  /**
   * Connection information for a new game session. Once a match is made, the FlexMatch engine creates a new game session for it. This information is added to the matchmaking ticket, which you can retrieve by calling [DescribeMatchmaking](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmaking.html) .
   *
   * @public
   */
  GameSessionConnectionInfo?: GameSessionConnectionInfo | undefined;

  /**
   * Average amount of time (in seconds) that players are currently waiting for a match. If there is not enough recent data, this property may be empty.
   *
   * @public
   */
  EstimatedWaitTime?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMatchmakingOutput {
  /**
   * A collection of existing matchmaking ticket objects matching the request.
   *
   * @public
   */
  TicketList?: MatchmakingTicket[] | undefined;
}

/**
 * @public
 */
export interface DescribeMatchmakingConfigurationsInput {
  /**
   * A unique identifier for the matchmaking configuration(s) to retrieve. You can use either the configuration name or ARN value. To request all existing configurations, leave this parameter empty.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * A unique identifier for the matchmaking rule set. You can use either the rule set name or ARN value. Use this parameter to retrieve all matchmaking configurations that use this rule set.
   *
   * @public
   */
  RuleSetName?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages. This parameter is limited to 10.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMatchmakingConfigurationsOutput {
  /**
   * A collection of requested matchmaking configurations.
   *
   * @public
   */
  Configurations?: MatchmakingConfiguration[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMatchmakingRuleSetsInput {
  /**
   * A list of one or more matchmaking rule set names to retrieve details for. (Note: The rule set name is different from the optional "name" field in the rule set body.) You can use either the rule set name or ARN value.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMatchmakingRuleSetsOutput {
  /**
   * A collection of requested matchmaking rule set objects.
   *
   * @public
   */
  RuleSets: MatchmakingRuleSet[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePlayerSessionsInput {
  /**
   * An identifier for the game session that is unique across all regions to retrieve player sessions for. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`.
   *
   * @public
   */
  GameSessionId?: string | undefined;

  /**
   * A unique identifier for a player to retrieve player sessions for.
   *
   * @public
   */
  PlayerId?: string | undefined;

  /**
   * A unique identifier for a player session to retrieve.
   *
   * @public
   */
  PlayerSessionId?: string | undefined;

  /**
   * Player session status to filter results on. Note that when a PlayerSessionId or PlayerId is provided in a DescribePlayerSessions request, then the PlayerSessionStatusFilter has no effect on the response.
   *
   * Possible player session statuses include the following:
   *
   * - **RESERVED** -- The player session request has been received, but the player has not yet connected to the server process and/or been validated.
   * - **ACTIVE** -- The player has been validated by the server process and is currently connected.
   * - **COMPLETED** -- The player connection has been dropped.
   * - **TIMEDOUT** -- A player session request was received, but the player did not connect and/or was not validated within the timeout limit (60 seconds).
   *
   * @public
   */
  PlayerSessionStatusFilter?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages. If a player session ID is specified, this parameter is ignored.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. If a player session ID is specified, this parameter is ignored.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePlayerSessionsOutput {
  /**
   * A collection of objects containing properties for each player session that matches the request.
   *
   * @public
   */
  PlayerSessions?: PlayerSession[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRuntimeConfigurationInput {
  /**
   * A unique identifier for the fleet to get the runtime configuration for. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeRuntimeConfigurationOutput {
  /**
   * Instructions that describe how server processes are launched and maintained on computes in the fleet.
   *
   * @public
   */
  RuntimeConfiguration?: RuntimeConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeScalingPoliciesInput {
  /**
   * A unique identifier for the fleet for which to retrieve scaling policies. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * Scaling policy status to filter results on. A scaling policy is only in force when in an `ACTIVE` status.
   *
   * - **ACTIVE** -- The scaling policy is currently in force.
   * - **UPDATEREQUESTED** -- A request to update the scaling policy has been received.
   * - **UPDATING** -- A change is being made to the scaling policy.
   * - **DELETEREQUESTED** -- A request to delete the scaling policy has been received.
   * - **DELETING** -- The scaling policy is being deleted.
   * - **DELETED** -- The scaling policy has been deleted.
   * - **ERROR** -- An error occurred in creating the policy. It should be removed and recreated.
   *
   * @public
   */
  StatusFilter?: ScalingStatusType | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The fleet location. If you don't specify this value, the response contains the scaling policies of every location in the fleet.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * Settings for a target-based scaling policy. A target-based policy tracks a particular fleet metric and specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift Servers to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value.
 *
 * @public
 */
export interface TargetConfiguration {
  /**
   * Desired value to use with a target-based scaling policy. The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).
   *
   * @public
   */
  TargetValue: number | undefined;
}

/**
 * Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.
 *
 * @public
 */
export interface ScalingPolicy {
  /**
   * A unique identifier for the fleet that is associated with this scaling policy.
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
   * A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Current status of the scaling policy. The scaling policy can be in force only when in an `ACTIVE` status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change.
   *
   * - **ACTIVE** -- The scaling policy can be used for auto-scaling a fleet.
   * - **UPDATE_REQUESTED** -- A request to update the scaling policy has been received.
   * - **UPDATING** -- A change is being made to the scaling policy.
   * - **DELETE_REQUESTED** -- A request to delete the scaling policy has been received.
   * - **DELETING** -- The scaling policy is being deleted.
   * - **DELETED** -- The scaling policy has been deleted.
   * - **ERROR** -- An error occurred in creating the policy. It should be removed and recreated.
   *
   * @public
   */
  Status?: ScalingStatusType | undefined;

  /**
   * Amount of adjustment to make, based on the scaling adjustment type.
   *
   * @public
   */
  ScalingAdjustment?: number | undefined;

  /**
   * The type of adjustment to make to a fleet's instance count.
   *
   * - **ChangeInCapacity** -- add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.
   * - **ExactCapacity** -- set the instance count to the scaling adjustment value.
   * - **PercentChangeInCapacity** -- increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down.
   *
   * @public
   */
  ScalingAdjustmentType?: ScalingAdjustmentType | undefined;

  /**
   * Comparison operator to use when measuring a metric against the threshold value.
   *
   * @public
   */
  ComparisonOperator?: ComparisonOperatorType | undefined;

  /**
   * Metric value used to trigger a scaling event.
   *
   * @public
   */
  Threshold?: number | undefined;

  /**
   * Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.
   *
   * @public
   */
  EvaluationPeriods?: number | undefined;

  /**
   * Name of the Amazon GameLift Servers-defined metric that is used to trigger a scaling adjustment. For detailed descriptions of fleet metrics, see [Monitor Amazon GameLift Servers with Amazon CloudWatch](https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html).
   *
   * - **ActivatingGameSessions** -- Game sessions in the process of being created.
   * - **ActiveGameSessions** -- Game sessions that are currently running.
   * - **ActiveInstances** -- Fleet instances that are currently running at least one game session.
   * - **AvailableGameSessions** -- Additional game sessions that a fleet could host simultaneously, given current capacity.
   * - **AvailablePlayerSessions** -- Empty player slots in currently active game sessions. This includes game sessions that are not currently accepting players. Reserved player slots are not included.
   * - **CurrentPlayerSessions** -- Player slots in active game sessions that are being used by a player or are reserved for a player.
   * - **IdleInstances** -- Active instances that are currently hosting zero game sessions.
   * - **PercentAvailableGameSessions** -- Unused percentage of the total number of game sessions that a fleet could host simultaneously, given current capacity. Use this metric for a target-based scaling policy.
   * - **PercentIdleInstances** -- Percentage of the total number of active instances that are hosting zero game sessions.
   * - **QueueDepth** -- Pending game session placement requests, in any queue, where the current fleet is the top-priority destination.
   * - **WaitTime** -- Current wait time for pending game session placement requests, in any queue, where the current fleet is the top-priority destination.
   *
   * @public
   */
  MetricName?: MetricName | undefined;

  /**
   * The type of scaling policy to create. For a target-based policy, set the parameter *MetricName* to 'PercentAvailableGameSessions' and specify a *TargetConfiguration*. For a rule-based policy set the following parameters: *MetricName*, *ComparisonOperator*, *Threshold*, *EvaluationPeriods*, *ScalingAdjustmentType*, and *ScalingAdjustment*.
   *
   * @public
   */
  PolicyType?: PolicyType | undefined;

  /**
   * An object that contains settings for a target-based scaling policy.
   *
   * @public
   */
  TargetConfiguration?: TargetConfiguration | undefined;

  /**
   * The current status of the fleet's scaling policies in a requested fleet location. The status `PENDING_UPDATE` indicates that an update was requested for the fleet but has not yet been completed for the location.
   *
   * @public
   */
  UpdateStatus?: LocationUpdateStatus | undefined;

  /**
   * The fleet location.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScalingPoliciesOutput {
  /**
   * A collection of objects containing the scaling policies matching the request.
   *
   * @public
   */
  ScalingPolicies?: ScalingPolicy[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScriptInput {
  /**
   * A unique identifier for the Realtime script to retrieve properties for. You can use either the script ID or ARN value.
   *
   * @public
   */
  ScriptId: string | undefined;
}

/**
 * @public
 */
export interface DescribeScriptOutput {
  /**
   * A set of properties describing the requested script.
   *
   * @public
   */
  Script?: Script | undefined;
}

/**
 * @public
 */
export interface DescribeVpcPeeringAuthorizationsInput {}

/**
 * @public
 */
export interface DescribeVpcPeeringAuthorizationsOutput {
  /**
   * A collection of objects that describe all valid VPC peering operations for the current Amazon Web Services account.
   *
   * @public
   */
  VpcPeeringAuthorizations?: VpcPeeringAuthorization[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsInput {
  /**
   * A unique identifier for the fleet. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId?: string | undefined;
}

/**
 * Represents status information for a VPC peering connection. Status codes and messages are provided from EC2 (see [VpcPeeringConnectionStateReason](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html)). Connection status information is also communicated as a fleet event.
 *
 * @public
 */
export interface VpcPeeringConnectionStatus {
  /**
   * Code indicating the status of a VPC peering connection.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * Additional messaging associated with the connection status.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Represents a peering connection between a VPC on one of your Amazon Web Services accounts and the VPC for your Amazon GameLift Servers fleets. This record may be for an active peering connection or a pending connection that has not yet been established.
 *
 * **Related actions**
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @public
 */
export interface VpcPeeringConnection {
  /**
   * A unique identifier for the fleet. This ID determines the ID of the Amazon GameLift Servers VPC for your fleet.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) associated with the GameLift fleet resource for this connection.
   *
   * @public
   */
  FleetArn?: string | undefined;

  /**
   * CIDR block of IPv4 addresses assigned to the VPC peering connection for the GameLift VPC. The peered VPC also has an IPv4 CIDR block associated with it; these blocks cannot overlap or the peering connection cannot be created.
   *
   * @public
   */
  IpV4CidrBlock?: string | undefined;

  /**
   * A unique identifier that is automatically assigned to the connection record. This ID is referenced in VPC peering connection events, and is used when deleting a connection.
   *
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

  /**
   * The status information about the connection. Status indicates if a connection is pending, successful, or failed.
   *
   * @public
   */
  Status?: VpcPeeringConnectionStatus | undefined;

  /**
   * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift Servers fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the [VPC Dashboard](https://console.aws.amazon.com/vpc/) in the Amazon Web Services Management Console. Learn more about VPC peering in [VPC Peering with Amazon GameLift Servers Fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html).
   *
   * @public
   */
  PeerVpcId?: string | undefined;

  /**
   * A unique identifier for the VPC that contains the Amazon GameLift Servers fleet for this connection. This VPC is managed by Amazon GameLift Servers and does not appear in your Amazon Web Services account.
   *
   * @public
   */
  GameLiftVpcId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsOutput {
  /**
   * A collection of VPC peering connection records that match the request.
   *
   * @public
   */
  VpcPeeringConnections?: VpcPeeringConnection[] | undefined;
}

/**
 * Player information for use when creating player sessions using a game session placement request.
 *
 * @public
 */
export interface DesiredPlayerSession {
  /**
   * A unique identifier for a player to associate with the player session.
   *
   * @public
   */
  PlayerId?: string | undefined;

  /**
   * Developer-defined information related to a player. Amazon GameLift Servers does not use this data, so it can be formatted as needed for use in the game.
   *
   * @public
   */
  PlayerData?: string | undefined;
}

/**
 * @public
 */
export interface GetComputeAccessInput {
  /**
   * A unique identifier for the fleet that holds the compute resource that you want to connect to. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * A unique identifier for the compute resource that you want to connect to. For an EC2 fleet, use an instance ID. For a managed container fleet, use a compute name. You can retrieve a fleet's compute names by calling [ListCompute](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListCompute.html).
   *
   * @public
   */
  ComputeName: string | undefined;
}

/**
 * @public
 */
export interface GetComputeAccessOutput {
  /**
   * The ID of the fleet that holds the compute resource to be accessed.
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
   * The identifier of the compute resource to be accessed. This value might be either a compute name or an instance ID.
   *
   * @public
   */
  ComputeName?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to an Amazon GameLift Servers compute resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::compute/compute-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912`.
   *
   * @public
   */
  ComputeArn?: string | undefined;

  /**
   * A set of temporary Amazon Web Services credentials for use when connecting to the compute resource with Amazon EC2 Systems Manager (SSM).
   *
   * @public
   */
  Credentials?: AwsCredentials | undefined;

  /**
   * The instance ID where the compute resource is running.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * For a managed container fleet, a list of containers on the compute. Use the container runtime ID with Docker commands to connect to a specific container.
   *
   * @public
   */
  ContainerIdentifiers?: ContainerIdentifier[] | undefined;
}

/**
 * @public
 */
export interface GetComputeAuthTokenInput {
  /**
   * A unique identifier for the fleet that the compute is registered to.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The name of the compute resource you are requesting the authentication token for. For an Anywhere fleet compute, use the registered compute name. For an EC2 fleet instance, use the instance ID.
   *
   * @public
   */
  ComputeName: string | undefined;
}

/**
 * @public
 */
export interface GetComputeAuthTokenOutput {
  /**
   * A unique identifier for the fleet that the compute is registered to.
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
   * The name of the compute resource that the authentication token is issued to.
   *
   * @public
   */
  ComputeName?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that is assigned to an Amazon GameLift Servers compute resource and uniquely identifies it. ARNs are unique across all Regions. Format is `arn:aws:gamelift:<region>::compute/compute-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912`.
   *
   * @public
   */
  ComputeArn?: string | undefined;

  /**
   * A valid temporary authentication token.
   *
   * @public
   */
  AuthToken?: string | undefined;

  /**
   * The amount of time until the authentication token is no longer valid.
   *
   * @public
   */
  ExpirationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetGameSessionLogUrlInput {
  /**
   * An identifier for the game session that is unique across all regions to get logs for. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`.
   *
   * @public
   */
  GameSessionId: string | undefined;
}

/**
 * @public
 */
export interface GetGameSessionLogUrlOutput {
  /**
   * Location of the requested game session logs, available for download. This URL is valid for 15 minutes, after which S3 will reject any download request using this URL. You can request a new URL any time within the 14-day period that the logs are retained.
   *
   * @public
   */
  PreSignedUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceAccessInput {
  /**
   * A unique identifier for the fleet that contains the instance you want to access. You can request access to instances in EC2 fleets with the following statuses: `ACTIVATING`, `ACTIVE`, or `ERROR`. Use either a fleet ID or an ARN value.
   *
   * > **Note:** You can access fleets in `ERROR` status for a short period of time before Amazon GameLift Servers deletes them.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * A unique identifier for the instance you want to access. You can access an instance in any status.
   *
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * A set of credentials that allow remote access to an instance in an EC2 managed fleet. These credentials are returned in response to a call to [https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetInstanceAccess](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetInstanceAccess), which requests access for instances that are running game servers with the Amazon GameLift Servers server SDK version 4.x or earlier.
 *
 * @public
 */
export interface InstanceCredentials {
  /**
   * A user name for logging in.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Secret string. For Windows instances, the secret is a password for use with Windows Remote Desktop. For Linux instances, it's a private key for use with SSH.
   *
   * @public
   */
  Secret?: string | undefined;
}

/**
 * Information and credentials that you can use to remotely connect to an instance in an EC2 managed fleet. This data type is returned in response to a call to [https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetInstanceAccess](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetInstanceAccess).
 *
 * @public
 */
export interface InstanceAccess {
  /**
   * A unique identifier for the fleet containing the instance to be accessed.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * A unique identifier for the instance to be accessed.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * IP address assigned to the instance.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * Operating system that is running on the instance.
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * Security credentials that are required to access the instance.
   *
   * @public
   */
  Credentials?: InstanceCredentials | undefined;
}

/**
 * @public
 */
export interface GetInstanceAccessOutput {
  /**
   * The connection information for a fleet instance, including IP address and access credentials.
   *
   * @public
   */
  InstanceAccess?: InstanceAccess | undefined;
}

/**
 * @public
 */
export interface GetPlayerConnectionDetailsInput {
  /**
   * An identifier for the game session that is unique across all regions for which to retrieve player connection details. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`.
   *
   * @public
   */
  GameSessionId: string | undefined;

  /**
   * List of unique identifiers for players. Connection details are returned for each player in this list.
   *
   * @public
   */
  PlayerIds: string[] | undefined;
}

/**
 * Network address(es) and port(s) for connecting to a game session.
 *
 * @public
 */
export interface PlayerConnectionEndpoint {
  /**
   * IP address for connecting to the game session. When player gateway is enabled, this is a player gateway IP address. When player gateway is disabled, this is the game server IP address.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * Port number for connecting to the game session. When player gateway is enabled, this is a player gateway port. When player gateway is disabled, this is the game server port.
   *
   * @public
   */
  Port?: number | undefined;
}

/**
 * Connection information for a game client to connect to a game session. This object contains the IP address(es), port(s), and authentication details your game client needs to establish a connection.
 *
 * **With player gateway enabled:** Contains relay endpoints and a player gateway token. Your game client must prepend player gateway token to each payload for validation and connection through relay endpoints.
 *
 * **With player gateway disabled:** Contains game server endpoint. Player gateway token and expiration fields are empty.
 *
 * @public
 */
export interface PlayerConnectionDetail {
  /**
   * A unique identifier for a player associated with this connection.
   *
   * @public
   */
  PlayerId?: string | undefined;

  /**
   * List of connection endpoints for the game client. Your game client uses these IP address(es) and port(s) to connect to the game session.
   *
   * When player gateway is enabled, these are relay endpoints with benefits such as DDoS protection. When disabled, this is the game server endpoint.
   *
   * @public
   */
  Endpoints?: PlayerConnectionEndpoint[] | undefined;

  /**
   * Access token that your game client must prepend to all traffic sent through player gateway. Player gateway verifies identity and authorizes connection based on this token.
   *
   * This value is empty when player gateway is disabled.
   *
   * @public
   */
  PlayerGatewayToken?: string | undefined;

  /**
   * When player gateway is enabled, this is the timestamp indicating when player gateway token expires. Your game backend should call [GetPlayerConnectionDetails](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetPlayerConnectionDetails.html) to retrieve fresh connection information for your game clients before this time. Format is a number expressed in Unix time as milliseconds (for example `"1469498468.057"`).
   *
   * This value is empty when player gateway is disabled.
   *
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * @public
 */
export interface GetPlayerConnectionDetailsOutput {
  /**
   * An identifier for the game session that is unique across all regions for which the player connection details were retrieved. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`.
   *
   * @public
   */
  GameSessionId?: string | undefined;

  /**
   * A collection of player connection detail objects, one for each requested player.
   *
   * @public
   */
  PlayerConnectionDetails?: PlayerConnectionDetail[] | undefined;
}

/**
 * @public
 */
export interface ListAliasesInput {
  /**
   * The routing type to filter results on. Use this parameter to retrieve only aliases with a certain routing type. To retrieve all aliases, leave this parameter empty.
   *
   * Possible routing types include the following:
   *
   * - **SIMPLE** -- The alias resolves to one specific fleet. Use this type when routing to active fleets.
   * - **TERMINAL** -- The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the [RoutingStrategy](https://docs.aws.amazon.com/gamelift/latest/apireference/API_RoutingStrategy.html) message embedded.
   *
   * @public
   */
  RoutingStrategyType?: RoutingStrategyType | undefined;

  /**
   * A descriptive label that is associated with an alias. Alias names do not need to be unique.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAliasesOutput {
  /**
   * A collection of alias resources that match the request parameters.
   *
   * @public
   */
  Aliases?: Alias[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildsInput {
  /**
   * Build status to filter results by. To retrieve all builds, leave this parameter empty.
   *
   * Possible build statuses include the following:
   *
   * - **INITIALIZED** -- A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value.
   * - **READY** -- The game build has been successfully uploaded. You can now create new fleets for this build.
   * - **FAILED** -- The game build upload failed. You cannot create new fleets for this build.
   *
   * @public
   */
  Status?: BuildStatus | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildsOutput {
  /**
   * A collection of build resources that match the request.
   *
   * @public
   */
  Builds?: Build[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComputeInput {
  /**
   * A unique identifier for the fleet to retrieve compute resources for.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The name of a location to retrieve compute resources for. For an Amazon GameLift Servers Anywhere fleet, use a custom location. For a managed fleet, provide a Amazon Web Services Region or Local Zone code (for example: `us-west-2` or `us-west-2-lax-1`).
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * For computes in a managed container fleet, the name of the deployed container group definition.
   *
   * @public
   */
  ContainerGroupDefinitionName?: string | undefined;

  /**
   * The status of computes in a managed container fleet, based on the success of the latest update deployment.
   *
   * - `ACTIVE` -- The compute is deployed with the correct container definitions. It is ready to process game servers and host game sessions.
   * - `IMPAIRED` -- An update deployment to the compute failed, and the compute is deployed with incorrect container definitions.
   *
   * @public
   */
  ComputeStatus?: ListComputeInputStatus | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComputeOutput {
  /**
   * A list of compute resources in the specified fleet.
   *
   * @public
   */
  ComputeList?: Compute[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerFleetsInput {
  /**
   * The container group definition to filter the list on. Use this parameter to retrieve only those fleets that use the specified container group definition. You can specify the container group definition's name to get fleets with the latest versions. Alternatively, provide an ARN value to get fleets with a specific version number.
   *
   * @public
   */
  ContainerGroupDefinitionName?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerFleetsOutput {
  /**
   * A collection of container fleet objects for all fleets that match the request criteria.
   *
   * @public
   */
  ContainerFleets?: ContainerFleet[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerGroupDefinitionsInput {
  /**
   * The type of container group to retrieve. Container group type determines how Amazon GameLift Servers deploys the container group on each fleet instance.
   *
   * @public
   */
  ContainerGroupType?: ContainerGroupType | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerGroupDefinitionsOutput {
  /**
   * A result set of container group definitions that match the request.
   *
   * @public
   */
  ContainerGroupDefinitions?: ContainerGroupDefinition[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerGroupDefinitionVersionsInput {
  /**
   * The unique identifier for the container group definition to retrieve properties for. You can use either the `Name` or `ARN` value.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerGroupDefinitionVersionsOutput {
  /**
   * A result set of container group definitions that match the request.
   *
   * @public
   */
  ContainerGroupDefinitions?: ContainerGroupDefinition[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFleetDeploymentsInput {
  /**
   * A unique identifier for the container fleet. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFleetDeploymentsOutput {
  /**
   * The requested deployment information.
   *
   * @public
   */
  FleetDeployments?: FleetDeployment[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFleetsInput {
  /**
   * A unique identifier for the build to request fleets for. Use this parameter to return only fleets using a specified build. Use either the build ID or ARN value.
   *
   * @public
   */
  BuildId?: string | undefined;

  /**
   * A unique identifier for the Realtime script to request fleets for. Use this parameter to return only fleets using a specified script. Use either the script ID or ARN value.
   *
   * @public
   */
  ScriptId?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFleetsOutput {
  /**
   * A set of fleet IDs that match the list request.
   *
   * @public
   */
  FleetIds?: string[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGameServerGroupsInput {
  /**
   * The game server groups' limit.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGameServerGroupsOutput {
  /**
   * The game server groups' game server groups.
   *
   * @public
   */
  GameServerGroups?: GameServerGroup[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGameServersInput {
  /**
   * An identifier for the game server group to retrieve a list of game servers from. Use either the name or ARN value.
   *
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * Indicates how to sort the returned data based on game server registration timestamp. Use `ASCENDING` to retrieve oldest game servers first, or use `DESCENDING` to retrieve newest game servers first. If this parameter is left empty, game servers are returned in no particular order.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGameServersOutput {
  /**
   * A collection of game server objects that match the request.
   *
   * @public
   */
  GameServers?: GameServer[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLocationsInput {
  /**
   * Filters the list for `AWS` or `CUSTOM` locations. Use this parameter to narrow down results to only Amazon Web Services-managed locations (Amazon EC2 or container) or only your custom locations (such as an Amazon GameLift Servers Anywhere fleet).
   *
   * @public
   */
  Filters?: LocationFilter[] | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLocationsOutput {
  /**
   * A collection of locations, including both Amazon Web Services and custom locations. Each location includes a name and ping beacon information that can be used to measure network latency between player devices and the location.
   *
   * @public
   */
  Locations?: LocationModel[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScriptsInput {
  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScriptsOutput {
  /**
   * A set of properties describing the requested script.
   *
   * @public
   */
  Scripts?: Script[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that uniquely identifies the Amazon GameLift Servers resource that you want to retrieve tags for. Amazon GameLift Servers includes resource ARNs in the data object for the resource. You can retrieve the ARN by calling a `List` or `Describe` operation for the resource type.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The collection of tags assigned to the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutScalingPolicyInput {
  /**
   * A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique. A fleet can have only one scaling policy with the same name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique identifier for the fleet to apply this policy to. You can use either the fleet ID or ARN value. The fleet cannot be in any of the following statuses: ERROR or DELETING.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * Amount of adjustment to make, based on the scaling adjustment type.
   *
   * @public
   */
  ScalingAdjustment?: number | undefined;

  /**
   * The type of adjustment to make to a fleet's instance count:
   *
   * - **ChangeInCapacity** -- add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.
   * - **ExactCapacity** -- set the instance count to the scaling adjustment value.
   * - **PercentChangeInCapacity** -- increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down; for example, a value of "-10" scales the fleet down by 10%.
   *
   * @public
   */
  ScalingAdjustmentType?: ScalingAdjustmentType | undefined;

  /**
   * Metric value used to trigger a scaling event.
   *
   * @public
   */
  Threshold?: number | undefined;

  /**
   * Comparison operator to use when measuring the metric against the threshold value.
   *
   * @public
   */
  ComparisonOperator?: ComparisonOperatorType | undefined;

  /**
   * Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.
   *
   * @public
   */
  EvaluationPeriods?: number | undefined;

  /**
   * Name of the Amazon GameLift Servers-defined metric that is used to trigger a scaling adjustment. For detailed descriptions of fleet metrics, see [Monitor Amazon GameLift Servers with Amazon CloudWatch](https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html).
   *
   * - **ActivatingGameSessions** -- Game sessions in the process of being created.
   * - **ActiveGameSessions** -- Game sessions that are currently running.
   * - **ActiveInstances** -- Fleet instances that are currently running at least one game session.
   * - **AvailableGameSessions** -- Additional game sessions that a fleet could host simultaneously, given current capacity.
   * - **AvailablePlayerSessions** -- Empty player slots in currently active game sessions. This includes game sessions that are not currently accepting players. Reserved player slots are not included.
   * - **CurrentPlayerSessions** -- Player slots in active game sessions that are being used by a player or are reserved for a player.
   * - **IdleInstances** -- Active instances that are currently hosting zero game sessions.
   * - **PercentAvailableGameSessions** -- Unused percentage of the total number of game sessions that a fleet could host simultaneously, given current capacity. Use this metric for a target-based scaling policy.
   * - **PercentIdleInstances** -- Percentage of the total number of active instances that are hosting zero game sessions.
   * - **QueueDepth** -- Pending game session placement requests, in any queue, where the current fleet is the top-priority destination.
   * - **WaitTime** -- Current wait time for pending game session placement requests, in any queue, where the current fleet is the top-priority destination.
   *
   * @public
   */
  MetricName: MetricName | undefined;

  /**
   * The type of scaling policy to create. For a target-based policy, set the parameter *MetricName* to 'PercentAvailableGameSessions' and specify a *TargetConfiguration*. For a rule-based policy set the following parameters: *MetricName*, *ComparisonOperator*, *Threshold*, *EvaluationPeriods*, *ScalingAdjustmentType*, and *ScalingAdjustment*.
   *
   * @public
   */
  PolicyType?: PolicyType | undefined;

  /**
   * An object that contains settings for a target-based scaling policy.
   *
   * @public
   */
  TargetConfiguration?: TargetConfiguration | undefined;
}

/**
 * @public
 */
export interface PutScalingPolicyOutput {
  /**
   * A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface RegisterComputeInput {
  /**
   * A unique identifier for the fleet to register the compute to. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * A descriptive label for the compute resource.
   *
   * @public
   */
  ComputeName: string | undefined;

  /**
   * The path to a TLS certificate on your compute resource. Amazon GameLift Servers doesn't validate the path and certificate.
   *
   * @public
   */
  CertificatePath?: string | undefined;

  /**
   * The DNS name of the compute resource. Amazon GameLift Servers requires either a DNS name or IP address.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * The IP address of the compute resource. Amazon GameLift Servers requires either a DNS name or IP address. When registering an Anywhere fleet, an IP address is required.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The name of a custom location to associate with the compute resource being registered. This parameter is required when registering a compute for an Anywhere fleet.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface RegisterComputeOutput {
  /**
   * The details of the compute resource you registered.
   *
   * @public
   */
  Compute?: Compute | undefined;
}

/**
 * @public
 */
export interface RegisterGameServerInput {
  /**
   * A unique identifier for the game server group where the game server is running.
   *
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * A custom string that uniquely identifies the game server to register. Game server IDs are developer-defined and must be unique across all game server groups in your Amazon Web Services account.
   *
   * @public
   */
  GameServerId: string | undefined;

  /**
   * The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: `i-1234567890abcdef0`.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Information that is needed to make inbound client connections to the game server. This might include the IP address and port, DNS name, and other information.
   *
   * @public
   */
  ConnectionInfo?: string | undefined;

  /**
   * A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers.
   *
   * @public
   */
  GameServerData?: string | undefined;
}

/**
 * @public
 */
export interface RegisterGameServerOutput {
  /**
   * Object that describes the newly registered game server.
   *
   * @public
   */
  GameServer?: GameServer | undefined;
}

/**
 * @public
 */
export interface RequestUploadCredentialsInput {
  /**
   * A unique identifier for the build to get credentials for. You can use either the build ID or ARN value.
   *
   * @public
   */
  BuildId: string | undefined;
}

/**
 * @public
 */
export interface RequestUploadCredentialsOutput {
  /**
   * Amazon Web Services credentials required when uploading a game build to the storage location. These credentials have a limited lifespan and are valid only for the build they were issued for.
   *
   * @public
   */
  UploadCredentials?: AwsCredentials | undefined;

  /**
   * Amazon S3 path and key, identifying where the game build files are stored.
   *
   * @public
   */
  StorageLocation?: S3Location | undefined;
}

/**
 * @public
 */
export interface ResolveAliasInput {
  /**
   * The unique identifier of the alias that you want to retrieve a fleet ID for. You can use either the alias ID or ARN value.
   *
   * @public
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface ResolveAliasOutput {
  /**
   * The fleet identifier that the alias is pointing to.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) associated with the GameLift fleet resource that this alias points to.
   *
   * @public
   */
  FleetArn?: string | undefined;
}

/**
 * @public
 */
export interface ResumeGameServerGroupInput {
  /**
   * A unique identifier for the game server group. Use either the name or ARN value.
   *
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * The activity to resume for this game server group.
   *
   * @public
   */
  ResumeActions: GameServerGroupAction[] | undefined;
}

/**
 * @public
 */
export interface ResumeGameServerGroupOutput {
  /**
   * An object that describes the game server group resource, with the `SuspendedActions` property updated to reflect the resumed activity.
   *
   * @public
   */
  GameServerGroup?: GameServerGroup | undefined;
}

/**
 * @public
 */
export interface SearchGameSessionsInput {
  /**
   * A unique identifier for the fleet to search for active game sessions. You can use either the fleet ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * A unique identifier for the alias associated with the fleet to search for active game sessions. You can use either the alias ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.
   *
   * @public
   */
  AliasId?: string | undefined;

  /**
   * A fleet location to search for game sessions. You can specify a fleet's home Region or a remote location. Use the Amazon Web Services Region code format, such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * String containing the search criteria for the session search. If no filter expression is included, the request returns results for all game sessions in the fleet that are in `ACTIVE` status.
   *
   * A filter expression can contain one or multiple conditions. Each condition consists of the following:
   *
   * - **Operand** -- Name of a game session attribute. Valid values are `gameSessionName`, `gameSessionId`, `gameSessionProperties`, `maximumSessions`, `creationTimeMillis`, `playerSessionCount`, `hasAvailablePlayerSessions`.
   * - **Comparator** -- Valid comparators are: `=`, `<>`, `<`, `>`, `<=`, `>=`.
   * - **Value** -- Value to be searched for. Values may be numbers, boolean values (true/false) or strings depending on the operand. String values are case sensitive and must be enclosed in single quotes. Special characters must be escaped. Boolean and string values can only be used with the comparators `=` and `<>`. For example, the following filter expression searches on `gameSessionName`: "`FilterExpression": "gameSessionName = 'Matt\\'s Awesome Game 1'"`.
   *
   * To chain multiple conditions in a single expression, use the logical keywords `AND`, `OR`, and `NOT` and parentheses as needed. For example: `x AND y AND NOT z`, `NOT (x OR y)`.
   *
   * Session search evaluates conditions from left to right using the following precedence rules:
   *
   * 1. `=`, `<>`, `<`, `>`, `<=`, `>=`
   * 2. Parentheses
   * 3. NOT
   * 4. AND
   * 5. OR
   *
   * For example, this filter expression retrieves game sessions hosting at least ten players that have an open player slot: `"maximumSessions>=10 AND hasAvailablePlayerSessions=true"`.
   *
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * Instructions on how to sort the search results. If no sort expression is included, the request returns results in random order. A sort expression consists of the following elements:
   *
   * - **Operand** -- Name of a game session attribute. Valid values are `gameSessionName`, `gameSessionId`, `gameSessionProperties`, `maximumSessions`, `creationTimeMillis`, `playerSessionCount`, `hasAvailablePlayerSessions`.
   * - **Order** -- Valid sort orders are `ASC` (ascending) and `DESC` (descending).
   *
   * For example, this sort expression returns the oldest active sessions first: `"SortExpression": "creationTimeMillis ASC"`. Results with a null value for the sort operand are returned at the end of the list.
   *
   * @public
   */
  SortExpression?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with `NextToken` to get results as a set of sequential pages. The maximum number of results returned is 20, even if this value is not set or is set higher than 20.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchGameSessionsOutput {
  /**
   * A collection of objects containing game session properties for each session that matches the request.
   *
   * @public
   */
  GameSessions?: GameSession[] | undefined;

  /**
   * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartFleetActionsInput {
  /**
   * A unique identifier for the fleet to restart actions on. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * List of actions to restart on the fleet.
   *
   * @public
   */
  Actions: FleetAction[] | undefined;

  /**
   * The fleet location to restart fleet actions for. Specify a location in the form of an Amazon Web Services Region code, such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface StartFleetActionsOutput {
  /**
   * A unique identifier for the fleet to restart actions on.
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
export interface StartGameSessionPlacementInput {
  /**
   * A unique identifier to assign to the new game session placement. This value is developer-defined. The value must be unique across all Regions and cannot be reused.
   *
   * @public
   */
  PlacementId: string | undefined;

  /**
   * Name of the queue to use to place the new game session. You can use either the queue name or ARN value.
   *
   * @public
   */
  GameSessionQueueName: string | undefined;

  /**
   * A set of key-value pairs that can store custom data in a game session. For example: `\{"Key": "difficulty", "Value": "novice"\}`.
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
   * The maximum number of players that can be connected simultaneously to the game session.
   *
   * @public
   */
  MaximumPlayerSessionCount: number | undefined;

  /**
   * A descriptive label that is associated with a game session. Session names do not need to be unique.
   *
   * @public
   */
  GameSessionName?: string | undefined;

  /**
   * A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to a fleet location (Amazon Web Services Regions or custom locations for Amazon GameLift Servers Anywhere fleets). This information is used to try to place the new game session where it can offer the best possible gameplay experience for the players.
   *
   * @public
   */
  PlayerLatencies?: PlayerLatency[] | undefined;

  /**
   * Set of information on each player to create a player session for.
   *
   * @public
   */
  DesiredPlayerSessions?: DesiredPlayerSession[] | undefined;

  /**
   * A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see [Start a game session](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession).
   *
   * @public
   */
  GameSessionData?: string | undefined;

  /**
   * A prioritized list of locations to use for the game session placement and instructions on how to use it. This list overrides a queue's prioritized location list for this game session placement request only. You can include Amazon Web Services Regions, local zones, and custom locations (for Anywhere fleets). You can choose to limit placements to locations on the override list only, or you can prioritize locations on the override list first and then fall back to the queue's other locations if needed. Choose a fallback strategy to use in the event that Amazon GameLift Servers fails to place a game session in any of the locations on the priority override list.
   *
   * @public
   */
  PriorityConfigurationOverride?: PriorityConfigurationOverride | undefined;
}

/**
 * @public
 */
export interface StartGameSessionPlacementOutput {
  /**
   * Object that describes the newly created game session placement. This object includes all the information provided in the request, as well as start/end time stamps and placement status.
   *
   * @public
   */
  GameSessionPlacement?: GameSessionPlacement | undefined;
}

/**
 * @public
 */
export interface StartMatchBackfillInput {
  /**
   * A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift Servers will generate one in the form of a UUID. Use this identifier to track the match backfill ticket status and retrieve match results.
   *
   * @public
   */
  TicketId?: string | undefined;

  /**
   * Name of the matchmaker to use for this request. You can use either the configuration name or ARN value. The ARN of the matchmaker that was used with the original game session is listed in the `GameSession` object, `MatchmakerData` property.
   *
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * An identifier for the game session that is unique across all regions. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`. When using FlexMatch as a standalone matchmaking solution, this parameter is not needed.
   *
   * @public
   */
  GameSessionArn?: string | undefined;

  /**
   * Match information on all players that are currently assigned to the game session. This information is used by the matchmaker to find new players and add them to the existing game.
   *
   * You can include up to 199 `Players` in a `StartMatchBackfill` request.
   *
   * - PlayerID, PlayerAttributes, Team -- This information is maintained in the `GameSession` object, `MatchmakerData` property, for all players who are currently assigned to the game session. The matchmaker data is in JSON syntax, formatted as a string. For more details, see [Match Data](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data).
   *
   *   The backfill request must specify the team membership for every player. Do not specify team if you are not using backfill.
   * - LatencyInMs -- If the matchmaker uses player latency, include a latency value, in milliseconds, for the Region that the game session is currently in. Do not include latency values for any other Region.
   *
   * @public
   */
  Players: Player[] | undefined;
}

/**
 * @public
 */
export interface StartMatchBackfillOutput {
  /**
   * Ticket representing the backfill matchmaking request. This object includes the information in the request, ticket status, and match results as generated during the matchmaking process.
   *
   * @public
   */
  MatchmakingTicket?: MatchmakingTicket | undefined;
}

/**
 * @public
 */
export interface StartMatchmakingInput {
  /**
   * A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift Servers will generate one in the form of a UUID. Use this identifier to track the matchmaking ticket status and retrieve match results.
   *
   * @public
   */
  TicketId?: string | undefined;

  /**
   * Name of the matchmaking configuration to use for this request. Matchmaking configurations must exist in the same Region as this request. You can use either the configuration name or ARN value.
   *
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * Information on each player to be matched. This information must include a player ID, and may contain player attributes and latency data to be used in the matchmaking process. After a successful match, `Player` objects contain the name of the team the player is assigned to.
   *
   * You can include up to 10 `Players` in a `StartMatchmaking` request.
   *
   * @public
   */
  Players: Player[] | undefined;
}

/**
 * @public
 */
export interface StartMatchmakingOutput {
  /**
   * Ticket representing the matchmaking request. This object includes the information included in the request, ticket status, and match results as generated during the matchmaking process.
   *
   * @public
   */
  MatchmakingTicket?: MatchmakingTicket | undefined;
}

/**
 * @public
 */
export interface StopFleetActionsInput {
  /**
   * A unique identifier for the fleet to stop actions on. You can use either the fleet ID or ARN value.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * List of actions to suspend on the fleet.
   *
   * @public
   */
  Actions: FleetAction[] | undefined;

  /**
   * The fleet location to stop fleet actions for. Specify a location in the form of an Amazon Web Services Region code, such as `us-west-2`.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface StopFleetActionsOutput {
  /**
   * A unique identifier for the fleet to stop actions on.
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
export interface StopGameSessionPlacementInput {
  /**
   * A unique identifier for a game session placement to stop.
   *
   * @public
   */
  PlacementId: string | undefined;
}

/**
 * @public
 */
export interface StopGameSessionPlacementOutput {
  /**
   * Object that describes the canceled game session placement, with `CANCELLED` status and an end time stamp.
   *
   * @public
   */
  GameSessionPlacement?: GameSessionPlacement | undefined;
}

/**
 * @public
 */
export interface StopMatchmakingInput {
  /**
   * A unique identifier for a matchmaking ticket.
   *
   * @public
   */
  TicketId: string | undefined;
}

/**
 * @public
 */
export interface StopMatchmakingOutput {}

/**
 * @public
 */
export interface SuspendGameServerGroupInput {
  /**
   * A unique identifier for the game server group. Use either the name or ARN value.
   *
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * The activity to suspend for this game server group.
   *
   * @public
   */
  SuspendActions: GameServerGroupAction[] | undefined;
}

/**
 * @public
 */
export interface SuspendGameServerGroupOutput {
  /**
   * An object that describes the game server group resource, with the `SuspendedActions` property updated to reflect the suspended activity.
   *
   * @public
   */
  GameServerGroup?: GameServerGroup | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that uniquely identifies the Amazon GameLift Servers resource that you want to assign tags to. Amazon GameLift Servers includes resource ARNs in the data object for the resource. You can retrieve the ARN by calling a `List` or `Describe` operation for the resource type.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of one or more tags to assign to the specified Amazon GameLift Servers resource. Tags are developer-defined and structured as key-value pairs. The maximum tag limit may be lower than stated. See [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) for tagging limits.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface TerminateGameSessionInput {
  /**
   * An identifier for the game session that is unique across all regions to be terminated. The value is always a full ARN in the following format: For Home Region game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<ID string>`. For Remote Location game session - `arn:aws:gamelift:<home_region>::gamesession/<fleet ID>/<location>/<ID string>`.
   *
   * @public
   */
  GameSessionId: string | undefined;

  /**
   * The method to use to terminate the game session. Available methods include:
   *
   * - `TRIGGER_ON_PROCESS_TERMINATE` – Prompts the Amazon GameLift Servers service to send an `OnProcessTerminate()` callback to the server process and initiate the normal game session shutdown sequence. The `OnProcessTerminate` method, which is implemented in the game server code, must include a call to the server SDK action `ProcessEnding()`, which is how the server process signals to Amazon GameLift Servers that a game session is ending. If the server process doesn't call `ProcessEnding()`, the game session termination won't conclude successfully.
   * - `FORCE_TERMINATE` – Prompts the Amazon GameLift Servers service to stop the server process immediately. Amazon GameLift Servers takes action (depending on the type of fleet) to shut down the server process without the normal game session shutdown sequence.
   *
   *   > **Note:** This method is not available for game sessions that are running on Anywhere fleets unless the fleet is deployed with the Amazon GameLift Servers Agent. In this scenario, a force terminate request results in an invalid or bad request exception.
   *
   * @public
   */
  TerminationMode: TerminationMode | undefined;
}

/**
 * @public
 */
export interface TerminateGameSessionOutput {
  /**
   * Properties describing a game session.
   *
   * A game session in ACTIVE status can host players. When a game session ends, its status is set to `TERMINATED`.
   *
   * Amazon GameLift Servers retains a game session resource for 30 days after the game session ends. You can reuse idempotency token values after this time. Game session logs are retained for 14 days.
   *
   * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
   *
   * @public
   */
  GameSession?: GameSession | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name ([ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)) that uniquely identifies the Amazon GameLift Servers resource that you want to remove tags from. Amazon GameLift Servers includes resource ARNs in the data object for the resource. You can retrieve the ARN by calling a `List` or `Describe` operation for the resource type.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of one or more tag keys to remove from the specified Amazon GameLift Servers resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAliasInput {
  /**
   * A unique identifier for the alias that you want to update. You can use either the alias ID or ARN value.
   *
   * @public
   */
  AliasId: string | undefined;

  /**
   * A descriptive label that is associated with an alias. Alias names do not need to be unique.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A human-readable description of the alias.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The routing configuration, including routing type and fleet target, for the alias.
   *
   * @public
   */
  RoutingStrategy?: RoutingStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateAliasOutput {
  /**
   * The updated alias resource.
   *
   * @public
   */
  Alias?: Alias | undefined;
}

/**
 * @public
 */
export interface UpdateBuildInput {
  /**
   * A unique identifier for the build to update. You can use either the build ID or ARN value.
   *
   * @public
   */
  BuildId: string | undefined;

  /**
   * A descriptive label that is associated with a build. Build names do not need to be unique.
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
}
