/**
 * <p>The count of resources that are grouped by the group name.</p>
 */
export interface _GroupedResourceCount {
  /**
   * <p>The name of the group that can be region, account ID, or resource type. For example, region1, region2 if the region was chosen as <code>GroupByKey</code>.</p>
   */
  GroupName: string;

  /**
   * <p>The number of resources in the group.</p>
   */
  ResourceCount: number;
}

export type _UnmarshalledGroupedResourceCount = _GroupedResourceCount;
