import {
  _InputProcessingConfigurationUpdate,
  _UnmarshalledInputProcessingConfigurationUpdate
} from "./_InputProcessingConfigurationUpdate";
import {
  _KinesisStreamsInputUpdate,
  _UnmarshalledKinesisStreamsInputUpdate
} from "./_KinesisStreamsInputUpdate";
import {
  _KinesisFirehoseInputUpdate,
  _UnmarshalledKinesisFirehoseInputUpdate
} from "./_KinesisFirehoseInputUpdate";
import {
  _InputSchemaUpdate,
  _UnmarshalledInputSchemaUpdate
} from "./_InputSchemaUpdate";
import {
  _InputParallelismUpdate,
  _UnmarshalledInputParallelismUpdate
} from "./_InputParallelismUpdate";

/**
 * <p>Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application). </p>
 */
export interface _InputUpdate {
  /**
   * <p>Input ID of the application input to be updated.</p>
   */
  InputId: string;

  /**
   * <p>Name prefix for in-application streams that Amazon Kinesis Analytics creates for the specific streaming source.</p>
   */
  NamePrefixUpdate?: string;

  /**
   * <p>Describes updates for an input processing configuration.</p>
   */
  InputProcessingConfigurationUpdate?: _InputProcessingConfigurationUpdate;

  /**
   * <p>If an Amazon Kinesis stream is the streaming source to be updated, provides an updated stream Amazon Resource Name (ARN) and IAM role ARN.</p>
   */
  KinesisStreamsInputUpdate?: _KinesisStreamsInputUpdate;

  /**
   * <p>If an Amazon Kinesis Firehose delivery stream is the streaming source to be updated, provides an updated stream ARN and IAM role ARN.</p>
   */
  KinesisFirehoseInputUpdate?: _KinesisFirehoseInputUpdate;

  /**
   * <p>Describes the data format on the streaming source, and how record elements on the streaming source map to columns of the in-application stream that is created.</p>
   */
  InputSchemaUpdate?: _InputSchemaUpdate;

  /**
   * <p>Describes the parallelism updates (the number in-application streams Amazon Kinesis Analytics creates for the specific streaming source).</p>
   */
  InputParallelismUpdate?: _InputParallelismUpdate;
}

export interface _UnmarshalledInputUpdate extends _InputUpdate {
  /**
   * <p>Describes updates for an input processing configuration.</p>
   */
  InputProcessingConfigurationUpdate?: _UnmarshalledInputProcessingConfigurationUpdate;

  /**
   * <p>If an Amazon Kinesis stream is the streaming source to be updated, provides an updated stream Amazon Resource Name (ARN) and IAM role ARN.</p>
   */
  KinesisStreamsInputUpdate?: _UnmarshalledKinesisStreamsInputUpdate;

  /**
   * <p>If an Amazon Kinesis Firehose delivery stream is the streaming source to be updated, provides an updated stream ARN and IAM role ARN.</p>
   */
  KinesisFirehoseInputUpdate?: _UnmarshalledKinesisFirehoseInputUpdate;

  /**
   * <p>Describes the data format on the streaming source, and how record elements on the streaming source map to columns of the in-application stream that is created.</p>
   */
  InputSchemaUpdate?: _UnmarshalledInputSchemaUpdate;

  /**
   * <p>Describes the parallelism updates (the number in-application streams Amazon Kinesis Analytics creates for the specific streaming source).</p>
   */
  InputParallelismUpdate?: _UnmarshalledInputParallelismUpdate;
}
