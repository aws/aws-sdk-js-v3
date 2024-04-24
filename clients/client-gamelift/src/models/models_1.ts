// smithy-typescript generated code
import {
  Alias,
  AnywhereConfiguration,
  BackfillMode,
  BalancingStrategy,
  Build,
  DesiredPlayerSession,
  DesiredPlayerSessionFilterSensitiveLog,
  FilterConfiguration,
  FleetAction,
  FlexMatchMode,
  GameProperty,
  GameServer,
  GameServerGroup,
  GameServerGroupAction,
  GameServerProtectionPolicy,
  GameServerUtilizationStatus,
  GameSession,
  GameSessionFilterSensitiveLog,
  GameSessionPlacement,
  GameSessionPlacementFilterSensitiveLog,
  GameSessionQueue,
  GameSessionQueueDestination,
  InstanceDefinition,
  IpPermission,
  IpPermissionFilterSensitiveLog,
  MatchmakingConfiguration,
  MatchmakingTicket,
  MatchmakingTicketFilterSensitiveLog,
  Player,
  PlayerFilterSensitiveLog,
  PlayerLatency,
  PlayerLatencyFilterSensitiveLog,
  PlayerLatencyPolicy,
  PlayerSessionCreationPolicy,
  PriorityConfiguration,
  ProtectionPolicy,
  ResourceCreationLimitPolicy,
  RoutingStrategy,
  RuntimeConfiguration,
  S3Location,
  Script,
  Tag,
} from "./models_0";

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
  GameServerGroup?: GameServerGroup;
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
  FleetId?: string;

  /**
   * <p>A unique identifier for the alias associated with the fleet to search for active game sessions. You can use either
   *             the alias ID or ARN value. Each request must reference either a fleet ID or alias ID,
   *             but not both.</p>
   * @public
   */
  AliasId?: string;

  /**
   * <p>A fleet location to search for game sessions. You can specify a fleet's home Region or
   *             a remote location. Use the Amazon Web Services Region code format, such as <code>us-west-2</code>.
   *         </p>
   * @public
   */
  Location?: string;

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
  FilterExpression?: string;

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
  SortExpression?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. The maximum number of results returned is 20, even if this value is not set or
   *             is set higher than 20. </p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
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
  GameSessions?: GameSession[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
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
  Location?: string;
}

/**
 * @public
 */
export interface StartFleetActionsOutput {
  /**
   * <p>A unique identifier for the fleet to restart actions on.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;
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
  GameProperties?: GameProperty[];

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   * @public
   */
  MaximumPlayerSessionCount: number | undefined;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   * @public
   */
  GameSessionName?: string;

  /**
   * <p>A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to Amazon Web Services Regions. This information is used to try to place the new game session where it
   *             can offer the best possible gameplay experience for the players. </p>
   * @public
   */
  PlayerLatencies?: PlayerLatency[];

  /**
   * <p>Set of information on each player to create a player session for.</p>
   * @public
   */
  DesiredPlayerSessions?: DesiredPlayerSession[];

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <code>GameSession</code> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   * @public
   */
  GameSessionData?: string;
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
  GameSessionPlacement?: GameSessionPlacement;
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
  TicketId?: string;

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
  GameSessionArn?: string;

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
  MatchmakingTicket?: MatchmakingTicket;
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
  TicketId?: string;

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
  MatchmakingTicket?: MatchmakingTicket;
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
  Location?: string;
}

/**
 * @public
 */
export interface StopFleetActionsOutput {
  /**
   * <p>A unique identifier for the fleet to stop actions on.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;
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
  GameSessionPlacement?: GameSessionPlacement;
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
  GameServerGroup?: GameServerGroup;
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
  Name?: string;

  /**
   * <p>A human-readable description of the alias.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The routing configuration, including routing type and fleet target, for the
   *             alias.</p>
   * @public
   */
  RoutingStrategy?: RoutingStrategy;
}

/**
 * @public
 */
export interface UpdateAliasOutput {
  /**
   * <p>The updated alias resource.</p>
   * @public
   */
  Alias?: Alias;
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
   * <p>A descriptive label associated with a build. Build names don't need to be unique. </p>
   * @public
   */
  Name?: string;

  /**
   * <p>Version information associated with a build or script. Version strings don't need to be unique.</p>
   * @public
   */
  Version?: string;
}

/**
 * @public
 */
export interface UpdateBuildOutput {
  /**
   * <p>The updated build resource.</p>
   * @public
   */
  Build?: Build;
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
  Name?: string;

