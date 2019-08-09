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
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p>
 */
export interface _OutputDescription {
  /**
   * <p>A unique identifier for the output configuration.</p>
   */
  OutputId?: string;

  /**
   * <p>The name of the in-application stream that is configured as output.</p>
   */
  Name?: string;

  /**
   * <p>Describes the Kinesis data stream that is configured as the destination where output is written.</p>
   */
  KinesisStreamsOutputDescription?: _KinesisStreamsOutputDescription;

  /**
   * <p>Describes the Kinesis Data Firehose delivery stream that is configured as the destination where output is written.</p>
   */
  KinesisFirehoseOutputDescription?: _KinesisFirehoseOutputDescription;

  /**
   * <p>Describes the Lambda function that is configured as the destination where output is written.</p>
   */
  LambdaOutputDescription?: _LambdaOutputDescription;

  /**
   * <p>The data format used for writing data to the destination.</p>
   */
  DestinationSchema?: _DestinationSchema;
}

export interface _UnmarshalledOutputDescription extends _OutputDescription {
  /**
   * <p>Describes the Kinesis data stream that is configured as the destination where output is written.</p>
   */
  KinesisStreamsOutputDescription?: _UnmarshalledKinesisStreamsOutputDescription;

  /**
   * <p>Describes the Kinesis Data Firehose delivery stream that is configured as the destination where output is written.</p>
   */
  KinesisFirehoseOutputDescription?: _UnmarshalledKinesisFirehoseOutputDescription;

  /**
   * <p>Describes the Lambda function that is configured as the destination where output is written.</p>
   */
  LambdaOutputDescription?: _UnmarshalledLambdaOutputDescription;

  /**
   * <p>The data format used for writing data to the destination.</p>
   */
  DestinationSchema?: _UnmarshalledDestinationSchema;
}
