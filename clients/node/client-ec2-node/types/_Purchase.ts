/**
 * <p>Describes the result of the purchase.</p>
 */
export interface _Purchase {
  /**
   * <p>The currency in which the <code>UpfrontPrice</code> and <code>HourlyPrice</code> amounts are specified. At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: "USD" | string;

  /**
   * <p>The duration of the reservation's term in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: Array<string> | Iterable<string>;

  /**
   * <p>The ID of the reservation.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The hourly price of the reservation per hour.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance family on the Dedicated Host that the reservation can be associated with.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The payment option for the reservation.</p>
   */
  PaymentOption?: "AllUpfront" | "PartialUpfront" | "NoUpfront" | string;

  /**
   * <p>The upfront price of the reservation.</p>
   */
  UpfrontPrice?: string;
}

export interface _UnmarshalledPurchase extends _Purchase {
  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: Array<string>;
}
