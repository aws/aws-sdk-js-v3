import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _LifecycleRuleAndOperator,
  _UnmarshalledLifecycleRuleAndOperator
} from "./_LifecycleRuleAndOperator";

/**
 * <p>The Filter is used to identify objects that a Lifecycle Rule applies to. A Filter must have exactly one of Prefix, Tag, or And specified.</p>
 */
export interface _LifecycleRuleFilter {
  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Prefix?: string;

  /**
   * <p>This tag must exist in the object's tag set in order for the rule to apply.</p>
   */
  Tag?: _Tag;

  /**
   * <p/>
   */
  And?: _LifecycleRuleAndOperator;
}

export interface _UnmarshalledLifecycleRuleFilter extends _LifecycleRuleFilter {
  /**
   * <p>This tag must exist in the object's tag set in order for the rule to apply.</p>
   */
  Tag?: _UnmarshalledTag;

  /**
   * <p/>
   */
  And?: _UnmarshalledLifecycleRuleAndOperator;
}
