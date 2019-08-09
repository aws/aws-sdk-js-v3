import {
  _KinesisStreamsOutput,
  _UnmarshalledKinesisStreamsOutput
} from "./_KinesisStreamsOutput";
import {
  _KinesisFirehoseOutput,
  _UnmarshalledKinesisFirehoseOutput
} from "./_KinesisFirehoseOutput";
import { _LambdaOutput, _UnmarshalledLambdaOutput } from "./_LambdaOutput";
import {
  _DestinationSchema,
  _UnmarshalledDestinationSchema
} from "./_DestinationSchema";

/**
 * <p> Describes an SQL-based Amazon Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/>
 */
export interface _Output {
  /**
   * <p>The name of the in-application stream.</p>
   */
  Name: string;

  /**
   * <p>Identifies an Amazon Kinesis data stream as the destination.</p>
   */
  KinesisStreamsOutput?: _KinesisStreamsOutput;

  /**
   * <p>Identifies an Amazon Kinesis Data Firehose delivery stream as the destination.</p>
   */
  KinesisFirehoseOutput?: _KinesisFirehoseOutput;

  /**
   * <p>Identifies an AWS Lambda function as the destination.</p>
   */
  LambdaOutput?: _LambdaOutput;

  /**
   * <p>Describes the data format when records are written to the destination. </p>
   */
  DestinationSchema: _DestinationSchema;
}

export interface _UnmarshalledOutput extends _Output {
  /**
   * <p>Identifies an Amazon Kinesis data stream as the destination.</p>
   */
  KinesisStreamsOutput?: _UnmarshalledKinesisStreamsOutput;

  /**
   * <p>Identifies an Amazon Kinesis Data Firehose delivery stream as the destination.</p>
   */
  KinesisFirehoseOutput?: _UnmarshalledKinesisFirehoseOutput;

  /**
   * <p>Identifies an AWS Lambda function as the destination.</p>
   */
  LambdaOutput?: _UnmarshalledLambdaOutput;

  /**
   * <p>Describes the data format when records are written to the destination. </p>
   */
  DestinationSchema: _UnmarshalledDestinationSchema;
}
