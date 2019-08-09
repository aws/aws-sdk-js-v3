/**
 * OutputChannel mapping settings.
 */
export interface _OutputChannelMapping {
  /**
   * List of input channels
   */
  InputChannels?: Array<number> | Iterable<number>;
}

export interface _UnmarshalledOutputChannelMapping
  extends _OutputChannelMapping {
  /**
   * List of input channels
   */
  InputChannels?: Array<number>;
}
