/**
 * SMS Channel Request
 */
export interface _SMSChannelRequest {
  /**
   * If the channel is enabled for sending messages.
   */
  Enabled?: boolean;

  /**
   * Sender identifier of your messages.
   */
  SenderId?: string;

  /**
   * ShortCode registered with phone provider.
   */
  ShortCode?: string;
}

export type _UnmarshalledSMSChannelRequest = _SMSChannelRequest;
