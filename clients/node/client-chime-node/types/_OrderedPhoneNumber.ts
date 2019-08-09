/**
 * <p>A phone number for which an order has been placed.</p>
 */
export interface _OrderedPhoneNumber {
  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;

  /**
   * <p>The phone number status.</p>
   */
  Status?: "Processing" | "Acquired" | "Failed" | string;
}

export type _UnmarshalledOrderedPhoneNumber = _OrderedPhoneNumber;
