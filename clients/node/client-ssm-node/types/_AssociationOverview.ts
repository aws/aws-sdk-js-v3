/**
 * <p>Information about the association.</p>
 */
export interface _AssociationOverview {
  /**
   * <p>The status of the association. Status can be: Pending, Success, or Failed.</p>
   */
  Status?: string;

  /**
   * <p>A detailed status of the association.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>Returns the number of targets for the association status. For example, if you created an association with two instances, and one of them was successful, this would return the count of instances by status.</p>
   */
  AssociationStatusAggregatedCount?:
    | { [key: string]: number }
    | Iterable<[string, number]>;
}

export interface _UnmarshalledAssociationOverview extends _AssociationOverview {
  /**
   * <p>Returns the number of targets for the association status. For example, if you created an association with two instances, and one of them was successful, this would return the count of instances by status.</p>
   */
  AssociationStatusAggregatedCount?: { [key: string]: number };
}
