import {
  _ReservationValue,
  _UnmarshalledReservationValue
} from "./_ReservationValue";

/**
 * <p>The total value of the Convertible Reserved Instance.</p>
 */
export interface _ReservedInstanceReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservationValue?: _ReservationValue;

  /**
   * <p>The ID of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservedInstanceId?: string;
}

export interface _UnmarshalledReservedInstanceReservationValue
  extends _ReservedInstanceReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservationValue?: _UnmarshalledReservationValue;
}
