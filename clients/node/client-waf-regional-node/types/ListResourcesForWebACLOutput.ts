import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResourcesForWebACLOutput shape
 */
export interface ListResourcesForWebACLOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of ARNs (Amazon Resource Names) of the resources associated with the specified web ACL. An array with zero elements is returned if there are no resources associated with the web ACL.</p>
   */
  ResourceArns?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
