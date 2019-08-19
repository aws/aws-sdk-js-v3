import { _GameProperty, _UnmarshalledGameProperty } from "./_GameProperty";

/**
 * <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
 */
export interface _GameSession {
  /**
   * <p>Unique identifier for the game session. A game session ARN has the following format: <code>arn:aws:gamelift:&lt;region&gt;::gamesession/&lt;fleet ID&gt;/&lt;custom ID string or idempotency token&gt;</code>.</p>
   */
  GameSessionId?: string;

  /**
   * <p>Descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>Unique identifier for a fleet that the game session is running on.</p>
   */
  FleetId?: string;

  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  TerminationTime?: Date | string | number;

  /**
   * <p>Number of players currently in the game session.</p>
   */
  CurrentPlayerSessionCount?: number;

  /**
   * <p>Maximum number of players that can be connected simultaneously to the game session.</p>
   */
  MaximumPlayerSessionCount?: number;

  /**
   * <p>Current status of the game session. A game session must have an <code>ACTIVE</code> status to have player sessions.</p>
   */
  Status?:
    | "ACTIVE"
    | "ACTIVATING"
    | "TERMINATED"
    | "TERMINATING"
    | "ERROR"
    | string;

  /**
   * <p>Provides additional information about game session status. <code>INTERRUPTED</code> indicates that the game session was hosted on a spot instance that was reclaimed, causing the active game session to be terminated.</p>
   */
  StatusReason?: "INTERRUPTED" | string;

  /**
   * <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). You can search for active game sessions based on this custom data with <a>SearchGameSessions</a>.</p>
   */
  GameProperties?: Array<_GameProperty> | Iterable<_GameProperty>;

  /**
   * <p>IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   */
  IpAddress?: string;

  /**
   * <p>Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   */
  Port?: number;

  /**
   * <p>Indicates whether or not the game session is accepting new players.</p>
   */
  PlayerSessionCreationPolicy?: "ACCEPT_ALL" | "DENY_ALL" | string;

  /**
   * <p>Unique identifier for a player. This ID is used to enforce a resource protection policy (if one exists), that limits the number of game sessions a player can create.</p>
   */
  CreatorId?: string;

  /**
   * <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   */
  GameSessionData?: string;

  /**
   * <p>Information about the matchmaking process that was used to create the game session. It is in JSON syntax, formatted as a string. In addition the matchmaking configuration used, it contains data on all players assigned to the match, including player attributes and team assignments. For more details on matchmaker data, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-server.html#match-server-data">Match Data</a>. Matchmaker data is useful when requesting match backfills, and is updated whenever new players are added during a successful backfill (see <a>StartMatchBackfill</a>). </p>
   */
  MatchmakerData?: string;
}

export interface _UnmarshalledGameSession extends _GameSession {
  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;

  /**
   * <p>Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  TerminationTime?: Date;

  /**
   * <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). You can search for active game sessions based on this custom data with <a>SearchGameSessions</a>.</p>
   */
  GameProperties?: Array<_UnmarshalledGameProperty>;
}
