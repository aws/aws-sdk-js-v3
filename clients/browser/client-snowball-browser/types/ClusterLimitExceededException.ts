import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Job creation failed. Currently, clusters support five nodes. If you have less than five nodes for your cluster and you have more nodes to create for this cluster, try again and create jobs until your cluster has exactly five notes.</p>
 */
export interface ClusterLimitExceededException
  extends __ServiceException__<_ClusterLimitExceededExceptionDetails> {
  name: "ClusterLimitExceededException";
}

export interface _ClusterLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
