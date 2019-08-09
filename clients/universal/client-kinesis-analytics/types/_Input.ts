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
 * <p>When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p>
 */
export interface _Input {
  /**
   * <p>Name prefix to use when creating an in-application stream. Suppose that you specify a prefix "MyInApplicationStream." Amazon Kinesis Analytics then creates one or more (as per the <code>InputParallelism</code> count you specified) in-application streams with names "MyInApplicationStream_001," "MyInApplicationStream_002," and so on. </p>
   */
  NamePrefix: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.</p>
   */
  InputProcessingConfiguration?: _InputProcessingConfiguration;

  /**
   * <p>If the streaming source is an Amazon Kinesis stream, identifies the stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.</p> <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>
   */
  KinesisStreamsInput?: _KinesisStreamsInput;

  /**
   * <p>If the streaming source is an Amazon Kinesis Firehose delivery stream, identifies the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.</p> <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>
   */
  KinesisFirehoseInput?: _KinesisFirehoseInput;

  /**
   * <p>Describes the number of in-application streams to create. </p> <p>Data from your source is routed to these in-application input streams.</p> <p> (see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.</p>
   */
  InputParallelism?: _InputParallelism;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.</p> <p>Also used to describe the format of the reference data source.</p>
   */
  InputSchema: _SourceSchema;
}

export interface _UnmarshalledInput extends _Input {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.</p>
   */
  InputProcessingConfiguration?: _UnmarshalledInputProcessingConfiguration;

  /**
   * <p>If the streaming source is an Amazon Kinesis stream, identifies the stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.</p> <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>
   */
  KinesisStreamsInput?: _UnmarshalledKinesisStreamsInput;

  /**
   * <p>If the streaming source is an Amazon Kinesis Firehose delivery stream, identifies the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.</p> <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>
   */
  KinesisFirehoseInput?: _UnmarshalledKinesisFirehoseInput;

  /**
   * <p>Describes the number of in-application streams to create. </p> <p>Data from your source is routed to these in-application input streams.</p> <p> (see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.</p>
   */
  InputParallelism?: _UnmarshalledInputParallelism;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.</p> <p>Also used to describe the format of the reference data source.</p>
   */
  InputSchema: _UnmarshalledSourceSchema;
}
