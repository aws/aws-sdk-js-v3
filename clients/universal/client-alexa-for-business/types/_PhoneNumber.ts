/**
 * <p>The phone number for the contact containing the raw number and phone number type.</p>
 */
export interface _PhoneNumber {
  /**
   * <p>The raw value of the phone number.</p>
   */
  Number: string;

  /**
   * <p>The type of the phone number.</p>
   */
  Type: "MOBILE" | "WORK" | "HOME" | string;
}

export type _UnmarshalledPhoneNumber = _PhoneNumber;
