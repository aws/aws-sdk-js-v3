/**
 * <p>The detected properties of the input file. Elastic Transcoder identifies these values from the input file.</p>
 */
export interface _DetectedProperties {
  /**
   * <p>The detected width of the input file, in pixels.</p>
   */
  Width?: number;

  /**
   * <p>The detected height of the input file, in pixels.</p>
   */
  Height?: number;

  /**
   * <p>The detected frame rate of the input file, in frames per second.</p>
   */
  FrameRate?: string;

  /**
   * <p>The detected file size of the input file, in bytes.</p>
   */
  FileSize?: number;

  /**
   * <p>The detected duration of the input file, in milliseconds.</p>
   */
  DurationMillis?: number;
}

export type _UnmarshalledDetectedProperties = _DetectedProperties;
