import {
  _KinesisStreamSourceDescription,
  _UnmarshalledKinesisStreamSourceDescription
} from "./_KinesisStreamSourceDescription";

/**
 * <p>Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.</p>
 */
export interface _SourceDescription {
  /**
   * <p>The <a>KinesisStreamSourceDescription</a> value for the source Kinesis data stream.</p>
   */
  KinesisStreamSourceDescription?: _KinesisStreamSourceDescription;
}

export interface _UnmarshalledSourceDescription extends _SourceDescription {
  /**
   * <p>The <a>KinesisStreamSourceDescription</a> value for the source Kinesis data stream.</p>
   */
  KinesisStreamSourceDescription?: _UnmarshalledKinesisStreamSourceDescription;
}
