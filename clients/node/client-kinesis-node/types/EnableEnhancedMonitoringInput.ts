import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input for <a>EnableEnhancedMonitoring</a>.</p>
 */
export interface EnableEnhancedMonitoringInput {
  /**
   * <p>The name of the stream for which to enable enhanced monitoring.</p>
   */
  StreamName: string;

  /**
   * <p>List of shard-level metrics to enable.</p> <p>The following are the valid shard-level metrics. The value "<code>ALL</code>" enables every metric.</p> <ul> <li> <p> <code>IncomingBytes</code> </p> </li> <li> <p> <code>IncomingRecords</code> </p> </li> <li> <p> <code>OutgoingBytes</code> </p> </li> <li> <p> <code>OutgoingRecords</code> </p> </li> <li> <p> <code>WriteProvisionedThroughputExceeded</code> </p> </li> <li> <p> <code>ReadProvisionedThroughputExceeded</code> </p> </li> <li> <p> <code>IteratorAgeMilliseconds</code> </p> </li> <li> <p> <code>ALL</code> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/monitoring-with-cloudwatch.html">Monitoring the Amazon Kinesis Data Streams Service with Amazon CloudWatch</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p>
   */
  ShardLevelMetrics:
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

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
