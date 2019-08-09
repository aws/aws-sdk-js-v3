import { _OpsFilter, _UnmarshalledOpsFilter } from "./_OpsFilter";

/**
 * <p>One or more aggregators for viewing counts of OpsItems using different dimensions such as <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a few.</p>
 */
export interface _OpsAggregator {
  /**
   * <p>Either a Range or Count aggregator for limiting an OpsItem summary.</p>
   */
  AggregatorType?: string;

  /**
   * <p>The data type name to use for viewing counts of OpsItems.</p>
   */
  TypeName?: string;

  /**
   * <p>The name of an OpsItem attribute on which to limit the count of OpsItems.</p>
   */
  AttributeName?: string;

  /**
   * <p>The aggregator value.</p>
   */
  Values?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The aggregator filters.</p>
   */
  Filters?: Array<_OpsFilter> | Iterable<_OpsFilter>;

  /**
   * <p>A nested aggregator for viewing counts of OpsItems.</p>
   */
  Aggregators?: Array<_OpsAggregator> | Iterable<_OpsAggregator>;
}

export interface _UnmarshalledOpsAggregator extends _OpsAggregator {
  /**
   * <p>The aggregator value.</p>
   */
  Values?: { [key: string]: string };

  /**
   * <p>The aggregator filters.</p>
   */
  Filters?: Array<_UnmarshalledOpsFilter>;

  /**
   * <p>A nested aggregator for viewing counts of OpsItems.</p>
   */
  Aggregators?: Array<_UnmarshalledOpsAggregator>;
}
