/**
 * <p>Settings that allow management of telephony permissions for an Amazon Chime user, such as inbound and outbound calling and text messaging.</p>
 */
export interface _TelephonySettings {
  /**
   * <p>Allows or denies inbound calling.</p>
   */
  InboundCalling: boolean;

  /**
   * <p>Allows or denies outbound calling.</p>
   */
  OutboundCalling: boolean;

  /**
   * <p>Allows or denies SMS messaging.</p>
   */
  SMS: boolean;
}

export type _UnmarshalledTelephonySettings = _TelephonySettings;
