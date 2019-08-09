import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service could not respond to the request due to an internal problem.</p>
 */
export interface ServerInternalException
  extends __ServiceException__<_ServerInternalExceptionDetails> {
  name: "ServerInternalException";
}

export interface _ServerInternalExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
