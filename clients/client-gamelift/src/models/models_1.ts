// smithy-typescript generated code
import {
  BackfillMode,
  BalancingStrategy,
  FilterConfiguration,
  FlexMatchMode,
  GameProperty,
  GameServer,
  GameServerGroup,
  GameServerProtectionPolicy,
  GameServerUtilizationStatus,
  GameSession,
  GameSessionQueue,
  GameSessionQueueDestination,
  InstanceDefinition,
  MatchmakingConfiguration,
  PlayerLatencyPolicy,
  PlayerSessionCreationPolicy,
  PriorityConfiguration,
  ProtectionPolicy,
  RuntimeConfiguration,
  S3Location,
  Script,
} from "./models_0";

export interface UpdateFleetPortSettingsOutput {
  /**
   * <p>A unique identifier for the fleet that was updated.</p>
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   */
  FleetArn?: string;
}

export enum GameServerHealthCheck {
  HEALTHY = "HEALTHY",
}

export interface UpdateGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running.</p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server to update.</p>
   */
  GameServerId: string | undefined;

  /**
   * <p>A set of custom game server properties, formatted as a single string value. This data
   *             is passed to a game client or service when it requests information on game servers. </p>
   */
  GameServerData?: string;

  /**
   * <p>Indicates whether the game server is available or is currently hosting
   *             gameplay.</p>
   */
  UtilizationStatus?: GameServerUtilizationStatus | string;

  /**
   * <p>Indicates health status of the game server. A request that includes this parameter
   *             updates the game server's <i>LastHealthCheckTime</i> timestamp. </p>
   */
  HealthCheck?: GameServerHealthCheck | string;
}

export interface UpdateGameServerOutput {
  /**
   * <p>Object that describes the newly updated game server.</p>
   */
  GameServer?: GameServer;
}

export interface UpdateGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the name or ARN value.</p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that
   *             allows Amazon GameLift to access your Amazon EC2 Auto Scaling groups.</p>
   */
  RoleArn?: string;

  /**
   * <p>An updated list of Amazon EC2 instance types to use in the Auto Scaling group. The instance
   *             definitions must specify at least two different instance types that are supported by
   *             GameLift FleetIQ. This updated list replaces the entire current list of instance definitions for
   *             the game server group. For more information on instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">EC2 Instance
   *                 Types</a> in the <i>Amazon EC2 User Guide</i>. You can optionally
   *             specify capacity weighting for each instance type. If no weight value is specified for
   *             an instance type, it is set to the default value "1". For more information about
   *             capacity weighting, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html"> Instance Weighting for
   *                 Amazon EC2 Auto Scaling</a> in the Amazon EC2 Auto Scaling User Guide.</p>
   */
  InstanceDefinitions?: InstanceDefinition[];

  /**
   * <p>A flag that indicates whether instances in the game server group are protected
   *             from early termination. Unprotected instances that have active game servers running might
   *             be terminated during a scale-down event, causing players to be dropped from the game.
   *             Protected instances cannot be terminated while there are active game servers running except
   *             in the event of a forced game server group deletion (see ). An exception to this is with Spot
   *             Instances, which can be terminated by Amazon Web Services regardless of protection status. This property is set to <code>NO_PROTECTION</code> by default.</p>
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy | string;

  /**
   * <p>Indicates how GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the
   *             game server group. Method options include the following:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>SPOT_ONLY</code> - Only Spot Instances are used in the game server group. If Spot
   *                     Instances are unavailable or not viable for game hosting, the game server group
   *                     provides no hosting capacity until Spot Instances can again be used. Until then,
   *                     no new instances are started, and the existing nonviable Spot Instances are
   *                     terminated (after current gameplay ends) and are not replaced.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SPOT_PREFERRED</code> - (default value) Spot Instances are used whenever available in
   *                     the game server group. If Spot Instances are unavailable, the game server group
   *                     continues to provide hosting capacity by falling back to On-Demand Instances.
   *                     Existing nonviable Spot Instances are terminated (after current gameplay ends)
   *                     and are replaced with new On-Demand Instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ON_DEMAND_ONLY</code> - Only On-Demand Instances are used in the game
   *                     server group. No Spot Instances are used, even when available, while this
   *                     balancing strategy is in force.</p>
   *             </li>
   *          </ul>
   */
  BalancingStrategy?: BalancingStrategy | string;
}

export interface UpdateGameServerGroupOutput {
  /**
   * <p>An object that describes the game server group resource with updated properties.
   *         </p>
   */
  GameServerGroup?: GameServerGroup;
}

export interface UpdateGameSessionInput {
  /**
   * <p>A unique identifier for the game session to update. </p>
   */
  GameSessionId: string | undefined;

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   */
  MaximumPlayerSessionCount?: number;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>A policy that determines whether the game session is accepting new players.</p>
   */
  PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy | string;

