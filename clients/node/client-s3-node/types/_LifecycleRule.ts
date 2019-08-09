import {
  _LifecycleExpiration,
  _UnmarshalledLifecycleExpiration
} from "./_LifecycleExpiration";
import {
  _LifecycleRuleFilter,
  _UnmarshalledLifecycleRuleFilter
} from "./_LifecycleRuleFilter";
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
 * <p/>
 */
export interface _LifecycleRule {
  /**
   * <p/>
   */
  Expiration?: _LifecycleExpiration;

  /**
   * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
   */
  ID?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies. This is No longer used; use Filter instead.</p>
   */
  Prefix?: string;

  /**
   * <p/>
   */
  Filter?: _LifecycleRuleFilter;

  /**
   * <p>If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being applied.</p>
   */
  Status: "Enabled" | "Disabled" | string;

  /**
   * <p/>
   */
  Transitions?: Array<_Transition> | Iterable<_Transition>;

  /**
   * <p/>
   */
  NoncurrentVersionTransitions?:
    | Array<_NoncurrentVersionTransition>
    | Iterable<_NoncurrentVersionTransition>;

  /**
   * <p/>
   */
  NoncurrentVersionExpiration?: _NoncurrentVersionExpiration;

  /**
   * <p/>
   */
  AbortIncompleteMultipartUpload?: _AbortIncompleteMultipartUpload;
}

export interface _UnmarshalledLifecycleRule extends _LifecycleRule {
  /**
   * <p/>
   */
  Expiration?: _UnmarshalledLifecycleExpiration;

  /**
   * <p/>
   */
  Filter?: _UnmarshalledLifecycleRuleFilter;

  /**
   * <p/>
   */
  Transitions?: Array<_UnmarshalledTransition>;

  /**
   * <p/>
   */
  NoncurrentVersionTransitions?: Array<
    _UnmarshalledNoncurrentVersionTransition
  >;

  /**
   * <p/>
   */
  NoncurrentVersionExpiration?: _UnmarshalledNoncurrentVersionExpiration;

  /**
   * <p/>
   */
  AbortIncompleteMultipartUpload?: _UnmarshalledAbortIncompleteMultipartUpload;
}
