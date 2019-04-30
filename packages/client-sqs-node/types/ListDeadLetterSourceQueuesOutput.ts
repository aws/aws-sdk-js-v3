import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of your dead letter source queues.</p>
 */
export interface ListDeadLetterSourceQueuesOutput {
  /**
   * <p>A list of source queue URLs that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p>
   */
  queueUrls: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
