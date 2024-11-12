// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  Alias,
  AnywhereConfiguration,
  AwsCredentials,
  BackfillMode,
  BalancingStrategy,
  Build,
  ComparisonOperatorType,
  Compute,
  ComputeFilterSensitiveLog,
  ConnectionPortRange,
  ConnectionPortRangeFilterSensitiveLog,
  ContainerFleet,
  ContainerFleetFilterSensitiveLog,
  ContainerFleetRemoveAttribute,
  ContainerGroupDefinition,
  ContainerGroupType,
  ContainerOperatingSystem,
  DeploymentConfiguration,
  DesiredPlayerSession,
  DesiredPlayerSessionFilterSensitiveLog,
  FilterConfiguration,
  FleetAction,
  FleetDeployment,
  FlexMatchMode,
  GameProperty,
  GameServer,
  GameServerContainerDefinitionInput,
  GameServerGroup,
  GameServerGroupAction,
  GameServerProtectionPolicy,
  GameServerUtilizationStatus,
  GameSession,
  GameSessionCreationLimitPolicy,
  GameSessionFilterSensitiveLog,
  GameSessionPlacement,
  GameSessionPlacementFilterSensitiveLog,
  GameSessionQueue,
  GameSessionQueueDestination,
  InstanceDefinition,
  IpPermission,
  IpPermissionFilterSensitiveLog,
  LocationModel,
  LogConfiguration,
  MatchmakingConfiguration,
  MatchmakingTicket,
  MatchmakingTicketFilterSensitiveLog,
  MetricName,
  Player,
  PlayerFilterSensitiveLog,
  PlayerLatency,
  PlayerLatencyFilterSensitiveLog,
  PlayerLatencyPolicy,
  PlayerSessionCreationPolicy,
  PolicyType,
  PriorityConfiguration,
  ProtectionPolicy,
  ResourceCreationLimitPolicy,
  RoutingStrategy,
  RuntimeConfiguration,
  S3Location,
  ScalingAdjustmentType,
  Script,
  SupportContainerDefinitionInput,
  Tag,
  TargetConfiguration,
} from "./models_0";

/**
 * @public
 */
