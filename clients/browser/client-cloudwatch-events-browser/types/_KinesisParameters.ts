/**
 * <p>This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream so that you can control the shard that the event goes to. If you don't include this parameter, the default is to use the <code>eventId</code> as the partition key.</p>
 */
export interface _KinesisParameters {
  /**
   * <p>The JSON path to be extracted from the event and used as the partition key. For more information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html#partition-key">Amazon Kinesis Streams Key Concepts</a> in the <i>Amazon Kinesis Streams Developer Guide</i>.</p>
   */
  PartitionKeyPath: string;
}

export type _UnmarshalledKinesisParameters = _KinesisParameters;
