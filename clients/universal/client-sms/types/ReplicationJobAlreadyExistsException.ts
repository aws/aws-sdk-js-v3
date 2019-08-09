import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified replication job already exists.</p>
 */
export interface ReplicationJobAlreadyExistsException
  extends __ServiceException__<_ReplicationJobAlreadyExistsExceptionDetails> {
  name: "ReplicationJobAlreadyExistsException";
}

export interface _ReplicationJobAlreadyExistsExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
