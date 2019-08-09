import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested operation would cause a conflict with the current state of a resource associated with the request and/or the game instance. Resolve the conflict before retrying.</p>
 */
export interface InvalidGameSessionStatusException
  extends __ServiceException__<_InvalidGameSessionStatusExceptionDetails> {
  name: "InvalidGameSessionStatusException";
}

export interface _InvalidGameSessionStatusExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;
}
