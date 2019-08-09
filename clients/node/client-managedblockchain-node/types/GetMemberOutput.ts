import { _UnmarshalledMember } from "./_Member";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMemberOutput shape
 */
export interface GetMemberOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The properties of a member.</p>
   */
  Member?: _UnmarshalledMember;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
