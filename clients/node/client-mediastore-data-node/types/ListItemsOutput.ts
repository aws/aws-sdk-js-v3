import { _UnmarshalledItem } from "./_Item";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListItemsOutput shape
 */
export interface ListItemsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The metadata entries for the folders and objects at the requested path.</p>
   */
  Items?: Array<_UnmarshalledItem>;

  /**
   * <p>The token that can be used in a request to view the next set of results. For example, you submit a <code>ListItems</code> request that matches 2,000 items with <code>MaxResults</code> set at 500. The service returns the first batch of results (up to 500) and a <code>NextToken</code> value that can be used to fetch the next batch of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