  /**
   * <p>Game session protection policy to apply to this game session only.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>NoProtection</b> -- The game session can be
   *                     terminated during a scale-down event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>FullProtection</b> -- If the game session is in an
   *                         <code>ACTIVE</code> status, it cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   */
  ProtectionPolicy?: ProtectionPolicy | string;
}

export interface UpdateGameSessionOutput {
  /**
   * <p>The updated game session properties.</p>
   */
  GameSession?: GameSession;
}

export interface UpdateGameSessionQueueInput {
  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value. </p>
   */
  Name: string | undefined;

  /**
   * <p>The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.</p>
   */
  TimeoutInSeconds?: number;

  /**
   * <p>A set of policies that act as a sliding cap on player latency. FleetIQ works to
   *             deliver low latency for most players in a game session. These policies ensure that no
   *             individual player can be placed into a game with unreasonably high latency. Use multiple
   *             policies to gradually relax latency requirements a step at a time. Multiple policies are applied based on their
   *             maximum allowed latency, starting with the lowest value. When updating policies, provide a complete collection of policies.</p>
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[];

  /**
   * <p>A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.
   *     Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference. When updating this list, provide a complete list of destinations.</p>
   */
  Destinations?: GameSessionQueueDestination[];

  /**
   * <p>A list of locations where a queue is allowed to place new game sessions. Locations
   *             are specified in the form of Amazon Web Services Region codes, such as <code>us-west-2</code>. If this parameter is
   *             not set, game sessions can be placed in any queue location. To remove an existing filter configuration, pass in an empty set.</p>
   */
  FilterConfiguration?: FilterConfiguration;

  /**
   * <p>Custom settings to use when prioritizing destinations and locations for game session placements. This
   *             configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly
   *             named will be automatically applied at the end of the prioritization process. To remove an existing priority configuration, pass in an empty set.</p>
   */
  PriorityConfiguration?: PriorityConfiguration;

  /**
   * <p>Information to be added to all events that are related to this game session
   *             queue.</p>
   */
  CustomEventData?: string;

  /**
   * <p>An SNS topic ARN that is set up to receive game session placement notifications. See
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queue-notification.html"> Setting up
   *                 notifications for game session placement</a>.</p>
   */
  NotificationTarget?: string;
}

export interface UpdateGameSessionQueueOutput {
  /**
   * <p>An object that describes the newly updated game session queue.</p>
   */
  GameSessionQueue?: GameSessionQueue;
}

export interface UpdateMatchmakingConfigurationInput {
  /**
   * <p>A unique identifier for the matchmaking configuration to update. You can use either the configuration name or ARN value. </p>
   */
  Name: string | undefined;

  /**
   * <p>A description for the matchmaking configuration.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::gamesessionqueue/<queue name></code>. Queues can be located in any Region. Queues are used to start new
   *             GameLift-hosted game sessions for matches that are created with this matchmaking
   *             configuration. If <code>FlexMatchMode</code> is set to <code>STANDALONE</code>, do not
   *             set this parameter.</p>
   */
  GameSessionQueueArns?: string[];

  /**
   * <p>The maximum duration, in seconds, that a matchmaking ticket can remain in process
   *             before timing out. Requests that fail due to timing out can be resubmitted as
   *             needed.</p>
   */
  RequestTimeoutSeconds?: number;

  /**
   * <p>The length of time (in seconds) to wait for players to accept a proposed match, if
   *             acceptance is required.</p>
   */
  AcceptanceTimeoutSeconds?: number;

  /**
   * <p>A flag that indicates whether a match that was created with this configuration must be
   *             accepted by the matched players. To require acceptance, set to TRUE. With this option
   *             enabled, matchmaking tickets use the status <code>REQUIRES_ACCEPTANCE</code> to indicate
   *             when a completed potential match is waiting for player acceptance. </p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>A unique identifier for the matchmaking rule set to use with this configuration. You can use either the rule set name or ARN
   *             value. A matchmaking configuration can only use rule sets that are defined in the same
   *             Region.</p>
   */
  RuleSetName?: string;

  /**
   * <p>An SNS topic ARN that is set up to receive matchmaking notifications. See <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html">
   *                 Setting up notifications for matchmaking</a> for more information.</p>
   */
  NotificationTarget?: string;

  /**
   * <p>The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies
   *             a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match. This parameter is not used if <code>FlexMatchMode</code> is set to
   *                 <code>STANDALONE</code>.</p>
   */
  AdditionalPlayerCount?: number;

  /**
   * <p>Information to add to all events related to the matchmaking configuration. </p>
   */
  CustomEventData?: string;

  /**
   * <p>A set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <code>GameSession</code> object that is
   *             created for a successful match. This parameter is not used if <code>FlexMatchMode</code>
   *             is set to <code>STANDALONE</code>.</p>
   */
  GameProperties?: GameProperty[];

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the game session
   *             that is created for a successful match. This parameter is not used if
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
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
   */
  BackfillMode?: BackfillMode | string;

