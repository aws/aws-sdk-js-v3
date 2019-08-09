/**
 * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation.</p>
 */
export interface _VideoMetadata {
  /**
   * <p>Type of compression used in the analyzed video. </p>
   */
  Codec?: string;

  /**
   * <p>Length of the video in milliseconds.</p>
   */
  DurationMillis?: number;

  /**
   * <p>Format of the analyzed video. Possible values are MP4, MOV and AVI. </p>
   */
  Format?: string;

  /**
   * <p>Number of frames per second in the video.</p>
   */
  FrameRate?: number;

  /**
   * <p>Vertical pixel dimension of the video.</p>
   */
  FrameHeight?: number;

  /**
   * <p>Horizontal pixel dimension of the video.</p>
   */
  FrameWidth?: number;
}

export type _UnmarshalledVideoMetadata = _VideoMetadata;
