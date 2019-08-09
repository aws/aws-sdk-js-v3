/**
 * <p>How long a running instance either used a reservation or was On-Demand.</p>
 */
export interface _CoverageHours {
  /**
   * <p>The number of instance running hours that On-Demand Instances covered.</p>
   */
  OnDemandHours?: string;

  /**
   * <p>The number of instance running hours that reservations covered.</p>
   */
  ReservedHours?: string;

  /**
   * <p>The total instance usage, in hours.</p>
   */
  TotalRunningHours?: string;

  /**
   * <p>The percentage of instance hours that a reservation covered.</p>
   */
  CoverageHoursPercentage?: string;
}

export type _UnmarshalledCoverageHours = _CoverageHours;
