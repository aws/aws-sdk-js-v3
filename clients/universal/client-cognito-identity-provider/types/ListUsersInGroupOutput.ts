import { _UnmarshalledUserType } from "./_UserType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListUsersInGroupOutput shape
 */
export interface ListUsersInGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The users returned in the request to list users.</p>
   */
  Users?: Array<_UnmarshalledUserType>;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
