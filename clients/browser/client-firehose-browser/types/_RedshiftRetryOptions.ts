/**
 * <p>Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift.</p>
 */
export interface _RedshiftRetryOptions {
  /**
   * <p>The length of time during which Kinesis Data Firehose retries delivery after a failure, starting from the initial request and including the first attempt. The default value is 3600 seconds (60 minutes). Kinesis Data Firehose does not retry if the value of <code>DurationInSeconds</code> is 0 (zero) or if the first delivery attempt takes longer than the current value.</p>
   */
  DurationInSeconds?: number;
}

export type _UnmarshalledRedshiftRetryOptions = _RedshiftRetryOptions;