  /**
   * <p>A human-readable description of a fleet.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The game session protection policy to apply to all new game sessions created in this
   *             fleet. Game sessions that already exist are not affected. You can set protection for
   *             individual game sessions using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a> .</p>
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
  NewGameSessionProtectionPolicy?: ProtectionPolicy;

  /**
   * <p>Policy settings that limit the number of game sessions an individual player can create
   *             over a span of time. </p>
   * @public
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   * <p>The name of a metric group to add this fleet to. Use a metric group in Amazon
   *             CloudWatch to aggregate the metrics from multiple fleets. Provide an existing metric
   *             group name, or create a new metric group by providing a new name. A fleet can only be in
   *             one metric group at a time.</p>
   * @public
   */
  MetricGroups?: string[];

  /**
   * <p>Amazon GameLift Anywhere configuration options.</p>
   * @public
   */
  AnywhereConfiguration?: AnywhereConfiguration;
}

/**
 * @public
 */
export interface UpdateFleetAttributesOutput {
  /**
   * <p>A unique identifier for the fleet that was updated.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;
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
  DesiredInstances?: number;

  /**
   * <p>The minimum number of instances that are allowed in the specified fleet location. If
   *             this parameter is not set, the default is 0.</p>
   * @public
   */
  MinSize?: number;

  /**
   * <p>The maximum number of instances that are allowed in the specified fleet location. If
   *             this parameter is not set, the default is 1.</p>
   * @public
   */
  MaxSize?: number;

  /**
   * <p>The name of a remote location to update fleet capacity settings for, in the form of an
   *             Amazon Web Services Region code such as <code>us-west-2</code>.</p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface UpdateFleetCapacityOutput {
  /**
   * <p>A unique identifier for the fleet that was updated.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. </p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The remote location being updated, expressed as an Amazon Web Services Region code, such as
   *                 <code>us-west-2</code>.</p>
   * @public
   */
  Location?: string;
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
  InboundPermissionAuthorizations?: IpPermission[];

  /**
   * <p>A collection of port settings to be removed from the fleet resource.</p>
   * @public
   */
  InboundPermissionRevocations?: IpPermission[];
}

/**
 * @public
 */
export interface UpdateFleetPortSettingsOutput {
  /**
   * <p>A unique identifier for the fleet that was updated.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;
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
  GameServerData?: string;

  /**
   * <p>Indicates if the game server is available or is currently hosting gameplay. You can
   *             update a game server status from <code>AVAILABLE</code> to <code>UTILIZED</code>, but
   *             you can't change a the status from <code>UTILIZED</code> to
   *             <code>AVAILABLE</code>.</p>
   * @public
   */
  UtilizationStatus?: GameServerUtilizationStatus;

  /**
   * <p>Indicates health status of the game server. A request that includes this parameter
   *             updates the game server's <i>LastHealthCheckTime</i> timestamp. </p>
   * @public
   */
  HealthCheck?: GameServerHealthCheck;
}

/**
 * @public
 */
export interface UpdateGameServerOutput {
  /**
   * <p>Object that describes the newly updated game server.</p>
   * @public
   */
  GameServer?: GameServer;
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
  RoleArn?: string;

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
  InstanceDefinitions?: InstanceDefinition[];

  /**
   * <p>A flag that indicates whether instances in the game server group are protected
   *             from early termination. Unprotected instances that have active game servers running might
   *             be terminated during a scale-down event, causing players to be dropped from the game.
   *             Protected instances cannot be terminated while there are active game servers running except
   *             in the event of a forced game server group deletion (see ). An exception to this is with Spot
   *             Instances, which can be terminated by Amazon Web Services regardless of protection status. This property is set to <code>NO_PROTECTION</code> by default.</p>
   * @public
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy;

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
  BalancingStrategy?: BalancingStrategy;
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
  GameServerGroup?: GameServerGroup;
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
  MaximumPlayerSessionCount?: number;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A policy that determines whether the game session is accepting new players.</p>
   * @public
   */
  PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;

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
  ProtectionPolicy?: ProtectionPolicy;

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
  GameProperties?: GameProperty[];
}

/**
 * @public
 */
export interface UpdateGameSessionOutput {
  /**
   * <p>The updated game session properties.</p>
   * @public
   */
  GameSession?: GameSession;
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
   * <p>The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status. By default, this property is set to <code>600</code>.</p>
   * @public
   */
  TimeoutInSeconds?: number;

  /**
   * <p>A set of policies that act as a sliding cap on player latency. FleetIQ works to
   *             deliver low latency for most players in a game session. These policies ensure that no
   *             individual player can be placed into a game with unreasonably high latency. Use multiple
   *             policies to gradually relax latency requirements a step at a time. Multiple policies are applied based on their
   *             maximum allowed latency, starting with the lowest value. When updating policies, provide a complete collection of policies.</p>
   * @public
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[];

  /**
   * <p>A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.
   *     Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference. When updating this list, provide a complete list of destinations.</p>
   * @public
   */
  Destinations?: GameSessionQueueDestination[];

