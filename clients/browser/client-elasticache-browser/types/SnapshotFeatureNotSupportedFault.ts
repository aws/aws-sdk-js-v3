import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You attempted one of the following operations:</p> <ul> <li> <p>Creating a snapshot of a Redis cluster running on a <code>cache.t1.micro</code> cache node.</p> </li> <li> <p>Creating a snapshot of a cluster that is running Memcached rather than Redis.</p> </li> </ul> <p>Neither of these are supported by ElastiCache.</p>
 */
export interface SnapshotFeatureNotSupportedFault
  extends __ServiceException__<_SnapshotFeatureNotSupportedFaultDetails> {
  name: "SnapshotFeatureNotSupportedFault";
}

export interface _SnapshotFeatureNotSupportedFaultDetails {}
