import { _UnmarshalledUser } from "./_User";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListUsersOutput shape
 */
export interface ListUsersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The overview of users for an organization.</p>
   */
  Users?: Array<_UnmarshalledUser>;

  /**
   * <p> The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
