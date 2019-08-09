import { _Tag, _UnmarshalledTag } from "./_Tag";
import { _CreateRule, _UnmarshalledCreateRule } from "./_CreateRule";
import { _RetainRule, _UnmarshalledRetainRule } from "./_RetainRule";

/**
 * <p>Specifies a schedule.</p>
 */
export interface _Schedule {
  /**
   * <p>The name of the schedule.</p>
   */
  Name?: string;

  /**
   * <p>Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The tags to apply to policy-created resources. These user-defined tags are in addition to the AWS-added lifecycle tags.</p>
   */
  TagsToAdd?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>A collection of key/value pairs with values determined dynamically when the policy is executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two following formats: <code>$(instance-id)</code> or <code>$(timestamp)</code>. Variable tags are only valid for EBS Snapshot Management – Instance policies.</p>
   */
  VariableTags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The create rule.</p>
   */
  CreateRule?: _CreateRule;

  /**
   * <p>The retain rule.</p>
   */
  RetainRule?: _RetainRule;
}

export interface _UnmarshalledSchedule extends _Schedule {
  /**
   * <p>The tags to apply to policy-created resources. These user-defined tags are in addition to the AWS-added lifecycle tags.</p>
   */
  TagsToAdd?: Array<_UnmarshalledTag>;

  /**
   * <p>A collection of key/value pairs with values determined dynamically when the policy is executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two following formats: <code>$(instance-id)</code> or <code>$(timestamp)</code>. Variable tags are only valid for EBS Snapshot Management – Instance policies.</p>
   */
  VariableTags?: Array<_UnmarshalledTag>;

  /**
   * <p>The create rule.</p>
   */
  CreateRule?: _UnmarshalledCreateRule;

  /**
   * <p>The retain rule.</p>
   */
  RetainRule?: _UnmarshalledRetainRule;
}
