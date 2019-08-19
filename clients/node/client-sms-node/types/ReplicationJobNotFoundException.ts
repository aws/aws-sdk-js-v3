import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified replication job does not exist.</p>
 */
export interface ReplicationJobNotFoundException
  extends __ServiceException__<_ReplicationJobNotFoundExceptionDetails> {
  name: "ReplicationJobNotFoundException";
}

export interface _ReplicationJobNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
