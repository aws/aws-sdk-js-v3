import { _GameProperty, _UnmarshalledGameProperty } from "./_GameProperty";
import { _PlayerLatency, _UnmarshalledPlayerLatency } from "./_PlayerLatency";
import {
  _PlacedPlayerSession,
  _UnmarshalledPlacedPlayerSession
} from "./_PlacedPlayerSession";

/**
 * <p>Object that describes a <a>StartGameSessionPlacement</a> request. This object includes the full details of the original request plus the current status and start/end time stamps.</p> <p>Game session placement-related operations include:</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul>
 */
export interface _GameSessionPlacement {
  /**
   * <p>Unique identifier for a game session placement.</p>
   */
  PlacementId?: string;

  /**
   * <p>Descriptive label that is associated with game session queue. Queue names must be unique within each region.</p>
   */
  GameSessionQueueName?: string;

  /**
   * <p>Current status of the game session placement request.</p> <ul> <li> <p> <b>PENDING</b> -- The placement request is currently in the queue waiting to be processed.</p> </li> <li> <p> <b>FULFILLED</b> -- A new game session and player sessions (if requested) have been successfully created. Values for <i>GameSessionArn</i> and <i>GameSessionRegion</i> are available. </p> </li> <li> <p> <b>CANCELLED</b> -- The placement request was canceled with a call to <a>StopGameSessionPlacement</a>.</p> </li> <li> <p> <b>TIMED_OUT</b> -- A new game session was not successfully created before the time limit expired. You can resubmit the placement request as needed.</p> </li> </ul>
   */
  Status?: "PENDING" | "FULFILLED" | "CANCELLED" | "TIMED_OUT" | string;

  /**
   * <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   */
  GameProperties?: Array<_GameProperty> | Iterable<_GameProperty>;

  /**
   * <p>Maximum number of players that can be connected simultaneously to the game session.</p>
   */
  MaximumPlayerSessionCount?: number;

  /**
   * <p>Descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   */
  GameSessionName?: string;

  /**
   * <p>Unique identifier for the game session. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>).</p>
   */
  GameSessionId?: string;

  /**
   * <p>Identifier for the game session created by this placement request. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>). This identifier is unique across all regions. You can use this value as a <code>GameSessionId</code> value as needed.</p>
   */
  GameSessionArn?: string;

  /**
   * <p>Name of the region where the game session created by this placement request is running. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>).</p>
   */
  GameSessionRegion?: string;

  /**
   * <p>Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS regions.</p>
   */
  PlayerLatencies?: Array<_PlayerLatency> | Iterable<_PlayerLatency>;

  /**
   * <p>Time stamp indicating when this request was placed in the queue. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>Time stamp indicating when this request was completed, canceled, or timed out.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>). </p>
   */
  IpAddress?: string;

  /**
   * <p>Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>).</p>
   */
  Port?: number;

  /**
   * <p>Collection of information on player sessions created in response to the game session placement request. These player sessions are created only once a new game session is successfully placed (placement status is <code>FULFILLED</code>). This information includes the player ID (as provided in the placement request) and the corresponding player session ID. Retrieve full player sessions by calling <a>DescribePlayerSessions</a> with the player session ID.</p>
   */
  PlacedPlayerSessions?:
    | Array<_PlacedPlayerSession>
    | Iterable<_PlacedPlayerSession>;

  /**
   * <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   */
  GameSessionData?: string;

  /**
   * <p>Information on the matchmaking process for this game. Data is in JSON syntax, formatted as a string. It identifies the matchmaking configuration used to create the match, and contains data on all players assigned to the match, including player attributes and team assignments. For more details on matchmaker data, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-server.html#match-server-data">Match Data</a>.</p>
   */
  MatchmakerData?: string;
}

export interface _UnmarshalledGameSessionPlacement
  extends _GameSessionPlacement {
  /**
   * <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   */
  GameProperties?: Array<_UnmarshalledGameProperty>;

  /**
   * <p>Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS regions.</p>
   */
  PlayerLatencies?: Array<_UnmarshalledPlayerLatency>;

  /**
   * <p>Time stamp indicating when this request was placed in the queue. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  StartTime?: Date;

  /**
   * <p>Time stamp indicating when this request was completed, canceled, or timed out.</p>
   */
  EndTime?: Date;

  /**
   * <p>Collection of information on player sessions created in response to the game session placement request. These player sessions are created only once a new game session is successfully placed (placement status is <code>FULFILLED</code>). This information includes the player ID (as provided in the placement request) and the corresponding player session ID. Retrieve full player sessions by calling <a>DescribePlayerSessions</a> with the player session ID.</p>
   */
  PlacedPlayerSessions?: Array<_UnmarshalledPlacedPlayerSession>;
}
