import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>ListTags</code> request.</p>
 */
export interface ListTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A set of key-value pairs that contain tag keys and tag values that are attached to a stack or layer.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>If a paginated request does not return all of the remaining results, this parameter is set to a token that you can assign to the request object's <code>NextToken</code> parameter to get the next set of results. If the previous paginated request returned all of the remaining results, this parameter is set to <code>null</code>. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
