import {
  _InstanceDetails,
  _UnmarshalledInstanceDetails
} from "./_InstanceDetails";

/**
 * <p>Details about your recommended reservation purchase.</p>
 */
export interface _ReservationPurchaseRecommendationDetail {
  /**
   * <p>The account that this RI recommendation is for.</p>
   */
  AccountId?: string;

  /**
   * <p>Details about the instances that AWS recommends that you purchase.</p>
   */
  InstanceDetails?: _InstanceDetails;

  /**
   * <p>The number of instances that AWS recommends that you purchase.</p>
   */
  RecommendedNumberOfInstancesToPurchase?: string;

  /**
   * <p>The number of normalized units that AWS recommends that you purchase.</p>
   */
  RecommendedNormalizedUnitsToPurchase?: string;

  /**
   * <p>The minimum number of instances that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.</p>
   */
  MinimumNumberOfInstancesUsedPerHour?: string;

  /**
   * <p>The minimum number of normalized units that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.</p>
   */
  MinimumNormalizedUnitsUsedPerHour?: string;

  /**
   * <p>The maximum number of instances that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.</p>
   */
  MaximumNumberOfInstancesUsedPerHour?: string;

  /**
   * <p>The maximum number of normalized units that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.</p>
   */
  MaximumNormalizedUnitsUsedPerHour?: string;

  /**
   * <p>The average number of instances that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.</p>
   */
  AverageNumberOfInstancesUsedPerHour?: string;

  /**
   * <p>The average number of normalized units that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.</p>
   */
  AverageNormalizedUnitsUsedPerHour?: string;

  /**
   * <p>The average utilization of your instances. AWS uses this to calculate your recommended reservation purchases.</p>
   */
  AverageUtilization?: string;

  /**
   * <p>How long AWS estimates that it takes for this instance to start saving you money, in months.</p>
   */
  EstimatedBreakEvenInMonths?: string;

  /**
   * <p>The currency code that AWS used to calculate the costs for this instance.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>How much AWS estimates that this specific recommendation could save you in a month.</p>
   */
  EstimatedMonthlySavingsAmount?: string;

  /**
   * <p>How much AWS estimates that this specific recommendation could save you in a month, as a percentage of your overall costs.</p>
   */
  EstimatedMonthlySavingsPercentage?: string;

  /**
   * <p>How much AWS estimates that you spend on On-Demand Instances in a month.</p>
   */
  EstimatedMonthlyOnDemandCost?: string;

  /**
   * <p>How much AWS estimates that you would have spent for all usage during the specified historical period if you had had a reservation.</p>
   */
  EstimatedReservationCostForLookbackPeriod?: string;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   */
  UpfrontCost?: string;

  /**
   * <p>How much purchasing this instance costs you on a monthly basis.</p>
   */
  RecurringStandardMonthlyCost?: string;
}

export interface _UnmarshalledReservationPurchaseRecommendationDetail
  extends _ReservationPurchaseRecommendationDetail {
  /**
   * <p>Details about the instances that AWS recommends that you purchase.</p>
   */
  InstanceDetails?: _UnmarshalledInstanceDetails;
}
