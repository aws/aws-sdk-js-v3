/**
 * <p>Represents a new player session that is created as a result of a successful FlexMatch match. A successful match automatically creates new player sessions for every player ID in the original matchmaking request. </p> <p>When players connect to the match's game session, they must include both player ID and player session ID in order to claim their assigned player slot.</p>
 */
export interface _MatchedPlayerSession {
  /**
   * <p>Unique identifier for a player </p>
   */
  PlayerId?: string;

  /**
   * <p>Unique identifier for a player session</p>
   */
  PlayerSessionId?: string;
}

export type _UnmarshalledMatchedPlayerSession = _MatchedPlayerSession;
