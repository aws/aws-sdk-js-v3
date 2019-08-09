import { _Bucket, _UnmarshalledBucket } from "./_Bucket";

/**
 * <p>A container for the calculated facet values and counts.</p>
 */
export interface _BucketInfo {
  /**
   * <p>A list of the calculated facet values and counts.</p>
   */
  buckets?: Array<_Bucket> | Iterable<_Bucket>;
}

export interface _UnmarshalledBucketInfo extends _BucketInfo {
  /**
   * <p>A list of the calculated facet values and counts.</p>
   */
  buckets?: Array<_UnmarshalledBucket>;
}
