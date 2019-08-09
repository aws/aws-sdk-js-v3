import { _UnmarshalledMember } from "./_Member";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMembersOutput shape
 */
export interface ListMembersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Member details returned by the operation.</p>
   */
  Members?: Array<_UnmarshalledMember>;

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
