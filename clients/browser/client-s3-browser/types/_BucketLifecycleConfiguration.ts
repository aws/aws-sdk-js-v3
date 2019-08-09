import { _LifecycleRule, _UnmarshalledLifecycleRule } from "./_LifecycleRule";

/**
 * <p>Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface _BucketLifecycleConfiguration {
  /**
   * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
   */
  Rules: Array<_LifecycleRule> | Iterable<_LifecycleRule>;
}

export interface _UnmarshalledBucketLifecycleConfiguration
  extends _BucketLifecycleConfiguration {
  /**
   * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
   */
  Rules: Array<_UnmarshalledLifecycleRule>;
}
