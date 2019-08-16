/**
 * <p>Represents enhanced metrics types.</p>
 */
export interface _EnhancedMetrics {
  /**
   * <p>List of shard-level metrics.</p> <p>The following are the valid shard-level metrics. The value "<code>ALL</code>" enhances every metric.</p> <ul> <li> <p> <code>IncomingBytes</code> </p> </li> <li> <p> <code>IncomingRecords</code> </p> </li> <li> <p> <code>OutgoingBytes</code> </p> </li> <li> <p> <code>OutgoingRecords</code> </p> </li> <li> <p> <code>WriteProvisionedThroughputExceeded</code> </p> </li> <li> <p> <code>ReadProvisionedThroughputExceeded</code> </p> </li> <li> <p> <code>IteratorAgeMilliseconds</code> </p> </li> <li> <p> <code>ALL</code> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/monitoring-with-cloudwatch.html">Monitoring the Amazon Kinesis Data Streams Service with Amazon CloudWatch</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p>
   */
  ShardLevelMetrics?:
    | Array<
        | "IncomingBytes"
        | "IncomingRecords"
        | "OutgoingBytes"
        | "OutgoingRecords"
        | "WriteProvisionedThroughputExceeded"
        | "ReadProvisionedThroughputExceeded"
        | "IteratorAgeMilliseconds"
        | "ALL"
        | string
      >
    | Iterable<
        | "IncomingBytes"
        | "IncomingRecords"
        | "OutgoingBytes"
        | "OutgoingRecords"
        | "WriteProvisionedThroughputExceeded"
        | "ReadProvisionedThroughputExceeded"
        | "IteratorAgeMilliseconds"
        | "ALL"
        | string
      >;
}

export interface _UnmarshalledEnhancedMetrics extends _EnhancedMetrics {
  /**
   * <p>List of shard-level metrics.</p> <p>The following are the valid shard-level metrics. The value "<code>ALL</code>" enhances every metric.</p> <ul> <li> <p> <code>IncomingBytes</code> </p> </li> <li> <p> <code>IncomingRecords</code> </p> </li> <li> <p> <code>OutgoingBytes</code> </p> </li> <li> <p> <code>OutgoingRecords</code> </p> </li> <li> <p> <code>WriteProvisionedThroughputExceeded</code> </p> </li> <li> <p> <code>ReadProvisionedThroughputExceeded</code> </p> </li> <li> <p> <code>IteratorAgeMilliseconds</code> </p> </li> <li> <p> <code>ALL</code> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/monitoring-with-cloudwatch.html">Monitoring the Amazon Kinesis Data Streams Service with Amazon CloudWatch</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p>
   */
  ShardLevelMetrics?: Array<
    | "IncomingBytes"
    | "IncomingRecords"
    | "OutgoingBytes"
    | "OutgoingRecords"
    | "WriteProvisionedThroughputExceeded"
    | "ReadProvisionedThroughputExceeded"
    | "IteratorAgeMilliseconds"
    | "ALL"
    | string
  >;
}
