/**
 * <p>Player information for use when creating player sessions using a game session placement request with <a>StartGameSessionPlacement</a>.</p>
 */
export interface _DesiredPlayerSession {
  /**
   * <p>Unique identifier for a player to associate with the player session.</p>
   */
  PlayerId?: string;

  /**
   * <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.</p>
   */
  PlayerData?: string;
}

export type _UnmarshalledDesiredPlayerSession = _DesiredPlayerSession;
