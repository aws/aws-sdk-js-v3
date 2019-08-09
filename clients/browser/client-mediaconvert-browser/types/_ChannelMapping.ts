import {
  _OutputChannelMapping,
  _UnmarshalledOutputChannelMapping
} from "./_OutputChannelMapping";

/**
 * Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification).
 */
export interface _ChannelMapping {
  /**
   * List of output channels
   */
  OutputChannels?:
    | Array<_OutputChannelMapping>
    | Iterable<_OutputChannelMapping>;
}

export interface _UnmarshalledChannelMapping extends _ChannelMapping {
  /**
   * List of output channels
   */
  OutputChannels?: Array<_UnmarshalledOutputChannelMapping>;
}
