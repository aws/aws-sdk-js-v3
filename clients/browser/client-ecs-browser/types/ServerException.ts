import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>These errors are usually caused by a server issue.</p>
 */
export interface ServerException
  extends __ServiceException__<_ServerExceptionDetails> {
  name: "ServerException";
}

export interface _ServerExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
