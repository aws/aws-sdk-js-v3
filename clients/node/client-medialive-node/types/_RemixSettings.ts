import {
  _AudioChannelMapping,
  _UnmarshalledAudioChannelMapping
} from "./_AudioChannelMapping";

/**
 * Remix Settings
 */
export interface _RemixSettings {
  /**
   * Mapping of input channels to output channels, with appropriate gain adjustments.
   */
  ChannelMappings: Array<_AudioChannelMapping> | Iterable<_AudioChannelMapping>;

  /**
   * Number of input channels to be used.
   */
  ChannelsIn?: number;

  /**
   * Number of output channels to be produced.
   * Valid values: 1, 2, 4, 6, 8
   */
  ChannelsOut?: number;
}

export interface _UnmarshalledRemixSettings extends _RemixSettings {
  /**
   * Mapping of input channels to output channels, with appropriate gain adjustments.
   */
  ChannelMappings: Array<_UnmarshalledAudioChannelMapping>;
}
