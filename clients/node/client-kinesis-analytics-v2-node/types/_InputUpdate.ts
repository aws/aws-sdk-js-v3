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
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes updates to a specific input configuration (identified by the <code>InputId</code> of an application). </p>
 */
export interface _InputUpdate {
  /**
   * <p>The input ID of the application input to be updated.</p>
   */
  InputId: string;

  /**
   * <p>The name prefix for in-application streams that Kinesis Data Analytics creates for the specific streaming source.</p>
   */
  NamePrefixUpdate?: string;

  /**
   * <p>Describes updates to an <a>InputProcessingConfiguration</a>.</p>
   */
  InputProcessingConfigurationUpdate?: _InputProcessingConfigurationUpdate;

  /**
   * <p>If a Kinesis data stream is the streaming source to be updated, provides an updated stream Amazon Resource Name (ARN).</p>
   */
  KinesisStreamsInputUpdate?: _KinesisStreamsInputUpdate;

  /**
   * <p>If a Kinesis Data Firehose delivery stream is the streaming source to be updated, provides an updated stream ARN.</p>
   */
  KinesisFirehoseInputUpdate?: _KinesisFirehoseInputUpdate;

  /**
   * <p>Describes the data format on the streaming source, and how record elements on the streaming source map to columns of the in-application stream that is created.</p>
   */
  InputSchemaUpdate?: _InputSchemaUpdate;

  /**
   * <p>Describes the parallelism updates (the number of in-application streams Kinesis Data Analytics creates for the specific streaming source).</p>
   */
  InputParallelismUpdate?: _InputParallelismUpdate;
}

export interface _UnmarshalledInputUpdate extends _InputUpdate {
  /**
   * <p>Describes updates to an <a>InputProcessingConfiguration</a>.</p>
   */
  InputProcessingConfigurationUpdate?: _UnmarshalledInputProcessingConfigurationUpdate;

  /**
   * <p>If a Kinesis data stream is the streaming source to be updated, provides an updated stream Amazon Resource Name (ARN).</p>
   */
  KinesisStreamsInputUpdate?: _UnmarshalledKinesisStreamsInputUpdate;

  /**
   * <p>If a Kinesis Data Firehose delivery stream is the streaming source to be updated, provides an updated stream ARN.</p>
   */
  KinesisFirehoseInputUpdate?: _UnmarshalledKinesisFirehoseInputUpdate;

  /**
   * <p>Describes the data format on the streaming source, and how record elements on the streaming source map to columns of the in-application stream that is created.</p>
   */
  InputSchemaUpdate?: _UnmarshalledInputSchemaUpdate;

  /**
   * <p>Describes the parallelism updates (the number of in-application streams Kinesis Data Analytics creates for the specific streaming source).</p>
   */
  InputParallelismUpdate?: _UnmarshalledInputParallelismUpdate;
}
