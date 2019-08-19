import {
  _InputChannelLevel,
  _UnmarshalledInputChannelLevel
} from "./_InputChannelLevel";

/**
 * Audio Channel Mapping
 */
export interface _AudioChannelMapping {
  /**
   * Indices and gain values for each input channel that should be remixed into this output channel.
   */
  InputChannelLevels: Array<_InputChannelLevel> | Iterable<_InputChannelLevel>;

  /**
   * The index of the output channel being produced.
   */
  OutputChannel: number;
}

export interface _UnmarshalledAudioChannelMapping extends _AudioChannelMapping {
  /**
   * Indices and gain values for each input channel that should be remixed into this output channel.
   */
  InputChannelLevels: Array<_UnmarshalledInputChannelLevel>;
}
