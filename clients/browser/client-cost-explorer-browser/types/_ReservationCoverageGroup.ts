import { _Coverage, _UnmarshalledCoverage } from "./_Coverage";

/**
 * <p>A group of reservations that share a set of attributes.</p>
 */
export interface _ReservationCoverageGroup {
  /**
   * <p>The attributes for this group of reservations.</p>
   */
  Attributes?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>How much instance usage this group of reservations covered.</p>
   */
  Coverage?: _Coverage;
}

export interface _UnmarshalledReservationCoverageGroup
  extends _ReservationCoverageGroup {
  /**
   * <p>The attributes for this group of reservations.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>How much instance usage this group of reservations covered.</p>
   */
  Coverage?: _UnmarshalledCoverage;
}
