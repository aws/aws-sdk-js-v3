import { _S3Object, _UnmarshalledS3Object } from "./_S3Object";

/**
 * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
 */
export interface _Video {
  /**
   * <p>The Amazon S3 bucket name and file name for the video.</p>
   */
  S3Object?: _S3Object;
}

export interface _UnmarshalledVideo extends _Video {
  /**
   * <p>The Amazon S3 bucket name and file name for the video.</p>
   */
  S3Object?: _UnmarshalledS3Object;
}
