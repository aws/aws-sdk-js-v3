/**
 * <p>Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
 */
export interface _GCMChannelRequest {
  /**
   * <p>The API key, also referred to as a <i>server key</i>, that you received from Google to communicate with Google services.</p>
   */
  ApiKey: string;

  /**
   * <p>Specifies whether to enable the GCM channel for the application.</p>
   */
  Enabled?: boolean;
}

export type _UnmarshalledGCMChannelRequest = _GCMChannelRequest;
