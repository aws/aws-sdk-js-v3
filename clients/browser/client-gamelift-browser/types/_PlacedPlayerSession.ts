/**
 * <p>Information about a player session that was created as part of a <a>StartGameSessionPlacement</a> request. This object contains only the player ID and player session ID. To retrieve full details on a player session, call <a>DescribePlayerSessions</a> with the player session ID.</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
 */
export interface _PlacedPlayerSession {
  /**
   * <p>Unique identifier for a player that is associated with this player session.</p>
   */
  PlayerId?: string;

  /**
   * <p>Unique identifier for a player session.</p>
   */
  PlayerSessionId?: string;
}

export type _UnmarshalledPlacedPlayerSession = _PlacedPlayerSession;
