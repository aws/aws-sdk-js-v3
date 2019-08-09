import { _GameSession, _UnmarshalledGameSession } from "./_GameSession";

/**
 * <p>A game session's properties plus the protection policy currently in force.</p>
 */
export interface _GameSessionDetail {
  /**
   * <p>Object that describes a game session.</p>
   */
  GameSession?: _GameSession;

  /**
   * <p>Current status of protection for the game session.</p> <ul> <li> <p> <b>NoProtection</b> -- The game session can be terminated during a scale-down event.</p> </li> <li> <p> <b>FullProtection</b> -- If the game session is in an <code>ACTIVE</code> status, it cannot be terminated during a scale-down event.</p> </li> </ul>
   */
  ProtectionPolicy?: "NoProtection" | "FullProtection" | string;
}

export interface _UnmarshalledGameSessionDetail extends _GameSessionDetail {
  /**
   * <p>Object that describes a game session.</p>
   */
  GameSession?: _UnmarshalledGameSession;
}
