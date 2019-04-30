import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of your queues.</p>
 */
export interface ListQueuesOutput {
  /**
   * <p>A list of queue URLs, up to 1,000 entries.</p>
   */
  QueueUrls?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
