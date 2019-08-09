import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
 */
export interface ClusterNotFoundException
  extends __ServiceException__<_ClusterNotFoundExceptionDetails> {
  name: "ClusterNotFoundException";
}

export interface _ClusterNotFoundExceptionDetails {}
