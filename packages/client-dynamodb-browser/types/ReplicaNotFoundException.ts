import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified replica is no longer part of the global table.</p>
 */
export interface ReplicaNotFoundException
  extends __ServiceException__<_ReplicaNotFoundExceptionDetails> {
  name: "ReplicaNotFoundException";
}

export interface _ReplicaNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
