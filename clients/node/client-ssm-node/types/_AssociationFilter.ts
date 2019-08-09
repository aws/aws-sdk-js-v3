/**
 * <p>Describes a filter.</p>
 */
export interface _AssociationFilter {
  /**
   * <p>The name of the filter.</p>
   */
  key:
    | "InstanceId"
    | "Name"
    | "AssociationId"
    | "AssociationStatusName"
    | "LastExecutedBefore"
    | "LastExecutedAfter"
    | "AssociationName"
    | string;

  /**
   * <p>The filter value.</p>
   */
  value: string;
}

export type _UnmarshalledAssociationFilter = _AssociationFilter;
