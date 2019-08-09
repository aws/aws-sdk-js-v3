import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForResourceOutput shape
 */
export interface ListTagsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The tags for the resource.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also returned and can be used in a subsequent API call to return the next page of the list. However, the ListTagsforResource call lists all available tags in one call and does not use pagination.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
