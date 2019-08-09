/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.
 */
export interface _AiffSettings {
  /**
   * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
   */
  BitDepth?: number;

  /**
   * Set Channels to specify the number of channels in this output audio track. Choosing Mono in the console will give you 1 output channel; choosing Stereo will give you 2. In the API, valid values are 1 and 2.
   */
  Channels?: number;

  /**
   * Sample rate in hz.
   */
  SampleRate?: number;
}

export type _UnmarshalledAiffSettings = _AiffSettings;
