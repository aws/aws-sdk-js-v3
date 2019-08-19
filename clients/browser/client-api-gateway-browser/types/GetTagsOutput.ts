import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The collection of tags. Each tag element is associated with a given resource.</p>
 */
export interface GetTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
