/**
 * <p/>
 */
export interface _ClusterAssociatedToSchedule {
  /**
   * <p/>
   */
  ClusterIdentifier?: string;

  /**
   * <p/>
   */
  ScheduleAssociationState?: "MODIFYING" | "ACTIVE" | "FAILED" | string;
}

export type _UnmarshalledClusterAssociatedToSchedule = _ClusterAssociatedToSchedule;
