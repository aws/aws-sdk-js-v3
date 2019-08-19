/**
 * <p>Sends information about the detector model instance and the event which triggered the action to a Kinesis Data Firehose stream.</p>
 */
export interface _FirehoseAction {
  /**
   * <p>The name of the Kinesis Data Firehose stream where the data is written.</p>
   */
  deliveryStreamName: string;

  /**
   * <p>A character separator that is used to separate records written to the Kinesis Data Firehose stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).</p>
   */
  separator?: string;
}

export type _UnmarshalledFirehoseAction = _FirehoseAction;
