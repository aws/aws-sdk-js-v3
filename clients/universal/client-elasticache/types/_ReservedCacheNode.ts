import {
  _RecurringCharge,
  _UnmarshalledRecurringCharge
} from "./_RecurringCharge";

/**
 * <p>Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.</p>
 */
export interface _ReservedCacheNode {
  /**
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedCacheNodeId?: string;

  /**
   * <p>The offering identifier.</p>
   */
  ReservedCacheNodesOfferingId?: string;

  /**
   * <p>The cache node type for the reserved cache nodes.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>
   */
  CacheNodeType?: string;

  /**
   * <p>The time the reservation started.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The duration of the reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this reserved cache node.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The hourly price charged for this reserved cache node.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The number of cache nodes that have been reserved.</p>
   */
  CacheNodeCount?: number;

  /**
   * <p>The description of the reserved cache node.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type of this reserved cache node.</p>
   */
  OfferingType?: string;

  /**
   * <p>The state of the reserved cache node.</p>
   */
  State?: string;

  /**
   * <p>The recurring price charged to run this reserved cache node.</p>
   */
  RecurringCharges?: Array<_RecurringCharge> | Iterable<_RecurringCharge>;

  /**
   * <p>The Amazon Resource Name (ARN) of the reserved cache node.</p> <p>Example: <code>arn:aws:elasticache:us-east-1:123456789012:reserved-instance:ri-2017-03-27-08-33-25-582</code> </p>
   */
  ReservationARN?: string;
}

export interface _UnmarshalledReservedCacheNode extends _ReservedCacheNode {
  /**
   * <p>The time the reservation started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The recurring price charged to run this reserved cache node.</p>
   */
  RecurringCharges?: Array<_UnmarshalledRecurringCharge>;
}
