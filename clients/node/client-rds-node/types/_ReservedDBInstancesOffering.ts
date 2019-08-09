import {
  _RecurringCharge,
  _UnmarshalledRecurringCharge
} from "./_RecurringCharge";

/**
 * <p> This data type is used as a response element in the <code>DescribeReservedDBInstancesOfferings</code> action. </p>
 */
export interface _ReservedDBInstancesOffering {
  /**
   * <p>The offering identifier.</p>
   */
  ReservedDBInstancesOfferingId?: string;

  /**
   * <p>The DB instance class for the reserved DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The duration of the offering in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this offering.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The hourly price charged for this offering.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the reserved DB instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The database engine used by the offering.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type.</p>
   */
  OfferingType?: string;

  /**
   * <p>Indicates if the offering applies to Multi-AZ deployments.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The recurring price charged to run this reserved DB instance.</p>
   */
  RecurringCharges?: Array<_RecurringCharge> | Iterable<_RecurringCharge>;
}

export interface _UnmarshalledReservedDBInstancesOffering
  extends _ReservedDBInstancesOffering {
  /**
   * <p>The recurring price charged to run this reserved DB instance.</p>
   */
  RecurringCharges?: Array<_UnmarshalledRecurringCharge>;
}
