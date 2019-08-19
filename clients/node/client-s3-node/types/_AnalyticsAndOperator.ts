import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates in any combination, and an object must match all of the predicates for the filter to apply.</p>
 */
export interface _AnalyticsAndOperator {
  /**
   * <p>The prefix to use when evaluating an AND predicate: The prefix that an object must have to be included in the metrics results.</p>
   */
  Prefix?: string;

  /**
   * <p>The list of tags to use when evaluating an AND predicate.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledAnalyticsAndOperator
  extends _AnalyticsAndOperator {
  /**
   * <p>The list of tags to use when evaluating an AND predicate.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
