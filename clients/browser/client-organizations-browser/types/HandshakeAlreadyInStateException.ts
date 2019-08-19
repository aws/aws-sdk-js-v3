import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified handshake is already in the requested state. For example, you can't accept a handshake that was already accepted.</p>
 */
export interface HandshakeAlreadyInStateException
  extends __ServiceException__<_HandshakeAlreadyInStateExceptionDetails> {
  name: "HandshakeAlreadyInStateException";
}

export interface _HandshakeAlreadyInStateExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
