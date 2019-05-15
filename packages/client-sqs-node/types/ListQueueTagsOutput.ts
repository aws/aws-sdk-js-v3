import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListQueueTagsOutput shape
 */
export interface ListQueueTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of all tags added to the specified queue.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
