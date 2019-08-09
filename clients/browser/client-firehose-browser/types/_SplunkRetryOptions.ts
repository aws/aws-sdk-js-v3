/**
 * <p>Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.</p>
 */
export interface _SplunkRetryOptions {
  /**
   * <p>The total amount of time that Kinesis Data Firehose spends on retries. This duration starts after the initial attempt to send data to Splunk fails. It doesn't include the periods during which Kinesis Data Firehose waits for acknowledgment from Splunk after each attempt.</p>
   */
  DurationInSeconds?: number;
}

export type _UnmarshalledSplunkRetryOptions = _SplunkRetryOptions;
