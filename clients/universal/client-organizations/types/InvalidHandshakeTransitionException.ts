import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't perform the operation on the handshake in its current state. For example, you can't cancel a handshake that was already accepted or accept a handshake that was already declined.</p>
 */
export interface InvalidHandshakeTransitionException
  extends __ServiceException__<_InvalidHandshakeTransitionExceptionDetails> {
  name: "InvalidHandshakeTransitionException";
}

export interface _InvalidHandshakeTransitionExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
