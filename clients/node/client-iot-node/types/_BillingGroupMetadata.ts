/**
 * <p>Additional information about the billing group.</p>
 */
export interface _BillingGroupMetadata {
  /**
   * <p>The date the billing group was created.</p>
   */
  creationDate?: Date | string | number;
}

export interface _UnmarshalledBillingGroupMetadata
  extends _BillingGroupMetadata {
  /**
   * <p>The date the billing group was created.</p>
   */
  creationDate?: Date;
}
