/**
 * <p>The aggregated numbers for your reservation usage.</p>
 */
export interface _ReservationAggregates {
  /**
   * <p>The percentage of reservation time that you used.</p>
   */
  UtilizationPercentage?: string;

  /**
   * <p>The percentage of Amazon EC2 reservation time that you used, converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.</p>
   */
  UtilizationPercentageInUnits?: string;

  /**
   * <p>How many reservation hours that you purchased.</p>
   */
  PurchasedHours?: string;

  /**
   * <p>How many Amazon EC2 reservation hours that you purchased, converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.</p>
   */
  PurchasedUnits?: string;

  /**
   * <p>The total number of reservation hours that you used.</p>
   */
  TotalActualHours?: string;

  /**
   * <p>The total number of Amazon EC2 reservation hours that you used, converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.</p>
   */
  TotalActualUnits?: string;

  /**
   * <p>The number of reservation hours that you didn't use.</p>
   */
  UnusedHours?: string;

  /**
   * <p>The number of Amazon EC2 reservation hours that you didn't use, converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.</p>
   */
  UnusedUnits?: string;

  /**
   * <p>How much your reservation would cost if charged On-Demand rates.</p>
   */
  OnDemandCostOfRIHoursUsed?: string;

  /**
   * <p>How much you saved due to purchasing and utilizing reservation. AWS calculates this by subtracting <code>TotalAmortizedFee</code> from <code>OnDemandCostOfRIHoursUsed</code>.</p>
   */
  NetRISavings?: string;

  /**
   * <p>How much you could save if you use your entire reservation.</p>
   */
  TotalPotentialRISavings?: string;

  /**
   * <p>The upfront cost of your reservation, amortized over the reservation period.</p>
   */
  AmortizedUpfrontFee?: string;

  /**
   * <p>The monthly cost of your reservation, amortized over the reservation period.</p>
   */
  AmortizedRecurringFee?: string;

  /**
   * <p>The total cost of your reservation, amortized over the reservation period.</p>
   */
  TotalAmortizedFee?: string;
}

export type _UnmarshalledReservationAggregates = _ReservationAggregates;
