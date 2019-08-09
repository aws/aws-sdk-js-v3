import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForStreamOutput shape
 */
export interface ListTagsForStreamOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If you specify this parameter and the result of a <code>ListTags</code> call is truncated, the response includes a token that you can use in the next request to fetch the next set of tags.</p>
   */
  NextToken?: string;

  /**
   * <p>A map of tag keys and values associated with the specified stream.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
