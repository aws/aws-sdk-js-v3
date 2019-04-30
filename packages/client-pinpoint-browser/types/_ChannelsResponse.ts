import {
  _ChannelResponse,
  _UnmarshalledChannelResponse
} from "./_ChannelResponse";

/**
 * Get channels definition
 */
export interface _ChannelsResponse {
  /**
   * A map of channels, with the ChannelType as the key and the Channel as the value.
   */
  Channels?:
    | { [key: string]: _ChannelResponse }
    | Iterable<[string, _ChannelResponse]>;
}

export interface _UnmarshalledChannelsResponse extends _ChannelsResponse {
  /**
   * A map of channels, with the ChannelType as the key and the Channel as the value.
   */
  Channels?: { [key: string]: _UnmarshalledChannelResponse };
}
