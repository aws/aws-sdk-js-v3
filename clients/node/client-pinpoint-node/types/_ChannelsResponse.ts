import {
  _ChannelResponse,
  _UnmarshalledChannelResponse
} from "./_ChannelResponse";

/**
 * <p>Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.</p>
 */
export interface _ChannelsResponse {
  /**
   * <p>A map that contains a multipart response for each channel. For each item in this object, the ChannelType is the key and the Channel is the value.</p>
   */
  Channels:
    | { [key: string]: _ChannelResponse }
    | Iterable<[string, _ChannelResponse]>;
}

export interface _UnmarshalledChannelsResponse extends _ChannelsResponse {
  /**
   * <p>A map that contains a multipart response for each channel. For each item in this object, the ChannelType is the key and the Channel is the value.</p>
   */
  Channels: { [key: string]: _UnmarshalledChannelResponse };
}
