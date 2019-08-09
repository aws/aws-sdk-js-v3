import { _UnmarshalledUserType } from "./_UserType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server to the request to create the user.</p>
 */
export interface AdminCreateUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The newly created user.</p>
   */
  User?: _UnmarshalledUserType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
