import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _AnalyticsAndOperator,
  _UnmarshalledAnalyticsAndOperator
} from "./_AnalyticsAndOperator";

/**
 * <p/>
 */
export interface _AnalyticsFilter {
  /**
   * <p>The prefix to use when evaluating an analytics filter.</p>
   */
  Prefix?: string;

  /**
   * <p>The tag to use when evaluating an analytics filter.</p>
   */
  Tag?: _Tag;

  /**
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating an analytics filter. The operator must have at least two predicates.</p>
   */
  And?: _AnalyticsAndOperator;
}

export interface _UnmarshalledAnalyticsFilter extends _AnalyticsFilter {
  /**
   * <p>The tag to use when evaluating an analytics filter.</p>
   */
  Tag?: _UnmarshalledTag;

  /**
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating an analytics filter. The operator must have at least two predicates.</p>
   */
  And?: _UnmarshalledAnalyticsAndOperator;
}
