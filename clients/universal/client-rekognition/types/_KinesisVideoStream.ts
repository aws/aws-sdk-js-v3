/**
 * <p>Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.</p>
 */
export interface _KinesisVideoStream {
  /**
   * <p>ARN of the Kinesis video stream stream that streams the source video.</p>
   */
  Arn?: string;
}

export type _UnmarshalledKinesisVideoStream = _KinesisVideoStream;
