/**
 * <p>The code delivery details being returned from the server.</p>
 */
export interface _CodeDeliveryDetailsType {
  /**
   * <p>The destination for the code delivery details.</p>
   */
  Destination?: string;

  /**
   * <p>The delivery medium (email message or phone number).</p>
   */
  DeliveryMedium?: "SMS" | "EMAIL" | string;

  /**
   * <p>The attribute name.</p>
   */
  AttributeName?: string;
}

export type _UnmarshalledCodeDeliveryDetailsType = _CodeDeliveryDetailsType;
