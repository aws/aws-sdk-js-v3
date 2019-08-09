import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified server cannot be replicated.</p>
 */
export interface ServerCannotBeReplicatedException
  extends __ServiceException__<_ServerCannotBeReplicatedExceptionDetails> {
  name: "ServerCannotBeReplicatedException";
}

export interface _ServerCannotBeReplicatedExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
