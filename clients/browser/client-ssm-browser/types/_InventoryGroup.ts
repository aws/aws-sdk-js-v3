import {
  _InventoryFilter,
  _UnmarshalledInventoryFilter
} from "./_InventoryFilter";

/**
 * <p>A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.</p>
 */
export interface _InventoryGroup {
  /**
   * <p>The name of the group.</p>
   */
  Name: string;

  /**
   * <p>Filters define the criteria for the group. The <code>matchingCount</code> field displays the number of resources that match the criteria. The <code>notMatchingCount</code> field displays the number of resources that don't match the criteria. </p>
   */
  Filters: Array<_InventoryFilter> | Iterable<_InventoryFilter>;
}

export interface _UnmarshalledInventoryGroup extends _InventoryGroup {
  /**
   * <p>Filters define the criteria for the group. The <code>matchingCount</code> field displays the number of resources that match the criteria. The <code>notMatchingCount</code> field displays the number of resources that don't match the criteria. </p>
   */
  Filters: Array<_UnmarshalledInventoryFilter>;
}
