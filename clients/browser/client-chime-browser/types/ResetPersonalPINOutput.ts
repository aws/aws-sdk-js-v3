import { _UnmarshalledUser } from "./_User";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ResetPersonalPINOutput shape
 */
export interface ResetPersonalPINOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user details and new personal meeting PIN.</p>
   */
  User?: _UnmarshalledUser;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
