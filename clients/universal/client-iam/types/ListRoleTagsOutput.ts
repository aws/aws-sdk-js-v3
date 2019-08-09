import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRoleTagsOutput shape
 */
export interface ListRoleTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of tags currently that is attached to the role. Each tag consists of a key name and an associated value. If no tags are attached to the specified role, the response contains an empty list.</p>
   */
  Tags: Array<_UnmarshalledTag>;

  /**
   * <p>A flag that indicates whether there are more items to return. If your results were truncated, you can use the <code>Marker</code> request parameter to make a subsequent pagination request that retrieves more items. Note that IAM might return fewer than the <code>MaxItems</code> number of results even when more results are available. Check <code>IsTruncated</code> after every call to ensure that you receive all of your results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value to use for the <code>Marker</code> parameter in a subsequent pagination request.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
