/**
 * <p>The cost associated with the Reserved Instance.</p>
 */
export interface _ReservationValue {
  /**
   * <p>The hourly rate of the reservation.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The balance of the total value (the sum of remainingUpfrontValue + hourlyPrice * number of hours remaining).</p>
   */
  RemainingTotalValue?: string;

  /**
   * <p>The remaining upfront cost of the reservation.</p>
   */
  RemainingUpfrontValue?: string;
}

export type _UnmarshalledReservationValue = _ReservationValue;
