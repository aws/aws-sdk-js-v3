import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The server experienced an internal error. Try again.</p>
 */
export interface ServerInternalException
  extends __ServiceException__<_ServerInternalExceptionDetails> {
  name: "ServerInternalException";
}

export interface _ServerInternalExceptionDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
