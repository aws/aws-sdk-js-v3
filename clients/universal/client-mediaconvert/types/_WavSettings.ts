/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.
 */
export interface _WavSettings {
  /**
   * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
   */
  BitDepth?: number;

  /**
   * Set Channels to specify the number of channels in this output audio track. With WAV, valid values 1, 2, 4, and 8. In the console, these values are Mono, Stereo, 4-Channel, and 8-Channel, respectively.
   */
  Channels?: number;

  /**
   * The service defaults to using RIFF for WAV outputs. If your output audio is likely to exceed 4 GB in file size, or if you otherwise need the extended support of the RF64 format, set your output WAV file format to RF64.
   */
  Format?: "RIFF" | "RF64" | string;

  /**
   * Sample rate in Hz.
   */
  SampleRate?: number;
}

export type _UnmarshalledWavSettings = _WavSettings;
