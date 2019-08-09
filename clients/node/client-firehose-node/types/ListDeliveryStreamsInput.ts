import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDeliveryStreamsInput shape
 */
export interface ListDeliveryStreamsInput {
  /**
   * <p>The maximum number of delivery streams to list. The default value is 10.</p>
   */
  Limit?: number;

  /**
   * <p>The delivery stream type. This can be one of the following values:</p> <ul> <li> <p> <code>DirectPut</code>: Provider applications access the delivery stream directly.</p> </li> <li> <p> <code>KinesisStreamAsSource</code>: The delivery stream uses a Kinesis data stream as a source.</p> </li> </ul> <p>This parameter is optional. If this parameter is omitted, delivery streams of all types are returned.</p>
   */
  DeliveryStreamType?: "DirectPut" | "KinesisStreamAsSource" | string;

  /**
   * <p>The list of delivery streams returned by this call to <code>ListDeliveryStreams</code> will start with the delivery stream whose name comes alphabetically immediately after the name you specify in <code>ExclusiveStartDeliveryStreamName</code>.</p>
   */
  ExclusiveStartDeliveryStreamName?: string;

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
