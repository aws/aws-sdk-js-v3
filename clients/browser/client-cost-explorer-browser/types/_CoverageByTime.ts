import { _DateInterval, _UnmarshalledDateInterval } from "./_DateInterval";
import {
  _ReservationCoverageGroup,
  _UnmarshalledReservationCoverageGroup
} from "./_ReservationCoverageGroup";
import { _Coverage, _UnmarshalledCoverage } from "./_Coverage";

/**
 * <p>Reservation coverage for a specified period, in hours.</p>
 */
export interface _CoverageByTime {
  /**
   * <p>The period that this coverage was used over.</p>
   */
  TimePeriod?: _DateInterval;

  /**
   * <p>The groups of instances that the reservation covered.</p>
   */
  Groups?:
    | Array<_ReservationCoverageGroup>
    | Iterable<_ReservationCoverageGroup>;

  /**
   * <p>The total reservation coverage, in hours.</p>
   */
  Total?: _Coverage;
}

export interface _UnmarshalledCoverageByTime extends _CoverageByTime {
  /**
   * <p>The period that this coverage was used over.</p>
   */
  TimePeriod?: _UnmarshalledDateInterval;

  /**
   * <p>The groups of instances that the reservation covered.</p>
   */
  Groups?: Array<_UnmarshalledReservationCoverageGroup>;

  /**
   * <p>The total reservation coverage, in hours.</p>
   */
  Total?: _UnmarshalledCoverage;
}
