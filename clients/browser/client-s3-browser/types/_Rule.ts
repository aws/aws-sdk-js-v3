import {
  _LifecycleExpiration,
  _UnmarshalledLifecycleExpiration
} from "./_LifecycleExpiration";
import { _Transition, _UnmarshalledTransition } from "./_Transition";
import {
  _NoncurrentVersionTransition,
  _UnmarshalledNoncurrentVersionTransition
} from "./_NoncurrentVersionTransition";
import {
  _NoncurrentVersionExpiration,
  _UnmarshalledNoncurrentVersionExpiration
} from "./_NoncurrentVersionExpiration";
import {
  _AbortIncompleteMultipartUpload,
  _UnmarshalledAbortIncompleteMultipartUpload
} from "./_AbortIncompleteMultipartUpload";

/**
 * <p>Specifies lifecycle rules for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlifecycle.html">PUT Bucket lifecycle</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface _Rule {
  /**
   * <p/>
   */
  Expiration?: _LifecycleExpiration;

  /**
   * <p>Unique identifier for the rule. The value can't be longer than 255 characters.</p>
   */
  ID?: string;

  /**
   * <p>Object key prefix that identifies one or more objects to which this rule applies.</p>
   */
  Prefix: string;

  /**
   * <p>If <code>Enabled</code>, the rule is currently being applied. If <code>Disabled</code>, the rule is not currently being applied.</p>
   */
  Status: "Enabled" | "Disabled" | string;

  /**
   * <p/>
   */
  Transition?: _Transition;

  /**
   * <p/>
   */
  NoncurrentVersionTransition?: _NoncurrentVersionTransition;

  /**
   * <p/>
   */
  NoncurrentVersionExpiration?: _NoncurrentVersionExpiration;

  /**
   * <p/>
   */
  AbortIncompleteMultipartUpload?: _AbortIncompleteMultipartUpload;
}

export interface _UnmarshalledRule extends _Rule {
  /**
   * <p/>
   */
  Expiration?: _UnmarshalledLifecycleExpiration;

  /**
   * <p/>
   */
  Transition?: _UnmarshalledTransition;

  /**
   * <p/>
   */
  NoncurrentVersionTransition?: _UnmarshalledNoncurrentVersionTransition;

  /**
   * <p/>
   */
  NoncurrentVersionExpiration?: _UnmarshalledNoncurrentVersionExpiration;

  /**
   * <p/>
   */
  AbortIncompleteMultipartUpload?: _UnmarshalledAbortIncompleteMultipartUpload;
}
