/**
 * <p>Details about the Dedicated Host Reservation offering.</p>
 */
export interface _HostOffering {
  /**
   * <p>The currency of the offering.</p>
   */
  CurrencyCode?: "USD" | string;

  /**
   * <p>The duration of the offering (in seconds).</p>
   */
  Duration?: number;

  /**
   * <p>The hourly price of the offering.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance family of the offering.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The ID of the offering.</p>
   */
  OfferingId?: string;

  /**
   * <p>The available payment option.</p>
   */
  PaymentOption?: "AllUpfront" | "PartialUpfront" | "NoUpfront" | string;

  /**
   * <p>The upfront price of the offering. Does not apply to No Upfront offerings.</p>
   */
  UpfrontPrice?: string;
}

export type _UnmarshalledHostOffering = _HostOffering;
