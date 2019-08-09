import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForProjectOutput shape
 */
export interface ListTagsForProjectOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The tags for the project.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Reserved for future use.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
