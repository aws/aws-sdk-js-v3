import {
  _ChannelMapping,
  _UnmarshalledChannelMapping
} from "./_ChannelMapping";

/**
 * Use Manual audio remixing (RemixSettings) to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides.
 */
export interface _RemixSettings {
  /**
   * Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification).
   */
  ChannelMapping?: _ChannelMapping;

  /**
   * Specify the number of audio channels from your input that you want to use in your output. With remixing, you might combine or split the data in these channels, so the number of channels in your final output might be different.
   */
  ChannelsIn?: number;

  /**
   * Specify the number of channels in this output after remixing. Valid values: 1, 2, 4, 6, 8
   */
  ChannelsOut?: number;
}

export interface _UnmarshalledRemixSettings extends _RemixSettings {
  /**
   * Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification).
   */
  ChannelMapping?: _UnmarshalledChannelMapping;
}
