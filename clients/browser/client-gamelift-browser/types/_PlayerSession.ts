/**
 * <p>Properties describing a player session. Player session objects are created either by creating a player session for a specific game session, or as part of a game session placement. A player session represents either a player reservation for a game session (status <code>RESERVED</code>) or actual player activity in a game session (status <code>ACTIVE</code>). A player session object (including player data) is automatically passed to a game session when the player connects to the game session and is validated.</p> <p>When a player disconnects, the player session status changes to <code>COMPLETED</code>. Once the session ends, the player session object is retained for 30 days and then removed.</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
 */
export interface _PlayerSession {
  /**
   * <p>Unique identifier for a player session.</p>
   */
  PlayerSessionId?: string;

  /**
   * <p>Unique identifier for a player that is associated with this player session.</p>
   */
  PlayerId?: string;

  /**
   * <p>Unique identifier for the game session that the player session is connected to.</p>
   */
  GameSessionId?: string;

  /**
   * <p>Unique identifier for a fleet that the player's game session is running on.</p>
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
   * <p>Current status of the player session.</p> <p>Possible player session statuses include the following:</p> <ul> <li> <p> <b>RESERVED</b> -- The player session request has been received, but the player has not yet connected to the server process and/or been validated. </p> </li> <li> <p> <b>ACTIVE</b> -- The player has been validated by the server process and is currently connected.</p> </li> <li> <p> <b>COMPLETED</b> -- The player connection has been dropped.</p> </li> <li> <p> <b>TIMEDOUT</b> -- A player session request was received, but the player did not connect and/or was not validated within the timeout limit (60 seconds).</p> </li> </ul>
   */
  Status?: "RESERVED" | "ACTIVE" | "COMPLETED" | "TIMEDOUT" | string;

  /**
   * <p>IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   */
  IpAddress?: string;

  /**
   * <p>Port number for the game session. To connect to a Amazon GameLift server process, an app needs both the IP address and port number.</p>
   */
  Port?: number;

  /**
   * <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game. </p>
   */
  PlayerData?: string;
}

export interface _UnmarshalledPlayerSession extends _PlayerSession {
  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;

  /**
   * <p>Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  TerminationTime?: Date;
}
