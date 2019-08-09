/**
 * <p>The phone number ID and product type fields to update, used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.</p>
 */
export interface _UpdatePhoneNumberRequestItem {
  /**
   * <p>The phone number ID to update.</p>
   */
  PhoneNumberId: string;

  /**
   * <p>The product type to update.</p>
   */
  ProductType?: "BusinessCalling" | "VoiceConnector" | string;
}

export type _UnmarshalledUpdatePhoneNumberRequestItem = _UpdatePhoneNumberRequestItem;
