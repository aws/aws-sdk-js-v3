/**
 * <p>Specifies the status and settings of the SMS channel for an application.</p>
 */
export interface _SMSChannelRequest {
  /**
   * <p>Specifies whether to enable the SMS channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The identity that you want to display on recipients' devices when they receive messages from the SMS channel.</p>
   */
  SenderId?: string;

  /**
   * <p>The registered short code that you want to use when you send messages through the SMS channel.</p>
   */
  ShortCode?: string;
}

export type _UnmarshalledSMSChannelRequest = _SMSChannelRequest;
