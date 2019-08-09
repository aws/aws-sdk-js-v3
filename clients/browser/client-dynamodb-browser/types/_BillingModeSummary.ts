/**
 * <p>Contains the details for the read/write capacity mode.</p>
 */
export interface _BillingModeSummary {
  /**
   * <p>Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.</p> <ul> <li> <p> <code>PROVISIONED</code> - Sets the read/write capacity mode to <code>PROVISIONED</code>. We recommend using <code>PROVISIONED</code> for predictable workloads.</p> </li> <li> <p> <code>PAY_PER_REQUEST</code> - Sets the read/write capacity mode to <code>PAY_PER_REQUEST</code>. We recommend using <code>PAY_PER_REQUEST</code> for unpredictable workloads. </p> </li> </ul>
   */
  BillingMode?: "PROVISIONED" | "PAY_PER_REQUEST" | string;

  /**
   * <p>Represents the time when <code>PAY_PER_REQUEST</code> was last set as the read/write capacity mode.</p>
   */
  LastUpdateToPayPerRequestDateTime?: Date | string | number;
}

export interface _UnmarshalledBillingModeSummary extends _BillingModeSummary {
  /**
   * <p>Represents the time when <code>PAY_PER_REQUEST</code> was last set as the read/write capacity mode.</p>
   */
  LastUpdateToPayPerRequestDateTime?: Date;
}