  /**
   * <p>A list of locations where a queue is allowed to place new game sessions. Locations
   *             are specified in the form of Amazon Web Services Region codes, such as <code>us-west-2</code>. If this parameter is
   *             not set, game sessions can be placed in any queue location. To remove an existing filter configuration, pass in an empty set.</p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration;

  /**
   * <p>Custom settings to use when prioritizing destinations and locations for game session placements. This
   *             configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly
   *             named will be automatically applied at the end of the prioritization process. To remove an existing priority configuration, pass in an empty set.</p>
   * @public
   */
  PriorityConfiguration?: PriorityConfiguration;

  /**
   * <p>Information to be added to all events that are related to this game session
   *             queue.</p>
   * @public
   */
  CustomEventData?: string;

  /**
   * <p>An SNS topic ARN that is set up to receive game session placement notifications. See
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queue-notification.html"> Setting up
   *                 notifications for game session placement</a>.</p>
   * @public
   */
  NotificationTarget?: string;
}

/**
 * @public
 */
export interface UpdateGameSessionQueueOutput {
  /**
   * <p>An object that describes the newly updated game session queue.</p>
   * @public
   */
  GameSessionQueue?: GameSessionQueue;
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
  Description?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::gamesessionqueue/<queue name></code>. Queues can be located in any Region. Queues are used to start new
   *             Amazon GameLift-hosted game sessions for matches that are created with this matchmaking
   *             configuration. If <code>FlexMatchMode</code> is set to <code>STANDALONE</code>, do not
   *             set this parameter.</p>
   * @public
   */
  GameSessionQueueArns?: string[];

  /**
   * <p>The maximum duration, in seconds, that a matchmaking ticket can remain in process
   *             before timing out. Requests that fail due to timing out can be resubmitted as
   *             needed.</p>
   * @public
   */
  RequestTimeoutSeconds?: number;

  /**
   * <p>The length of time (in seconds) to wait for players to accept a proposed match, if
   *             acceptance is required.</p>
   * @public
   */
  AcceptanceTimeoutSeconds?: number;

  /**
   * <p>A flag that indicates whether a match that was created with this configuration must be
   *             accepted by the matched players. To require acceptance, set to TRUE. With this option
   *             enabled, matchmaking tickets use the status <code>REQUIRES_ACCEPTANCE</code> to indicate
   *             when a completed potential match is waiting for player acceptance. </p>
   * @public
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>A unique identifier for the matchmaking rule set to use with this configuration. You can use either the rule set name or ARN
   *             value. A matchmaking configuration can only use rule sets that are defined in the same
   *             Region.</p>
   * @public
   */
  RuleSetName?: string;

  /**
   * <p>An SNS topic ARN that is set up to receive matchmaking notifications. See <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html">
   *                 Setting up notifications for matchmaking</a> for more information.</p>
   * @public
   */
  NotificationTarget?: string;

  /**
   * <p>The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies
   *             a match for a single 10-person team, and the additional player count is set to 2, 10 players will be selected for the match and 2 more player slots will be open for future players. This parameter is not used if <code>FlexMatchMode</code> is set to
   *                 <code>STANDALONE</code>.</p>
   * @public
   */
  AdditionalPlayerCount?: number;

  /**
   * <p>Information to add to all events related to the matchmaking configuration. </p>
   * @public
   */
  CustomEventData?: string;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>. This information is added to the new <code>GameSession</code> object that is
   *             created for a successful match. This parameter is not used if <code>FlexMatchMode</code>
   *             is set to <code>STANDALONE</code>.</p>
   * @public
   */
  GameProperties?: GameProperty[];

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the game session
   *             that is created for a successful match. This parameter is not used if
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   * @public
   */
  GameSessionData?: string;

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
  BackfillMode?: BackfillMode;

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
  FlexMatchMode?: FlexMatchMode;
}

/**
 * @public
 */
export interface UpdateMatchmakingConfigurationOutput {
  /**
   * <p>The updated matchmaking configuration.</p>
   * @public
   */
  Configuration?: MatchmakingConfiguration;
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
  RuntimeConfiguration?: RuntimeConfiguration;
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
   * <p>A descriptive label that is associated with a script. Script names don't need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Version information associated with a build or script. Version strings don't need to be unique.</p>
   * @public
   */
  Version?: string;

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
  StorageLocation?: S3Location;

  /**
   * <p>A data object containing your Realtime scripts and dependencies as a zip file. The zip
   *             file can have one or multiple files. Maximum size of a zip file is 5 MB.</p>
   *          <p>When using the Amazon Web Services CLI tool to create a script, this parameter is set to the zip
   *             file name. It must be prepended with the string "fileb://" to indicate that the file
   *             data is a binary object. For example: <code>--zip-file
   *                 fileb://myRealtimeScript.zip</code>.</p>
   * @public
   */
  ZipFile?: Uint8Array;
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
  Script?: Script;
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
  Valid?: boolean;
}

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
