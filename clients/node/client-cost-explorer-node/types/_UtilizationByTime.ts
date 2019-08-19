import { _DateInterval, _UnmarshalledDateInterval } from "./_DateInterval";
import {
  _ReservationUtilizationGroup,
  _UnmarshalledReservationUtilizationGroup
} from "./_ReservationUtilizationGroup";
import {
  _ReservationAggregates,
  _UnmarshalledReservationAggregates
} from "./_ReservationAggregates";

/**
 * <p>The amount of utilization, in hours.</p>
 */
export interface _UtilizationByTime {
  /**
   * <p>The period of time that this utilization was used for.</p>
   */
  TimePeriod?: _DateInterval;

  /**
   * <p>The groups that this utilization result uses.</p>
   */
  Groups?:
    | Array<_ReservationUtilizationGroup>
    | Iterable<_ReservationUtilizationGroup>;

  /**
   * <p>The total number of reservation hours that were used.</p>
   */
  Total?: _ReservationAggregates;
}

export interface _UnmarshalledUtilizationByTime extends _UtilizationByTime {
  /**
   * <p>The period of time that this utilization was used for.</p>
   */
  TimePeriod?: _UnmarshalledDateInterval;

  /**
   * <p>The groups that this utilization result uses.</p>
   */
  Groups?: Array<_UnmarshalledReservationUtilizationGroup>;

  /**
   * <p>The total number of reservation hours that were used.</p>
   */
  Total?: _UnmarshalledReservationAggregates;
}
