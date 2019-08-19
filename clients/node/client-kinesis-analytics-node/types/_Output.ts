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
 * <p> Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p> <p/> <p>For limits on how many destinations an application can write and other limitations, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p>
 */
export interface _Output {
  /**
   * <p>Name of the in-application stream.</p>
   */
  Name: string;

  /**
   * <p>Identifies an Amazon Kinesis stream as the destination.</p>
   */
  KinesisStreamsOutput?: _KinesisStreamsOutput;

  /**
   * <p>Identifies an Amazon Kinesis Firehose delivery stream as the destination.</p>
   */
  KinesisFirehoseOutput?: _KinesisFirehoseOutput;

  /**
   * <p>Identifies an AWS Lambda function as the destination.</p>
   */
  LambdaOutput?: _LambdaOutput;

  /**
   * <p>Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.</p>
   */
  DestinationSchema: _DestinationSchema;
}

export interface _UnmarshalledOutput extends _Output {
  /**
   * <p>Identifies an Amazon Kinesis stream as the destination.</p>
   */
  KinesisStreamsOutput?: _UnmarshalledKinesisStreamsOutput;

  /**
   * <p>Identifies an Amazon Kinesis Firehose delivery stream as the destination.</p>
   */
  KinesisFirehoseOutput?: _UnmarshalledKinesisFirehoseOutput;

  /**
   * <p>Identifies an AWS Lambda function as the destination.</p>
   */
  LambdaOutput?: _UnmarshalledLambdaOutput;

  /**
   * <p>Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.</p>
   */
  DestinationSchema: _UnmarshalledDestinationSchema;
}
