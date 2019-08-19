import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p/>
 */
export interface _MetricsAndOperator {
  /**
   * <p>The prefix used when evaluating an AND predicate.</p>
   */
  Prefix?: string;

  /**
   * <p>The list of tags used when evaluating an AND predicate.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledMetricsAndOperator extends _MetricsAndOperator {
  /**
   * <p>The list of tags used when evaluating an AND predicate.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
