import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested cache node type is not available in the specified Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
 */
export interface InsufficientCacheClusterCapacityFault
  extends __ServiceException__<_InsufficientCacheClusterCapacityFaultDetails> {
  name: "InsufficientCacheClusterCapacityFault";
}

export interface _InsufficientCacheClusterCapacityFaultDetails {}
