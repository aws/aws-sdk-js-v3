/**
 * <p>The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.</p>
 */
export interface _KinesisDataStream {
  /**
   * <p>ARN of the output Amazon Kinesis Data Streams stream.</p>
   */
  Arn?: string;
}

export type _UnmarshalledKinesisDataStream = _KinesisDataStream;
