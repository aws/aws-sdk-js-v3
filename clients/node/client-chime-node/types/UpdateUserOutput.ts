import { _UnmarshalledUser } from "./_User";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateUserOutput shape
 */
export interface UpdateUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The updated user details.</p>
   */
  User?: _UnmarshalledUser;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
