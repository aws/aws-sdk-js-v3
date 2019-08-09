/**
 * Input Channel Level
 */
export interface _InputChannelLevel {
  /**
   * Remixing value. Units are in dB and acceptable values are within the range from -60 (mute) and 6 dB.
   */
  Gain: number;

  /**
   * The index of the input channel used as a source.
   */
  InputChannel: number;
}

export type _UnmarshalledInputChannelLevel = _InputChannelLevel;
