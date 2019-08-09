/**
 * <p>A UsageRecord indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same UsageRecords as input will be deduplicated to prevent double charges.</p>
 */
export interface _UsageRecord {
  /**
   * <p>Timestamp, in UTC, for which the usage is being reported.</p> <p>Your application can meter usage for up to one hour in the past. Make sure the timestamp value is not before the start of the software usage.</p>
   */
  Timestamp: Date | string | number;

  /**
   * <p>The CustomerIdentifier is obtained through the ResolveCustomer operation and represents an individual buyer in your application.</p>
   */
  CustomerIdentifier: string;

  /**
   * <p>During the process of registering a product on AWS Marketplace, up to eight dimensions are specified. These represent different units of value in your application.</p>
   */
  Dimension: string;

  /**
   * <p>The quantity of usage consumed by the customer for the given dimension and time. Defaults to <code>0</code> if not specified.</p>
   */
  Quantity?: number;
}

export interface _UnmarshalledUsageRecord extends _UsageRecord {
  /**
   * <p>Timestamp, in UTC, for which the usage is being reported.</p> <p>Your application can meter usage for up to one hour in the past. Make sure the timestamp value is not before the start of the software usage.</p>
   */
  Timestamp: Date;
}
