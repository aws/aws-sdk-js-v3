import { _UnmarshalledMember } from "./_Member";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGroupMembersOutput shape
 */
export interface ListGroupMembersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The members associated to the group.</p>
   */
  Members?: Array<_UnmarshalledMember>;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
