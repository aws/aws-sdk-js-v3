/**
 * <p>Specifies the different settings for multi-factor authentication (MFA).</p>
 */
export interface _MFAOptionType {
  /**
   * <p>The delivery medium (email message or SMS message) to send the MFA code.</p>
   */
  DeliveryMedium?: "SMS" | "EMAIL" | string;

  /**
   * <p>The attribute name of the MFA option type.</p>
   */
  AttributeName?: string;
}

export type _UnmarshalledMFAOptionType = _MFAOptionType;
