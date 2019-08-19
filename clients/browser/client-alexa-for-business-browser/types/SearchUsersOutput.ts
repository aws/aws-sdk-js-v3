import { _UnmarshalledUserData } from "./_UserData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchUsersOutput shape
 */
export interface SearchUsersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The users that meet the specified set of filter criteria, in sort order.</p>
   */
  Users?: Array<_UnmarshalledUserData>;

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of users returned.</p>
   */
  TotalCount?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
