import {
  _KinesisStreamsOutputUpdate,
  _UnmarshalledKinesisStreamsOutputUpdate
} from "./_KinesisStreamsOutputUpdate";
import {
  _KinesisFirehoseOutputUpdate,
  _UnmarshalledKinesisFirehoseOutputUpdate
} from "./_KinesisFirehoseOutputUpdate";
import {
  _LambdaOutputUpdate,
  _UnmarshalledLambdaOutputUpdate
} from "./_LambdaOutputUpdate";
import {
  _DestinationSchema,
  _UnmarshalledDestinationSchema
} from "./_DestinationSchema";

/**
 * <p> Describes updates to the output configuration identified by the <code>OutputId</code>. </p>
 */
export interface _OutputUpdate {
  /**
   * <p>Identifies the specific output configuration that you want to update.</p>
   */
  OutputId: string;

  /**
   * <p>If you want to specify a different in-application stream for this output configuration, use this field to specify the new in-application stream name.</p>
   */
  NameUpdate?: string;

  /**
   * <p>Describes an Amazon Kinesis stream as the destination for the output.</p>
   */
  KinesisStreamsOutputUpdate?: _KinesisStreamsOutputUpdate;

  /**
   * <p>Describes an Amazon Kinesis Firehose delivery stream as the destination for the output.</p>
   */
  KinesisFirehoseOutputUpdate?: _KinesisFirehoseOutputUpdate;

  /**
   * <p>Describes an AWS Lambda function as the destination for the output.</p>
   */
  LambdaOutputUpdate?: _LambdaOutputUpdate;

  /**
   * <p>Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.</p>
   */
  DestinationSchemaUpdate?: _DestinationSchema;
}

export interface _UnmarshalledOutputUpdate extends _OutputUpdate {
  /**
   * <p>Describes an Amazon Kinesis stream as the destination for the output.</p>
   */
  KinesisStreamsOutputUpdate?: _UnmarshalledKinesisStreamsOutputUpdate;

  /**
   * <p>Describes an Amazon Kinesis Firehose delivery stream as the destination for the output.</p>
   */
  KinesisFirehoseOutputUpdate?: _UnmarshalledKinesisFirehoseOutputUpdate;

  /**
   * <p>Describes an AWS Lambda function as the destination for the output.</p>
   */
  LambdaOutputUpdate?: _UnmarshalledLambdaOutputUpdate;

  /**
   * <p>Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.</p>
   */
  DestinationSchemaUpdate?: _UnmarshalledDestinationSchema;
}
