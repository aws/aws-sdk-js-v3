/**
 * <p>Describes a sorting entity</p>
 */
export interface _SnapshotSortingEntity {
  /**
   * <p>The category for sorting the snapshots.</p>
   */
  Attribute: "SOURCE_TYPE" | "TOTAL_SIZE" | "CREATE_TIME" | string;

  /**
   * <p>The order for listing the attributes.</p>
   */
  SortOrder?: "ASC" | "DESC" | string;
}

export type _UnmarshalledSnapshotSortingEntity = _SnapshotSortingEntity;
