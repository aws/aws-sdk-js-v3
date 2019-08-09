import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The game instance is currently full and cannot allow the requested player(s) to join. Clients can retry such requests immediately or after a waiting period.</p>
 */
export interface GameSessionFullException
  extends __ServiceException__<_GameSessionFullExceptionDetails> {
  name: "GameSessionFullException";
}

export interface _GameSessionFullExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;
}
