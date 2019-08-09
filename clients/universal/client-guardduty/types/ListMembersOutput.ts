import { _UnmarshalledMember } from "./_Member";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMembersOutput shape
 */
export interface ListMembersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of members.</p>
   */
  Members?: Array<_UnmarshalledMember>;

  /**
   * <p>Pagination parameter to be used on the next list operation to retrieve more items.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
