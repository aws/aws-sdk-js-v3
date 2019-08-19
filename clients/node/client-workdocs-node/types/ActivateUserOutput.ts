import { _UnmarshalledUser } from "./_User";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ActivateUserOutput shape
 */
export interface ActivateUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user information.</p>
   */
  User?: _UnmarshalledUser;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
