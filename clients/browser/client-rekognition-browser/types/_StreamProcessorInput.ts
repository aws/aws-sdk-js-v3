import {
  _KinesisVideoStream,
  _UnmarshalledKinesisVideoStream
} from "./_KinesisVideoStream";

/**
 * <p>Information about the source streaming video. </p>
 */
export interface _StreamProcessorInput {
  /**
   * <p>The Kinesis video stream input stream for the source streaming video.</p>
   */
  KinesisVideoStream?: _KinesisVideoStream;
}

export interface _UnmarshalledStreamProcessorInput
  extends _StreamProcessorInput {
  /**
   * <p>The Kinesis video stream input stream for the source streaming video.</p>
   */
  KinesisVideoStream?: _UnmarshalledKinesisVideoStream;
}
