import {
  _KinesisStreamsOutputDescription,
  _UnmarshalledKinesisStreamsOutputDescription
} from "./_KinesisStreamsOutputDescription";
import {
  _KinesisFirehoseOutputDescription,
  _UnmarshalledKinesisFirehoseOutputDescription
} from "./_KinesisFirehoseOutputDescription";
import {
  _LambdaOutputDescription,
  _UnmarshalledLambdaOutputDescription
} from "./_LambdaOutputDescription";
import {
  _DestinationSchema,
  _UnmarshalledDestinationSchema
} from "./_DestinationSchema";

/**
 * <p>Describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p>
 */
export interface _OutputDescription {
  /**
   * <p>A unique identifier for the output configuration.</p>
   */
  OutputId?: string;

  /**
   * <p>Name of the in-application stream configured as output.</p>
   */
  Name?: string;

  /**
   * <p>Describes Amazon Kinesis stream configured as the destination where output is written.</p>
   */
  KinesisStreamsOutputDescription?: _KinesisStreamsOutputDescription;

  /**
   * <p>Describes the Amazon Kinesis Firehose delivery stream configured as the destination where output is written.</p>
   */
  KinesisFirehoseOutputDescription?: _KinesisFirehoseOutputDescription;

  /**
   * <p>Describes the AWS Lambda function configured as the destination where output is written.</p>
   */
  LambdaOutputDescription?: _LambdaOutputDescription;

  /**
   * <p>Data format used for writing data to the destination.</p>
   */
  DestinationSchema?: _DestinationSchema;
}

export interface _UnmarshalledOutputDescription extends _OutputDescription {
  /**
   * <p>Describes Amazon Kinesis stream configured as the destination where output is written.</p>
   */
  KinesisStreamsOutputDescription?: _UnmarshalledKinesisStreamsOutputDescription;

  /**
   * <p>Describes the Amazon Kinesis Firehose delivery stream configured as the destination where output is written.</p>
   */
  KinesisFirehoseOutputDescription?: _UnmarshalledKinesisFirehoseOutputDescription;

  /**
   * <p>Describes the AWS Lambda function configured as the destination where output is written.</p>
   */
  LambdaOutputDescription?: _UnmarshalledLambdaOutputDescription;

  /**
   * <p>Data format used for writing data to the destination.</p>
   */
  DestinationSchema?: _UnmarshalledDestinationSchema;
}
