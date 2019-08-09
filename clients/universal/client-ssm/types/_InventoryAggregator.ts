import {
  _InventoryGroup,
  _UnmarshalledInventoryGroup
} from "./_InventoryGroup";

/**
 * <p>Specifies the inventory type and attribute for the aggregation execution.</p>
 */
export interface _InventoryAggregator {
  /**
   * <p>The inventory type and attribute name for aggregation.</p>
   */
  Expression?: string;

  /**
   * <p>Nested aggregators to further refine aggregation for an inventory type.</p>
   */
  Aggregators?: Array<_InventoryAggregator> | Iterable<_InventoryAggregator>;

  /**
   * <p>A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.</p>
   */
  Groups?: Array<_InventoryGroup> | Iterable<_InventoryGroup>;
}

export interface _UnmarshalledInventoryAggregator extends _InventoryAggregator {
  /**
   * <p>Nested aggregators to further refine aggregation for an inventory type.</p>
   */
  Aggregators?: Array<_UnmarshalledInventoryAggregator>;

  /**
   * <p>A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.</p>
   */
  Groups?: Array<_UnmarshalledInventoryGroup>;
}
