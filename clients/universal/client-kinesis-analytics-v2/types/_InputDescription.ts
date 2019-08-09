import {
  _InputProcessingConfigurationDescription,
  _UnmarshalledInputProcessingConfigurationDescription
} from "./_InputProcessingConfigurationDescription";
import {
  _KinesisStreamsInputDescription,
  _UnmarshalledKinesisStreamsInputDescription
} from "./_KinesisStreamsInputDescription";
import {
  _KinesisFirehoseInputDescription,
  _UnmarshalledKinesisFirehoseInputDescription
} from "./_KinesisFirehoseInputDescription";
import { _SourceSchema, _UnmarshalledSourceSchema } from "./_SourceSchema";
import {
  _InputParallelism,
  _UnmarshalledInputParallelism
} from "./_InputParallelism";
import {
  _InputStartingPositionConfiguration,
  _UnmarshalledInputStartingPositionConfiguration
} from "./_InputStartingPositionConfiguration";

/**
 * <p>Describes the application input configuration for an SQL-based Amazon Kinesis Data Analytics application. </p>
 */
export interface _InputDescription {
  /**
   * <p>The input ID that is associated with the application input. This is the ID that Kinesis Data Analytics assigns to each input configuration that you add to your application. </p>
   */
  InputId?: string;

  /**
   * <p>The in-application name prefix.</p>
   */
  NamePrefix?: string;

  /**
   * <p>Returns the in-application stream names that are mapped to the stream source. </p>
   */
  InAppStreamNames?: Array<string> | Iterable<string>;

  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run. </p>
   */
  InputProcessingConfigurationDescription?: _InputProcessingConfigurationDescription;

  /**
   * <p>If a Kinesis data stream is configured as a streaming source, provides the Kinesis data stream's Amazon Resource Name (ARN). </p>
   */
  KinesisStreamsInputDescription?: _KinesisStreamsInputDescription;

  /**
   * <p>If a Kinesis Data Firehose delivery stream is configured as a streaming source, provides the delivery stream's ARN. </p>
   */
  KinesisFirehoseInputDescription?: _KinesisFirehoseInputDescription;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created. </p>
   */
  InputSchema?: _SourceSchema;

  /**
   * <p>Describes the configured parallelism (number of in-application streams mapped to the streaming source). </p>
   */
  InputParallelism?: _InputParallelism;

  /**
   * <p>The point at which the application is configured to read from the input stream.</p>
   */
  InputStartingPositionConfiguration?: _InputStartingPositionConfiguration;
}

export interface _UnmarshalledInputDescription extends _InputDescription {
  /**
   * <p>Returns the in-application stream names that are mapped to the stream source. </p>
   */
  InAppStreamNames?: Array<string>;

  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run. </p>
   */
  InputProcessingConfigurationDescription?: _UnmarshalledInputProcessingConfigurationDescription;

  /**
   * <p>If a Kinesis data stream is configured as a streaming source, provides the Kinesis data stream's Amazon Resource Name (ARN). </p>
   */
  KinesisStreamsInputDescription?: _UnmarshalledKinesisStreamsInputDescription;

  /**
   * <p>If a Kinesis Data Firehose delivery stream is configured as a streaming source, provides the delivery stream's ARN. </p>
   */
  KinesisFirehoseInputDescription?: _UnmarshalledKinesisFirehoseInputDescription;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created. </p>
   */
  InputSchema?: _UnmarshalledSourceSchema;

  /**
   * <p>Describes the configured parallelism (number of in-application streams mapped to the streaming source). </p>
   */
  InputParallelism?: _UnmarshalledInputParallelism;

  /**
   * <p>The point at which the application is configured to read from the input stream.</p>
   */
  InputStartingPositionConfiguration?: _UnmarshalledInputStartingPositionConfiguration;
}
