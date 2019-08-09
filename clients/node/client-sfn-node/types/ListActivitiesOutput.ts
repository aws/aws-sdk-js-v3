import { _UnmarshalledActivityListItem } from "./_ActivityListItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListActivitiesOutput shape
 */
export interface ListActivitiesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of activities.</p>
   */
  activities: Array<_UnmarshalledActivityListItem>;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
