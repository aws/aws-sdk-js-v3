import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We can't find a handshake with the <code>HandshakeId</code> that you specified.</p>
 */
export interface HandshakeNotFoundException
  extends __ServiceException__<_HandshakeNotFoundExceptionDetails> {
  name: "HandshakeNotFoundException";
}

export interface _HandshakeNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
