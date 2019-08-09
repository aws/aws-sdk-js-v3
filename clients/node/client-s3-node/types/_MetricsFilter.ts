import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _MetricsAndOperator,
  _UnmarshalledMetricsAndOperator
} from "./_MetricsAndOperator";

/**
 * <p/>
 */
export interface _MetricsFilter {
  /**
   * <p>The prefix used when evaluating a metrics filter.</p>
   */
  Prefix?: string;

  /**
   * <p>The tag used when evaluating a metrics filter.</p>
   */
  Tag?: _Tag;

  /**
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.</p>
   */
  And?: _MetricsAndOperator;
}

export interface _UnmarshalledMetricsFilter extends _MetricsFilter {
  /**
   * <p>The tag used when evaluating a metrics filter.</p>
   */
  Tag?: _UnmarshalledTag;

  /**
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.</p>
   */
  And?: _UnmarshalledMetricsAndOperator;
}
