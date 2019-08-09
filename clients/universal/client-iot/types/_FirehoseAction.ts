/**
 * <p>Describes an action that writes data to an Amazon Kinesis Firehose stream.</p>
 */
export interface _FirehoseAction {
  /**
   * <p>The IAM role that grants access to the Amazon Kinesis Firehose stream.</p>
   */
  roleArn: string;

  /**
   * <p>The delivery stream name.</p>
   */
  deliveryStreamName: string;

  /**
   * <p>A character separator that will be used to separate records written to the Firehose stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).</p>
   */
  separator?: string;
}

export type _UnmarshalledFirehoseAction = _FirehoseAction;