export interface ListContainerGroupDefinitionsInput {
  /**
   * <p>The type of container group to retrieve. Container group type determines how Amazon GameLift
   *       deploys the container group on each fleet instance.</p>
   * @public
   */
  ContainerGroupType?: ContainerGroupType | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerGroupDefinitionsOutput {
  /**
   * <p>A result set of container group definitions that match the request.</p>
   * @public
   */
  ContainerGroupDefinitions?: ContainerGroupDefinition[] | undefined;

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerGroupDefinitionVersionsInput {
  /**
   * <p>The unique identifier for the container group definition to retrieve properties for. You can use either the <code>Name</code> or
   *       <code>ARN</code> value.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerGroupDefinitionVersionsOutput {
  /**
   * <p>A result set of container group definitions that match the request.</p>
   * @public
   */
  ContainerGroupDefinitions?: ContainerGroupDefinition[] | undefined;

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFleetDeploymentsInput {
  /**
   * <p>A unique identifier for the container fleet. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFleetDeploymentsOutput {
  /**
   * <p>The requested deployment information.</p>
   * @public
   */
  FleetDeployments?: FleetDeployment[] | undefined;

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFleetsInput {
  /**
   * <p>A unique identifier for the build to request fleets for. Use this parameter to return only fleets using a
   *             specified build. Use either the build ID or ARN value.</p>
   * @public
   */
  BuildId?: string | undefined;

  /**
   * <p>A unique identifier for the Realtime script to request fleets for. Use this parameter to return only fleets using a
   *             specified script. Use either the script ID or ARN value.</p>
   * @public
   */
  ScriptId?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFleetsOutput {
  /**
   * <p>A set of fleet IDs that match the list request.</p>
   * @public
   */
  FleetIds?: string[] | undefined;

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGameServerGroupsInput {
  /**
   * <p>The game server groups' limit.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGameServerGroupsOutput {
  /**
   * <p>The game server groups' game server groups.</p>
   * @public
   */
  GameServerGroups?: GameServerGroup[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListGameServersInput {
  /**
   * <p>An identifier for the game server group to retrieve a list of game servers from. Use
   *             either the name or ARN value.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>Indicates how to sort the returned data based on game server registration timestamp.
   *             Use <code>ASCENDING</code> to retrieve oldest game servers first, or use
   *                 <code>DESCENDING</code> to retrieve newest game servers first. If this parameter is
   *             left empty, game servers are returned in no particular order.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGameServersOutput {
  /**
   * <p>A collection of game server objects that match the request.</p>
   * @public
   */
  GameServers?: GameServer[] | undefined;

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LocationFilter = {
  AWS: "AWS",
  CUSTOM: "CUSTOM",
} as const;

/**
 * @public
 */
export type LocationFilter = (typeof LocationFilter)[keyof typeof LocationFilter];

/**
 * @public
 */
export interface ListLocationsInput {
  /**
   * <p>Filters the list for <code>AWS</code> or <code>CUSTOM</code> locations.</p>
   * @public
   */
  Filters?: LocationFilter[] | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLocationsOutput {
  /**
   * <p>A collection of locations.</p>
   * @public
   */
  Locations?: LocationModel[] | undefined;

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScriptsInput {
  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScriptsOutput {
  /**
   * <p>A set of properties describing the requested script.</p>
   * @public
   */
  Scripts?: Script[] | undefined;

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that uniquely identifies
   *             the Amazon GameLift resource that you want to retrieve tags for. Amazon GameLift includes resource ARNs in
   *             the data object for the resource. You can retrieve the ARN by calling a
   *                 <code>List</code> or <code>Describe</code> operation for the resource type. </p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The collection of tags assigned to the resource. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutScalingPolicyInput {
  /**
   * <p>A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique. A fleet can have only one scaling policy with the same name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the fleet to apply this policy to. You can use either the fleet ID or ARN value. The fleet
   *             cannot be in any of the following statuses: ERROR or DELETING.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>Amount of adjustment to make, based on the scaling adjustment type.</p>
   * @public
   */
  ScalingAdjustment?: number | undefined;

  /**
   * <p>The type of adjustment to make to a fleet's instance count:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ChangeInCapacity</b> -- add (or subtract) the
   *                     scaling adjustment value from the current instance count. Positive values scale
   *                     up while negative values scale down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ExactCapacity</b> -- set the instance count to the
   *                     scaling adjustment value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PercentChangeInCapacity</b> -- increase or reduce
   *                     the current instance count by the scaling adjustment, read as a percentage.
   *                     Positive values scale up while negative values scale down; for example, a value
   *                     of "-10" scales the fleet down by 10%.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalingAdjustmentType?: ScalingAdjustmentType | undefined;

  /**
   * <p>Metric value used to trigger a scaling event.</p>
   * @public
   */
  Threshold?: number | undefined;

  /**
   * <p>Comparison operator to use when measuring the metric against the threshold
   *             value.</p>
   * @public
   */
  ComparisonOperator?: ComparisonOperatorType | undefined;

  /**
   * <p>Length of time (in minutes) the metric must be at or beyond the threshold before a
   *             scaling event is triggered.</p>
   * @public
   */
  EvaluationPeriods?: number | undefined;

  /**
   * <p>Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For
   *             detailed descriptions of fleet metrics, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html">Monitor Amazon GameLift
   *                 with Amazon CloudWatch</a>. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ActivatingGameSessions</b> -- Game sessions in
   *                     the process of being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ActiveGameSessions</b> -- Game sessions that
   *                     are currently running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ActiveInstances</b> -- Fleet instances that
   *                     are currently running at least one game session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AvailableGameSessions</b> -- Additional game
   *                     sessions that fleet could host simultaneously, given current capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AvailablePlayerSessions</b> -- Empty player
   *                     slots in currently active game sessions. This includes game sessions that are
   *                     not currently accepting players. Reserved player slots are not
   *                     included.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CurrentPlayerSessions</b> -- Player slots in
   *                     active game sessions that are being used by a player or are reserved for a
   *                     player. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IdleInstances</b> -- Active instances that are
   *                     currently hosting zero game sessions. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PercentAvailableGameSessions</b> -- Unused
   *                     percentage of the total number of game sessions that a fleet could host
   *                     simultaneously, given current capacity. Use this metric for a target-based
   *                     scaling policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PercentIdleInstances</b> -- Percentage of the
   *                     total number of active instances that are hosting zero game sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>QueueDepth</b> -- Pending game session
   *                     placement requests, in any queue, where the current fleet is the top-priority
   *                     destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>WaitTime</b> -- Current wait time for pending
   *                     game session placement requests, in any queue, where the current fleet is the
   *                     top-priority destination. </p>
   *             </li>
   *          </ul>
   * @public
   */
  MetricName: MetricName | undefined;

  /**
   * <p>The type of scaling policy to create. For a target-based policy, set the parameter
   *                 <i>MetricName</i> to 'PercentAvailableGameSessions' and specify a
   *                 <i>TargetConfiguration</i>. For a rule-based policy set the following
   *             parameters: <i>MetricName</i>, <i>ComparisonOperator</i>,
   *                 <i>Threshold</i>, <i>EvaluationPeriods</i>,
   *                 <i>ScalingAdjustmentType</i>, and
   *                 <i>ScalingAdjustment</i>.</p>
   * @public
   */
  PolicyType?: PolicyType | undefined;

  /**
   * <p>An object that contains settings for a target-based scaling policy.</p>
   * @public
   */
  TargetConfiguration?: TargetConfiguration | undefined;
}

/**
 * @public
 */
export interface PutScalingPolicyOutput {
  /**
   * <p>A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface RegisterComputeInput {
  /**
   * <p>A unique identifier for the fleet to register the compute to. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A descriptive label for the compute resource.</p>
   * @public
   */
  ComputeName: string | undefined;

  /**
   * <p>The path to a TLS certificate on your compute resource. Amazon GameLift doesn't validate the
   *             path and certificate.</p>
   * @public
   */
  CertificatePath?: string | undefined;

  /**
   * <p>The DNS name of the compute resource. Amazon GameLift requires either a DNS name or IP
   *             address.</p>
   * @public
   */
  DnsName?: string | undefined;

  /**
   * <p>The IP address of the compute resource. Amazon GameLift requires either a DNS name or IP
   *             address. When registering an Anywhere fleet, an IP address is required.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The name of a custom location to associate with the compute resource being registered.
   *             This parameter is required when registering a compute for an Anywhere fleet.</p>
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface RegisterComputeOutput {
  /**
   * <p>The details of the compute resource you registered.</p>
   * @public
   */
  Compute?: Compute | undefined;
}

/**
 * @public
 */
export interface RegisterGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server to register. Game server IDs are developer-defined and must be unique
   *             across all game server groups in your Amazon Web Services account.</p>
   * @public
   */
  GameServerId: string | undefined;

  /**
   * <p>The unique identifier for the instance where the game server is running. This ID is
   *             available in the instance metadata. EC2 instance IDs
   *             use a 17-character format, for example: <code>i-1234567890abcdef0</code>.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Information that is needed to make inbound client connections to the game server. This
   *             might include the IP address and port, DNS name, and other information.</p>
   * @public
   */
  ConnectionInfo?: string | undefined;

  /**
   * <p>A set of custom game server properties, formatted as a single string value. This data
   *             is passed to a game client or service when it requests information on game servers. </p>
   * @public
   */
  GameServerData?: string | undefined;
}

/**
 * @public
 */
export interface RegisterGameServerOutput {
  /**
   * <p>Object that describes the newly registered game server.</p>
   * @public
   */
  GameServer?: GameServer | undefined;
}

/**
 * @public
 */
export interface RequestUploadCredentialsInput {
  /**
   * <p>A unique identifier for the build to get credentials for. You can use either the build ID or ARN value. </p>
   * @public
   */
  BuildId: string | undefined;
}

/**
 * @public
 */
export interface RequestUploadCredentialsOutput {
  /**
   * <p>Amazon Web Services credentials required when uploading a game build to the storage location. These
   *             credentials have a limited lifespan and are valid only for the build they were issued
   *             for.</p>
   * @public
   */
  UploadCredentials?: AwsCredentials | undefined;

  /**
   * <p>Amazon S3 path and key, identifying where the game build files are
   *             stored.</p>
   * @public
   */
  StorageLocation?: S3Location | undefined;
}

/**
 * @public
 */
export interface ResolveAliasInput {
  /**
   * <p>The unique identifier of the alias that you want to retrieve a fleet ID for. You can
   *             use either the alias ID or ARN value.</p>
   * @public
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface ResolveAliasOutput {
  /**
   * <p>The fleet identifier that the alias is pointing to.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift fleet resource that this alias points to.
   *         </p>
   * @public
   */
  FleetArn?: string | undefined;
}

/**
 * @public
 */
export interface ResumeGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the name or ARN value.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The activity to resume for this game server group.</p>
   * @public
   */
  ResumeActions: GameServerGroupAction[] | undefined;
}

/**
 * @public
 */
export interface ResumeGameServerGroupOutput {
  /**
   * <p>An object that describes the game server group resource, with the
   *                 <code>SuspendedActions</code> property updated to reflect the resumed
   *             activity.</p>
   * @public
   */
  GameServerGroup?: GameServerGroup | undefined;
}

/**
 * @public
 */
export interface SearchGameSessionsInput {
  /**
   * <p>A unique identifier for the fleet to search for active game sessions. You can use either the fleet ID or ARN
   *             value. Each request must reference either a fleet ID or alias ID, but not both.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p>A unique identifier for the alias associated with the fleet to search for active game sessions. You can use either
   *             the alias ID or ARN value. Each request must reference either a fleet ID or alias ID,
   *             but not both.</p>
   * @public
   */
  AliasId?: string | undefined;

  /**
   * <p>A fleet location to search for game sessions. You can specify a fleet's home Region or
   *             a remote location. Use the Amazon Web Services Region code format, such as <code>us-west-2</code>.
   *         </p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>String containing the search criteria for the session search. If no filter expression
   *             is included, the request returns results for all game sessions in the fleet that are in
   *                 <code>ACTIVE</code> status.</p>
   *          <p>A filter expression can contain one or multiple conditions. Each condition consists of
   *             the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Operand</b> -- Name of a game session attribute.
   *                     Valid values are <code>gameSessionName</code>, <code>gameSessionId</code>,
   *                         <code>gameSessionProperties</code>, <code>maximumSessions</code>,
   *                         <code>creationTimeMillis</code>, <code>playerSessionCount</code>,
   *                         <code>hasAvailablePlayerSessions</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Comparator</b> -- Valid comparators are:
   *                         <code>=</code>, <code><></code>, <code><</code>, <code>></code>,
   *                         <code><=</code>, <code>>=</code>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Value</b> -- Value to be searched for. Values may
   *                     be numbers, boolean values (true/false) or strings depending on the operand.
   *                     String values are case sensitive and must be enclosed in single quotes. Special
   *                     characters must be escaped. Boolean and string values can only be used with the
   *                     comparators <code>=</code> and <code><></code>. For example, the following
   *                     filter expression searches on <code>gameSessionName</code>:
   *                         "<code>FilterExpression": "gameSessionName = 'Matt\\'s Awesome Game
   *                         1'"</code>. </p>
   *             </li>
   *          </ul>
   *          <p>To chain multiple conditions in a single expression, use the logical keywords
   *                 <code>AND</code>, <code>OR</code>, and <code>NOT</code> and parentheses as needed.
   *             For example: <code>x AND y AND NOT z</code>, <code>NOT (x OR y)</code>.</p>
   *          <p>Session search evaluates conditions from left to right using the following precedence
   *             rules:</p>
   *          <ol>
   *             <li>
   *                <p>
   *                   <code>=</code>, <code><></code>, <code><</code>, <code>></code>,
   *                         <code><=</code>, <code>>=</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Parentheses</p>
   *             </li>
   *             <li>
   *                <p>NOT</p>
   *             </li>
   *             <li>
   *                <p>AND</p>
   *             </li>
   *             <li>
   *                <p>OR</p>
   *             </li>
   *          </ol>
   *          <p>For example, this filter expression retrieves game sessions hosting at least ten
   *             players that have an open player slot: <code>"maximumSessions>=10 AND
   *                 hasAvailablePlayerSessions=true"</code>. </p>
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * <p>Instructions on how to sort the search results. If no sort expression is included, the
   *             request returns results in random order. A sort expression consists of the following
   *             elements:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Operand</b> -- Name of a game session attribute.
   *                     Valid values are <code>gameSessionName</code>, <code>gameSessionId</code>,
   *                         <code>gameSessionProperties</code>, <code>maximumSessions</code>,
   *                         <code>creationTimeMillis</code>, <code>playerSessionCount</code>,
   *                         <code>hasAvailablePlayerSessions</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Order</b> -- Valid sort orders are <code>ASC</code>
   *                     (ascending) and <code>DESC</code> (descending).</p>
   *             </li>
   *          </ul>
   *          <p>For example, this sort expression returns the oldest active sessions first:
   *                 <code>"SortExpression": "creationTimeMillis ASC"</code>. Results with a null value
   *             for the sort operand are returned at the end of the list.</p>
   * @public
   */
  SortExpression?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. The maximum number of results returned is 20, even if this value is not set or
   *             is set higher than 20. </p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchGameSessionsOutput {
  /**
   * <p>A collection of objects containing game session properties for each session that
   *             matches the request.</p>
   * @public
   */
  GameSessions?: GameSession[] | undefined;

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartFleetActionsInput {
  /**
   * <p>A unique identifier for the fleet to restart actions on. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>List of actions to restart on the fleet.</p>
   * @public
   */
  Actions: FleetAction[] | undefined;

  /**
   * <p>The fleet location to restart fleet actions for. Specify a location in the form of an
   *             Amazon Web Services Region code, such as <code>us-west-2</code>.</p>
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface StartFleetActionsOutput {
  /**
   * <p>A unique identifier for the fleet to restart actions on.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string | undefined;
}

/**
 * @public
 */
export interface StartGameSessionPlacementInput {
  /**
   * <p>A unique identifier to assign to the new game session placement. This value is
   *             developer-defined. The value must be unique across all Regions and cannot be
   *             reused.</p>
   * @public
   */
  PlacementId: string | undefined;

  /**
   * <p>Name of the queue to use to place the new game session. You can use either the queue
   *             name or ARN value. </p>
   * @public
   */
  GameSessionQueueName: string | undefined;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>.</p>
   * @public
   */
  GameProperties?: GameProperty[] | undefined;

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   * @public
   */
  MaximumPlayerSessionCount: number | undefined;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   * @public
   */
  GameSessionName?: string | undefined;

  /**
   * <p>A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to @aws; Regions. This information is used to try to place the new game session where it
   *             can offer the best possible gameplay experience for the players. </p>
   * @public
   */
  PlayerLatencies?: PlayerLatency[] | undefined;

  /**
   * <p>Set of information on each player to create a player session for.</p>
   * @public
   */
  DesiredPlayerSessions?: DesiredPlayerSession[] | undefined;

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a>.</p>
   * @public
   */
  GameSessionData?: string | undefined;
}

/**
 * @public
 */
export interface StartGameSessionPlacementOutput {
  /**
   * <p>Object that describes the newly created game session placement. This object includes
   *             all the information provided in the request, as well as start/end time stamps and
   *             placement status. </p>
   * @public
   */
  GameSessionPlacement?: GameSessionPlacement | undefined;
}

/**
 * @public
 */
export interface StartMatchBackfillInput {
  /**
   * <p>A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of a
   *             UUID. Use this identifier to track the match backfill ticket status and retrieve match
   *             results.</p>
   * @public
   */
  TicketId?: string | undefined;

  /**
   * <p>Name of the matchmaker to use for this request. You can use either the configuration
   *             name or ARN value. The ARN of the matchmaker that was used with the original game
   *             session is listed in the <code>GameSession</code> object, <code>MatchmakerData</code>
   *             property.</p>
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * <p>A unique identifier for the game session. Use the game session ID. When using FlexMatch as a standalone matchmaking
   *             solution, this parameter is not needed. </p>
   * @public
   */
  GameSessionArn?: string | undefined;

  /**
   * <p>Match information on all players that are currently assigned to the game session. This
   *             information is used by the matchmaker to find new players and add them to the existing
   *             game.</p>
   *          <p>You can include up to 199 <code>Players</code> in a <code>StartMatchBackfill</code>
   *             request.</p>
   *          <ul>
   *             <li>
   *                <p>PlayerID, PlayerAttributes, Team -- This information is maintained in the
   *                         <code>GameSession</code> object, <code>MatchmakerData</code> property, for
   *                     all players who are currently assigned to the game session. The matchmaker data
   *                     is in JSON syntax, formatted as a string. For more details, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data">
   *                         Match Data</a>. </p>
   *                <p>The backfill request must specify the team membership for every player. Do not
   *                     specify team if you are not using backfill.</p>
   *             </li>
   *             <li>
   *                <p>LatencyInMs -- If the matchmaker uses player latency, include a latency value,
   *                     in milliseconds, for the Region that the game session is currently in. Do not
   *                     include latency values for any other Region.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Players: Player[] | undefined;
}

/**
 * @public
 */
export interface StartMatchBackfillOutput {
  /**
   * <p>Ticket representing the backfill matchmaking request. This object includes the
   *             information in the request, ticket status, and match results as generated during the
   *             matchmaking process.</p>
   * @public
   */
  MatchmakingTicket?: MatchmakingTicket | undefined;
}

/**
 * @public
 */
export interface StartMatchmakingInput {
  /**
   * <p>A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of a
   *             UUID. Use this identifier to track the matchmaking ticket status and retrieve match
   *             results.</p>
   * @public
   */
  TicketId?: string | undefined;

  /**
   * <p>Name of the matchmaking configuration to use for this request. Matchmaking
   *             configurations must exist in the same Region as this request. You can use either the
   *             configuration name or ARN value.</p>
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * <p>Information on each player to be matched. This information must include a player ID,
   *             and may contain player attributes and latency data to be used in the matchmaking
   *             process. After a successful match, <code>Player</code> objects contain the name of the
   *             team the player is assigned to.</p>
   *          <p>You can include up to 10 <code>Players</code> in a <code>StartMatchmaking</code>
   *             request.</p>
   * @public
   */
  Players: Player[] | undefined;
}

/**
 * @public
 */
export interface StartMatchmakingOutput {
  /**
   * <p>Ticket representing the matchmaking request. This object include the information
   *             included in the request, ticket status, and match results as generated during the
   *             matchmaking process.</p>
   * @public
   */
  MatchmakingTicket?: MatchmakingTicket | undefined;
}

/**
 * @public
 */
export interface StopFleetActionsInput {
  /**
   * <p>A unique identifier for the fleet to stop actions on. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>List of actions to suspend on the fleet. </p>
   * @public
   */
  Actions: FleetAction[] | undefined;

  /**
   * <p>The fleet location to stop fleet actions for. Specify a location in the form of an
   *             Amazon Web Services Region code, such as <code>us-west-2</code>.</p>
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface StopFleetActionsOutput {
  /**
   * <p>A unique identifier for the fleet to stop actions on.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string | undefined;
}

/**
 * @public
 */
export interface StopGameSessionPlacementInput {
  /**
   * <p>A unique identifier for a game session placement to stop.</p>
   * @public
   */
  PlacementId: string | undefined;
}

/**
 * @public
 */
export interface StopGameSessionPlacementOutput {
  /**
   * <p>Object that describes the canceled game session placement, with <code>CANCELLED</code>
   *             status and an end time stamp. </p>
   * @public
   */
  GameSessionPlacement?: GameSessionPlacement | undefined;
}

/**
 * @public
 */
export interface StopMatchmakingInput {
  /**
   * <p>A unique identifier for a matchmaking ticket.</p>
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
   * <p>A unique identifier for the game server group. Use either the name or ARN value.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The activity to suspend for this game server group.</p>
   * @public
   */
  SuspendActions: GameServerGroupAction[] | undefined;
}

/**
 * @public
 */
export interface SuspendGameServerGroupOutput {
  /**
   * <p>An object that describes the game server group resource, with the
   *                 <code>SuspendedActions</code> property updated to reflect the suspended
   *             activity.</p>
   * @public
   */
  GameServerGroup?: GameServerGroup | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that uniquely identifies
   *             the Amazon GameLift resource that you want to assign tags to. Amazon GameLift includes resource ARNs in
   *             the data object for the resource. You can retrieve the ARN by calling a
   *                 <code>List</code> or <code>Describe</code> operation for the resource type. </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of one or more tags to assign to the specified Amazon GameLift resource. Tags are
   *             developer-defined and structured as key-value pairs. The maximum tag limit may be lower
   *             than stated. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">
   *                 Tagging Amazon Web Services Resources</a> for tagging limits.</p>
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
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that uniquely identifies
   *             the Amazon GameLift resource that you want to remove tags from. Amazon GameLift includes resource ARNs in
   *             the data object for the resource. You can retrieve the ARN by calling a
   *                 <code>List</code> or <code>Describe</code> operation for the resource type. </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of one or more tag keys to remove from the specified Amazon GameLift resource. </p>
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
   * <p>A unique identifier for the alias that you want to update. You can use either the
   *             alias ID or ARN value.</p>
   * @public
   */
  AliasId: string | undefined;

  /**
   * <p>A descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A human-readable description of the alias.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The routing configuration, including routing type and fleet target, for the
   *             alias.</p>
   * @public
   */
  RoutingStrategy?: RoutingStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateAliasOutput {
  /**
   * <p>The updated alias resource.</p>
   * @public
   */
  Alias?: Alias | undefined;
}

/**
 * @public
 */
export interface UpdateBuildInput {
  /**
   * <p>A unique identifier for the build to update. You can use either the build ID or ARN value. </p>
   * @public
   */
  BuildId: string | undefined;

  /**
   * <p>A descriptive label that is associated with a build. Build names do not need to be unique. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Version information that is associated with a build or script. Version strings do not need to be unique.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBuildOutput {
  /**
   * <p>The updated build resource.</p>
   * @public
   */
  Build?: Build | undefined;
}

/**
 * @public
 */
export interface UpdateContainerFleetInput {
  /**
   * <p>A unique identifier for the container fleet to update. You can use either the fleet ID
   *             or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The name or ARN value of a new game server container group definition to deploy on the
   *             fleet. If you're updating the fleet to a specific version of a container group
   *             definition, use the ARN value and include the version number. If you're updating the
   *             fleet to the latest version of a container group definition, you can use the name value.
   *             You can't remove a fleet's game server container group definition, you can only update
   *             or replace it with another definition.</p>
   *          <p>Update a container group definition by calling <a>UpdateContainerGroupDefinition</a>. This operation creates a <a>ContainerGroupDefinition</a> resource with an incremented version. </p>
   * @public
   */
  GameServerContainerGroupDefinitionName?: string | undefined;

  /**
   * <p>The name or ARN value of a new per-instance container group definition to deploy on
   *             the fleet. If you're updating the fleet to a specific version of a container group
   *             definition, use the ARN value and include the version number. If you're updating the
   *             fleet to the latest version of a container group definition, you can use the name
   *             value.</p>
   *          <p>Update a container group definition by calling <a>UpdateContainerGroupDefinition</a>. This operation creates a <a>ContainerGroupDefinition</a> resource with an incremented version. </p>
   *          <p>To remove a fleet's per-instance container group definition, leave this parameter empty
   *             and use the parameter <code>RemoveAttributes</code>.</p>
   * @public
   */
  PerInstanceContainerGroupDefinitionName?: string | undefined;

  /**
   * <p>The number of times to replicate the game server container group on each fleet
   *             instance. By default, Amazon GameLift calculates the maximum number of game server container
   *             groups that can fit on each instance. You can remove this property value to use the
   *             calculated value, or set it manually. If you set this number manually, Amazon GameLift uses your
   *             value as long as it's less than the calculated maximum.</p>
   * @public
   */
  GameServerContainerGroupsPerInstance?: number | undefined;

  /**
   * <p>A revised set of port numbers to open on each fleet instance. By default, Amazon GameLift
   *             calculates an optimal port range based on your fleet configuration. If you previously
   *             set this parameter manually, you can't reset this to use the calculated settings.</p>
   * @public
   */
  InstanceConnectionPortRange?: ConnectionPortRange | undefined;

  /**
   * <p>A set of ports to add to the container fleet's inbound permissions.</p>
   * @public
   */
  InstanceInboundPermissionAuthorizations?: IpPermission[] | undefined;

  /**
   * <p>A set of ports to remove from the container fleet's inbound permissions.</p>
   * @public
   */
  InstanceInboundPermissionRevocations?: IpPermission[] | undefined;

  /**
   * <p>Instructions for how to deploy updates to a container fleet, if the fleet update
   *             initiates a deployment. The deployment configuration lets you determine how to replace
   *             fleet instances and what actions to take if the deployment fails.</p>
   * @public
   */
  DeploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * <p>A meaningful description of the container fleet.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of an Amazon Web Services CloudWatch metric group to add this fleet to.  </p>
   * @public
   */
  MetricGroups?: string[] | undefined;

  /**
   * <p>The game session protection policy to apply to all new game sessions that are started
   *             in this fleet. Game sessions that already exist are not affected. </p>
   * @public
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy | undefined;

  /**
   * <p>A policy that limits the number of game sessions that each individual player can create
   *             on instances in this fleet. The limit applies for a specified span of time.</p>
   * @public
   */
  GameSessionCreationLimitPolicy?: GameSessionCreationLimitPolicy | undefined;

  /**
   * <p>The method for collecting container logs for the fleet. </p>
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * <p>If set, this update removes a fleet's per-instance container group definition. You
   *             can't remove a fleet's game server container group definition.</p>
   * @public
   */
  RemoveAttributes?: ContainerFleetRemoveAttribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateContainerFleetOutput {
  /**
   * <p>A collection of container fleet objects for all fleets that match the request
   *             criteria.</p>
   * @public
   */
  ContainerFleet?: ContainerFleet | undefined;
}

/**
 * @public
 */
export interface UpdateContainerGroupDefinitionInput {
  /**
   * <p>A descriptive identifier for the container group definition. The name value must be unique in an Amazon Web Services Region.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An updated definition for the game server container in this group. Define a game server
   *       container only when the container group type is <code>GAME_SERVER</code>. You can pass in your
   *       container definitions as a JSON file.</p>
   * @public
   */
  GameServerContainerDefinition?: GameServerContainerDefinitionInput | undefined;

  /**
   * <p>One or more definitions for support containers in this group. You can define a support
   *       container in any type of container group. You can pass in your container definitions as a JSON
   *       file.</p>
   * @public
   */
  SupportContainerDefinitions?: SupportContainerDefinitionInput[] | undefined;

  /**
   * <p>The maximum amount of memory (in MiB) to allocate to the container group. All containers in
   *       the group share this memory. If you specify memory limits for an individual container, the
   *       total value must be greater than any individual container's memory limit.</p>
   * @public
   */
  TotalMemoryLimitMebibytes?: number | undefined;

  /**
   * <p>The maximum amount of vCPU units to allocate to the container group (1 vCPU is equal to 1024
   *       CPU units). All containers in the group share this memory. If you specify vCPU limits for
   *       individual containers, the total value must be equal to or greater than the sum of the CPU
   *       limits for all containers in the group.</p>
   * @public
   */
  TotalVcpuLimit?: number | undefined;

  /**
   * <p>A description for this update to the container group definition. </p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The container group definition version to update. The new version starts with values from
   *       the source version, and then updates values included in this request. </p>
   * @public
   */
  SourceVersionNumber?: number | undefined;

  /**
   * <p>The platform that all containers in the group use. Containers in a group must run on the
   *       same operating system.</p>
   *          <note>
   *             <p>Amazon Linux 2 (AL2) will reach end of support on 6/30/2025. See more details in the <a href="https://aws.amazon.com/amazon-linux-2/faqs/">Amazon Linux 2 FAQs</a>. For game
   *         servers that are hosted on AL2 and use Amazon GameLift server SDK 4.x, first update the game
   *         server build to server SDK 5.x, and then deploy to AL2023 instances. See <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html"> Migrate to
   *           Amazon GameLift server SDK version 5.</a>
   *             </p>
   *          </note>
   * @public
   */
  OperatingSystem?: ContainerOperatingSystem | undefined;
}

/**
 * @public
 */
export interface UpdateContainerGroupDefinitionOutput {
  /**
   * <p>The properties of the updated container group definition version.</p>
   * @public
   */
  ContainerGroupDefinition?: ContainerGroupDefinition | undefined;
}

/**
 * @public
 */
export interface UpdateFleetAttributesInput {
  /**
   * <p>A unique identifier for the fleet to update attribute metadata for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A human-readable description of a fleet.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The game session protection policy to apply to all new game sessions created in this
   *             fleet. Game sessions that already exist are not affected. You can set protection for
   *             individual game sessions using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NoProtection</b> -- The game session can be
   *                     terminated during a scale-down event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FullProtection</b> -- If the game session is in an
   *                         <code>ACTIVE</code> status, it cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy | undefined;

  /**
   * <p>Policy settings that limit the number of game sessions an individual player can create
   *             over a span of time. </p>
   * @public
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy | undefined;

  /**
   * <p>The name of a metric group to add this fleet to. Use a metric group in Amazon
   *             CloudWatch to aggregate the metrics from multiple fleets. Provide an existing metric
   *             group name, or create a new metric group by providing a new name. A fleet can only be in
   *             one metric group at a time.</p>
   * @public
   */
  MetricGroups?: string[] | undefined;

  /**
   * <p>Amazon GameLift Anywhere configuration options.</p>
   * @public
   */
  AnywhereConfiguration?: AnywhereConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFleetAttributesOutput {
  /**
   * <p>A unique identifier for the fleet that was updated.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFleetCapacityInput {
  /**
   * <p>A unique identifier for the fleet to update capacity settings for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The number of Amazon EC2 instances you want to maintain in the specified fleet location.
   *             This value must fall between the minimum and maximum size limits. Changes in desired
   *             instance value can take up to 1 minute to be reflected when viewing the fleet's capacity
   *             settings.</p>
   * @public
   */
  DesiredInstances?: number | undefined;

  /**
   * <p>The minimum number of instances that are allowed in the specified fleet location. If
   *             this parameter is not set, the default is 0.</p>
   * @public
   */
  MinSize?: number | undefined;

  /**
   * <p>The maximum number of instances that are allowed in the specified fleet location. If
   *             this parameter is not set, the default is 1.</p>
   * @public
   */
  MaxSize?: number | undefined;

  /**
   * <p>The name of a remote location to update fleet capacity settings for, in the form of an
   *             Amazon Web Services Region code such as <code>us-west-2</code>.</p>
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFleetCapacityOutput {
  /**
   * <p>A unique identifier for the fleet that was updated.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. </p>
   * @public
   */
  FleetArn?: string | undefined;

  /**
   * <p>The remote location being updated, expressed as an Amazon Web Services Region code, such as
   *             <code>us-west-2</code>.</p>
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFleetPortSettingsInput {
  /**
   * <p>A unique identifier for the fleet to update port settings for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A collection of port settings to be added to the fleet resource.</p>
   * @public
   */
  InboundPermissionAuthorizations?: IpPermission[] | undefined;

  /**
   * <p>A collection of port settings to be removed from the fleet resource.</p>
   * @public
   */
  InboundPermissionRevocations?: IpPermission[] | undefined;
}

/**
 * @public
 */
export interface UpdateFleetPortSettingsOutput {
  /**
   * <p>A unique identifier for the fleet that was updated.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GameServerHealthCheck = {
  HEALTHY: "HEALTHY",
} as const;

/**
 * @public
 */
export type GameServerHealthCheck = (typeof GameServerHealthCheck)[keyof typeof GameServerHealthCheck];

/**
 * @public
 */
export interface UpdateGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server to update.</p>
   * @public
   */
  GameServerId: string | undefined;

  /**
   * <p>A set of custom game server properties, formatted as a single string value. This data
   *             is passed to a game client or service when it requests information on game servers. </p>
   * @public
   */
  GameServerData?: string | undefined;

  /**
   * <p>Indicates if the game server is available or is currently hosting gameplay. You can
   *             update a game server status from <code>AVAILABLE</code> to <code>UTILIZED</code>, but
   *             you can't change a the status from <code>UTILIZED</code> to
   *             <code>AVAILABLE</code>.</p>
   * @public
   */
  UtilizationStatus?: GameServerUtilizationStatus | undefined;

  /**
   * <p>Indicates health status of the game server. A request that includes this parameter
   *             updates the game server's <i>LastHealthCheckTime</i> timestamp. </p>
   * @public
   */
  HealthCheck?: GameServerHealthCheck | undefined;
}

/**
 * @public
 */
export interface UpdateGameServerOutput {
  /**
   * <p>Object that describes the newly updated game server.</p>
   * @public
   */
  GameServer?: GameServer | undefined;
}

/**
 * @public
 */
export interface UpdateGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the name or ARN value.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that
   *             allows Amazon GameLift to access your Amazon EC2 Auto Scaling groups.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>An updated list of Amazon EC2 instance types to use in the Auto Scaling group. The instance
   *             definitions must specify at least two different instance types that are supported by
   *             Amazon GameLift FleetIQ. This updated list replaces the entire current list of instance definitions for
   *             the game server group. For more information on instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">EC2 Instance
   *                 Types</a> in the <i>Amazon EC2 User Guide</i>. You can optionally
   *             specify capacity weighting for each instance type. If no weight value is specified for
   *             an instance type, it is set to the default value "1". For more information about
   *             capacity weighting, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html"> Instance Weighting for
   *                 Amazon EC2 Auto Scaling</a> in the Amazon EC2 Auto Scaling User Guide.</p>
   * @public
   */
  InstanceDefinitions?: InstanceDefinition[] | undefined;

  /**
   * <p>A flag that indicates whether instances in the game server group are protected
   *             from early termination. Unprotected instances that have active game servers running might
   *             be terminated during a scale-down event, causing players to be dropped from the game.
   *             Protected instances cannot be terminated while there are active game servers running except
   *             in the event of a forced game server group deletion (see ). An exception to this is with Spot
   *             Instances, which can be terminated by Amazon Web Services regardless of protection status. This property is set to <code>NO_PROTECTION</code> by default.</p>
   * @public
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy | undefined;

  /**
   * <p>Indicates how Amazon GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the
   *             game server group. Method options include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SPOT_ONLY</code> - Only Spot Instances are used in the game server group. If Spot
   *                     Instances are unavailable or not viable for game hosting, the game server group
   *                     provides no hosting capacity until Spot Instances can again be used. Until then,
   *                     no new instances are started, and the existing nonviable Spot Instances are
   *                     terminated (after current gameplay ends) and are not replaced.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPOT_PREFERRED</code> - (default value) Spot Instances are used whenever available in
   *                     the game server group. If Spot Instances are unavailable, the game server group
   *                     continues to provide hosting capacity by falling back to On-Demand Instances.
   *                     Existing nonviable Spot Instances are terminated (after current gameplay ends)
   *                     and are replaced with new On-Demand Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON_DEMAND_ONLY</code> - Only On-Demand Instances are used in the game
   *                     server group. No Spot Instances are used, even when available, while this
   *                     balancing strategy is in force.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BalancingStrategy?: BalancingStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateGameServerGroupOutput {
  /**
   * <p>An object that describes the game server group resource with updated properties.
   *         </p>
   * @public
   */
  GameServerGroup?: GameServerGroup | undefined;
}

/**
 * @public
 */
export interface UpdateGameSessionInput {
  /**
   * <p>A unique identifier for the game session to update. </p>
   * @public
   */
  GameSessionId: string | undefined;

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   * @public
   */
  MaximumPlayerSessionCount?: number | undefined;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A policy that determines whether the game session is accepting new players.</p>
   * @public
   */
  PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy | undefined;

  /**
   * <p>Game session protection policy to apply to this game session only.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NoProtection</b> -- The game session can be
   *                     terminated during a scale-down event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FullProtection</b> -- If the game session is in an
   *                         <code>ACTIVE</code> status, it cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ProtectionPolicy?: ProtectionPolicy | undefined;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>.
   *         You can use this parameter to modify game properties in an active game session.
   *         This action adds new properties and modifies existing properties.
   *         There is no way to delete properties.
   *         For an example, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#game-properties-update">Update the value of a game property</a>.
   *       </p>
   * @public
   */
  GameProperties?: GameProperty[] | undefined;
}

/**
 * @public
 */
export interface UpdateGameSessionOutput {
  /**
   * <p>The updated game session properties.</p>
   * @public
   */
  GameSession?: GameSession | undefined;
}

/**
 * @public
 */
export interface UpdateGameSessionQueueInput {
  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.</p>
   * @public
   */
  TimeoutInSeconds?: number | undefined;

  /**
   * <p>A set of policies that enforce a sliding cap on player latency when processing game sessions placement requests.
   * 	Use multiple policies to gradually relax the cap over time if Amazon GameLift can't make a placement.
   * 	    Policies are evaluated in order starting with the lowest maximum latency value. When updating policies, provide a complete collection of policies.</p>
   * @public
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[] | undefined;

  /**
   * <p>A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.
   *     Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference. When updating this list, provide a complete list of destinations.</p>
   * @public
   */
  Destinations?: GameSessionQueueDestination[] | undefined;

  /**
   * <p>A list of locations where a queue is allowed to place new game sessions. Locations
   *             are specified in the form of Amazon Web Services Region codes, such as <code>us-west-2</code>. If this parameter is
   *             not set, game sessions can be placed in any queue location. To remove an existing filter configuration, pass in an empty set.</p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * <p>Custom settings to use when prioritizing destinations and locations for game session placements. This
   *             configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly
   *             named will be automatically applied at the end of the prioritization process. To remove an existing priority configuration, pass in an empty set.</p>
   * @public
   */
  PriorityConfiguration?: PriorityConfiguration | undefined;

  /**
   * <p>Information to be added to all events that are related to this game session
   *             queue.</p>
   * @public
   */
  CustomEventData?: string | undefined;

  /**
   * <p>An SNS topic ARN that is set up to receive game session placement notifications. See
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queue-notification.html"> Setting up
   *                 notifications for game session placement</a>.</p>
   * @public
   */
  NotificationTarget?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGameSessionQueueOutput {
  /**
   * <p>An object that describes the newly updated game session queue.</p>
   * @public
   */
  GameSessionQueue?: GameSessionQueue | undefined;
}

/**
 * @public
 */
export interface UpdateMatchmakingConfigurationInput {
  /**
   * <p>A unique identifier for the matchmaking configuration to update. You can use either the configuration name or ARN value. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for the matchmaking configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::gamesessionqueue/<queue name></code>. Queues can be located in any Region. Queues are used to start new
   *             Amazon GameLift-hosted game sessions for matches that are created with this matchmaking
   *             configuration. If <code>FlexMatchMode</code> is set to <code>STANDALONE</code>, do not
   *             set this parameter.</p>
   * @public
   */
  GameSessionQueueArns?: string[] | undefined;

  /**
   * <p>The maximum duration, in seconds, that a matchmaking ticket can remain in process
   *             before timing out. Requests that fail due to timing out can be resubmitted as
   *             needed.</p>
   * @public
   */
  RequestTimeoutSeconds?: number | undefined;

  /**
   * <p>The length of time (in seconds) to wait for players to accept a proposed match, if
   *             acceptance is required.</p>
   * @public
   */
  AcceptanceTimeoutSeconds?: number | undefined;

  /**
   * <p>A flag that indicates whether a match that was created with this configuration must be
   *             accepted by the matched players. To require acceptance, set to TRUE. With this option
   *             enabled, matchmaking tickets use the status <code>REQUIRES_ACCEPTANCE</code> to indicate
   *             when a completed potential match is waiting for player acceptance. </p>
   * @public
   */
  AcceptanceRequired?: boolean | undefined;

  /**
   * <p>A unique identifier for the matchmaking rule set to use with this configuration. You can use either the rule set name or ARN
   *             value. A matchmaking configuration can only use rule sets that are defined in the same
   *             Region.</p>
   * @public
   */
  RuleSetName?: string | undefined;

  /**
   * <p>An SNS topic ARN that is set up to receive matchmaking notifications. See <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html">
   *                 Setting up notifications for matchmaking</a> for more information.</p>
   * @public
   */
  NotificationTarget?: string | undefined;

  /**
   * <p>The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies
   *             a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match. This parameter is not used if <code>FlexMatchMode</code> is set to
   *                 <code>STANDALONE</code>.</p>
   * @public
   */
  AdditionalPlayerCount?: number | undefined;

  /**
   * <p>Information to add to all events related to the matchmaking configuration. </p>
   * @public
   */
  CustomEventData?: string | undefined;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>. This information is added to the new <code>GameSession</code> object that is
   *             created for a successful match. This parameter is not used if <code>FlexMatchMode</code>
   *             is set to <code>STANDALONE</code>.</p>
   * @public
   */
  GameProperties?: GameProperty[] | undefined;

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a>. This information is added to the game session
   *             that is created for a successful match. This parameter is not used if
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   * @public
   */
  GameSessionData?: string | undefined;

  /**
   * <p>The method that is used to backfill game sessions created with this matchmaking
   *             configuration. Specify MANUAL when your game manages backfill requests manually or does
   *             not use the match backfill feature. Specify AUTOMATIC to have GameLift create a match backfill
   *             request whenever a game session has one or more open
   *             slots. Learn more about manual and automatic backfill in <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html">Backfill Existing Games
   *                 with FlexMatch</a>. Automatic backfill is not available when
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   * @public
   */
  BackfillMode?: BackfillMode | undefined;

  /**
   * <p>Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or
   *             as a standalone matchmaking solution. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>STANDALONE</b> - FlexMatch forms matches and
   *                     returns match information, including players and team assignments, in a <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded"> MatchmakingSucceeded</a> event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>WITH_QUEUE</b> - FlexMatch forms matches and uses
   *                     the specified Amazon GameLift queue to start a game session for the match. </p>
   *             </li>
   *          </ul>
   * @public
   */
  FlexMatchMode?: FlexMatchMode | undefined;
}

/**
 * @public
 */
export interface UpdateMatchmakingConfigurationOutput {
  /**
   * <p>The updated matchmaking configuration.</p>
   * @public
   */
  Configuration?: MatchmakingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRuntimeConfigurationInput {
  /**
   * <p>A unique identifier for the fleet to update runtime configuration for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>Instructions for launching server processes on fleet computes. Server processes run
   *             either a custom game build executable or a Realtime Servers script. The runtime configuration lists
   *             the types of server processes to run, how to launch them, and the number of processes to
   *             run concurrently.</p>
   * @public
   */
  RuntimeConfiguration: RuntimeConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRuntimeConfigurationOutput {
  /**
   * <p>The runtime configuration currently in use by computes in the fleet. If the update is
   *             successful, all property changes are shown. </p>
   * @public
   */
  RuntimeConfiguration?: RuntimeConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateScriptInput {
  /**
   * <p>A unique identifier for the Realtime script to update. You can use either the script ID or ARN value.</p>
   * @public
   */
  ScriptId: string | undefined;

  /**
   * <p>A descriptive label that is associated with a script. Script names do not need to be unique.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Version information that is associated with a build or script. Version strings do not need to be unique.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is
   *             stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the
   *             "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3
   *             bucket must be in the same Region where you want to create a new script. By default,
   *             Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning
   *             turned on, you can use the <code>ObjectVersion</code> parameter to specify an earlier
   *             version. </p>
   * @public
   */
  StorageLocation?: S3Location | undefined;

  /**
   * <p>A data object containing your Realtime scripts and dependencies as a zip file. The zip
   *             file can have one or multiple files. Maximum size of a zip file is 5 MB.</p>
   *          <p>When using the Amazon Web Services CLI tool to create a script, this parameter is set to the zip
   *             file name. It must be prepended with the string "fileb://" to indicate that the file
   *             data is a binary object. For example: <code>--zip-file
   *                 fileb://myRealtimeScript.zip</code>.</p>
   * @public
   */
  ZipFile?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateScriptOutput {
  /**
   * <p>The newly created script record with a unique script ID. The new script's storage
   *             location reflects an Amazon S3 location: (1) If the script was uploaded from an S3 bucket
   *             under your account, the storage location reflects the information that was provided in
   *             the <i>CreateScript</i> request; (2) If the script file was uploaded from
   *             a local zip file, the storage location reflects an S3 location controls by the Amazon GameLift
   *             service.</p>
   * @public
   */
  Script?: Script | undefined;
}

/**
 * @public
 */
export interface ValidateMatchmakingRuleSetInput {
  /**
   * <p>A collection of matchmaking rules to validate, formatted as a JSON string.</p>
   * @public
   */
  RuleSetBody: string | undefined;
}

/**
 * @public
 */
export interface ValidateMatchmakingRuleSetOutput {
  /**
   * <p>A response indicating whether the rule set is valid.</p>
   * @public
   */
  Valid?: boolean | undefined;
}

/**
 * @internal
 */
export const ListContainerGroupDefinitionsOutputFilterSensitiveLog = (
  obj: ListContainerGroupDefinitionsOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContainerGroupDefinitionVersionsOutputFilterSensitiveLog = (
  obj: ListContainerGroupDefinitionVersionsOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterComputeInputFilterSensitiveLog = (obj: RegisterComputeInput): any => ({
  ...obj,
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RegisterComputeOutputFilterSensitiveLog = (obj: RegisterComputeOutput): any => ({
  ...obj,
  ...(obj.Compute && { Compute: ComputeFilterSensitiveLog(obj.Compute) }),
});

/**
 * @internal
 */
export const RequestUploadCredentialsOutputFilterSensitiveLog = (obj: RequestUploadCredentialsOutput): any => ({
  ...obj,
  ...(obj.UploadCredentials && { UploadCredentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchGameSessionsOutputFilterSensitiveLog = (obj: SearchGameSessionsOutput): any => ({
  ...obj,
  ...(obj.GameSessions && { GameSessions: obj.GameSessions.map((item) => GameSessionFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const StartGameSessionPlacementInputFilterSensitiveLog = (obj: StartGameSessionPlacementInput): any => ({
  ...obj,
  ...(obj.PlayerLatencies && {
    PlayerLatencies: obj.PlayerLatencies.map((item) => PlayerLatencyFilterSensitiveLog(item)),
  }),
  ...(obj.DesiredPlayerSessions && {
    DesiredPlayerSessions: obj.DesiredPlayerSessions.map((item) => DesiredPlayerSessionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const StartGameSessionPlacementOutputFilterSensitiveLog = (obj: StartGameSessionPlacementOutput): any => ({
  ...obj,
  ...(obj.GameSessionPlacement && {
    GameSessionPlacement: GameSessionPlacementFilterSensitiveLog(obj.GameSessionPlacement),
  }),
});

/**
 * @internal
 */
export const StartMatchBackfillInputFilterSensitiveLog = (obj: StartMatchBackfillInput): any => ({
  ...obj,
  ...(obj.Players && { Players: obj.Players.map((item) => PlayerFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const StartMatchBackfillOutputFilterSensitiveLog = (obj: StartMatchBackfillOutput): any => ({
  ...obj,
  ...(obj.MatchmakingTicket && { MatchmakingTicket: MatchmakingTicketFilterSensitiveLog(obj.MatchmakingTicket) }),
});

/**
 * @internal
 */
export const StartMatchmakingInputFilterSensitiveLog = (obj: StartMatchmakingInput): any => ({
  ...obj,
  ...(obj.Players && { Players: obj.Players.map((item) => PlayerFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const StartMatchmakingOutputFilterSensitiveLog = (obj: StartMatchmakingOutput): any => ({
  ...obj,
  ...(obj.MatchmakingTicket && { MatchmakingTicket: MatchmakingTicketFilterSensitiveLog(obj.MatchmakingTicket) }),
});

/**
 * @internal
 */
export const StopGameSessionPlacementOutputFilterSensitiveLog = (obj: StopGameSessionPlacementOutput): any => ({
  ...obj,
  ...(obj.GameSessionPlacement && {
    GameSessionPlacement: GameSessionPlacementFilterSensitiveLog(obj.GameSessionPlacement),
  }),
});

/**
 * @internal
 */
export const UpdateContainerFleetInputFilterSensitiveLog = (obj: UpdateContainerFleetInput): any => ({
  ...obj,
  ...(obj.InstanceConnectionPortRange && {
    InstanceConnectionPortRange: ConnectionPortRangeFilterSensitiveLog(obj.InstanceConnectionPortRange),
  }),
  ...(obj.InstanceInboundPermissionAuthorizations && {
    InstanceInboundPermissionAuthorizations: obj.InstanceInboundPermissionAuthorizations.map((item) =>
      IpPermissionFilterSensitiveLog(item)
    ),
  }),
  ...(obj.InstanceInboundPermissionRevocations && {
    InstanceInboundPermissionRevocations: obj.InstanceInboundPermissionRevocations.map((item) =>
      IpPermissionFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const UpdateContainerFleetOutputFilterSensitiveLog = (obj: UpdateContainerFleetOutput): any => ({
  ...obj,
  ...(obj.ContainerFleet && { ContainerFleet: ContainerFleetFilterSensitiveLog(obj.ContainerFleet) }),
});

/**
 * @internal
 */
export const UpdateContainerGroupDefinitionInputFilterSensitiveLog = (
  obj: UpdateContainerGroupDefinitionInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContainerGroupDefinitionOutputFilterSensitiveLog = (
  obj: UpdateContainerGroupDefinitionOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFleetPortSettingsInputFilterSensitiveLog = (obj: UpdateFleetPortSettingsInput): any => ({
  ...obj,
  ...(obj.InboundPermissionAuthorizations && {
    InboundPermissionAuthorizations: obj.InboundPermissionAuthorizations.map((item) =>
      IpPermissionFilterSensitiveLog(item)
    ),
  }),
  ...(obj.InboundPermissionRevocations && {
    InboundPermissionRevocations: obj.InboundPermissionRevocations.map((item) => IpPermissionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateGameSessionOutputFilterSensitiveLog = (obj: UpdateGameSessionOutput): any => ({
  ...obj,
  ...(obj.GameSession && { GameSession: GameSessionFilterSensitiveLog(obj.GameSession) }),
});