  /**
   * <p>Indicates whether this matchmaking configuration is being used with GameLift hosting or
   *             as a standalone matchmaking solution. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>STANDALONE</b> - FlexMatch forms matches and
   *                     returns match information, including players and team assignments, in a <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded"> MatchmakingSucceeded</a> event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>WITH_QUEUE</b> - FlexMatch forms matches and uses
   *                     the specified GameLift queue to start a game session for the match. </p>
   *             </li>
   *          </ul>
   */
  FlexMatchMode?: FlexMatchMode | string;
}

export interface UpdateMatchmakingConfigurationOutput {
  /**
   * <p>The updated matchmaking configuration.</p>
   */
  Configuration?: MatchmakingConfiguration;
}

export interface UpdateRuntimeConfigurationInput {
  /**
   * <p>A unique identifier for the fleet to update runtime configuration for. You can use either the fleet ID or ARN
   *             value.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>Instructions for alaunching server processes on each instance in the fleet. Server
   *             processes run either a custom game build executable or a Realtime Servers script. The runtime
   *             configuration lists the types of server processes to run on an instance, how to launch
   *             them, and the number of processes to run concurrently.</p>
   */
  RuntimeConfiguration: RuntimeConfiguration | undefined;
}

export interface UpdateRuntimeConfigurationOutput {
  /**
   * <p>The runtime configuration currently in use by all instances in the fleet. If the
   *             update was successful, all property changes are shown. </p>
   */
  RuntimeConfiguration?: RuntimeConfiguration;
}

export interface UpdateScriptInput {
  /**
   * <p>A unique identifier for the Realtime script to update. You can use either the script ID or ARN value.</p>
   */
  ScriptId: string | undefined;

  /**
   * <p>A descriptive label that is associated with a script. Script names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>Version information associated with a build or script. Version strings do not need to be unique.</p>
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
   */
  StorageLocation?: S3Location;

  /**
   * <p>A data object containing your Realtime scripts and dependencies as a zip file. The zip
   *             file can have one or multiple files. Maximum size of a zip file is 5 MB.</p>
   *         <p>When using the Amazon Web Services CLI tool to create a script, this parameter is set to the zip
   *             file name. It must be prepended with the string "fileb://" to indicate that the file
   *             data is a binary object. For example: <code>--zip-file
   *                 fileb://myRealtimeScript.zip</code>.</p>
   */
  ZipFile?: Uint8Array;
}

export interface UpdateScriptOutput {
  /**
   * <p>The newly created script record with a unique script ID. The new script's storage
   *             location reflects an Amazon S3 location: (1) If the script was uploaded from an S3 bucket
   *             under your account, the storage location reflects the information that was provided in
   *             the <i>CreateScript</i> request; (2) If the script file was uploaded from
   *             a local zip file, the storage location reflects an S3 location controls by the Amazon GameLift
   *             service.</p>
   */
  Script?: Script;
}

export interface ValidateMatchmakingRuleSetInput {
  /**
   * <p>A collection of matchmaking rules to validate, formatted as a JSON string.</p>
   */
  RuleSetBody: string | undefined;
}

export interface ValidateMatchmakingRuleSetOutput {
  /**
   * <p>A response indicating whether the rule set is valid.</p>
   */
  Valid?: boolean;
}

/**
 * @internal
 */
export const UpdateFleetPortSettingsOutputFilterSensitiveLog = (obj: UpdateFleetPortSettingsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGameServerInputFilterSensitiveLog = (obj: UpdateGameServerInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGameServerOutputFilterSensitiveLog = (obj: UpdateGameServerOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGameServerGroupInputFilterSensitiveLog = (obj: UpdateGameServerGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGameServerGroupOutputFilterSensitiveLog = (obj: UpdateGameServerGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGameSessionInputFilterSensitiveLog = (obj: UpdateGameSessionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGameSessionOutputFilterSensitiveLog = (obj: UpdateGameSessionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGameSessionQueueInputFilterSensitiveLog = (obj: UpdateGameSessionQueueInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGameSessionQueueOutputFilterSensitiveLog = (obj: UpdateGameSessionQueueOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMatchmakingConfigurationInputFilterSensitiveLog = (
  obj: UpdateMatchmakingConfigurationInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMatchmakingConfigurationOutputFilterSensitiveLog = (
  obj: UpdateMatchmakingConfigurationOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRuntimeConfigurationInputFilterSensitiveLog = (obj: UpdateRuntimeConfigurationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRuntimeConfigurationOutputFilterSensitiveLog = (obj: UpdateRuntimeConfigurationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateScriptInputFilterSensitiveLog = (obj: UpdateScriptInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateScriptOutputFilterSensitiveLog = (obj: UpdateScriptOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidateMatchmakingRuleSetInputFilterSensitiveLog = (obj: ValidateMatchmakingRuleSetInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidateMatchmakingRuleSetOutputFilterSensitiveLog = (obj: ValidateMatchmakingRuleSetOutput): any => ({
  ...obj,
});
