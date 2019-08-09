import { _UnmarshalledUserSummary } from "./_UserSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListUsersOutput shape
 */
export interface ListUsersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>UserSummary</code> objects that contain information about the users in your instance.</p>
   */
  UserSummaryList?: Array<_UnmarshalledUserSummary>;

  /**
   * <p>A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
