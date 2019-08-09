import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input for a request action.</p>
 */
export interface UpdateGameSessionInput {
  /**
   * <p>Unique identifier for the game session to update.</p>
   */
  GameSessionId: string;

  /**
   * <p>Maximum number of players that can be connected simultaneously to the game session.</p>
   */
  MaximumPlayerSessionCount?: number;

  /**
   * <p>Descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>Policy determining whether or not the game session accepts new players.</p>
   */
  PlayerSessionCreationPolicy?: "ACCEPT_ALL" | "DENY_ALL" | string;

  /**
   * <p>Game session protection policy to apply to this game session only.</p> <ul> <li> <p> <b>NoProtection</b> -- The game session can be terminated during a scale-down event.</p> </li> <li> <p> <b>FullProtection</b> -- If the game session is in an <code>ACTIVE</code> status, it cannot be terminated during a scale-down event.</p> </li> </ul>
   */
  ProtectionPolicy?: "NoProtection" | "FullProtection" | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
