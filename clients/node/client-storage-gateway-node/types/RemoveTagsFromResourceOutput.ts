import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>RemoveTagsFromResourceOutput</p>
 */
export interface RemoveTagsFromResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the tags were removed from.</p>
   */
  ResourceARN?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
