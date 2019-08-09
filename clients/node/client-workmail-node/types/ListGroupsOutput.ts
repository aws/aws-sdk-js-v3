import { _UnmarshalledGroup } from "./_Group";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGroupsOutput shape
 */
export interface ListGroupsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The overview of groups for an organization.</p>
   */
  Groups?: Array<_UnmarshalledGroup>;

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
