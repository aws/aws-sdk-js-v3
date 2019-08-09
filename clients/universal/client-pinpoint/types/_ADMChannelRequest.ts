/**
 * <p>Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
 */
export interface _ADMChannelRequest {
  /**
   * <p>The Client ID that you received from Amazon to send messages by using ADM.</p>
   */
  ClientId: string;

  /**
   * <p>The Client Secret that you received from Amazon to send messages by using ADM.</p>
   */
  ClientSecret: string;

  /**
   * <p>Specifies whether to enable the ADM channel for the application.</p>
   */
  Enabled?: boolean;
}

export type _UnmarshalledADMChannelRequest = _ADMChannelRequest;
