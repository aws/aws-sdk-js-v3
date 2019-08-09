import {
  _KinesisDataStream,
  _UnmarshalledKinesisDataStream
} from "./_KinesisDataStream";

/**
 * <p>Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.</p>
 */
export interface _StreamProcessorOutput {
  /**
   * <p>The Amazon Kinesis Data Streams stream to which the Amazon Rekognition stream processor streams the analysis results.</p>
   */
  KinesisDataStream?: _KinesisDataStream;
}

export interface _UnmarshalledStreamProcessorOutput
  extends _StreamProcessorOutput {
  /**
   * <p>The Amazon Kinesis Data Streams stream to which the Amazon Rekognition stream processor streams the analysis results.</p>
   */
  KinesisDataStream?: _UnmarshalledKinesisDataStream;
}
