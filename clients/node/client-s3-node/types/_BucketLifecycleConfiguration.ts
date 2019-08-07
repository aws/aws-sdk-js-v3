import { _LifecycleRule, _UnmarshalledLifecycleRule } from "./_LifecycleRule";

/**
 * _BucketLifecycleConfiguration shape
 */
export interface _BucketLifecycleConfiguration {
  /**
   * _LifecycleRules shape
   */
  Rules: Array<_LifecycleRule> | Iterable<_LifecycleRule>;
}

export interface _UnmarshalledBucketLifecycleConfiguration
  extends _BucketLifecycleConfiguration {
  /**
   * _LifecycleRules shape
   */
  Rules: Array<_UnmarshalledLifecycleRule>;
}
