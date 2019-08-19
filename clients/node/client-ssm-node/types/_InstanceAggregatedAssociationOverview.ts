/**
 * <p>Status information about the aggregated associations.</p>
 */
export interface _InstanceAggregatedAssociationOverview {
  /**
   * <p>Detailed status information about the aggregated associations.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>The number of associations for the instance(s).</p>
   */
  InstanceAssociationStatusAggregatedCount?:
    | { [key: string]: number }
    | Iterable<[string, number]>;
}

export interface _UnmarshalledInstanceAggregatedAssociationOverview
  extends _InstanceAggregatedAssociationOverview {
  /**
   * <p>The number of associations for the instance(s).</p>
   */
  InstanceAssociationStatusAggregatedCount?: { [key: string]: number };
}
