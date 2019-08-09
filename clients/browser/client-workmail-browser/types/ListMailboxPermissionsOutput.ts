import { _UnmarshalledPermission } from "./_Permission";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMailboxPermissionsOutput shape
 */
export interface ListMailboxPermissionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>One page of the user, group, or resource mailbox permissions.</p>
   */
  Permissions?: Array<_UnmarshalledPermission>;

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
