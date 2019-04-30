import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request rate for the stream is too high, or the requested data is too large for the available throughput. Reduce the frequency or size of your requests. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>, and <a href="http://docs.aws.amazon.com/general/latest/gr/api-retries.html">Error Retries and Exponential Backoff in AWS</a> in the <i>AWS General Reference</i>.</p>
 */
export interface ProvisionedThroughputExceededException
  extends __ServiceException__<_ProvisionedThroughputExceededExceptionDetails> {
  name: "ProvisionedThroughputExceededException";
}

export interface _ProvisionedThroughputExceededExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
