/**
 * <p>Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES.</p>
 */
export interface _ElasticsearchRetryOptions {
  /**
   * <p>After an initial failure to deliver to Amazon ES, the total amount of time during which Kinesis Data Firehose retries delivery (including the first attempt). After this time has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries.</p>
   */
  DurationInSeconds?: number;
}

export type _UnmarshalledElasticsearchRetryOptions = _ElasticsearchRetryOptions;
