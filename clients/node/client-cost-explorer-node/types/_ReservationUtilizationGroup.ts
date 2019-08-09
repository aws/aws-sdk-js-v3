import {
  _ReservationAggregates,
  _UnmarshalledReservationAggregates
} from "./_ReservationAggregates";

/**
 * <p>A group of reservations that share a set of attributes.</p>
 */
export interface _ReservationUtilizationGroup {
  /**
   * <p>The key for a specific reservation attribute.</p>
   */
  Key?: string;

  /**
   * <p>The value of a specific reservation attribute.</p>
   */
  Value?: string;

  /**
   * <p>The attributes for this group of reservations.</p>
   */
  Attributes?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>How much you used this group of reservations.</p>
   */
  Utilization?: _ReservationAggregates;
}

export interface _UnmarshalledReservationUtilizationGroup
  extends _ReservationUtilizationGroup {
  /**
   * <p>The attributes for this group of reservations.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>How much you used this group of reservations.</p>
   */
  Utilization?: _UnmarshalledReservationAggregates;
}
