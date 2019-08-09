import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Details about the Dedicated Host Reservation and associated Dedicated Hosts.</p>
 */
export interface _HostReservation {
  /**
   * <p>The number of Dedicated Hosts the reservation is associated with.</p>
   */
  Count?: number;

  /**
   * <p>The currency in which the <code>upfrontPrice</code> and <code>hourlyPrice</code> amounts are specified. At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: "USD" | string;

  /**
   * <p>The length of the reservation's term, specified in seconds. Can be <code>31536000 (1 year)</code> | <code>94608000 (3 years)</code>.</p>
   */
  Duration?: number;

  /**
   * <p>The date and time that the reservation ends.</p>
   */
  End?: Date | string | number;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: Array<string> | Iterable<string>;

  /**
   * <p>The ID of the reservation that specifies the associated Dedicated Hosts.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The hourly price of the reservation.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance family of the Dedicated Host Reservation. The instance family on the Dedicated Host must be the same in order for it to benefit from the reservation.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The ID of the reservation. This remains the same regardless of which Dedicated Hosts are associated with it.</p>
   */
  OfferingId?: string;

  /**
   * <p>The payment option selected for this reservation.</p>
   */
  PaymentOption?: "AllUpfront" | "PartialUpfront" | "NoUpfront" | string;

  /**
   * <p>The date and time that the reservation started.</p>
   */
  Start?: Date | string | number;

  /**
   * <p>The state of the reservation.</p>
   */
  State?: "payment-pending" | "payment-failed" | "active" | "retired" | string;

  /**
   * <p>The upfront price of the reservation.</p>
   */
  UpfrontPrice?: string;

  /**
   * <p>Any tags assigned to the Dedicated Host Reservation.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledHostReservation extends _HostReservation {
  /**
   * <p>The date and time that the reservation ends.</p>
   */
  End?: Date;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: Array<string>;

  /**
   * <p>The date and time that the reservation started.</p>
   */
  Start?: Date;

  /**
   * <p>Any tags assigned to the Dedicated Host Reservation.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
