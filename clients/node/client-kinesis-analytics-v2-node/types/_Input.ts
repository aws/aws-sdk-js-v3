import {
  _InputProcessingConfiguration,
  _UnmarshalledInputProcessingConfiguration
} from "./_InputProcessingConfiguration";
import {
  _KinesisStreamsInput,
  _UnmarshalledKinesisStreamsInput
} from "./_KinesisStreamsInput";
import {
  _KinesisFirehoseInput,
  _UnmarshalledKinesisFirehoseInput
} from "./_KinesisFirehoseInput";
import {
  _InputParallelism,
  _UnmarshalledInputParallelism
} from "./_InputParallelism";
import { _SourceSchema, _UnmarshalledSourceSchema } from "./_SourceSchema";

/**
 * <p>When you configure the application input for an SQL-based Amazon Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. </p>
 */
export interface _Input {
  /**
   * <p>The name prefix to use when creating an in-application stream. Suppose that you specify a prefix "<code>MyInApplicationStream</code>." Kinesis Data Analytics then creates one or more (as per the <code>InputParallelism</code> count you specified) in-application streams with the names "<code>MyInApplicationStream_001</code>," "<code>MyInApplicationStream_002</code>," and so on. </p>
   */
  NamePrefix: string;

  /**
   * <p>The <a>InputProcessingConfiguration</a> for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is <a>InputLambdaProcessor</a>. </p>
   */
  InputProcessingConfiguration?: _InputProcessingConfiguration;

  /**
   * <p>If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN). </p>
   */
  KinesisStreamsInput?: _KinesisStreamsInput;

  /**
   * <p>If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.</p>
   */
  KinesisFirehoseInput?: _KinesisFirehoseInput;

  /**
   * <p>Describes the number of in-application streams to create. </p>
   */
  InputParallelism?: _InputParallelism;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.</p> <p>Also used to describe the format of the reference data source.</p>
   */
  InputSchema: _SourceSchema;
}

export interface _UnmarshalledInput extends _Input {
  /**
   * <p>The <a>InputProcessingConfiguration</a> for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is <a>InputLambdaProcessor</a>. </p>
   */
  InputProcessingConfiguration?: _UnmarshalledInputProcessingConfiguration;

  /**
   * <p>If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN). </p>
   */
  KinesisStreamsInput?: _UnmarshalledKinesisStreamsInput;

  /**
   * <p>If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.</p>
   */
  KinesisFirehoseInput?: _UnmarshalledKinesisFirehoseInput;

  /**
   * <p>Describes the number of in-application streams to create. </p>
   */
  InputParallelism?: _UnmarshalledInputParallelism;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.</p> <p>Also used to describe the format of the reference data source.</p>
   */
  InputSchema: _UnmarshalledSourceSchema;
}
