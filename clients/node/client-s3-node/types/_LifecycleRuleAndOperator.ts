import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator.</p>
 */
export interface _LifecycleRuleAndOperator {
  /**
   * <p/>
   */
  Prefix?: string;

  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to apply.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledLifecycleRuleAndOperator
  extends _LifecycleRuleAndOperator {
  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to apply.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
