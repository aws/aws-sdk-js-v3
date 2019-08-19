/**
 * <p>Describes a request to purchase Scheduled Instances.</p>
 */
export interface _PurchaseRequest {
  /**
   * <p>The number of instances.</p>
   */
  InstanceCount: number;

  /**
   * <p>The purchase token.</p>
   */
  PurchaseToken: string;
}

export type _UnmarshalledPurchaseRequest = _PurchaseRequest;
