import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDeliveryStreamInput shape
 */
export interface DescribeDeliveryStreamInput {
  /**
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string;

  /**
   * <p>The limit on the number of destinations to return. You can have one destination per delivery stream.</p>
   */
  Limit?: number;

  /**
   * <p>The ID of the destination to start returning the destination information. Kinesis Data Firehose supports one destination per delivery stream.</p>
   */
  ExclusiveStartDestinationId?: string;

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
