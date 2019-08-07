/**
 * Google Cloud Messaging credentials
 */
export interface _GCMChannelRequest {
  /**
   * Platform credential API key from Google.
   */
  ApiKey?: string;

  /**
   * If the channel is enabled for sending messages.
   */
  Enabled?: boolean;
}

export type _UnmarshalledGCMChannelRequest = _GCMChannelRequest;
