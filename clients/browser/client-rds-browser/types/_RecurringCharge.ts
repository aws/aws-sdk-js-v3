/**
 * <p> This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>DescribeReservedDBInstancesOfferings</code> actions. </p>
 */
export interface _RecurringCharge {
  /**
   * <p>The amount of the recurring charge.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency of the recurring charge.</p>
   */
  RecurringChargeFrequency?: string;
}

export type _UnmarshalledRecurringCharge = _RecurringCharge;
