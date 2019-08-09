import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The server experienced an internal error. Try again.</p>
 */
export interface ServerInternalErrorException
  extends __ServiceException__<_ServerInternalErrorExceptionDetails> {
  name: "ServerInternalErrorException";
}

export interface _ServerInternalErrorExceptionDetails {
  /**
   * _Message shape
   */
  message?: string;
}
