import {
  _ReservationValue,
  _UnmarshalledReservationValue
} from "./_ReservationValue";
import {
  _TargetConfiguration,
  _UnmarshalledTargetConfiguration
} from "./_TargetConfiguration";

/**
 * <p>The total value of the new Convertible Reserved Instances.</p>
 */
export interface _TargetReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instances that make up the exchange. This is the sum of the list value, remaining upfront price, and additional upfront cost of the exchange.</p>
   */
  ReservationValue?: _ReservationValue;

  /**
   * <p>The configuration of the Convertible Reserved Instances that make up the exchange.</p>
   */
  TargetConfiguration?: _TargetConfiguration;
}

export interface _UnmarshalledTargetReservationValue
  extends _TargetReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instances that make up the exchange. This is the sum of the list value, remaining upfront price, and additional upfront cost of the exchange.</p>
   */
  ReservationValue?: _UnmarshalledReservationValue;

  /**
   * <p>The configuration of the Convertible Reserved Instances that make up the exchange.</p>
   */
  TargetConfiguration?: _UnmarshalledTargetConfiguration;
}
