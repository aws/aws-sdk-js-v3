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
 * _Rule shape
 */
export interface _Rule {
  /**
   * _LifecycleExpiration shape
   */
  Expiration?: _LifecycleExpiration;

  /**
   * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
   */
  ID?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Prefix: string;

  /**
   * <p>If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being applied.</p>
   */
  Status: "Enabled" | "Disabled" | string;

  /**
   * _Transition shape
   */
  Transition?: _Transition;

  /**
   * <p>Container for the transition rule that describes when noncurrent objects transition to the STANDARD_IA, ONEZONE_IA or GLACIER storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the STANDARD_IA, ONEZONE_IA or GLACIER storage class at a specific period in the object's lifetime.</p>
   */
  NoncurrentVersionTransition?: _NoncurrentVersionTransition;

  /**
   * <p>Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.</p>
   */
  NoncurrentVersionExpiration?: _NoncurrentVersionExpiration;

  /**
   * <p>Specifies the days since the initiation of an Incomplete Multipart Upload that Lifecycle will wait before permanently removing all parts of the upload.</p>
   */
  AbortIncompleteMultipartUpload?: _AbortIncompleteMultipartUpload;
}

export interface _UnmarshalledRule extends _Rule {
  /**
   * _LifecycleExpiration shape
   */
  Expiration?: _UnmarshalledLifecycleExpiration;

  /**
   * _Transition shape
   */
  Transition?: _UnmarshalledTransition;

  /**
   * <p>Container for the transition rule that describes when noncurrent objects transition to the STANDARD_IA, ONEZONE_IA or GLACIER storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the STANDARD_IA, ONEZONE_IA or GLACIER storage class at a specific period in the object's lifetime.</p>
   */
  NoncurrentVersionTransition?: _UnmarshalledNoncurrentVersionTransition;

  /**
   * <p>Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.</p>
   */
  NoncurrentVersionExpiration?: _UnmarshalledNoncurrentVersionExpiration;

  /**
   * <p>Specifies the days since the initiation of an Incomplete Multipart Upload that Lifecycle will wait before permanently removing all parts of the upload.</p>
   */
  AbortIncompleteMultipartUpload?: _UnmarshalledAbortIncompleteMultipartUpload;
}
