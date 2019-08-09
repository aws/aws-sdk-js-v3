import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response from CreateTopic action.</p>
 */
export interface CreateTopicOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) assigned to the created topic.</p>
   */
  TopicArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
