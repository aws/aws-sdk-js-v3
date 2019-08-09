/**
 * <p>Describes the buffering to perform before delivering data to the Amazon ES destination.</p>
 */
export interface _ElasticsearchBufferingHints {
  /**
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes).</p>
   */
  IntervalInSeconds?: number;

  /**
   * <p>Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.</p> <p>We recommend setting this parameter to a value greater than the amount of data you typically ingest into the delivery stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher.</p>
   */
  SizeInMBs?: number;
}

export type _UnmarshalledElasticsearchBufferingHints = _ElasticsearchBufferingHints;
