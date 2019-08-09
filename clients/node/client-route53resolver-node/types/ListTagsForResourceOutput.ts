import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForResourceOutput shape
 */
export interface ListTagsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The tags that are associated with the resource that you specified in the <code>ListTagsForResource</code> request.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>If more than <code>MaxResults</code> tags match the specified criteria, you can submit another <code>ListTagsForResource</code> request to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
